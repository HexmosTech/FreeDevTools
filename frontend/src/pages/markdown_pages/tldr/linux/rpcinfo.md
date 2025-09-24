---
title: "RPC Service Control - Manage RPC Calls with rpcinfo | Online Free DevTools by Hexmos"
name: rpcinfo
path: /freedevtools/tldr/linux/rpcinfo
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpcinfo/"
description: "Manage RPC calls effectively with rpcinfo.  Query and control RPC services, view service registrations, and troubleshoot network issues. Free online tool, no registration required."
category: linux
keywords:
  - rpc service control
  - rpcinfo command
  - rpc call management
  - network rpc troubleshooting
  - rpcbind statistics
  - rpc service registration
  - linux rpcinfo
  - rpc service lookup
  - remote procedure call
  - rpc portmapper
features:
  - Show all registered RPC services on a system.
  - Display concise information about RPC services.
  - View statistics of rpcbind operations.
  - Query specific RPC service entries by name and version.
  - Delete RPC service registrations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rpcinfo

> Make an RPC call to an RPC server and reports what it finds.
> More information: <https://manned.org/rpcinfo>.

- Show full table of all RPC services registered on localhost:

`rpcinfo`

- Show concise table of all RPC services registered on localhost:

`rpcinfo -s {{localhost}}`

- Display table of statistics of rpcbind operations on localhost:

`rpcinfo -m`

- Display list of entries of given service name (mountd) and version number (2) on a remote nfs share:

`rpcinfo -l {{remote_nfs_server_ip}} {{mountd}} {{2}}`

- Delete the registration for version 1 of the mountd service for all transports:

`rpcinfo -d {{mountd}} {{1}}`
