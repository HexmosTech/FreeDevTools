---
title: "AWS QuickSight - Manage Data Visualizations | Online Free DevTools by Hexmos"
name: aws-quicksight
path: "/freedevtools/tldr/aws/aws-quicksight/"
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-quicksight/"
description: "Manage data visualizations with AWS QuickSight. Analyze datasets, configure user permissions, and generate insightful dashboards. Free online tool, no registration required."
category: common
keywords:
- AWS QuickSight management
- Data visualization control
- QuickSight dataset analysis
- Dashboard configuration AWS
- AWS user permission management
- AWS group listing
- AWS dashboard listing
- QuickSight account administration
- AWS QuickSight reporting
- AWS business intelligence
features:
- List all datasets within an AWS account
- List users and groups within a QuickSight namespace
- List dashboards associated with an AWS account
- Describe a specific dataset, including details
- Display dataset access permissions and actions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws quicksight

> Create, delete, list, search and update AWS QuickSight entities.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/quicksight/>.

- List datasets:

`aws quicksight list-data-sets --aws-account-id {{aws_account_id}}`

- List users:

`aws quicksight list-users --aws-account-id {{aws_account_id}} --namespace default`

- List groups:

`aws quicksight list-groups --aws-account-id {{aws_account_id}} --namespace default`

- List dashboards:

`aws quicksight list-dashboards --aws-account-id {{aws_account_id}}`

- Display detailed information about a dataset:

`aws quicksight describe-data-set --aws-account-id {{aws_account_id}} --data-set-id {{data_set_id}}`

- Display who has access to the dataset and what kind of actions they can perform on the dataset:

`aws quicksight describe-data-set-permissions --aws-account-id {{aws_account_id}} --data-set-id {{data_set_id}}`
