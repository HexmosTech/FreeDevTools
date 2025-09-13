---
title: "Format XML to PYX - Convert XML Documents | Free DevTools"
name: xml-pyx
path: /freedevtools/tldr/xml/xml-pyx
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-pyx/"
description: "Format XML with xml-pyx, converting documents to PYX (ESIS) format. Efficiently transform XML data using this free online tool, no registration required."
category: common
keywords:
- XML to PYX converter
- PYX format generator
- XML ESIS conversion
- XML processing tool
- Command line XML utility
- XML transformation tool
- Linux XML tool
- macOS XML tool
- Common XML converter
- XML formatter
features:
- Convert XML documents to PYX format
- Process XML from stdin
- Output PYX data to a file
- Support XMLStarlet transformation
- Display command help information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xml pyx

> Convert an XML document to PYX (ESIS - ISO 8879) format.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139550832>.

- Convert an XML document to PYX format:

`xml pyx {{path/to/input.xml|URI}} > {{path/to/output.pyx}}`

- Convert an XML document from `stdin` to PYX format:

`cat {{path/to/input.xml}} | xml pyx > {{path/to/output.pyx}}`

- Display help:

`xml pyx --help`
