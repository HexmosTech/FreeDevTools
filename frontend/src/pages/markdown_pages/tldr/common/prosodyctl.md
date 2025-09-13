---
title: "Prosodyctl - Control Prosody Server | Free DevTools"
name: prosodyctl
path: /freedevtools/tldr/common/prosodyctl
canonical: "https://hexmos.com/freedevtools/tldr/common/prosodyctl/"
description: "Control Prosody XMPP server with Prosodyctl. Manage users, reload configuration, and check server status. Free online tool, no registration required."
category: common
keywords:
- prosodyctl command
- prosody XMPP server control
- prosody user management
- XMPP server administration
- prosody configuration reload
- linux prosodyctl
- prosodyctl status
- prosodyctl adduser
- prosodyctl deluser
- prosodyctl password
features:
- Show the status of the Prosody server
- Reload Prosody configuration files
- Add a user to the Prosody XMPP server
- Set a user's password
- Permanently delete a user
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# prosodyctl

> The control tool for the Prosody XMPP server.
> Note: Process management through `prosodyctl` is discouraged. Instead, use the tools provided by your system (e.g. `systemctl`).
> More information: <https://prosody.im/doc/prosodyctl>.

- Show the status of the Prosody server:

`sudo prosodyctl status`

- Reload the server's configuration files:

`sudo prosodyctl reload`

- Add a user to the Prosody XMPP server:

`sudo prosodyctl adduser {{user@example.com}}`

- Set a user's password:

`sudo prosodyctl passwd {{user@example.com}}`

- Permanently delete a user:

`sudo prosodyctl deluser {{user@example.com}}`
