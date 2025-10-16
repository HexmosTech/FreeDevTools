---
title: "Kdenlive - Edit Videos Nondestructively | Online Free DevTools by Hexmos"
name: kdenlive
path: "/freedevtools/tldr/common/kdenlive/"
canonical: "https://hexmos.com/freedevtools/tldr/common/kdenlive/"
description: "Edit videos nondestructively with Kdenlive, KDE's powerful non-linear video editor. Create professional-quality videos with advanced editing tools. Free online tool, no registration required."
category: common
keywords:
- non-linear video editing
- kdenlive video editor
- kde video editor
- video editing software
- open source video editor
- video production linux
- video editing linux
- video editing command line
- mlt framework editing
- video editing commands
features:
- Open and edit video files with Kdenlive
- Specify a custom MLT environment path
- Adjust the verbosity level for MLT logging
- Display help information for Kdenlive commands
- View the Kdenlive version
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kdenlive

> KDE's non-linear video editor.
> More information: <https://manned.org/kdenlive>.

- Start the video editor:

`kdenlive`

- Open a specific file:

`kdenlive {{path/to/file.kdenlive}}`

- Use a specific path for an MLT environment:

`kdenlive --mlt-path {{path/to/directory}}`

- Use a specific log level for an MLT environment:

`kdenlive --mlt-log {{verbose|debug}}`

- Display help:

`kdenlive --help`

- Display version:

`kdenlive --version`
