---
title: "Synthesize Speech - Flite Text-to-Speech | Free DevTools"
name: flite
path: /freedevtools/tldr/common/flite
canonical: "https://hexmos.com/freedevtools/tldr/common/flite/"
description: "Synthesize speech with Flite Text-to-Speech engine for various platforms. Convert text and files to audio output using command line. Free online tool, no registration required."
category: common
keywords:
- text to speech linux
- speech synthesis common
- command line tts
- flite text synthesis
- text to audio converter
- voice synthesizer linux
- command line speech
- flite speech engine
- festival lite tts
- command line audio generation
features:
- Convert text to speech from command line
- Read text from files and convert to speech
- Specify custom voice files for speech synthesis
- Output speech to a WAV audio file
- List available voices for speech synthesis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flite

> Speech synthesis engine.
> More information: <http://www.festvox.org/flite/doc/>.

- List all available voices:

`flite -lv`

- Convert a text string to speech:

`flite -t "{{string}}"`

- Convert the contents of a file to speech:

`flite -f {{path/to/file.txt}}`

- Use the specified voice:

`flite -voice {{file://path/to/filename.flitevox|url}}`

- Store output into a wav file:

`flite -voice {{file://path/to/filename.flitevox|url}} -f {{path/to/file.txt}} -o {{output.wav}}`

- Display version:

`flite --version`
