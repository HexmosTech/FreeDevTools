---
title: "Dictionary Lookup - Search DICT Databases | Free DevTools"
name: dict
path: /freedevtools/tldr/common/dict
canonical: "https://hexmos.com/freedevtools/tldr/common/dict/"
description: "Search DICT databases easily with Dictionary Lookup, a command-line tool. Access definitions and information across various databases. Free online tool, no registration required."
category: common
keywords:
- DICT dictionary search
- Command line dictionary
- Network dictionary lookup
- DICT protocol tool
- Online dictionary search
- Linux dictionary
- macOS dictionary
- Dictionary database query
- DICT server information
- Define word command
features:
- List available DICT databases
- Retrieve information about specific databases
- Look up words in a specified database
- Search for word definitions across all databases
- Display DICT server information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dict

> Command line dictionary using the DICT protocol.
> More information: <https://github.com/cheusov/dictd>.

- List available databases:

`dict {{[-D|--dbs]}}`

- Get information about a database:

`dict {{[-i|--info]}} {{database_name}}`

- Look up a word in a specific database:

`dict {{[-d|--database]}} {{database_name}} {{word}}`

- Look up a word in all available databases:

`dict {{word}}`

- Show information about the DICT server:

`dict {{[-I|--serverinfo]}}`
