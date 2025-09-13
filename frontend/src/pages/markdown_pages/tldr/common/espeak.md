---
title: "ESpeak - Generate Speech from Text | Free DevTools"
name: espeak
path: /freedevtools/tldr/common/espeak
canonical: "https://hexmos.com/freedevtools/tldr/common/espeak/"
description: "Generate speech with ESpeak, a text-to-speech synthesizer. Convert text to audio and speak phrases aloud. Free online tool, no registration required."
category: common
keywords:
- text to speech
- speech synthesizer
- text to audio converter
- espeak linux
- espeak command
- espeak tts
- audio generation
- speech generation
- command line tts
- linux text to speech
features:
- Convert text to speech directly through the default sound device.
- Read text from a file and speak it aloud.
- Save speech output to a WAV audio file.
- Utilize different voices for speech synthesis.
- Generate audio from command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# espeak

> Use text-to-speech to speak through the default sound device.
> More information: <https://espeak.sourceforge.net>.

- Speak a phrase aloud:

`espeak "I like to ride my bike."`

- Speak a file aloud:

`espeak -f {{path/to/file}}`

- Save output to a WAV audio file, rather than speaking it directly:

`espeak -w {{filename.wav}} "It's GNU plus Linux"`

- Use a different voice:

`espeak -v {{voice}}`
