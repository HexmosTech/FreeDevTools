---
title: "GitLab Control - Manage Repositories and Pipelines | Online Free DevTools by Hexmos"
name: gitlab
path: "/freedevtools/tldr/git/gitlab/"
canonical: "https://hexmos.com/freedevtools/tldr/git/gitlab/"
description: "Control GitLab repositories and CI/CD pipelines with GitLab. Automate project creation, commit inspections, and job management. Free online tool, no registration required."
category: common
keywords:
- gitlab api control
- gitlab repository management
- gitlab ci/cd pipeline
- gitlab project creation
- gitlab commit inspection
- gitlab job management
- gitlab automation
- gitlab ruby wrapper
- gitlab cli tool
- gitlab command line
features:
- Create new GitLab projects from the command line.
- Retrieve information about specific commits.
- Inspect the details of jobs within a CI pipeline.
- Trigger the execution of individual CI jobs.
- Manage GitLab resources through the API.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gitlab

> Ruby wrapper for the GitLab API.
> Some subcommands such as `ctl` have their own usage documentation.
> More information: <https://narkoz.github.io/gitlab/>.

- Create a new project:

`gitlab create_project {{project_name}}`

- Get info about a specific commit:

`gitlab commit {{project_name}} {{commit_hash}}`

- Get info about jobs in a CI pipeline:

`gitlab pipeline_jobs {{project_name}} {{pipeline_id}}`

- Start a specific CI job:

`gitlab job_play {{project_name}} {{job_id}}`
