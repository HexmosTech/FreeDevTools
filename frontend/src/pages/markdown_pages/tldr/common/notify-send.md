---
title: "Create Desktop Notifications - Notify-send | Online Free DevTools by Hexmos"
name: notify-send
path: /freedevtools/tldr/common/notify-send
canonical: "https://hexmos.com/freedevtools/tldr/common/notify-send/"
description: "Create desktop notifications with notify-send. Customize icons, expiration times, and urgency levels. Enhance user communication. Free online tool, no registration required."
category: common
keywords:
- desktop notification creator
- linux notification tool
- command line notification
- notify-send linux
- customize desktop alerts
- system notification script
- notification banner generator
- linux popup creator
- notify-send command examples
- terminal notification tool
features:
- Display desktop notifications via the command line
- Customize notification icon for visual appeal
- Set notification expiration time for temporary alerts
- Define notification urgency levels (low, normal, critical)
- Specify application name and icon for clear identification
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# notify-send

> Use the current desktop environment's notification system to create a notification.
> More information: <https://manned.org/notify-send>.

- Show a notification with the title "Test" and the content "This is a test":

`notify-send "{{Test}}" "{{This is a test}}"`

- Show a notification with a custom icon:

`notify-send {{[-i|--icon]}} {{icon.png}} "{{Test}}" "{{This is a test}}"`

- Show a notification for 5 seconds:

`notify-send {{[-t|--expire-time]}} 5000 "{{Test}}" "{{This is a test}}"`

- Show a notification with the specified urgency level (default: normal):

`notify-send {{[-u|--urgency]}} {{low|normal|critical}} "{{Test}}" "{{This is a test}}"`

- Show a notification with an app's icon and name:

`notify-send "{{Test}}" {{[-i|--icon]}} {{google-chrome}} {{[-a|--app-name]}} "{{Google Chrome}}"`
