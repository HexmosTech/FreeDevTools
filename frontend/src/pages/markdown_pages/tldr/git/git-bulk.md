---
title: "Git Bulk - Manage Multiple Git Repositories | Online Free DevTools by Hexmos"
name: git-bulk
path: /freedevtools/tldr/git/git-bulk
canonical: "https://hexmos.com/freedevtools/tldr/git/git-bulk/"
description: "Manage multiple Git repositories efficiently with Git Bulk. Automate Git commands across several repositories and streamline workflow. Free online tool, no registration required."
category: common
keywords:
- git bulk operations
- git multi-repo management
- git batch processing
- git command automation
- git repository manager
- git workspace management
- linux git bulk
- macos git bulk
- command line git
- git repository automation
features:
- Execute commands across multiple Git repositories simultaneously
- Register and manage workspaces for bulk Git operations
- Clone repositories and register them as workspaces
- List all registered workspaces
- Remove specific or all registered workspaces
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git bulk

> Execute operations on multiple Git repositories.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-bulk>.

- Register the current directory as a workspace:

`git bulk --addcurrent {{workspace_name}}`

- Register a workspace for bulk operations:

`git bulk --addworkspace {{workspace_name}} /{{path/to/repository}}`

- Clone a repository inside a specific directory, then register the repository as a workspace:

`git bulk --addworkspace {{workspace_name}} /{{path/to/parent_directory}} --from {{remote_repository_location}}`

- Clone repositories from a newline-separated list of remote locations, then register them as workspaces:

`git bulk --addworkspace {{workspace_name}} /{{path/to/root/directory}} --from /{{path/to/file}}`

- List all registered workspaces:

`git bulk --listall`

- Run a Git command on the repositories of the current workspace:

`git bulk {{command}} {{command_arguments}}`

- Remove a specific workspace:

`git bulk --removeworkspace {{workspace_name}}`

- Remove all workspaces:

`git bulk --purge`
