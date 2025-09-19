---
title: "Codespell - Spell Check Code | Online Free DevTools by Hexmos"
name: codespell
path: /freedevtools/tldr/common/codespell
canonical: "https://hexmos.com/freedevtools/tldr/common/codespell/"
description: "Spell check code with Codespell. Find and correct typos in source code to improve code quality and readability. Free online tool, no registration required."
category: common
keywords:
- codespell spell checker
- source code spell check
- typo detection code
- typo correction code
- code quality tools
- development spell check
- linux codespell
- macos codespell
- windows codespell
- command line spell checker
features:
- Check for typos recursively in code files
- Correct typos in-place automatically
- Skip files based on specified patterns
- Utilize custom dictionary files
- Ignore specific words during spell check
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# codespell

> Spellchecker for source code.
> More information: <https://github.com/codespell-project/codespell>.

- Check for typos in all text files in the current directory, recursively:

`codespell`

- Correct all typos found in-place:

`codespell --write-changes`

- Skip files with names that match the specified pattern (accepts a comma-separated list of patterns using wildcards):

`codespell --skip "{{pattern}}"`

- Use a custom dictionary file when checking (`--dictionary` can be used multiple times):

`codespell --dictionary {{path/to/file.txt}}`

- Do not check words that are listed in the specified file:

`codespell --ignore-words {{path/to/file.txt}}`

- Do not check the specified words:

`codespell --ignore-words-list {{ignored_word1,ignored_word2,...}}`

- Print 3 lines of context around, before or after each match:

`codespell --{{context|before-context|after-context}} {{3}}`

- Check file names for typos, in addition to file contents:

`codespell --check-filenames`
