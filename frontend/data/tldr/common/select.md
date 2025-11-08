---
title: "Create Menu - Bash Select Command | Online Free DevTools by Hexmos"
name: select
path: "/freedevtools/tldr/common/select/"
canonical: "https://hexmos.com/freedevtools/tldr/common/select/"
description: "Create bash menus with Bash Select. Generate interactive command line menus from lists and arrays. Free online tool, no registration required."
category: common
keywords:
- bash select menu
- bash interactive menu
- shell script menu
- command line menu
- linux menu generator
- bash array menu
- terminal menu
- bash scripting tutorial
- gnu bash select
- create bash menu
features:
- Generate menus from a list of words.
- Create menus from command output.
- Customize the prompt string for menu selection.
- Build menus from Bash arrays.
- Create interactive selection tools for shell scripts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# select

> Bash builtin construct for creating menus.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-select>.

- Create a menu out of individual words:

`select {{word}} in {{apple orange pear banana}}; do echo ${{word}}; done`

- Create a menu from the output of another command:

`select {{line}} in $({{command}}); do echo ${{line}}; done`

- Specify the prompt string for `select` and create a menu for picking a file or folder from the current directory:

`PS3="{{Select a file: }}"; select {{file}} in *; do echo ${{file}}; done`

- Create a menu from a Bash array:

`{{fruits}}=({{apple orange pear banana}}); select {{word}} in ${{{fruits[@]}}}; do echo ${{word}}; done`
