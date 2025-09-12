---
title: "System File Check - Scan & Repair Windows System Files | Free DevTools"
name: sfc
path: /freedevtools/tldr/windows/sfc
canonical: "https://hexmos.com/freedevtools/tldr/windows/sfc/"
description: "Scan Windows system files for integrity issues with System File Check. Repair corrupted files to ensure system stability. Free online tool, no registration required."
category: windows
keywords:
- System File Check Windows
- Windows SFC scan
- Windows system file repair
- SFC scannow command
- Windows file integrity checker
- SFC verifyonly command
- Windows system file scanner
- Windows repair tool
- SFC offline repair
- Command line file check
features:
- Scan all Windows system files for errors
- Repair corrupted system files automatically
- Verify system file integrity without repair
- Scan and repair specific system files
- Perform offline system file repair
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfc

> Scans the integrity of Windows system files.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/sfc>.

- Display information about the usage of the command:

`sfc`

- Scan all system files and, if possible, repair any problems:

`sfc /scannow`

- Scan all system files without attempting to repair any:

`sfc /verifyonly`

- Scan a specific file and, if possible, repair any problems:

`sfc /scanfile={{path\to\file}}`

- Scan a specific file without attempting to repair it:

`sfc /verifyfile={{path\to\file}}`

- When repairing offline, specify the boot directory:

`sfc /offbootdir={{path\to\directory}}`

- When repairing offline, specify the Windows directory:

`sfc /offwindir={{path\to\directory}}`
