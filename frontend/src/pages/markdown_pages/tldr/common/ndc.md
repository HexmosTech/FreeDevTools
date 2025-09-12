---
title: "Name Daemon Control - Manage Name Servers | Free DevTools"
name: ndc
path: /freedevtools/tldr/common/ndc
canonical: "https://hexmos.com/freedevtools/tldr/common/ndc/"
description: "Control name servers effectively with Name Daemon Control (ndc). Configure DNS settings, manage zones, and ensure stable name resolution. Free online tool, no registration required."
category: common
keywords:
- name daemon control
- ndc name server control
- DNS server management
- bind9 control
- name server configuration
- domain name management
- DNS zone management
- Linux name server
- UNIX name server control
- name server debugging
features:
- Set control channel rendezvous point
- Bind to a specific localsock address
- Set path to pidfile for signal control
- Enable debugging for troubleshooting
- List available built-in commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ndc

> Name daemon control service for name servers.
> If a command isn't provided, NDC will prompt for one until EOF.
> More information: <https://manned.org/ndc>.

- Set the [c]ontrol channel rendezvous point:

`ndc -c {{channel}} {{command}}`

- Bind the client side to a specific [l]ocalsock address:

`ndc -l {{localsock}} {{command}}`

- Set path to [p]idfile for UNIX signal control:

`ndc -p {{path/to/pidfile}} {{command}}`

- Enable [d]ebugging:

`ndc -d {{command}}`

- Enable [q]uiet mode:

`ndc -q {{command}}`

- Enable nonfatal error [s]uppression:

`ndc -s {{command}}`

- Enable [t]racing for protocol and system debugging:

`ndc -t {{command}}`

- List built-in commands:

`ndc /help`
