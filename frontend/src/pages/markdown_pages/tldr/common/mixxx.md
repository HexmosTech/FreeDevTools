---
title: "Control DJ Mixing - Free DJ Software | Online Free DevTools by Hexmos"
name: mixxx
path: /freedevtools/tldr/common/mixxx
canonical: "https://hexmos.com/freedevtools/tldr/common/mixxx/"
description: "Control DJ mixing with Mixxx, the free and open-source DJ software. Fine-tune audio, use controller mappings, and debug with ease. Free online tool, no registration required."
category: common
keywords:
- DJ software control
- Audio mixing software
- Cross-platform DJ tool
- Mixxx command line
- DJ controller mapping
- Audio debugging tool
- DJ music creation
- Open source DJ platform
- Music mixing software
- Mixxx developer tools
features:
- Start Mixxx in fullscreen mode
- Enable safe developer mode for debugging
- Debug malfunctions using trace logging
- Load Mixxx with custom settings files
- Debug custom controller mappings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mixxx

> Free and open source cross-platform DJ software.
> See also: `lmms`.
> More information: <https://mixxx.org/manual/latest/chapters/appendix.html#command-line-options>.

- Start the Mixxx GUI in fullscreen:

`mixxx --fullScreen`

- Start in safe developer mode to debug a crash:

`mixxx --developer --safeMode`

- Debug a malfunction:

`mixxx --debugAssertBreak --developer --loglevel trace`

- Start Mixxx using the specified settings file:

`mixxx --resourcePath {{mixxx/res/controllers}} --settingsPath {{path/to/settings-file}}`

- Debug a custom controller mapping:

`mixxx --controllerDebug --resourcePath {{path/to/mapping-directory}}`

- Display help:

`mixxx --help`
