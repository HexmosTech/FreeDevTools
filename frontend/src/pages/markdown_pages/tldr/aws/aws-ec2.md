---
title: "AWS EC2 - Manage Instances & Volumes | Online Free DevTools by Hexmos"
name: aws-ec2
path: /freedevtools/tldr/aws/aws-ec2
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-ec2/"
description: "Manage AWS EC2 instances and volumes easily with AWS EC2 Command. Control EC2 resources, create snapshots, and list available AMIs. Free online tool, no registration required."
category: common
keywords:
- aws ec2 management
- ec2 instance control
- aws volume administration
- aws ec2 command line
- amazon ec2 interface
- cloud computing ec2
- aws ec2 snapshot creation
- ec2 ami listing
- aws ec2 resource management
- amazon web services ec2
features:
- List available Amazon Machine Images (AMIs)
- Describe details for specific EC2 instances
- Delete unused EC2 volumes
- Create snapshots from EC2 volumes for backups
- Display comprehensive help information for EC2 subcommands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws ec2

> Manage AWS EC2 instances and volumes.
> AWS EC2 provides secure and resizable computing capacity in the AWS cloud for faster development and deployment of applications.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2/index.html>.

- Display information about a specific instance:

`aws ec2 describe-instances --instance-ids {{instance_id}}`

- Display information about all instances:

`aws ec2 describe-instances`

- Display information about all EC2 volumes:

`aws ec2 describe-volumes`

- Delete an EC2 volume:

`aws ec2 delete-volume --volume-id {{volume_id}}`

- Create a snapshot from an EC2 volume:

`aws ec2 create-snapshot --volume-id {{volume_id}}`

- List available AMIs (Amazon Machine Images):

`aws ec2 describe-images`

- Show list of all available EC2 commands:

`aws ec2 help`

- Display help for specific EC2 subcommand:

`aws ec2 {{subcommand}} help`
