---
title: "Enroll Fingerprints - fprintd-enroll Management | Free DevTools"
name: fprintd-enroll
path: /freedevtools/tldr/linux/fprintd-enroll
canonical: "https://hexmos.com/freedevtools/tldr/linux/fprintd-enroll/"
description: "Enroll fingerprints with fprintd-enroll command. Manage fingerprint database entries for user authentication. Free online tool, no registration required."
category: linux
keywords:
  - fingerprint enrollment command
  - fprintd-enroll management
  - linux fingerprint authentication
  - user fingerprint registration
  - biometric security command
  - fingerprint scanner enrollment
  - fprintd database management
  - command line fingerprint tool
  - secure fingerprint enrollment
  - system fingerprint access
features:
  - Enrolls fingerprints for user authentication.
  - Supports specifying individual fingers (e.g., left-thumb, right-index-finger).
  - Allows enrollment for specific users.
  - Provides command-line interface for easy management.
  - Integrates with the fprintd fingerprint management daemon.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fprintd-enroll

> Enroll fingerprints into the database.
> More information: <https://manned.org/fprintd-enroll>.

- Enroll the right index finger for the current user:

`fprintd-enroll`

- Enroll a specific finger for the current user:

`fprintd-enroll {{[-f|--finger]}} {{left-thumb|left-index-finger|left-middle-finger|left-ring-finger|left-little-finger|right-thumb|...}}`

- Enroll the right index finger for a specific user:

`fprintd-enroll {{username}}`

- Enroll a specific finger for a specific user:

`fprintd-enroll {{[-f|--finger]}} {{finger_name}} {{username}}`

- Display help:

`fprintd-enroll --help`
