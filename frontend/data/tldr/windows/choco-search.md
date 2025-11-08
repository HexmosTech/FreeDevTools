---
title: "Choco Search - Find Chocolatey Packages | Online Free DevTools by Hexmos"
name: choco-search
path: "/freedevtools/tldr/windows/choco-search/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-search/"
description: "Find Chocolatey packages easily with Choco Search. Discover, manage, and install software packages on Windows. Free online tool, no registration required."
category: windows
keywords:
- chocolatey package search
- choco search windows
- windows package manager
- command line search
- software package discovery
- choco install package
- windows application search
- choco package lookup
- chocolatey package list
- command line software manager
features:
- Search for Chocolatey packages by name
- Filter search results for exact matches
- Specify a custom source for package searches
- Authenticate package searches with credentials
- Search for packages locally without network access
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# choco search

> Search for a local or remote package with Chocolatey.
> More information: <https://chocolatey.org/docs/commands-search>.

- Search for a package:

`choco search {{query}}`

- Search for a package locally:

`choco search {{query}} --local-only`

- Only include exact matches in the results:

`choco search {{query}} {{[-e|--exact]}}`

- Confirm all prompts automatically:

`choco search {{query}} {{[-y|--yes]}}`

- Specify a custom source to search for packages in:

`choco search {{query}} {{[-s|--source]}} {{source_url|alias}}`

- Provide a username and password for authentication:

`choco search {{query}} {{[-u|--user]}} {{username}} {{[-p|--password]}} {{password}}`
