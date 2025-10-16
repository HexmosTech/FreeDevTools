---
title: "Generate CSR - OpenSSL Certificate Requests | Online Free DevTools by Hexmos"
name: openssl-req
path: "/freedevtools/tldr/openssl/openssl-req/"
canonical: "https://hexmos.com/freedevtools/tldr/openssl/openssl-req/"
description: "Generate CSR with OpenSSL for secure communication. Create certificate signing requests, self-signed certificates, and manage key-pairs easily. Free online tool, no registration required."
category: common
keywords:
- OpenSSL CSR generation
- Certificate signing request
- OpenSSL certificate creation
- PKCS#10 request
- Self-signed certificate
- OpenSSL key pair
- Linux certificate manager
- macOS certificate utility
- Command-line certificate tool
- OpenSSL request tool
features:
- Generate certificate signing requests (CSR)
- Create self-signed certificates with key pairs
- Manage PKCS#10 certificate requests
- Specify subject information for certificates
- Define the validity period for certificates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# openssl req

> OpenSSL command to manage PKCS#10 Certificate Signing Requests.
> More information: <https://www.openssl.org/docs/manmaster/man1/openssl-req.html>.

- Generate a certificate signing request to be sent to a certificate authority:

`openssl req -new -sha256 -key {{filename.key}} -out {{filename.csr}}`

- Generate a self-signed certificate and a corresponding key-pair, storing both in a file:

`openssl req -new -x509 -newkey {{rsa}}:{{4096}} -keyout {{filename.key}} -out {{filename.cert}} -subj "{{/C=XX/CN=foobar}}" -days {{365}}`
