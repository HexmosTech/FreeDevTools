---
title: "Immich Upload Tool - Upload Photos to Immich | Online Free DevTools by Hexmos"
name: immich-go
path: /freedevtools/tldr/common/immich-go
canonical: "https://hexmos.com/freedevtools/tldr/common/immich-go/"
description: "Upload photos easily with Immich-Go. Streamline your self-hosted Immich server by efficiently uploading large photo collections. Free online tool, no registration required."
category: common
keywords:
- Immich photo upload
- Immich bulk upload
- Immich Google Photos takeout
- Google Photos Immich import
- Immich album creation
- Immich duplicate removal
- Immich command line tool
- Immich photo management
- Immich server utility
- Immich album deletion
features:
- Upload Google Photos takeout archives to Immich server.
- Automatically generate albums based on date during upload.
- Read server and key configuration from a local file.
- Remove duplicate images based on server content.
- Delete albums matching a specified pattern.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# immich-go

> Immich-Go is an open-source tool designed to streamline uploading large photo collections to your self-hosted Immich server.
> See also: `immich-cli`.
> More information: <https://github.com/simulot/immich-go>.

- Upload a Google Photos takeout file to Immich server:

`immich-go -server={{server_url}} -key={{server_key}} upload {{path/to/takeout_file.zip}}`

- Import photos captured on June 2019, while auto-generating albums:

`immich-go -server={{server_url}} -key={{server_key}} upload -create-albums -google-photos -date={{2019-06}} {{path/to/takeout_file.zip}}`

- Upload a takeout file using server and key from a configuration file:

`immich-go -use-configuration={{~/.immich-go/immich-go.json}} upload {{path/to/takeout_file.zip}}`

- Examine Immich server content, remove less quality images, and preserve albums:

`immich-go -server={{server_url}} -key={{server_key}} duplicate -yes`

- Delete all albums created with the pattern "YYYY-MM-DD":

`immich-go -server={{server_url}} -key={{server_key}} tool album delete {{\d{4}-\d{2}-\d{2}}}`
