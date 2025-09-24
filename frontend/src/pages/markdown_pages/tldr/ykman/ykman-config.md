---
title: "YubiKey Config - Control YubiKey Applications | Online Free DevTools by Hexmos"
name: ykman-config
path: /freedevtools/tldr/ykman/ykman-config
canonical: "https://hexmos.com/freedevtools/tldr/ykman/ykman-config/"
description: "Control YubiKey applications easily with Ykman Config. Enable/disable OTP, U2F, FIDO2 and more. Manage USB and NFC settings efficiently. Free online tool, no registration required."
category: common
keywords:
- YubiKey configuration
- YubiKey app management
- Ykman config tool
- USB application control
- NFC application control
- OTP configuration
- FIDO2 configuration
- U2F configuration
- YubiKey settings Linux
- YubiKey settings macOS
features:
- Enable YubiKey applications over USB
- Disable YubiKey applications over USB
- Enable YubiKey applications over NFC
- Disable YubiKey applications over NFC
- Disable all YubiKey applications over NFC
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ykman config

> Enable or disable YubiKey applications.
> Note: You can use `ykman info` to see currently enabled applications.
> More information: <https://docs.yubico.com/software/yubikey/tools/ykman/Base_Commands.html#ykman-config-options-command-args>.

- Enable an application over USB or NFC (`--enable` can be used multiple times to specify more applications):

`ykman config {{usb|nfc}} {{[-e|--enable]}} {{otp|u2f|fido2|oath|piv|openpgp|hsmauth}}`

- Disable an application over USB or NFC (`--disable` can be used multiple times to specify more applications):

`ykman config {{usb|nfc}} {{[-d|--disable]}} {{otp|u2f|fido2|oath|piv|openpgp|hsmauth}}`

- Disable all applications over NFC:

`ykman config nfc {{[-D|--disable-all]}}`
