---
title: "GRUB2 Password Generate - Create PBKDF2 Hash | Online Free DevTools by Hexmos"
name: grub2-mkpasswd-pbkdf2
path: /freedevtools/tldr/linux/grub2-mkpasswd-pbkdf2
canonical: "https://hexmos.com/freedevtools/tldr/linux/grub2-mkpasswd-pbkdf2/"
description: "Generate a GRUB2 password hash with grub2-mkpasswd-pbkdf2. Secure your bootloader with PBKDF2 hashing for robust password protection. This command-line tool simplifies password management. Free online tool, no registration required."
category: linux
keywords:
  - GRUB2 Password Generator
  - Linux Password Hash
  - PBKDF2 Password Command
  - GRUB2 Security Tool
  - Password Security Linux
  - Hash Generation Command
  - Bootloader Password Protection
  - Command-line Password Tool
  - GRUB2 Configuration
  - Linux Password Management
features:
  - Generates PBKDF2 hashed passwords for GRUB2.
  - Specifies the number of PBKDF2 iterations for password strength.
  - Defines the salt length for added security.
  - Prints the generated hash to standard output.
  - Protects bootloader access with strong password encryption.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# grub2-mkpasswd-pbkdf2

> Generate a hashed password for GRUB.
> More information: <https://manned.org/grub2-mkpasswd-pbkdf2>.

- Create a password hash for GRUB 2 using PBKDF2 and print it to `stdout`:

`sudo grub2-mkpasswd-pbkdf2 {{[-c|--iteration-count]}} {{number_of_pbkdf2_iterations}} {{[-s|--salt]}} {{salt_length}}`
