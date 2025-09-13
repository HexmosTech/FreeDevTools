---
title: "Browse Web - Lynx Command-Line Browser | Free DevTools"
name: lynx
path: /freedevtools/tldr/common/lynx
canonical: "https://hexmos.com/freedevtools/tldr/common/lynx/"
description: "Browse the web with Lynx, a powerful command-line browser. Navigate websites and manage cookies directly from your terminal. Free online tool, no registration required."
category: common
keywords:
- command line web browser
- text based browser
- lynx web browser
- terminal web browsing
- linux web browser
- macos web browser
- cli web browser
- anonymous web browsing
- cookie management browser
- web development command line
features:
- Browse websites from the command line.
- Apply restrictions for anonymous browsing.
- Enable mouse support for navigation.
- Force color mode for enhanced display.
- Manage cookies using a custom file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lynx

> Command-line web browser.
> More information: <https://lynx.browser.org>.

- Visit a website:

`lynx {{example.com}}`

- Apply restrictions for anonymous account:

`lynx -anonymous {{example.com}}`

- Turn on mouse support, if available:

`lynx -use_mouse {{example.com}}`

- Force color mode on, if available:

`lynx -color {{example.com}}`

- Open a link, using a specific file to read and write cookies:

`lynx -cookie_file={{path/to/file}} {{example.com}}`

- Navigate forwards and backwards through the links on a page:

`{{<ArrowUp>|<ArrowDown>}}`

- Go back to the previously displayed page:

`{{<ArrowLeft>|<u>}}`

- Exit:

`<q><y>`
