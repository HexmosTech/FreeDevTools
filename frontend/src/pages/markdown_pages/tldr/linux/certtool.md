---
title: "Generate Certificates with certtool - Secure X.509 Management | Online Free DevTools by Hexmos"
name: certtool
path: /freedevtools/tldr/linux/certtool
canonical: "https://hexmos.com/freedevtools/tldr/linux/certtool/"
description: "Generate X.509 certificates with certtool, a powerful command-line tool for managing keys and PKI structures.  Manage your digital identities easily and securely. Free online tool, no registration required."
category: linux
keywords:
  - x509 certificate generator
  - gnutls certificate tool
  - pki certificate management
  - ssl certificate creation
  - self-signed certificate generation
  - certificate signing request generation
  - private key generation
  - certificate verification tool
  - linux certificate tool
  - openssl certificate alternative
features:
  - Generate private keys for secure communication.
  - Create self-signed certificates for development and testing.
  - Generate Certificate Signing Requests (CSRs) for certificate authorities.
  - Issue and manage Certificate Authority (CA) certificates.
  - Verify certificates against trusted Certificate Authorities.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# certtool

> Generate and manage X.509 certificates, keys, and PKI structures using GnuTLS.
> More information: <https://gnutls.org/manual/gnutls.html#certtool-Invocation>.

- Generate a private key and save it to a file:

`certtool {{[-p|--generate-privkey]}} --outfile {{path/to/private.key}}`

- Generate a self-signed certificate using a private key and a template file:

`certtool {{[-s|--generate-self-signed]}} --load-privkey {{path/to/private.key}} --template {{path/to/info.template}} --outfile {{path/to/certificate.crt}}`

- Generate a certificate signing request (CSR):

`certtool {{[-q|--generate-request]}} --load-privkey {{path/to/private.key}} --template {{path/to/info.template}} --outfile {{path/to/request.csr}}`

- Generate a certificate authority (CA) certificate:

`certtool {{[-s|--generate-self-signed]}} --load-privkey {{path/to/ca.key}} --template {{path/to/ca.template}} --outfile {{path/to/ca.crt}}`

- Verify a certificate against a CA certificate:

`certtool --verify --infile {{path/to/certificate.crt}} --load-ca-certificate {{path/to/ca.crt}}`
