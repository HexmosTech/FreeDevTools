---
title: "Annotate Logging - Control Timestamps with Gnomon | Online Free DevTools by Hexmos"
name: gnomon
path: "/freedevtools/tldr/common/gnomon/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gnomon/"
description: "Control console logging with Gnomon, annotating statements with timestamps to find slow processes. Free online tool, no registration required."
category: common
keywords:
- timestamp annotation
- console logging analysis
- process timing
- command line annotation
- gnomon timestamp
- elapsed time tracker
- log analyzer
- slow process detector
- unix logging
- dos logging
features:
- Annotate console logs with timestamps.
- Identify slow processes through timestamp analysis.
- Display elapsed time since process start.
- Show absolute timestamps in UTC format.
- Customize timestamp coloring based on thresholds.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gnomon

> Utility to annotate console logging statements with timestamps and find slow processes.
> More information: <https://github.com/paypal/gnomon>.

- Use UNIX (or DOS) pipes to pipe `stdout` of any command through gnomon:

`{{npm test}} | gnomon`

- Show number of seconds since the start of the process:

`{{npm test}} | gnomon --type=elapsed-total`

- Show an absolute timestamp in UTC:

`{{npm test}} | gnomon --type=absolute`

- Use a high threshold of 0.5 seconds, exceeding which the timestamp will be colored bright red:

`{{npm test}} | gnomon --high 0.5`

- Use a medium threshold of 0.2 seconds, exceeding which the timestamp will be colored bright yellow:

`{{npm test}} | gnomon --medium {{0.2}}`
