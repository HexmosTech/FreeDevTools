---
title: "Control PulseAudio with pasuspender | Online Free DevTools by Hexmos"
name: pasuspender
path: /freedevtools/tldr/linux/pasuspender
canonical: "https://hexmos.com/freedevtools/tldr/linux/pasuspender/"
description: "Control PulseAudio using pasuspender to temporarily suspend it while running other commands like jackd.  Access ALSA audio devices seamlessly. Free online tool, no registration required."
category: linux
keywords:
  - pulseaudio control command
  - pasuspender linux command
  - alsa audio access
  - jackd audio integration
  - pulseaudio suspension
  - linux audio management
  - command line audio control
  - pasuspender usage examples
  - temporary pulseaudio disable
  - audio device switching
features:
  - Temporarily suspends PulseAudio.
  - Allows access to ALSA audio devices.
  - Integrates with other audio commands like jackd.
  - Provides a command-line interface for audio control.
  - Enables seamless switching between PulseAudio and ALSA.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pasuspender

> Temporarily suspends `pulseaudio` while another command is running to allow access to alsa.
> More information: <https://manned.org/pasuspender>.

- Suspend PulseAudio while running `jackd`:

`pasuspender -- {{jackd --driver alsa --device hw:0}}`
