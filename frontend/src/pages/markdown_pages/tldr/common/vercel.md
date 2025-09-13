---
title: "Vercel Deploy - Manage Vercel Deployments | Free DevTools"
name: vercel
path: /freedevtools/tldr/common/vercel
canonical: "https://hexmos.com/freedevtools/tldr/common/vercel/"
description: "Deploy projects with Vercel - Quickly manage Vercel deployments using the command line. Configure environment variables and default regions for deployment. Free online tool, no registration required."
category: common
keywords:
- Vercel deployment
- Vercel CLI
- Vercel project deployment
- Vercel environment variables
- Vercel regions
- Vercel remove deployment
- Node.js deployment
- Serverless deployment
- Web application deployment
- Static site deployment
features:
- Deploy projects to the Vercel platform.
- Deploy a specific directory to Vercel.
- Configure environment variables for deployments.
- Set default regions for deployments.
- Remove existing Vercel deployments.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vercel

> Deploy and manage your Vercel deployments.
> More information: <https://vercel.com/docs/cli>.

- Deploy the current directory:

`vercel`

- Deploy the current directory to production:

`vercel --prod`

- Deploy a directory:

`vercel {{path/to/project}}`

- Initialize an example project:

`vercel init`

- Deploy with environment variables:

`vercel {{[-e|--env]}} {{ENV}}={{var}}`

- Build with environment variables:

`vercel {{[-b|--build-env]}} {{ENV}}={{var}}`

- Set default regions to enable the deployment on:

`vercel --regions {{region_id}}`

- Remove a deployment:

`vercel remove {{project_name}}`
