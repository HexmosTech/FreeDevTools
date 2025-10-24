---
title: 'GStreamer Launch - Build Pipelines | Online Free DevTools by Hexmos'
name: gst-launch
path: '/freedevtools/tldr/gst/gst-launch/'
canonical: 'https://hexmos-com/freedevtools/tldr/gst/gst-launch/'
description: 'Build GStreamer pipelines with gst-launch-1.0. Create multimedia processing workflows and stream media easily. Free online tool, no registration required.'
category: common
keywords:
  - gstreamer pipeline builder
  - multimedia pipeline creator
  - gst-launch command
  - gstreamer command line
  - video stream encoder
  - audio stream encoder
  - linux multimedia processing
  - gstreamer debugging tool
  - gstreamer RTSP streaming
  - gstreamer mp4 muxer
features:
  - Build and run GStreamer pipelines from the command line
  - Play video and audio test streams
  - Re-encode multimedia files
  - Stream media content to an RTSP server
  - Multiplex video and audio streams into a single file
ogImage: 'https://hexmos.com/freedevtools/site-banner.png'
twitterImage: 'https://hexmos.com/freedevtools/site-banner.png'
---

# gst-launch-1.0

> Build and run a GStreamer pipeline.
> See also: `gst-inspect-1.0`.
> More information: <https://gstreamer.freedesktop.org/documentation/tools/gst-launch.html>.

- Play test video in a window:

`gst-launch-1.0 videotestsrc ! autovideosink`

- Play test audio:

`gst-launch-1.0 audiotestsrc ! autoaudiosink`

- Play a media file in a window:

`gst-launch-1.0 playbin uri={{protocol}}://{{host}}/{{path/to/file}}`

- Re-encode a media file:

`gst-launch-1.0 filesrc location={{path/to/file}} ! {{file_type}}demux ! {{codec_type}}dec ! {{codec_type}}enc ! {{file_type}}mux ! filesink location={{path/to/file}}`

- Stream a file to an RTSP server:

`gst-launch-1.0 filesrc location={{path/to/file}} ! rtspclientsink location=rtsp://{{host_IP}}/{{path/to/file}}`

- Force an End Of Stream event if the pipeline is shut down with `<Ctrl c>` for containers that require finalization such as `mp4`:

`gst-launch-1.0 {{[-e|--eos-on-shutdown]}} videotestsrc ! x264enc ! mp4mux ! filesink location={{path/to/file.mp4}}`

- Multiplex together test video and test audio into a file:

`gst-launch-1.0 {{[-e|--eos-on-shutdown]}} videotestsrc ! x264enc ! {{element_name}}. audiotestsrc ! opusenc ! {{element_name}}. matroskamux name={{element_name}} ! filesink location={{path/to/file.mkv}}`

- Dump a pipeline into a `.dot` file which can then be rendered with tools like `dot`:

`GST_DEBUG_DUMP_DOT_DIR={{path/to/directory}} gst-launch-1.0 {{pipeline}}`
