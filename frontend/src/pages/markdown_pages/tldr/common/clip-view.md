---
title: "Clip-view - Render CLI Pages | Online Free DevTools by Hexmos"
name: clip-view
path: "/freedevtools/tldr/common/clip-view"
canonical: "https://hexmos.com/freedevtools/tldr/common/clip-view/"
description: "Render CLI pages easily with clip-view. Display tldr-like documentation, customize themes, and clear caches effortlessly. Free online tool, no registration required."
category: common
keywords:
- CLI pages render
- command line interface pages
- tldr render
- documentation render
- terminal pages render
- clip-view documentation
- command line help pages
- cli documentation viewer
- render local clip pages
- render remote clip pages
features:
- Render CLI pages in various formats
- Customize render themes for CLI pages
- Clear page and theme caches
- Display help information
- Show the tool version
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# clip-view

> Command Line Interface Pages render.
> Render for a TlDr-like project with much a more extensive syntax and several render modes.
> More information: <https://github.com/command-line-interface-pages/v2-tooling/tree/main/clip-view>.

- Render specific local pages:

`clip-view {{path/to/page1.clip path/to/page2.clip ...}}`

- Render specific remote pages:

`clip-view {{page_name1 page_name2 ...}}`

- Render pages by a specific render:

`clip-view --render {{tldr|tldr-colorful|docopt|docopt-colorful}} {{page_name1 page_name2 ...}}`

- Render pages with a specific color theme:

`clip-view --theme {{path/to/local_theme.yaml|remote_theme_name}} {{page_name1 page_name2 ...}}`

- Clear a page or theme cache:

`clip-view --clear-{{page|theme}}-cache`

- Display help:

`clip-view --help`

- Display version:

`clip-view --version`
