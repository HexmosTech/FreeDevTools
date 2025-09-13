---
title: "Cosign - Sign Container Images | Free DevTools"
name: cosign
path: /freedevtools/tldr/common/cosign
canonical: "https://hexmos.com/freedevtools/tldr/common/cosign/"
description: "Sign container images with Cosign for secure deployments. Authenticate, verify, and manage image signatures easily. Free online tool, no registration required."
category: common
keywords:
- container signing
- container verification
- oci registry
- image signature
- cosign signature
- kubernetes cosign
- docker cosign
- container security
- image validation
- signature storage
features:
- Generate key pairs for signing containers.
- Sign container images and store signatures in OCI registries.
- Verify container signatures against public keys.
- Sign blobs using local key pairs.
- Copy container images and their associated signatures.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cosign

> Container Signing, Verification and Storage in an OCI registry.
> More information: <https://github.com/sigstore/cosign>.

- Generate a key-pair:

`cosign generate-key-pair`

- Sign a container and store the signature in the registry:

`cosign sign -key {{cosign.key}} {{image}}`

- Sign a container image with a key pair stored in a Kubernetes secret:

`cosign sign -key k8s://{{namespace}}/{{key}} {{image}}`

- Sign a blob with a local key pair file:

`cosign sign-blob --key {{cosign.key}} {{path/to/file}}`

- Verify a container against a public key:

`cosign verify -key {{cosign.pub}} {{image}}`

- Verify images with a public key in a Dockerfile:

`cosign dockerfile verify -key {{cosign.pub}} {{path/to/Dockerfile}}`

- Verify an image with a public key stored in a Kubernetes secret:

`cosign verify -key k8s://{{namespace}}/{{key}} {{image}}`

- Copy a container image and its signatures:

`cosign copy {{example.com/src:latest}} {{example.com/dest:latest}}`
