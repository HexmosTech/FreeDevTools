---
title: "Control Helix Editor - Post-Modern Text Editor | Online Free DevTools by Hexmos"
name: helix
path: /freedevtools/tldr/common/helix
canonical: "https://hexmos.com/freedevtools/tldr/common/helix/"
description: "Control text editing with Helix Editor, a post-modern text editor featuring multiple modes. Enhance your workflow with powerful commands. Free online tool, no registration required."
category: common
keywords:
- helix editor
- text editor
- command line text editor
- helix command line tool
- terminal text editor
- vim alternative
- text manipulation tool
- code editor
- cross-platform editor
- post-modern text editor
features:
- Open and edit files from the command line.
- Show multiple files side-by-side in a split view.
- Access the built-in tutorial for learning Helix commands.
- Change the editor theme for personalized customization.
- Search for patterns within files using regular expressions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# helix

> Helix, A post-modern text editor, provides several modes for different kinds of text manipulation.
> Pressing `<i>` enters insert mode. `<Esc>` enters normal mode, which enables the use of Helix commands.
> More information: <https://helix-editor.com>.

- Open a file:

`helix {{path/to/file}}`

- Open files and show them one next each other:

`helix --vsplit {{path/to/file1 path/to/file2}}`

- Show the tutorial to learn Helix (or access it within Helix by pressing `<Esc>` and typing `<:>tutor<Enter>`):

`helix --tutor`

- Change the Helix theme:

`<:>theme {{theme_name}}`

- Save and Quit:

`<:>wq<Enter>`

- Force-quit without saving:

`<:>q!<Enter>`

- Undo the last operation:

`<u>`

- Search for a pattern in the file (press `<n>`/`<N>` to go to next/previous match):

`</>{{search_pattern}}<Enter>`
