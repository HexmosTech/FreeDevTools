---
title: "Hostname Control - Manage Hostnames on Linux | Online Free DevTools by Hexmos"
name: hostnamectl
path: /freedevtools/tldr/linux/hostnamectl
canonical: "https://hexmos.com/freedevtools/tldr/linux/hostnamectl/"
description: "Control hostnames on Linux with hostnamectl. Manage system hostnames and pretty hostnames efficiently using the command line. Free online tool, no registration required."
category: linux
keywords:
- linux hostname control
- hostnamectl command
- set linux hostname
- change hostname linux
- linux system hostname
- pretty hostname linux
- ubuntu hostname
- debian hostname
- hostname configuration
- hostname management
features:
- Get current hostname information
- Set static system hostname
- Set transient hostname
- Set pretty hostname for display
- Reset hostname to default value
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hostnamectl

> Get or set the hostname of the computer.
> More information: <https://manned.org/hostnamectl>.

- Get the hostname of the computer:

`hostnamectl`

- Set the hostname of the computer:

`sudo hostnamectl set-hostname "{{hostname}}"`

- Set a pretty hostname for the computer:

`sudo hostnamectl set-hostname --static "{{hostname.example.com}}" && sudo hostnamectl set-hostname --pretty "{{hostname}}"`

- Reset hostname to its default value:

`sudo hostnamectl set-hostname --pretty ""`
