---
title: "Strings Extractor - Find Text Strings | Online Free DevTools by Hexmos"
name: strings
path: "/freedevtools/tldr/st/strings/"
canonical: "https://hexmos.com/freedevtools/tldr/st/strings/"
description: "Extract text strings with Strings. Analyze binary files and identify readable text sequences. Free online tool, no registration required."
category: common
keywords:
- binary string extraction
- object file strings
- text string identifier
- strings command linux
- strings command macOS
- strings command unix
- strings command windows
- executable string finder
- printable string search
- data string analyzer
features:
- Extract printable strings from binary files
- Limit string length for targeted results
- Display string offsets within the file
- Support hexadecimal and decimal offsets
- Analyze object files for text content
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# strings

> Find printable strings in an object file or binary.
> More information: <https://manned.org/strings>.

- Print all strings in a binary:

`strings {{path/to/file}}`

- Limit results to strings at least n characters long:

`strings {{[-n|--bytes]}} {{n}} {{path/to/file}}`

- Prefix each result with its offset within the file:

`strings {{[-t|--radix]}} d {{path/to/file}}`

- Prefix each result with its offset within the file in hexadecimal:

`strings {{[-t|--radix]}} x {{path/to/file}}`
