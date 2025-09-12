---
title: "AWS Glue CLI - Manage ETL Jobs and Workflows | Free DevTools"
name: aws-glue
path: /freedevtools/tldr/common/aws-glue
canonical: "https://hexmos.com/freedevtools/tldr/common/aws-glue/"
description: "Manage ETL jobs and workflows with AWS Glue CLI. Define public endpoints, list jobs, and start workflows with ease. Free online tool, no registration required."
category: common
keywords:
- aws glue cli
- aws glue etl
- aws glue job
- aws glue workflow
- aws glue trigger
- aws glue dev endpoint
- aws glue command line
- aws glue python
- aws cloud cli
- aws data catalog
features:
- List AWS Glue jobs and triggers
- Start AWS Glue job runs by name
- Initiate AWS Glue workflow executions
- Create AWS Glue development endpoints
- Manage AWS Glue resources via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws glue

> CLI for AWS Glue.
> Define the public endpoint for the AWS Glue service.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/glue/>.

- List jobs:

`aws glue list-jobs`

- Start a job:

`aws glue start-job-run --job-name {{job_name}}`

- Start running a workflow:

`aws glue start-workflow-run --name {{workflow_name}}`

- List triggers:

`aws glue list-triggers`

- Start a trigger:

`aws glue start-trigger --name {{trigger_name}}`

- Create a dev endpoint:

`aws glue create-dev-endpoint --endpoint-name {{name}} --role-arn {{role_arn_used_by_endpoint}}`
