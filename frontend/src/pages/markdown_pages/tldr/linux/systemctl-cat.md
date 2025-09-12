---
title: "Systemctl Cat - Show Unit File Contents | Free DevTools"
name: systemctl-cat
path: /freedevtools/tldr/unknown/systemctl-cat
canonical: "https://hexmos.com/freedevtools/tldr/unknown/systemctl-cat/"
description: "Show Unit file contents with Systemctl Cat. View configurations, templates, and user units with this command. Free online tool, no registration required."
category: unknown
keywords:
- systemctl cat unit file
- show systemd unit contents
- linux systemctl command
- systemctl cat template
- view systemd configuration
- systemctl user unit
- systemd service file
- systemctl service cat
- systemctl cat command
- linux system configuration
features:
- Display the complete content of a systemd unit file.
- Show the content of multiple systemd unit files simultaneously.
- Reveal the contents of templated systemd unit files.
- Retrieve the contents of user-specific systemd unit files.
- Display the absolute path of the unit file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemctl cat

> Show the full contents of unit files as systemd sees them.
> More information: <https://www.freedesktop.org/software/systemd/man/latest/systemctl.html#cat%20PATTERN%E2%80%A6>.

- Show the contents and absolute path of a unit file:

`systemctl cat {{unit}}`

- Show the contents of multiple unit files:

`systemctl cat {{unit1 unit2 ...}}`

- Show the contents of a unit file for a template:

`systemctl cat {{template@}}`

- Show the contents of a user unit file:

`systemctl cat --user {{unit}}`
