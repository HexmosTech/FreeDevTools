---
title: "Control Erlang Instances - Build Erlang/OTP with kerl | Online Free DevTools by Hexmos"
name: kerl
path: /freedevtools/tldr/common/kerl
canonical: "https://hexmos.com/freedevtools/tldr/common/kerl/"
description: "Control Erlang/OTP instances with kerl. Build, install, and manage multiple Erlang environments effortlessly. Free online tool, no registration required."
category: common
keywords:
- erlang build tool
- erlang otp manager
- kerl erlang installation
- erlang version control
- otp release manager
- erlang environment manager
- beam virtual machine
- linux erlang build
- macos erlang install
- command line erlang
features:
- Build and install specific Erlang/OTP versions.
- Activate and deactivate Erlang/OTP installations.
- List available Erlang/OTP releases.
- List installed Erlang/OTP builds.
- Manage multiple Erlang environments.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kerl

> Build and install Erlang/OTP instances with ease.
> More information: <https://github.com/kerl/kerl>.

- Build and install an Erlang/OTP version in a directory:

`kerl build-install {{28.0}} {{28.0}} {{path/to/installation_directory}}/{{28.0}}`

- Activate an Erlang/OTP installation:

`. {{path/to/installation}}/activate`

- Deactivate the current Erlang/OTP installation:

`kerl_deactivate`

- List all available Erlang/OTP releases:

`kerl list releases`

- List installed Erlang/OTP builds:

`kerl list installations`
