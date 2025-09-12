---
title: "Create Signed Link - in-toto-record | Free DevTools"
name: in-toto-record
path: /freedevtools/tldr/common/in-toto-record
canonical: "https://hexmos.com/freedevtools/tldr/common/in-toto-record/"
description: "Create signed link metadata with in-toto-record. Verify software supply chain integrity and prevent tampering. Free online tool, no registration required."
category: common
keywords:
- signed link generator
- supply chain metadata
- in-toto attestation
- provenance record
- secure software supply chain
- in-toto link creator
- link metadata signer
- reproducible builds
- in-toto
- signed link
features:
- Create a signed link metadata file
- Start and stop recording software supply chain steps
- Sign link metadata with a key file
- Specify materials and products for each step
- Generate evidence for supply chain integrity
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# in-toto-record

> Create a signed link metadata file to provide evidence for supply chain steps.
> More information: <https://in-toto.readthedocs.io/en/latest/command-line-tools/in-toto-record.html>.

- Start the record (creates a preliminary link file):

`in-toto-record start {{[-n|--step-name]}} {{path/to/edit_file1 path/to/edit_file2 ...}} -k {{path/to/key_file}} {{[-m|--materials]}} {{.}}`

- Stop the record (expects a preliminary link file):

`in-toto-record stop {{[-n|--step-name]}} {{path/to/edit_file1 path/to/edit_file2 ...}} -k {{path/to/key_file}} {{[-p|--products]}} {{.}}`
