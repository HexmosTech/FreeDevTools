---
title: "Rekor-cli - Verify Software Supply Chain Metadata | Online Free DevTools by Hexmos"
name: rekor-cli
path: /freedevtools/tldr/common/rekor-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/rekor-cli/"
description: "Verify software supply chain metadata with rekor-cli. Audit artifact integrity and ensure tamper resistance using transparency logs. Free online tool, no registration required."
category: common
keywords:
- software supply chain verification
- artifact signing verification
- rekor transparency log
- immutable ledger validation
- sigstore rekor cli
- artifact metadata analysis
- x509 signature validation
- hash based artifact search
- provenance attestation check
- supply chain security audit
features:
- Upload artifacts and signatures to the Rekor log
- Retrieve information regarding log entries by UUID
- Search the Rekor index for entries by artifact name
- Search for specific entries using SHA hashes
- Verify artifact integrity using public keys
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rekor-cli

> Immutable tamper resistant ledger of metadata generated within a software projects supply chain.
> More information: <https://github.com/sigstore/rekor>.

- Upload an artifact to Rekor:

`rekor-cli upload --artifact {{path/to/file.ext}} --signature {{path/to/file.ext.sig}} --pki-format={{x509}} --public-key={{path/to/key.pub}}`

- Get information regarding entries in the Transparency Log:

`rekor-cli get --uuid={{0e81b4d9299e2609e45b5c453a4c0e7820ac74e02c4935a8b830d104632fd2d1}}`

- Search the Rekor index to find entries by Artifact:

`rekor-cli search --artifact {{path/to/file.ext}}`

- Search the Rekor index to find entries by a specific hash:

`rekor-cli search --sha {{6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b}}`
