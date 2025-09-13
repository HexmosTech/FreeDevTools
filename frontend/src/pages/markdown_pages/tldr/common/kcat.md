---
title: "Kafka Control Tool - Consume & Produce Kafka Messages | Free DevTools"
name: kcat
path: /freedevtools/tldr/common/kcat
canonical: "https://hexmos.com/freedevtools/tldr/common/kcat/"
description: "Control Kafka messages with kcat. Produce, consume, and manage Kafka topics and partitions. Free online tool, no registration required."
category: common
keywords:
- kafka command line tool
- kafka message consumer
- kafka message producer
- kafka topic management
- kafka broker metadata
- kafka consumer group
- kafka offset management
- command line kafka
- linux kafka tool
- kafka cli
features:
- Consume messages from specific topics and brokers.
- Publish messages to Kafka topics from stdin or files.
- List metadata for Kafka topics and brokers.
- Manage Kafka consumer groups.
- Query offset for specific points in time.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kcat

> Apache Kafka producer and consumer tool.
> More information: <https://github.com/edenhill/kcat>.

- Consume messages starting with the newest offset:

`kcat -C -t {{topic}} -b {{brokers}}`

- Consume messages starting with the oldest offset and exit after the last message is received:

`kcat -C -t {{topic}} -b {{brokers}} -o beginning -e`

- Consume messages as a Kafka consumer group:

`kcat -G {{group_id}} {{topic}} -b {{brokers}}`

- Publish message by reading from `stdin`:

`echo {{message}} | kcat -P -t {{topic}} -b {{brokers}}`

- Publish messages by reading from a file:

`kcat -P -t {{topic}} -b {{brokers}} {{path/to/file}}`

- List metadata for all topics and brokers:

`kcat -L -b {{brokers}}`

- List metadata for a specific topic:

`kcat -L -t {{topic}} -b {{brokers}}`

- Get offset for a topic/partition for a specific point in time:

`kcat -Q -t {{topic}}:{{partition}}:{{unix_timestamp}} -b {{brokers}}`
