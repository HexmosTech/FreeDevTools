---
title: "Control Puppet Agent - Apply Configurations | Free DevTools"
name: puppet-agent
path: /freedevtools/tldr/puppet/puppet-agent
canonical: "https://hexmos.com/freedevtools/tldr/puppet/puppet-agent/"
description: "Control Puppet agent configurations with this free online tool. Manage node registrations, apply catalogs, and run agents in dry-mode. Free online tool, no registration required."
category: common
keywords:
- puppet agent configuration
- puppet automation tool
- puppet server agent
- puppet agent management
- puppet catalog application
- puppet agent dry run
- linux puppet agent
- puppet agent disable
- puppet infrastructure automation
- puppet resource evaluation
features:
- Apply configurations from a Puppet server to a local host.
- Register a node with a Puppet server and apply the catalog.
- Run the Puppet agent in foreground or background.
- Simulate configuration changes using dry-run mode.
- Enable or disable the Puppet agent with custom messages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# puppet agent

> Retrieves the client configuration from a Puppet server and applies it to the local host.
> More information: <https://github.com/puppetlabs/puppet/blob/main/references/man/agent.md>.

- Register a node at a Puppet server and apply the received catalog:

`puppet agent --test --server {{puppetserver_fqdn}} --serverport {{port}} --waitforcert {{poll_time}}`

- Run the agent in the background (uses settings from `puppet.conf`):

`puppet agent`

- Run the agent once in the foreground, then exit:

`puppet agent --test`

- Run the agent in dry-mode:

`puppet agent --test --noop`

- Log every resource being evaluated (even if nothing is being changed):

`puppet agent --test --evaltrace`

- Disable the agent:

`puppet agent --disable "{{message}}"`

- Enable the agent:

`puppet agent --enable`
