---
title: "Control Audio Playback - Audacious Player | Free DevTools"
name: audacious
path: /freedevtools/tldr/common/audacious
canonical: "https://hexmos.com/freedevtools/tldr/common/audacious/"
description: "Control audio playback with Audacious Player. Manage playlists, enqueue directories, and navigate tracks using simple commands. Free online tool, no registration required."
category: common
keywords:
- audio player control
- audacious command line
- linux audio player
- playlist management
- mp3 playback cli
- audio enqueue command
- headless audio playback
- audacious player cli
- command line audio control
- audacious media player
features:
- Launch the Audacious GUI
- Enqueue audio files from a directory
- Control playback (play/pause, stop, skip)
- Start Audacious in headless mode
- Quit Audacious after playback completion
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# audacious

> An open-source audio player. Indirectly based on XMMS.
> See also: `audtool`, `clementine`, `mpc`, `ncmpcpp`.
> More information: <https://audacious-media-player.org>.

- Launch the GUI:

`audacious`

- Start a new instance and play an audio:

`audacious --new-instance {{path/to/audio}}`

- Enqueue a specific directory of audio files:

`audacious --enqueue {{path/to/directory}}`

- Start or stop playback:

`audacious --play-pause`

- Skip forwards ([fwd]) or backwards ([rew]) in the playlist:

`audacious --{{fwd|rew}}`

- Stop playback:

`audacious --stop`

- Start in CLI mode (headless):

`audacious --headless`

- Exit as soon as playback stops or there is nothing to playback:

`audacious --quit-after-play`
