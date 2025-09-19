---
title: "Screen Recorder - GPU Encode Video | Online Free DevTools by Hexmos"
name: gpu-screen-recorder
path: /freedevtools/tldr/linux/gpu-screen-recorder
canonical: "https://hexmos.com/freedevtools/tldr/linux/gpu-screen-recorder/"
description: "GPU Encode Video with Screen Recorder. Capture desktop screen using GPU acceleration. Optimize video recording process for performance with minimal configuration. Free online tool, no registration required."
category: linux
keywords:
  - GPU screen recording
  - GPU video encoding
  - command line screen recorder
  - screen capture utility
  - Linux screen recorder
  - MP4 video encoder
  - desktop screen recorder
  - replay buffer recording
  - video capture source selection
  - audio capture source selection
features:
  - Record screen using GPU acceleration
  - Select specific video or audio sources
  - Record and save replay buffers
  - List available video capture options
  - Encode video to MP4 format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gpu-screen-recorder

> Record the screen and encode the video with a GPU.
> More information: <https://git.dec05eba.com/gpu-screen-recorder/about/>.

- Select a source using a desktop portal and record it:

`gpu-screen-recorder -w portal -o {{path/to/video.mp4}}`

- Specify a specific video source:

`gpu-screen-recorder -w {{screen|DP-1|HDMI-A1|...}} -o {{path/to/video.mp4}}`

- List video capture sources:

`gpu-screen-recorder --list-capture-options`

- List audio capture sources:

`gpu-screen-recorder {{--list-audio-devices|--list-application-audio}}`

- Record using the replay buffer:

`gpu-screen-recorder -w {{screen}} -r {{30}} -c {{mp4}} -ro {{path/to/directory}} -o {{whatever}}`

- Capture a video from the replay buffer:

`pkill -SIGUSR1 -f gpu-screen-recorder`

- Run `gpu-screen-recorder` in the background:

`systemctl start --user gpu-screen-recorder`
