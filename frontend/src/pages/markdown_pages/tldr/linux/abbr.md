---
title: "Control Abbreviations - Manage Shell Aliases | Online Free DevTools by Hexmos"
name: abbr
path: /freedevtools/tldr/linux/abbr
canonical: "https://hexmos.com/freedevtools/tldr/linux/abbr/"
description: "Control abbreviations easily with Abbr. Manage shell aliases, create shortcuts, and expand commands in your fish shell. Free online tool, no registration required."
category: linux
keywords:
  - fish shell abbreviations
  - shell alias manager
  - command abbreviation tool
  - fish shell command shortcuts
  - abbreviation expander
  - command alias definition
  - fish shell configuration
  - command-line abbreviation
  - abbr command examples
  - fish shell automation
features:
  - Define new shell abbreviations
  - Rename existing shell abbreviations
  - Erase existing shell abbreviations
  - Import abbreviations from remote hosts
  - Manage command shortcuts within the fish shell
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# abbr

> Manage abbreviations for the fish shell.
> User-defined words are replaced with longer phrases after they are entered.
> More information: <https://fishshell.com/docs/current/cmds/abbr.html>.

- Add a new abbreviation:

`abbr {{[-a|--add]}} {{abbreviation_name}} {{command}} {{command_arguments}}`

- Rename an existing abbreviation:

`abbr --rename {{old_name}} {{new_name}}`

- Erase an existing abbreviation:

`abbr {{[-e|--erase]}} {{abbreviation_name}}`

- Import the abbreviations defined on another host over SSH:

`ssh {{host_name}} abbr {{[-s|--show]}} | source`
