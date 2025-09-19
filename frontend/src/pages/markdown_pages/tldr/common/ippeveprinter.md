---
title: "Control IPP Printer - Simple Server | Online Free DevTools by Hexmos"
name: ippeveprinter
path: /freedevtools/tldr/common/ippeveprinter
canonical: "https://hexmos.com/freedevtools/tldr/common/ippeveprinter/"
description: "Control IPP Everywhere printers with ippeveprinter. Create a simple IPP server, manage print jobs, and customize printer attributes. Free online tool, no registration required."
category: common
keywords:
- IPP printer server
- IPP print management
- IPP Everywhere printer
- CUPS printer server
- Linux printer setup
- macOS printer server
- PPD file printing
- Print spool directory
- Command line printing
- Network printer server
features:
- Start a simple IPP Everywhere printer server
- Load printer attributes from a PPD file
- Execute commands upon receiving a print job
- Customize the print spool directory
- Specify printer speed in pages per minute
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ippeveprinter

> A simple IPP Everywhere printer server.
> See also: `ippeveps`, `ippevepcl`.
> More information: <https://openprinting.github.io/cups/doc/man-ippeveprinter.html>.

- Run the server with a specific service name:

`ippeveprinter "{{service_name}}"`

- Load printer attributes from a PPD file:

`ippeveprinter -P {{path/to/file.ppd}} "{{service_name}}"`

- Run the `file` command whenever a job is sent to the server:

`ippeveprinter -c {{/usr/bin/file}} "{{service_name}}"`

- Specify the directory that will hold the print files (by default, a directory under the user's temporary directory):

`ippeveprinter -d {{spool_directory}} "{{service_name}}"`

- Keep the print documents in the spool directory rather than deleting them:

`ippeveprinter -k "{{service_name}}"`

- Specify the printer speed in pages/minute unit (10 by default):

`ippeveprinter -s {{speed}} "{{service_name}}"`
