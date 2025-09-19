---
title: "Choco Apikey - Manage Chocolatey API Keys | Online Free DevTools by Hexmos"
name: choco-apikey
path: /freedevtools/tldr/windows/choco-apikey
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-apikey/"
description: "Manage Chocolatey API keys with Choco Apikey. Secure your Chocolatey packages and automate deployments using command-line. Free online tool, no registration required."
category: windows
keywords:
- chocolatey apikey management
- chocolatey source control
- windows package manager
- choco api key
- chocolatey authentication
- package deployment automation
- command-line apikey tool
- chocolatey configuration
- choco secure packages
- windows choco apikey
features:
- Display a list of Chocolatey sources and their API keys
- Display the API key for a specific Chocolatey source
- Set an API key for a specific Chocolatey source
- Remove an API key from a specific Chocolatey source
- Automate Chocolatey package deployments securely
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# choco apikey

> Manage API keys for Chocolatey sources.
> More information: <https://chocolatey.org/docs/commands-apikey>.

- Display a list of sources and their API keys:

`choco apikey`

- Display a specific source and its API key:

`choco apikey {{[-s|--source]}} "{{source_url}}"`

- Set an API key for a source:

`choco apikey {{[-s|--source]}} "{{source_url}}" {{[-k|--api-key]}} "{{api_key}}"`

- Remove an API key for a source:

`choco apikey {{[-s|--source]}} "{{source_url}}" --remove`
