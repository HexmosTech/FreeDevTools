---
title: "Generate OTP Code - Manage One-Time Passwords | Online Free DevTools by Hexmos"
name: pass-otp
path: "/freedevtools/tldr/common/pass-otp"
canonical: "https://hexmos.com/freedevtools/tldr/common/pass-otp/"
description: "Generate OTP codes quickly with pass-otp. Securely manage one-time passwords using command-line. Free online tool, no registration required."
category: common
keywords:
- OTP code generator
- One-time password manager
- Pass extension
- Command-line OTP tool
- 2FA code generator
- Password management tool
- OTP authentication
- Linux password manager
- MacOS password manager
- Unix OTP
features:
- Generate 2FA codes from command line
- Append OTP secrets to existing pass files
- Display OTP tokens as QR codes
- Import otpauth URI tokens
- Manage OTP secrets with issuer and account options
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pass otp

> A pass extension for managing one-time-password (OTP) tokens.
> More information: <https://manned.org/pass-otp>.

- Prompt for an otpauth URI token and create a new pass file:

`pass otp insert {{path/to/pass}}`

- Prompt for an otpauth URI token and append to an existing pass file:

`pass otp append {{path/to/pass}}`

- Print a 2FA code using the OTP token in a pass file:

`pass otp {{path/to/pass}}`

- Copy and don't print a 2FA code using the OTP token in a pass file:

`pass otp {{[-c|--clip]}} {{path/to/pass}}`

- Display a QR code using the OTP token stored in a pass file:

`pass otp uri {{[-q|--qrcode]}} {{path/to/pass}}`

- Prompt for an OTP secret value specifying issuer and account (at least one must be specified) and append to existing pass file:

`pass otp append {{[-s|--secret]}} {{[-i|--issuer]}} {{issuer_name}} {{[-a|--account]}} {{account_name}} {{path/to/pass}}`
