---
title: "Control Clipboard - Copy Text to Clipboard | Online Free DevTools by Hexmos"
name: clip
path: /freedevtools/tldr/windows/clip
canonical: "https://hexmos.com/freedevtools/tldr/windows/clip/"
description: "Control clipboard content with Clip. Copy text and command outputs to the Windows clipboard easily. Free online tool, no registration required."
category: windows
keywords:
- clipboard text copy
- windows clipboard tool
- command line clipboard
- cmd clipboard copy
- text clipboard copy
- windows clip command
- powershell clipboard
- copy to clipboard windows
- clip windows command
- windows text utils
features:
- Copy command output to clipboard
- Copy file content to clipboard
- Copy text with a trailing newline
- Copy text without a trailing newline
- Integrate with command-line scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# clip

> Copy input content to the Windows clipboard.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/clip>.

- Pipe command-line output to the Windows clipboard:

`{{dir}} | clip`

- Copy the contents of a file to the Windows clipboard:

`clip < {{path\to\file.ext}}`

- Copy text with a trailing newline to the Windows clipboard:

`echo {{some text}} | clip`

- Copy text without a trailing newline to the Windows clipboard:

`echo | set /p="some text" | clip`
