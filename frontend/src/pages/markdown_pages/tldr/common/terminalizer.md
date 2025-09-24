---
title: "Generate Terminal GIFs - Terminalizer | Online Free DevTools by Hexmos"
name: terminalizer
path: /freedevtools/tldr/common/terminalizer
canonical: "https://hexmos.com/freedevtools/tldr/common/terminalizer/"
description: "Generate animated GIFs from terminal recordings with Terminalizer. Record terminal sessions, create GIF animations, and share them online. Free online tool, no registration required."
category: common
keywords:
- terminal recording GIF
- terminal to GIF converter
- command line GIF maker
- shell recording animation
- terminal session recorder
- asciinema alternative
- CLI GIF generator
- terminal screen capture
- animated GIF creation
- record terminal activity
features:
- Record terminal sessions to a file.
- Render terminal recordings as animated GIFs.
- Play recorded terminal sessions in the terminal.
- Share terminal recordings online via terminalizer.com.
- Initialize a global configuration directory.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# terminalizer

> Record the terminal, generate animated GIFs and a web player, and optionally upload to <https://terminalizer.com>.
> See also: `asciinema`.
> More information: <https://terminalizer.com>.

- Create the global configuration directory:

`terminalizer init`

- Record the terminal and create a recording file:

`terminalizer record {{path/to/recording.gif}}`

- Play a recorded file on the terminal:

`terminalizer play {{path/to/recording.gif}}`

- Render a recording file as an animated GIF image:

`terminalizer render {{path/to/recording.gif}}`

- Upload a video to <https://terminalizer.com>:

`terminalizer share {{path/to/recording.gif}}`
