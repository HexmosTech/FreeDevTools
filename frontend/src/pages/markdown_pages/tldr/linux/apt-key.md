---
title: "APT Key Manager - Secure Package Updates | Online Free DevTools by Hexmos"
name: apt-key
path: /freedevtools/tldr/linux/apt-key
canonical: "https://hexmos.com/freedevtools/tldr/linux/apt-key/"
description: "Secure APT packages with APT Key Manager. Manage keys, add trusted sources, and maintain package integrity using the command line. Free online tool, no registration required."
category: linux
keywords:
- apt key manager
- linux apt key management
- debian apt-key command
- ubuntu apt-key utility
- apt package verification
- add apt trusted key
- delete apt key
- apt-key security
- apt gpg key
- secure apt updates
features:
- List trusted APT keys
- Add a new APT key from a file
- Delete an existing APT key
- Add a remote key directly from a URL
- Retrieve a key from a keyserver by ID
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apt-key

> Key management utility for the APT Package Manager on Debian and Ubuntu.
> Note: `apt-key` is now deprecated (except for the use of `apt-key del` in maintainer scripts).
> More information: <https://manned.org/apt-key.8>.

- List trusted keys:

`apt-key list`

- Add a key to the trusted keystore:

`apt-key add {{public_key_file.asc}}`

- Delete a key from the trusted keystore:

`apt-key del {{key_id}}`

- Add a remote key to the trusted keystore:

`wget {{[-qO|--quiet --output-document]}} - {{https://host.tld/filename.key}} | apt-key add -`

- Add a key from keyserver with only key ID:

`apt-key adv --keyserver {{pgp.mit.edu}} --recv {{KEYID}}`
