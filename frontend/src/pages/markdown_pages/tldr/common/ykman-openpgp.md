---
title: "OpenPGP Manager - Control YubiKey OpenPGP Application | Free DevTools"
name: ykman-openpgp
path: /freedevtools/tldr/common/ykman-openpgp
canonical: "https://hexmos.com/freedevtools/tldr/common/ykman-openpgp/"
description: "Control YubiKey OpenPGP application with OpenPGP Manager. Secure your keys and manage access settings with ease. Free online tool, no registration required."
category: common
keywords:
- yubikey openpgp manager
- openpgp yubikey application
- ykman openpgp command
- yubikey openpgp reset
- openpgp access control
- yubikey pin management
- openpgp retry attempts
- yubikey openpgp info
- yubikey linux
- yubikey macos
features:
- Display general OpenPGP application information.
- Set retry attempts for PINs and reset code.
- Change user PIN, reset code, or admin PIN.
- Factory reset the OpenPGP application.
- Manage OpenPGP access settings.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ykman openpgp

> Manage the OpenPGP YubiKey application.
> Note: You need to use `gpg --card-edit` for some settings.
> More information: <https://docs.yubico.com/software/yubikey/tools/ykman/OpenPGP_Commands.html>.

- Display general information about the OpenPGP application:

`ykman openpgp info`

- Set the number of retry attempts for the User PIN, Reset Code, and Admin PIN, respectively:

`ykman openpgp access set-retries {{3}} {{3}} {{3}}`

- Change the User PIN, Reset Code or Admin PIN:

`ykman openpgp access change-{{pin|reset-code|admin-pin}}`

- Factory reset the OpenPGP application (you have to do this after exceeding the number of Admin PIN retry attempts):

`ykman openpgp reset`
