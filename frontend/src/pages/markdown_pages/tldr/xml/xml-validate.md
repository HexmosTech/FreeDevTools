---
title: "XML Validate - Validate XML Documents | Online Free DevTools by Hexmos"
name: xml-validate
path: /freedevtools/tldr/xml/xml-validate
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-validate/"
description: "Validate XML files with XML Validate, ensuring they are well-formed and adhere to specified schemas. Free online tool, no registration required."
category: common
keywords:
- XML validation
- XML validator
- XML DTD validation
- XML XSD validation
- XML Relax NG validation
- XML schema validation
- command line XML validation
- Linux XML validation
- macOS XML validation
- cross-platform XML validation
features:
- Validates XML documents for well-formedness
- Validates XML documents against DTD schemas
- Validates XML documents against XSD schemas
- Validates XML documents against Relax NG schemas
- Supports validation from local files and URIs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xml validate

> Validate XML documents.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139576400>.

- Validate one or more XML documents for well-formedness only:

`xml {{[val|validate]}} {{path/to/input1.xml|URI1 path/to/input2.xml|URI2 ...}}`

- Validate one or more XML documents against a Document Type Definition (DTD):

`xml {{[val|validate]}} {{[-d|--dtd]}} {{path/to/schema.dtd}} {{path/to/input1.xml|URI1 path/to/input2.xml|URI2 ...}}`

- Validate one or more XML documents against an XML Schema Definition (XSD):

`xml {{[val|validate]}} {{[-s|--xsd]}} {{path/to/schema.xsd}} {{path/to/input1.xml|URI1 path/to/input2.xml|URI2 ...}}`

- Validate one or more XML documents against a Relax NG schema (RNG):

`xml {{[val|validate]}} {{[-r|--relaxng]}} {{path/to/schema.rng}} {{path/to/input1.xml|URI1 path/to/input2.xml|URI2 ...}}`

- Display help:

`xml {{[val|validate]}} --help`
