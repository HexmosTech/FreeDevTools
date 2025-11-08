---
title: "Play Video - Control Audio/Video Playback with MPV | Online Free DevTools by Hexmos"
name: mpv
path: "/freedevtools/tldr/common/mpv/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mpv/"
description: "Control audio/video playback with MPV. Enhance your media viewing experience by controlling speed and subtitles. Free online tool, no registration required."
category: common
keywords:
- video player control
- audio player control
- mpv media playback
- command-line video
- cli audio player
- subtitle support
- media speed control
- linux video player
- macos video player
- url media playback
features:
- Play audio/video from URL or file paths
- Control playback speed with precise adjustments
- Add external subtitle files for enhanced viewing
- Jump backward/forward with customizable time intervals
- Take screenshots of current video frames
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mpv

> A audio/video player based on MPlayer.
> See also: `mplayer`, `vlc`.
> More information: <https://mpv.io/manual/stable/>.

- Play a video or audio from a URL or file:

`mpv {{url|path/to/file}}`

- Jump backward/forward 5 seconds:

`{{<ArrowLeft>|<ArrowRight>}}`

- Jump backward/forward 1 minute:

`{{<ArrowDown>|<ArrowUp>}}`

- Decrease or increase playback speed by 10%:

`{{<[>|<]>}}`

- Add subtitles from a file:

`mpv --sub-file={{path/to/file}}`

- Take a screenshot of the current frame (saved to `./mpv-shotNNNN.jpg` by default):

`<s>`

- Play a file at a specified speed (1 by default):

`mpv --speed {{0.01..100}} {{path/to/file}}`

- Play a file using a profile defined in the `mpv.conf` file:

`mpv --profile {{profile_name}} {{path/to/file}}`
