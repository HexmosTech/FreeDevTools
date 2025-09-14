---
title: "DynamoDB Control - Manage AWS NoSQL Database | Free DevTools"
name: aws-dynamodb
path: /freedevtools/tldr/aws/aws-dynamodb
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-dynamodb/"
description: "Control DynamoDB database instances with AWS DynamoDB command. Manage tables, add items, and retrieve data in your AWS NoSQL database. Free online tool, no registration required."
category: common
keywords:
- aws dynamodb control
- dynamodb table manager
- aws nosql database
- dynamodb item editor
- dynamodb command line
- aws dynamodb cli
- dynamodb data manipulator
- dynamodb key schema
- dynamodb aws cloud
- aws dynamodb scan
features:
- Create and manage DynamoDB tables via command line
- Add, retrieve, update, and delete items in tables
- Scan entire tables for specific data entries
- Describe table details and schemas
- List all available DynamoDB tables in the AWS account
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws dynamodb

> Manipulate an AWS Dynamodb database, a fast NoSQL database with predictable performance and seamless scalability.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/dynamodb/>.

- Create a table:

`aws dynamodb create-table --table-name {{table_name}} --attribute-definitions {{AttributeName=S,AttributeType=S}} --key-schema {{AttributeName=S,KeyType=HASH}} --provisioned-throughput {{ReadCapacityUnits=5,WriteCapacityUnits=5}}`

- List all tables in the DynamoDB:

`aws dynamodb list-tables`

- Get details about a specific table:

`aws dynamodb describe-table --table-name {{table_name}}`

- Add an item to a table:

`aws dynamodb put-item --table-name {{table_name}} --item '{{{"AttributeName": {"S": "value"}}}}'`

- Retrieve an item from a table:

`aws dynamodb get-item --table-name {{table_name}} --key '{{{"ID": {"N": "1"}}}}'`

- Update an item in the table:

`aws dynamodb update-item --table-name {{table_name}} --key '{{{"ID": {"N": "1"}}}}' --update-expression "{{SET Name = :n}}" --expression-attribute-values '{{{":n": {"S": "Jane"}}}}'`

- Scan items in the table:

`aws dynamodb scan --table-name {{table_name}}`

- Delete an item from the table:

`aws dynamodb delete-item --table-name {{table_name}} --key '{{{"ID": {"N": "1"}}}}'`
