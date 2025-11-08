---
title: "Linode Domains - Manage DNS | Online Free DevTools by Hexmos"
name: linode-cli-domains
path: "/freedevtools/tldr/linode/linode-cli-domains/"
canonical: "https://hexmos.com/freedevtools/tldr/linode/linode-cli-domains/"
description: "Manage Linode domains and DNS configurations with Linode CLI. Easily create, update, and delete domain records. Free online tool, no registration required."
category: common
keywords:
- Linode domains management
- Linode DNS configuration
- linode-cli domains commands
- DNS record management
- domain management command line
- cloud DNS control
- Linux domain configuration
- command line DNS management
- Linode DNS records
- DNS automation
features:
- List all Linode domains.
- Create new Linode domains.
- View details of specific domains.
- Manage DNS records for Linode domains.
- Delete unwanted DNS records.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# linode-cli domains

> Manage Linode Domains and DNS configuration.
> See also: `linode-cli`.
> More information: <https://techdocs.akamai.com/cloud-computing/docs/cli-commands-for-the-dns-manager>.

- List all managed domains:

`linode-cli domains list`

- Create a new managed domain:

`linode-cli domains create --domain {{domain_name}} --type {{master|slave}} --soa-email {{email}}`

- View details of a specific domain:

`linode-cli domains view {{domain_id}}`

- Delete a managed domain:

`linode-cli domains delete {{domain_id}}`

- List records for a specific domain:

`linode-cli domains records-list {{domain_id}}`

- Add a DNS record to a domain:

`linode-cli domains records-create {{domain_id}} --type {{A|AAAA|CNAME|MX|...}} --name {{subdomain}} --target {{target_value}}`

- Update a DNS record for a domain:

`linode-cli domains records-update {{domain_id}} {{record_id}} --target {{new_target_value}}`

- Delete a DNS record from a domain:

`linode-cli domains records-delete {{domain_id}} {{record_id}}`
