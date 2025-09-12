---
title: "PDF Attachments - Extract PDF Files | Free DevTools"
name: pdfdetach
path: /freedevtools/tldr/linux/pdfdetach
canonical: "https://hexmos.com/freedevtools/tldr/linux/pdfdetach/"
description: "Extract PDF attachments easily with pdfdetach. Manage embedded files and list PDF contents using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
- PDF attachment extractor
- PDF embedded file manager
- Linux PDF detach
- Extract files from PDF
- Command line PDF tool
- PDF attachment list
- pdfdetach utility
- PDF file parser
- PDF file extraction tool
- Linux command PDF
features:
- List all attachments in a PDF file
- Extract specific embedded files by number
- Extract specific embedded files by name
- Save embedded files with custom output names
- Extract attachments from password-protected PDFs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdfdetach

> List or extract attachments (embedded files) from a PDF file.
> See also: `pdfattach`, `pdfimages`, `pdfinfo`.
> More information: <https://manned.org/pdfdetach>.

- List all attachments in a file with a specific text encoding:

`pdfdetach list -enc {{UTF-8}} {{path/to/input.pdf}}`

- Save specific embedded file by specifying its number:

`pdfdetach -save {{number}} {{path/to/input.pdf}}`

- Save specific embedded file by specifying its name:

`pdfdetach -savefile {{name}} {{path/to/input.pdf}}`

- Save the embedded file with a custom output filename:

`pdfdetach -save {{number}} -o {{path/to/output}} {{path/to/input.pdf}}`

- Save the attachment from a file secured by owner/user password:

`pdfdetach -save {{number}} {{-opw|-upw}} {{password}} {{path/to/input.pdf}}`
