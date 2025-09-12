---
title: "OpenSSL X.509 - Manage Certificates | Free DevTools"
name: openssl-x509
path: /freedevtools/tldr/common/openssl-x509
canonical: "https://hexmos.com/freedevtools/tldr/common/openssl-x509/"
description: "Manage X.509 certificates with OpenSSL X.509. Convert formats, display information, and extract public keys effortlessly. Free online tool, no registration required."
category: common
keywords:
- X.509 Certificate Management
- Certificate Format Conversion
- OpenSSL Certificate Viewer
- PEM to DER Converter
- DER to PEM Converter
- Certificate Expiration Check
- Extract Public Key from Certificate
- Linux Certificate Tools
- macOS Certificate Tools
- OpenSSL command line
features:
- Display X.509 certificate information
- Convert certificates between PEM and DER formats
- Extract a certificate's public key to a file
- Display a certificate's expiration date
- Manage X.509 certificates using OpenSSL
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openssl x509

> OpenSSL command to manage X.509 certificates.
> More information: <https://www.openssl.org/docs/manmaster/man1/openssl-x509.html>.

- Display certificate information:

`openssl x509 -in {{filename.crt}} -noout -text`

- Display a certificate's expiration date:

`openssl x509 -enddate -noout -in {{filename.pem}}`

- Convert a certificate between binary DER encoding and textual PEM encoding:

`openssl x509 -inform {{der}} -outform {{pem}} -in {{original_certificate_file}} -out {{converted_certificate_file}}`

- Store a certificate's public key in a file:

`openssl x509 -in {{certificate_file}} -noout -pubkey -out {{output_file}}`
