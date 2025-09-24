---
title: "Repair BDE - Decrypt Damaged Volumes | Online Free DevTools by Hexmos"
name: repair-bde
path: /freedevtools/tldr/windows/repair-bde
canonical: "https://hexmos.com/freedevtools/tldr/windows/repair-bde/"
description: "Decrypt damaged BitLocker volumes with Repair BDE. Recover data from encrypted drives using command line interface. Free online tool, no registration required."
category: windows
keywords:
- bitlocker repair
- decrypt bitlocker volume
- repair damaged volume
- windows bitlocker recovery
- command line bitlocker
- bde recovery
- bitlocker data recovery
- encrypted drive repair
- windows disk repair
- bitlocker unlock password
features:
- Recover data from damaged BitLocker encrypted volumes
- Decrypt volumes using recovery key or password
- Output repaired data to a specified volume
- Log all output to a specific file
- Utilize key packages for recovery
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# repair-bde

> Attempt to repair or decrypt a damaged BitLocker-encrypted volume.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/repair-bde>.

- Attempt to repair a specified volume:

`repair-bde {{C:}}`

- Attempt to repair a specified volume and output to another volume:

`repair-bde {{C:}} {{D:}}`

- Attempt to repair a specified volume using the provided recovery key file:

`repair-bde {{C:}} -RecoveryKey {{path\to\file.bek}}`

- Attempt to repair a specified volume using the provided numerical recovery password:

`repair-bde {{C:}} -RecoveryPassword {{password}}`

- Attempt to repair a specified volume using the provided password:

`repair-bde {{C:}} -Password {{password}}`

- Attempt to repair a specified volume using the provided key package:

`repair-bde {{C:}} -KeyPackage {{path\to\directory}}`

- Log all output to a specific file:

`repair-bde {{C:}} -LogFile {{path\to\file}}`

- Display help:

`repair-bde /?`
