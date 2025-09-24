---
title: "Code Sign - Create macOS Code Signatures | Online Free DevTools by Hexmos"
name: codesign
path: /freedevtools/tldr/osx/codesign
canonical: "https://hexmos.com/freedevtools/tldr/osx/codesign/"
description: "Create macOS code signatures with Code Sign. Digitally sign your apps for security and distribution using certificates. Free online tool, no registration required."
category: osx
keywords:
- macos code signing
- codesign tool
- app signature macos
- codesign certificate
- code signing identity
- codesign verify
- codesign application
- macos code integrity
- digital signature macos
- codesign entitlements
features:
- Sign macOS applications with a certificate
- Verify the digital signature of an application
- Create secure code signatures for macOS apps
- Ensure code integrity for macOS distribution
- Manage code signing identities on macOS
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# codesign

> Create and manipulate code signatures for macOS.
> More information: <https://keith.github.io/xcode-man-pages/codesign.1.html>.

- Sign an application with a certificate:

`codesign --sign "{{My Company Name}}" {{path/to/application_file.app}}`

- Verify the certificate of an application:

`codesign --verify {{path/to/application_file.app}}`
