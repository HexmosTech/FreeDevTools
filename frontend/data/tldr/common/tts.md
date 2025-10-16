---
title: "Synthesize Speech - Generate Audio from Text | Online Free DevTools by Hexmos"
name: tts
path: "/freedevtools/tldr/common/tts/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tts/"
description: "Synthesize speech with TTS. Convert text to speech, creating audio files using various models and configurations. Free online tool, no registration required."
category: common
keywords:
- Text to Speech
- Speech Synthesis
- Audio Generation
- Command Line TTS
- Linux TTS
- macOS TTS
- Coqui TTS
- Speech Output
- Voice Synthesis
- TTS model
features:
- Generate speech from text input
- List available TTS models
- Query model information by index
- Specify custom model and configuration paths
- Output audio to a WAV file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tts

> Synthesize speech.
> More information: <https://github.com/coqui-ai/TTS#command-line-tts>.

- Run text-to-speech with the default models, writing the output to "tts_output.wav":

`tts --text "{{text}}"`

- List provided models:

`tts --list_models`

- Query info for a model by idx:

`tts --model_info_by_idx {{model_type/model_query_idx}}`

- Query info for a model by name:

`tts --model_info_by_name {{model_type/language/dataset/model_name}}`

- Run a text-to-speech model with its default vocoder model:

`tts --text "{{text}}" --model_name {{model_type/language/dataset/model_name}}`

- Run your own text-to-speech model (using the Griffin-Lim vocoder):

`tts --text "{{text}}" --model_path {{path/to/model.pth}} --config_path {{path/to/config.json}} --out_path {{path/to/file.wav}}`
