---
title: "Run Programs as Background - xwinwrap Control | Online Free DevTools by Hexmos"
name: xwinwrap
path: /freedevtools/tldr/linux/xwinwrap
canonical: "https://hexmos.com/freedevtools/tldr/linux/xwinwrap/"
description: "Control background processes with xwinwrap.  Run videos or programs as desktop wallpaper, adjust opacity, and position on multiple monitors. Free online tool, no registration required."
category: linux
keywords:
  - xwinwrap background process
  - xwinwrap video player
  - linux background application
  - xwinwrap desktop wallpaper
  - xwinwrap opacity control
  - xwinwrap multi-monitor support
  - command line backgrounder
  - xwinwrap mpv integration
  - run program as wallpaper
  - linux xwinwrap tutorial
features:
  - Run video files as desktop background.
  - Control program window position and size.
  - Adjust the opacity of the background program.
  - Supports multiple monitors.
  - Integrates seamlessly with mpv video player.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xwinwrap

> Run a player or a program as desktop background.
> More information: <https://github.com/ujjwal96/xwinwrap>.

- Run a video using mpv:

`xwinwrap -b -nf -ov -- {{mpv}} --wid {{wid}} --loop --no-audio --no-resume-playback --panscan={{1.0}} {{path/to/video.mp4}}`

- Run a video in fullscreen using mpv:

`xwinwrap -b -nf -fs -ov -- {{mpv}} --wid {{wid}} --loop --no-audio --no-resume-playback --panscan={{1.0}} {{path/to/video.mp4}}`

- Run a video using mpv with 80% opacity:

`xwinwrap -b -nf -ov -o 0.8 --- {{mpv}} --wid {{wid}} --loop --no-audio --no-resume-playback --panscan={{1.0}} {{path/to/video.mp4}}`

- Run a video using mpv in a second monitor 1600x900 with 1920 offset on X-axis:

`xwinwrap -g 1600x900+1920 -b -nf -ov -- {{mpv}} --wid {{wid}} --loop --no-audio --no-resume-playback --panscan={{1.0}} {{path/to/video.mkv}}`
