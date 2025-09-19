---
title: "uv - Manage uv Executable | Online Free DevTools by Hexmos"
name: uv-self
path: /freedevtools/tldr/uv/uv-self
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-self/"
description: "Manage uv executable with uv-self. Update, check version, and control the uv package installer. Free online tool, no registration required."
category: common
keywords:
- uv package manager
- uv executable update
- uv version management
- uv self update
- uv command line tool
- python package installation
- uv python installer
- uv self version
- cross-platform installer
- astral uv
features:
- Update uv to the latest version
- Check for available uv updates
- Display the current uv version
- Display version information in JSON format
- Update to a specific uv version
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv self

> Manage the `uv` executable itself.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-self>.

- Update `uv` to the latest version:

`uv self update`

- Update `uv` to a specific version:

`uv self update {{0.4.0}}`

- Check for available `uv` updates without installing:

`uv self update --dry-run`

- Update `uv` with verbose output:

`uv self update {{[-v|--verbose]}}`

- Display the current `uv` version:

`uv self version`

- Display only the version number:

`uv self version --short`

- Display version information in JSON format:

`uv self version --output-format json`
