---
title: "Build OS Images - Kiwi-ng Appliance Builder | Free DevTools"
name: kiwi-ng
path: /freedevtools/tldr/common/kiwi-ng
canonical: "https://hexmos.com/freedevtools/tldr/common/kiwi-ng/"
description: "Build OS images with Kiwi-ng appliance builder. Create and customize operating system images using command-line tools. Free online tool, no registration required."
category: common
keywords:
- OS image builder
- appliance builder tool
- Linux image creation
- System image customization
- Kiwi-ng command-line
- OS image deployment
- Bootable image generator
- Virtual appliance creator
- Root file system creation
- ISO image builder
features:
- Build customized OS images
- Create deployable appliances
- List build results
- Display help documentation
- Show version information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kiwi-ng

> An OS image and appliance builder.
> More information: <https://osinside.github.io/kiwi/>.

- Build an appliance:

`kiwi-ng system build --description={{path/to/directory}} --target-dir={{path/to/directory}}`

- Show build result of built appliance:

`kiwi-ng result list --target-dir={{path/to/directory}}`

- Display help:

`kiwi-ng help`

- Display version:

`kiwi-ng -v`
