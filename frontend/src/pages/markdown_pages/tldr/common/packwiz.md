---
title: "Create Minecraft Modpacks - Manage Mods with Packwiz | Online Free DevTools by Hexmos"
name: packwiz
path: /freedevtools/tldr/common/packwiz
canonical: "https://hexmos.com/freedevtools/tldr/common/packwiz/"
description: "Create Minecraft modpacks easily with Packwiz. Manage mods, update configurations, and export to Modrinth/Curseforge. Free online tool, no registration required."
category: common
keywords:
- minecraft modpack manager
- packwiz mod manager
- minecraft mod manager
- curseforge modpack
- modrinth modpack
- toml configuration editor
- minecraft mod update
- minecraft mod list
- modpack creator
- minecraft modpack export
features:
- Initialize a new modpack project
- Add mods from Modrinth or Curseforge
- List all mods within a modpack
- Refresh the modpack configuration
- Export a modpack to Modrinth or Curseforge
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# packwiz

> Create, edit and manage Minecraft modpacks.
> More information: <https://packwiz.infra.link/reference/commands/packwiz/>.

- Interactively create a new modpack in the current directory:

`packwiz init`

- Add a mod from Modrinth or Curseforge:

`packwiz {{modrinth|curseforge}} add {{url|slug|search_term}}`

- List all mods in the modpack:

`packwiz list`

- Update `index.toml` after manually editing files:

`packwiz refresh`

- Export as a Modrinth (`.mrpack`) or Curseforge (Zip) file:

`packwiz {{modrinth|curseforge}} export`
