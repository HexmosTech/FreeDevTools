---
title: "Generate Git Request Pull - Create Pull Requests | Online Free DevTools by Hexmos"
name: git-request-pull
path: /freedevtools/tldr/git/git-request-pull
canonical: "https://hexmos.com/freedevtools/tldr/git/git-request-pull/"
description: "Generate Git request pull commands with Git Request Pull. Create pull requests for Git repositories and collaborate effectively. Free online tool, no registration required."
category: common
keywords:
- git request pull
- git pull request
- generate pull request
- create pull request
- git collaboration
- version control
- git command
- git diff summary
- git patch request
- git upstream pull
features:
- Generates a formatted request for incorporating changes.
- Summarizes differences between branches for code review.
- Creates a request suitable for sending to upstream maintainers.
- Identifies changes between specified versions or branches.
- Simplifies the process of contributing to Git projects.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git request-pull

> Generate a request asking the upstream project to pull changes into its tree.
> More information: <https://git-scm.com/docs/git-request-pull>.

- Produce a request summarizing the changes between the v1.1 release and a specified branch:

`git request-pull {{v1.1}} {{https://example.com/project}} {{branch_name}}`

- Produce a request summarizing the changes between the v0.1 release on the `foo` branch and the local `bar` branch:

`git request-pull {{v0.1}} {{https://example.com/project}} {{foo:bar}}`
