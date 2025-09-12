---
title: "Mimikatz Misc - Control System Functions | Free DevTools"
name: mimikatz-misc
path: /freedevtools/tldr/windows/mimikatz-misc
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-misc/"
description: "Control system functions with Mimikatz Misc commands. Manage processes, manipulate time, and trigger BSOD for testing. Free online tool, no registration required."
category: windows
keywords:
- windows mimikatz misc
- mimikatz system control
- mimikatz bsod trigger
- mimikatz kernel drivers list
- mimikatz system time change
- windows system manipulation
- windows security testing
- mimikatz windows commands
- windows troubleshooting commands
- windows forensics tool
features:
- Trigger a Blue Screen of Death for testing purposes
- List all loaded kernel drivers
- Change the system time
- Execute miscellaneous system commands
- Perform forensic analysis on a Windows system
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mimikatz misc

> Miscellaneous system and utility commands.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- Trigger Blue Screen of Death (for testing):

`mimikatz "misc::bsod"`

- List loaded kernel drivers:

`mimikatz "misc::minidump"`

- Change system time:

`mimikatz "misc::systemtime"`
