---
title: "PDF Merge - Create PDF Documents with Pdfjam | Free DevTools"
name: pdfjam
path: /freedevtools/tldr/common/pdfjam
canonical: "https://hexmos.com/freedevtools/tldr/common/pdfjam/"
description: "Create PDF documents with Pdfjam. Easily merge, arrange, and manipulate PDF files from the command line. Free online tool, no registration required."
category: common
keywords:
- pdf merge
- pdf concatenation
- pdf manipulation
- pdf arrangement
- pdf page extraction
- pdf overlay
- latex pdfpages
- pdf command line
- pdf utility
- pdf printing
features:
- Merge multiple PDF documents into a single file
- Extract specific pages or page ranges from PDFs
- Overlay scanned signatures onto PDF documents
- Arrange PDF pages into custom grids (e.g., 2x2)
- Reverse the order of pages within PDF files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdfjam

> Shell frontend for the LaTeX pdfpages package for mingling PDFs.
> More information: <https://github.com/pdfjam/pdfjam/blob/master/doc/pdfjam-help.txt>.

- Merge two (or more) PDFs:

`pdfjam {{path/to/file1.pdf path/to/file2.pdf ...}} {{[-o|--outfile]}} {{path/to/output_file.pdf}}`

- Merge the first page of each file together:

`pdfjam {{path/to/file1.pdf 1 path/to/file2.pdf 1 ...}} {{[-o|--outfile]}} {{path/to/output_file.pdf}}`

- Merge subranges from two PDFs:

`pdfjam {{path/to/file1.pdf 3-5,1}} {{path/to/file2.pdf 4-6}} {{[-o|--outfile]}} {{path/to/output_file.pdf}}`

- Sign an A4 page (adjust delta to height for other formats) with a scanned signature by overlaying them:

`pdfjam {{path/to/file.pdf}} {{path/to/signature}} --fitpaper true {{[-o|--outfile]}} {{path/to/signed.pdf}} --nup "{{1x2}}" --delta "{{0 -842pt}}"`

- Arrange the pages from the input file into a fancy 2x2 grid:

`pdfjam {{path/to/file.pdf}} --nup {{2x2}} --suffix {{4up}} --preamble '{{\usepackage{fancyhdr} \pagestyle{fancy}}}'`

- Reverse the order of pages within each given file and concatenate them:

`pdfjam {{path/to/file1.pdf last-1 path/to/file2.pdf last-1 ...}} --suffix {{reversed}}`
