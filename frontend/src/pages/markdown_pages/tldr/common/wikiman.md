---
title: "wikiman Search Tool - Search Documentation Offline | Online Free DevTools by Hexmos"
name: wikiman
path: /freedevtools/tldr/common/wikiman
canonical: "https://hexmos.com/freedevtools/tldr/common/wikiman/"
description: "Search documentation offline with wikiman. Quickly find information in manual pages, Arch Wiki, and other sources using a command-line interface. Free online tool, no registration required."
category: common
keywords:
  - offline documentation search
  - command line documentation search
  - manual page search offline
  - arch wiki search command
  - gentoo wiki search tool
  - freebsd documentation search
  - tldr pages search command
  - linux documentation offline
  - terminal documentation search
  - offline documentation reader
features:
  - Search multiple documentation sources simultaneously.
  - Search specific sources (Arch Wiki, manual pages, etc.).
  - List all available documentation sources.
  - Access command help information.
  - Utilize offline documentation access for faster searches.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wikiman

> Offline search engine for documentation.
> Supports manual pages, Arch Wiki, Gentoo Wiki, FreeBSD documentation, and tldr-pages.
> More information: <https://github.com/filiparag/wikiman>.

- Search for a specific topic in all installed sources:

`wikiman {{search_term}}`

- Search for a topic in a specific [s]ource:

`wikiman -s {{source}} {{search_term}}`

- Search for a topic in two or more specific [s]ources:

`wikiman -s {{source1,source2,...}} {{search_term}}`

- List existing [S]ources:

`wikiman -S`

- Display [h]elp:

`wikiman -h`
