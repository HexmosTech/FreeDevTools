---
title: "AWS Kendra - Manage Knowledge Base | Free DevTools"
name: aws-kendra
path: /freedevtools/tldr/aws/aws-kendra
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-kendra/"
description: "Manage your knowledge base with AWS Kendra. Create indexes, list data sources, and describe resources using command-line. Free online tool, no registration required."
category: common
keywords:
- aws kendra cli
- kendra index management
- kendra data source configuration
- aws knowledge base search
- kendra query suggestions
- aws kendra command line
- kendra index creation
- aws kendra describe index
- kendra search configuration
- aws kendra search queries
features:
- Create and manage AWS Kendra indexes
- List available data sources within Kendra
- Describe specific indexes in detail
- Retrieve search query suggestions for improved search accuracy
- Describe data sources configuration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws kendra

> CLI for AWS Kendra.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/kendra/index.html>.

- Create an index:

`aws kendra create-index --name {{name}} --role-arn {{role_arn}}`

- List indexes:

`aws kendra list-indexes`

- Describe an index:

`aws kendra describe-index --id {{index_id}}`

- List data sources:

`aws kendra list-data-sources`

- Describe a data source:

`aws kendra describe-data-source --id {{data_source_id}}`

- List search queries:

`aws kendra list-query-suggestions --index-id {{index_id}} --query-text {{query_text}}`
