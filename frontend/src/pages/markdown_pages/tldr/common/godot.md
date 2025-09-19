---
title: "Godot Game Engine - Create 2D/3D Games | Online Free DevTools by Hexmos"
name: godot
path: /freedevtools/tldr/common/godot
canonical: "https://hexmos.com/freedevtools/tldr/common/godot/"
description: "Create games with Godot game engine. Build 2D and 3D games, export for multiple platforms, and use GDScript. Free online tool, no registration required."
category: common
keywords:
- godot game engine
- 2D game engine
- 3D game engine
- game development
- game creation
- GDScript scripting
- cross-platform game export
- godot command-line
- game project manager
- godot editor
features:
- Run Godot projects from the command line
- Edit Godot projects using the built-in editor
- Manage Godot projects via the project manager
- Export Godot projects for release with custom presets
- Execute standalone GDScript files for testing and automation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# godot

> An open source 2D and 3D game engine.
> More information: <https://docs.godotengine.org/en/latest/tutorials/editor/command_line_tutorial.html>.

- Run a project if the current directory contains a `project.godot` file, otherwise open the project manager:

`godot`

- Edit a project (the current directory must contain a `project.godot` file):

`godot {{[-e|--editor]}}`

- Open the project manager even if the current directory contains a `project.godot` file:

`godot {{[-p|--project-manager]}}`

- Export a project for release using a given export preset (the preset must be defined in the project):

`godot --export-release {{preset}} {{output_path}}`

- Execute a standalone GDScript file (the script must inherit from `SceneTree` or `MainLoop`):

`godot {{[-s|--script]}} {{script.gd}}`
