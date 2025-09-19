---
title: "Chars - Display Unicode Characters | Online Free DevTools by Hexmos"
name: chars
path: "/freedevtools/tldr/common/chars"
canonical: "https://hexmos.com/freedevtools/tldr/common/chars/"
description: "Display Unicode characters with Chars. Find character names and codes for ASCII and Unicode. Free online tool, no registration required."
category: common
keywords:
- unicode character lookup
- ascii character code
- character code point finder
- unicode character display
- character name retrieval
- control character search
- linux character map
- macos character codes
- command line character tool
- chars command
features:
- Look up characters by value
- Find character by Unicode code point
- Resolve ambiguous code points
- Display control characters
- Show character names and codes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chars

> Display names and codes for various ASCII and Unicode characters and code points.
> More information: <https://github.com/boinkor-net/chars#running>.

- Look up a character by its value:

`chars '{{ß}}'`

- Look up a character by its Unicode code point:

`chars {{U+1F63C}}`

- Look up possible characters given an ambiguous code point:

`chars {{10}}`

- Look up a control character:

`chars "{{^C}}"`
