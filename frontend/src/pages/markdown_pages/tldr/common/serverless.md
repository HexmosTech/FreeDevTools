---
title: "Create Serverless Projects - Deploy Cloud Architectures | Online Free DevTools by Hexmos"
name: serverless
path: /freedevtools/tldr/common/serverless
canonical: "https://hexmos.com/freedevtools/tldr/common/serverless/"
description: "Create Serverless projects with Serverless. Deploy serverless architectures to AWS, Azure, Google Cloud and more. Free online tool, no registration required."
category: common
keywords:
- serverless architecture
- serverless deployment
- serverless framework
- aws serverless
- azure serverless
- google cloud functions
- openwhisk serverless
- sls command
- cloud deployment
- serverless CLI
features:
- Create new serverless projects from scratch
- Deploy serverless applications to various cloud providers
- Invoke deployed serverless functions directly
- Tail logs for serverless projects in real-time
- Generate projects from pre-built templates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# serverless

> Toolkit for deploying and operating serverless architectures on AWS, Google Cloud, Azure and IBM OpenWhisk.
> Commands can be run either using the `serverless` command or its alias, `sls`.
> More information: <https://www.serverless.com/framework/docs/providers/aws/cli-reference>.

- Create a serverless project:

`serverless create`

- Create a serverless project from a template:

`serverless create --template {{template_name}}`

- Deploy to a cloud provider:

`serverless deploy`

- Display information about a serverless project:

`serverless info`

- Invoke a deployed function:

`serverless invoke -f {{function_name}}`

- Follow the logs for a project:

`serverless logs {{[-t|--tail]}}`
