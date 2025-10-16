---
title: "Onion Search - Scrape Onion URLs | Online Free DevTools by Hexmos"
name: onionsearch
path: "/freedevtools/tldr/common/onionsearch/"
canonical: "https://hexmos.com/freedevtools/tldr/common/onionsearch/"
description: "Scrape .onion URLs with OnionSearch. Discover hidden services and explore the dark web with specific search engines. Free online tool, no registration required."
category: common
keywords:
- onion url scraper
- dark web search
- hidden service finder
- onion search engine
- tor url crawler
- deep web scraper
- onion domain analyzer
- .onion link extractor
- tor search tool
- onion search linux
features:
- Scrape URLs from multiple .onion search engines
- Target specific search engines for focused results
- Exclude unwanted search engines from scraping
- Limit the number of pages loaded per engine
- Identify all supported search engines via command-line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# onionsearch

> Scrape URLs on different `.onion` search engines.
> Note: `onionsearch` requires a Tor proxy running on `localhost:9050`; a Tor enabled browser is needed to visit the `.onion` websites.
> More information: <https://github.com/megadose/OnionSearch>.

- Request results from all the search engines:

`onionsearch "{{string}}"`

- Request search results from specific search engines:

`onionsearch "{{string}}" --engines {{tor66 deeplink phobos ...}}`

- Exclude certain search engines when searching:

`onionsearch "{{string}}" --exclude {{candle ahmia ...}}`

- Limit the number of pages to load per engine:

`onionsearch "{{stuxnet}}" --engines {{tor66 deeplink phobos ...}} --limit {{3}}`

- List all supported search engines:

`onionsearch --help | grep {{[-A|--after-context]}} 1 {{[-i|--ignore-case]}} "supported engines"`
