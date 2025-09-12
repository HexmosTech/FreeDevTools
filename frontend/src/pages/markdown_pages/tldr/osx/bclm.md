---
title: "Battery Charge Limit - Control MacBook Charging | Free DevTools"
name: bclm
path: /freedevtools/tldr/osx/bclm
canonical: "https://hexmos.com/freedevtools/tldr/osx/bclm/"
description: "Control MacBook battery charging with Battery Charge Limit (bclm). Set custom charge limits, persist settings, and optimize battery health on macOS. Free online tool, no registration required."
category: osx
keywords:
- macos battery charge limit
- macbook battery health management
- osx charge control utility
- intel mac battery saver
- apple silicon charge limiter
- bclm command line tool
- macbook charging optimization
- battery cycle reduction mac
- macos power management
- battery percentage controller
features:
- Set custom charge limits for MacBooks
- Persist charge limits across reboots
- Remove persistent charge limit settings
- Read the current battery charge limit
- Optimize MacBook battery health
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bclm

> Set a custom charge limit on MacBooks.
> More information: <https://github.com/zackelia/bclm>.

- Set the charge limit to about 80% (for Intel machines, the battery charge level may be slightly lower than the set value):

`sudo bclm write {{77}}`

- Read the current charge limit:

`bclm read`

- Keep the charge limit after rebooting/smc reset:

`sudo bclm persist`

- Remove the persistent charge limit:

`sudo bclm unpersist`
