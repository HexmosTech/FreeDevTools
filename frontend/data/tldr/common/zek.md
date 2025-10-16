---
title: "Generate XML Struct - Zek | Online Free DevTools by Hexmos"
name: zek
path: "/freedevtools/tldr/common/zek/"
canonical: "https://hexmos.com/freedevtools/tldr/common/zek/"
description: "Generate Go structs from XML with Zek. Convert XML data structures into Go code. Free online tool, no registration required."
category: common
keywords:
- XML to Go struct
- Go struct generator
- XML code generator
- Convert XML to Go
- Generate struct from XML
- XML parsing Go
- Command line XML parser
- Go data structures from XML
- zek XML conversion
- XML to Go code
features:
- Generates Go structs from XML input
- Reads XML from stdin
- Writes Go struct output to stdout
- Saves Go code to a file
- Generates example Go programs from XML
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zek

> Generate a Go struct from XML.
> More information: <https://github.com/miku/zek>.

- Generate a Go struct from a given XML from `stdin` and display output on `stdout`:

`cat {{path/to/input.xml}} | zek`

- Generate a Go struct from a given XML from `stdin` and send output to a file:

`curl -s {{https://url/to/xml}} | zek -o {{path/to/output.go}}`

- Generate an example Go program from a given XML from `stdin` and send output to a file:

`cat {{path/to/input.xml}} | zek -p -o {{path/to/output.go}}`
