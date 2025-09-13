---
title: "Kinesis Data Streams - Control Streaming Data | Free DevTools"
name: aws-kinesis
path: /freedevtools/tldr/aws/aws-kinesis
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-kinesis/"
description: "Control streaming data with AWS Kinesis Data Streams. Manage Kinesis streams, write records, and process real-time data efficiently. Free online tool, no registration required."
category: common
keywords:
- kinesis data streams
- aws kinesis commands
- real-time data processing
- stream management
- data ingestion
- aws cli kinesis
- kinesis put record
- kinesis list streams
- shard iterator
- kinesis get records
features:
- Manage and list AWS Kinesis data streams.
- Write data records to Kinesis streams using CLI.
- Encode messages to base64 for Kinesis stream input.
- List available shards within a Kinesis stream.
- Read records from a shard using a shard iterator.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws kinesis

> Interact with the Amazon Kinesis Data Streams, a service that scales elastically for real-time processing of streaming big data.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/kinesis/index.html#cli-aws-kinesis>.

- Show all streams in the account:

`aws kinesis list-streams`

- Write one record to a Kinesis stream:

`aws kinesis put-record --stream-name {{name}} --partition-key {{key}} --data {{base64_encoded_message}}`

- Write a record to a Kinesis stream with inline base64 encoding:

`aws kinesis put-record --stream-name {{name}} --partition-key {{key}} --data "$( echo "{{my raw message}}" | base64 )"`

- List the shards available on a stream:

`aws kinesis list-shards --stream-name {{name}}`

- Get a shard iterator for reading from the oldest message in a stream's shard:

`aws kinesis get-shard-iterator --shard-iterator-type TRIM_HORIZON --stream-name {{name}} --shard-id {{id}}`

- Read records from a shard, using a shard iterator:

`aws kinesis get-records --shard-iterator {{iterator}}`
