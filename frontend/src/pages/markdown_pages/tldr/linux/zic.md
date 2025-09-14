---
title: "Compile Timezones - Generate TZ Binary Files | Free DevTools"
name: zic
path: /freedevtools/tldr/linux/zic
canonical: "https://hexmos.com/freedevtools/tldr/linux/zic/"
description: "Generate timezone binary files with Zic. Compile IANA timezone data, manage timezone conversions, and report warnings. Free online tool, no registration required."
category: linux
keywords:
- Timezone compiler
- TZ file generator
- IANA timezone data
- Linux timezone utility
- Binary timezone converter
- Timezone compilation tool
- Zic command line
- Timezone database compiler
- TZ binary file creation
- Linux timezone configuration
features:
- Compile timezone data from directory
- Report compilation warnings for specific files
- Convert IANA timezone data to binary
- Generate platform-specific timezone files
- Manage timezone conversion rules
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zic

> Compile timezones into binary files.
> More information: <https://manned.org/zic>.

- Compile a timezone file from a directory:

`zic -d {{path/to/directory}}`

- Report warnings during compilation of a specific file:

`zic -v {{path/to/file}}.infile`
