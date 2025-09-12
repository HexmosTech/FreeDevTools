---
title: "Gitlab Control - Manage GitLab Services | Free DevTools"
name: gitlab-ctl
path: /freedevtools/tldr/common/gitlab-ctl
canonical: "https://hexmos.com/freedevtools/tldr/common/gitlab-ctl/"
description: "Control GitLab services effectively with gitlab-ctl. Manage, restart, and monitor GitLab components efficiently. Free online tool, no registration required."
category: common
keywords:
- gitlab control
- gitlab service management
- omnibus gitlab manager
- gitlab restart service
- gitlab logs monitoring
- gitlab reconfigure application
- linux gitlab control
- unix gitlab manager
- gitlab service status
- gitlab command line tool
features:
- Display the status of GitLab services
- Restart individual or all GitLab services
- Tail logs for real-time monitoring
- Reconfigure the GitLab application
- Send kill signals to specific GitLab services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gitlab-ctl

> Manage the GitLab omnibus.
> More information: <https://docs.gitlab.com/omnibus/maintenance/>.

- Display the status of every service:

`sudo gitlab-ctl status`

- Display the status of a specific service:

`sudo gitlab-ctl status {{nginx}}`

- Restart every service:

`sudo gitlab-ctl restart`

- Restart a specific service:

`sudo gitlab-ctl restart {{nginx}}`

- Display the logs of every service and keep reading until `<Ctrl c>` is pressed:

`sudo gitlab-ctl tail`

- Display the logs of a specific service:

`sudo gitlab-ctl tail {{nginx}}`

- Send the SIGKILL signal to specific service:

`sudo gitlab-ctl kill {{nginx}}`

- Reconfigure the application:

`sudo gitlab-ctl reconfigure`
