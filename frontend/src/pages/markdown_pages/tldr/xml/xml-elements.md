---
title: "Extract XML Elements - Analyze XML Structure | Free DevTools"
name: xml-elements
path: /freedevtools/tldr/xml/xml-elements
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-elements/"
description: "Extract XML elements easily with XML Elements tool. Analyze XML structure, attributes, and values effortlessly. Free online tool, no registration required."
category: common
keywords:
- xml elements extraction
- xml structure analyzer
- xpath generation
- xml attributes extraction
- xml value extraction
- xml parsing linux
- xml processing command line
- xmlstarlet elements
- xml document structure
- common xml tasks
features:
- Extract XML elements to generate XPath expressions.
- Extract elements, attributes, and values from XML documents.
- Print sorted unique elements to reveal XML structure.
- Limit extraction depth for focused XML analysis.
- Display help information for command usage.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xml elements

> Extract elements and display the structure of an XML document.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139665568>.

- Extract elements from an XML document (producing XPATH expressions):

`xml {{[el|elements]}} {{path/to/input.xml|URI}} > {{path/to/elements.xpath}}`

- Extract elements and their attributes from an XML document:

`xml {{[el|elements]}} -a {{path/to/input.xml|URI}} > {{path/to/elements.xpath}}`

- Extract elements and their attributes and values from an XML document:

`xml {{[el|elements]}} -v {{path/to/input.xml|URI}} > {{path/to/elements.xpath}}`

- Print sorted unique elements from an XML document to see its structure:

`xml {{[el|elements]}} -u {{path/to/input.xml|URI}}`

- Print sorted unique elements from an XML document up to a depth of 3:

`xml {{[el|elements]}} -d{{3}} {{path/to/input.xml|URI}}`

- Display help:

`xml {{[el|elements]}} --help`
