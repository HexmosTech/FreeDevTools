---
title: "Tune exFAT - Adjust exFAT Parameters | Online Free DevTools by Hexmos"
name: tune.exfat
path: "/freedevtools/tldr/linux/tune-exfat/"
canonical: "https://hexmos-com/freedevtools/tldr/linux/tune-exfat/"
description: "Adjust exFAT parameters with tune.exfat. Control volume labels and GUIDs on exFAT filesystems via the command line. Free online tool, no registration required."
category: linux
keywords:
- exFAT parameter tuner
- linux exFAT filesystem manager
- exFAT volume label editor
- exFAT GUID modifier
- exFAT serial number tool
- linux filesystem utilities
- exFAT partition manager
- exFAT attribute control
- command-line exFAT tool
- exFAT volume ID changer
features:
- Print the volume label of an exFAT filesystem
- Set the volume label of an exFAT filesystem
- Print the volume GUID of an exFAT filesystem
- Set the volume GUID of an exFAT filesystem
- Modify the volume serial number of an exFAT volume
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tune.exfat

> Adjust tunable filesystem parameters on an exFAT filesystem.
> More information: <https://manned.org/tune.exfat>.

- Print the volume label of a filesystem:

`tune.exfat {{[-l|--print-label]}} {{/dev/sdXY}}`

- Set the volume label of a filesystem:

`tune.exfat {{[-L|--set-label]}} {{new_label}} {{/dev/sdXY}}`

- Print the volume GUID of a filesystem:

`tune.exfat {{[-u|--print-guid]}} {{/dev/sdXY}}`

- Set the volume GUID of a filesystem:

`tune.exfat {{[-U|--set-guid]}} {{new_guid}} {{/dev/sdXY}}`

- Print the volume serial of a filesystem:

`tune.exfat {{[-i|--print-serial]}} {{/dev/sdXY}}`

- Set the volume serial of a filesystem:

`tune.exfat {{[-I|--set-serial]}} {{new_serial}} {{/dev/sdXY}}`
