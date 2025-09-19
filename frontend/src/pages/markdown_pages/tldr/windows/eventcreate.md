---
title: "Eventcreate - Create Event Log Entries | Online Free DevTools by Hexmos"
name: eventcreate
path: /freedevtools/tldr/windows/eventcreate
canonical: "https://hexmos.com/freedevtools/tldr/windows/eventcreate/"
description: "Create event log entries with eventcreate. Manage event logs, specify event IDs, and send events to remote machines. Free online tool, no registration required."
category: windows
keywords:
- windows event log entry
- eventcreate command windows
- event log message creator
- windows event id generator
- custom event logger windows
- command line event logger
- windows system event create
- remote event logging windows
- windows event source create
- event type specification windows
features:
- Create custom entries in the Windows event log
- Specify the event ID for new log entries
- Define the type of event (success, error, warning, information)
- Create events in specific named event logs
- Send events to remote Windows machines
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eventcreate

> Create custom entries in the event log.
> Event IDs can be any number between 1 and 1000.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/eventcreate>.

- Create a new event with a given ID (1-1000) in the log:

`eventcreate /t {{success|error|warning|information}} /id {{id}} /d "{{message}}"`

- Create an event in a specific event log:

`eventcreate /l {{log_name}} /t {{type}} /id {{id}} /d "{{message}}"`

- Create an event with a specific source:

`eventcreate /so {{source_name}} /t {{type}} /id {{id}} /d "{{message}}"`

- Create an event in a remote machine's event log:

`eventcreate /s {{hostname}} /u {{username}} /p {{password}} /t {{type}} /id {{id}} /d "{{message}}"`
