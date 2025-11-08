---
title: "Structural Search - Rewrite Code with Ast-grep | Online Free DevTools by Hexmos"
name: sg
path: "/freedevtools/tldr/common/sg/"
canonical: "https://hexmos.com/freedevtools/tldr/common/sg/"
description: "Rewrite code structurally with Ast-grep, a powerful structural search tool for code linting and rewriting. Free online tool, no registration required."
category: common
keywords:
- code structural search
- ast-grep code rewrite
- code linting tool
- semantic code analysis
- pattern matching code
- code refactoring tool
- code migration tool
- sg code search
- sg code lint
- sg code rewrite
features:
- Scan code interactively for query patterns
- Rewrite code automatically based on defined patterns
- Visualize code changes before applying them
- Output results in JSON format for further processing
- Perform structural code search across multiple languages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sg

> Ast-grep is a tool for code structural search, lint, and rewriting.
> More information: <https://ast-grep.github.io/guide/introduction.html>.

- Scan for possible queries using interactive mode:

`sg scan --interactive`

- Rewrite code in the current directory using patterns:

`sg run --pattern '{{foo}}' --rewrite '{{bar}}' --lang {{python}}`

- Visualize possible changes without applying them:

`sg run --pattern '{{useState<number>($A)}}' --rewrite '{{useState($A)}}' --lang {{typescript}}`

- Output results as JSON, extract information using `jq` and interactively view it using `jless`:

`sg run --pattern '{{Some($A)}}' --rewrite '{{None}}' --json | jq '{{.[].replacement}}' | jless`
