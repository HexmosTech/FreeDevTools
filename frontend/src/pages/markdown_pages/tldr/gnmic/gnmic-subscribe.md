---
title: "GNMIC Subscribe - Control Network Device State Updates | Free DevTools"
name: gnmic-subscribe
path: /freedevtools/tldr/gnmic/gnmic-subscribe
canonical: "https://hexmos.com/freedevtools/tldr/gnmic/gnmic-subscribe/"
description: "Control network device state updates with GNMIC Subscribe. Monitor real-time data streams and manage subscriptions using command line. Free online tool, no registration required."
category: common
keywords:
- gnmic subscribe
- network device monitoring
- state update control
- telemetry data stream
- gNMI protocol
- command line interface
- real-time data analysis
- network automation
- configuration management
- data subscription management
features:
- Subscribe to specific data paths on network devices
- Set custom sampling intervals for data updates
- Filter updates to receive only on-change notifications
- Specify data encoding formats for responses
- Retrieve a single data update on demand
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gnmic subscribe

> Subscribe to a gnmic network device state updates.
> More information: <https://gnmic.kmrd.dev/cmd/subscribe>.

- Subscribe to target state updates under the subtree of a specific path:

`gnmic {{[-a|--address]}} {{ip:port}} subscribe --path {{path}}`

- Subscribe to a target with a sample interval of 30s (default is 10s):

`gnmic {{[-a|--address]}} {{ip:port}} subscribe --path {{path}} --sample-interval 30s`

- Subscribe to a target with sample interval and updates only on change:

`gnmic {{[-a|--address]}} {{ip:port}} subscribe --path {{path}} --stream-mode on-change --heartbeat-interval {{1m}}`

- Subscribe to a target for only one update:

`gnmic {{[-a|--address]}} {{ip:port}} subscribe --path {{path}} --mode once`

- Subscribe to a target and specify response encoding (json_ietf):

`gnmic {{[-a|--address]}} {{ip:port}} subscribe --path {{path}} {{[-e|--encoding]}} json_ietf`
