---
title: "Pokemon Sprites - Display Terminal Pokemon Art | Online Free DevTools by Hexmos"
name: pokego
path: "/freedevtools/tldr/linux/pokego/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pokego/"
description: "Display Pokemon sprites instantly with Pokego. Generate colored Pokemon art in your terminal using command line. Free online tool, no registration required."
category: linux
keywords:
  - terminal pokemon sprites
  - command line pokemon art
  - pokego sprite generator
  - pokemon terminal art generator
  - cli pokemon display
  - pokemon art linux
  - pokemon art macos
  - pokemon art command line
  - pokemon color scripts
  - terminal sprite generator
features:
  - Display specific Pokemon by name
  - Render shiny versions of Pokemon
  - Show alternative forms of Pokemon (e.g., mega evolutions)
  - Generate random Pokemon sprites from specific generations
  - Suppress the display of Pokemon names
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pokego

> Display Pokémon sprites in color directly in your terminal.
> Inspired by Phoney badger's `pokemon-colorscripts` but offers enhanced speed and efficiency.
> More information: <https://github.com/rubiin/pokego>.

- Print a specific Pokémon:

`pokego --name charizard`

- Print a specific shiny Pokémon:

`pokego --name spheal -shiny`

- Print an alternative form of a Pokémon:

`pokego --name blastoise --form mega`

- Print random Pokémon from generations 1-3 (range):

`pokego --random 1-3`

- Do not display Pokémon name (default: false):

`pokego --random 1-3 --no-title`
