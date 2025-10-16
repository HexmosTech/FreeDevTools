---
title: "PDF Info - Generate PDF Information | Online Free DevTools by Hexmos"
name: pdfinfo
path: "/freedevtools/tldr/common/pdfinfo/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pdfinfo/"
description: "Generate PDF information with PDF Info. Extract metadata and analyze PDF documents including version, size, and security settings. Free online tool, no registration required."
category: common
keywords:
- PDF metadata extraction
- PDF document analysis
- PDF file information viewer
- PDF security information
- PDF properties display
- command-line PDF tool
- Linux PDF info
- macOS PDF info
- Portable Document Format info
- PDF password bypass
features:
- Display PDF version and encryption status
- Extract metadata like author, title, and subject
- Determine PDF page count and page size
- Show PDF creation and modification dates
- Bypass PDF security restrictions with password
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pdfinfo

> Portable Document Format (PDF) file information viewer.
> More information: <https://www.xpdfreader.com/pdfinfo-man.html>.

- Print PDF file information:

`pdfinfo {{path/to/file.pdf}}`

- Specify user password for PDF file to bypass security restrictions:

`pdfinfo -upw {{password}} {{path/to/file.pdf}}`

- Specify owner password for PDF file to bypass security restrictions:

`pdfinfo -opw {{password}} {{path/to/file.pdf}}`
