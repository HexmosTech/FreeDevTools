---
title: "Run GUI Apps - x11docker Container Manager | Online Free DevTools by Hexmos"
name: x11docker
path: /freedevtools/tldr/common/x11docker
canonical: "https://hexmos.com/freedevtools/tldr/common/x11docker/"
description: "Run GUI applications securely with x11docker Container Manager. Isolate graphical applications and desktop environments in Docker. Free online tool, no registration required."
category: common
keywords:
- docker gui
- container gui application
- x11 forwarding
- x11docker container
- linux desktop environment
- secure application container
- docker security
- docker x11
- gui virtualization
- desktop containerization
features:
- Launch GUI applications in isolated containers
- Securely run desktop environments in Docker
- Share directories between host and container
- Support Pulseaudio for audio integration
- Enable GPU acceleration for graphical performance
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# x11docker

> Securely run GUI applications and desktop UIs in Docker containers.
> See also: `xephyr`.
> More information: <https://github.com/mviereck/x11docker#terminal-syntax>.

- Launch VLC in a container:

`x11docker {{[-p|--pulseaudio]}} --share {{$HOME/Videos}} {{jess/vlc}}`

- Launch Xfce in a window:

`x11docker {{[-d|--desktop]}} {{x11docker/xfce}}`

- Launch GNOME in a window:

`x11docker {{[-d|--desktop]}} {{[-g|--gpu]}} --init={{systemd}} {{x11docker/gnome}}`

- Launch KDE Plasma in a window:

`x11docker {{[-d|--desktop]}} {{[-g|--gpu]}} --init={{systemd}} {{x11docker/kde-plasma}}`

- Display help:

`x11docker --help`
