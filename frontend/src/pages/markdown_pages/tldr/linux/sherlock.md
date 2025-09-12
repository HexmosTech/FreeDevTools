---
title: "Sherlock - Find Usernames | Social Network Search | Free DevTools"
name: sherlock
path: /freedevtools/tldr/linux/sherlock
canonical: "https://hexmos.com/freedevtools/tldr/linux/sherlock/"
description: "Find usernames across social networks with Sherlock. Discover online profiles, track social media presence, and investigate digital footprints. Free online tool, no registration required."
category: linux
keywords:
- username search
- social media investigator
- online profile finder
- digital footprint analysis
- sherlock linux
- social network search linux
- open source intelligence
- osint tool
- social media lookup
- username availability checker
features:
- Search for usernames across multiple social networks
- Output search results to a file or directory
- Utilize the Tor network for anonymous searches
- Use proxies for searches
- Open search results in a web browser
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sherlock

> Find usernames across social networks.
> More information: <https://github.com/sherlock-project/sherlock>.

- Search for a specific username on social networks saving the results to a file:

`sherlock {{username}} --output {{path/to/file}}`

- Search for specific usernames on social networks saving the results into a directory:

`sherlock {{username1 username2 ...}} --folderoutput {{path/to/directory}}`

- Search for a specific username on social networks using the Tor network:

`sherlock --tor {{username}}`

- Make requests over Tor with a new Tor circuit after each request:

`sherlock --unique-tor {{username}}`

- Search for a specific username on social networks using a proxy:

`sherlock {{username}} --proxy {{proxy_url}}`

- Search for a specific username on social networks and open results in the default web browser:

`sherlock {{username}} --browse`

- Display help:

`sherlock --help`
