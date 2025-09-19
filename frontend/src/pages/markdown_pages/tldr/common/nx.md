---
title: "Nx Workspace Manager - Control Builds & Tests | Online Free DevTools by Hexmos"
name: nx
path: /freedevtools/tldr/common/nx
canonical: "https://hexmos.com/freedevtools/tldr/common/nx/"
description: "Control Nx workspace builds and tests with Nx Workspace Manager. Execute targets, manage projects, and optimize workflows using the command line. Free online tool, no registration required."
category: common
keywords:
- nx workspace manager
- nx build automation
- nx project testing
- nx target execution
- nx affected command
- nx monorepo management
- nx task runner
- nx CLI commands
- nx project dependencies
- nx distributed task execution
features:
- Build specified projects in an Nx workspace
- Test specified projects within the workspace
- Execute custom targets on individual projects
- Execute a specific target on multiple Nx projects simultaneously
- Run tasks only on projects that have changed since the last commit
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nx

> Manage `nx` workspaces.
> More information: <https://nx.dev/l/r/getting-started/nx-cli>.

- Build a specific project:

`nx build {{project}}`

- Test a specific project:

`nx test {{project}}`

- Execute a target on a specific project:

`nx run {{project}}:{{target}}`

- Execute a target on multiple projects:

`nx run-many --target {{target}} --projects {{project1}},{{project2}}`

- Execute a target on all projects in the workspace:

`nx run-many --target {{target}} --all`

- Execute a target only on projects that have been changed:

`nx affected --target {{target}}`
