---
title: "AWS CloudWatch - Monitor AWS Resources | Free DevTools"
name: aws-cloudwatch
path: /freedevtools/tldr/aws/aws-cloudwatch
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-cloudwatch/"
description: "Monitor AWS resources with AWS CloudWatch. Gain system-wide visibility and optimize application performance. Free online tool, no registration required."
category: common
keywords:
- AWS CloudWatch Monitoring
- Cloud Resource Utilization
- Application Performance Monitoring
- Operational Health Insights
- CloudWatch Alarms Configuration
- AWS Metric Analysis
- CloudWatch Dashboard Management
- AWS Resource Monitoring
- CloudWatch Metrics Listing
- AWS Cloud Alarms
features:
- List AWS CloudWatch dashboards.
- Display details for specific dashboards.
- List metrics and alarms.
- Create or update CloudWatch alarms.
- Delete specified dashboards and alarms.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws cloudwatch

> Monitor AWS resources to gain system-wide visibility into resource utilization, application performance, and operational health.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudwatch/index.html>.

- List dashboards for your account:

`aws cloudwatch list-dashboards`

- Display details for the specified dashboard:

`aws cloudwatch get-dashboard --dashboard-name {{dashboard_name}}`

- List metrics:

`aws cloudwatch list-metrics`

- List alarms:

`aws cloudwatch describe-alarms`

- Create or update an alarm and associate it with a metric:

`aws cloudwatch put-metric-alarm --alarm-name {{alarm_name}} --evaluation-periods {{evaluation_periods}} --comparison-operator {{comparison_operator}}`

- Delete the specified alarms:

`aws cloudwatch delete-alarms --alarm_names {{alarm_names}}`

- Delete the specified dashboards:

`aws cloudwatch delete-dashboards --dashboard-names {{dashboard_names}}`
