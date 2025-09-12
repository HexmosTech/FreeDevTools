---
title: "Create AWS CloudFormation Stacks - Manage Infrastructure as Code | Free DevTools"
name: aws-cloudformation
path: /freedevtools/tldr/common/aws-cloudformation
canonical: "https://hexmos.com/freedevtools/tldr/common/aws-cloudformation/"
description: "Create AWS CloudFormation stacks and manage infrastructure as code with this CLI tool. Automate provisioning and updates of your resources. Free online tool, no registration required."
category: common
keywords:
- aws cloudformation
- cloud infrastructure automation
- infrastructure as code cli
- aws stack creation
- aws cloud deployment
- cloudformation template management
- aws resource provisioning
- cloudformation stack status
- aws infrastructure management
- cloudformation drift detection
features:
- Create and manage AWS CloudFormation stacks
- Provision AWS resources using templates
- Check status of running CloudFormation stacks
- Detect drift in CloudFormation stacks
- Delete CloudFormation stacks when no longer needed
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws cloudformation

> Model, provision, and manage AWS and third-party resources by treating infrastructure as code.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudformation/index.html>.

- Create a stack from a template file:

`aws cloudformation create-stack --stack-name {{stack-name}} --region {{region}} --template-body {{file://path/to/file.yml}} --profile {{profile}}`

- Delete a stack:

`aws cloudformation delete-stack --stack-name {{stack-name}} --profile {{profile}}`

- List all stacks:

`aws cloudformation list-stacks --profile {{profile}}`

- List all running stacks:

`aws cloudformation list-stacks --stack-status-filter CREATE_COMPLETE --profile {{profile}}`

- Check the status of a stack:

`aws cloudformation describe-stacks --stack-name {{stack-id}} --profile {{profile}}`

- Initiate drift detection for a stack:

`aws cloudformation detect-stack-drift --stack-name {{stack-id}} --profile {{profile}}`

- Check the drift status output of a stack using 'StackDriftDetectionId' from the previous command output:

`aws cloudformation describe-stack-resource-drifts --stack-name {{stack-drift-detection-id}} --profile {{profile}}`
