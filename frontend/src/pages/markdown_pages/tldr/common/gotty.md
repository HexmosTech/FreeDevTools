---
title: "Share Terminal - Control Terminal Sessions with GoTTY | Online Free DevTools by Hexmos"
name: gotty
path: /freedevtools/tldr/common/gotty
canonical: "https://hexmos.com/freedevtools/tldr/common/gotty/"
description: "Share terminal sessions securely with GoTTY. Control remote access and collaborate with others via web browser. Free online tool, no registration required."
category: common
keywords:
- terminal sharing
- web terminal
- remote access
- gotty terminal
- command line sharing
- linux terminal
- browser terminal
- shell sharing
- gotty command
- terminal session control
features:
- Share terminal output in a web browser
- Grant write access to the shared terminal session
- Protect terminal access with Basic Authentication
- Specify the shell to be used for the session
- Control remote access to command line tools
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gotty

> Share your terminal as a web application.
> More information: <https://github.com/yudai/gotty>.

- Share result of command:

`gotty {{command}}`

- Share with write permission:

`gotty {{[-w|--permit-write]}} {{shell}}`

- Share with credential (Basic Auth):

`gotty {{[-w|--permit-write]}} {{[-c|--credential]}} {{username}}:{{password}} {{shell}}`
