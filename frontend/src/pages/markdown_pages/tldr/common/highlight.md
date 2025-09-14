---
title: "Highlight Syntax - Format Code with Highlight | Free DevTools"
name: highlight
path: /freedevtools/tldr/common/highlight
canonical: "https://hexmos.com/freedevtools/tldr/common/highlight/"
description: "Format code syntax with Highlight. Generate HTML from source code and customize themes using the command line. Free online tool, no registration required."
category: common
keywords:
- syntax highlighting
- code formatter
- HTML generator
- source code highlighter
- command line formatter
- highlight themes
- highlight languages
- code to HTML
- syntax converter
- code stylesheet generator
features:
- Generate complete HTML documents from source code.
- Produce HTML fragments for embedding.
- Inline CSS styling for self-contained HTML.
- List supported languages, themes, and plugins.
- Print CSS stylesheets for customized themes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# highlight

> Outputs syntax-highlighted source code to a variety of formats.
> More information: <http://andre-simon.de/doku/highlight/en/highlight.php>.

- Produce a complete HTML document from a source code file:

`highlight {{[-o|--out-format]}} {{html}} {{[-s|--style]}} {{theme_name}} {{[-S|--syntax]}} {{language}} {{path/to/source_code}}`

- Produce an HTML fragment, suitable for inclusion in a larger document:

`highlight {{[-o|--out-format]}} {{html}} {{[-f|--fragment]}} {{[-S|--syntax]}} {{language}} {{source_file}}`

- Inline the CSS styling in every tag:

`highlight {{[-o|--out-format]}} {{html}} --inline-css {{[-S|--syntax]}} {{language}} {{source_file}}`

- List all supported languages, themes, or plugins:

`highlight --list-scripts {{langs|themes|plugins}}`

- Print a CSS stylesheet for a theme:

`highlight {{[-o|--out-format]}} {{html}} --print-style {{[-s|--style]}} {{theme_name}} {{[-S|--syntax]}} {{language}} --stdout`
