---
title: "ICO - Display Polyhedron Animation | Online Free DevTools by Hexmos"
name: ico
path: "/freedevtools/tldr/linux/ico"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ico/"
description: "Display polyhedron animation with ICO. Visualize complex shapes and control animation parameters with this command-line tool. Free online tool, no registration required."
category: linux
keywords:
- polyhedron animation
- 3D model display
- wireframe visualization
- Linux graphics command
- command-line animation
- ico animation
- geometric shape renderer
- icosahedron display
- command line graphics
- Linux animation tool
features:
- Animate polyhedron shapes from the command line
- Customize colors and background for polyhedron display
- Control animation speed and display parameters
- Render wireframe or solid polyhedron models
- Adjust line width and threading for optimal performance
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ico

> Display an animation of a polyhedron.
> More information: <https://manned.org/ico.1>.

- Display the wireframe of an icosahedron that changes its position every 0.1 seconds:

`ico -sleep {{0.1}}`

- Display a solid icosahedron with red faces on a blue background:

`ico -faces -noedges -colors {{red}} -bg {{blue}}`

- Display the wireframe of a cube with size 100x100 that moves by +1+2 per frame:

`ico -obj {{cube}} -size {{100x100}} -delta {{+1+2}}`

- Display the inverted wireframe of an icosahedron with line width 10 using 5 threads:

`ico -i -lw {{10}} -threads {{5}}`
