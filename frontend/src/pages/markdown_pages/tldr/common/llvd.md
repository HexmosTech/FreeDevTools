---
title: "Download LinkedIn Learning Videos - LLVD Downloader | Online Free DevTools by Hexmos"
name: llvd
path: /freedevtools/tldr/common/llvd
canonical: "https://hexmos.com/freedevtools/tldr/common/llvd/"
description: "Download LinkedIn Learning videos with LLVD. Extract courses, captions, and specify resolutions effortlessly. Free online tool, no registration required."
category: common
keywords:
- LinkedIn Learning video downloader
- LLVD downloader
- course downloader
- video extraction tool
- LinkedIn Learning course download
- video downloader command line
- course download with captions
- online learning downloader
- video resolution control
- cookie-based authentication download
features:
- Download LinkedIn Learning courses using cookie authentication.
- Download courses at specific resolutions.
- Download courses with captions and subtitles.
- Throttle download speeds to avoid detection.
- Extract specific paths within a course.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# llvd

> Linkedin Learning Video Downloader.
> More information: <https://github.com/knowbee/llvd>.

- Download a course using cookie-based authentication:

`llvd {{[-c|--course]}} {{course-slug}} --cookies`

- Download a course at a specific resolution:

`llvd {{[-c|--course]}} {{course-slug}} {{[-r|--resolution]}} 720`

- Download a course with captions (subtitles):

`llvd {{[-c|--course]}} {{course-slug}} {{[-ca|--caption]}}`

- Download a course path with throttling between 10 to 30 seconds:

`llvd {{[-p|--path]}} {{path-slug}} {{[-t|--throttle]}} {{10,30}} --cookies`
