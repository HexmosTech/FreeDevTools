---
title: "Render Manim Animation - Create Explanatory Math Videos | Online Free DevTools by Hexmos"
name: manim
path: "/freedevtools/tldr/common/manim/"
canonical: "https://hexmos.com/freedevtools/tldr/common/manim/"
description: "Render animations with Manim, the powerful animation engine for creating explanatory math videos. Generate high-quality educational content easily. Free online tool, no registration required."
category: common
keywords:
- manim animation rendering
- python animation engine
- math video generator
- educational animation tool
- scene rendering manim
- manim tutorial
- manim documentation
- manim examples
- manim command line
- manim configuration
features:
- Render scenes from Python scripts with default settings
- Preview renderings with different quality levels
- Customize output file names for rendered videos
- Render videos with specific resolutions and frame rates
- List available scenes in a Python file without rendering
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# manim

> Animation engine for explanatory math videos.
> More information: <https://docs.manim.community/en/stable/tutorials/quickstart.html>.

- Render a scene from a Python script using the default settings:

`manim {{path/to/file.py}} {{SceneName}}`

- Render with live preview (auto-opens the video file after rendering):

`manim {{[-pql|--preview --quality low]}} {{path/to/file.py}} {{SceneName}}`

- Render at high quality (1080p 60fps):

`manim {{[-pqh|--preview --quality high]}} {{path/to/file.py}} {{SceneName}}`

- Specify a custom output file name:

`manim {{[-o|--output_file]}} {{output_file_name}} {{path/to/file.py}} {{SceneName}}`

- Render using a specific resolution and frame rate:

`manim {{[-r|--resolution]}} {{1920,1080}} {{[-f|--fps]}} {{60}} {{path/to/file.py}} {{SceneName}}`

- List available scenes in a file without rendering:

`manim --list_scenes {{path/to/file.py}}`

- Display help:

`manim --help`
