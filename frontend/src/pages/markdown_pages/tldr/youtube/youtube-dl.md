---
title: "Download YouTube Videos - youtube-dl | Online Free DevTools by Hexmos"
name: youtube-dl
path: /freedevtools/tldr/youtube/youtube-dl
canonical: "https://hexmos.com/freedevtools/tldr/youtube/youtube-dl/"
description: "Download YouTube videos instantly with youtube-dl. Extract audio, download subtitles, and customize video quality. Free online tool, no registration required."
category: common
keywords:
- youtube video downloader
- youtube-dl downloader
- youtube-dl linux
- youtube-dl windows
- youtube-dl macos
- youtube-dl playlist downloader
- youtube-dl mp3 converter
- youtube-dl subtitle downloader
- video downloader command line
- youtube downloader script
features:
- Download videos from YouTube and other websites
- Extract audio from videos and convert to MP3
- Download subtitles in various languages
- Specify video quality and format
- Download entire playlists with customized filenames
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# youtube-dl

> Download videos from YouTube and other websites.
> See also: `yt-dlp`, `ytfzf`, `you-get`.
> More information: <https://rg3.github.io/youtube-dl/>.

- Download a video or playlist:

`youtube-dl '{{https://www.youtube.com/watch?v=oHg5SJYRHA0}}'`

- List all formats that a video or playlist is available in:

`youtube-dl {{[-F|--list-formats]}} '{{https://www.youtube.com/watch?v=Mwa0_nE9H7A}}'`

- Download a video or playlist at a specific quality:

`youtube-dl {{[-f|--format]}} "{{best[height<=480]}}" '{{https://www.youtube.com/watch?v=oHg5SJYRHA0}}'`

- Download the audio from a video and convert it to an MP3:

`youtube-dl {{[-x|--extract-audio]}} --audio-format {{mp3}} '{{url}}'`

- Download the best quality audio and video and merge them:

`youtube-dl {{[-f|--format]}} bestvideo+bestaudio '{{url}}'`

- Download video(s) as MP4 files with custom filenames:

`youtube-dl {{[-f|--format]}} {{mp4}} {{[-o|--output]}} "{{%(playlist_index)s-%(title)s by %(uploader)s on %(upload_date)s in %(playlist)s.%(ext)s}}" '{{url}}'`

- Download a particular language's subtitles along with the video:

`youtube-dl --sub-lang {{en}} --write-sub '{{https://www.youtube.com/watch?v=Mwa0_nE9H7A}}'`

- Download a playlist and extract MP3s from it:

`youtube-dl {{[-f|--format]}} "bestaudio" {{[-c|--continue]}} {{[-w|--no-overwrites]}} {{[-i|--ignore-errors]}} {{[-x|--extract-audio]}} --audio-format mp3 {{[-o|--output]}} "%(title)s.%(ext)s" '{{url_to_playlist}}'`
