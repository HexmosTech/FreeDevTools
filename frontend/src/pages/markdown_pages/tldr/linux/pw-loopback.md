---
title: "Create PipeWire Loopback - Audio Routing | Free DevTools"
name: pw-loopback
path: /freedevtools/tldr/unknown/pw-loopback
canonical: "https://hexmos.com/freedevtools/tldr/unknown/pw-loopback/"
description: "Create audio loopback devices with pw-loopback for advanced PipeWire audio routing. Manage input/output streams and connect virtual audio devices. Free online tool, no registration required."
category: unknown
keywords:
- pipewire loopback
- audio routing
- virtual audio device
- pw-loopback command
- linux audio
- pipewire audio
- audio sink
- audio source
- pipewire configuration
- audio stream management
features:
- Create default loopback devices in PipeWire
- Connect loopback devices to speakers
- Connect loopback devices to microphones
- Create dummy loopback devices without automatic connections
- Swap left and right audio channels between sink and source
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pw-loopback

> Create loopback devices in PipeWire.
> More information: <https://docs.pipewire.org/page_man_pw-loopback_1.html>.

- Create a loopback device with the default loopback behavior:

`pw-loopback`

- Create a loopback device that automatically connects to the speakers:

`pw-loopback {{[-m|--channel-map]}} '{{[FL FR]}}' {{[-i|--capture-props]}} '{{media.class=Audio/Sink}}'`

- Create a loopback device that automatically connects to the microphone:

`pw-loopback {{[-m|--channel-map]}} '{{[FL FR]}}' {{[-o|--playback-props]}} '{{media.class=Audio/Source}}'`

- Create a dummy loopback device that doesn't automatically connect to anything:

`pw-loopback {{[-m|--channel-map]}} '{{[FL FR]}}' {{[-i|--capture-props]}} '{{media.class=Audio/Sink}}' {{[-o|--playback-props]}} '{{media.class=Audio/Source}}'`

- Create a loopback device that automatically connects to the speakers and swaps the left and right channels between the sink and source:

`pw-loopback {{[-i|--capture-props]}} '{{media.class=Audio/Sink audio.position=[FL FR]}}' {{[-o|--playback-props]}} '{{audio.position=[FR FL]}}'`

- Create a loopback device that automatically connects to the microphone and swaps the left and right channels between the sink and source:

`pw-loopback {{[-i|--capture-props]}} '{{audio.position=[FR FL]}}' {{[-o|--playback-props]}} '{{media.class=Audio/Source audio.position=[FL FR]}}'`
