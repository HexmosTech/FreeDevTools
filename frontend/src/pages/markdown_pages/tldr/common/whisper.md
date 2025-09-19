---
title: "Convert Audio to Text - Whisper | Online Free DevTools by Hexmos"
name: whisper
path: /freedevtools/tldr/common/whisper
canonical: "https://hexmos.com/freedevtools/tldr/common/whisper/"
description: "Convert audio to text with Whisper. Transcribe audio files to various formats like txt, srt, and json using this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- audio to text conversion
- speech to text CLI
- whisper transcription tool
- audio file converter
- srt file generation
- vtt file generation
- json audio transcript
- command line audio processing
- audio transcription software
- openAI whisper
features:
- Transcribe audio to text from the command line
- Convert audio files to multiple text formats
- Specify a model for audio conversion
- Specify audio language for improved accuracy
- Save transcribed audio to a specific directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# whisper

> Convert audio files to `txt`, `vtt`, `srt`, `tsv` and `json`.
> More information: <https://github.com/openai/whisper>.

- Convert a specific audio file to all of the given file formats:

`whisper {{path/to/audio.mp3}}`

- Convert an audio file specifying the output format of the converted file:

`whisper {{path/to/audio.mp3}} --output_format {{txt}}`

- Convert an audio file using a specific model for conversion:

`whisper {{path/to/audio.mp3}} --model {{tiny.en,tiny,base.en,base,small.en,small,medium.en,medium,large-v1,large-v2,large}}`

- Convert an audio file specifying which language the audio file is in to reduce conversion time:

`whisper {{path/to/audio.mp3}} --language {{english}}`

- Convert an audio file and save it to a specific location:

`whisper {{path/to/audio.mp3}} --output_dir "{{path/to/output}}"`

- Convert an audio file in quiet mode:

`whisper {{path/to/audio.mp3}} --verbose {{False}}`
