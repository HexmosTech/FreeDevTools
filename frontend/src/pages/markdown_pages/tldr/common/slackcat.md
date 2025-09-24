---
title: "Slackcat - Send Files and Output to Slack | Online Free DevTools by Hexmos"
name: slackcat
path: /freedevtools/tldr/common/slackcat
canonical: "https://hexmos.com/freedevtools/tldr/common/slackcat/"
description: "Send files and command output to Slack with Slackcat. Share text snippets, stream data, and control notifications effortlessly. Free online tool, no registration required."
category: common
keywords:
- slack message sender
- slack file uploader
- command output to slack
- slack notification cli
- linux slack integration
- macos slack integration
- windows slack integration
- slack chat automation
- terminal to slack
- bash slack message
features:
- Post files to Slack channels.
- Stream command output directly to Slack.
- Send text snippets to Slack from the command line.
- Customize filenames for uploaded files.
- Integrate command line tools with Slack notifications.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# slackcat

> Utility for passing files and command output to Slack.
> More information: <https://github.com/bcicen/slackcat#usage>.

- Post a file to Slack:

`slackcat {{[-c|--channel]}} {{channel_name}} {{path/to/file}}`

- Post a file to Slack with a custom filename:

`slackcat {{[-c|--channel]}} {{channel_name}} {{[-n|--filename]}} {{filename}} {{path/to/file}}`

- Pipe command output to Slack as a text snippet:

`{{command}} | slackcat {{[-c|--channel]}} {{channel_name}} {{[-n|--filename]}} {{snippet_name}}`

- Stream command output to Slack continuously:

`{{command}} | slackcat {{[-c|--channel]}} {{channel_name}} {{[-s|--stream]}}`
