---
title: "Create WebP Animations - Webpmux | Online Free DevTools by Hexmos"
name: webpmux
path: /freedevtools/tldr/common/webpmux
canonical: "https://hexmos.com/freedevtools/tldr/common/webpmux/"
description: "Create WebP animations with Webpmux. Generate animated WebP images using command-line tools for efficient image compression. Free online tool, no registration required."
category: common
keywords:
- WebP animation creator
- WebP image sequence
- WebP animation command line
- Webpmux animation tool
- Animated WebP generator
- WebP muxer
- Image compression tool
- Google WebP format
- WebP animation loop
- WebP frame control
features:
- Generate animated WebP images from still frames
- Control animation loop count
- Define frame duration for WebP animations
- Combine multiple WebP images into a single animation
- Specify output file path for WebP animations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# webpmux

> Create WebP animations.
> More information: <https://developers.google.com/speed/webp/docs/webpmux>.

- Create a two-frame animation:

`webpmux -frame {{path/to/frame1.webp}} +{{500}} -frame {{path/to/frame2.webp}} +{{500}} -loop {{0}} -o {{path/to/output.webp}}`
