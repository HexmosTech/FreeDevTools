---
title: "Search Web Engines - Query Websites with Surfraw | Online Free DevTools by Hexmos"
name: surfraw
path: /freedevtools/tldr/common/surfraw
canonical: "https://hexmos.com/freedevtools/tldr/common/surfraw/"
description: "Query web search engines with Surfraw. Access multiple websites via elvi scripts. Find information quickly and efficiently. Free online tool, no registration required."
category: common
keywords:
- surfraw web search
- command line search
- linux search engine
- unix web query
- elvi search scripts
- website search tool
- command line browser
- surfraw alias search
- open source search
- terminal web search
features:
- Query various web search engines from the command line
- Access websites via elvi search scripts
- Display available elvi and their descriptions
- Print URL for specific searches
- Use aliases for quicker searching
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# surfraw

> Query a variety of web search engines.
> Consists of a collection of elvi, each of which knows how to search a website.
> More information: <https://manned.org/surfraw>.

- Display the list of supported website search scripts (elvi):

`surfraw -elvi`

- Open the elvi's results page for a specific search in the browser:

`surfraw {{elvi_name}} "{{search_terms}}"`

- Display an elvi description and its specific options:

`surfraw {{elvi_name}} {{[-lh|-local-help]}}`

- Search using an elvi with specific options and open the results page in the browser:

`surfraw {{elvi_name}} {{elvi_options}} "{{search_terms}}"`

- Display the URL to the elvi's results page for a specific search:

`surfraw -print {{elvi_name}} "{{search_terms}}"`

- Search using the alias:

`sr {{elvi_name}} "{{search_terms}}"`
