---
title: "Convert Mesh - Process 3D Meshes with MeshLabserver | Free DevTools"
name: meshlabserver
path: /freedevtools/tldr/common/meshlabserver
canonical: "https://hexmos.com/freedevtools/tldr/common/meshlabserver/"
description: "Process 3D meshes with MeshLabserver, a powerful mesh processing tool. Convert file formats and apply complex filters with ease. Free online tool, no registration required."
category: common
keywords:
- 3D Mesh Converter
- MeshLabserver Command Line
- STL to OBJ Converter
- WRL to OFF Converter
- 3D Model Processing
- Mesh Filter Scripting
- Mesh Normal Generation
- Linux Mesh Conversion
- macOS Mesh Processing
- MeshLab automation
features:
- Convert between various 3D mesh file formats
- Apply complex filter scripts to 3D models
- Generate vertex and face normals for meshes
- Automate mesh processing tasks via command line
- Dump a list of available processing filters to a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# meshlabserver

> Interface for the MeshLab 3D mesh processing software.
> More information: <https://manned.org/meshlabserver>.

- Convert an STL file to an OBJ file:

`meshlabserver -i {{input.stl}} -o {{output.obj}}`

- Convert a WRL file to a OFF file, including the vertex and face normals in the output mesh:

`meshlabserver -i {{input.wrl}} -o {{output.off}} -om vn fn`

- Dump a list of all the available processing filters into a file:

`meshlabserver -d {{path/to/file}}`

- Process a 3D file using a filter script created in the MeshLab GUI (Filters > Show current filter script > Save Script):

`meshlabserver -i {{input.ply}} -o {{output.ply}} -s {{filter_script.mlx}}`

- Process a 3D file using a filter script, writing the output of the filters into a log file:

`meshlabserver -i {{input.x3d}} -o {{output.x3d}} -s {{filter_script.mlx}} -l {{logfile}}`
