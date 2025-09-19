---
title: "Beanstalkd - Control Work Queues | Online Free DevTools by Hexmos"
name: beanstalkd
path: /freedevtools/tldr/common/beanstalkd
canonical: "https://hexmos.com/freedevtools/tldr/common/beanstalkd/"
description: "Control work queues with Beanstalkd. Manage, persist, and prioritize jobs in a simple, fast work queue system. Free online tool, no registration required."
category: common
keywords:
- work queue server
- message queue system
- background job processing
- task queue management
- beanstalkd queue
- beanstalkd linux
- beanstalkd command
- beanstalkd tutorial
- distributed task management
- asynchronous processing
features:
- Start the Beanstalkd server on the default port
- Specify a custom IP address and port for Beanstalkd
- Persist work queues to disk for data durability
- Configure the sync interval for persistence
- Manage and prioritize background jobs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# beanstalkd

> A simple and generic work-queue server.
> More information: <https://manned.org/beanstalkd>.

- Start the server, listening on port 11300:

`beanstalkd`

- Listen on a specific [p]ort and address:

`beanstalkd -l {{ip_address}} -p {{port_number}}`

- Persist work queues by saving them to disk:

`beanstalkd -b {{path/to/persistence_directory}}`

- Sync to the persistence directory every 500 milliseconds:

`beanstalkd -b {{path/to/persistence_directory}} -f {{500}}`
