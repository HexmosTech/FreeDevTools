---
title: "Compose Email - Create Emails with Mailcap | Online Free DevTools by Hexmos"
name: compose
path: /freedevtools/tldr/linux/compose
canonical: "https://hexmos.com/freedevtools/tldr/linux/compose/"
description: "Create emails effortlessly with the Compose command and mailcap.  Manage email composition through the command line for quick and efficient email creation. Free online tool, no registration required."
category: linux
keywords:
  - email compose command
  - mailcap compose action
  - command-line email creation
  - compose email linux
  - compose email macos
  - filetype email composition
  - mime-type email handling
  - run-mailcap compose
  - default mailcap editor
  - text email composer
features:
  - Compose new emails from the command line.
  - Utilize default mailcap editor for email creation.
  - Open existing files for email composition.
  - Leverage mime-type handling for email content.
  - Integrate with `run-mailcap` for advanced functionality.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# compose

> An alias to a `run-mailcap`'s action compose.
> Originally `run-mailcap` is used to mime-type/file.
> More information: <https://manned.org/compose>.

- Compose action can be used to compose any existing file or new on default mailcap edit tool:

`compose {{filename}}`

- With `run-mailcap`:

`run-mailcap --action=compose {{filename}}`
