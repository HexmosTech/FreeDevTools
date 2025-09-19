---
title: "Generate Certificates - mkcert | Online Free DevTools by Hexmos"
name: mkcert
path: /freedevtools/tldr/common/mkcert
canonical: "https://hexmos.com/freedevtools/tldr/common/mkcert/"
description: "Generate trusted development certificates with mkcert. Create localhost certificates and secure your development environment easily. Free online tool, no registration required."
category: common
keywords:
- localhost certificate
- development certificate
- mkcert certificate
- trusted certificate
- SSL certificate
- TLS certificate
- certificate generator
- certificate authority
- CA installation
- wildcard certificate
features:
- Generate locally-trusted development certificates
- Install the local CA in the system trust store
- Create certificates for single or multiple domains
- Generate wildcard certificates for subdomains
- Uninstall the local CA from the system trust store
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkcert

> Make locally-trusted development certificates.
> More information: <https://github.com/FiloSottile/mkcert>.

- Install the local CA in the system trust store:

`mkcert -install`

- Generate certificate and private key for a given domain:

`mkcert {{example.org}}`

- Generate certificate and private key for multiple domains:

`mkcert {{example.org}} {{myapp.dev}} {{127.0.0.1}}`

- Generate wildcard certificate and private key for a given domain and its subdomains:

`mkcert "{{*.example.it}}"`

- Uninstall the local CA:

`mkcert -uninstall`
