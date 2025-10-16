---
title: "SNMP Scanner braa - Scan Networks Fast | Online Free DevTools by Hexmos"
name: braa
path: "/freedevtools/tldr/linux/braa/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/braa/"
description: "Scan networks rapidly with braa SNMP scanner.  Query OIDs, manage network devices, and automate SNMP tasks. Free online tool, no registration required."
category: linux
keywords:
  - snmp scanner
  - network scanner
  - snmp query
  - snmp automation
  - mass snmp scan
  - snmp oid query
  - network monitoring
  - system information
  - snmp walk
  - braa scanner
features:
  - Walk the SNMP tree of a host.
  - Query specific OIDs on multiple hosts simultaneously.
  - Scan entire subnets for specific OIDs.
  - Set SNMP OID values remotely.
  - Supports both public and private SNMP communities.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# braa

> Ultra-fast mass SNMP scanner allowing multiple hosts simultaneously.
> More information: <https://github.com/mteg/braa>.

- Walk the SNMP tree of host with public string querying all OIDs under `.1.3.6`:

`braa public@{{ip}}:{{.1.3.6.*}}`

- Query the whole subnet `ip_range` for `system.sysLocation.0`:

`braa public@{{ip_range}}:{{.1.3.6.1.2.1.1.6.0}}`

- Attempt to set the value of `system.sysLocation.0` to a specific workgroup:

`braa private@{{ip}}:{{.1.3.6.1.2.1.1.6.0}}=s'{{workgroup}}'`
