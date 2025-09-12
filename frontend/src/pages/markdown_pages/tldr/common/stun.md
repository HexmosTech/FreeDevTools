---
title: "STUN Client - Test Network Connectivity | Free DevTools"
name: stun
path: /freedevtools/tldr/common/stun
canonical: "https://hexmos.com/freedevtools/tldr/common/stun/"
description: "Test network connectivity with STUN Client. Verify NAT traversal and troubleshoot firewall issues using command line. Free online tool, no registration required."
category: common
keywords:
- STUN client
- network connectivity tester
- NAT traversal tool
- firewall testing command
- UDP connectivity test
- linux stun
- macos stun
- command line stun
- VOIP troubleshooting
- network debugging
features:
- Perform STUN requests to specified servers
- Determine public IP address
- Identify NAT type
- Specify source port for STUN requests
- Test network connectivity from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stun

> Classic STUN client.
> More information: <https://manned.org/stun.1>.

- Make a STUN request:

`stun {{stun.1und1.de}}`

- Make a STUN request and specify the source port:

`stun {{stun.1und1.de}} -p {{4302}}`
