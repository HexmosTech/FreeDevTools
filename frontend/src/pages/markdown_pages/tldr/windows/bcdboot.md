---
title: "BCDboot - Create Boot Files | Online Free DevTools by Hexmos"
name: bcdboot
path: /freedevtools/tldr/windows/bcdboot
canonical: "https://hexmos.com/freedevtools/tldr/windows/bcdboot/"
description: "Create boot files with BCDboot. Configure and repair boot configuration data on Windows systems, ensuring a proper boot sequence. Free online tool, no registration required."
category: windows
keywords:
- BCDboot boot files
- Windows boot repair
- Boot configuration data
- Windows BCD editor
- BCD bootloader
- Windows boot sequence
- Command-line boot tool
- Windows recovery environment
- Windows boot manager
- UEFI boot configuration
features:
- Initialize system partitions using BCD files
- Enable verbose mode for detailed output
- Specify the system partition volume letter
- Configure the locale for boot files
- Specify the firmware type for boot file copying
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bcdboot

> Configure or repair boot files.
> More information: <https://learn.microsoft.com/windows-hardware/manufacture/desktop/bcdboot-command-line-options-techref-di>.

- Initialize the system partition by using BCD files from the source Windows folder:

`bcdboot {{C:\Windows}}`

- Enable [v]erbose mode:

`bcdboot {{C:\Windows}} /v`

- Specify the volume letter of the [s]ystem partition:

`bcdboot {{C:\Windows}} /s {{S:}}`

- Specify a [l]ocale:

`bcdboot {{C:\Windows}} /l {{en-us}}`

- Specify a [f]irmware type while copying the boot files to a specified volume:

`bcdboot {{C:\Windows}} /s {{S:}} /f {{UEFI|BIOS|ALL}}`
