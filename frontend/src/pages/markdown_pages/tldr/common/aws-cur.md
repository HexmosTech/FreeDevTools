---
title: "Create AWS CUR - Query Usage Reports | Free DevTools"
name: aws-cur
path: /freedevtools/tldr/common/aws-cur
canonical: "https://hexmos.com/freedevtools/tldr/common/aws-cur/"
description: "Create AWS Cost Usage Reports (CUR) with aws-cur. Analyze spending, identify trends, and optimize cloud expenses. Free online tool, no registration required."
category: common
keywords:
- AWS cost usage report
- AWS CUR
- AWS billing analysis
- AWS cost optimization
- AWS report definition
- AWS cloud spending
- AWS usage tracking
- CUR report generation
- AWS cost management
- AWS account analysis
features:
- Define AWS cost and usage reports from JSON files
- List existing cost and usage report definitions
- Delete specified cost and usage report definitions
- Configure report parameters, delivery options, and data aggregation
- Manage and analyze AWS spending trends effectively
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws cur

> Create, query, and delete AWS usage report definitions.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cur/index.html>.

- Create an AWS cost and usage report definition from a JSON file:

`aws cur put-report-definition --report-definition file://{{path/to/report_definition.json}}`

- List usage report definitions defined for the logged in account:

`aws cur describe-report-definitions`

- Delete a usage report definition:

`aws cur --region {{aws_region}} delete-report-definition --report-name {{report}}`
