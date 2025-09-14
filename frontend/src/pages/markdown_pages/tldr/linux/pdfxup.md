---
title: "Create PDF N-up Layouts - pdfxup | Free DevTools"
name: pdfxup
path: /freedevtools/tldr/linux/pdfxup
canonical: "https://hexmos.com/freedevtools/tldr/linux/pdfxup/"
description: "Create PDF n-up layouts with pdfxup. Arrange multiple PDF pages onto a single page for printing or presentation. Free online tool, no registration required."
category: linux
keywords:
- pdf n-up layout
- pdf page arranger
- linux pdf tools
- pdf booklet maker
- pdf page scaling
- pdf page rotation
- command line pdf
- pdf grid layout
- pdf multi-page layout
- pdf printing tool
features:
- Create 2-up or N-up PDF layouts
- Arrange pages in booklet mode for printing
- Specify number of columns and rows in the grid
- Scale and rotate pages to fit the layout
- Output to a new PDF file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdfxup

> N-up PDF pages.
> N-upping means putting multiple pages onto one page by scaling and rotating them into a grid.
> More information: <https://ctan.org/pkg/pdfxup>.

- Create a 2-up PDF:

`pdfxup {{[-o|--output]}} {{path/to/output.pdf}} {{path/to/input.pdf}}`

- Create a PDF with 3 columns and 2 lines per page:

`pdfxup {{[-x|--columns]}} {{3}} {{[-y|--rows]}} {{2}} {{[-o|--output]}} {{path/to/output.pdf}} {{path/to/input.pdf}}`

- Create a PDF in booklet mode (2-up, and pages are sorted to form a book when folded):

`pdfxup {{[-b|--booklet]}} {{[-o|--output]}} {{path/to/output.pdf}} {{path/to/input.pdf}}`
