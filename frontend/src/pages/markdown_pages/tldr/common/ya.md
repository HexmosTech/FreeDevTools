---
title: "Yazi Package Manager - Manage Packages | Online Free DevTools by Hexmos"
name: ya
path: /freedevtools/tldr/common/ya
canonical: "https://hexmos.com/freedevtools/tldr/common/ya/"
description: "Manage Yazi packages efficiently with Yazi Package Manager. Add, upgrade, and publish messages using the command line. Free online tool, no registration required."
category: common
keywords:
- yazi package manager
- yazi plugin management
- yazi message publisher
- package installer
- plugin updater
- command line package manager
- command line plugin manager
- package subscription tool
- message publishing tool
- yazi configuration manager
features:
- Add packages to Yazi
- Upgrade all Yazi packages
- Subscribe to messages from remote instances
- Publish messages with string body to current instance
- Publish messages with JSON body to current instance
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ya

> Manage Yazi packages and plugins.
> More information: <https://github.com/sxyazi/yazi>.

- Add a package:

`ya pack {{[-a|--all]}} {{package}}`

- Upgrade all packages:

`ya pack {{[-u|--upgrade]}}`

- Subscribe to messages from all remote instances:

`ya sub {{kinds}}`

- Publish a message to the current instance with string body:

`ya pub --str {{string_message}}`

- Publish a message to the current instance with JSON body:

`ya pub --json {{json_message}}`

- Publish a message to the specified instance with string body:

`ya pub-to --str {{message}} {{receiver}} {{kind}}`
