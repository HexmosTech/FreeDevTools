---
title: "Convert Documents - Control LibreOffice with Soffice CLI | Online Free DevTools by Hexmos"
name: soffice
path: /freedevtools/tldr/common/soffice
canonical: "https://hexmos.com/freedevtools/tldr/common/soffice/"
description: "Convert documents instantly with Soffice CLI, control LibreOffice from the command line. Automate document processing and printing. Free online tool, no registration required."
category: common
keywords:
- document conversion
- libreoffice command line
- soffice pdf conversion
- doc to pdf converter
- command line document processing
- linux document conversion
- soffice linux
- soffice print command
- headless document conversion
- soffice automation
features:
- Convert documents to various formats from the command line.
- Open files in read-only mode for secure viewing.
- Print documents using a specified printer.
- Display the content of files directly in the terminal.
- Automate document processing tasks using command-line arguments.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# soffice

> CLI for the powerful and free LibreOffice suite.
> More information: <https://help.libreoffice.org/latest/en-US/text/shared/guide/pdf_params.html>.

- Open one or more files in read-only mode:

`soffice --view {{path/to/file1 path/to/file2 ...}}`

- Display the content of one or more files:

`soffice --cat {{path/to/file1 path/to/file2 ...}}`

- Print files using a specific printer:

`soffice --pt {{printer_name}} {{path/to/file1 path/to/file2 ...}}`

- Convert all `.doc` files in the current directory to PDF:

`soffice --convert-to pdf *.doc`
