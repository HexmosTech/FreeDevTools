---
title: "SQS Client - Manage AWS Queues | Online Free DevTools by Hexmos"
name: sqsc
path: /freedevtools/tldr/common/sqsc
canonical: "https://hexmos.com/freedevtools/tldr/common/sqsc/"
description: "Manage AWS SQS queues easily with SQSC. Interact, query, and copy messages across queues. Free online tool, no registration required."
category: common
keywords:
- AWS SQS client
- SQS queue manager
- AWS message queue
- SQS command line
- SQS queue copy
- SQS queue move
- SQS queue query
- AWS queue describe
- Linux SQS
- macOS SQS
features:
- List all queues in AWS SQS
- Copy messages between AWS SQS queues
- Query queue messages with SQL syntax
- Move messages between AWS SQS queues
- Pull messages to a local SQLite database
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sqsc

> An AWS Simple Queue Service client.
> More information: <https://github.com/yongfei25/sqsc>.

- List all queues:

`sqsc lq {{queue_prefix}}`

- List all messages in a queue:

`sqsc ls {{queue_name}}`

- Copy all messages from one queue to another:

`sqsc cp {{source_queue}} {{destination_queue}}`

- Move all messages from one queue to another:

`sqsc mv {{source_queue}} {{destination_queue}}`

- Describe a queue:

`sqsc describe {{queue_name}}`

- Query a queue with SQL syntax:

`sqsc query "SELECT body FROM {{queue_name}} WHERE body LIKE '%user%'"`

- Pull all messages from a queue into a local SQLite database in your present working directory:

`sqsc pull {{queue_name}}`
