---
title: "Mokutil - Configure Secure Boot Keys | Online Free DevTools by Hexmos"
name: mokutil
path: "/freedevtools/tldr/linux/mokutil/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/mokutil/"
description: "Configure Secure Boot keys with Mokutil. Enable or disable Secure Boot validation, list and enroll keys using the command line. Free online tool, no registration required."
category: linux
keywords:
  - Secure Boot configuration
  - Mokutil key management
  - Linux Secure Boot
  - Secure Boot enable
  - Secure Boot disable
  - UEFI Secure Boot
  - Machine Owner Key
  - MOK key enrollment
  - Secure Boot validation
  - Mokutil command line
features:
  - Enable or disable Secure Boot validation
  - List currently enrolled keys
  - Enroll new Secure Boot keys
  - List pending Secure Boot keys for enrollment
  - Set the verbosity level for shim output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mokutil

> Configure Secure Boot Machine Owner Keys (MOK).
> Some operations, such as enabling and disabling Secure Boot or enrolling keys require a reboot.
> More information: <https://github.com/lcp/mokutil>.

- Show if Secure Boot is enabled:

`mokutil --sb-state`

- Enable Secure Boot:

`mokutil --enable-validation`

- Disable Secure Boot:

`mokutil --disable-validation`

- List enrolled keys:

`mokutil --list-enrolled`

- Enroll a new key:

`mokutil --import {{path/to/key.der}}`

- List the keys to be enrolled:

`mokutil --list-new`

- Set shim verbosity:

`mokutil --set-verbosity true`
