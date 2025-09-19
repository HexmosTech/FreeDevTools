---
title: "StrongName Sign - Verify Assemblies with SN | Online Free DevTools by Hexmos"
name: sn
path: /freedevtools/tldr/common/sn
canonical: "https://hexmos.com/freedevtools/tldr/common/sn/"
description: "StrongName sign and verify IL assemblies with SN. Generate strong name keys, re-sign assemblies and extract public keys effortlessly. Free online tool, no registration required."
category: common
keywords:
- strongname signing
- assembly signing
- il assembly
- sn utility
- strong naming
- key generator
- assembly verification
- strongname verification
- windows assembly signing
- mono strongname
features:
- Generate strong naming keys for assemblies
- Re-sign assemblies with a specified private key
- Show the public key of a signed assembly
- Extract the public key from a signed assembly
- Verify the strongname signature of an assembly
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sn

> Mono StrongName utility for signing and verifying IL assemblies.
> More information: <https://manned.org/sn>.

- Generate a new StrongNaming key:

`sn -k {{path/to/key.snk}}`

- Re-sign an assembly with the specified private key:

`sn -R {{path/to/assembly.dll}} {{path/to/key_pair.snk}}`

- Show the public key of the private key that was used to sign an assembly:

`sn -T {{path/to/assembly.exe}}`

- Extract the public key to a file:

`sn -e {{path/to/assembly.dll}} {{path/to/output.pub}}`
