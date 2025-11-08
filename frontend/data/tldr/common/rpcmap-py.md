---
title: "Lookup MSRPC Interfaces - Control RPC Connections | Online Free DevTools by Hexmos"
name: rpcmap.py
path: "/freedevtools/tldr/common/rpcmap-py/"
canonical: "https://hexmos-com/freedevtools/tldr/common/rpcmap-py/"
description: "Lookup MSRPC interfaces with rpcmap.py. Discover listening RPC endpoints and brute-force UUIDs for penetration testing. Free online tool, no registration required."
category: common
keywords:
- MSRPC interface lookup
- RPC connection discovery
- Windows RPC enumeration
- Impacket rpcmap.py tool
- Network service discovery
- Penetration testing tool
- MSRPC endpoint mapper
- RPC authentication bypass
- RPC UUID brute force
- ncacn_ip_tcp scanning
features:
- Discover listening MSRPC interfaces using string bindings
- Bruteforce UUIDs even with available MGMT interface
- Bruteforce operation numbers for discovered UUIDs
- Bruteforce major versions of found UUIDs
- Authenticate to RPC interfaces using usernames, passwords, or NTLM hashes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rpcmap.py

> Lookup listening MSRPC interfaces using a string binding (e.g., `ncacn_ip_tcp:host[port]`).
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Connect to an MSRPC interface using a string binding (e.g., `ncacn_ip_tcp:host[port]`):

`rpcmap.py {{stringbinding}}`

- Bruteforce UUIDs even if the MGMT interface is available:

`rpcmap.py -brute-uuids {{stringbinding}}`

- Bruteforce operation numbers (opnums) for discovered UUIDs:

`rpcmap.py -brute-opnums {{stringbinding}}`

- Bruteforce major versions of found UUIDs:

`rpcmap.py -brute-versions {{stringbinding}}`

- Specify a target IP address manually:

`rpcmap.py -target-ip {{ip_address}} {{stringbinding}}`

- Authenticate to the RPC interface with username and password:

`rpcmap.py -auth-rpc {{domain}}/{{username}}:{{password}} {{stringbinding}}`

- Authenticate using NTLM hashes for RPC:

`rpcmap.py -hashes-rpc {{LMHASH:NTHASH}} {{stringbinding}}`

- Enable debug output for verbose information:

`rpcmap.py -debug {{stringbinding}}`
