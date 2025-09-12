---
title: "Enable PnP Device - Activate Hardware on Windows | Free DevTools"
name: enable-pnpdevice
path: /freedevtools/tldr/windows/enable-pnpdevice
canonical: "https://hexmos.com/freedevtools/tldr/windows/enable-pnpdevice/"
description: "Activate PnP Device with Enable-PnpDevice. Enable or disable Plug and Play devices on Windows using command line, improving system control. Free online tool, no registration required."
category: windows
keywords:
- PnP Device Activation
- Windows Hardware Enable
- Enable PnP Device PowerShell
- PowerShell PnP Management
- Windows Device Manager Command Line
- Enable Device Instance
- Disable PnP Device Windows
- Windows PnP Troubleshooting
- Hardware Activation Windows
- PnP Device Command
features:
- Enable a specific Plug and Play device by Instance ID.
- Enable all currently disabled PnP devices.
- Force device enablement without confirmation prompts.
- Simulate device enablement to preview the outcome.
- Utilize command-line interface for advanced device control.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Enable-PnpDevice

> The Enable-PnpDevice cmdlet enables a Plug and Play (PnP) device. You must use an Administrator account to enable a device.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/pnpdevice/enable-pnpdevice>.

- Enable a device:

`Enable-PnpDevice -InstanceId 'RETRIEVED USING Get-PnpDevice COMMAND'`

- Enable all disabled PnP devices:

`Get-PnpDevice | Where-Object {$_.Problem -eq 22} | Enable-PnpDevice`

- Enable a device without confirmation:

`Enable-PnpDevice -InstanceId 'RETRIEVED USING Get-PnpDevice COMMAND' -Confirm:$False`

- Dry run of what would happen if the cmdlet runs:

`Enable-PnpDevice -InstanceId 'USB\VID_5986&;PID_0266&;MI_00\7&;1E5D3568&;0&;0000' -WhatIf:$True`
