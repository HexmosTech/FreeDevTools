---
title: "Translate Offline - Translate Text with Argos Translate | Online Free DevTools by Hexmos"
name: argos-translate
path: /freedevtools/tldr/common/argos-translate
canonical: "https://hexmos.com/freedevtools/tldr/common/argos-translate/"
description: "Translate text offline with Argos Translate. Perform language translation between multiple languages without an internet connection. Free online tool, no registration required."
category: common
keywords:
- offline translation
- language translation
- text translation CLI
- argos translate
- command line translator
- offline translator python
- language package manager
- translate es to en
- translate en to hi
- offline machine translation
features:
- Translate text between multiple languages offline
- Install and manage language translation pairs
- Translate text directly from the command line
- List available and installed translation pairs
- Update installed language package pairs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# argos-translate

> An open-source offline translation library and CLI tool written in Python.
> More information: <https://argos-translate.readthedocs.io/en/latest/source/cli.html>.

- Install translation pairs for Spanish to English translation:

`argospm install translate-es_en`

- Translate some text from Spanish (`es`) to English (`en`) (Note: Only two letter language codes are supported):

`argos-translate --from-lang es --to-lang en {{un texto corto}}`

- Translate a text file from English to Hindi:

`cat {{path/to/file.txt}} | argos-translate --from-lang en --to-lang hi`

- List all installed translation pairs:

`argospm list`

- Show translation pairs from English that are available to be installed:

`argospm search --from-lang en`

- Update installed language package pairs:

`argospm update`

- Translate from `ar` to `ru` (Note: This requires the translation pairs `translate-ar_en` and `translate-en_ru` to be installed):

`argos-translate --from-lang ar --to-lang ru {{صورة تساوي أكثر من ألف كلمة}}`
