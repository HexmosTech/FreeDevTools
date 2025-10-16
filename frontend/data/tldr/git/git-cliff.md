---
title: "Generate Changelog - git-cliff | Online Free DevTools by Hexmos"
name: git-cliff
path: "/freedevtools/tldr/git/git-cliff/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-cliff/"
description: "Generate changelogs with git-cliff. Automate release note creation and customize your changelog output. Free online tool, no registration required."
category: common
keywords:
- git changelog generator
- changelog automation
- release note generator
- git commit history
- markdown changelog
- toml configuration
- git tag analysis
- semantic versioning changelog
- command-line changelog
- customizable changelog
features:
- Generate changelogs from Git commits.
- Customize changelog output with TOML configuration.
- Filter commits based on tags.
- Support semantic versioning.
- Output changelogs in Markdown format.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git cliff

> A highly customizable changelog generator.
> More information: <https://git-cliff.org/docs/usage/args>.

- Generate a changelog from all commits in a Git repository and save it to `CHANGELOG.md`:

`git cliff > {{CHANGELOG.md}}`

- Generate a changelog from commits starting from the latest tag and print it to `stdout`:

`git cliff {{[-l|--latest]}}`

- Generate a changelog from commits that belong to the current tag (use `git checkout` on a tag before this):

`git cliff --current`

- Generate a changelog from commits that do not belong to a tag:

`git cliff {{[-u|--unreleased]}}`

- Write the default config file to `cliff.toml` in the current directory:

`git cliff {{[-i|--init]}}`
