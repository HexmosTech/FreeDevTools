---
title: "Create Virtual Monitor - VNC Control with krfb | Free DevTools"
name: krfb-virtualmonitor
path: /freedevtools/tldr/unknown/krfb-virtualmonitor
canonical: "https://hexmos.com/freedevtools/tldr/unknown/krfb-virtualmonitor/"
description: "Create virtual monitor instances with krfb for VNC control. Access remote desktops seamlessly and manage multiple displays efficiently. Free online tool, no registration required."
category: unknown
keywords:
- VNC virtual monitor creation
- krfb virtual display manager
- remote desktop access linux
- virtual display configuration
- VNC server setup linux
- linux remote access tool
- virtual monitor command line
- krfb vnc server
- remote screen sharing linux
- kde vnc configuration
features:
- Create virtual monitors with custom resolutions
- Configure VNC access passwords and ports
- Manage multiple virtual displays simultaneously
- Control virtual monitors via the command line
- Enable remote desktop access through VNC
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# krfb-virtualmonitor

> Create a virtual monitor and allow that monitor to be used with VNC.
> More information: <https://invent.kde.org/network/krfb>.

- Create a virtual monitor:

`krfb-virtualmonitor --resolution {{1920}}x{{1080}} --name {{monitor_name}} --password {{password}} --port {{5900}}`
