---
title: "Search Man Pages - Find Commands by Keyword | Online Free DevTools by Hexmos"
name: apropos
path: "/freedevtools/tldr/common/apropos/"
canonical: "https://hexmos.com/freedevtools/tldr/common/apropos/"
description: "Search man pages effortlessly with Apropos. Quickly find commands and descriptions using keywords for Linux, macOS, and other Unix-like systems. Free online tool, no registration required."
category: common
keywords:
- manual page search
- command line search
- linux command search
- macos command search
- unix command finder
- terminal command lookup
- regex manual search
- apropos command
- command description search
- manual page index
features:
- Search manual pages by keyword
- Find commands using regular expressions
- Display long output without terminal width restriction
- Search for pages matching multiple keywords
- Quickly locate command descriptions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apropos

> Search the manual pages for names and descriptions.
> More information: <https://manned.org/apropos>.

- Search for a keyword using a `regex`:

`apropos {{regex}}`

- Search without restricting the output to the terminal width ([l]ong output):

`apropos {{[-l|--long]}} {{regex}}`

- Search for pages that match all the `regex` given:

`apropos {{regex_1}} {{[-a|--and]}} {{regex_2}} {{[-a|--and]}} {{regex_3}}`
