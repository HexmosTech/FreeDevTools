---
title: "Ludusavi Backup - Save Game Data | Online Free DevTools by Hexmos"
name: ludusavi
path: /freedevtools/tldr/common/ludusavi
canonical: "https://hexmos.com/freedevtools/tldr/common/ludusavi/"
description: "Backup video game save data with Ludusavi, ensuring your progress is safe. Restore games easily with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- video game backup
- game save manager
- ludusavi backup
- game save restore
- game data backup
- game data manager
- command line backup
- command line restore
- save game data linux
- save game data windows
features:
- Back up save data for a wide range of video games.
- Restore game saves from specified backup locations.
- List available backups for specific games.
- Wrap game launchers for seamless backup integration.
- Wrap standalone games for comprehensive save data management.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ludusavi

> Backup video game save data.
> More information: <https://github.com/mtkennerly/ludusavi/blob/master/docs/cli.md>.

- Backup games:

`ludusavi backup --path {{path/to/backup}}`

- Restore games:

`ludusavi restore --path {{path/to/backup}} {{"game1" "game2" ...}}`

- List backups:

`ludusavi backups --path {{path/to/backup}}`

- Wrap launcher game:

`ludusavi wrap --gui --infer {{heroic|lutris|steam}} -- {{game_launch_commands}}`

- Wrap standalone game:

`ludusavi wrap --gui --name {{name}} -- {{game_launch_commands}}`
