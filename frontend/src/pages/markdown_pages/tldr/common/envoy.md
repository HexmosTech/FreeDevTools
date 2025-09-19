---
title: "Envoy - Control Laravel Server Tasks | Online Free DevTools by Hexmos"
name: envoy
path: "/freedevtools/tldr/common/envoy"
canonical: "https://hexmos.com/freedevtools/tldr/common/envoy/"
description: "Control Laravel server tasks with Envoy. Automate deployments, run remote commands, and manage server configurations with this PHP-based task runner. Free online tool, no registration required."
category: common
keywords:
- envoy task runner
- laravel deployment tool
- php task automation
- remote server automation
- envoy configuration manager
- laravel envoy
- server deployment script
- bash script generator
- linux remote task
- macos remote command
features:
- Initialize Envoy configuration files easily
- Execute predefined tasks on remote servers
- Run tasks for specific projects by defining the directory
- Force tasks to continue execution even after failures
- Generate Bash scripts from tasks for debugging
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# envoy

> A PHP-based task manager for Laravel remote servers.
> More information: <https://laravel.com/docs/envoy>.

- Initialize a configuration file:

`envoy init {{host_name}}`

- Run a task:

`envoy run {{task_name}}`

- Run a task from a specific project:

`envoy run --path {{path/to/directory}} {{task_name}}`

- Run a task and continue on failure:

`envoy run --continue {{task_name}}`

- Dump a task as a Bash script for inspection:

`envoy run --pretend {{task_name}}`

- Connect to the specified server via SSH:

`envoy ssh {{server_name}}`
