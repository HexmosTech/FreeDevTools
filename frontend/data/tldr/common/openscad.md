---
title: "Create 3D Models - OpenSCAD | Online Free DevTools by Hexmos"
name: openscad
path: "/freedevtools/tldr/common/openscad/"
canonical: "https://hexmos.com/freedevtools/tldr/common/openscad/"
description: "Create 3D models with OpenSCAD. Generate solid CAD objects and convert them to various formats like STL or PNG. Free online tool, no registration required."
category: common
keywords:
- 3D model generator
- OpenSCAD CAD software
- STL file converter
- PNG rendering tool
- Solid CAD design
- OpenSCAD command line
- 3D modeling software
- CAD object creation
- Linux CAD tools
- MacOS CAD tools
features:
- Open and view OpenSCAD files
- Convert OpenSCAD files to STL format
- Render OpenSCAD files to PNG images
- Customize PNG rendering with color schemes
- Generate solid 3D CAD objects from scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openscad

> Software for creating solid 3D CAD objects.
> More information: <https://manned.org/openscad>.

- Open a file:

`openscad {{path/to/button.scad}}`

- Convert a file to STL:

`openscad -o {{path/to/button.stl}} {{path/to/button.scad}}`

- Render a file to PNG in a specific colorscheme:

`openscad -o {{path/to/button.png}} --colorscheme {{Sunset}} {{path/to/button.scad}}`
