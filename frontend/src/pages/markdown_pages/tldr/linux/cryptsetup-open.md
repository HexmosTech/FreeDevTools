---
title: "Cryptsetup Open - Create Encrypted Mappings | Free DevTools"
name: cryptsetup-open
path: /freedevtools/tldr/linux/cryptsetup-open
canonical: "https://hexmos.com/freedevtools/tldr/linux/cryptsetup-open/"
description: "Create encrypted mappings with Cryptsetup Open, ensuring secure data storage on Linux. Enable TRIM, use keyfiles, and control disk access. Free online tool, no registration required."
category: linux
keywords:
- LUKS volume mapping
- encrypted drive open
- cryptsetup disk decryption
- linux disk encryption
- cryptsetup mapping create
- persistent LUKS option
- keyfile based decryption
- allow discards cryptsetup
- read-only LUKS volume
- cryptsetup command line
features:
- Create decrypted mappings of encrypted volumes
- Use keyfiles for authentication instead of passphrases
- Allow the use of TRIM on encrypted devices
- Persistently enable TRIM support in LUKS headers
- Open LUKS volumes in read-only mode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cryptsetup open

> Create a decrypted mapping of an encrypted volume.
> Note: With TRIM enabled, minimal data leakage in form of freed block information, perhaps sufficient to determine the filesystem in use may occur.
> However, you still most likely want to enable it, because the data inside is still safe and SSDs without TRIM will wear out faster.
> More information: <https://manned.org/cryptsetup-open>.

- Open a LUKS volume and create a decrypted mapping at `/dev/mapper/mapping_name`:

`cryptsetup open {{/dev/sdXY}} {{mapping_name}}`

- Use a keyfile instead of a passphrase:

`cryptsetup open {{[-k|--key-file]}} {{path/to/file}} {{/dev/sdXY}} {{mapping_name}}`

- Allow the use of TRIM on the device:

`cryptsetup open --allow-discards {{/dev/sdXY}} {{mapping_name}}`

- Write the `--allow-discards` option into the LUKS header (the option will then always be used when you open the device):

`cryptsetup open --allow-discards --persistent {{/dev/sdXY}} {{mapping_name}}`

- Open a LUKS volume and make the decrypted mapping read-only:

`cryptsetup open {{[-r|--readonly]}} {{/dev/sdXY}} {{mapping_name}}`
