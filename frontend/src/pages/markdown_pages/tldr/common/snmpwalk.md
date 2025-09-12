---
title: "SNMP Query - Control Network Devices | Free DevTools"
name: snmpwalk
path: /freedevtools/tldr/common/snmpwalk
canonical: "https://hexmos.com/freedevtools/tldr/common/snmpwalk/"
description: "Query network devices with SNMPwalk. Retrieve system information, monitor device health, and troubleshoot network issues. Free online tool, no registration required."
category: common
keywords:
- SNMP query tool
- Network monitoring tool
- SNMP walk command
- System information retrieval
- MIB browser online
- Device health check
- Network troubleshooting linux
- SNMPv3 query
- OID query
- snmpwalk example
features:
- Query remote hosts for system information using SNMP
- Retrieve specific information by OID
- Support for SNMPv1, SNMPv2c, and SNMPv3
- Authentication and encryption for secure queries
- Display help and usage instructions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# snmpwalk

> SNMP query tool.
> More information: <https://manned.org/snmpwalk>.

- Query the system information of a remote host using SNMPv1 and a community string:

`snmpwalk -v 1 -c {{community}} {{ip}}`

- Query system information on a remote host by OID using SNMPv2 on a specified port:

`snmpwalk -v 2c -c {{community}} {{ip}}:{{port}} {{oid}}`

- Query system information on a remote host by OID using SNMPv3 and authentication without encryption:

`snmpwalk -v 3 -l {{authNoPriv}} -u {{username}} -a {{MD5|SHA}} -A {{passphrase}} {{ip}} {{oid}}`

- Query system information on a remote host by OID using SNMPv3, authentication, and encryption:

`snmpwalk -v 3 -l {{authPriv}} -u {{username}} -a {{MD5|SHA}} -A {{auth_passphrase}} -x {{DES|AES}} -X {{enc_passphrase}} {{ip}} {{oid}}`

- Query system information on a remote host by OID using SNMPv3 without authentication or encryption:

`snmpwalk -v 3 -l {{noAuthNoPriv}} -u {{username}} {{ip}} {{oid}}`

- Display help:

`snmpwalk {{[-h|--help]}}`
