---
title: "Decode AppArmor Logs - Analyze Audit Trails | Online Free DevTools by Hexmos"
name: aa-decode
path: "/freedevtools/tldr/linux/aa-decode/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-decode/"
description: "Decode AppArmor logs with aa-decode. Analyze security audit trails and enhance system security on Linux using human-readable formats. Free online tool, no registration required."
category: linux
keywords:
- apparmor log decoder
- linux audit analysis
- security log parsing
- apparmor audit trails
- system security analysis
- log file decoder
- hex string decoder
- apparmor troubleshooting
- linux security logs
- aa-decode command
features:
- Decode AppArmor audit logs into human-readable formats
- Analyze AppArmor security events for troubleshooting
- Decode hexadecimal strings from AppArmor logs
- Parse logs from standard input or specified files
- Display help information for command-line usage
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aa-decode

> Decode AppArmor audit logs into a human-readable format.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-decode.8>.

- Decode a hex string:

`aa-decode {{hexstring}}`

- Decode a log file:

`sudo aa-decode {{logfile}}`

- Decode logs from standard input (e.g., redirected file):

`sudo aa-decode - < {{logfile}}`

- Display help:

`aa-decode {{[-h|--help]}}`
