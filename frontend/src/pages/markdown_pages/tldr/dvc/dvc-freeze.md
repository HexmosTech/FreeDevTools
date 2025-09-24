---
title: "Freeze DVC Stages - Control Pipeline Execution | Online Free DevTools by Hexmos"
name: dvc-freeze
path: /freedevtools/tldr/dvc/dvc-freeze
canonical: "https://hexmos.com/freedevtools/tldr/dvc/dvc-freeze/"
description: "Control DVC pipeline execution by freezing stages with DVC Freeze. Prevent unwanted re-execution and manage dependencies effectively. Free online tool, no registration required."
category: common
keywords:
- DVC pipeline freeze
- DVC stage control
- Data version control freeze
- Pipeline execution management
- Dependency tracking prevention
- DVC workflow automation
- DVC command line interface
- Freeze DVC stages linux
- Freeze DVC stages macos
- Freeze DVC stages windows
features:
- Prevent re-execution of DVC stages
- Control DVC pipeline dependencies
- Freeze multiple DVC stages simultaneously
- Simplify DVC workflow management
- Isolate DVC pipeline components
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dvc freeze

> Freeze stages in the DVC pipeline.
> This prevents DVC from tracking changes in stage dependencies and re-execution until unfreeze.
> See also: `dvs unfreeze`.
> More information: <https://dvc.org/doc/command-reference/freeze>.

- Freeze one or more specified stages:

`dvc freeze {{stage_name1 stage_name2 ...}}`
