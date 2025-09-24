---
title: "XML Transform - Transform XML with XSLT | Online Free DevTools by Hexmos"
name: xml-transform
path: /freedevtools/tldr/xml/xml-transform
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-transform/"
description: "Transform XML documents with XML Transform using XSLT stylesheets.  Apply complex transformations and extract data. Free online tool, no registration required."
category: common
keywords:
- xml transform xslt
- xslt transformation tool
- xml stylesheet transformation
- xml transformation command line
- xslt processor online
- xml formatting xslt
- xml transform linux
- xml transform macos
- xml transform windows
- xslt xml parser
features:
- Transform XML documents using XSLT stylesheets.
- Pass XPath parameters to XSLT transformations.
- Apply literal string parameters to XSLT transformations.
- Transform XML from local files or URIs.
- Display help information for the xml transform command.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xml transform

> Transform XML documents using XSLT.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139602800>.

- Transform an XML document using an XSL stylesheet, passing one XPATH parameter and one literal string parameter:

`xml {{[tr|transform]}} {{path/to/stylesheet.xsl}} -p "{{Count='count(/xml/table/rec)'}}" -s {{Text="Count="}} {{path/to/input.xml|URI}}`

- Display help:

`xml {{[tr|transform]}} --help`
