---
title: "Rename Files - Bulk Rename Files with mmv | Free DevTools"
name: mmv
path: /freedevtools/tldr/common/mmv
canonical: "https://hexmos.com/freedevtools/tldr/common/mmv/"
description: "Bulk rename files with mmv, quickly batch rename files using command-line patterns. Organize your files effortlessly! Free online tool, no registration required."
category: common
keywords:
- bulk file rename
- batch rename files
- mmv command
- rename files linux
- rename files macOS
- command line rename
- filename manipulation
- regular expression rename
- mass rename files
- pattern based renaming
features:
- Rename multiple files simultaneously
- Rename files using regular expressions
- Copy and rename files
- Append to existing files
- Convert date formats in filenames
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mmv

> Move and rename files in bulk.
> More information: <https://manned.org/mmv.1>.

- Rename all files with a certain extension to a different extension:

`mmv "*{{.old_extension}}" "#1{{.new_extension}}"`

- Copy `report6part4.txt` to `./french/rapport6partie4.txt` along with all similarly named files:

`mmv {{[-c|--copy]}} "{{report*part*.txt}}" "{{./french/rapport#1partie#2.txt}}"`

- Append all `.txt` files into one file:

`mmv {{[-a|--append]}} "{{*.txt}}" "{{all.txt}}"`

- Convert dates in filenames from "M-D-Y" format to "D-M-Y" format:

`mmv "{{[0-1][0-9]-[0-3][0-9]-[0-9][0-9][0-9][0-9].txt}}" "{{#3#4-#1#2-#5#6#7#8.txt}}"`
