---
title: "XMLStarlet - Format XML Documents | Free DevTools"
name: xmlstarlet
path: /freedevtools/tldr/xml/xmlstarlet
canonical: "https://hexmos.com/freedevtools/tldr/xml/xmlstarlet/"
description: "Format XML with XMLStarlet. Edit, select, and transform XML documents via command-line, offering powerful XSLT capabilities. Free online tool, no registration required."
category: common
keywords:
- xml format
- xml edit
- xml xpath
- xml xslt
- xml transform
- xml command line
- xml validator
- xml formatter
- linux xml
- macos xml
features:
- Format and print XML documents
- Select nodes based on XPath expressions
- Insert attributes into XML nodes
- Update values in XML nodes using XPath
- Delete XML nodes using XPath
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xmlstarlet

> A XML/XSLT toolkit.
> Note: You will likely need to know XPath: <https://developer.mozilla.org/en-US/docs/Web/XPath>.
> More information: <https://xmlstar.sourceforge.net/docs.php>.

- Format an XML document and print to `stdout`:

`xmlstarlet format {{path/to/file.xml}}`

- XML document can also be piped from `stdin`:

`{{cat path/to/file.xml}} | xmlstarlet format`

- Print all nodes that match a given XPath:

`xmlstarlet select --template --copy-of {{xpath}} {{path/to/file.xml}}`

- Insert an attribute to all matching nodes, and print to `stdout` (source file is unchanged):

`xmlstarlet edit --insert {{xpath}} --type attr --name {{attribute_name}} --value {{attribute_value}} {{path/to/file.xml}}`

- Update the value of all matching nodes in place (source file is changed):

`xmlstarlet edit --inplace --update {{xpath}} --value {{new_value}} {{file.xml}}`

- Delete all matching nodes in place (source file is changed):

`xmlstarlet edit --inplace --delete {{xpath}} {{file.xml}}`

- Escape or unescape special XML characters in a given string:

`xmlstarlet [un]escape {{string}}`

- List a given directory as XML (omit argument to list current directory):

`xmlstarlet ls {{path/to/directory}}`
