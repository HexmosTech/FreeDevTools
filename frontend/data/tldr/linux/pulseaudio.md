---
title: "Control PulseAudio - Manage Audio on Linux | Online Free DevTools by Hexmos"
name: pulseaudio
path: "/freedevtools/tldr/linux/pulseaudio/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pulseaudio/"
description: "Control audio on Linux with PulseAudio. Manage sound servers, load modules and troubleshoot audio issues using the command line. Free online tool, no registration required."
category: linux
keywords:
- pulseaudio control
- linux audio management
- pulseaudio module loader
- pulseaudio troubleshooting
- pulseaudio daemon manager
- pulseaudio sound server
- linux audio server
- pulseaudio configuration
- pulseaudio command line
- audio management linux
features:
- Start the PulseAudio daemon
- Kill a running PulseAudio daemon
- Check the PulseAudio daemon status
- List all available PulseAudio modules
- Load specific PulseAudio modules with arguments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulseaudio

> The PulseAudio sound system daemon and manager.
> More information: <https://manned.org/pulseaudio>.

- Check if PulseAudio is running (a non-zero exit code means it is not running):

`pulseaudio --check`

- Start the PulseAudio daemon in the background:

`pulseaudio --start`

- Kill the running PulseAudio daemon:

`pulseaudio {{[-k|--kill]}}`

- List available modules:

`pulseaudio --dump-modules`

- Load a module into the currently running daemon with the specified arguments:

`pulseaudio {{[-L|--load]}} "{{module_name}} {{arguments}}"`
