---
title: "Edit MP3 Tags - Control ID3v1 Metadata | Online Free DevTools by Hexmos"
name: mp3info
path: /freedevtools/tldr/common/mp3info
canonical: "https://hexmos.com/freedevtools/tldr/common/mp3info/"
description: "Control MP3 metadata easily with mp3info. Edit ID3v1 tags, manage artist, title, and album information. Free online tool, no registration required."
category: common
keywords:
- mp3 tag editor
- mp3 metadata editor
- id3v1 tag editor
- mp3 info tool
- audio tag editor
- linux mp3 editor
- macos mp3 editor
- command line mp3 editor
- mp3 tagger
- audio metadata tool
features:
- Show all ID3v1 tags of an MP3 file
- Interactively edit ID3v1 tags
- Set artist, title, album, year, and comment
- Set the track number in the album
- Set the music genre by genre number
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mp3info

> Viewer/editor for ID3v1 (but not ID3v2) tags of MP3 files.
> More information: <https://www.ibiblio.org/mp3info/mp3info.html>.

- Show all ID3v1 tags of a specific MP3 file:

`mp3info {{path/to/file.mp3}}`

- Edit ID3v1 tags [i]nteractively:

`mp3info -i {{path/to/file.mp3}}`

- Set values for ID3v1 tags in a specific MP3 file ([a]rtist, [t]itle, a[l]bum, [y]ear, and [c]omment):

`mp3info -a "{{artist_name}}" -t "{{song_title}}" -l "{{album_title}}" -y {{year}} -c "{{comment_text}}" {{path/to/file.mp3}}`

- Set the [n]umber of the track in the album for a specific MP3 file:

`mp3info -n {{track_number}} {{path/to/file.mp3}}`

- [G]et a list of valid genres and their numeric codes:

`mp3info -G`

- Set the music [g]enre for a specific MP3 file:

`mp3info -g {{genre_number}} {{path/to/file.mp3}}`
