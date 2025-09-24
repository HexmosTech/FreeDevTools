---
title: "Setcap - Set File Capabilities | Online Free DevTools by Hexmos"
name: setcap
path: /freedevtools/tldr/linux/setcap
canonical: "https://hexmos.com/freedevtools/tldr/linux/setcap/"
description: "Set file capabilities with setcap to manage permissions and security attributes for executables. Grant or revoke specific privileges on files. Free online tool, no registration required."
category: linux
keywords:
  - File capabilities
  - Set file attributes
  - Linux file permissions
  - Manage capabilities
  - Command line security
  - Security attributes
  - Cap_net_raw
  - DAC permissions
  - Sys_tty_config
  - Setcap command
features:
  - Grant specific capabilities to files
  - Revoke all capabilities from files
  - Verify existing file capabilities
  - Set effective permitted capabilities
  - Set capabilities within user namespaces
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# setcap

> Set capabilities of specified file.
> See also: `getcap`.
> More information: <https://manned.org/setcap>.

- Set capability `cap_net_raw` (to use RAW and PACKET sockets) for a given file:

`setcap '{{cap_net_raw}}' {{path/to/file}}`

- Set multiple capabilities on a file (`ep` behind the capability means "effective permitted"):

`setcap '{{cap_dac_read_search,cap_sys_tty_config+ep}}' {{path/to/file}}`

- Remove all capabilities from a file:

`setcap -r {{path/to/file}}`

- Verify that the specified capabilities are currently associated with the specified file:

`setcap -v '{{cap_net_raw}}' {{path/to/file}}`

- The optional `-n root_uid` argument can be used to set the file capability for use only in a user namespace with this root user ID owner:

`setcap -n {{root_uid}} '{{cap_net_admin}}' {{path/to/file}}`
