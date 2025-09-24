---
title: "Jarsigner - Sign JAR Files | Online Free DevTools by Hexmos"
name: jarsigner
path: /freedevtools/tldr/common/jarsigner
canonical: "https://hexmos.com/freedevtools/tldr/common/jarsigner/"
description: "Sign Java archive (JAR) files with Jarsigner. Secure your Java applications using digital signatures. Free online tool, no registration required."
category: common
keywords:
- java archive signing
- jar file signer
- jarsigner command
- digital signature java
- java security
- keystore alias
- jar verification
- jarsigner linux
- jarsigner macos
- java code signing
features:
- Sign JAR files using a specified keystore alias.
- Verify the digital signature of a JAR file.
- Specify a signature algorithm for signing.
- Secure java applications with digital signatures
- Ensure code integrity with JAR signing.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jarsigner

> Sign and verify Java archive (JAR) files.
> More information: <https://docs.oracle.com/en/java/javase/20/docs/specs/man/jarsigner.html>.

- Sign a JAR file:

`jarsigner {{path/to/file.jar}} {{keystore_alias}}`

- Sign a JAR file with a specific algorithm:

`jarsigner -sigalg {{algorithm}} {{path/to/file.jar}} {{keystore_alias}}`

- Verify the signature of a JAR file:

`jarsigner -verify {{path/to/file.jar}}`
