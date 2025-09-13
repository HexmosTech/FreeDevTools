---
title: "Convert TLDR to Clip - Generate CLI Pages | Free DevTools"
name: md-to-clip
path: /freedevtools/tldr/common/md-to-clip
canonical: "https://hexmos.com/freedevtools/tldr/common/md-to-clip/"
description: "Convert TLDR pages to CLI pages with md-to-clip. Generate command-line documentation easily. Free online tool, no registration required."
category: common
keywords:
- tldr to clip converter
- cli page generator
- markdown to clip converter
- command line documentation
- tldr page converter
- cli help generator
- md to clip
- common
- linux
- macos
features:
- Converts tldr markdown files to command-line interface pages
- Saves converted files to the same directory or a specified output directory
- Converts a tldr page to stdout
- Recognizes additional placeholders from a specific configuration file
- Displays help and version information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# md-to-clip

> Convert tldr-pages to Command Line Interface Pages.
> See also: `clip-view`.
> More information: <https://github.com/command-line-interface-pages/v2-tooling/tree/main/md-to-clip>.

- Convert tldr-pages files and save into the same directories:

`md-to-clip {{path/to/page1.md path/to/page2.md ...}}`

- Convert tldr-pages files and save into a specific directory:

`md-to-clip --output-directory {{path/to/directory}} {{path/to/page1.md path/to/page2.md ...}}`

- Convert a tldr-page file to `stdout`:

`md-to-clip --no-file-save <(echo '{{page-content}}')`

- Convert tldr-pages files while recognizing additional placeholders from a specific config:

`md-to-clip --special-placeholder-config {{path/to/config.yaml}} {{path/to/page1.md path/to/page2.md ...}}`

- Display help:

`md-to-clip --help`

- Display version:

`md-to-clip --version`
