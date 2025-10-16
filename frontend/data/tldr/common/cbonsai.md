---
title: "Generate Bonsai Trees - Beautiful ASCII Art with cbonsai | Online Free DevTools by Hexmos"
name: cbonsai
path: "/freedevtools/tldr/common/cbonsai/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cbonsai/"
description: "Generate Bonsai trees with cbonsai, a command-line ASCII art generator. Create unique and beautiful random trees on Linux or macOS. Free online tool, no registration required."
category: common
keywords:
- bonsai generator
- ascii art bonsai
- command line bonsai
- cbonsai linux
- cbonsai macos
- terminal tree generator
- random art generator
- ascii graphics
- terminal customization
- generative art
features:
- Generate bonsai trees in live mode
- Create bonsai trees in infinite mode
- Customize tree growth factor
- Adjust the branching multiplier
- Display verbose information about the bonsai
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cbonsai

> A beautifully random bonsai tree generator.
> More information: <https://gitlab.com/jallbrit/cbonsai>.

- Generate a bonsai in live mode:

`cbonsai {{[-l|--live]}}`

- Generate a bonsai in infinite mode:

`cbonsai {{[-i|--infinite]}}`

- Set the growth factor of the tree (default: 32):

`cbonsai {{[-L|--life]}} {{0..200}}`

- Set the branching factor of the tree (default: 5):

`cbonsai {{[-M|--multiplier]}} {{0..20}}`

- Run in screensaver mode (equivalent to `--live --infinite` but any keypress exits):

`cbonsai {{[-S|--screensaver]}}`

- Append a message to the bonsai:

`cbonsai {{[-m|--message]}} "{{message}}"`

- Display extra information about the bonsai:

`cbonsai {{[-v|--verbose]}}`

- Display help:

`cbonsai {{[-h|--help]}}`
