---
title: "Projucer - Manage JUCE Projects | Online Free DevTools by Hexmos"
name: projucer
path: "/freedevtools/tldr/common/projucer/"
canonical: "https://hexmos.com/freedevtools/tldr/common/projucer/"
description: "Manage JUCE projects easily with Projucer. Resave files, update versions, and generate new projects from PIP files. Free online tool, no registration required."
category: common
keywords:
- JUCE project manager
- Projucer command line
- JUCE framework
- PIP project generator
- JUCE project resaver
- JUCE version updater
- C++ project tool
- JUCE comment remover
- Audio plugin development
- Cross-platform project tool
features:
- Resaves all files and resources in a JUCE project
- Updates the version number within a project file
- Generates a JUCE project from a PIP file
- Removes JUCE-style comments from a specified folder
- Displays detailed information about a given JUCE project
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Projucer

> A project manager for JUCE framework applications.
> More information: <https://docs.juce.com/master/projucer_manual.html#projucer_manual_tools_command_line_tools>.

- Display information about a project:

`Projucer --status {{path/to/project_file}}`

- Resave all files and resources in a project:

`Projucer --resave {{path/to/project_file}}`

- Update the version number in a project:

`Projucer --set-version {{version_number}} {{path/to/project_file}}`

- Generate a JUCE project from a PIP file:

`Projucer --create-project-from-pip {{path/to/PIP}} {{path/to/output}}`

- Remove all JUCE-style comments (`//=====`, `//-----` or `///////`):

`Projucer --tidy-divider-comments {{path/to/target_folder}}`

- Display help:

`Projucer --help`
