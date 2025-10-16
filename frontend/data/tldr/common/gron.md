---
title: "Transform JSON - Manage JSON Assignments with gron | Online Free DevTools by Hexmos"
name: gron
path: "/freedevtools/tldr/common/gron/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gron/"
description: "Transform JSON into manageable assignments with gron. Simplify JSON data handling and manipulation using command line. Free online tool, no registration required."
category: common
keywords:
- JSON Transformer
- JSON to assignments
- Command line JSON
- gron JSON manipulation
- Linux JSON tools
- macOS JSON processing
- URL JSON processing
- JSON Stream processor
- JSON assignment creation
- JSON data analysis
features:
- Convert JSON data into individual assignments
- Reverse assignments back into JSON format
- Process JSON data from URLs or files
- Filter and display values within JSON assignments
- Handle streaming JSON data for continuous processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gron

> Transform `JSON` into individual assignments for easier management.
> More information: <https://manned.org/gron>.

- Process `JSON` file into individual assignments:

`gron {{path/to/file|url}}`

- Don't sort output data:

`gron --no-sort {{path/to/file|url}}`

- Disable certificate validation:

`gron {{[-k|--insecure]}} {{url}}`

- Display values of `gron` assignments:

`gron {{[-v|--values]}} {{path/to/file|url}}`

- Turn assignments converted with `gron` back into `JSON`:

`gron {{[-u|--ungron]}} {{path/to/file|url}}`

- Process individual lines of input as separate `JSON` objects:

`gron {{[-s|--stream]}} {{path/to/file|url}}`

- Represent processed data as a `JSON` stream:

`gron {{[-j|--json]}} {{path/to/file|url}}`
