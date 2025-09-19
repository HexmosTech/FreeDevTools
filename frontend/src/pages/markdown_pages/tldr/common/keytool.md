---
title: "Generate Keystore - Manage Java Certificates | Online Free DevTools by Hexmos"
name: keytool
path: /freedevtools/tldr/common/keytool
canonical: "https://hexmos.com/freedevtools/tldr/common/keytool/"
description: "Generate keystores with keytool, a Java certificate management utility. Securely manage keys, change passwords, and create certificates using command line. Free online tool, no registration required."
category: common
keywords:
- Java keystore generator
- Certificate management tool
- Keytool command line
- Java key pair creation
- Keystore password changer
- Java certificate alias
- Keytool Linux
- Keytool macOS
- JKS keystore
- Java security
features:
- Generate Java keystores and key pairs
- Change keystore passwords securely
- Modify individual key passwords within a keystore
- Manage and create certificate aliases
- Import and export certificates
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# keytool

> A certificate management utility included with Java.
> More information: <https://docs.oracle.com/en/java/javase/20/docs/specs/man/keytool.html>.

- Create a keystore:

`keytool -genkeypair -v -keystore {{path/to/file.keystore}} -alias {{key_name}}`

- Change a keystore password:

`keytool -storepasswd -keystore {{path/to/file.keystore}}`

- Change a key's password inside a specific keystore:

`keytool -keypasswd -alias {{key_name}} -keystore {{path/to/file.keystore}}`
