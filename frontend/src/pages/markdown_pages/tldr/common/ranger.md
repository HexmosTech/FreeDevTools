---
title: "Manage Files with Ranger - VI Key Bindings | Online Free DevTools by Hexmos"
name: ranger
path: "/freedevtools/tldr/common/ranger"
canonical: "https://hexmos.com/freedevtools/tldr/common/ranger/"
description: "Manage files effectively with Ranger, the console file manager using VI key bindings. Navigate directories, copy files, and execute commands. Free online tool, no registration required."
category: common
keywords:
- console file manager
- ranger file manager
- linux file manager
- vi keybindings file manager
- terminal file browser
- command line file manager
- ranger configuration
- directory navigation
- file operations cli
- ranger shortcuts
features:
- Navigate directories using VI key bindings
- Show only directories within the file system
- Customize the ranger configuration directory
- Specify the data directory for ranger
- Profile CPU usage upon ranger exit
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ranger

> Console file manager with VI key bindings.
> See also: `clifm`, `vifm`, `mc`, `dolphin`.
> More information: <https://github.com/ranger/ranger>.

- Launch ranger:

`ranger`

- Show only directories:

`ranger --show-only-dirs`

- Change the configuration directory:

`ranger {{[-r|--confdir]}} {{path/to/directory}}`

- Change the data directory:

`ranger --datadir {{path/to/directory}}`

- Print CPU usage statistics on exit:

`ranger --profile`
