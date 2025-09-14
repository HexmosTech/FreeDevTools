---
title: "CDK - Create CloudFormation Stacks | Free DevTools"
name: cdk
path: /freedevtools/tldr/common/cdk
canonical: "https://hexmos.com/freedevtools/tldr/common/cdk/"
description: "Create and manage AWS infrastructure as code with CDK. Synthesize CloudFormation templates, deploy stacks, and compare differences. Free online tool, no registration required."
category: common
keywords:
- cdk aws
- cdk cloudformation
- aws cdk deploy
- cdk synth
- infrastructure as code cdk
- cdk typescript
- cdk python
- cdk cli
- cdk destroy
- aws cloud development kit
features:
- Synthesize CloudFormation templates from CDK code.
- Deploy and manage AWS infrastructure stacks.
- Compare stack differences against deployed resources.
- Initialize new CDK projects with various languages.
- Destroy existing AWS infrastructure stacks.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cdk

> A CLI for AWS Cloud Development Kit (CDK).
> More information: <https://docs.aws.amazon.com/cdk/latest/guide/cli.html>.

- List the stacks in the app:

`cdk ls`

- Synthesize and print the CloudFormation template for the specified stack(s):

`cdk synth {{stack_name}}`

- Deploy one or more stacks:

`cdk deploy {{stack_name1 stack_name2 ...}}`

- Destroy one or more stacks:

`cdk destroy {{stack_name1 stack_name2 ...}}`

- Compare the specified stack with the deployed stack or a local CloudFormation template:

`cdk diff {{stack_name}}`

- Create a new CDK project in the current directory for a specified language:

`cdk init {{[-l|--language]}} {{language}}`

- Open the CDK API reference in your browser:

`cdk docs`
