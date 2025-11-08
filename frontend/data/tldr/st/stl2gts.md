---
title: "Convert STL to GTS - Format 3D Models | Online Free DevTools by Hexmos"
name: stl2gts
path: "/freedevtools/tldr/st/stl2gts/"
canonical: "https://hexmos.com/freedevtools/tldr/st/stl2gts/"
description: "Convert STL files to GTS format with stl2gts. Easily convert 3D models between file types. Free online tool, no registration required."
category: common
keywords:
- STL to GTS converter
- 3D model conversion
- STL file format
- GTS file format
- 3D file converter
- Command line 3D conversion
- Linux STL conversion
- MacOS STL conversion
- STL to GTS command
- GNU triangulated surface library
features:
- Convert STL files to GTS format
- Revert face normals during conversion
- Disable vertex merging
- Display surface statistics
- Convert 3D models from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# stl2gts

> Convert STL files into the GTS (GNU triangulated surface library) file format.
> More information: <https://manned.org/stl2gts>.

- Convert an STL file to a GTS file:

`stl2gts < {{path/to/file.stl}} > {{path/to/file.gts}}`

- Convert an STL file to a GTS file and revert face normals:

`stl2gts --revert < {{path/to/file.stl}} > {{path/to/file.gts}}`

- Convert an STL file to a GTS file and do not merge vertices:

`stl2gts --nomerge < {{path/to/file.stl}} > {{path/to/file.gts}}`

- Convert an STL file to a GTS file and display surface statistics:

`stl2gts --verbose < {{path/to/file.stl}} > {{path/to/file.gts}}`

- Display help:

`stl2gts --help`
