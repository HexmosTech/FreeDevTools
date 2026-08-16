// Package blog reads and renders blog posts from markdown files on disk.
package blog

type Post struct {
	Slug         string
	Title        string
	Description  string
	Date         string
	Tags         []string
	Author       string
	FeatureImage string
	HTMLContent  string
}
