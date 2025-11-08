---
title: "Kiterunner Scan - Discover API Endpoints | Online Free DevTools by Hexmos"
name: kiterunner-scan
path: "/freedevtools/tldr/kiterunner/kiterunner-scan/"
canonical: "https://hexmos.com/freedevtools/tldr/kiterunner/kiterunner-scan/"
description: "Discover API endpoints with Kiterunner Scan. Uncover hidden routes and potential vulnerabilities through contextual web scanning. Free online tool, no registration required."
category: common
keywords:
- API endpoint discovery
- web scanner
- contextual scanner
- Kiterunner scanner
- API route scanner
- web directory enumeration
- kitebuilder wordlist scanning
- vulnerability scanning
- API security testing
- web application reconnaissance
features:
- Scan web endpoints using Kitebuilder wordlists.
- Concurrently scan multiple hosts for API paths.
- Customize scan concurrency for optimized performance.
- Ignore specific content length responses for focused results.
- Perform full Kitebuilder scans without phase scanning.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kiterunner scan

> A contextual web scanner for concurrently scanning API paths and web endpoints using kitebuilder wordlists.
> The `scan` subcommand targets one or multiple hosts with structured API requests.
> More information: <https://github.com/assetnote/kiterunner>.

- Scan a target with an Assetnote wordlist (e.g., first 5000 API routes):

`kiterunner scan {{https://example.com}} {{[-A|--assetnote-wordlist]}} {{apiroutes-210228:5000}}`

- Scan a target with a kitebuilder wordlist:

`kiterunner scan {{https://example.com}} {{[-w|--kitebuilder-list]}} {{path/to/wordlist.kite}}`

- Scan multiple hosts from a file with a kitebuilder wordlist:

`kiterunner scan {{path/to/hosts.txt}} {{[-w|--kitebuilder-list]}} {{path/to/wordlist.kite}}`

- Scan with an Assetnote wordlist and JSON output:

`kiterunner scan {{https://example.com}} {{[-A|--assetnote-wordlist]}} {{apiroutes-210228:5000}} -o {{json}}`

- Scan with custom concurrency settings for performance:

`kiterunner scan {{https://example.com}} {{[-w|--kitebuilder-list]}} {{path/to/wordlist.kite}} {{[-x|--max-connection-per-host]}} {{5}} {{[-j|--max-parallel-hosts]}} {{100}}`

- Scan with a wordlist as a normal wordlist, disabling depth scanning:

`kiterunner scan {{https://example.com}} {{[-w|--kitebuilder-list]}} {{path/to/rafter.txt}} {{[-d|--preflight-depth]}} {{0}}`

- Scan with custom headers and ignore specific content length responses:

`kiterunner scan {{https://example.com}} {{[-w|--kitebuilder-list]}} {{path/to/wordlist.kite}} {{[-H|--header]}} "{{Authorization: Bearer token}}" --ignore-length {{100-105}}`

- Perform a full kitebuilder scan without phase scanning:

`kiterunner scan {{https://example.com}} {{[-w|--kitebuilder-list]}} {{path/to/wordlist.kite}} --kitebuilder-full-scan`
