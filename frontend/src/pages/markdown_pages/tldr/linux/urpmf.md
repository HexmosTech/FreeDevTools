---
title: "Find Linux Packages - Search Files with urpmf | Online Free DevTools by Hexmos"
name: urpmf
path: /freedevtools/tldr/linux/urpmf
canonical: "https://hexmos.com/freedevtools/tldr/linux/urpmf/"
description: "Find Linux packages instantly with urpmf. Locate files within packages and query package information efficiently. Free online tool, no registration required."
category: linux
keywords:
- linux package finder
- urpmf search tool
- file search in packages
- mageia package manager
- linux command line tools
- rpm package lookup
- package content search
- linux dependency finder
- find file in rpm
- package summary search
features:
- Search for files within Linux packages
- Query package information in Mageia
- Filter packages based on keywords in summaries
- Filter packages based on keywords in descriptions
- Exclude packages based on keywords using negation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# urpmf

> Find files in packages and query information about them in Mageia.
> See also: `urpmi`, `urpme`, `urpmi.addmedia`, `urpmi.removemedia`, `urpmi.update`, `urpmq`.
> More information: <https://man.linuxreviews.org/man8/urpmf.8.html>.

- Search for packages that contain a file:

`urpmf {{filename}}`

- Search for packages that contain both a keyword [a]nd another in their summaries:

`urpmf --summary {{keyword1}} -a {{keyword2}}`

- Search for packages that contain a keyword [o]r another in their descriptions:

`urpmf --description {{keyword1}} -o {{keyword2}}`

- Search for packages that do not contain a keyword in their name ignoring case distinction using "|" as the [F]ield separator (":" by default):

`urpmf --description ! {{keyword}} -F'|'`
