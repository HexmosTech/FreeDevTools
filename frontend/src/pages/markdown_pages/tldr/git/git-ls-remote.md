---
title: "Git List Remote - Show Remote Git References | Free DevTools"
name: git-ls-remote
path: /freedevtools/tldr/common/git-ls-remote
canonical: "https://hexmos.com/freedevtools/tldr/common/git-ls-remote/"
description: "Show remote Git references with Git List Remote. Inspect branches and tags within a remote repository using Git commands. Free online tool, no registration required."
category: common
keywords:
- git list remote references
- remote repository inspector
- git remote branch list
- git remote tag list
- git remote repository viewer
- git remote reference browser
- git ls-remote command
- git remote repository inspection
- remote git reference listing
- git repository branch viewer
features:
- List all references in a remote Git repository
- Show only heads references in the remote repository
- Show only tags references in the remote repository
- Filter references by a specified pattern
- Inspect remote repositories by name or URL
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git ls-remote

> Git command for listing references in a remote repository based on name or URL.
> If no name or URL are given, then the configured upstream branch will be used, or remote origin if the former is not configured.
> More information: <https://git-scm.com/docs/git-ls-remote>.

- Show all references in the default remote repository:

`git ls-remote`

- Show only heads references in the default remote repository:

`git ls-remote --heads`

- Show only tags references in the default remote repository:

`git ls-remote {{[-t|--tags]}}`

- Show all references from a remote repository based on name or URL:

`git ls-remote {{repository_url}}`

- Show references from a remote repository filtered by a pattern:

`git ls-remote {{repository_name}} "{{pattern}}"`
