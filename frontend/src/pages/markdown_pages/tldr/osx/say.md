---
title: "Text to Speech - Create Audio from Text with Say | Free DevTools"
name: say
path: /freedevtools/tldr/osx/say
canonical: "https://hexmos.com/freedevtools/tldr/osx/say/"
description: "Create text to speech audio with Say. Convert text into spoken audio files on macOS using the command line. Free online tool, no registration required."
category: osx
keywords:
- text to speech generator
- speech synthesis macOS
- command line text reader
- text to audio converter
- macOS speech command
- terminal text to speech
- say command example
- text to voice osx
- audio file generator
- command line audio creator
features:
- Convert text input to spoken audio
- Generate audio files from command line input
- Customize voice and speech rate
- List available speech voices
- Read text files aloud
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# say

> Convert text to speech.
> More information: <https://keith.github.io/xcode-man-pages/say.1.html>.

- Say a phrase aloud:

`say "{{I like to ride my bike.}}"`

- Read a file aloud:

`say --input-file {{filename.txt}}`

- Say a phrase with a custom voice and speech rate:

`say --voice {{voice}} --rate {{words_per_minute}} "{{I'm sorry Dave, I can't let you do that.}}"`

- List the available voices (different voices speak in different languages):

`say --voice "?"`

- Say something in Polish:

`say --voice {{Zosia}} "{{Litwo, ojczyzno moja!}}"`

- Create an audio file of the spoken text:

`say --output-file {{filename.aiff}} "{{Here's to the Crazy Ones.}}"`
