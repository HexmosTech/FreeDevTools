package blog

import (
	"bytes"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"sync"

	"github.com/yuin/goldmark"
	meta "github.com/yuin/goldmark-meta"
	"github.com/yuin/goldmark/extension"
	"github.com/yuin/goldmark/parser"
)

var md = goldmark.New(
	goldmark.WithExtensions(extension.GFM, meta.Meta),
	goldmark.WithParserOptions(parser.WithAutoHeadingID()),
)

type Store struct {
	mu         sync.RWMutex
	contentDir string
	posts      []*Post
	bySlug     map[string]*Post
}

func NewStore(contentDir string) *Store {
	s := &Store{contentDir: contentDir, bySlug: map[string]*Post{}}
	_ = s.reload()
	return s
}

func slugFromFilename(name string) string {
	base := strings.TrimSuffix(filepath.Base(name), filepath.Ext(name))
	return base
}

// resolveFeatureImage turns a frontmatter feature_image path (which may be a
// relative "./cover.png" or an absolute URL) into a URL servable by the app.
// Relative paths are expected to live under public/blog/<slug>/.
func resolveFeatureImage(v, slug string) string {
	if strings.HasPrefix(v, "http://") || strings.HasPrefix(v, "https://") || strings.HasPrefix(v, "/") {
		return v
	}
	name := filepath.Base(v)
	return "/freedevtools/public/blog/" + slug + "/" + name
}

func (s *Store) reload() error {
	entries, err := os.ReadDir(s.contentDir)
	if err != nil {
		return err
	}

	posts := make([]*Post, 0, len(entries))
	bySlug := make(map[string]*Post, len(entries))

	for _, e := range entries {
		if e.IsDir() || !strings.HasSuffix(e.Name(), ".md") {
			continue
		}
		full := filepath.Join(s.contentDir, e.Name())
		raw, err := os.ReadFile(full)
		if err != nil {
			continue
		}

		ctx := parser.NewContext()
		var buf bytes.Buffer
		if err := md.Convert(raw, &buf, parser.WithContext(ctx)); err != nil {
			continue
		}

		metaData := meta.Get(ctx)
		post := &Post{
			Slug:        slugFromFilename(e.Name()),
			HTMLContent: buf.String(),
		}
		if v, ok := metaData["slug"].(string); ok && v != "" {
			post.Slug = v
		}
		if v, ok := metaData["title"].(string); ok {
			post.Title = v
		}
		if v, ok := metaData["description"].(string); ok {
			post.Description = v
		}
		if v, ok := metaData["date"].(string); ok {
			post.Date = v
		}
		if tags, ok := metaData["tags"].([]interface{}); ok {
			for _, t := range tags {
				if ts, ok := t.(string); ok {
					post.Tags = append(post.Tags, ts)
				}
			}
		}
		if v, ok := metaData["author"].(string); ok {
			post.Author = v
		} else if authors, ok := metaData["authors"].([]interface{}); ok && len(authors) > 0 {
			if a, ok := authors[0].(string); ok {
				post.Author = a
			}
		}
		if v, ok := metaData["feature_image"].(string); ok && v != "" {
			post.FeatureImage = resolveFeatureImage(v, post.Slug)
		}
		if post.Title == "" {
			post.Title = post.Slug
		}

		posts = append(posts, post)
		bySlug[post.Slug] = post
	}

	sort.Slice(posts, func(i, j int) bool {
		return posts[i].Date > posts[j].Date
	})

	s.mu.Lock()
	s.posts = posts
	s.bySlug = bySlug
	s.mu.Unlock()
	return nil
}

// Refresh re-reads the content directory. Cheap enough to call per-request
// in dev; static-generator and prod traffic call it once at startup.
func (s *Store) Refresh() {
	_ = s.reload()
}

func (s *Store) All() []*Post {
	s.mu.RLock()
	defer s.mu.RUnlock()
	out := make([]*Post, len(s.posts))
	copy(out, s.posts)
	return out
}

func (s *Store) Paginated(page, perPage int) (items []*Post, totalPages int, total int) {
	all := s.All()
	total = len(all)
	totalPages = (total + perPage - 1) / perPage
	if totalPages < 1 {
		totalPages = 1
	}
	if page < 1 {
		page = 1
	}
	start := (page - 1) * perPage
	if start >= total {
		return []*Post{}, totalPages, total
	}
	end := start + perPage
	if end > total {
		end = total
	}
	return all[start:end], totalPages, total
}

func (s *Store) GetBySlug(slug string) (*Post, bool) {
	s.mu.RLock()
	defer s.mu.RUnlock()
	p, ok := s.bySlug[slug]
	return p, ok
}

func (s *Store) SitemapSlugs() []string {
	all := s.All()
	slugs := make([]string, 0, len(all))
	for _, p := range all {
		slugs = append(slugs, p.Slug)
	}
	return slugs
}
