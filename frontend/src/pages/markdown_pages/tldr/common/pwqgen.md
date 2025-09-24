---
title: "Generate Passphrases - Create Secure Passwords | Online Free DevTools by Hexmos"
name: pwqgen
path: /freedevtools/tldr/common/pwqgen
canonical: "https://hexmos.com/freedevtools/tldr/common/pwqgen/"
description: "Generate secure passphrases with pwqgen. Create random, strong passwords with configurable bit sizes. Free online tool, no registration required."
category: common
keywords:
- passphrase generator
- password generator
- random password
- secure password
- pwqgen passphrase
- linux password generator
- macos password generator
- command line password generator
- random passphrase generator
- config file password
features:
- Generate random passphrases
- Specify passphrase bit size
- Use a configuration file for password generation
- Display help information
- Display version information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pwqgen

> Generate a random passphrase.
> See also: `libpasswdqc`.
> More information: <https://manned.org/pwqgen>.

- Generate a passphrase:

`pwqgen`

- Generate a passphrase with a specific bit size between 24 and 136:

`pwqgen random={{bitsize}}`

- Use a config file to control password generation:

`pwqgen config={{path/to/config_file}}`

- Display help:

`pwqgen {{[-h|--help]}}`

- Display version:

`pwqgen --version`
