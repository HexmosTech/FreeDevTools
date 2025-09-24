---
title: "Immich Upload - Manage Media Files | Online Free DevTools by Hexmos"
name: immich
path: /freedevtools/tldr/common/immich
canonical: "https://hexmos.com/freedevtools/tldr/common/immich/"
description: "Upload media files with Immich CLI. Manage photos and videos, organize albums, and skip unwanted assets using glob patterns. Free online tool, no registration required."
category: common
keywords:
- immich upload
- immich cli
- media management
- photo upload
- video upload
- album creation
- recursive upload
- glob pattern ignore
- command line interface
- immich server
features:
- Authenticate to Immich server using URL and API key.
- Upload single or multiple image files.
- Recursively upload entire directories including subdirectories.
- Create albums based on directory structure.
- Skip assets using glob pattern matching.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# immich

> Immich command-line interface (CLI) that allows you to perform certain actions.
> See also: `immich-go`.
> More information: <https://immich.app/docs/features/command-line-interface/>.

- Authenticate to Immich server:

`immich login {{server_url/api}} {{server_key}}`

- Upload some image files:

`immich upload {{file1.jpg file2.jpg ...}}`

- Upload a directory including subdirectories:

`immich upload --recursive {{path/to/directory}}`

- Create an album based on a directory:

`immich upload --album-name "{{My summer holiday}}" --recursive {{path/to/directory}}`

- Skip assets matching a glob pattern:

`immich upload --ignore {{**/Raw/** **/*.tif}} --recursive {{path/to/directory}}`

- Include hidden files:

`immich upload --include-hidden --recursive {{path/to/directory}}`
