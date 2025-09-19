---
title: "Doppler Secrets Manager - Manage Environment Variables | Online Free DevTools by Hexmos"
name: doppler
path: /freedevtools/tldr/doppler/doppler
canonical: "https://hexmos.com/freedevtools/tldr/doppler/doppler/"
description: "Manage environment variables with Doppler Secrets Manager, securely injecting secrets into your application environment. Streamline configuration management easily. Free online tool, no registration required."
category: common
keywords:
- doppler secrets manager
- environment variable management
- secrets injection
- doppler cli
- configuration management
- ci/cd secrets
- devops secrets
- application secrets
- secure environment variables
- doppler kubernetes
features:
- Manage environment variables across multiple environments
- Securely inject secrets into command execution
- View and manage project configurations
- Directly access the Doppler dashboard
- Automate secrets management within CI/CD pipelines
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doppler

> Manage environment variables across different environments using Doppler.
> Some subcommands such as `run` and `secrets` have their own usage documentation.
> More information: <https://docs.doppler.com/docs/cli>.

- Setup Doppler CLI in the current directory:

`doppler setup`

- Setup Doppler project and configuration in current directory:

`doppler setup`

- Run a command with secrets injected into the environment:

`doppler run --command {{command}}`

- View your project list:

`doppler projects`

- View your secrets for current project:

`doppler secrets`

- Open Doppler dashboard in browser:

`doppler open`
