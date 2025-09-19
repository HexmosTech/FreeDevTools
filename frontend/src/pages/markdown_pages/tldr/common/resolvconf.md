---
title: "Resolvconf - Manage Nameserver Info | Online Free DevTools by Hexmos"
name: resolvconf
path: /freedevtools/tldr/common/resolvconf
canonical: "https://hexmos.com/freedevtools/tldr/common/resolvconf/"
description: "Manage nameserver information with resolvconf. Control DNS resolution and update configurations automatically using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- resolvconf manager
- nameserver configuration
- dns resolution linux
- linux resolvconf
- resolv.conf editor
- dns update tool
- resolvconf ubuntu
- resolvconf debian
- network configuration
- dns settings manager
features:
- Add nameserver records to resolv.conf
- Delete nameserver records from resolv.conf
- Update nameserver configurations automatically
- Enable or disable automatic updates
- Check update status for resolvconf
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# resolvconf

> Manage nameserver information.
> Acts as an intermediary between programs that supply nameserver information and applications that use this information.
> This page documents Debian's implementation of `resolvconf`.
> More information: <https://manned.org/resolvconf.8>.

- Add or override the IFACE.PROG record and run the update scripts if updating is enabled:

`resolvconf -a {{IFACE.PROG}}`

- Delete the IFACE.PROG record and run the update scripts if updating is enabled:

`resolvconf -d {{IFACR.PROG}}`

- Just run the update scripts if updating is enabled:

`resolvconf -u`

- Set the flag indicating whether `resolvconf` should run update scripts when invoked with `-a`, `-d` or `-u`:

`resolvconf --enable-updates`

- Clear the flag indicating whether to run updates:

`resolvconf --disable-updates`

- Check whether updates are enabled:

`resolvconf --updates-are-enabled`
