---
title: "Spell Check Text - Correct Spelling with Aspell | Online Free DevTools by Hexmos"
name: aspell
path: /freedevtools/tldr/common/aspell
canonical: "https://hexmos.com/freedevtools/tldr/common/aspell/"
description: "Spell check text with Aspell, an interactive spell checker. Identify and correct misspelled words instantly from command line. Free online tool, no registration required."
category: common
keywords:
- spell check text
- aspell spell checker
- command line spell check
- linux spell check
- macos spell check
- text editor spell check
- dictionary language check
- interactive spell checker
- personal word list aspell
- aspell command examples
features:
- Spell check text files from the command line
- List misspelled words from stdin
- Show available dictionary languages
- Run spell check with a specified language
- Ignore words from a personal word list
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aspell

> Interactive spell checker.
> More information: <http://aspell.net/man-html/index.html>.

- Spell check a single file:

`aspell check {{path/to/file}}`

- List misspelled words from `stdin`:

`cat {{path/to/file}} | aspell list`

- Show available dictionary languages:

`aspell dicts`

- Run `aspell` with a different language (takes two-letter ISO 639 language code):

`aspell --lang {{cs}}`

- List misspelled words from `stdin` and ignore words from personal word list:

`cat {{path/to/file}} | aspell --personal {{personal-word-list.pws}} list`
