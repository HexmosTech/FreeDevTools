---
title: "Create Dokku Apps - PaaS Deployment | Free DevTools"
name: dokku
path: /freedevtools/tldr/common/dokku
canonical: "https://hexmos.com/freedevtools/tldr/common/dokku/"
description: "Create and manage apps with Dokku, the Docker-powered PaaS. Streamline application deployment and scaling on your server with this easy-to-use tool. Free online tool, no registration required."
category: common
keywords:
- dokku deployment
- paas deployment
- docker paas
- application deployment
- git push deployment
- dokku cli
- docker deployment manager
- server deployment
- heroku alternative
- linux deployment
features:
- Deploy applications via Git push
- Manage application lifecycle through CLI
- Install plugins to extend functionality
- Link databases to applications
- Create and destroy applications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dokku

> Docker powered mini-Heroku (PaaS).
> Easily deploy multiple apps to your server in different languages using a single `git-push` command.
> More information: <https://dokku.com/docs/deployment/application-deployment/>.

- List running apps:

`dokku apps`

- Create an app:

`dokku apps:create {{app_name}}`

- Remove an app:

`dokku apps:destroy {{app_name}}`

- Install plugin:

`dokku plugin:install {{full_repo_url}}`

- Link database to an app:

`dokku {{db}}:link {{db_name}} {{app_name}}`
