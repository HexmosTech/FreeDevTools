---
title: "Choose - Extract Text Columns | Online Free DevTools by Hexmos"
name: choose
path: /freedevtools/tldr/common/choose
canonical: "https://hexmos.com/freedevtools/tldr/common/choose/"
description: "Extract text columns efficiently with Choose, a human-friendly alternative to cut and awk. Quickly parse data from the command line. Free online tool, no registration required."
category: common
keywords:
- text column extraction
- command line parser
- data parsing linux
- awk alternative
- cut alternative
- field separator tool
- text processing tool
- column selector
- command line text editor
- linux text manipulation
features:
- Extract specific columns from text input
- Define custom field separators
- Specify column ranges for extraction
- Extract the first or last column
- Exclude specific columns from output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# choose

> A human-friendly and fast alternative to cut and (sometimes) awk.
> More information: <https://github.com/theryangeary/choose#usage>.

- Print the 5th item from a line (starting from 0):

`choose {{4}}`

- Print the first, 3rd, and 5th item from a line, where items are separated by ':' instead of whitespace:

`choose {{[-f|--field-separator]}} '{{:}}' {{0}} {{2}} {{4}}`

- Print everything from the 2nd to 5th item on the line, including the 5th:

`choose {{1}}:{{4}}`

- Print everything from the 2nd to 5th item on the line, excluding the 5th:

`choose {{[-x|--exclusive]}} {{1}}:{{4}}`

- Print the beginning of the line to the 3rd item:

`choose :{{2}}`

- Print all items from the beginning of the line until the 3rd item (exclusive):

`choose {{[-x|--exclusive]}} :{{2}}`

- Print all items from the 3rd to the end of the line:

`choose {{2}}:`

- Print the last item from a line:

`choose {{-1}}`
