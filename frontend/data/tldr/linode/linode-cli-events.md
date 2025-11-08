---
title: "Linode Events - Manage Linode Cloud Events | Online Free DevTools by Hexmos"
name: linode-cli-events
path: "/freedevtools/tldr/linode/linode-cli-events/"
canonical: "https://hexmos.com/freedevtools/tldr/linode/linode-cli-events/"
description: "Manage Linode events effortlessly with linode-cli. Monitor cloud events, view details, and acknowledge actions directly from the command line. Free online tool, no registration required."
category: common
keywords:
- Linode event management
- Cloud event monitoring
- linode-cli events
- Linode API events
- Command-line event viewer
- Server event logs
- Akamai cloud events
- Infrastructure event tracker
- Events notification system
- Linode server monitoring
features:
- List all Linode events on your account.
- View detailed information about a specific event.
- Mark events as read to acknowledge them.
- Manage your Linode cloud infrastructure events.
- Monitor your Linode account using the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# linode-cli events

> Manage Linode events.
> See also: `linode-cli`.
> More information: <https://techdocs.akamai.com/cloud-computing/docs/cli-commands-for-viewing-events>.

- List the events on your account:

`linode-cli events list`

- View details about a specific event:

`linode-cli events view {{event_id}}`

- Mark an event as read:

`linode-cli events mark-read {{event_id}}`
