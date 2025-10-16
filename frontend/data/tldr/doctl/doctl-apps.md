---
title: "Manage doctl Apps - Control DigitalOcean Apps | Online Free DevTools by Hexmos"
name: doctl-apps
path: "/freedevtools/tldr/doctl/doctl-apps/"
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-apps/"
description: "Manage DigitalOcean apps with doctl. Control app deployments and logs instantly. Free online tool, no registration required."
category: common
keywords:
- DigitalOcean apps manager
- doctl app deployment
- doctl app logs
- DigitalOcean CLI apps
- doctl create app
- doctl list apps
- doctl update app
- doctl delete app
- DigitalOcean infrastructure management
- doctl app configuration
features:
- Create new DigitalOcean applications.
- Manage deployments for existing apps.
- Delete DigitalOcean apps interactively.
- Retrieve detailed information about apps.
- List all available DigitalOcean apps.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doctl apps

> Manage DigitalOcean apps.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/apps>.

- Create an app:

`doctl {{[a|apps]}} {{[c|create]}}`

- Create a deployment for a specific app:

`doctl {{[a|apps]}} {{[cd|create-deployment]}} {{app_id}}`

- Delete an app interactively:

`doctl {{[a|apps]}} {{[d|delete]}} {{app_id}}`

- Get an app:

`doctl {{[a|apps]}} {{[g|get]}}`

- List all apps:

`doctl {{[a|apps]}} {{[ls|list]}}`

- List all deployments from a specific app:

`doctl {{[a|apps]}} {{[lsd|list-deployments]}} {{app_id}}`

- Get logs from a specific app:

`doctl {{[a|apps]}} {{[l|logs]}} {{app_id}}`

- Update a specific app with a given app spec:

`doctl {{[a|apps]}} {{[u|update]}} {{app_id}} --spec {{path/to/spec.yml}}`
