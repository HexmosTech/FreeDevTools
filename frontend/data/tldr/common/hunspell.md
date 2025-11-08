---
title: "Check Spelling - Hunspell Spell Checker | Online Free DevTools by Hexmos"
name: hunspell
path: "/freedevtools/tldr/common/hunspell/"
canonical: "https://hexmos.com/freedevtools/tldr/common/hunspell/"
description: "Check spelling with Hunspell, a powerful command-line spell checker. Identify misspellings and suggest corrections effortlessly. Free online tool, no registration required."
category: common
keywords:
- spell checker
- hunspell spell checker
- command line spell check
- linux spell checker
- macos spell checker
- spell check file
- dictionary spell check
- misspelled words
- spelling correction
- hunspell dictionary
features:
- Check the spelling of a file using hunspell.
- Specify a dictionary for spell checking.
- List all misspelled words in a file.
- Identify spelling errors from the command line.
- Correct spelling mistakes using dictionary suggestions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hunspell

> Check spelling.
> More information: <https://github.com/hunspell/hunspell>.

- Check the spelling of a file:

`hunspell {{path/to/file}}`

- Check the spelling of a file with the en_US dictionary:

`hunspell -d {{en_US}} {{path/to/file}}`

- List misspelled words in a file:

`hunspell -l {{path/to/file}}`
