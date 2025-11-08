---
title: "AWS Lightsail - Manage Cloud Resources | Online Free DevTools by Hexmos"
name: aws-lightsail
path: "/freedevtools/tldr/aws/aws-lightsail/"
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-lightsail/"
description: "Manage AWS Lightsail cloud resources with this online tool. Quickly deploy and control virtual servers and applications. Free online tool, no registration required."
category: common
keywords:
- AWS Lightsail manager
- cloud resource management
- virtual server control
- lightsail instance management
- AWS cloud deployment
- lightsail command line
- cloud server administration
- lightsail CLI tool
- AWS lightsail commands
- manage lightsail instances
features:
- List available Lightsail instances
- Create new Lightsail instances
- Stop running Lightsail instances
- Delete existing Lightsail instances
- Get the status of a specific Lightsail instance
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws lightsail

> Manage Amazon Lightsail resources.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/index.html>.

- List all virtual private servers, or instances:

`aws lightsail get-instances`

- List all bundles (instance plans):

`aws lightsail list-bundles`

- List all available instance images, or blueprints:

`aws lightsail list-blueprints`

- Create an instance:

`aws lightsail create-instances --instance-names {{name}} --availability-zone {{region}} --bundle-id {{nano_2_0}} --blueprint-id {{blueprint_id}}`

- Print the state of a specific instance:

`aws lightsail get-instance-state --instance-name {{name}}`

- Stop a specific instance:

`aws lightsail stop-instance --instance-name {{name}}`

- Delete a specific instance:

`aws lightsail delete-instance --instance-name {{name}}`
