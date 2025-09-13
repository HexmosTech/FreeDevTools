---
title: "VBoxManage Extpack - Manage VirtualBox Extensions | Free DevTools"
name: vboxmanage-extpack
path: /freedevtools/tldr/common/vboxmanage-extpack
canonical: "https://hexmos.com/freedevtools/tldr/common/vboxmanage-extpack/"
description: "Manage VirtualBox extension packs with VBoxManage Extpack. Install, uninstall, and clean up extensions for enhanced functionality. Free online tool, no registration required."
category: common
keywords:
- virtualbox extension pack management
- vboxmanage extpack install
- vboxmanage extpack uninstall
- virtualbox extension manager
- vbox extpack command line
- virtual machine extensions
- virtualbox package manager
- vboxmanage extpack cleanup
- virtualbox extension update
- cross platform extension tool
features:
- Install extension packs into VirtualBox environments.
- Remove existing versions of VirtualBox extension packs.
- Uninstall extension packs from VirtualBox installations.
- Forcefully uninstall extension packs, skipping refusals.
- Clean up residual files from extension pack installations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# VBoxManage extpack

> Manage extension packs for Oracle VirtualBox.
> More information: <https://www.virtualbox.org/manual/ch08.html#vboxmanage-extpack>.

- Install extension packs to VirtualBox (Note: You need to remove the existing version of the extension pack before installing a new version.):

`VBoxManage extpack install {{path/to/file.vbox-extpack}}`

- Remove the existing version of the VirtualBox extension pack:

`VBoxManage extpack install --replace`

- Uninstall extension packs from VirtualBox:

`VBoxManage extpack uninstall {{extension_pack_name}}`

- Uninstall extension packs and skip most uninstallation refusals:

`VBoxManage extpack uninstall --force {{extension_pack_name}}`

- Clean up temporary files and directories left by extension packs:

`VBoxManage extpack cleanup`
