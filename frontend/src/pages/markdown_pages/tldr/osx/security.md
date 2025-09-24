---
title: "Security - Manage Keychains & Certificates | Online Free DevTools by Hexmos"
name: security
path: /freedevtools/tldr/osx/security
canonical: "https://hexmos.com/freedevtools/tldr/osx/security/"
description: "Manage keychains and certificates with Security. Securely store passwords, add trusted certs, and administer security settings. Free online tool, no registration required."
category: osx
keywords:
  - keychain management
  - certificate management
  - security framework
  - security keychain
  - trusted certificate
  - keychain password
  - security identity preference
  - security cli tool
  - security command
  - macos security
features:
  - List available keychains.
  - Delete specific keychains.
  - Create new keychains with passwords.
  - Set certificate identity preferences for services.
  - Add and remove trusted CA certificates.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# security

> Administer keychains, keys, certificates and the Security framework.
> More information: <https://keith.github.io/xcode-man-pages/security.1.html>.

- List all available keychains:

`security list-keychains`

- Delete a specific keychain:

`security delete-keychain {{path/to/file.keychain}}`

- Create a keychain:

`security create-keychain -p {{password}} {{path/to/file.keychain}}`

- Set a certificate to use with a website or [s]ervice by its [c]ommon name (fails if several certificates with the same common name exist):

`security set-identity-preference -s {{URL|hostname|service}} -c "{{common_name}}" {{path/to/file.keychain}}`

- Add a certificate from file to a [k]eychain (if -k isn't specified, the default keychain is used):

`security add-certificates -k {{file.keychain}} {{path/to/cert_file.pem}}`

- Add a CA certificate to the per-user Trust Settings:

`security add-trusted-cert -k {{path/to/user-keychain.keychain-db}} {{path/to/ca-cert_file.pem}}`

- Remove a CA certificate from the per-user Trust Settings:

`security remove-trusted-cert {{path/to/ca-cert_file.pem}}`
