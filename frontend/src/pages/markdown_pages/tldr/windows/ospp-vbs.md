---
title: "Office Activation - Manage Office Licenses | Online Free DevTools by Hexmos"
name: ospp.vbs
path: /freedevtools/tldr/windows/ospp-vbs
canonical: "https://hexmos-com/freedevtools/tldr/windows/ospp-vbs/"
description: "Manage Office licenses with ospp.vbs. Activate, install and uninstall product keys for volume licensed Microsoft Office products. Free online tool, no registration required."
category: windows
keywords:
- Office activation
- Microsoft Office activation
- Volume license activation
- Office license management
- Office product key installer
- Office KMS activation
- Windows activation tool
- OSPP VBScript
- Office license uninstaller
- Microsoft volume licensing
features:
- Install Office product keys
- Uninstall Office product keys
- Set KMS hostnames and ports
- Activate installed Office product keys via KMS
- Display Office license information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ospp.vbs

> Install, activate, and manage volume licensed versions of Microsoft Office products.
> Note: This command may override, deactivate, and/or remove your current volume of licensed Office product versions, so please proceed cautiously.
> More information: <https://learn.microsoft.com/deployoffice/vlactivation/tools-to-manage-volume-activation-of-office>.

- Install a product key (Note: It replaces the existing key):

`cscript ospp.vbs /inpkey:{{product_key}}`

- Uninstall an installed product key with the last five digits of the product key:

`cscript ospp.vbs /unpkey:{{product_key_digits}}`

- Set a KMS host name:

`cscript ospp.vbs /sethst:{{ip|hostname}}`

- Set a KMS port:

`cscript ospp.vbs /setprt:{{port}}`

- Activate installed Office product keys:

`cscript ospp.vbs /act`

- Display license information for installed product keys:

`cscript ospp.vbs /dstatus`
