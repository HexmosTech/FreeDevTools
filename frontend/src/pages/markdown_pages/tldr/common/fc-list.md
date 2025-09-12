---
title: "List Fonts - View Installed Fonts with fc-list | Free DevTools"
name: fc-list
path: /freedevtools/tldr/common/fc-list
canonical: "https://hexmos.com/freedevtools/tldr/common/fc-list/"
description: "List fonts installed on your system with fc-list. Quickly identify available fonts and their properties. Free online tool, no registration required."
category: common
keywords:
- font listing
- font information
- font inventory
- linux fonts
- fc-list command
- list fonts linux
- font management
- command line fonts
- font details
- installed fonts
features:
- Display all installed fonts
- Filter fonts by name using grep
- Count the number of installed fonts
- List fonts supporting a specific language
- List fonts containing a specific character
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fc-list

> List available fonts installed on the system.
> More information: <https://manned.org/fc-list>.

- Return a list of installed fonts:

`fc-list`

- Return a list of installed fonts with given name:

`fc-list | grep '{{DejaVu Serif}}'`

- Return the number of installed fonts:

`fc-list | wc {{[-l|--lines]}}`

- Return a list of installed fonts that support the language based on its locale code:

`fc-list :lang={{jp}}`

- Return a list of installed fonts that contain the glyph specified by its Unicode code-point:

`fc-list :charset={{f303}}`
