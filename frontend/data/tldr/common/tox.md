---
title: "Tox - Automate Python Testing Across Versions | Online Free DevTools by Hexmos"
name: tox
path: "/freedevtools/tldr/common/tox/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tox/"
description: "Automate Python testing with Tox across multiple versions, ensuring compatibility and reliability. Free online tool, no registration required."
category: common
keywords:
- python testing automation
- tox environment configuration
- python version management
- cross-platform python testing
- python virtual environment
- tox.ini configuration
- continuous integration python
- pyenv integration
- python test runner
- python test environments
features:
- Automate Python testing across multiple versions
- Configure test environments with tox.ini
- Manage Python virtual environments
- Run tests on specific Python environments
- Recreate virtual environments forcefully
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tox

> Automate Python testing across multiple Python versions.
> Use tox.ini to configure environments and test command.
> More information: <https://github.com/tox-dev/tox>.

- Run tests on all test environments:

`tox`

- Create a `tox.ini` configuration:

`tox-quickstart`

- List the available environments:

`tox {{[-a|--listenvs-all]}}`

- Run tests on a specific environment (e.g. Python 3.6):

`tox -e {{py36}}`

- Force the virtual environment to be recreated:

`tox {{[-r|--recreate]}} -e {{py27}}`
