---
title: "Get Wikipedia Summary - Wikit Command | Free DevTools"
name: wikit
path: /freedevtools/tldr/common/wikit
canonical: "https://hexmos.com/freedevtools/tldr/common/wikit/"
description: "Get instant Wikipedia summaries with Wikit command. Retrieve concise information, specify languages, and open articles directly. Free online tool, no registration required."
category: common
keywords:
- wikipedia summary command
- command line wikipedia
- wikit linux
- wikit macos
- wikipedia summary tool
- command line search
- retrieve wikipedia info
- quick wikipedia lookup
- terminal wikipedia client
- console wikipedia tool
features:
- Display short summaries of Wikipedia topics.
- Specify languages for summaries using ISO codes.
- Open full Wikipedia articles in a default browser.
- Provide a disambiguation menu for ambiguous topics.
- Retrieve information directly from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wikit

> Easily get Wikipedia summaries.
> More information: <https://github.com/KorySchneider/wikit>.

- Show a short summary of a specific topic on Wikipedia:

`wikit {{topic}}`

- Specify a language (ISO 639-1 language code):

`wikit {{topic}} {{[-l|--lang]}} {{language_code}}`

- Open the full Wikipedia article in the default browser:

`wikit {{topic}} -b`

- Open a disambiguation menu:

`wikit {{topic}} -d`
