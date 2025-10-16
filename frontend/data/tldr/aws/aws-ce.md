---
title: "AWS Cost Explorer - Manage AWS Costs | Online Free DevTools by Hexmos"
name: aws-ce
path: "/freedevtools/tldr/aws/aws-ce/"
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-ce/"
description: "Manage AWS costs effectively with AWS Cost Explorer. Analyze usage, forecast expenses and optimize spending using command line. Free online tool, no registration required."
category: common
keywords:
- AWS cost management
- AWS cost explorer CLI
- Cloud cost optimization
- AWS cost analysis
- Cost and usage reports
- AWS billing management
- AWS CE commands
- Cost anomaly detection
- AWS budget control
- AWS resource tagging
features:
- Create AWS cost anomaly monitors
- Generate cost and usage reports
- Forecast future AWS costs
- Get reservation utilization data
- Tag AWS resources for cost tracking
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws ce

> Run cost management operations through the AWS Cost Explorer service.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ce/index.html>.

- Create anomaly monitor:

`aws ce create-anomaly-monitor --monitor {{monitor_name}} --monitor-type {{monitor_type}}`

- Create anomaly subscription:

`aws ce create-anomaly-subscription --subscription {{subscription_name}} --monitor-arn {{monitor_arn}} --subscribers {{subscribers}}`

- Get anomalies:

`aws ce get-anomalies --monitor-arn {{monitor_arn}} --start-time {{start_time}} --end-time {{end_time}}`

- Get cost and usage:

`aws ce get-cost-and-usage --time-period {{start_date}}/{{end_date}} --granularity {{granularity}} --metrics {{metrics}}`

- Get cost forecast:

`aws ce get-cost-forecast --time-period {{start_date}}/{{end_date}} --granularity {{granularity}} --metric {{metric}}`

- Get reservation utilization:

`aws ce get-reservation-utilization --time-period {{start_date}}/{{end_date}} --granularity {{granularity}}`

- List cost category definitions:

`aws ce list-cost-category-definitions`

- Tag resource:

`aws ce tag-resource --resource-arn {{resource_arn}} --tags {{tags}}`
