---
title: "Delete Fingerprints - Remove Fingerprint Data | Free DevTools"
name: fprintd-delete
path: /freedevtools/tldr/linux/fprintd-delete
canonical: "https://hexmos.com/freedevtools/tldr/linux/fprintd-delete/"
description: "Remove fingerprint data with fprintd-delete.  Manage and delete fingerprint entries efficiently from your system's database. Free online tool, no registration required."
category: linux
keywords:
  - fingerprint deletion command
  - fprintd delete linux
  - remove fingerprint data
  - fingerprint management command line
  - delete biometric data
  - fprintd command
  - system fingerprint removal
  - secure fingerprint deletion
  - user fingerprint control
  - biometric data security
features:
  - Delete all fingerprints for a specific user.
  - Remove individual fingerprints for a specified user.
  - Offers granular control over fingerprint removal.
  - Provides a command-line interface for easy access.
  - Maintains system security by managing fingerprint data.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fprintd-delete

> Remove fingerprints from the database.
> More information: <https://manned.org/fprintd-delete>.

- Remove all fingerprints for a specific user:

`fprintd-delete {{username}}`

- Remove a specific fingerprints for a specific user:

`fprintd-delete {{username}} {{[-f|--finger]}} {{left-thumb|left-index-finger|left-middle-finger|left-ring-finger|left-little-finger|right-thumb|...}}`

- Display help:

`fprintd-delete`
