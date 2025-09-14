---
title: "XML Linter - Validate & Format XML with xmllint | Free DevTools"
name: xmllint
path: /freedevtools/tldr/xml/xmllint
canonical: "https://hexmos.com/freedevtools/tldr/xml/xmllint/"
description: "Validate XML with xmllint, a powerful command-line XML linter.  Check syntax, format XML, and validate against DTDs, easily. Free online tool, no registration required."
category: common
keywords:
- XML validator
- XML linter
- XML parser
- XML formatting
- XML DTD validation
- XPath evaluator
- Command line XML tool
- XML syntax checker
- Linux XML tools
- macOS XML tools
features:
- Validate XML syntax and structure.
- Format XML for readability.
- Evaluate XPath expressions.
- Validate XML against DTD schemas.
- Parse and lint XML files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xmllint

> XML parser and linter that supports XPath, a syntax for navigating XML trees.
> More information: <https://manned.org/xmllint>.

- Return all nodes (tags) named "foo":

`xmllint --xpath "//{{foo}}" {{source_file.xml}}`

- Return the contents of the first node named "foo" as a string:

`xmllint --xpath "string(//{{foo}})" {{source_file.xml}}`

- Return the href attribute of the second anchor element in an HTML file:

`xmllint --html --xpath "string(//a[2]/@href)" webpage.xhtml`

- Return human-readable (indented) XML from file:

`xmllint --format {{source_file.xml}}`

- Check that an XML file meets the requirements of its DOCTYPE declaration:

`xmllint --valid {{source_file.xml}}`

- Validate XML against DTD schema hosted online:

`xmllint --dtdvalid {{URL}} {{source_file.xml}}`
