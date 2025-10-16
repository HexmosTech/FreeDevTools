---
title: "Pokemon Sprite Display - Pokeget Terminal Sprites | Online Free DevTools by Hexmos"
name: pokeget
path: "/freedevtools/tldr/common/pokeget/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pokeget/"
description: "Display Pokemon sprites instantly with Pokeget. Show sprites in terminal, customize appearance, and get random Pokemon with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- terminal Pokemon sprite
- command line Pokemon art
- Pokeget sprite display
- console Pokemon images
- random Pokemon generator
- shiny Pokemon display
- terminal image viewer
- linux terminal art
- macos terminal sprites
- command-line image display
features:
- Display Pokemon sprites in the terminal
- Print random Pokemon sprites
- Show shiny Pokemon variants
- Customize sprite appearance with flags
- Hide Pokemon names during display
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pokeget

> Display sprites of Pokemon in your terminal.
> More information: <https://github.com/talwat/pokeget-rs>.

- Print a sprite of a given pokemon:

`pokeget {{pokemon_name}}`

- Print Mr. Mime (note the use of `-` instead of spaces):

`pokeget mr-mime`

- Print Mega Gengar:

`pokeget gengar {{[-m|--mega]}}`

- Print a random shiny Pokemon:

`pokeget random {{[-s|--shiny]}}`

- Print Alolan Meowth, without printing the Pokemon's name:

`pokeget meowth {{[-a|--alolan]}} --hide-name`

- Print a random Pokemon with 1/4096 chance to be shiny:

`((RANDOM%4096 == 0)) && pokeget random --shiny || pokeget random`
