---
title: "Shards - Manage Crystal Dependencies | Online Free DevTools by Hexmos"
name: shards
path: /freedevtools/tldr/common/shards
canonical: "https://hexmos.com/freedevtools/tldr/common/shards/"
description: "Manage Crystal dependencies effortlessly with Shards. Install, update, and list dependencies in your Crystal projects with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- Crystal dependency management
- Shards package manager
- Crystal shards install
- Crystal shards update
- Crystal dependency list
- Crystal shards version
- Shards init command
- Crystal package dependencies
- Shards command line
- Crystal language dependencies
features:
- Initialize a new shard.yml file for your Crystal project.
- Install all dependencies defined in your shard.yml file.
- Update existing dependencies to their latest versions.
- List all currently installed dependencies in your project.
- Display the version of a specific dependency.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# shards

> Dependency management tool for the Crystal language.
> More information: <https://crystal-lang.org/reference/the_shards_command>.

- Create a skeleton `shard.yml` file:

`shards init`

- Install dependencies from a `shard.yml` file:

`shards install`

- Update all dependencies:

`shards update`

- List all installed dependencies:

`shards list`

- Display version of dependency:

`shards version {{path/to/dependency_directory}}`
