---
title: "Brute Force APIs - Kiterunner Brute | Free DevTools"
name: kiterunner-brute
path: "/freedevtools/tldr/common/kiterunner-brute"
canonical: "https://hexmos.com/freedevtools/tldr/common/kiterunner-brute/"
description: "Brute force API endpoints with Kiterunner Brute, a contextual web scanner. Discover hidden paths and vulnerabilities. Free online tool, no registration required."
category: common
keywords:
- API brute force
- Kiterunner brute force
- web endpoint scanner
- directory brute force
- web path discovery
- vulnerability scanner
- API security testing
- web application security
- kiterunner
- web content discovery
features:
- Brute force targets with Assetnote wordlists
- Perform directory brute forcing with custom wordlists
- Utilize dirsearch-style wordlists with extension substitution
- Filter fail status codes during brute forcing
- Customize HTTP headers for brute force requests
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kiterunner brute

> A contextual web scanner for bruteforcing API paths and web endpoints using wordlists.
> The `brute` subcommand targets one or multiple hosts.
> More information: <https://github.com/assetnote/kiterunner>.

- Bruteforce a target with an Assetnote wordlist (e.g., first 20,000 API routes):

`kiterunner brute {{https://example.com}} {{[-A|--assetnote-wordlist]}} {{apiroutes-210328:20000}}`

- Bruteforce a target with a custom wordlist:

`kiterunner brute {{https://example.com}} {{[-w|--wordlist]}} {{path/to/wordlist.txt}}`

- Bruteforce using a dirsearch-style wordlist with extension substitution:

`kiterunner brute {{https://example.com}} {{[-w|--wordlist]}} {{path/to/dirsearch.txt}} {{[-D|--dirsearch-compat]}} {{[-e|--extensions]}} {{json,txt}}`

- Bruteforce with specific file extensions appended and output in JSON format:

`kiterunner brute {{https://example.com}} {{[-w|--wordlist]}} {{path/to/wordlist.txt}} {{[-e|--extensions]}} {{aspx,ashx}} {{[-o|--output]}} {{json}}`

- Bruteforce a list of targets from a file with custom concurrency settings for performance:

`kiterunner brute {{path/to/targets.txt}} {{[-w|--wordlist]}} {{path/to/wordlist.txt}} {{[-x|--max-connection-per-host]}} {{5}} {{[-j|--max-parallel-hosts]}} {{100}}`

- Bruteforce and ignore specific content length responses:

`kiterunner brute {{https://example.com}} {{[-w|--wordlist]}} {{path/to/wordlist.txt}} --ignore-length {{100-105}}`

- Bruteforce with custom HTTP headers:

`kiterunner brute {{https://example.com}} {{[-w|--wordlist]}} {{path/to/wordlist.txt}} {{[-H|--header]}} "{{Authorization: Bearer token}}"`

- Bruteforce a list of targets from a file with fail status code filtering:

`kiterunner brute {{path/to/targets.txt}} {{[-w|--wordlist]}} {{path/to/wordlist.txt}} --fail-status-codes {{400,401,404}}`
