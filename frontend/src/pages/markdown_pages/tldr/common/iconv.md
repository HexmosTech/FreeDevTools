---
title: "Convert Text Encoding - Change Encoding with iconv | Free DevTools"
name: iconv
path: /freedevtools/tldr/common/iconv
canonical: "https://hexmos.com/freedevtools/tldr/common/iconv/"
description: "Change text encoding with iconv, a powerful command-line conversion utility. Convert file formats, character sets, and more effortlessly. Free online tool, no registration required."
category: common
keywords:
- text encoding converter
- character set conversion
- file encoding change
- iconv command line
- linux encoding tools
- macos encoding tools
- text format conversion
- character encoding utility
- encoding translation tool
- utf-8 converter
features:
- Convert text files between different encodings
- Change file encoding to UTF-8
- List supported character encodings
- Output converted text to a new file
- Convert encoding based on locale settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# iconv

> Convert text from one encoding to another.
> More information: <https://manned.org/iconv>.

- Convert file to a specific encoding, and print to `stdout`:

`iconv {{[-f|--from-code]}} {{from_encoding}} {{[-t|--to-code]}} {{to_encoding}} {{input_file}}`

- Convert file to the current locale's encoding, and output to a file:

`iconv {{[-f|--from-code]}} {{from_encoding}} {{input_file}} > {{output_file}}`

- List supported encodings:

`iconv {{[-l|--list]}}`
