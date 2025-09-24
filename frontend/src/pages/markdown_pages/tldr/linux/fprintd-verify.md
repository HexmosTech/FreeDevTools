---
title: "Fingerprint Verify - Authenticate Users on Linux | Online Free DevTools by Hexmos"
name: fprintd-verify
path: /freedevtools/tldr/linux/fprintd-verify
canonical: "https://hexmos.com/freedevtools/tldr/linux/fprintd-verify/"
description: "Authenticate users with Fingerprint Verify on Linux. Secure access using fingerprint scanning and verification. Free online tool, no registration required."
category: linux
keywords:
- linux fingerprint authentication
- fingerprint verification linux
- fprintd user authentication
- linux biometric security
- user fingerprint scanning linux
- fprintd-verify command
- linux system security
- fprintd fingerprint database
- biometric authentication tool
- command line fingerprint scanner
features:
- Verify fingerprints against a database
- Authenticate users by fingerprint scan
- Specify a particular fingerprint to verify
- Support multiple fingerprint readers on Linux
- Fail verification if no match is found
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fprintd-verify

> Verify fingerprints against the database.
> More information: <https://manned.org/fprintd-verify>.

- Verify all stored fingerprints for the current user:

`fprintd-verify`

- Verify a specific fingerprint for the current user:

`fprintd-verify {{[-f|--finger]}} {{left-thumb|left-index-finger|left-middle-finger|left-ring-finger|left-little-finger|right-thumb|...}}`

- Verify fingerprints for a specific user:

`fprintd-verify {{username}}`

- Verify a specific fingerprint for a specific user:

`fprintd-verify {{[-f|--finger]}} {{finger_name}} {{username}}`

- Fail the process if a fingerprint doesn't match with ones stored in the database for the current user:

`fprintd-verify --g-fatal-warnings`

- Display help:

`fprintd-verify {{[-h|--help]}}`
