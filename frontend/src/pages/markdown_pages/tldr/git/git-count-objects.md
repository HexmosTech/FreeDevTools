---
title: "Git Count Objects - Analyze Disk Usage | Online Free DevTools by Hexmos"
name: git-count-objects
path: /freedevtools/tldr/git/git-count-objects
canonical: "https://hexmos.com/freedevtools/tldr/git/git-count-objects/"
description: "Analyze git repository disk usage with Git Count Objects. Track unpacked objects and optimize repository size using command line options. Free online tool, no registration required."
category: common
keywords:
- git object count
- git disk usage analysis
- git repository size
- git unpacked objects
- git verbose output
- git human-readable sizes
- git optimization
- git command line tool
- git storage management
- git repository health
features:
- Count unpacked Git objects.
- Display total disk usage of Git objects.
- Show sizes in human-readable format.
- Provide verbose output with detailed information.
- Analyze Git repository storage consumption.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git count-objects

> Count the number of unpacked objects and their disk consumption.
> More information: <https://git-scm.com/docs/git-count-objects>.

- Count all objects and display the total disk usage:

`git count-objects`

- Display a count of all objects and their total disk usage, displaying sizes in human-readable units:

`git count-objects {{[-H|--human-readable]}}`

- Display more verbose information:

`git count-objects {{[-v|--verbose]}}`

- Display more verbose information, displaying sizes in human-readable units:

`git count-objects {{[-H|--human-readable]}} {{[-v|--verbose]}}`
