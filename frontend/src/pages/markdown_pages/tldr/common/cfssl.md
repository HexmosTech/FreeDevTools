---
title: "CFSSL - Generate TLS/PKI Certificates | Online Free DevTools by Hexmos"
name: cfssl
path: /freedevtools/tldr/common/cfssl
canonical: "https://hexmos.com/freedevtools/tldr/common/cfssl/"
description: "Generate TLS/PKI certificates with CFSSL. Scan for SSL/TLS issues and decode certificate information. Free online tool, no registration required."
category: common
keywords:
- TLS certificate generation
- PKI certificate authority
- SSL certificate scanner
- CFSSL certificate signing
- Certificate information decoder
- Linux certificate tools
- MacOS certificate tools
- Cloudflare certificate management
- Certificate revocation list CRL
- Command-line certificate utility
features:
- Scan hosts for SSL/TLS vulnerabilities
- Decode and display certificate information
- Generate certificate signing requests (CSRs)
- Create and manage certificate revocation lists (CRLs)
- Display help for specific CFSSL subcommands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cfssl

> Cloudflare's PKI and TLS toolkit.
> See also: `openssl`.
> More information: <https://github.com/cloudflare/cfssl>.

- Show certificate information of a host:

`cfssl certinfo -domain {{www.google.com}}`

- Decode certificate information from a file:

`cfssl certinfo -cert {{path/to/certificate.pem}}`

- Scan host(s) for SSL/TLS issues:

`cfssl scan {{host1 host2 ...}}`

- Display help for a subcommand:

`cfssl {{genkey|gencsr|certinfo|sign|gencrl|ocspdump|ocsprefresh|ocspsign|ocspserve|scan|bundle|crl|print-defaults|revoke|gencert|serve|version|selfsign|info}} -h`
