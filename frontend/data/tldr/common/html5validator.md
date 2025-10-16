---
title: "HTML5 Validator - Validate HTML5 Code | Online Free DevTools by Hexmos"
name: html5validator
path: "/freedevtools/tldr/common/html5validator/"
canonical: "https://hexmos.com/freedevtools/tldr/common/html5validator/"
description: "Validate HTML5 code with html5validator. Find errors and improve code quality. Quick validation with directory support and custom output formats. Free online tool, no registration required."
category: common
keywords:
- HTML5 validation
- HTML validator
- validate HTML5 code
- HTML5 syntax checker
- lint HTML5
- web development validation
- HTML error checker
- cross-platform HTML validator
- command-line HTML5 validator
- HTML5 code quality
features:
- Validate single HTML5 files.
- Validate all HTML5 files in a directory.
- Display warnings alongside errors.
- Match multiple files using glob patterns.
- Output results in GNU, XML, JSON, or text formats.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# html5validator

> Validate HTML5.
> More information: <https://github.com/svenkreiss/html5validator>.

- Validate a specific file:

`html5validator {{path/to/file}}`

- Validate all HTML files in a specific directory:

`html5validator --root {{path/to/directory}}`

- Show warnings as well as errors:

`html5validator --show-warnings {{path/to/file}}`

- Match multiple files using a glob pattern:

`html5validator --root {{path/to/directory}} --match "{{*.html *.php}}"`

- Ignore specific directory names:

`html5validator --root {{path/to/directory}} --blacklist "{{node_modules vendor}}"`

- Output the results in a specific format:

`html5validator --format {{gnu|xml|json|text}} {{path/to/file}}`

- Output the log at a specific verbosity level:

`html5validator --root {{path/to/directory}} --log {{debug|info|warning}}`
