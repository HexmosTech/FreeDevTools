---
title: "Generate Wallpaper Color Schemes - wal | Online Free DevTools by Hexmos"
name: wal
path: "/freedevtools/tldr/common/wal/"
canonical: "https://hexmos.com/freedevtools/tldr/common/wal/"
description: "Generate color schemes with wal based on your wallpaper's dominant colors. A command-line tool for creating custom themes. Free online tool, no registration required."
category: common
keywords:
- wallpaper color scheme generator
- wal theme creator
- pywal theme generation
- image color palette extraction
- terminal color scheme
- desktop theme customization
- linux color schemes
- macos color schemes
- wal wallpaper theming
- command line theme tool
features:
- Generate color schemes from image files.
- Preview color schemes before applying.
- Create both light and dark color schemes.
- Restore previously generated color schemes.
- Customize desktop and terminal colors independently.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wal

> Create color schemes based on the dominant colors of a wallpaper.
> More information: <https://github.com/dylanaraps/pywal/wiki/Getting-Started>.

- Preview color scheme:

`wal --preview {{image.png}}`

- Create color scheme:

`wal -i {{image.png}}`

- Create a light color scheme:

`wal -i {{image.png}} -l`

- Skip setting the desktop wallpaper:

`wal -i {{image.png}} -n`

- Skip setting the terminal colors:

`wal -i {{image.png}} -s`

- Restore the previously generated color scheme and wallpaper:

`wal -R`
