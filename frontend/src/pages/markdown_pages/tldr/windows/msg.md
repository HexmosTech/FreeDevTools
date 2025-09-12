---
title: "Message Sender - Send Messages via Command Line | Free DevTools"
name: msg
path: /freedevtools/tldr/windows/msg
canonical: "https://hexmos.com/freedevtools/tldr/windows/msg/"
description: "Send messages on Windows using the Message Sender (msg) command. Communicate with users and sessions easily using the command line interface. Free online tool, no registration required."
category: windows
keywords:
- windows message sender
- windows command line message
- cmd message tool
- send message to user windows
- windows session message
- windows net send alternative
- msg command windows
- windows terminal message
- remote message windows
- windows administrator message
features:
- Send messages to specific usernames or session names.
- Send messages from standard input (stdin).
- Target a specific server with messages.
- Broadcast messages to all users on a machine.
- Set a delay for message delivery.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# msg

> Send a message to a user or session.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/msg>.

- Send a message to a specified user or session:

`msg {{username|session_name|session_id}} {{message}}`

- Send a message from `stdin`:

`echo "{{message}}" | msg {{username|session_name|session_id}}`

- Send a message to a specific server:

`msg /server:{{server_name}} {{username|session_name|session_id}}`

- Send a message to all users of the current machine:

`msg *`

- Set a delay in seconds for a message:

`msg /time:{{10}}`
