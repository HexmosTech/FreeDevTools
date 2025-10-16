---
title: "Save Webpage - Convert to Single HTML | Online Free DevTools by Hexmos"
name: monolith
path: "/freedevtools/tldr/common/monolith/"
canonical: "https://hexmos.com/freedevtools/tldr/common/monolith/"
description: "Save webpage content easily with Monolith. Create single HTML files, including or excluding assets for offline use. Free online tool, no registration required."
category: common
keywords:
- single file HTML generator
- webpage to single HTML
- monolith HTML converter
- offline webpage downloader
- website archiver
- HTML asset inliner
- curl alternative
- wget alternative
- command-line HTML tool
- monolith save webpage
features:
- Save webpages as single HTML files
- Exclude specific assets like audio, CSS, images, video, and JavaScript
- Accept invalid TLS certificates
- Specify a specific output file
- Download web pages programmatically for archival
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# monolith

> Save a web page as a single HTML file.
> More information: <https://github.com/Y2Z/monolith>.

- Save a webpage as a single HTML file:

`monolith {{url}}`

- Save a webpage as a single HTML file, excluding audio:

`monolith {{url}} {{[-a|--no-audio]}}`

- Save a webpage as a single HTML file, excluding CSS:

`monolith {{url}} {{[-c|--no-css]}}`

- Save a webpage as a single HTML file, excluding images:

`monolith {{url}} {{[-i|--no-images]}}`

- Save a webpage as a single HTML file, excluding videos:

`monolith {{url}} {{[-v|--no-video]}}`

- Save a webpage as a single HTML file, excluding JavaScript:

`monolith {{url}} {{[-j|--no-js]}}`

- Save a webpage as a single HTML file, accepting invalid TLS certificates:

`monolith {{url}} {{[-k|--insecure]}}`

- Save a webpage as a single HTML file, specifying a specific output file:

`monolith {{url}} {{[-o|--output]}} {{path/to/file.html}}`
