---
title: "Control Mumble - Low Latency Voice Chat | Free DevTools"
name: mumble
path: /freedevtools/tldr/common/mumble
canonical: "https://hexmos.com/freedevtools/tldr/common/mumble/"
description: "Control voice chat with Mumble. Connect to servers, mute audio, and configure settings via the command line. Free online tool, no registration required."
category: common
keywords:
- mumble command line
- mumble voice chat control
- low latency voice chat
- voice server management
- mumble linux
- mumble macos
- mumble windows
- mumble server connect
- mumble audio control
- mumble rpc
features:
- Connect to Mumble servers directly from the command line
- Mute or unmute the microphone via command
- Deaf or undeaf audio output via command
- Execute remote procedure calls (RPC) within Mumble
- Automate voice chat tasks through scripting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mumble

> Low-latency, high quality voice chat software.
> More information: <https://www.mumble.info>.

- Open Mumble:

`mumble`

- Open Mumble and immediately connect to a server:

`mumble mumble://{{username}}@{{example.com}}`

- Open Mumble and immediately connect to a password protected server:

`mumble mumble://{{username}}:{{password}}@{{example.com}}`

- Mute/unmute the microphone in a running Mumble instance:

`mumble rpc {{mute|unmute}}`

- Mute/unmute the microphone and the audio output of Mumble:

`mumble rpc {{deaf|undeaf}}`
