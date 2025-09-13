---
title: "Query CloudWatch Logs - Analyze AWS Logs with awslogs | Free DevTools"
name: awslogs
path: /freedevtools/tldr/aws/awslogs
canonical: "https://hexmos.com/freedevtools/tldr/aws/awslogs/"
description: "Analyze AWS CloudWatch logs efficiently with awslogs. Query log groups, streams, and events to troubleshoot issues. Free online tool, no registration required."
category: common
keywords:
- cloudwatch logs query
- aws logs analysis
- awslogs command line
- cloudwatch logs filter
- aws logs monitoring
- cloudwatch log stream
- aws cloudwatch logs search
- linux awslogs
- macos awslogs
- cloudwatch logs events
features:
- Query CloudWatch log groups
- List available log streams
- Retrieve logs based on time range
- Filter logs using patterns
- Watch logs in real-time
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# awslogs

> Queries groups, streams and events from Amazon CloudWatch logs.
> More information: <https://github.com/jorgebastida/awslogs>.

- List log groups:

`awslogs groups`

- List existing streams for the specified group:

`awslogs streams {{/var/log/syslog}}`

- Get logs for any streams in the specified group between 1 and 2 hours ago:

`awslogs get {{/var/log/syslog}} {{[-s|--start]}} '{{2h ago}}' {{[-e|--end]}} '{{1h ago}}'`

- Get logs that match a specific CloudWatch Logs Filter pattern:

`awslogs get {{/aws/lambda/my_lambda_group}} --filter-pattern '{{ERROR}}'`

- Watch logs for any streams in the specified group:

`awslogs get {{/var/log/syslog}} ALL --watch`
