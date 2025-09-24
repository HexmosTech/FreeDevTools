---
title: "AWS Batch - Run Compute Workloads | Online Free DevTools by Hexmos"
name: aws-batch
path: /freedevtools/tldr/aws/aws-batch
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-batch/"
description: "Run compute workloads with AWS Batch. Easily manage batch jobs, create compute environments and job queues for efficient processing. Free online tool, no registration required."
category: common
keywords:
- aws batch commands
- aws batch job management
- aws batch compute environment
- aws batch job queue
- batch processing aws
- cloud computing aws
- aws batch cli
- aws cloud batch
- distributed computing aws
- amazon web services batch
features:
- List running AWS Batch jobs
- Create AWS Batch compute environments
- Create AWS Batch job queues
- Submit jobs to AWS Batch
- Cancel AWS Batch jobs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws batch

> Run batch computing workloads through the AWS Batch service.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/batch/index.html>.

- List running batch jobs:

`aws batch list-jobs --job-queue {{queue_name}}`

- Create compute environment:

`aws batch create-compute-environment --compute-environment-name {{compute_environment_name}} --type {{type}}`

- Create batch job queue:

`aws batch create-job-queue --job-queue-name {{queue_name}} --priority {{priority}} --compute-environment-order {{compute_environment}}`

- Submit job:

`aws batch submit-job --job-name {{job_name}} --job-queue {{job_queue}} --job-definition {{job_definition}}`

- Describe the list of batch jobs:

`aws batch describe-jobs --jobs {{jobs}}`

- Cancel job:

`aws batch cancel-job --job-id {{job_id}} --reason {{reason}}`
