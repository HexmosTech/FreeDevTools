---
title: "Control AWS - Manage Amazon Web Services with CLI | Free DevTools"
name: aws
path: /freedevtools/tldr/common/aws
canonical: "https://hexmos.com/freedevtools/tldr/common/aws/"
description: "Control AWS resources and infrastructure with the official command-line tool. Manage your cloud services, deploy applications, and troubleshoot issues effortlessly. Free online tool, no registration required."
category: common
keywords:
- aws command line
- aws cli
- amazon web services cli
- aws s3
- aws dynamodb
- aws iam
- cloud cli
- aws configure
- infrastructure as code
- aws sts
features:
- Configure AWS credentials and settings using the CLI wizard
- Manage Amazon Web Services resources from the command line
- Generate CLI skeletons for infrastructure as code deployments
- Troubleshoot permissions issues with STS get-caller-identity
- Get interactive help and guidance for AWS commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws

> The official CLI tool for Amazon Web Services.
> Some subcommands such as `s3` have their own usage documentation.
> More information: <https://aws.amazon.com/cli>.

- Configure the AWS Command-line:

`aws configure wizard`

- Configure the AWS Command-line using SSO:

`aws configure sso`

- Get the caller identity (used to troubleshoot permissions):

`aws sts get-caller-identity`

- List AWS resources in a region and output in YAML:

`aws dynamodb list-tables --region {{us-east-1}} --output yaml`

- Use auto prompt to help with a command:

`aws iam create-user --cli-auto-prompt`

- Get an interactive wizard for an AWS resource:

`aws dynamodb wizard {{new_table}}`

- Generate a JSON CLI Skeleton (useful for infrastructure as code):

`aws dynamodb update-table --generate-cli-skeleton`

- Display help for a specific command:

`aws {{command}} help`
