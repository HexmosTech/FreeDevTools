---
title: "HLint - Improve Haskell Code | Online Free DevTools by Hexmos"
name: hlint
path: /freedevtools/tldr/linux/hlint
canonical: "https://hexmos.com/freedevtools/tldr/linux/hlint/"
description: "Improve Haskell code instantly with HLint. Suggest code improvements, refactor code, and generate settings. Free online tool, no registration required."
category: linux
keywords:
- Haskell code analysis
- Haskell linter
- Haskell code improvement
- Haskell refactoring
- HLint linux
- HLint command
- Haskell code quality
- Haskell style checker
- Code linting
- Haskell project analysis
features:
- Suggest improvements to Haskell code
- Generate reports on Haskell code quality
- Automatically apply suggested refactorings
- Generate settings files for ignoring hints
- Check all Haskell files in a directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hlint

> Suggest improvements to Haskell code.
> More information: <https://hackage.haskell.org/package/hlint>.

- Display suggestions for a given file:

`hlint {{path/to/file}} options`

- Check all Haskell files and generate a report:

`hlint {{path/to/directory}} {{[-r|--report]}}`

- Automatically apply most suggestions:

`hlint {{path/to/file}} --refactor`

- Display additional options:

`hlint {{path/to/file}} --refactor-options`

- Generate a settings file ignoring all outstanding hints:

`hlint {{path/to/file}} --default > {{.hlint.yaml}}`
