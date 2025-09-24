---
title: "Monitor Process - Get Notifications | Online Free DevTools by Hexmos"
name: noti
path: /freedevtools/tldr/common/noti
canonical: "https://hexmos.com/freedevtools/tldr/common/noti/"
description: "Monitor process executions with Noti. Get banner notifications upon completion or failure. Free online tool, no registration required. Enhance command-line productivity."
category: common
keywords:
- process monitor
- command notification
- terminal notification
- linux notification
- macos notification
- process completion alert
- pid monitor
- banner notification
- background process watch
- command-line alerts
features:
- Send notifications upon process completion.
- Monitor process execution by PID.
- Trigger notifications in terminal environments.
- Integrate with command-line workflows.
- Provide alerts for background processes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# noti

> Monitor a process and trigger a banner notification.
> More information: <https://github.com/variadico/noti>.

- Display a notification when tar finishes compressing files:

`noti {{tar -cjf example.tar.bz2 example/}}`

- Display a notification even when you put it after the command to watch:

`{{command_to_watch}}; noti`

- Monitor a process by PID and trigger a notification when the PID disappears:

`noti {{[-w|--pwatch]}} {{process_id}}`
