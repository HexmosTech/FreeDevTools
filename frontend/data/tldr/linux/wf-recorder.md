---
title: "Screencast wf-recorder - Record Wayland Screens | Online Free DevTools by Hexmos"
name: wf-recorder
path: "/freedevtools/tldr/linux/wf-recorder/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/wf-recorder/"
description: "Screencast with wf-recorder, a command-line tool to capture Wayland displays. Record video and audio with ease on Linux. Free online tool, no registration required."
category: linux
keywords:
- wayland screencast
- linux screen recorder
- wf-recorder command line
- audio video recording
- desktop recording linux
- wayland video capture
- linux terminal screencast
- mp4 webm recording
- slurp screen selection
- wayland display capture
features:
- Record Wayland screen to MP4 file
- Capture audio from microphone and system sounds
- Select and record a specific screen region using slurp
- Support for specifying output file name and path
- Command-line screen recording
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wf-recorder

> Screencast for Wayland optionally with audio.
> By default you need to end the process with `<Ctrl c>`.
> More information: <https://github.com/ammen99/wf-recorder>.

- Record storing to an MP4 file:

`wf-recorder {{[-f|--file]}} {{output.mp4}}`

- Record including audio, both with mic and system sounds:

`wf-recorder {{[-a|--audio]}} {{[-f|--file]}} /{{path/to/file_with_audio.webm}}`

- Select and record a portion of the screen using `slurp`, outputting to default `recording.mp4`:

`wf-recorder {{[-g|--geometry]}} "$(slurp)"`
