---
title: "SNMPGet - Query SNMP Devices | Online Free DevTools by Hexmos"
name: snmpget
path: "/freedevtools/tldr/common/snmpget/"
canonical: "https://hexmos.com/freedevtools/tldr/common/snmpget/"
description: "Query SNMP devices using SNMPGet. Retrieve specific data points or display full OID paths. Free online tool, no registration required."
category: common
keywords:
- snmp data retrieval
- snmp query tool
- network management protocol
- snmpget command
- snmp v1 v2c v3
- oid snmp
- snmp agent query
- linux snmpget
- command line snmp
- network monitoring snmp
features:
- Retrieve single values from SNMP agents
- Display the full Object Identifier (OID) path
- Support different SNMP versions (v1, v2c, v3)
- Allow specifying the community string
- Accept IP addresses as targets
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# snmpget

> Query using the SNMP protocol.
> More information: <https://manned.org/snmpget>.

- Request a single value from the SNMP agent:

`snmpget -v {{version}} -c {{community}} {{ip}} {{oid}}`

- Display the full Object Identifier (OID) path:

`snmpget -v {{version}} -c {{community}} -O f {{ip}} {{oid}}`

- Display help:

`snmpget {{[-h|--help]}}`
