---
title: "GitLab MR - Manage Merge Requests | Free DevTools"
name: glab-mr
path: /freedevtools/tldr/common/glab-mr
canonical: "https://hexmos.com/freedevtools/tldr/common/glab-mr/"
description: "Manage GitLab merge requests efficiently with Glab MR. Create, checkout, and approve merge requests directly from your terminal. Free online tool, no registration required."
category: common
keywords:
- gitlab merge request
- glab merge request
- git merge request command line
- gitlab mr cli
- glab mr create
- gitlab workflow automation
- code review automation
- gitlab ci cd
- gitlab merge tool
- terminal git workflow
features:
- Create GitLab merge requests from the command line
- Checkout specific merge requests locally
- Approve merge requests directly
- Merge merge requests interactively
- Edit target branch of a merge request
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# glab mr

> Manage GitLab merge requests.
> Some subcommands such as `create` have their own usage documentation.
> More information: <https://gitlab.com/gitlab-org/cli/-/blob/main/docs/source/mr/index.md>.

- Create a merge request:

`glab mr create`

- Check out a specific merge request locally:

`glab mr checkout {{mr_number}}`

- View the changes made in the merge request:

`glab mr diff`

- Approve the merge request for the current branch:

`glab mr approve`

- Merge the merge request associated with the current branch interactively:

`glab mr merge`

- Edit a merge request interactively:

`glab mr update`

- Edit the target branch of a merge request:

`glab mr update --target-branch {{branch_name}}`
