---
title: "Create systemd-cryptsetup Mappings | Free DevTools"
name: systemd-cryptsetup
path: /freedevtools/tldr/unknown/systemd-cryptsetup
canonical: "https://hexmos.com/freedevtools/tldr/unknown/systemd-cryptsetup/"
description: "Create systemd-cryptsetup mappings with this tool. Effortlessly open/close encrypted volumes for enhanced data security on Linux systems. Free online tool, no registration required."
category: unknown
keywords:
- systemd cryptsetup mapping
- LUKS volume manager
- encrypted volume control
- crypttab configuration
- systemd disk encryption
- linux systemd tools
- decrypt volume command
- cryptsetup open alternative
- cryptsetup close alternative
- systemd cryptsetup attach
features:
- Create decrypted volume mappings
- Remove existing volume mappings
- Open LUKS volumes with keyfiles
- Configure volume decryption options
- Integrate with systemd for boot unlocking
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-cryptsetup

> Create or remove decrypted mappings of encrypted volumes. Equivalent of `cryptsetup open` and `cryptsetup close`.
> Arguments to this command are written exactly like a line in `/etc/crypttab`. It's used by systemd to unlock devices on boot.
> See also: `cryptsetup`.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-cryptsetup.html>.

- Open a LUKS volume and create a decrypted mapping at `/dev/mapper/mapping_name`:

`systemd-cryptsetup attach {{mapping_name}} {{/dev/sdXY}}`

- Open a LUKS volume with additional options and create a decrypted mapping at `/dev/mapper/mapping_name`:

`systemd-cryptsetup attach {{mapping_name}} {{/dev/sdXY}} none {{crypttab_options}}`

- Open a LUKS volume with a keyfile and create a decrypted mapping at `/dev/mapper/mapping_name`:

`systemd-cryptsetup attach {{mapping_name}} {{/dev/sdXY}} {{path/to/keyfile}} {{crypttab_options}}`

- Remove an existing mapping:

`systemd-cryptsetup detach {{mapping_name}}`
