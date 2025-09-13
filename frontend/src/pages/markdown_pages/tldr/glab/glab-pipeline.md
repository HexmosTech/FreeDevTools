---
title: "Manage GitLab Pipelines - Run and View CI/CD | Free DevTools"
name: glab-pipeline
path: /freedevtools/tldr/glab/glab-pipeline
canonical: "https://hexmos.com/freedevtools/tldr/glab/glab-pipeline/"
description: "Manage GitLab pipelines efficiently with glab pipeline. Run CI/CD pipelines, view pipeline status, and list all pipelines. Free online tool, no registration required."
category: common
keywords:
- gitlab pipeline management
- gitlab ci/cd control
- glab pipeline status
- glab pipeline run
- gitlab pipeline list
- gitlab ci pipeline branch
- command line gitlab
- gitlab automation tool
- glab cli tool
- devops pipeline management
features:
- View the status of running GitLab pipelines
- Trigger manual GitLab pipelines on specific branches
- List all existing GitLab CI/CD pipelines
- Run pipelines from the command line using glab
- Manage CI/CD workflows directly from the terminal
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# glab pipeline

> List, view, and run GitLab CI/CD pipelines.
> More information: <https://gitlab.com/gitlab-org/cli/-/blob/main/docs/source/index.md>.

- View a running pipeline on the current branch:

`glab pipeline status`

- View a running pipeline on a specific branch:

`glab pipeline status --branch {{branch_name}}`

- Get the list of pipelines:

`glab pipeline list`

- Run a manual pipeline on the current branch:

`glab pipeline run`

- Run a manual pipeline on a specific branch:

`glab pipeline run --branch {{branch_name}}`
