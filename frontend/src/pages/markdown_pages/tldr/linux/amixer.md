---
title: "Amixer - Control ALSA Sound Volume | Online Free DevTools by Hexmos"
name: amixer
path: /freedevtools/tldr/linux/amixer
canonical: "https://hexmos.com/freedevtools/tldr/linux/amixer/"
description: "Control ALSA sound volume with Amixer. Adjust sound card settings and audio levels using command-line. Free online tool, no registration required."
category: linux
keywords:
- linux amixer
- alsa sound control
- command-line volume control
- amixer volume settings
- sound card mixer linux
- terminal audio control
- linux audio levels
- alsa mixer commands
- sound volume adjuster
- pulse audio control linux
features:
- Adjust ALSA sound card volume levels
- Control audio output using command line
- Set master volume percentage
- Modify specific sound card controls
- Integrate with PulseAudio for volume management
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# amixer

> Mixer for ALSA soundcard driver.
> More information: <https://manned.org/amixer>.

- Turn up the master volume by 10%:

`amixer -D pulse sset Master {{10%+}}`

- Turn down the master volume by 10%:

`amixer -D pulse sset Master {{10%-}}`
