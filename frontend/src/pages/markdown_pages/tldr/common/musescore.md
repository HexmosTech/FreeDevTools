---
title: "Create Sheet Music - Edit Scores with MuseScore | Online Free DevTools by Hexmos"
name: musescore
path: /freedevtools/tldr/common/musescore
canonical: "https://hexmos.com/freedevtools/tldr/common/musescore/"
description: "Create sheet music with MuseScore command line. Edit scores, export to various formats, and debug music notations effectively. Free online tool, no registration required."
category: common
keywords:
- sheet music editor
- music notation software
- MuseScore command line
- score editing tool
- music XML converter
- MIDI file export
- music sheet printing
- lilypond integration
- music score diff
- audio driver configuration
features:
- Export sheet music to various formats
- Debug MuseScore with command line options
- Configure audio drivers for music playback
- Generate diffs between different music scores
- Customize MIDI import operations with specific files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# musescore

> MuseScore 3 sheet music editor.
> See also: `lilypond`.
> More information: <https://musescore.org/en/handbook/4/command-line-options>.

- Use a specific audio driver:

`musescore --audio-driver {{jack|alsa|portaudio|pulse}}`

- Set the MP3 output bitrate in kbit/s:

`musescore --bitrate {{bitrate}}`

- Start MuseScore in debug mode:

`musescore --debug`

- Enable experimental features, such as layers:

`musescore --experimental`

- Export the given file to the specified output file. The file type depends on the given extension:

`musescore --export-to {{output_file}} {{input_file}}`

- Print a diff between the given scores:

`musescore --diff {{path/to/file1}} {{path/to/file2}}`

- Specify a MIDI import operations file:

`musescore --midi-operations {{path/to/file}}`
