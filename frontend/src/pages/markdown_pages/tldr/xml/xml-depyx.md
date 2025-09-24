---
title: "Convert PYX to XML - Format PYX Documents | Online Free DevTools by Hexmos"
name: xml-depyx
path: /freedevtools/tldr/xml/xml-depyx
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-depyx/"
description: "Format PYX documents with xml-depyx. Convert ESIS (ISO 8879) PYX data to XML easily. Free online tool, no registration required."
category: common
keywords:
- PYX to XML converter
- XML formatter
- ESIS to XML conversion
- PYX file converter
- XML transformation tool
- Command line XML tool
- ISO 8879 converter
- Linux XML tools
- MacOS XML tools
- PYX XML conversion
features:
- Convert PYX documents to XML format
- Process PYX input from stdin
- Output XML to stdout
- Support ESIS (ISO 8879) standard
- Provide help documentation for usage
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xml depyx

> Convert a PYX (ESIS - ISO 8879) document to XML format.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139550832>.

- Convert a PYX (ESIS - ISO 8879) document to XML format:

`xml {{[p2x|depyx]}} {{path/to/input.pyx|URI}} > {{path/to/output.xml}}`

- Convert a PYX document from `stdin` to XML format:

`cat {{path/to/input.pyx}} | xml {{[p2x|depyx]}} > {{path/to/output.xml}}`

- Display help:

`xml {{[p2x|depyx]}} --help`
