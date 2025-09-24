---
title: "SBCTL - Control Secure Boot Keys | Online Free DevTools by Hexmos"
name: sbctl
path: "/freedevtools/tldr/linux/sbctl"
canonical: "https://hexmos.com/freedevtools/tldr/linux/sbctl/"
description: "Control secure boot keys with SBCTL. Manage UEFI keys and certificates effortlessly. Free online tool, no registration required."
category: linux
keywords:
- Secure boot manager
- Linux secure boot
- UEFI key manager
- SBCTL key enrollment
- EFI signing tool
- Secure boot configuration
- Secure boot verification
- Linux UEFI management
- EFI binary signing
- Secure boot key generation
features:
- Create custom secure boot keys
- Enroll secure boot keys and certificates
- Sign EFI binaries
- Verify EFI executables signature
- Manage secure boot configuration
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sbctl

> A user-friendly secure boot key manager.
> Note: Not enrolling Microsoft's certificates can brick your system. See <https://github.com/Foxboron/sbctl/wiki/FAQ#option-rom>.
> More information: <https://github.com/Foxboron/sbctl#usage>.

- Show the current secure boot status:

`sbctl status`

- Create custom secure boot keys (by default, everything is stored in `/var/lib/sbctl`):

`sbctl create-keys`

- Enroll the custom secure boot keys and Microsoft's UEFI vendor certificates:

`sbctl enroll-keys {{[-m|--microsoft]}}`

- Automatically run `create-keys` and `enroll-keys` based on the settings in `/etc/sbctl/sbctl.conf`:

`sbctl setup --setup`

- Sign an EFI binary with the created key and save the file to the database:

`sbctl sign {{[-s|--save]}} {{path/to/efi_binary}}`

- Re-sign all the saved files:

`sbctl sign-all`

- Verify that all EFI executables on the EFI system partition have been signed:

`sbctl verify`
