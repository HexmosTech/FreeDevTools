---
title: "View Documents - Control Documents with Okular | Online Free DevTools by Hexmos"
name: okular
path: /freedevtools/tldr/common/okular
canonical: "https://hexmos.com/freedevtools/tldr/common/okular/"
description: "View documents instantly with Okular. Open, print, and search documents on the command line. Supports multiple file formats. Free online tool, no registration required."
category: common
keywords:
- document viewer
- pdf viewer
- epub viewer
- djvu viewer
- kde okular
- linux document viewer
- okular command line
- document presentation tool
- document print tool
- document search tool
features:
- Open and view multiple document formats
- Launch in presentation mode for slideshows
- Initiate print dialog directly from the command line
- Search for specific text within a document
- Open a document at a specific page number
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# okular

> View documents.
> More information: <https://docs.kde.org/stable5/en/okular/okular/command-line-options.html>.

- Launch document viewer:

`okular`

- Open specific documents:

`okular {{path/to/file1 path/to/file2 ...}}`

- Open a document at a specific page:

`okular {{[-p|--page]}} {{page_number}} {{path/to/file}}`

- Open a specific document in presentation mode:

`okular --presentation {{path/to/file}}`

- Open a specific document and start a print dialog:

`okular --print {{path/to/file}}`

- Open a document and search for a specific string:

`okular --find {{search_string}} {{path/to/file}}`
