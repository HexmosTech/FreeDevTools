---
title: "RPC Dump - Discover RPC Endpoints with rpcdump.py | Online Free DevTools by Hexmos"
name: rpcdump.py
path: /freedevtools/tldr/common/rpcdump.py
canonical: "https://hexmos.com/freedevtools/tldr/common/rpcdump.py/"
description: "Discover RPC endpoints with rpcdump.py. Enumerate RPC services and identify potential vulnerabilities for security auditing. Free online tool, no registration required."
category: common
keywords:
- RPC endpoint discovery
- RPC service enumeration
- Windows RPC dump
- Impacket rpcdump.py
- Network service discovery
- Remote procedure call scan
- RPC security audit
- RPC port scanner
- Endpoint Mapper scan
- Network reconnaissance
features:
- Dump RPC endpoints using credentials
- Dump RPC endpoints using NTLM hashes
- Specify target IP address
- Connect to a specific port
- Enable debug output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rpcdump.py

> Dump remote RPC endpoints information via the Endpoint Mapper.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Dump RPC endpoints using username and password:

`rpcdump.py {{domain}}/{{username}}:{{password}}@{{target}}`

- Dump RPC endpoints using NTLM hashes:

`rpcdump.py -hashes {{LMHASH}}:{{NTHASH}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Specify a target IP address explicitly (useful if the target name is a NetBIOS name):

`rpcdump.py -target-ip {{target_ip}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Connect to a specific port (default is 135 for RPC Endpoint Mapper):

`rpcdump.py -port {{port_number}} {{domain}}/{{username}}:{{password}}@{{target}}`

- Enable debug output:

`rpcdump.py -debug {{domain}}/{{username}}:{{password}}@{{target}}`
