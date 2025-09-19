---
title: "pdfattach - Add PDF Attachments | Online Free DevTools by Hexmos"
name: pdfattach
path: /freedevtools/tldr/linux/pdfattach
canonical: "https://hexmos.com/freedevtools/tldr/linux/pdfattach/"
description: "Add PDF attachments easily with pdfattach. Embed files, replace existing attachments, and manage PDF content effectively. This free online tool requires no registration."
category: linux
keywords:
  - pdf attachment command
  - pdf file manipulation
  - linux pdf utility
  - pdf embedding tool
  - file attachment command
  - pdf replacement function
  - pdf file management
  - macOS pdf command
  - command line pdf attach
  - pdf control tool
features:
  - Add new attachments to PDF files.
  - Replace existing attachments with the same name.
  - Specify input PDF file and attachment file.
  - Generate output PDF file with attachments.
  - Display help and version information for pdfattach.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pdfattach

> Add a new attachment (embedded file) to an existing PDF file.
> See also: `pdfdetach`, `pdfimages`, `pdfinfo`.
> More information: <https://manned.org/pdfattach>.

- Add a new attachment to an existing PDF file:

`pdfattach {{path/to/input.pdf}} {{path/to/file_to_attach}} {{path/to/output.pdf}}`

- Replace attachment with same name if it exists:

`pdfattach -replace {{path/to/input.pdf}} {{path/to/file_to_attach}} {{path/to/output.pdf}}`

- Display help:

`pdfattach {{[-h|--help]}}`

- Display version:

`pdfattach -v`
