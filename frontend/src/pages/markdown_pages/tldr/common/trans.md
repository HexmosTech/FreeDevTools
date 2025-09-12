---
title: "Translate Shell - Translate Text via CLI | Free DevTools"
name: trans
path: /freedevtools/tldr/common/trans
canonical: "https://hexmos.com/freedevtools/tldr/common/trans/"
description: "Translate text instantly with Translate Shell. Translate words and phrases between multiple languages using command line. Free online tool, no registration required."
category: common
keywords:
- command line translator
- text translation CLI
- translate shell command
- linux translation tool
- terminal translation
- text translator
- language translation
- dictionary lookup command
- translation tool
- translation command
features:
- Translate words or phrases from one language to another.
- Detect the source language automatically.
- Translate to a specific language.
- Perform dictionary lookups for word meanings.
- Translate from one language to another specific language.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trans

> Translate Shell, a command-line translator.
> More information: <https://github.com/soimort/translate-shell>.

- Translate a word (language is detected automatically):

`trans "{{word_or_sentence_to_translate}}"`

- Get a brief translation:

`trans {{[-b|-brief]}} "{{word_or_sentence_to_translate}}"`

- Translate a word into french:

`trans :{{fr}} {{word}}`

- Translate a word from German to English:

`trans {{de}}:{{en}} {{Schmetterling}}`

- Behave like a dictionary to get the meaning of a word:

`trans {{[-d|-dictionary]}} {{word}}`
