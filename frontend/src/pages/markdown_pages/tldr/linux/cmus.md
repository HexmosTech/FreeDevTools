---
title: "Control cmus - Command-Line Music Player | Free DevTools"
name: cmus
path: "/freedevtools/tldr/unknown/cmus"
canonical: "https://hexmos.com/freedevtools/tldr/unknown/cmus/"
description: "Control cmus music player easily with this command-line interface. Manage your music library and playback with simple commands. Free online tool, no registration required."
category: unknown
keywords:
- cmus music player
- command line music player
- linux music player
- terminal music player
- cmus command reference
- cmus keyboard shortcuts
- music library manager
- audio player cli
- command-line mp3 player
- music collection manager
features:
- Play music from the command line
- Manage music library and playlists
- Search for songs, albums, and artists
- Control playback with keyboard shortcuts
- Update and refresh music metadata
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cmus

> Command-line Music Player.
> Use `<ArrowKeys>` to navigate, `<Enter>` to select, and numbers `<1>`-`<8>` switch between different views.
> See also: `ncmpcpp`, `clementine`, `qmmp`.
> More information: <https://manned.org/cmus>.

- Open `cmus` into the specified directory (this will become your new working directory):

`cmus {{path/to/directory}}`

- Add file/directory to library:

`<:>add {{path/to/file_or_directory}}`

- Refresh the metadata of songs in the library:

`<:>update-cache`

- Search for songs, albums, or artists:

`</>{{something}}`

- Pause/unpause current song:

`<c>`

- Toggle shuffle mode on/off:

`<s>`

- Quit `cmus`:

`<q>`
