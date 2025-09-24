---
title: "PipeWire Metadata - Manage Metadata with pw-metadata | Online Free DevTools by Hexmos"
name: pw-metadata
path: /freedevtools/tldr/linux/pw-metadata
canonical: "https://hexmos.com/freedevtools/tldr/linux/pw-metadata/"
description: "Manage PipeWire metadata efficiently with pw-metadata. Monitor, set, and delete metadata on PipeWire objects easily. Free online tool, no registration required."
category: linux
keywords:
  - PipeWire metadata manager
  - Linux metadata tool
  - pw-metadata command
  - PipeWire object metadata
  - Monitor PipeWire metadata
  - Set PipeWire metadata
  - Delete PipeWire metadata
  - PipeWire configuration tool
  - PipeWire system management
  - pw-metadata CLI
features:
  - Monitor PipeWire metadata changes in real-time.
  - Set and modify metadata on PipeWire objects.
  - Delete metadata from PipeWire objects.
  - List all available metadata objects.
  - Provide detailed help and usage instructions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pw-metadata

> Monitor, set, and delete metadata on PipeWire objects.
> See also: `pipewire`, `pw-mon`, `pw-cli`.
> More information: <https://docs.pipewire.org/page_man_pw-metadata_1.html>.

- Show metadata in `default` name:

`pw-metadata`

- Show metadata with ID 0 in `settings`:

`pw-metadata {{[-n|--name]}} {{settings}} {{0}}`

- List all available metadata objects:

`pw-metadata {{[-l|--list]}}`

- Keep running and log the changes to the metadata:

`pw-metadata {{[-m|--monitor]}}`

- Delete all metadata:

`pw-metadata {{[-d|--delete]}}`

- Set `log.level` to 1 in `settings`:

`pw-metadata {{[-n|--name]}} {{settings}} {{0}} {{log.level}} {{1}}`

- Display help:

`pw-metadata {{[-h|--help]}}`
