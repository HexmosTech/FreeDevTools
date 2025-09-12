---
title: "Generate Gemini Server - Manage Gemini Network | Free DevTools"
name: agate
path: /freedevtools/tldr/common/agate
canonical: "https://hexmos.com/freedevtools/tldr/common/agate/"
description: "Generate Gemini server certificates with Agate, a simple server for the Gemini network protocol. Easily manage and deploy your Gemini capsule. Free online tool, no registration required."
category: common
keywords:
- Gemini server generator
- Gemini capsule manager
- Gemini network deployment
- agate Gemini server
- Gemini certificate creation
- Gemini protocol server
- Command-line Gemini server
- Gemini hosting solution
- Gemini content server
- Gemini server configuration
features:
- Generate private keys and certificates for Gemini servers.
- Serve Gemini content from a specified directory.
- Configure the server address and hostname.
- Display help information for command usage.
- Easily manage Gemini network deployment via the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# agate

> A simple server for the Gemini network protocol.
> More information: <https://github.com/mbrubeck/agate>.

- Run and generate a private key and certificate:

`agate --content {{path/to/content}}/ --addr {{[::]:1965}} --addr {{0.0.0.0:1965}} --hostname {{example.com}} --lang {{en-US}}`

- Run server:

`agate {{path/to/file}}`

- Display help:

`agate {{[-h|--help]}}`
