---
title: "Validate GRUB Scripts - Check Syntax | Online Free DevTools by Hexmos"
name: grub-script-check
path: "/freedevtools/tldr/linux/grub-script-check/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/grub-script-check/"
description: "Validate GRUB scripts with grub-script-check, ensuring error-free bootloader configurations. Check syntax and identify issues. Free online tool, no registration required."
category: linux
keywords:
  - GRUB script validation
  - GRUB config syntax check
  - Bootloader script analysis
  - GRUB script error detection
  - Linux GRUB configuration
  - GRUB script debugger
  - GRUB script checker
  - GRUB script linter
  - GRUB script testing
  - grub-script-check command
features:
  - Check GRUB scripts for syntax errors
  - Validate GRUB configuration files
  - Read GRUB scripts from standard input
  - Display verbose output during checking
  - Identify issues in GRUB bootloader scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# grub-script-check

> The program `grub-script-check` takes a GRUB script file and checks it for syntax errors.
> It may take a path as a non-option argument. If none is supplied, it will read from `stdin`.
> More information: <https://www.gnu.org/software/grub/manual/grub/grub.html#Invoking-grub_002dscript_002dcheck>.

- Check a specific script file for syntax errors:

`grub-script-check {{path/to/grub_config_file}}`

- Display each line of input after reading it:

`grub-script-check {{[-v|--verbose]}}`

- Display help:

`grub-script-check --help`

- Display version:

`grub-script-check --version`
