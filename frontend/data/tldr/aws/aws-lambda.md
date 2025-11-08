---
title: "AWS Lambda - Run Serverless Functions | Online Free DevTools by Hexmos"
name: aws-lambda
path: "/freedevtools/tldr/aws/aws-lambda/"
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-lambda/"
description: "Run serverless functions easily with AWS Lambda. Deploy and manage compute services without servers. Free online tool, no registration required."
category: common
keywords:
- aws lambda function
- serverless computing
- aws cloud functions
- function as a service
- aws lambda invoke
- aws lambda configuration
- lambda alias management
- lambda concurrency control
- aws lambda policy
- aws command line interface
features:
- Invoke AWS Lambda functions with custom payloads.
- List available AWS Lambda functions in your account.
- Get configuration details for a specific Lambda function.
- Manage aliases for different versions of your Lambda functions.
- Control concurrency settings to prevent function overload.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws lambda

> Use AWS Lambda, a compute service for running code without provisioning or managing servers.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/lambda/>.

- Run a function:

`aws lambda invoke --function-name {{name}} {{path/to/response.json}}`

- Run a function with an input payload in JSON format:

`aws lambda invoke --function-name {{name}} --payload {{json}} {{path/to/response.json}}`

- List functions:

`aws lambda list-functions`

- Display the configuration of a function:

`aws lambda get-function-configuration --function-name {{name}}`

- List function aliases:

`aws lambda list-aliases --function-name {{name}}`

- Display the reserved concurrency configuration for a function:

`aws lambda get-function-concurrency --function-name {{name}}`

- List which AWS services can invoke the function:

`aws lambda get-policy --function-name {{name}}`
