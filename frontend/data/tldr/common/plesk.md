---
title: "Plesk Control Panel - Manage Hosting | Online Free DevTools by Hexmos"
name: plesk
path: "/freedevtools/tldr/common/plesk/"
canonical: "https://hexmos.com/freedevtools/tldr/common/plesk/"
description: "Control hosting environments with Plesk Control Panel. Manage domains, databases, and server settings efficiently using command-line. Free online tool, no registration required."
category: common
keywords:
- plesk control panel
- web hosting management
- domain management linux
- database administration plesk
- plesk auto login link
- server configuration plesk
- plesk command line
- plesk version information
- plesk domain list
- plesk log monitoring
features:
- Generate auto-login links for administrators
- Display Plesk product version information
- List all domains hosted on the server
- Monitor Plesk logs for changes in real-time
- Open and edit the Plesk main configuration file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# plesk

> Plesk hosting control panel.
> More information: <https://docs.plesk.com>.

- Generate an auto login link for the admin user and print it:

`plesk login`

- Show product version information:

`plesk version`

- List all hosted domains:

`plesk bin domain --list`

- Start watching for changes in the `panel.log` file:

`plesk log {{panel.log}}`

- Start the interactive MySQL console:

`plesk db`

- Open the Plesk main configuration file in the default editor:

`plesk conf {{panel.ini}}`
