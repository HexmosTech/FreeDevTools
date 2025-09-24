---
title: "GNMI Get - Snapshot Device Data | Online Free DevTools by Hexmos"
name: gnmic-get
path: /freedevtools/tldr/gnmic/gnmic-get
canonical: "https://hexmos.com/freedevtools/tldr/gnmic/gnmic-get/"
description: "Snapshot device data with GNMI Get. Retrieve real-time network device state using gNMI protocol for efficient monitoring and diagnostics. Free online tool, no registration required."
category: common
keywords:
- gNMI get
- gNMI data retrieval
- Network device snapshot
- gNMI client
- gNMI path query
- Telemetry data extraction
- Real-time network monitoring
- gNMI JSON encoding
- gNMI telemetry
- Network device configuration
features:
- Retrieve real-time network device state at specified paths
- Query multiple device paths with a common prefix
- Specify response encoding for data retrieval (e.g., json_ietf)
- Extract telemetry data using the gNMI protocol
- Get a snapshot of device configuration information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gnmic get

> Get a snapshot of a gnmi network device operation data.
> More information: <https://gnmic.kmrd.dev/cmd/get>.

- Get a snapshot of the device state at a specific path:

`gnmic {{[-a|--address]}} {{ip:port}} get --path {{path}}`

- Query the device state at multiple paths:

`gnmic {{[-a|--address]}} {{ip:port}} get --path {{path/to/file_or_directory1}} --path {{path/to/file_or_directory2}}`

- Query the device state at multiple paths with a common prefix:

`gnmic {{[-a|--address]}} {{ip:port}} get --prefix {{prefix}} --path {{path/to/file_or_directory1}} --path {{path/to/file_or_directory2}}`

- Query the device state and specify response encoding (json_ietf):

`gnmic {{[-a|--address]}} {{ip:port}} get --path {{path}} {{[-e|--encoding]}} json_ietf`
