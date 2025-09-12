---
title: "Pacman Game - Play Pacman4Console in Linux | Free DevTools"
name: pacman4console
path: /freedevtools/tldr/linux/pacman4console
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman4console/"
description: "Play retro games with Pacman4Console on Linux. Enjoy classic Pacman gameplay in your terminal and customize levels. Free online tool, no registration required."
category: linux
keywords:
- linux terminal game
- pacman command line
- console based pacman
- pacman4console linux
- text based game linux
- retro game linux
- level editor tool
- custom level game
- classic arcade game
- pacman game
features:
- Start the game with a specified level
- Create and edit custom levels
- Play custom level files
- Enjoy the classic terminal game
- Run level editor from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pacman4console

> A text-based console game inspired by the original Pacman.
> More information: <https://github.com/YoctoForBeaglebone/pacman4console>.

- Start a game at Level 1:

`pacman4console`

- Start a game on a certain level (there are nine official levels):

`pacman4console --level={{level_number}}`

- Start the pacman4console level editor, saving to a specified text file:

`pacman4consoleedit {{path/to/level_file}}`

- Play a custom level:

`pacman4console --level={{path/to/level_file}}`
