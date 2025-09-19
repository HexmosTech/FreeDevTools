---
title: "Transform CSS Styles - Control with PostCSS | Online Free DevTools by Hexmos"
name: postcss
path: /freedevtools/tldr/common/postcss
canonical: "https://hexmos.com/freedevtools/tldr/common/postcss/"
description: "Transform CSS styles with PostCSS. Automate CSS processing and enhance your workflow using JavaScript plugins. Free online tool, no registration required."
category: common
keywords:
- CSS transformer
- PostCSS styles
- JS plugins
- CSS parser
- CSS syntax
- CSS file watcher
- Style linter
- CSS optimizer
- Command-line CSS tool
- Common platform CSS
features:
- Parse and transform CSS files
- Output CSS to a specific file or directory
- Watch CSS files for changes and re-transform
- Specify custom PostCSS parsers
- Specify custom PostCSS syntax
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# postcss

> Transform styles with JS plugins.
> More information: <https://postcss.org>.

- Parse and transform a CSS file:

`postcss {{path/to/file}}`

- Parse and transform a CSS file and output to a specific file:

`postcss {{path/to/file}} --output {{path/to/file}}`

- Parse and transform a CSS file and output to a specific directory:

`postcss {{path/to/file}} --dir {{path/to/directory}}`

- Parse and transform a CSS file in-place:

`postcss {{path/to/file}} --replace`

- Specify a custom PostCSS parser:

`postcss {{path/to/file}} --parser {{parser}}`

- Specify a custom PostCSS syntax:

`postcss {{path/to/file}} --syntax {{syntax}}`

- Watch for changes to a CSS file:

`postcss {{path/to/file}} --watch`

- Display help:

`postcss --help`
