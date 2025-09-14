---
title: "Z Directory Jumper - Quickly Navigate Directories | Free DevTools"
name: z
path: /freedevtools/tldr/common/z
canonical: "https://hexmos.com/freedevtools/tldr/common/z/"
description: "Quickly jump to directories with Z Directory Jumper. Find frequently used folders using string patterns or regex, increasing command-line efficiency. Free online tool, no registration required."
category: common
keywords:
- directory jumper
- command line navigation
- terminal directory
- z directory tool
- frequent directory access
- regex directory search
- shell directory manager
- linux directory navigation
- macos directory navigation
- command line productivity
features:
- Navigate to frequently used directories using partial names.
- Utilize regular expressions for advanced directory matching.
- Rank directories based on frequency of access.
- Remove directories from the tracked list.
- Restrict matches to subdirectories of the current directory.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# z

> Tracks the most used (by frequency) directories and enables quickly navigating to them using string patterns or `regex`.
> More information: <https://github.com/rupa/z>.

- Go to a directory that contains "foo" in the name:

`z {{foo}}`

- Go to a directory that contains "foo" and then "bar":

`z {{foo}} {{bar}}`

- Go to the highest-ranked directory matching "foo":

`z -r {{foo}}`

- Go to the most recently accessed directory matching "foo":

`z -t {{foo}}`

- List all directories in `z`'s database matching "foo":

`z -l {{foo}}`

- Remove the current directory from `z`'s database:

`z -x`

- Restrict matches to subdirectories of the current directory:

`z -c {{foo}}`
