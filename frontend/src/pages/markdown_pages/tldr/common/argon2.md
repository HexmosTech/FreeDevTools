---
title: "Argon2 Hash Generator - Create Secure Hashes | Online Free DevTools by Hexmos"
name: argon2
path: /freedevtools/tldr/common/argon2
canonical: "https://hexmos.com/freedevtools/tldr/common/argon2/"
description: "Generate Argon2 cryptographic hashes with Argon2 Hash Generator. Secure your passwords and data using advanced hashing algorithms. Free online tool, no registration required."
category: common
keywords:
- argon2 hash generator
- cryptographic hash creation
- password hashing tool
- secure password generator
- linux password hashing
- macos hash algorithm
- argon2i hashing
- argon2d hashing
- salt generation tool
- command line hashing
features:
- Generate Argon2 hashes from passwords and salts
- Support multiple Argon2 algorithms (argon2d, argon2i, argon2id)
- Customize iterations, memory usage, and parallelism parameters
- Display output hash without additional information
- Calculate hashes with default parameters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# argon2

> Calculate Argon2 cryptographic hashes.
> More information: <https://github.com/P-H-C/phc-winner-argon2#command-line-utility>.

- Calculate a hash with a password and a salt with the default parameters:

`echo "{{password}}" | argon2 "{{salt_text}}"`

- Calculate a hash with the specified algorithm:

`echo "{{password}}" | argon2 "{{salt_text}}" -{{d|i|id}}`

- Display the output hash without additional information:

`echo "{{password}}" | argon2 "{{salt_text}}" -e`

- Calculate a hash with given iteration [t]imes, [m]emory usage, and [p]arallelism parameters:

`echo "{{password}}" | argon2 "{{salt_text}}" -t {{5}} -m {{20}} -p {{7}}`
