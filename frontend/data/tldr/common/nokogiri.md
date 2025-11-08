---
title: "Nokogiri Parser - Parse XML and HTML | Online Free DevTools by Hexmos"
name: nokogiri
path: "/freedevtools/tldr/common/nokogiri/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nokogiri/"
description: "Parse XML and HTML documents with Nokogiri Parser. Validate XML, parse HTML, and handle SAX events with this versatile tool. Free online tool, no registration required."
category: common
keywords:
- XML parser
- HTML parser
- SAX parser
- RELAX NG validator
- Nokogiri XML
- Nokogiri HTML
- Document parser
- XML validator
- HTML validator
- Command line parser
features:
- Parse XML and HTML documents from URLs or files
- Validate XML documents against RELAX NG schemas
- Specify encoding for parsing documents
- Parse documents as either XML or HTML
- Load initialization files before parsing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nokogiri

> An HTML, XML, SAX and Reader parser.
> More information: <https://manned.org/nokogiri>.

- Parse the contents of a URL or file:

`nokogiri {{url|path/to/file}}`

- Parse as a specific type:

`nokogiri {{url|path/to/file}} --type {{xml|html}}`

- Load a specific initialization file before parsing:

`nokogiri {{url|path/to/file}} -C {{path/to/config_file}}`

- Parse using a specific encoding:

`nokogiri {{url|path/to/file}} {{[-E|--encoding]}} {{encoding}}`

- Validate using a RELAX NG file:

`nokogiri {{url|path/to/file}} --rng {{url|path/to/file}}`
