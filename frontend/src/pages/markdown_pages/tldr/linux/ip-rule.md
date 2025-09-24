---
title: "IP Rule - Control Routing Policy Database | Online Free DevTools by Hexmos"
name: ip-rule
path: /freedevtools/tldr/linux/ip-rule
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip-rule/"
description: "Control routing policy with IP Rule. Manage routing rules, prioritize traffic, and filter packets based on source/destination addresses. Free online tool, no registration required."
category: linux
keywords:
  - IP rule control
  - routing policy management
  - Linux IP rule
  - IP routing rules
  - packet filtering rules
  - traffic prioritization rule
  - source based routing
  - destination based routing
  - IP rule save restore
  - network routing policy
features:
  - Manage IP routing policy database
  - Create new routing rules with custom priorities
  - Add rules based on source or destination addresses
  - Delete specific or all routing rules
  - Save and restore routing rules from a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ip rule

> IP routing policy database management.
> More information: <https://manned.org/ip-rule>.

- Display the routing policy:

`ip {{[ru|rule]}}`

- Create a new generic routing rule with a higher priority than `main`:

`sudo ip {{[ru|rule]}} {{[a|add]}} from all lookup {{100}}`

- Add a new rule based on packet source addresses:

`sudo ip {{[ru|rule]}} {{[a|add]}} from {{192.168.178.2/32}}`

- Add a new rule based on packet destination addresses:

`sudo ip {{[ru|rule]}} {{[a|add]}} to {{192.168.178.2/32}}`

- Delete a rule based on packet source addresses:

`sudo ip {{[ru|rule]}} {{[d|delete]}} from {{192.168.178.2/32}}`

- Remove all routing rules:

`sudo ip {{[ru|rule]}} {{[f|flush]}}`

- Save all rules to a file:

`ip {{[ru|rule]}} {{[s|save]}} > {{path/to/ip_rules.dat}}`

- Restore all rules from a file:

`sudo ip {{[ru|rule]}} {{[r|restore]}} < {{path/to/ip_rules.dat}}`
