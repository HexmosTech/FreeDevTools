---
title: "Generate Regex - Create Regular Expressions | Online Free DevTools by Hexmos"
name: grex
path: /freedevtools/tldr/common/grex
canonical: "https://hexmos.com/freedevtools/tldr/common/grex/"
description: "Generate regular expressions with Grex. Create complex regex patterns effortlessly. Free online tool, no registration required. Perfect for developers and sysadmins."
category: common
keywords:
- regular expression generator
- regex generator
- pattern matching tool
- regular expression creator
- regex pattern builder
- string pattern generator
- command line regex
- linux regex tool
- grex regex generator
- automate regex creation
features:
- Generate simple regular expressions
- Create case-insensitive regular expressions
- Replace digits with '\d'
- Replace Unicode word character with '\w'
- Add quantifier representation for repeating substrings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# grex

> Generate `regex`s.
> More information: <https://github.com/pemistahl/grex>.

- Generate a simple `regex`:

`grex {{space_separated_strings}}`

- Generate a case-insensitive `regex`:

`grex {{[-i|--ignore-case]}} {{space_separated_strings}}`

- Replace digits with '\d':

`grex {{[-d|--digits]}} {{space_separated_strings}}`

- Replace Unicode word character with '\w':

`grex {{[-w|--words]}} {{space_separated_strings}}`

- Replace spaces with '\s':

`grex {{[-s|--spaces]}} {{space_separated_strings}}`

- Add {min, max} quantifier representation for repeating sub-strings:

`grex {{[-r|--repetitions]}} {{space_separated_strings}}`
