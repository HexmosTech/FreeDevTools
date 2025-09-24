---
title: "Generate Animated Tree Diagrams with Gource | Online Free DevTools by Hexmos"
name: gource
path: "/freedevtools/tldr/common/gource"
canonical: "https://hexmos.com/freedevtools/tldr/common/gource/"
description: "Generate animated tree diagrams with Gource for Git repositories, visualizing code evolution. Track commits and file changes easily. Free online tool, no registration required."
category: common
keywords:
- Git visualization
- Repository animation
- Code evolution tracker
- Version control visualization
- Git history explorer
- Command line Git visualization
- Software project history
- Gource animation tool
- Git log animation
- Commit history visualization
features:
- Visualize Git, SVN, Mercurial, and Bazaar repositories
- Animate file and directory creation, modification, and removal
- Customize animation speed and resolution
- Control background color and display title
- Pause and adjust simulation speed during playback
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gource

> Renders an animated tree diagram of Git, SVN, Mercurial and Bazaar repositories.
> It shows files and directories being created, modified or removed over time.
> More information: <https://gource.io>.

- Run gource in a directory (if it isn't the repository's root directory, the root is sought up from there):

`gource {{path/to/repository}}`

- Run gource in the current directory, with a custom output resolution:

`gource -{{width}}x{{height}}`

- Specify how long each day should be in the animation (this combines with -c, if provided):

`gource {{[-s|--seconds-per-day]}} {{seconds}}`

- Use fullscreen mode and a custom background color:

`gource {{[-f|--fullscreen ]}} {{[-b|--background-colour]}} {{hex_color_code}}`

- Specify the animation title:

`gource --title {{title}}`

- Pause the animation:

`<Space>`

- Adjust simulation speed:

`<{{+|-}}>`

- Display help:

`gource {{[-h|--help]}}`
