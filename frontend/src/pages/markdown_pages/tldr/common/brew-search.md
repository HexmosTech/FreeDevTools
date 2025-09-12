---
title: "Brew Search - Find Packages and Casks | Free DevTools"
name: brew-search
path: /freedevtools/tldr/common/brew-search
canonical: "https://hexmos.com/freedevtools/tldr/common/brew-search/"
description: "Find packages and casks quickly with Brew Search. Discover Homebrew formulae, locate specific software, and manage dependencies easily. Free online tool, no registration required."
category: common
keywords:
- brew package search
- homebrew cask search
- macos package manager
- formula search brew
- homebrew install search
- cask search macos
- brew search regex
- command line package search
- macos command line tools
- homebrew dependency search
features:
- Search for packages using keywords
- Search for casks using keywords
- Filter results to only show formulae
- Filter results to only show casks
- Search package descriptions using regex
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# brew search

> Search for casks and formulae.
> More information: <https://docs.brew.sh/Manpage#search--s-options-textregex->.

- Search for casks and formulae using a keyword:

`brew search {{keyword}}`

- Search for casks and formulae using a `regex`:

`brew search /{{regex}}/`

- Enable searching through descriptions:

`brew search --desc {{keyword}}`

- Only search for formulae:

`brew search --formula {{keyword}}`

- Only search for casks:

`brew search --cask {{keyword}}`
