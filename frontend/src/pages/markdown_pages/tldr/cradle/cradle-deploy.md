---
title: "Cradle Deploy - Manage Cradle Deployments | Online Free DevTools by Hexmos"
name: cradle-deploy
path: /freedevtools/tldr/cradle/cradle-deploy
canonical: "https://hexmos.com/freedevtools/tldr/cradle/cradle-deploy/"
description: "Manage Cradle deployments easily with Cradle Deploy. Automate deployments, deploy static assets, and streamline your development workflow. Free online tool, no registration required."
category: common
keywords:
- cradle deployment
- php deployment tool
- static asset deploy
- cradle deploy s3
- deploy to production
- cradle php
- application deployment
- web application deploy
- cradle deployment manager
- command line deploy
features:
- Deploy Cradle applications to a server.
- Deploy static assets to Amazon S3.
- Include Yarn "components" directory during deployment.
- Include the "upload" directory during deployment.
- Manage complex deployment configurations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cradle deploy

> Manage Cradle deployments.
> More information: <https://cradlephp.github.io/docs/3.B.-Reference-Command-Line-Tools.html#deploy>.

- Deploy Cradle to a server:

`cradle deploy production`

- Deploy static assets to Amazon S3:

`cradle deploy s3`

- Deploy static assets including the Yarn "components" directory:

`cradle deploy s3 --include-yarn`

- Deploy static assets including the "upload" directory:

`cradle deploy s3 --include-upload`
