---
title: "Edit Images - Edit Images with GIMP | Online Free DevTools by Hexmos"
name: gimp
path: /freedevtools/tldr/common/gimp
canonical: "https://hexmos.com/freedevtools/tldr/common/gimp/"
description: "Edit images with GIMP image editor. Open, manipulate and enhance your photos with powerful command-line options. Free online tool, no registration required."
category: common
keywords:
- GIMP image editor
- image manipulation tool
- photo editing command line
- GIMP batch processing
- image conversion GIMP
- GIMP command line options
- GIMP scripting
- linux image editing
- macos image editing
- open source image editor
features:
- Open and edit multiple images simultaneously via command line
- Apply batch processing operations to images
- Suppress the splash screen during startup
- Print error and warning messages directly to the console
- Enable debugging for signal handling
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gimp

> GNU image manipulation program.
> See also: `krita`.
> More information: <https://docs.gimp.org/en/gimp-fire-up.html#gimp-concepts-running-command-line>.

- Start GIMP:

`gimp`

- Open specific files:

`gimp {{path/to/image1 path/to/image2 ...}}`

- Open specific files in a new window:

`gimp --new-instance {{path/to/image1 path/to/image2 ...}}`

- Start without a splash screen:

`gimp --no-splash`

- Print errors and warnings to the console instead of showing them in a dialog box:

`gimp --console-messages`

- Enable debugging signal handlers:

`gimp --debug-handlers`
