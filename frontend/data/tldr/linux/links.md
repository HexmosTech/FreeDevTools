---
title: "Links Browser - Control Web Navigation | Online Free DevTools by Hexmos"
name: links
path: "/freedevtools/tldr/linux/links/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/links/"
description: "Control web navigation with Links Browser. Access websites, restrict accounts, and manage cookies using this text-based command-line browser. Free online tool, no registration required."
category: linux
keywords:
  - links command browser
  - text based web browser
  - command line web browser
  - links browser linux
  - links browser macos
  - links browser navigation
  - terminal web browser
  - command-line http client
  - anonymous web browsing
  - cookie management links
features:
  - Visit websites from the command line
  - Apply restrictions for anonymous accounts
  - Enable or disable cookies
  - Navigate forward and backward through links
  - Navigate forward and backward through pages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# links

> Command-line text-only web browser.
> See also: `links2'.
> More information: <http://links.twibright.com/user_en.html#subch-browser_calibration>.

- Visit a website:

`links {{https://example.com}}`

- Apply restrictions for anonymous account:

`links -anonymous {{https://example.com}}`

- Enable Cookies (`1` to enable):

`links -enable-cookies {{0|1}} {{https://example.com}}`

- Navigate forwards and backwards through the links on a page:

`{{<ArrowUp>|<ArrowDown>}}`

- Go forwards and backwards one page:

`{{<ArrowLeft>|<ArrowRight>}}`

- Exit:

`<q><y>`
