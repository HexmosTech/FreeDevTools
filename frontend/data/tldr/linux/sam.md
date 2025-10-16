---
title: "SAM - Deploy Serverless Applications | Online Free DevTools by Hexmos"
name: sam
path: "/freedevtools/tldr/linux/sam/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/sam/"
description: "Deploy serverless applications with SAM CLI. Package, build, and deploy AWS Lambda functions and serverless applications efficiently. Free online tool, no registration required."
category: linux
keywords:
  - SAM deploy
  - serverless application model
  - AWS SAM CLI
  - lambda deploy
  - SAM build
  - SAM package
  - serverless framework
  - cloudformation deploy
  - AWS serverless
  - serverless application deployment
features:
  - Initialize serverless applications with specified runtimes
  - Package SAM applications for deployment
  - Build Lambda function code efficiently
  - Run serverless applications locally for testing
  - Deploy AWS SAM applications to the cloud
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sam

> AWS Serverless Application Model (SAM) CLI.
> More information: <https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/using-sam-cli-corecommands.html>.

- Initialize a serverless application:

`sam init`

- Initialize a serverless application with a specific runtime:

`sam init {{[-r|--runtime]}} {{python3.7}}`

- Package a SAM application:

`sam package`

- Build your Lambda function code:

`sam build`

- Run your serverless application locally:

`sam local start-api`

- Deploy an AWS SAM application:

`sam deploy`
