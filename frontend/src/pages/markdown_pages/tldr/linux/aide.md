---
title: "AIDE Validate File Integrity - Linux Intrusion Detection | Free DevTools"
name: aide
path: /freedevtools/tldr/linux/aide
canonical: "https://hexmos.com/freedevtools/tldr/linux/aide/"
description: "Validate file integrity with AIDE, the Advanced Intrusion Detection Environment for Linux systems. Detect system changes and ensure security. Free online tool, no registration required."
category: linux
keywords:
- file integrity validation
- intrusion detection linux
- system integrity check
- aide linux command
- file change monitoring
- security audit tool
- linux security hardening
- intrusion prevention system
- file integrity scanner
- aide configuration management
features:
- Initialize the AIDE database for file integrity baseline.
- Check for inconsistencies between current system state and database.
- Compare two AIDE databases based on configuration definitions.
- Update the AIDE database in a non-interactive mode.
- Limit AIDE to a specific string using regular expressions.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aide

> Advanced Intrusion Detection Environment to validate file integrity.
> More information: <https://manned.org/aide>.

- Initialize the database:

`sudo aide {{[-i|--init]}}`

- Check the database for inconsistencies:

`sudo aide {{[-C|--check]}}`

- Compare two databases according to definitions in the config file:

`sudo aide {{[-E|--compare]}}`

- Check and update the database non-interactively:

`sudo aide {{[-u|--update]}}`

- Define a config file to override the default `./aide.conf`:

`sudo aide {{[-c|--config]}} {{path/to/config_file}}`

- Use `regex` to limit AIDE to a specific string:

`sudo aide {{[-l|--limit]}} {{regex}}`

- Send reporter results to a URL:

`sudo aide {{[-r|--report]}} {{reporterurl}}`
