---
title: "Dictionary Lookup - Search Dictionaries with sdcv | Free DevTools"
name: sdcv
path: /freedevtools/tldr/common/sdcv
canonical: "https://hexmos.com/freedevtools/tldr/common/sdcv/"
description: "Lookup dictionary definitions with sdcv. Search online dictionaries and retrieve definitions using the command line interface. Free online tool, no registration required."
category: common
keywords:
- command line dictionary
- sdcv dictionary lookup
- star dict client
- linux dictionary search
- text dictionary
- online dictionary
- dictionary definition
- command line interface
- thesaurus search
- word definition
features:
- Search for dictionary definitions from the command line
- List installed dictionaries
- Specify a dictionary to use for the search
- Perform fuzzy searches for definitions
- Format output as JSON
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sdcv

> StarDict, a dictionary client.
> Dictionaries are provided separately from the client.
> More information: <https://manned.org/sdcv>.

- Start `sdcv` interactively:

`sdcv`

- List installed dictionaries:

`sdcv --list-dicts`

- Display a definition from a specific dictionary:

`sdcv --use-dict {{dictionary_name}} {{search_term}}`

- Look up a definition with a fuzzy search:

`sdcv {{search_term}}`

- Look up a definition with an exact search:

`sdcv --exact-search {{search_term}}`

- Look up a definition and format the output as JSON:

`sdcv --json {{search_term}}`

- Search for dictionaries in a specific directory:

`sdcv --data-dir {{path/to/directory}} {{search_term}}`
