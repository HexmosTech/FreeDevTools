---
title: "Control FreePBX - Manage Phone Systems | Free DevTools"
name: fwconsole
path: /freedevtools/tldr/linux/fwconsole
canonical: "https://hexmos.com/freedevtools/tldr/linux/fwconsole/"
description: "Control FreePBX phone systems with fwconsole on Linux. Configure settings, manage backups, and troubleshoot issues using the command line. Free online tool, no registration required."
category: linux
keywords:
- freepbx management
- linux fwconsole
- asterisk control
- phone system configuration
- freepbx backup
- fwconsole commands
- linux pbx
- voice over ip configuration
- voip server administration
- asterisk module management
features:
- Reload FreePBX configurations
- Start and stop Asterisk services
- Update FreePBX settings
- List available FreePBX backups
- Change file ownership for FreePBX
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fwconsole

> Manage and configure your FreePBX system (PBX server).
> More information: <https://sangomakb.atlassian.net/wiki/spaces/PG/pages/41779247/fwconsole+commands+13>.

- Reload FreePBX configurations:

`fwconsole reload`

- Start Asterisk and other commands needed by FreePBX:

`fwconsole start`

- Stop Asterisk and other commands needed by FreePBX:

`fwconsole stop`

- View and update settings:

`fwconsole setting {{keyword}} {{new_value}}`

- List available backups:

`fwconsole backup --list`

- List available FreePBX commands:

`fwconsole list`

- Change ownership of all files and directories that FreePBX needs to be owned by the apache user:

`fwconsole chown`
