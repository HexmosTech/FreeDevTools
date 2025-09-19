---
title: "List Devices - Monitor GStreamer Devices | Online Free DevTools by Hexmos"
name: gst-device-monitor-1.0
path: /freedevtools/tldr/gst/gst-device-monitor-1.0
canonical: "https://hexmos.com/freedevtools/tldr/gst/gst-device-monitor-1.0/"
description: "List devices with gst-device-monitor-1.0, a GStreamer tool for monitoring audio and video sources/sinks. Identify and track device changes easily. Free online tool, no registration required."
category: common
keywords:
- GStreamer device listing
- GStreamer device monitoring
- audio source detection
- video source detection
- audio sink detection
- video sink detection
- GStreamer device manager
- multimedia device enumeration
- Linux device monitor
- command-line device list
features:
- List all detected audio and video devices
- Monitor devices for changes in real-time
- Filter devices by type (audio/video source/sink)
- Display device properties and capabilities
- Identify device names and descriptions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gst-device-monitor-1.0

> List devices detected by GStreamer.
> More information: <https://manned.org/gst-device-monitor-1.0>.

- List all current devices:

`gst-device-monitor-1.0`

- List all current devices and monitor for any changes:

`gst-device-monitor-1.0 {{[-f|--follow]}}`

- List devices of a specific type:

`gst-device-monitor-1.0 {{Audio|Video}}/{{Source|Sink}}`
