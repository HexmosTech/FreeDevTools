---
title: "Run GitHub Screensavers - Animate Your Terminal | Free DevTools"
name: gh-screensaver
path: /freedevtools/tldr/gh/gh-screensaver
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-screensaver/"
description: "Run GitHub screensavers with gh-screensaver. Animate your terminal with customizable screensavers like fireworks, marquee, and starfield. Free online tool, no registration required."
category: common
keywords:
- github screensaver
- terminal screensaver
- cli screensaver
- github cli extension
- gh extension
- terminal animation
- command line screensaver
- screensaver customization
- marquee text animation
- starfield generator
features:
- Display animated screensavers in the terminal
- Customize screensaver type and parameters
- List available screensavers
- Configure marquee text and font
- Adjust starfield density and speed
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh screensaver

> Extension for GitHub CLI that runs animated terminal screensavers.
> See also: `gh extension`.
> More information: <https://github.com/vilmibm/gh-screensaver>.

- Run a random screensaver:

`gh screensaver`

- Run a specific screensaver:

`gh screensaver {{[-s|--saver]}} {{fireworks|life|marquee|pipes|pollock|starfield}}`

- Run the "marquee" screensaver with a specific text and font:

`gh screensaver {{[-s|--saver]}} {{marquee}} -- --message="{{message}}" --font={{font_name}}`

- Run the "starfield" screensaver with a specific density and speed:

`gh screensaver {{[-s|--saver]}} {{starfield}} -- --density {{500}} --speed {{10}}`

- List available screensavers:

`gh screensaver {{[-l|--list]}}`
