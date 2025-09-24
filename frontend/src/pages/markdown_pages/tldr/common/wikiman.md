---
title: "Search Documentation Offline - wikiman Search Tool | Online Free DevTools by Hexmos"
name: wikiman
path: /freedevtools/tldr/common/wikiman
canonical: "https://hexmos.com/freedevtools/tldr/common/wikiman/"
description: "Search documentation offline with wikiman. Quickly find information in manual pages, Arch Wiki, and other sources using a command-line interface. Free online tool, no registration required."
category: common
keywords:
  - documentation search
  - offline documentation
  - command line documentation
  - manual pages search
  - arch wiki search
  - gentoo wiki search
  - freebsd documentation
  - tldr pages search
  - linux documentation
  - terminal search
features:
  - Search documentation from multiple sources simultaneously
  - Search specific documentation sources by name
  - List available documentation sources
  - Display command help information
  - Provide offline access to documentation
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
