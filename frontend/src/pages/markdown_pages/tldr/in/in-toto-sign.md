---
title: "Sign in-toto Metadata - Secure Software Supply Chains | Free DevTools"
name: in-toto-sign
path: /freedevtools/tldr/common/in-toto-sign
canonical: "https://hexmos.com/freedevtools/tldr/common/in-toto-sign/"
description: "Sign in-toto metadata with in-toto-sign for robust software supply chain security. Ensure code integrity and prevent tampering with verifiable signatures. Free online tool, no registration required."
category: common
keywords:
- in-toto signing
- in-toto metadata
- supply chain security
- software attestation
- key management
- GPG signing
- in-toto layout
- in-toto link metadata
- metadata verification
- digital signatures
features:
- Sign in-toto layout and link metadata
- Verify signatures of in-toto metadata
- Support multiple signing keys
- Integrate with GPG for signing
- Replace existing signatures in metadata files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# in-toto-sign

> Sign in-toto link or layout metadata or verify their signatures.
> More information: <https://in-toto.readthedocs.io/en/latest/command-line-tools/in-toto-sign.html>.

- Sign 'unsigned.layout' with two keys and write it to 'root.layout':

`in-toto-sign {{[-f|--file]}} {{unsigned.layout}} {{[-k|--keep]}} {{priv_key1}} {{priv_key2}} {{[-o|--output]}} {{root.layout}}`

- Replace signature in link file and write to default filename:

`in-toto-sign {{[-f|--file]}} {{package.2f89b927.link}} {{[-k|--keep]}} {{priv_key}}`

- Verify a layout signed with 3 keys:

`in-toto-sign {{[-f|--file]}} {{root.layout}} {{[-k|--keep]}} {{pub_key0}} {{pub_key1}} {{pub_key2}} --verify`

- Sign a layout with the default GPG key in default GPG keyring:

`in-toto-sign {{[-f|--file]}} {{root.layout}} {{[-g|--gpg]}}`

- Verify a layout with a GPG key identified by keyid '...439F3C2':

`in-toto-sign {{[-f|--file]}} {{root.layout}} --verify {{[-g|--gpg]}} {{...439F3C2}}`
