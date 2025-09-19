---
title: "Recon-ng - Automate Reconnaissance | Online Free DevTools by Hexmos"
name: recon-ng
path: /freedevtools/tldr/common/recon-ng
canonical: "https://hexmos.com/freedevtools/tldr/common/recon-ng/"
description: "Automate reconnaissance with Recon-ng for information gathering. Enhance your penetration testing workflow with module marketplace integration. Free online tool, no registration required."
category: common
keywords:
- reconnaissance automation
- information gathering tool
- penetration testing
- recon-ng module marketplace
- open source intelligence
- osint tool
- web scraping
- profile scraping
- network reconnaissance
- linux reconnaissance
features:
- Automates information gathering processes
- Leverages a module marketplace for extended functionality
- Creates workspaces for organized project management
- Scans and scrapes online profiles matching a target
- Enables targeted reconnaissance using module-based techniques
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# recon-ng

> Automated reconnaissance and information gathering tool.
> More information: <https://github.com/lanmaster53/recon-ng/wiki>.

- Start the tool:

`recon-ng`

- Create a workspace:

`workspaces create {{workspace_name}}`

- Search the marketplace for modules used to accomplish different reconnaissance tasks:

`marketplace search`

- Install all available modules (some may need API keys to function completely):

`marketplace install all`

- Load the profiler module. It is used to scan the web for profiles matching the target, scrape them, and store them:

`modules load profiler`

- Insert the target's username. After entering this command, enter the desired username of the search and leave the rest of the options blank:

`db insert profiles`

- Run the current module:

`run`
