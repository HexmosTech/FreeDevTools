# Sitemap Indexability Checker

This script scans all URLs listed in a sitemap, checks their indexability signals, and generates a structured PDF report with the results.

---

## Features

- Supports both `urlset` and `sitemapindex` sitemap formats
- Concurrent URL processing (configurable for speed)
- Detects:
  - HTTP status codes (200 / 3xx / 4xx / 5xx)
  - Redirects
  - `noindex` meta tags
  - Canonical tag mismatches or invalid targets
  - Soft 404s (based on page content length or error indicators)
- Generates a color-coded PDF report:
  - Summary stats
  - Full table of URLs and issues

---

## Installation

Requires **Node.js (v16+)**.

Install dependencies:

```bash
npm install axios cheerio xml2js pdfkit p-limit@3
```

---

## Usage

```bash
node sitemap-checker.cjs <sitemap-url> [concurrency]
```

Example:

```bash
node sitemap-checker.cjs https://example.com/sitemap.xml 30
```

- `<sitemap-url>` → Required
- `[concurrency]` → Optional (defaults to 20)

---

## Output

A PDF will be saved in the current directory, named based on the provided sitemap URL:

```
sitemap_report-example-com-sitemap.pdf
```

### Summary Example

| Metric                 | Count | Percentage |
| ---------------------- | ----- | ---------- |
| Total URLs tested      | 150   | 100%       |
| Passed (indexable)     | 112   | 74.67%     |
| Failed (non-indexable) | 38    | 25.33%     |

### URL Details Table

| URL                                                    | Status | Indexable | Issues          |
| ------------------------------------------------------ | ------ | --------- | --------------- |
| [https://example.com/page1](https://example.com/page1) | 200    | Yes       |                 |
| [https://example.com/page2](https://example.com/page2) | 404    | No        | Not found (404) |

---

## Detection Logic

| Check Type  | Criteria                                                                  |
| ----------- | ------------------------------------------------------------------------- |
| HTTP Errors | 404 / 5xx → marked non-indexable                                          |
| Redirects   | 301 / 302 / 307 / 308 → logged with target                                |
| Meta Robots | `<meta name="robots" content="noindex">` → disables indexability          |
| Canonical   | Validates if canonical exists and returns 200                             |
| Soft 404    | Triggered when body content is too short or contains “Not Found” messages |

---

# Cluster Similarity checker

This script compares metadata of PNG files against existing clusters and computes similarity scores using TF-IDF and cosine similarity.

---

### Features

- Reads two JSON files:
  - `cluster1.json` — existing clusters with metadata
  - `cluster2.json` — cluster file to compare with

- Flattens metadata fields (`title`, `description`, `keywords`, `tags`, `synonyms`, `usecases`, `emotional_cues`) into a single string
- Uses **TF-IDF vectorization** to represent text
- Computes **cosine similarity** between the clusters
- Outputs a JSON file with:
  - Most similar cluster for each PNG
  - Similarity percentage
  - Notes (e.g., missing metadata)

---

### Installation

Requires Python 3 and the following packages:

```bash
pip install scikit-learn tqdm numpy
```

---

### Usage

```bash
python compute_similarity_clusters.py
```

Input files:

- `cluster.json`
- `cluster_output_png.json`

Output:

- `cluster_similarity.json` — contains similarity results for each PNG file.

---

### Sample Output

```json
{
  "clusterId/fileName.png": {
    "most_similar_cluster": "clusterId/fileName",
    "similarity_percentage": 87.45,
    "note": "ok"
  }
}
```

---

# Web Page Similarity Checker

This script compares the visible text content of two web pages and computes a similarity percentage using TF-IDF and cosine similarity.

---

### Features

- Fetches and cleans HTML content from two URLs
  - Removes `<script>`, `<style>`, and `<noscript>` tags
  - Normalizes whitespace and extracts visible text

- Computes similarity using:
  - TF-IDF vectorization
  - Cosine similarity

- Outputs a **similarity percentage** between the two pages

---

### Installation

Requires Python 3 and the following packages:

```bash
pip install requests beautifulsoup4 scikit-learn
```

---

### Usage

```bash
python compute_page_similarity.py <url1> <url2>
```

Example:

```bash
python compute_page_similarity.py https://example.com/page1 https://example.com/page2
```

Output:

```
Similarity between pages: 76.42%
```

---

### Detection Logic

1. Fetch HTML content from both URLs.
2. Clean the HTML by removing scripts, styles, and extra whitespace.
3. Transform the text content into TF-IDF vectors.
4. Compute cosine similarity between the two vectors.
5. Return similarity as a percentage (0–100%).

---

### Notes

- Pages with empty or inaccessible content are treated as 0% similar.
- Only visible text is considered; images, CSS, or JavaScript content is ignored.
- Useful for detecting near-duplicate or very similar pages before SEO indexing.
