---
title: "Convert PDF to Image - Using pdftocairo | Online Free DevTools by Hexmos"
name: pdftocairo
path: /freedevtools/tldr/common/pdftocairo
canonical: "https://hexmos.com/freedevtools/tldr/common/pdftocairo/"
description: "Convert PDF files with pdftocairo, a powerful PDF converter tool. Change PDF to JPEG, PNG, SVG and more. Free online tool, no registration required."
category: common
keywords:
- PDF to JPEG converter
- PDF to PNG converter
- PDF to SVG converter
- PDF file converter
- PDF to image conversion
- Command line PDF tool
- PDF conversion utility
- Linux PDF converter
- macOS PDF converter
- Convert PDF to TIFF
features:
- Convert PDF to various image formats (PNG, JPEG, TIFF, SVG)
- Specify page range for conversion
- Control output resolution (DPI)
- Set paper size for PDF conversion
- Crop output images by specifying x and y coordinates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdftocairo

> Convert PDF files to PNG/JPEG/TIFF/PDF/PS/EPS/SVG using cairo.
> More information: <https://manned.org/pdftocairo>.

- Convert a PDF file to JPEG:

`pdftocairo {{path/to/file.pdf}} -jpeg`

- Convert to PDF expanding the output to fill the paper:

`pdftocairo {{path/to/file.pdf}} {{output.pdf}} -pdf -expand`

- Convert to SVG specifying the first/last page to convert:

`pdftocairo {{path/to/file.pdf}} {{output.svg}} -svg -f {{first_page}} -l {{last_page}}`

- Convert to PNG with 200ppi resolution:

`pdftocairo {{path/to/file.pdf}} {{output.png}} -png -r 200`

- Convert to grayscale TIFF setting paper size to A3:

`pdftocairo {{path/to/file.pdf}} -tiff -gray -paper A3`

- Convert to PNG cropping x and y pixels from the top-left corner:

`pdftocairo {{path/to/file.pdf}} -png -x {{x_pixels}} -y {{y_pixels}}`
