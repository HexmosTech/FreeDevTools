---
title: "Content Discovery - Scan URLs with Feroxbuster | Online Free DevTools by Hexmos"
name: feroxbuster
path: /freedevtools/tldr/common/feroxbuster
canonical: "https://hexmos.com/freedevtools/tldr/common/feroxbuster/"
description: "Scan URLs for content discovery with Feroxbuster, a fast Rust-based tool. Brute-force directories, find hidden paths and enumerate links. Free online tool, no registration required."
category: common
keywords:
- URL scanner
- Content discovery tool
- Web directory brute force
- Hidden path finder
- URL enumeration
- Website crawler
- Directory scanner
- Web content analyzer
- Recursive URL scanner
- Rust web scanner
features:
- Discover hidden directories and files on web servers
- Enumerate web content with recursive scanning
- Extract links from webpages
- Filter scan results by status code
- Scan specific file extensions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# feroxbuster

> Simple, fast, recursive content discovery tool written in Rust.
> Used to brute-force hidden paths on web servers and more.
> More information: <https://epi052.github.io/feroxbuster-docs/docs/>.

- Discover specific directories and files that match in the wordlist with extensions and 100 threads and a random user-agent:

`feroxbuster --url "{{https://example.com}}" --wordlist {{path/to/file}} --threads {{100}} --extensions "{{php,txt}}" --random-agent`

- Enumerate directories without recursion through a specific proxy:

`feroxbuster --url "{{https://example.com}}" --wordlist {{path/to/file}} --no-recursion --proxy "{{http://127.0.0.1:8080}}"`

- Find links in webpages:

`feroxbuster --url "{{https://example.com}}" --extract-links`

- Filter by a specific status code and a number of chars:

`feroxbuster --url "{{https://example.com}}" --filter-status {{301}} --filter-size {{4092}}`
