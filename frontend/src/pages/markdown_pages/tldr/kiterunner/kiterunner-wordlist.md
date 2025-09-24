---
title: "Manage Wordlists - Kiterunner Wordlist | Online Free DevTools by Hexmos"
name: kiterunner-wordlist
path: /freedevtools/tldr/kiterunner/kiterunner-wordlist
canonical: "https://hexmos.com/freedevtools/tldr/kiterunner/kiterunner-wordlist/"
description: "Manage wordlists with Kiterunner. Save and list wordlists for web vulnerability scanning and API discovery using command line. Free online tool, no registration required."
category: common
keywords:
- web vulnerability scanning
- api endpoint discovery
- kiterunner wordlist manager
- wordlist caching
- assetnote wordlists
- web scanner wordlist
- command line wordlist
- web security automation
- directory brute forcing
- file path enumeration
features:
- List available Assetnote wordlists.
- Save specific Assetnote wordlists by alias or filename.
- Save multiple wordlists simultaneously.
- Suppress output when saving wordlists with quiet mode.
- Cache and manage wordlists in the ~/.cache/kiterunner directory.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kiterunner wordlist

> A contextual web scanner for managing wordlists used in API and web endpoint discovery.
> The `wordlist` subcommand handles listing and saving wordlists in `~/.cache/kiterunner`.
> More information: <https://github.com/assetnote/kiterunner>.

- List all cached and available Assetnote wordlists:

`kiterunner wordlist list`

- List wordlists with JSON output:

`kiterunner wordlist list {{[-o|--output]}} {{json}}`

- List wordlists with verbose debug output:

`kiterunner wordlist list {{[-v|--verbose]}} {{debug}}`

- Save a specific Assetnote wordlist by alias:

`kiterunner wordlist save {{apiroutes-210328}}`

- Save a specific Assetnote wordlist by full filename:

`kiterunner wordlist save {{path/to/httparchive_apiroutes_2024_05_28.txt}}`

- Save multiple wordlists by alias:

`kiterunner wordlist save {{apiroutes-210328,aspx-210328}}`

- Save a wordlist with quiet mode to suppress output:

`kiterunner wordlist save {{apiroutes-210328}} {{[-q|--quiet]}}`
