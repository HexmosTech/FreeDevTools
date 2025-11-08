---
title: "XML Unescape - Convert Special XML Characters | Online Free DevTools by Hexmos"
name: xml-unescape
path: "/freedevtools/tldr/xml/xml-unescape/"
canonical: "https://hexmos.com/freedevtools/tldr/xml/xml-unescape/"
description: "Unescape XML characters with XML Unescape tool. Convert encoded XML entities to readable text with this simple command. Free online tool, no registration required."
category: common
keywords:
- xml unescape online
- xml entity decoder
- xml character converter
- xml special characters
- linux xml unescape
- macos xml unescape
- command line xml tools
- unescape xml string
- xml decode text
- xml decode entities
features:
- Unescape XML entities from strings.
- Convert encoded XML characters to plain text.
- Process XML unescaping directly from stdin.
- Support common XML escape sequences like &lt; &gt; &amp; &quot; &apos;.
- Display help documentation for usage instructions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xml unescape

> Unescape special XML characters, e.g. `&lt;a1&gt;` → `<a1>`.
> More information: <https://xmlstar.sourceforge.net/doc/UG/xmlstarlet-ug.html#idm47077139540960>.

- Unescape special XML characters from a string:

`xml {{[unesc|unescape]}} "{{&lt;a1&gt;}}"`

- Unescape special XML characters from `stdin`:

`echo "{{&lt;a1&gt;}}" | xml {{[unesc|unescape]}}`

- Display help:

`xml {{[esc|escape]}} --help`
