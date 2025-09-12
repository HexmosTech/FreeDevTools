---
title: "Control Media Streams - MediaMTX Server & Proxy | Free DevTools"
name: mediamtx
path: /freedevtools/tldr/linux/mediamtx
canonical: "https://hexmos.com/freedevtools/tldr/linux/mediamtx/"
description: "Control media streams with MediaMTX, a real-time media server and proxy. Streamline live broadcasts and video distribution. Free online tool, no registration required."
category: linux
keywords:
- Media stream server
- Real-time media proxy
- RTSP server linux
- RTMP server linux
- Media streaming linux
- Video distribution server
- Live broadcast server
- HLS server linux
- WebRTC server linux
- MediaMTX configuration
features:
- Serve real-time media streams via RTSP
- Proxy media content for efficient distribution
- Configure media server with YAML files
- Run as a daemon with systemctl
- Support various streaming protocols (RTSP, RTMP, HLS, WebRTC)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mediamtx

> Real-time media server and proxy.
> More information: <https://github.com/bluenviron/mediamtx>.

- Run MediaMTX:

`mediamtx`

- Run MediaMTX with a custom configuration location:

`mediamtx {{path/to/config.yml}}`

- Start MediaMTX as a daemon:

`systemctl start mediamtx`
