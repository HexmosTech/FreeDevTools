---
title: "AWS Configure - Manage AWS CLI Configuration | Online Free DevTools by Hexmos"
name: aws-configure
path: /freedevtools/tldr/aws/aws-configure
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-configure/"
description: "Manage AWS CLI configurations with AWS Configure. Configure profiles, get configuration values, and list entries quickly. Free online tool, no registration required."
category: common
keywords:
- aws configure
- aws cli configuration
- aws profile configuration
- aws credential management
- aws cli named profile
- configure aws access key
- aws configure list profiles
- aws cli environment variables
- aws s3 configuration
- aws identity and access management
features:
- Configure AWS CLI interactively.
- Manage AWS named profiles.
- Display specific configuration values.
- Set configuration variable values.
- List all configuration entries.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws configure

> Manage configuration for the AWS CLI.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/configure/>.

- Configure AWS CLI interactively (creates a new configuration or updates the default):

`aws configure`

- Configure a named profile for AWS CLI interactively (creates a new profile or updates an existing one):

`aws configure --profile {{profile_name}}`

- Display the value from a specific configuration variable:

`aws configure get {{name}}`

- Display the value for a configuration variable in a specific profile:

`aws configure get {{name}} --profile {{profile_name}}`

- Set the value of a specific configuration variable:

`aws configure set {{name}} {{value}}`

- Set the value of a configuration variable in a specific profile:

`aws configure set {{name}} {{value}} --profile {{profile_name}}`

- List the configuration entries:

`aws configure list`

- List the configuration entries for a specific profile:

`aws configure list --profile {{profile_name}}`
