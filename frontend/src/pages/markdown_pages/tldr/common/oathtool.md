---
title: "Generate TOTP Tokens - OATHTool | Online Free DevTools by Hexmos"
name: oathtool
path: /freedevtools/tldr/common/oathtool
canonical: "https://hexmos.com/freedevtools/tldr/common/oathtool/"
description: "Generate TOTP tokens instantly with OATHTool.  Validate tokens and manage two-factor authentication secrets securely using command-line commands. Free online tool, no registration required."
category: common
keywords:
  - TOTP token generation
  - OATH password generation
  - two-factor authentication command line
  - TOTP token validation command
  - secret key management OATHTool
  - Linux OATHTool TOTP
  - macOS OATHTool TOTP
  - base32 encoded secret OATHTool
  - command line OTP generator
  - Google Authenticator secret management
features:
  - Generate TOTP tokens from base32 encoded secrets.
  - Validate TOTP tokens against a secret key.
  - Generate TOTP tokens for specific past or future times.
  - Manage and utilize OATH one-time passwords securely.
  - Utilize command-line interface for efficient OTP management.
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
