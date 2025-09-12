---
title: "AWS SQS - Manage Queues | Free DevTools"
name: aws-sqs
path: /freedevtools/tldr/common/aws-sqs
canonical: "https://hexmos.com/freedevtools/tldr/common/aws-sqs/"
description: "Manage queues with AWS SQS. Create, delete, and send messages using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- aws sqs queues
- amazon sqs command
- aws message queue
- sqs cli
- aws sqs manager
- aws sqs send message
- aws sqs delete queue
- aws sqs list queues
- aws sqs purge queue
- aws sqs permission control
features:
- List available AWS SQS queues.
- Create new queues with custom attributes.
- Send messages to AWS SQS queues with specified attributes.
- Delete messages from AWS SQS queues.
- Manage queue permissions for specific AWS accounts.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws sqs

> Create, delete, and send messages to queues for the AWS SQS service.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sqs/index.html>.

- List all availables queues:

`aws sqs list-queues`

- Display the URL of a specific queue:

`aws sqs get-queue-url --queue-name {{queue_name}}`

- Create a queue with specific attributes from a file in JSON format:

`aws sqs create-queue --queue-name {{queue_name}} --attributes {{file://path/to/attributes_file.json}}`

- Send a specific message to a queue:

`aws sqs send-message --queue-url https://sqs.{{region}}.amazonaws.com/{{queue_name}} --message-body "{{message_body}}" --delay-seconds {{delay}} --message-attributes {{file://path/to/attributes_file.json}}`

- Delete the specified message from a queue:

`aws sqs delete-message --queue-url {{https://queue_url}} --receipt-handle {{receipt_handle}}`

- Delete a specific queue:

`aws sqs delete-queue --queue-url https://sqs.{{region}}.amazonaws.com/{{queue_name}}`

- Delete all messages from the specified queue:

`aws sqs purge-queue --queue-url https://sqs.{{region}}.amazonaws.com/{{queue_name}}`

- Enable a specific AWS account to send messages to queue:

`aws sqs add-permission --queue-url https://sqs.{{region}}.amazonaws.com/{{queue_name}} --label {{permission_name}} --aws-account-ids {{account_id}} --actions SendMessage`
