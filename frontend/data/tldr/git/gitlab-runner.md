---
title: "Manage GitLab Runners - Control CI/CD Pipelines | Online Free DevTools by Hexmos"
name: gitlab-runner
path: "/freedevtools/tldr/git/gitlab-runner/"
canonical: "https://hexmos.com/freedevtools/tldr/git/gitlab-runner/"
description: "Manage GitLab runners efficiently with gitlab-runner. Automate CI/CD pipelines and control runner status with ease. Free online tool, no registration required."
category: common
keywords:
- gitlab runner management
- gitlab ci/cd runner
- cicd pipeline automation
- runner configuration
- gitlab runner registration
- gitlab runner unregistration
- gitlab runner status
- gitlab runner verify
- gitlab runner docker executor
- gitlab runner linux
features:
- Register GitLab runners for CI/CD pipelines
- Unregister existing GitLab runners
- Display the status of the runner service
- Restart the GitLab runner service
- Verify runner connectivity to GitLab instances
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gitlab-runner

> Manage GitLab runners.
> More information: <https://docs.gitlab.com/runner/>.

- Register a runner:

`sudo gitlab-runner register --url {{https://gitlab.example.com}} --registration-token {{token}} --name {{name}}`

- Register a runner with a Docker executor:

`sudo gitlab-runner register --url {{https://gitlab.example.com}} --registration-token {{token}} --name {{name}} --executor {{docker}}`

- Unregister a runner:

`sudo gitlab-runner unregister --name {{name}}`

- Display the status of the runner service:

`sudo gitlab-runner status`

- Restart the runner service:

`sudo gitlab-runner restart`

- Check if the registered runners can connect to GitLab:

`sudo gitlab-runner verify`
