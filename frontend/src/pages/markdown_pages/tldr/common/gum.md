---
title: "Gum - Generate Glamorous Shell Scripts | Online Free DevTools by Hexmos"
name: gum
path: /freedevtools/tldr/common/gum
canonical: "https://hexmos.com/freedevtools/tldr/common/gum/"
description: "Generate interactive shell scripts with Gum. Build user-friendly command-line interfaces and customize terminal prompts. Free online tool, no registration required."
category: common
keywords:
- shell script generator
- command line interface builder
- terminal prompt customizer
- gum script tool
- glamorous shell scripts
- linux terminal gui
- macos terminal gui
- interactive cli tool
- shell script styling
- shell script prompt builder
features:
- Interactively choose options from a list.
- Create interactive prompts for string input.
- Build confirmation prompts with custom labels.
- Show a spinner animation during command execution.
- Format text with emojis within shell scripts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gum

> Make glamorous shell scripts.
> See also: `whiptail`, `dialog`.
> More information: <https://github.com/charmbracelet/gum#tutorial>.

- Interactively pick a specific option to print to `stdout`:

`gum choose {{"option1" "option2" "..."}}`

- Open an interactive prompt for the user to input a string with a specific placeholder:

`gum input --placeholder "{{value}}"`

- Open an interactive confirmation prompt and exit with either `<0>` or `<1>`:

`gum confirm "{{Continue?}}" --default=false --affirmative "{{Yes}}" --negative "{{No}}" {{&& echo "Yes selected" || echo "No selected"}}`

- Show a spinner while a command is taking place with text alongside:

`gum spin {{[-s|--spinner]}} {{dot|line|minidot|jump|pulse|points|globe|moon|monkey|meter|hamburger}} --title "{{loading...}}" {{command}}`

- Format text to include emojis:

`gum format {{[-t|--type]}} {{emoji}} "{{:smile: :heart: hello}}"`

- Interactively prompt for multi-line text and write the input to a file:

`gum write > {{path/to/file}}`
