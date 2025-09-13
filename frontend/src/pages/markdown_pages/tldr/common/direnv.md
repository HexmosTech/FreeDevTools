---
title: "Control Environment Variables - With direnv | Free DevTools"
name: direnv
path: /freedevtools/tldr/common/direnv
canonical: "https://hexmos.com/freedevtools/tldr/common/direnv/"
description: "Control environment variables easily with direnv. Manage directory-specific environment settings and automate environment loading/unloading. Free online tool, no registration required."
category: common
keywords:
- environment variables control
- directory environment manager
- direnv environment loader
- linux environment variables
- macos environment variables
- shell environment automation
- .envrc file management
- environment variable configuration
- environment variable isolation
- command line environment tools
features:
- Load environment variables based on current directory
- Unload environment variables when leaving a directory
- Allow or deny loading of .envrc files
- Edit and reload environment configuration files
- Display environment status and debug information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# direnv

> Shell extension to load and unload environment variables depending on the current directory.
> More information: <https://github.com/direnv/direnv>.

- Grant direnv permission to load the `.envrc` present in the current directory:

`direnv allow {{.}}`

- Revoke the authorization to load the `.envrc` present in the current directory:

`direnv deny {{.}}`

- Edit the `.envrc` file in the default text editor and reload the environment on exit:

`direnv edit {{.}}`

- Trigger a reload of the environment:

`direnv reload`

- Print some debug status information:

`direnv status`
