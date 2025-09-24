---
title: "Terminal Typing Test - Improve Typing Skills | Online Free DevTools by Hexmos"
name: tt
path: /freedevtools/tldr/common/tt
canonical: "https://hexmos.com/freedevtools/tldr/common/tt/"
description: "Improve typing skills with Terminal Typing Test (tt). Practice your typing, track your WPM, and customize your experience. Free online tool, no registration required."
category: common
keywords:
- terminal typing test
- command line typing
- typing speed test
- keyboard training
- improve WPM
- terminal typing practice
- linux typing test
- macos typing test
- typing tutor
- command line games
features:
- Start quote mode with built-in quote lists.
- Customize test with random word generation.
- Run timed typing tests for focused practice.
- Display words-per-minute (WPM) as you type.
- Disable theming for a clean typing interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tt

> A terminal based typing test.
> More information: <https://github.com/lemnos/tt>.

- Start quote mode with the builtin quote list in English:

`tt -quotes {{en}}`

- Produce a test consisting of 50 randomly drawn words in 5 groups of 10 words each:

`tt -n {{10}} -g {{5}}`

- Start a timed test lasting 10 seconds:

`tt -t {{10}}`

- Start `tt` with no theming and showing your WPM as you type:

`tt -showwpm -notheme`
