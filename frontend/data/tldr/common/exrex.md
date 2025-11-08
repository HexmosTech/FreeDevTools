---
title: "Generate Regex Strings - Exrex | Online Free DevTools by Hexmos"
name: exrex
path: "/freedevtools/tldr/common/exrex/"
canonical: "https://hexmos.com/freedevtools/tldr/common/exrex/"
description: "Generate regular expression strings with Exrex. Create random regex patterns, simplify complex expressions, and count matching string combinations. Free online tool, no registration required."
category: common
keywords:
- regex string generator
- generate regex pattern
- regular expression string
- exrex regex tool
- command line regex generator
- simplify regex expressions
- regex string count
- linux regex generator
- macos regex generator
- terminal regex tool
features:
- Generate all matching strings for a regular expression.
- Generate random strings that match a regular expression.
- Limit the maximum number of strings generated.
- Join generated strings with a custom delimiter.
- Count the number of possible matching strings.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# exrex

> Generate all/random matching strings for a `regex`.
> It can also simplify `regex`es.
> More information: <https://github.com/asciimoo/exrex>.

- Generate all possible strings that match a `regex`:

`exrex '{{regex}}'`

- Generate a random string that matches a `regex`:

`exrex {{[-r|--random]}} '{{regex}}'`

- Generate at most 100 strings that match a `regex`:

`exrex {{[-m|--max-number]}} {{100}} '{{regex}}'`

- Generate all possible strings that match a `regex`, joined by a custom delimiter string:

`exrex {{[-d|--delimiter]}} "{{, }}" '{{regex}}'`

- Print count of all possible strings that match a `regex`:

`exrex {{[-c|--count]}} '{{regex}}'`

- Simplify a `regex`:

`exrex {{[-s|--simplify]}} '{{ab|ac}}'`

- Print eyes:

`exrex '{{[oO0](_)[oO0]}}'`

- Print a boat:

`exrex '{{( {20}(\| *\\|-{22}|\|)|\.={50}| ( ){0,5}\\\.| {12}~{39})}}'`
