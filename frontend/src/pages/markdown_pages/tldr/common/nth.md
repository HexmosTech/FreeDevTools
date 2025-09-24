---
title: "Name Hash - Identify Hash Types Instantly | Online Free DevTools by Hexmos"
name: nth
path: /freedevtools/tldr/common/nth
canonical: "https://hexmos.com/freedevtools/tldr/common/nth/"
description: "Identify hash types instantly with Name Hash, a command-line tool. Supports MD5, SHA1, SHA256, and more. Free online tool, no registration required."
category: common
keywords:
- hash identifier
- hash type identification
- name that hash
- nth command
- hash algorithm recognition
- cryptographic hash analysis
- md5 identifier
- sha256 identifier
- hash reverse engineering
- command line hash tool
features:
- Identify hash types from text input
- Identify hash types from file input
- Decode Base64 encoded hashes
- Output results in JSON format
- Support for a wide range of hash algorithms
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nth

> Name That Hash - Instantly name the type of any hash.
> More information: <https://github.com/hashpals/name-that-hash>.

- Name a hash:

`nth {{[-t|--text]}} {{5f4dcc3b5aa765d61d8327deb882cf99}}`

- Name hashes in a file:

`nth {{[-f|--file]}} {{path/to/hashes}}`

- Print in JSON format:

`nth {{[-t|--text]}} {{5f4dcc3b5aa765d61d8327deb882cf99}} {{[-g|--greppable]}}`

- Decode hash in Base64 before naming it:

`nth {{[-t|--text]}} {{NWY0ZGNjM2I1YWE3NjVkNjFkODMyN2RlYjg4MmNmOTkK}} {{[-b64|--base64]}}`
