---
title: "YubiKey Manager - Configure YubiKeys | Online Free DevTools by Hexmos"
name: ykman
path: /freedevtools/tldr/ykman/ykman
canonical: "https://hexmos.com/freedevtools/tldr/ykman/ykman/"
description: "Configure YubiKeys with YubiKey Manager. Manage FIDO, OATH, and OpenPGP applications effortlessly using this command line tool. Free online tool, no registration required."
category: common
keywords:
- yubikey configuration
- yubikey manager
- fido management
- oath management
- openpgp management
- ykman command
- yubikey serial number
- yubikey firmware
- yubico authentication
- two factor authentication
features:
- Display YubiKey general information
- List connected YubiKeys
- Configure application settings
- Manage FIDO applications
- Manage OATH applications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ykman

> YubiKey Manager - configure YubiKeys.
> If there are multiple YubiKeys connected, you have to add `--device serial_number` before a subcommand.
> More information: <https://docs.yubico.com/software/yubikey/tools/ykman/index.html>.

- Display general information about a YubiKey (serial number, firmware version, capabilities, etc.):

`ykman info`

- List connected YubiKeys with short, one-line descriptions (including the serial number):

`ykman list`

- View documentation for enabling and disabling applications:

`tldr ykman config`

- View documentation for managing the FIDO applications:

`tldr ykman fido`

- View documentation for managing the OATH application:

`tldr ykman oath`

- View documentation for managing the OpenPGP application:

`tldr ykman openpgp`
