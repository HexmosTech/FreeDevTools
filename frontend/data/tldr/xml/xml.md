---
title: "XMLStarlet - Query & Transform XML Documents | Online Free DevTools by Hexmos"
name: xml
path: "/freedevtools/tldr/xml/xml/"
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml/"
description: "Transform XML documents with XMLStarlet. Query, edit, validate, and convert XML files efficiently. Free online tool, no registration required."
category: common
keywords:
- xml query
- xml edit
- xml validate
- xml transform
- xml convert
- xmlstarlet command
- xmlstarlet tutorial
- xmlstarlet examples
- xmlstarlet linux
- xml processing
features:
- Query XML documents using XPath expressions
- Edit XML documents programmatically
- Validate XML documents against a schema
- Convert XML documents to various formats
- Transform XML documents using XSLT stylesheets
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xml

> XMLStarlet Toolkit: query, edit, check, convert and transform XML documents.
> Some subcommands such as `xml validate` have their own usage documentation.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139670224>.

- Display general help, including the list of subcommands:

`xml --help`

- Execute a subcommand with input from a file or URI, printing to `stdout`:

`xml {{subcommand}} {{options}} {{path/to/input.xml|URI}}`

- Execute a subcommand using `stdin` and `stdout`:

`xml {{subcommand}} {{options}}`

- Execute a subcommand with input from a file or URI and output to a file:

`xml {{subcommand}} {{options}} {{path/to/input.xml|URI}} > {{path/to/output}}`

- Display help for a specific subcommand:

`xml {{subcommand}} --help`

- Display version:

`xml --version`
