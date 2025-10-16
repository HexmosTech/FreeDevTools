---
title: "IPP Find - Discover IPP Printers | Online Free DevTools by Hexmos"
name: ippfind
path: "/freedevtools/tldr/common/ippfind/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ippfind/"
description: "Discover IPP printers on your network with IPP Find. Locate printers, send test documents, and manage printing jobs. Free online tool, no registration required."
category: common
keywords:
- ipp printer discovery
- network printer search
- dns printer lookup
- ipp service discovery
- print job management
- cups printing system
- postscript printer finder
- printer status retrieval
- linux printer tools
- command line printer utility
features:
- Discover IPP printers on a network
- Send PostScript documents to network printers
- Execute commands on discovered printers
- Filter printers based on a regular expression
- Retrieve printer status information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ippfind

> Find services registered with a DNS server or available through local devices.
> See also: `ipptool`, `ippeveprinter`.
> More information: <https://openprinting.github.io/cups/doc/man-ippfind.html>.

- List IPP printers registered on the network with their status:

`ippfind {{[-l|--ls]}}`

- Send a specific PostScript document to every PostScript printer on the network:

`ippfind --txt-pdl application/postscript {{[-x|--exec]}} ipptool -f {{path/to/document.ps}} '{}' print-job.test \;`

- Send a PostScript test document to every PostScript printer on the network:

`ippfind --txt-pdl application/postscript {{[-x|--exec]}} ipptool -f onepage-letter.ps '{}' print-job.test \;`

- Send a PostScript test document to every PostScript printer on the network, whose name matches a `regex`:

`ippfind --txt-pdl application/postscript {{[-h|--host]}} {{regex}} {{[-x|--exec]}} ipptool -f onepage-letter.ps '{}' print-job.test \;`
