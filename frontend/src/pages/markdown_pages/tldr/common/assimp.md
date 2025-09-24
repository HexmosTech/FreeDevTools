---
title: "Convert 3D Models - Assimp File Converter | Online Free DevTools by Hexmos"
name: assimp
path: /freedevtools/tldr/common/assimp
canonical: "https://hexmos.com/freedevtools/tldr/common/assimp/"
description: "Convert 3D models effortlessly with Assimp File Converter. Easily transform between 40+ formats for Linux, macOS, and Windows. Free online tool, no registration required."
category: common
keywords:
- 3D model converter
- Assimp file conversion
- 3D file format transformation
- STL to OBJ conversion
- 3D model import
- 3D model export
- 3D file analyzer
- Linux 3D conversion
- macOS 3D conversion
- Open Asset Import Library
features:
- Convert between 40+ 3D file formats
- List supported import and export formats
- Display a summary of a 3D file's contents
- Convert files using custom parameters
- Provide help documentation for subcommands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# assimp

> Client for the Open Asset Import Library.
> Supports loading of 40+ 3D file formats, and exporting to several popular 3D formats.
> More information: <https://manned.org/assimp>.

- List all supported import formats:

`assimp listext`

- List all supported export formats:

`assimp listexport`

- Convert a file to one of the supported output formats, using the default parameters:

`assimp export {{input_file.stl}} {{output_file.obj}}`

- Convert a file using custom parameters (the dox_cmd.h file in assimp's source code lists available parameters):

`assimp export {{input_file.stl}} {{output_file.obj}} {{parameters}}`

- Display a summary of a 3D file's contents:

`assimp info {{path/to/file}}`

- Display help:

`assimp help`

- Display help for a specific subcommand:

`assimp {{subcommand}} --help`
