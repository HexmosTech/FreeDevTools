---
title: "Mux Streams - Intercept and Multiplex Data | Online Free DevTools by Hexmos"
name: mux
path: /freedevtools/tldr/linux/mux
canonical: "https://hexmos.com/freedevtools/tldr/linux/mux/"
description: "Multiplex data streams with Mux. Intercept and route input events across multiple outputs. Streamline data flow management with this free online tool, no registration required."
category: linux
keywords:
- linux mux streams
- mux input multiplexer
- mux output router
- linux command mux
- data stream interception
- event multiplexing linux
- stream routing tool
- linux data redirection
- muxer tool linux
- stream multiplexing tool
features:
- Create named muxers for stream management
- Set internal queue size for muxer instances
- Read input from a specified muxer
- Write output to multiple named muxers simultaneously
- Intercept and multiplex input event streams
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mux

> Intercept and multiplex streams of input events.
> More information: <https://gitlab.com/interception/linux/tools/-/tree/master#mux>.

- Create a new muxer with a specified name:

`mux -c {{muxer_name1 muxer_name2 ...}}`

- Set the muxer's internal queue size (default is 100):

`mux -s {{size}}`

- Read input from a named muxer (can be repeated in "switch mode"):

`mux -i {{input_muxer_name}}`

- Write output to a named muxer (can be repeated):

`mux -o {{output_muxer_name}}`
