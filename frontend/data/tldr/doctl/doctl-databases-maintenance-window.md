---
title: "Manage Database Maintenance Windows with doctl | Online Free DevTools by Hexmos"
name: doctl-databases-maintenance-window
path: "/freedevtools/tldr/doctl/doctl-databases-maintenance-window/"
canonical: "https://hexmos.com/freedevtools/tldr/doctl/doctl-databases-maintenance-window/"
description: "Manage database maintenance windows with doctl. Schedule updates, retrieve schedules and ensure optimal database performance. Free online tool, no registration required."
category: common
keywords:
- database maintenance window
- doctl database schedule
- digitalocean database management
- database maintenance schedule
- doctl database update
- database cluster maintenance
- cloud database maintenance
- doctl command line tool
- digitalocean api
- database administration
features:
- Schedule maintenance windows for database clusters
- Retrieve details of existing maintenance windows
- Update the maintenance window schedule
- Manage database maintenance via command line
- Automate database maintenance scheduling
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# doctl databases maintenance-window

> Schedule, and check the schedule of, maintenance windows for your databases.
> More information: <https://docs.digitalocean.com/reference/doctl/reference/databases/maintenance-window>.

- Run a `doctl databases maintenance-window` command with an access token:

`doctl {{[d|databases]}} {{[mw|maintenance-window]}} {{command}} {{[-t|--access-token]}} {{access_token}}`

- Retrieve details about a database cluster's maintenance windows:

`doctl {{[d|databases]}} {{[mw|maintenance-window]}} {{[g|get]}} {{database_id}}`

- Update the maintenance window for a database cluster:

`doctl {{[d|databases]}} {{[mw|maintenance-window]}} {{[u|update]}} {{database_id}} --day {{day_of_the_week}} --hour {{hour_in_24_hours_format}}`
