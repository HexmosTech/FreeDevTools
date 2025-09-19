---
title: "XML Escape - Convert Special Characters | Online Free DevTools by Hexmos"
name: xml-escape
path: /freedevtools/tldr/xml/xml-escape
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-escape/"
description: "Convert special XML characters with XML Escape. Encode strings, stdin input, and sanitize data for safe XML parsing. Free online tool, no registration required."
category: common
keywords:
- XML escape online
- XML character encoder
- XML data sanitization
- Escape special XML characters
- XML text converter
- XML validation command
- Command line XML escape
- XML data encoding
- XML processing tool
- common xml escape
features:
- Escape XML special characters from strings
- Escape XML special characters from stdin
- Convert characters to their escaped equivalents
- Sanitize XML data for safe usage
- Encode characters for valid XML format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xml escape

> Escape special XML characters, e.g. `<a1>` → `&lt;a1&gt;`.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139540960>.

- Escape special XML characters in a string:

`xml {{[esc|escape]}} "{{<a1>}}"`

- Escape special XML characters from `stdin`:

`echo "{{<a1>}}" | xml {{[esc|escape]}}`

- Display help:

`xml {{[esc|escape]}} --help`
