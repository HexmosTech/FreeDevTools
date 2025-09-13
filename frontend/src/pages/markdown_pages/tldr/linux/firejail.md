---
title: "Firejail Sandbox - Securely Control Processes | Free DevTools"
name: firejail
path: /freedevtools/tldr/linux/firejail
canonical: "https://hexmos.com/freedevtools/tldr/linux/firejail/"
description: "Securely control and sandbox processes with Firejail.  Isolate applications and enhance system security using Linux capabilities. Free online tool, no registration required."
category: linux
keywords:
  - linux process sandbox
  - firejail security
  - linux application isolation
  - firejail command line
  - linux containerization
  - process security linux
  - firejail network control
  - linux system security
  - restricted process execution
  - firejail resource limits
features:
  - Restricts process access to system resources.
  - Creates isolated containers for applications.
  - Manages network access for sandboxed processes.
  - Enforces security policies using Linux capabilities.
  - Allows for custom configuration through profiles.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# firejail

> Securely sandboxes processes to containers using built-in Linux capabilities.
> More information: <https://manned.org/firejail>.

- Integrate firejail with your desktop environment:

`sudo firecfg`

- Open a restricted Mozilla Firefox:

`firejail {{firefox}}`

- Start a restricted Apache server on a known interface and address:

`firejail --net={{eth0}} --ip={{192.168.1.244}} {{/etc/init.d/apache2}} {{start}}`

- List running sandboxes:

`firejail --list`

- List network activity from running sandboxes:

`firejail --netstats`

- Shutdown a running sandbox:

`firejail --shutdown={{7777}}`

- Run a restricted Firefox session to browse the internet:

`firejail --seccomp --private --private-dev --private-tmp --protocol=inet firefox --new-instance --no-remote --safe-mode --private-window`

- Use custom hosts file (overriding `/etc/hosts` file):

`firejail --hosts-file={{~/myhosts}} {{curl http://mysite.arpa}}`
