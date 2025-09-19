---
title: "WebStorm - Open Files & Directories | Online Free DevTools by Hexmos"
name: webstorm
path: /freedevtools/tldr/common/webstorm
canonical: "https://hexmos.com/freedevtools/tldr/common/webstorm/"
description: "Open files and directories with WebStorm. Effortlessly launch projects, compare files, and perform merges using command line. Free online tool, no registration required."
category: common
keywords:
- javascript IDE
- webstorm command line
- jetbrains ide
- webstorm file opener
- webstorm directory opener
- webstorm diff tool
- webstorm merge tool
- webstorm lightedit mode
- webstorm specific line open
- webstorm file compare
features:
- Open directories in WebStorm
- Open specific files in LightEdit mode
- Compare files within WebStorm
- Perform three-way merges
- Open files at a specific line number
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# webstorm

> The JetBrains JavaScript IDE.
> More information: <https://www.jetbrains.com/help/webstorm/working-with-the-ide-features-from-command-line.html>.

- Open the current directory in WebStorm:

`webstorm`

- Open a specific directory in WebStorm:

`webstorm {{path/to/directory}}`

- Open specific files in the LightEdit mode:

`webstorm -e {{path/to/file1 path/to/file2 ...}}`

- Open and wait until done editing a specific file in the LightEdit mode:

`webstorm --wait -e {{path/to/file}}`

- Open a file with the cursor at the specific line:

`webstorm --line {{line_number}} {{path/to/file}}`

- Open and compare files (supports up to 3 files):

`webstorm diff {{path/to/file1 path/to/file2 path/to/optional_file3}}`

- Open and perform a three-way merge:

`webstorm merge {{path/to/left_file}} {{path/to/right_file}} {{path/to/target_file}}`
