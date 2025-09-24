---
title: "Manage Virtual Environments - Control Python Env with VF | Online Free DevTools by Hexmos"
name: vf
path: /freedevtools/tldr/common/vf
canonical: "https://hexmos.com/freedevtools/tldr/common/vf/"
description: "Manage Python virtual environments with VF. Create, activate, deactivate, and remove environments effortlessly. Free online tool, no registration required."
category: common
keywords:
- python virtual environment manager
- virtualenv control
- python environment manager
- vf command
- fish shell virtualenv
- virtual fish tool
- python environment activation
- python environment creation
- virtual environment list
- virtual environment removal
features:
- Create new Python virtual environments
- Activate and deactivate virtual environments
- Connect environments to directories for auto-activation
- List available virtual environments
- Remove Python virtual environments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vf

> VirtualFish is a fish shell tool for managing Python virtual environments.
> More information: <https://virtualfish.readthedocs.io/en/latest/>.

- Create a virtual environment:

`vf new {{virtualenv_name}}`

- Create a virtual environment for a specific Python version:

`vf new --python {{/usr/local/bin/python3.8}} {{virtualenv_name}}`

- Activate and use the specified virtual environment:

`vf activate {{virtualenv_name}}`

- Connect the current virtualenv to the current directory, so that it is activated automatically as soon as you enter it (and deactivated as soon as you leave):

`vf connect`

- Deactivate the current virtual environment:

`vf deactivate`

- List all virtual environments:

`vf ls`

- Remove a virtual environment:

`vf rm {{virtualenv_name}}`

- Display help:

`vf help`
