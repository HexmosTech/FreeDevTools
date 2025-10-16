---
title: "Launch Dev Environments - Manage Docker/K8s with Devpod | Online Free DevTools by Hexmos"
name: devpod
path: "/freedevtools/tldr/common/devpod/"
canonical: "https://hexmos.com/freedevtools/tldr/common/devpod/"
description: "Launch reproducible development environments with Devpod. Manage Docker, Kubernetes, and SSH environments for consistent coding. Free online tool, no registration required."
category: common
keywords:
- dev environment manager
- docker development tool
- kubernetes workspace cli
- ssh development environment
- reproducible dev environments
- devpod command line tool
- containerized development
- remote development tool
- cloud native development
- developer workflow automation
features:
- Launch dev environments from Git repos
- Manage Docker, Kubernetes, and SSH environments
- Recreate and reset workspaces easily
- Add custom providers for diverse environments
- Start workspaces from local directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# devpod

> Launch reproducible development environments using Docker, Kubernetes, or SSH.
> More information: <https://devpod.sh/docs/quickstart/devpod-cli/>.

- Add a provider such as Docker or Kubernetes:

`devpod provider add {{provider_name}}`

- List all available providers:

`devpod provider list-available`

- Start a workspace from a GitHub repository with a specific IDE:

`devpod up {{github.com/user/repo}} {{[-i|--ide]}} {{vscode}}`

- Start a workspace from a local directory:

`devpod up {{path/to/project}}`

- Recreate an existing workspace:

`devpod up {{workspace_name}} {{[-r|--recreate]}}`

- Reset a workspace to a clean state:

`devpod up {{workspace_name}} {{[-x|--reset]}}`

- Add a custom provider from a GitHub repository:

`devpod provider add {{org/provider-repo}}`
