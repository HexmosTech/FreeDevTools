---
title: "Control Serverless Functions - DigitalOcean | Free DevTools"
name: doctl-serverless
path: /freedevtools/tldr/doctl/doctl-serverless
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-serverless/"
description: "Control Serverless Functions instantly with doctl-serverless command. Deploy projects, get metadata, and check function status. Free online tool, no registration required."
category: common
keywords:
- serverless functions control
- digitalocean serverless deploy
- doctl serverless metadata
- digitalocean functions management
- serverless project deployment
- doctl connect functions namespace
- digitalocean serverless status
- serverless function monitoring
- digitalocean functions command-line
- doctl serverless configuration
features:
- Connect to a functions namespace
- Deploy serverless functions project
- Obtain metadata for a functions project
- Display serverless support status
- Manage DigitalOcean serverless functions from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doctl serverless

> Manage serverless functions.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/serverless/>.

- Connect local serverless support to a functions namespace:

`doctl {{[sls|serverless]}} connect`

- Deploy a functions project to your functions namespace:

`doctl {{[sls|serverless]}} deploy`

- Obtain metadata of a functions project:

`doctl {{[sls|serverless]}} get-metadata`

- Provide information about serverless support:

`doctl {{[sls|serverless]}} status`
