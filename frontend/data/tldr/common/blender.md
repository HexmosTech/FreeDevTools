---
title: "Blender - Render 3D Graphics via Command Line | Online Free DevTools by Hexmos"
name: blender
path: "/freedevtools/tldr/common/blender/"
canonical: "https://hexmos.com/freedevtools/tldr/common/blender/"
description: "Render 3D graphics with Blender using command line arguments. Control animation output, frame rendering, and scene settings effortlessly. Free online tool, no registration required."
category: common
keywords:
- 3D rendering command line
- blender command line render
- animation rendering cli
- background rendering blender
- scene rendering blender
- frame rendering blender
- blender batch render
- cli 3d graphics rendering
- blender python scripting
- blender automation
features:
- Render animations in the background
- Control rendering output path and naming
- Render specific frames from an animation
- Render specific scenes within a Blender file
- Execute Python expressions for advanced rendering controls
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# blender

> Command-line interface to the Blender 3D computer graphics application.
> Arguments are executed in the order they are given.
> More information: <https://docs.blender.org/manual/en/latest/advanced/command_line/arguments.html>.

- Render all frames of an animation in the background, without loading the UI (output is saved to `/tmp`):

`blender {{[-b|--background]}} {{path/to/file.blend}} {{[-a|--render-anim]}}`

- Render an animation using a specific image naming pattern, in a path relative (`//`) to the .blend file:

`blender {{[-b|--background]}} {{path/to/file.blend}} {{[-o|--render-output]}} //{{render/frame_###.png}} {{[-a|--render-anim]}}`

- Render the 10th frame of an animation as a single image, saved to an existing directory (absolute path):

`blender {{[-b|--background]}} {{path/to/file.blend}} {{[-o|--render-output]}} /{{path/to/output_directory}} {{[-f|--render-frame]}} {{10}}`

- Render the second last frame in an animation as a JPEG image, saved to an existing directory (relative path):

`blender {{[-b|--background]}} {{path/to/file.blend}} {{[-o|--render-output]}} //{{output_directory}} {{[-f|--render-frame]}} {{JPEG}} {{[-f|--render-frame]}} {{-2}}`

- Render the animation of a specific scene, starting at frame 10 and ending at frame 500:

`blender {{[-b|--background]}} {{path/to/file.blend}} {{[-S|--scene]}} {{scene_name}} {{[-s|--frame-start]}} {{10}} {{[-e|--frame-end]}} {{500}} {{[-a|--render-anim]}}`

- Render an animation at a specific resolution, by passing a Python expression:

`blender {{[-b|--background]}} {{path/to/file.blend}} --python-expr '{{import bpy; bpy.data.scenes[0].render.resolution_percentage = 25}}' {{[-a|--render-anim]}}`

- Start an interactive Blender session in the terminal with a Python console (do `import bpy` after starting):

`blender {{[-b|--background]}} --python-console`
