---
title: "Prompt - Control Command Window Prompt | Free DevTools"
name: prompt
path: /freedevtools/tldr/windows/prompt
canonical: "https://hexmos.com/freedevtools/tldr/windows/prompt/"
description: "Control command window prompt with Prompt. Customize the DOS style prompt in Windows command line. Free online tool, no registration required."
category: windows
keywords:
- windows command prompt
- command prompt customization
- dos prompt change
- windows prompt settings
- command line prompt
- shell prompt windows
- prompt string windows
- batch prompt customization
- windows prompt variables
- prompt configuration
features:
- Reset prompt to default settings
- Customize prompt with specific text
- Display current date in the prompt
- Display current time in the prompt
- Modify prompt using prompt variables
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# prompt

> Change the default DOS style prompt in a command window.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/prompt>.

- Reset the prompt to the default setting:

`prompt`

- Set a specific prompt:

`prompt {{prompt}}`

- Change the prompt to show the current date first:

`prompt $D $P$G`

- Change the prompt to show the current time first:

`prompt $T $P$G`

- Change the prompt by adding a specific text first:

`prompt {{text}} $P$G`
