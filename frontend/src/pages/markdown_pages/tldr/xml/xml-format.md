---
title: "XML Format - Format XML Documents | Free DevTools"
name: xml-format
path: /freedevtools/tldr/xml/xml-format
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-format/"
description: "Format XML documents with XML Format. Clean, indent, and recover XML data with ease using this command line tool. Free online tool, no registration required."
category: common
keywords:
- XML formatting
- XML indentation
- XML recovery
- Command line XML formatter
- XML beautifier
- XMLStarlet
- XML parser
- HTML formatting
- XML to HTML conversion
- XML command line tools
features:
- Format XML documents with customizable indentation
- Recover parsable parts from malformed XML
- Remove DOCTYPE declarations from XML
- Omit XML declarations during formatting
- Support for HTML formatting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xml format

> Format an XML document.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139569312>.

- Format an XML document, indenting with tabs:

`xml {{[fo|format]}} {{[-t|--indent-tab]}} {{path/to/input.xml|URI}} > {{path/to/output.xml}}`

- Format an HTML document, indenting with 4 spaces:

`xml {{[fo|format]}} {{[-H|--html]}} {{[-s|--indent-spaces]}} {{4}} {{path/to/input.html|URI}} > {{path/to/output.html}}`

- Recover parsable parts of a malformed XML document, without indenting:

`xml {{[fo|format]}} {{[-R|--recover]}} {{[-n|--noindent]}} {{path/to/malformed.xml|URI}} > {{path/to/recovered.xml}}`

- Format an XML document from `stdin`, removing the `DOCTYPE` declaration:

`cat {{path\to\input.xml}} | xml {{[fo|format]}} {{[-D|--dropdtd]}} > {{path/to/output.xml}}`

- Format an XML document, omitting the XML declaration:

`xml {{[fo|format]}} {{[-o|--omit-decl]}} {{path\to\input.xml|URI}} > {{path/to/output.xml}}`

- Display help:

`xml {{[fo|format]}} --help`
