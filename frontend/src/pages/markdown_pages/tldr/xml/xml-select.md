---
title: "XML Select - Query XML Data with XPATH | Online Free DevTools by Hexmos"
name: xml-select
path: /freedevtools/tldr/xml/xml-select
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-select/"
description: "Query XML data efficiently with XML Select. Extract, count, and manipulate XML elements using XPATH expressions. Free online tool, no registration required."
category: common
keywords:
- xml select
- xml xpath query
- xml data extraction
- xml element counting
- xml data manipulation
- xmlstarlet
- command line xml tool
- xpath selector
- xml parsing linux
- xml parsing macos
features:
- Select data from XML files using XPATH expressions
- Count elements within an XML document based on XPATH criteria
- Extract specific sub-elements and their values from matched XML elements
- Output XML content as text with customizable newlines
- Process multiple XML files and aggregate results
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xml select

> Select from XML documents using XPATHs.
> Tip: use `xml elements` to display the XPATHs of an XML document.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139652416>.

- Select all elements matching "XPATH1" and print the value of their sub-element "XPATH2":

`xml {{[sel|select]}} {{[-t|--template]}} {{[-m|--match]}} "{{XPATH1}}" {{[-v|--value-of]}} "{{XPATH2}}" {{path/to/input.xml|URI}}`

- Match "XPATH1" and print the value of "XPATH2" as text with new-lines:

`xml {{[sel|select]}} {{[-T|--text]}} {{[-t|--template]}} {{[-m|--match]}} "{{XPATH1}}" {{[-v|--value-of]}} "{{XPATH2}}" {{[-n|--nl]}} {{path/to/input.xml|URI}}`

- Count the elements of "XPATH1":

`xml {{[sel|select]}} {{[-t|--template]}} {{[-v|--value-of]}} "count({{XPATH1}})" {{path/to/input.xml|URI}}`

- Count all nodes in one or more XML documents:

`xml {{[sel|select]}} {{[-T|--text]}} {{[-t|--template]}} {{[-f|--inp-name]}} {{[-o|--output]}} " " {{[-v|--value-of]}} "count(node())" {{[-n|--nl]}} {{path/to/input1.xml|URI}} {{path/to/input2.xml|URI}}`

- Display help:

`xml {{[sel|select]}} --help`
