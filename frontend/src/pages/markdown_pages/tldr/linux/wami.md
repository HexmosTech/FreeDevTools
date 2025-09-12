---
title: "Tool Recommender - Find Programs for Tasks | Free DevTools"
name: wami
path: /freedevtools/tldr/linux/wami
canonical: "https://hexmos.com/freedevtools/tldr/linux/wami/"
description: "Recommend software solutions with Tool Recommender. Discover optimal programs for any task and improve your workflow. Free online tool, no registration required."
category: linux
keywords:
  - program recommender
  - software suggestion tool
  - task automation tool
  - application finder
  - resource locator
  - pentesting tools
  - security program
  - default credentials finder
  - github topic search
  - open source tools
features:
  - Recommend programs based on a search query.
  - Sort search results in ascending or descending order.
  - Search GitHub for relevant topics.
  - Find tools related to pentesting.
  - Display expanded results from all categories.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wami

> An open-source and easy-to-use tool that recommends suitable programs for tasks.
> More information: <https://github.com/evait-security/wami>.

- Find expanded results in all categories from the lake and sort them in the specified order:

`wami {{[-a|--show-all]}} {{[-S|--sort]}} {{asc|desc}} {{[-s|--search-all]}} {{search_string}}`

- Search GitHub to find expanded results, sorted in descending order:

`wami {{[-a|--show-all]}} {{[-S|--sort]}} desc --github {{search_string}}`

- Search GitHub for topics that match the search string:

`wami --list-topics {{search_string}}`

- Search the lake for a tool used in pentests to query for default credentials and sort the results in descending order:

`wami {{[-S|--sort]}} desc {{[-s|--search-all]}} pentest credential default`
