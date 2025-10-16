---
title: "Vipe Editor - Control Pipeline Input | Online Free DevTools by Hexmos"
name: vipe
path: "/freedevtools/tldr/common/vipe/"
canonical: "https://hexmos.com/freedevtools/tldr/common/vipe/"
description: "Control pipeline input with Vipe. Edit text streams mid-pipeline using your preferred text editor. Free online tool, no registration required."
category: common
keywords:
- unix pipeline editor
- vipe pipeline editor
- command line editor
- shell script editor
- text stream editor
- pipeline data editor
- linux pipeline vipe
- macos pipeline vipe
- common platform vipe
- vipe text editor
features:
- Edit data in a UNIX pipeline
- Buffer output in temporary file for syntax highlighting
- Use a specified text editor for pipeline editing
- Modify input before passing to the next command
- Integrate with existing command-line workflows
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vipe

> Run a text editor in the middle of a UNIX pipeline.
> More information: <https://manned.org/vipe>.

- Edit the output of `command1` before piping it into `command2`:

`{{command1}} | vipe | {{command2}}`

- Buffer the output of `command1` in a temporary file with the specified file extension in order to aid syntax highlighting:

`{{command1}} | vipe --suffix {{json}} | {{command2}}`

- Use the specified text editor:

`{{command1}} | EDITOR={{vim}} vipe | {{command2}}`
