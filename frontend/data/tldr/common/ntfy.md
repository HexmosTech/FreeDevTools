---
title: "Control Ntfy Notifications - HTTP Post | Online Free DevTools by Hexmos"
name: ntfy
path: "/freedevtools/tldr/common/ntfy/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ntfy/"
description: "Control HTTP Post notifications with Ntfy. Send, receive, and trigger notifications via command line. Manage alerts effortlessly. Free online tool, no registration required."
category: common
keywords:
- HTTP post notifications
- command-line notifications
- ntfy message sending
- ntfy topic subscription
- push notification control
- notification webhook trigger
- linux notification tool
- macos notification client
- cross-platform notifications
- command-line alert management
features:
- Send notifications to specified topics
- Publish notifications with titles, priority, and tags
- Schedule delayed notifications for future delivery
- Trigger webhooks for automated actions
- Subscribe to topics and receive real-time updates
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ntfy

> Send and receive HTTP POST notifications.
> More information: <https://github.com/binwiederhier/ntfy>.

- Send a message to the `security` topic:

`ntfy pub security "{{Front door has been opened.}}"`

- Send with a title, priority and tags:

`ntfy publish --title="{{Someone bought your item}}" --priority={{high}} --tags={{duck}} {{ebay}} "{{Someone just bought your item: Platypus Sculpture}}"`

- Send at 8:30am:

`ntfy pub --at=8:30am {{delayed_topic}} "{{Time for school, sleepyhead...}}"`

- Trigger a webhook:

`ntfy trigger {{my_webhook}}`

- Subscribe to a topic (`<Ctrl c>` to stop listening):

`ntfy sub {{home_automation}}`

- Display help:

`ntfy --help`
