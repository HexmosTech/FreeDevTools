---
title: "Soak Input - Control Output Files with Sponge | Online Free DevTools by Hexmos"
name: sponge
path: /freedevtools/tldr/common/sponge
canonical: "https://hexmos.com/freedevtools/tldr/common/sponge/"
description: "Control output files by soaking input with Sponge. Buffer data before writing to prevent data loss and corruption. Free online tool, no registration required."
category: common
keywords:
- file buffering
- output file control
- soak input data
- command line tool
- shell scripting
- file manipulation
- stdin buffer
- stdout buffer
- linux
- common
features:
- Buffer standard input before writing to a file
- Append file content to itself safely
- Prevent data corruption during file modifications
- Work with standard input and output streams
- Facilitate safe in-place file modifications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sponge

> Soak up the input before writing the output file.
> More information: <https://manned.org/sponge>.

- Append file content to the source file:

`cat {{path/to/file}} | sponge -a {{path/to/file}}`

- Remove all lines starting with # in a file:

`grep {{[-v|--invert-match]}} '^{{#}}' {{path/to/file}} | sponge {{path/to/file}}`
