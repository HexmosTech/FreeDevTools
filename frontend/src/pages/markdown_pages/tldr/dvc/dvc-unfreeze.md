---
title: "DVC Unfreeze - Restore DVC Stage Tracking | Free DevTools"
name: dvc-unfreeze
path: /freedevtools/tldr/dvc/dvc-unfreeze
canonical: "https://hexmos.com/freedevtools/tldr/dvc/dvc-unfreeze/"
description: "Unfreeze DVC stages to restore dependency tracking with DVC Unfreeze. Manage pipeline stages and resume monitoring changes. Free online tool, no registration required."
category: common
keywords:
- DVC stage unfreeze
- DVC pipeline management
- DVC dependency tracking
- Unfreeze DVC stage command
- DVC stage control
- DVC CLI
- DVC pipeline restore
- DVC stage modification
- DVC workflow automation
- Command-line DVC tool
features:
- Re-enable tracking for frozen DVC stages
- Restore dependency monitoring in DVC pipelines
- Unfreeze multiple DVC stages simultaneously
- Facilitate iterative development with DVC
- Manage DVC pipeline stage dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dvc unfreeze

> Unfreeze stages in the DVC pipeline.
> This allows DVC to start tracking changes in stage dependencies again after they were frozen.
> See also: `dvc freeze`.
> More information: <https://dvc.org/doc/command-reference/unfreeze>.

- Unfreeze one or more specified stages:

`dvc unfreeze {{stage_name1 stage_name2 ...}}`
