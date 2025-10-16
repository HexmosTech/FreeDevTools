---
title: "Superfile Manager - Control Files in Terminal | Online Free DevTools by Hexmos"
name: spf
path: "/freedevtools/tldr/common/spf/"
canonical: "https://hexmos.com/freedevtools/tldr/common/spf/"
description: "Control files effortlessly with Superfile Manager. Navigate, manage, and manipulate files quickly in your terminal using this modern command-line tool. Free online tool, no registration required."
category: common
keywords:
- terminal file manager
- command-line file manager
- superfile manager
- file navigation
- directory management
- spf command
- toml configuration
- hotkey configuration
- terminal productivity
- linux file manager
features:
- Launch with specific or multiple directory paths.
- Fix hotkey settings by appending missing keys.
- Fix configuration file by appending missing entries.
- Use specific configuration and hotkey files.
- Display internal configuration and data directory paths.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# spf

> The superfile – Modern terminal file manager.
> More information: <https://github.com/yorukot/superfile>.

- Launch `spf` with a specific path:

`spf {{path/to/directory}}`

- Launch `spf` with multiple paths:

`spf {{path/to/directory1 path/to/directory2 ...}}`

- Fix hotkey settings by appending missing keys:

`spf {{[--fh|--fix-hotkeys]}}`

- Fix the configuration file by appending missing entries:

`spf {{[--fch|--fix-config-file]}}`

- Use specific configuration and hotkey files:

`spf {{[-c|--config-file]}} {{path/to/config.toml}} {{[--hf|--hotkey-file]}} {{path/to/hotkey.toml}}`

- Write the path of the first selected file to this file and exit:

`spf {{[--cf|--chooser-file]}} {{tmp/chooser-result}}`

- Show internal configuration and data directory paths:

`spf {{[pl|path-list]}}`
