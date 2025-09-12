---
title: "Create Wordlist - Spider URLs with cewl | Free DevTools"
name: cewl
path: /freedevtools/tldr/unknown/cewl
canonical: "https://hexmos.com/freedevtools/tldr/unknown/cewl/"
description: "Create wordlists from website content with cewl, a powerful URL spidering tool. Extract targeted words and boost penetration testing efforts. Free online tool, no registration required."
category: unknown
keywords:
- URL spidering wordlist
- website wordlist generator
- cewl web scraper
- password cracking wordlist
- penetration testing tool
- web content extraction
- linux wordlist generator
- command line wordlist
- URL analysis tool
- website security testing
features:
- Generate wordlists from specific URLs
- Control link depth during spidering
- Extract alphanumeric words with minimum length
- Filter and extract email addresses from web content
- Authenticate with HTTP Basic or Digest for protected sites
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cewl

> URL spidering tool for making a cracking wordlist from web content.
> More information: <https://digi.ninja/projects/cewl.php#usage>.

- Create a wordlist file from the given URL up to 2 links depth:

`cewl {{[-d|--depth]}} 2 {{[-w|--write]}} {{path/to/wordlist.txt}} {{url}}`

- Output an alphanumeric wordlist from the given URL with words of minimum 5 characters:

`cewl --with-numbers {{[-m|--min_word_length]}} 5 {{url}}`

- Output a wordlist from the given URL in debug mode including email addresses:

`cewl --debug {{[-e|--email]}} {{url}}`

- Output a wordlist from the given URL using HTTP Basic or Digest authentication:

`cewl --auth_type {{basic|digest}} --auth_user {{username}} --auth_pass {{password}} {{url}}`

- Output a wordlist from the given URL through a proxy:

`cewl --proxy_host {{host}} --proxy_port {{port}} {{url}}`
