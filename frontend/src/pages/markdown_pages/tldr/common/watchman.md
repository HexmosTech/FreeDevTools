---
title: "Watch Files - Trigger Actions with Watchman | Free DevTools"
name: watchman
path: /freedevtools/tldr/common/watchman
canonical: "https://hexmos.com/freedevtools/tldr/common/watchman/"
description: "Trigger actions with Watchman when file changes occur. Monitor directories, automate build processes, and manage file system events efficiently. Free online tool, no registration required."
category: common
keywords:
- file system monitor
- watchman file trigger
- file change detection
- directory watching
- watchman automation
- file event handler
- watchman trigger script
- linux file monitor
- macos file monitor
- windows file monitor
features:
- Watch project directories for file changes
- Execute custom commands on file modification
- List watched directories and associated triggers
- Delete specific or all directory watches and triggers
- Temporarily shut down the watchman server
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# watchman

> A service that watches files, and triggers actions when changes occur.
> More information: <https://facebook.github.io/watchman/docs/cli-options>.

- Infer the root directory of the project containing the specified directory, and watch its files and sub-folders for changes:

`watchman watch-project {{path/to/directory}}`

- Add a trigger to run a command when files with a specified filename pattern in a watched directory change:

`watchman -- trigger {{path/to/watched_directory}} {{trigger_name}} '{{pattern}}' -- {{command}}`

- List all watched directories:

`watchman watch-list`

- Delete a watch on a directory and its associated triggers:

`watchman watch-del {{path/to/watched_directory}}`

- Delete all watched directories and triggers:

`watchman watch-del-all`

- List all triggers on a watched directory:

`watchman trigger-list {{path/to/watched_directory}}`

- Delete a trigger from a watched directory:

`watchman trigger-del {{path/to/watched_directory}} {{trigger_name}}`

- Temporarily stop `watchman`, until the next time you call a `watchman` command:

`watchman shutdown-server`
