---
title: "XML Canonicalize - Format XML Documents | Free DevTools"
name: xml-canonic
path: /freedevtools/tldr/common/xml-canonic
canonical: "https://hexmos.com/freedevtools/tldr/common/xml-canonic/"
description: "Format XML documents using XML Canonicalize with precise control over comments. Transform XML into canonical form quickly with this free online tool, no registration required."
category: common
keywords:
- xml canonicalize
- xml format
- xml c14n
- xml canonicalization
- xml canonicalize online
- xml canonicalize linux
- xml canonicalize command line
- xmlstarlet xml canonicalize
- xml format tool
- canonical xml transformation
features:
- Convert XML documents to canonical form
- Preserve or remove comments during canonicalization
- Support exclusive XML canonicalization using XPATH
- Canonicalize XML documents from URIs
- Provide help documentation for the command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xml canonic

> Make XML documents canonical.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139560880>.

- Make an XML document canonical, preserving comments:

`xml {{[c14n|canonic]}} {{path/to/input.xml|URI}} > {{path/to/output.xml}}`

- Make an XML document canonical, removing comments:

`xml {{[c14n|canonic]}} --without-comments {{path/to/input.xml|URI}} > {{path/to/output.xml}}`

- Make XML exclusively canonical, using an XPATH from a file, preserving comments:

`xml {{[c14n|canonic]}} --exc-with-comments {{path/to/input.xml|URI}} {{path/to/c14n.xpath}}`

- Display help:

`xml {{[c14n|canonic]}} --help`
