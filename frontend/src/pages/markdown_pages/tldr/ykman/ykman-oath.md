---
title: "Manage YubiKey OATH - Control Authentication | Online Free DevTools by Hexmos"
name: ykman-oath
path: /freedevtools/tldr/ykman/ykman-oath
canonical: "https://hexmos.com/freedevtools/tldr/ykman/ykman-oath/"
description: "Control YubiKey OATH authentication accounts with ykman. Manage secrets, generate TOTP codes, and reset OATH application easily. Free online tool, no registration required."
category: common
keywords:
- YubiKey OATH manager
- OATH authentication tool
- TOTP code generator
- HOTP code generator
- ykman command line
- Two-factor authentication
- Hardware security key
- OATH account management
- Authentication secret manager
- YubiKey password reset
features:
- List OATH accounts and generate TOTP/HOTP codes
- Add, rename, and delete OATH accounts
- Change or clear the access password
- Reset the OATH application to factory settings
- Display information about the OATH application
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ykman oath

> Manage the OATH YubiKey application.
> A `keyword` can be a part of the name or the issuer.
> More information: <https://docs.yubico.com/software/yubikey/tools/ykman/OATH_Commands.html>.

- Display general information about the OATH application:

`ykman oath info`

- Change the password used to protect OATH accounts (add `--clear` to remove it):

`ykman oath access change`

- Add a new account (the issuer is optional):

`ykman oath accounts add {{[-i|--issuer]}} {{issuer}} {{name}}`

- List all accounts (with their issuers):

`ykman oath accounts list`

- List all accounts with their current TOTP/HOTP codes (optionally filtering the list with a keyword):

`ykman oath accounts code {{keyword}}`

- Rename an account:

`ykman oath accounts rename {{keyword}} {{issuer:name|name}}`

- Delete an account:

`ykman oath accounts delete {{keyword}}`

- Delete all accounts and restore factory settings:

`ykman oath reset`
