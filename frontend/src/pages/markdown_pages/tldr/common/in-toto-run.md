---
title: "Generate in-toto Link Metadata | Free DevTools"
name: in-toto-run
path: /freedevtools/tldr/common/in-toto-run
canonical: "https://hexmos.com/freedevtools/tldr/common/in-toto-run/"
description: "Generate in-toto link metadata with in-toto-run, securing your software supply chain. Digitally sign and verify steps, ensuring integrity. Free online tool, no registration required."
category: common
keywords:
- in-toto link metadata generation
- supply chain security
- signed attestation creation
- software artifact verification
- Git repository tagging
- tarball material management
- Trivy image scanning integration
- in-toto policy enforcement
- cryptographic signature generation
- in-toto attestation generation
features:
- Generate link metadata for supply chain steps.
- Tag Git repositories and sign the resulting link files.
- Create tarballs, storing files as materials.
- Generate signed attestations for review processes.
- Integrate with Trivy to scan images and create reports.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# in-toto-run

> Generating link metadata while carrying out a supply chain step.
> More information: <https://in-toto.readthedocs.io/en/latest/command-line-tools/in-toto-run.html>.

- Tag a Git repo and signing the resulting link file:

`in-toto-run {{[-n|--step-name]}} {{tag}} {{[-p|--products]}} {{.}} -k {{key_file}} -- {{git tag v1.0}}`

- Create a tarball, storing files as materials and the tarball as product:

`in-toto-run {{[-n|--step-name]}} {{package}} {{[-m|--materials]}} {{project}} {{[-p|--products]}} {{project.tar.gz}} -- {{tar czf project.tar.gz project}}`

- Generate signed attestations for review work:

`in-toto-run {{[-n|--step-name]}} {{review}} -k {{key_file}} {{[-m|--materials]}} {{document.pdf}} {{[-x|--no-command]}}`

- Scan the image using Trivy and generate link file:

`in-toto-run {{[-n|--step-name]}} {{scan}} -k {{key_file}} {{[-p|--products]}} {{report.json}} -- {{/bin/sh -c "trivy --output report.json --format json <IMAGE>"}}`
