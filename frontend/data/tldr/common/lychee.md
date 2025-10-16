---
title: "Validate URLs - Find Broken Links with Lychee | Online Free DevTools by Hexmos"
name: lychee
path: "/freedevtools/tldr/common/lychee/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lychee/"
description: "Validate URLs with Lychee, an efficient broken link checker. Quickly identify and fix broken links on websites and in files. Free online tool, no registration required."
category: common
keywords:
- broken link checker
- URL validator
- website link scanner
- lychee broken links
- command line link checker
- website link validator
- recursive URL check
- URL status checker
- bulk URL validation
- website health check
features:
- Scan websites for broken URLs
- Display detailed error type breakdowns
- Limit connections to prevent DDOS protection
- Recursively check files in directory structures
- Validate URLs from standard input
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lychee

> Find broken URLs.
> More information: <https://github.com/lycheeverse/lychee/blob/master/README.md#commandline-usage>.

- Scan a website for broken links:

`lychee {{https://example.com}}`

- Display a breakdown of error types:

`lychee --format detailed {{https://example.com}}`

- Limit the amount of connections to prevent DDOS protection:

`lychee --max-concurrency {{5}} {{links.txt}}`

- Check files in a directory structure for any broken URLs:

`grep {{[-r|--recursive]}} "{{pattern}}" | lychee -`

- Display help:

`lychee --help`
