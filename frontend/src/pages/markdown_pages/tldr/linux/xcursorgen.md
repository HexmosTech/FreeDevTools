---
title: "X Cursor Generate - Create Cursors from PNGs | Free DevTools"
name: xcursorgen
path: /freedevtools/tldr/linux/xcursorgen
canonical: "https://hexmos.com/freedevtools/tldr/linux/xcursorgen/"
description: "Generate X cursor files from PNG collections with xcursorgen. Customize cursor appearance and create visually appealing mouse pointers. Free online tool, no registration required."
category: linux
keywords:
  - X cursor generator
  - PNG to cursor conversion
  - X11 cursor creator
  - Linux cursor design
  - Custom cursor maker
  - X cursor configuration
  - Cursor appearance customization
  - X cursor from images
  - Xcursor file creation
  - Cursor theming tool
features:
  - Generate X cursor files from PNG images
  - Customize cursor hotspot positions
  - Specify image path prefixes for cursor generation
  - Output cursor data to stdout
  - Create cursors from configuration files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xcursorgen

> Create an X cursor file from a collection of PNGs.
> If `--prefix` is omitted, the image files must be located in the current working directory.
> More information: <https://manned.org/xcursorgen>.

- Create an X cursor file using a configuration file:

`xcursorgen {{path/to/config.cursor}} {{path/to/output_file}}`

- Create an X cursor file using a configuration file and specify the path to the image files:

`xcursorgen --prefix {{path/to/image_directory}}/ {{path/to/config.cursor}} {{path/to/output_file}}`

- Create an X cursor file using a configuration file and write the output to `stdout`:

`xcursorgen {{path/to/config.cursor}}`
