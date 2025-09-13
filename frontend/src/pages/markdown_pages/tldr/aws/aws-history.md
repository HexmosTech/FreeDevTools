---
title: "AWS History - Control AWS CLI Commands | Free DevTools"
name: aws-history
path: /freedevtools/tldr/common/aws-history
canonical: "https://hexmos.com/freedevtools/tldr/common/aws-history/"
description: "Control AWS CLI command history with AWS History. Display event details and list commands effortlessly. Free online tool, no registration required."
category: common
keywords:
- aws cli history
- aws command history
- command line history
- aws cli audit
- cloudwatch logs
- aws cli commands
- bash history
- zsh history
- aws history list
- aws history show
features:
- List all AWS CLI command history with command IDs
- Display events related to a specific command ID
- Audit AWS CLI command usage
- Track command execution
- Review past AWS CLI commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws history

> Print the command-line history for AWS CLI commands (the record of history of AWS CLI commands must be enabled).
> More information: <https://docs.aws.amazon.com/cli/latest/reference/history/>.

- List commands history with command IDs:

`aws history list`

- Display events related to a specific command given a command ID:

`aws history show {{command_id}}`
