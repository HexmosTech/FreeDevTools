---
title: "Wayback URL Fetcher - Find Domain URLs | Online Free DevTools by Hexmos"
name: waymore
path: /freedevtools/tldr/common/waymore
canonical: "https://hexmos.com/freedevtools/tldr/common/waymore/"
description: "Fetch domain URLs with Wayback URL Fetcher. Discover archived web pages from Wayback Machine, Common Crawl, and more. Free online tool, no registration required."
category: common
keywords:
- Wayback URL Fetcher
- Domain URL Extractor
- Wayback Machine Crawler
- Common Crawl Scanner
- Alien Vault OTX Parser
- URLScan Domain Lookup
- VirusTotal URL Finder
- Archived Webpage Discovery
- Website History Retrieval
- Command Line URL Tool
features:
- Extracts URLs for a given domain from multiple sources.
- Filters search results to output only a list of URLs.
- Retrieves and outputs the content bodies of URLs.
- Filters results based on specified date ranges.
- Stores outputs to user-defined files and directories.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# waymore

> Fetch URLs of a domain from Wayback Machine, Common Crawl, Alien Vault OTX, URLScan, and VirusTotal.
> Note: Unless specified, output is dumped into the `results/` directory where waymore's `config.yml` resides (by default in `~/.config/waymore/`).
> More information: <https://github.com/xnl-h4ck3r/waymore>.

- Search for URLs of a domain (output will typically be in `~/.config/waymore/results/`):

`waymore {{[-i|--input]}} {{example.com}}`

- Limit search results to only include a list of URLs for a domain and store outputs to the specified file:

`waymore -mode U {{[-oU|--output-urls]}} {{path/to/example.com-urls.txt}} {{[-i|--input]}} {{example.com}}`

- Only output the content bodies of URLs and store outputs to the specified directory:

`waymore -mode R {{[-oR|--output-responses]}} {{path/to/example.com-url-responses}} {{[-i|--input]}} {{example.com}}`

- Filter the results by specifying date ranges:

`waymore -from {{YYYYMMDD|YYYYMM|YYYY}} {{[-to|--to-date]}} {{YYYYMMDD|YYYYMM|YYYY}} {{[-i|--input]}} {{example.com}}`
