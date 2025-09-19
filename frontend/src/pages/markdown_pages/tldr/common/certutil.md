---
title: "Certutil - Manage Certificates & Keys | Online Free DevTools by Hexmos"
name: certutil
path: /freedevtools/tldr/common/certutil
canonical: "https://hexmos.com/freedevtools/tldr/common/certutil/"
description: "Manage certificates and keys with Certutil. Secure your systems and applications. Free online tool, no registration required."
category: common
keywords:
- certutil certificate management
- nss database certificates
- linux certificate utility
- certificate key generation
- certutil private key management
- certutil certificate database
- certutil trust attributes
- certutil server certificate management
- certutil subject alternative names
- common certificate tools
features:
- Create new certificate databases
- List all certificates in a database
- Manage private keys with password protection
- Add signed certificates to databases
- Add subject alternative names to certificates
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# certutil

> Manage keys and certificates in both NSS databases and other NSS tokens.
> More information: <https://manned.org/certutil>.

- Create a [N]ew certificate database in the current [d]irectory:

`certutil -N -d .`

- List all certificates in a database:

`certutil -L -d .`

- List all private [K]eys in a database specifying the password [f]ile:

`certutil -K -d . -f {{path/to/password_file.txt}}`

- [A]dd the signed certificate to the requesters database specifying a [n]ickname, [t]rust attributes and an [i]nput CRT file:

`certutil -A -n "{{server_certificate}}" -t ",," -i {{path/to/file.crt}} -d .`

- Add subject alternative names to a given [c]ertificate with a specific key size ([g]):

`certutil -S -f {{path/to/password_file.txt}} -d . -t ",," -c "{{server_certificate}}" -n "{{server_name}}" -g {{2048}} -s "CN={{common_name}},O={{organization}}"`
