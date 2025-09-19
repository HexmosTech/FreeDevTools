---
title: "Control Choice Prompts - Windows Command | Online Free DevTools by Hexmos"
name: choice
path: /freedevtools/tldr/windows/choice
canonical: "https://hexmos.com/freedevtools/tldr/windows/choice/"
description: "Control user choice prompts with the Windows Choice command. Customize prompts, set default options, and automate interactions. Free online tool, no registration required."
category: windows
keywords:
- windows choice command
- command-line choice utility
- interactive prompt tool
- batch script choice
- user input prompt
- console selection tool
- windows command prompt
- automated task control
- default choice selection
- windows scripting tool
features:
- Customize prompt messages for user interaction
- Define acceptable choice values for input validation
- Set default choices for unattended execution
- Control the timeout for automatic selection
- Handle case-sensitive choice inputs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# choice

> Prompt user to select a choice and return the selected choice index.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/choice>.

- Prompt the current user to select a `Y` or `N` choice:

`choice`

- Prompt the current user to select a [c]hoice from a specific set:

`choice /c {{AB}}`

- Prompt the current user to select a choice with a specific [m]essage:

`choice /m "{{message}}"`

- Prompt the current user to select a [c]ase-[s]ensitive [c]hoice from a specific set:

`choice /cs /c {{Ab}}`

- Prompt the current user to select a choice and prefer the [d]efault choice in a specific [t]ime:

`choice /t {{5}} /d {{default_choice}}`

- Display help:

`choice /?`
