---
title: "Rewrite Code - Structure Search and Replace with Comby | Online Free DevTools by Hexmos"
name: comby
path: "/freedevtools/tldr/common/comby/"
canonical: "https://hexmos.com/freedevtools/tldr/common/comby/"
description: "Rewrite code structurally with Comby. Search and replace code patterns across multiple languages efficiently. Free online tool, no registration required."
category: common
keywords:
- structural code search
- code search and replace
- comby code rewrite
- pattern matching tool
- code refactoring tool
- semantic code search
- code transformation tool
- cross-language code search
- comby linux
- comby macos
features:
- Match and rewrite code templates
- Rewrite with rewrite properties
- Perform in-place code modifications
- Print matches without rewriting
- Support multiple programming languages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# comby

> Tool for structural code search and replace that supports many languages.
> More information: <https://github.com/comby-tools/comby>.

- Match and rewrite templates, and print changes:

`comby '{{assert_eq!(:[a], :[b])}}' '{{assert_eq!(:[b], :[a])}}' {{.rs}}`

- Match and rewrite with rewrite properties:

`comby '{{assert_eq!(:[a], :[b])}}' '{{assert_eq!(:[b].Capitalize, :[a])}}' {{.rs}}`

- Match and rewrite in-place:

`comby -in-place '{{match_pattern}}' '{{rewrite_pattern}}'`

- Only perform matching and print matches:

`comby -match-only '{{match_pattern}}' ""`
