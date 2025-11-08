---
title: "Issue IPP Requests - Control Printer Responses | Online Free DevTools by Hexmos"
name: ipptool
path: "/freedevtools/tldr/common/ipptool/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ipptool/"
description: "Issue IPP requests with ipptool. Control printer responses and manage print jobs. Free online tool, no registration required. Simplified printing management!"
category: common
keywords:
- ipp request tool
- printer response analyzer
- ipp protocol debugger
- cups printing commands
- linux printing utility
- ipptool command line
- printer attribute retrieval
- completed job management
- create printer subscription
- openprinting ipp
features:
- Retrieve printer attributes and values
- Manage and list completed print jobs
- Send email notifications on printer changes
- Issue Internet Printing Protocol requests
- Analyze printer's responses to IPP requests
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ipptool

> Issue IPP requests and receive printer's/server's responses.
> See also: `ippfind`, `ippeveprinter`.
> More information: <https://openprinting.github.io/cups/doc/man-ipptool.html>.

- Get all attributes and their values supported by a printer:

`ipptool ipp://{{printer_uri}} get-completed-jobs.test`

- Get the list of completed jobs of a printer:

`ipptool ipp://{{printer_uri}} get-completed-jobs.test`

- Send an email notification when a printer changes:

`ipptool -d recipient=mailto:{{email}} ipp://{{printer_uri}} create-printer-subscription.test`
