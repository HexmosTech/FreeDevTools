---
title: "GLab Auth - Authenticate GitLab Hosts | Online Free DevTools by Hexmos"
name: glab-auth
path: /freedevtools/tldr/glab/glab-auth
canonical: "https://hexmos.com/freedevtools/tldr/glab/glab-auth/"
description: "Authenticate with GitLab hosts instantly with GLab Auth. Manage authentication tokens, check status and connect to specific instances with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- glab auth
- gitlab authentication
- glab login
- gitlab token authentication
- gitlab cli auth
- command line authentication
- glab hostname
- gitlab host login
- glab auth status
- glab auth token
features:
- Authenticate with a GitLab host using interactive prompts
- Authenticate using a GitLab personal access token
- Check the current GitLab authentication status
- Authenticate to a specific GitLab instance using its hostname
- Manage multiple GitLab authentication configurations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# glab auth

> Authenticate with a GitLab host.
> More information: <https://gitlab.com/gitlab-org/cli/-/blob/main/docs/source/auth/index.md>.

- Log in with interactive prompt:

`glab auth login`

- Log in with a token:

`glab auth login {{[-t|--token]}} {{token}}`

- Check authentication status:

`glab auth status`

- Log in to a specific GitLab instance:

`glab auth login {{[-h|--hostname]}} {{gitlab.example.com}}`
