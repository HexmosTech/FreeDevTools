---
title: "Generate TOTP Token - OATHTool | Online Free DevTools by Hexmos"
name: oathtool
path: /freedevtools/tldr/common/oathtool
canonical: "https://hexmos.com/freedevtools/tldr/common/oathtool/"
description: "Generate TOTP tokens instantly with OATHTool. Validate tokens and manage two-factor authentication secrets securely. Free online tool, no registration required."
category: common
keywords:
  - TOTP token generation
  - OATH password generation
  - two-factor authentication
  - token validation
  - secret key management
  - command line OTP
  - linux TOTP
  - macos TOTP
  - oathtool OTP
  - Google Authenticator secret
features:
  - Generate TOTP tokens from a secret key.
  - Validate TOTP tokens for authentication.
  - Generate tokens for specific times.
  - Support base32 encoded secrets.
  - Manage OATH one-time passwords.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# oathtool

> OATH one-time password tool.
> More information: <https://www.nongnu.org/oath-toolkit/oathtool.1.html>.

- Generate TOTP token (behaves like Google Authenticator):

`oathtool --totp {{[-b|--base32]}} "{{secret}}"`

- Generate a TOTP token for a specific time:

`oathtool --totp {{[-N|--now]}} "{{2004-02-29 16:21:42}}" {{[-b|--base32]}} "{{secret}}"`

- Validate a TOTP token:

`oathtool --totp {{[-b|--base32]}} "{{secret}}" "{{token}}"`
