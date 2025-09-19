---
title: "Generate Password - Create Secure Passwords with APG | Online Free DevTools by Hexmos"
name: apg
path: /freedevtools/tldr/common/apg
canonical: "https://hexmos.com/freedevtools/tldr/common/apg/"
description: "Generate secure passwords with APG, the Advanced Password Generator. Create complex random passwords and enforce security policies. Free online tool, no registration required."
category: common
keywords:
- password generator
- random password generator
- secure password generator
- apg password generator
- linux password generator
- command line password generator
- complex password generator
- password complexity tool
- password security tool
- command-line password tool
features:
- Generate passwords with customizable length.
- Enforce password complexity rules with character set requirements.
- Create passwords that avoid dictionary words.
- Set maximum password length limits.
- Generate multiple passwords in batch.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apg

> Create arbitrarily complex random passwords.
> More information: <https://manned.org/apg>.

- Create random passwords (default password length is 8):

`apg`

- Create a password with at least 1 symbol (S), 1 number (N), 1 uppercase (C), 1 lowercase (L):

`apg -M SNCL`

- Create a password with 16 characters:

`apg -m {{16}}`

- Create a password with maximum length of 16:

`apg -x {{16}}`

- Create a password that doesn't appear in a dictionary (the dictionary file has to be provided):

`apg -r {{path/to/dictionary_file}}`
