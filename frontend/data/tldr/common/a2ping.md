---
title: "Convert Image to PDF - a2ping | Online Free DevTools by Hexmos"
name: a2ping
path: "/freedevtools/tldr/common/a2ping/"
canonical: "https://hexmos.com/freedevtools/tldr/common/a2ping/"
description: "Convert images to PDF files with a2ping. Efficiently manage image formats for document creation and archiving. Free online tool, no registration required."
category: common
keywords:
- Image to PDF converter
- EPS to PDF converter
- Image conversion tool
- PDF compression
- Ghostscript PDF conversion
- Command line image converter
- PDF generation tool
- a2ping image conversion
- Linux image to PDF
- MacOS image to PDF
features:
- Convert images to PDF format
- Compress PDF documents using various methods
- Control HiResBoundingBox scanning
- Allow page content below the origin
- Pass arguments to Ghostscript and external programs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# a2ping

> Convert images into EPS or PDF files.
> More information: <https://manned.org/a2ping>.

- Convert an image to PDF (Note: Specifying an output filename is optional):

`a2ping {{path/to/image.ext}} {{path/to/output.pdf}}`

- Compress the document using the specified method:

`a2ping --nocompress {{none|zip|best|flate}} {{path/to/file}}`

- Scan HiResBoundingBox if present (defaults to yes):

`a2ping --nohires {{path/to/file}}`

- Allow page content below and left of the origin (defaults to no):

`a2ping --below {{path/to/file}}`

- Pass extra arguments to `gs`:

`a2ping --gsextra {{arguments}} {{path/to/file}}`

- Pass extra arguments to external program (i.e `pdftops`):

`a2ping --extra {{arguments}} {{path/to/file}}`

- Display help:

`a2ping {{[-h|--help]}}`
