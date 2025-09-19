---
title: "Linode Tickets - Manage Support Tickets | Online Free DevTools by Hexmos"
name: linode-cli-tickets
path: /freedevtools/tldr/linode/linode-cli-tickets
canonical: "https://hexmos.com/freedevtools/tldr/linode/linode-cli-tickets/"
description: "Manage Linode support tickets effortlessly with Linode CLI. Create, list, and reply to tickets. Free online tool, no registration required."
category: common
keywords:
- linode support tickets
- manage linode tickets
- linode cli tickets
- linode cli support
- cloud support tickets
- linux support tickets
- akamai cloud tickets
- linode ticket management
- linode ticket cli
- akamai linode tickets
features:
- List all your Linode support tickets
- Create new Linode support tickets quickly
- View replies to specific Linode tickets
- Reply directly to Linode tickets via command line
- Manage Linode ticket summaries and descriptions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# linode-cli tickets

> Manage Linode Support Tickets.
> See also: `linode-cli`.
> More information: <https://techdocs.akamai.com/cloud-computing/docs/cli-commands-for-account-management>.

- List your Support Tickets:

`linode-cli tickets list`

- Open a new Ticket:

`linode-cli tickets create --summary "{{Summary or quick title for the Ticket}}" --description "{{Detailed description of the issue}}"`

- List replies to a Ticket:

`linode-cli tickets replies {{ticket_id}}`

- Reply to a specific Ticket:

`linode-cli tickets reply {{ticket_id}} --description "{{The content of your reply}}"`
