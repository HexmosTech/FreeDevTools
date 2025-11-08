---
title: "Generate SELinux Rules - audit2allow | Online Free DevTools by Hexmos"
name: audit2allow
path: "/freedevtools/tldr/common/audit2allow/"
canonical: "https://hexmos.com/freedevtools/tldr/common/audit2allow/"
description: "Generate SELinux type enforcement rules with audit2allow from audit logs. Identify and resolve permission issues. Free online tool, no registration required."
category: common
keywords:
- audit log SELinux rule generation
- SELinux policy creation from audit logs
- audit2allow SELinux troubleshooting
- Linux audit log analysis
- SELinux policy module generation
- Type Enforcement (TE) rule creation
- SELinux permission denial analysis
- auditd log scanning for SELinux
- SELinux policy customization
- Resolve SELinux access control issues
features:
- Generate SELinux TE rules from audit logs
- Analyze audit logs for permission denials
- Create a reference policy based on installed macros
- Filter analysis based on message type regex
- Explain generated messages with detailed information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# audit2allow

> Scan logs for messages pertaining to denied permissions.
> Generate a report of Type Enforcement (TE) rules that might allow successful operations.
> See also: `audit2why`.
> More information: <https://manned.org/audit2allow>.

- Show all generated messages in audit and message logs:

`audit2allow {{[-a|--all]}}`

- Show all generated messages since last boot:

`audit2allow {{[-b|--boot]}}`

- Display detailed information around generated messages:

`audit2allow {{[-e|--explain]}}`

- Enable verbose output mode:

`audit2allow {{[-v|--verbose]}}`

- Use installed macros to generate a reference policy:

`audit2allow {{[-R|--reference]}}`

- Specify a policy file for further analysis:

`audit2allow {{[-p|--policy]}} {{path/to/policyfile}}`

- Limit analysis to messages with a type specified in `regex`:

`audit2allow {{[-t|--type]}} {{type_regex}}`

- Display help:

`audit2allow {{[-h|--help]}}`
