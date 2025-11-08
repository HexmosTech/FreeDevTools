---
title: "Doppler Run - Inject Secrets | Online Free DevTools by Hexmos"
name: doppler-run
path: "/freedevtools/tldr/doppler/doppler-run/"
canonical: "https://hexmos.com/freedevtools/tldr/doppler/doppler-run/"
description: "Inject secrets instantly with Doppler Run. Securely run commands with secrets populated in the environment. Free online tool, no registration required."
category: common
keywords:
- doppler run
- secrets injection
- environment variables
- command line secrets
- doppler cli
- configuration management
- secrets management
- secure execution
- application secrets
- doppler configuration
features:
- Run commands with secrets injected into the environment
- Automatically restart processes when secrets change
- Specify project and configuration for command execution
- Execute multiple commands sequentially
- Run scripts with Doppler secrets
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doppler run

> Run a command with Doppler secrets injected into the environment.
> More information: <https://docs.doppler.com/docs/cli#run-a-command-with-secrets-populated-in-environment>.

- Run a command:

`doppler run --command {{command}}`

- Run multiple commands:

`doppler run --command {{command1 && command2}}`

- Run a script:

`doppler run {{path/to/command.sh}}`

- Run command with specified project and config:

`doppler run -p {{project_name}} -c {{config_name}} -- {{command}}`

- Automatically restart process when secrets change:

`doppler run --watch {{command}}`
