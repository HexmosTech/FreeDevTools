---
title: "Systemsetup - Configure macOS Settings | Online Free DevTools by Hexmos"
name: systemsetup
path: /freedevtools/tldr/osx/systemsetup
canonical: "https://hexmos.com/freedevtools/tldr/osx/systemsetup/"
description: "Configure macOS system settings with Systemsetup. Control timezone, sleep settings, and startup disks easily with this command line tool. Free online tool, no registration required."
category: osx
keywords:
- macos configuration
- system setup macos
- systemsetup command
- macos settings configuration
- configure startup disk macos
- enable remote login macos
- macos timezone configuration
- macos sleep settings
- macos power settings
- system preferences command line
features:
- Configure macOS system timezone
- Enable or disable remote login (SSH)
- Manage system sleep settings
- Set the startup disk for macOS
- Configure automatic restart options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemsetup

> Configure System Preferences machine settings.
> More information: <https://support.apple.com/guide/remote-desktop/about-systemsetup-apd95406b8d/mac>.

- Enable remote login (SSH):

`systemsetup -setremotelogin on`

- Specify timezone, NTP Server and enable network time:

`systemsetup -settimezone "{{US/Pacific}}" -setnetworktimeserver {{us.pool.ntp.org}} -setusingnetworktime on`

- Make the machine never sleep and automatically restart on power failure or kernel panic:

`systemsetup -setsleep off -setrestartpowerfailure on -setrestartfreeze on`

- List valid startup disks:

`systemsetup -liststartupdisks`

- Specify a new startup disk:

`systemsetup -setstartupdisk {{path/to/directory}}`
