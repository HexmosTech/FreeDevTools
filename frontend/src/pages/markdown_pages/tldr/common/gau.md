---
title: "Fetch URLs - Discover Website URLs with Gau | Online Free DevTools by Hexmos"
name: gau
path: /freedevtools/tldr/common/gau
canonical: "https://hexmos.com/freedevtools/tldr/common/gau/"
description: "Fetch website URLs with Gau, discovering endpoints from multiple sources including Wayback Machine and Common Crawl. Free online tool, no registration required."
category: common
keywords:
- URL discovery
- website URL scraper
- gau command
- find URLs
- web scraping tool
- common crawl URL extraction
- wayback machine url crawler
- open threat exchange URL retrieval
- domain URL enumeration
- website endpoint discovery
features:
- Fetch URLs from AlienVault's Open Threat Exchange
- Extract URLs from the Wayback Machine archives
- Discover URLs from Common Crawl datasets
- Search URLs from specific providers like Wayback or OTX
- Filter URL results within a specified date range
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gau

> Get All URLs: fetch known URLs from AlienVault's Open Threat Exchange, the Wayback Machine, and Common Crawl for any domains.
> More information: <https://github.com/lc/gau>.

- Fetch all URLs of a domain from AlienVault's Open Threat Exchange, the Wayback Machine, Common Crawl, and URLScan:

`gau {{example.com}}`

- Fetch URLs of multiple domains:

`gau {{domain1 domain2 ...}}`

- Fetch all URLs of several domains from an input file, running multiple threads:

`gau --threads {{4}} < {{path/to/domains.txt}}`

- Write [o]utput results to a file:

`gau {{example.com}} --o {{path/to/found_urls.txt}}`

- Search for URLs from only one specific provider:

`gau --providers {{wayback|commoncrawl|otx|urlscan}} {{example.com}}`

- Search for URLs from multiple providers:

`gau --providers {{wayback,otx,...}} {{example.com}}`

- Search for URLs within specific date range:

`gau --from {{YYYYMM}} --to {{YYYYMM}} {{example.com}}`
