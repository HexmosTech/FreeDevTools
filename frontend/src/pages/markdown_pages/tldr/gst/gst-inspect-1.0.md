---
title: "Inspect GStreamer Plugins - Analyze Media Codecs | Online Free DevTools by Hexmos"
name: gst-inspect-1.0
path: /freedevtools/tldr/gst/gst-inspect-1.0
canonical: "https://hexmos.com/freedevtools/tldr/gst/gst-inspect-1.0/"
description: "Analyze GStreamer plugins with gst-inspect-1.0. Discover available media codecs and hardware capabilities. Free online tool, no registration required."
category: common
keywords:
- GStreamer plugin analysis
- Media codec inspection
- Hardware transcoding discovery
- GStreamer core elements listing
- Container format identification
- Audio codec availability
- Video codec availability
- Graphics API plugin detection
- Linux media inspection
- Command-line media analysis
features:
- Display detailed plugin information
- List available audio and video codecs
- Discover hardware transcoding capabilities
- Identify GStreamer core elements
- Enumerate plugins utilizing graphics APIs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gst-inspect-1.0

> Print information on GStreamer plugins.
> More information: <https://gstreamer.freedesktop.org/documentation/tools/gst-inspect.html>.

- Print information on a plugin:

`gst-inspect-1.0 {{plugin}}`

- List hardware transcoding capabilities of your device:

`gst-inspect-1.0 {{vaapi|nvcodec|...}}`

- List available container plugins:

`gst-inspect-1.0 {{matroska|avi|ogg|isomp4|...}}`

- List available audio codecs:

`gst-inspect-1.0 {{opus|vorbis|flac|...}}`

- List GStreamer core elements:

`gst-inspect-1.0 coreelements`

- List plugins that utilize graphics APIs:

`gst-inspect-1.0 {{vulkan|opengl|...}}`

- List available image codecs:

`gst-inspect-1.0 {{png|jpeg|...}}`

- List all available plugins:

`gst-inspect-1.0`
