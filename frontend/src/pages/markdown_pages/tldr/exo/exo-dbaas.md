---
title: "Manage Exoscale DBaaS - Control Cloud Databases | Free DevTools"
name: exo-dbaas
path: /freedevtools/tldr/exo/exo-dbaas
canonical: "https://hexmos.com/freedevtools/tldr/exo/exo-dbaas/"
description: "Manage Exoscale DBaaS instances with this tool. Control database service types, create new databases, and update maintenance schedules. Free online tool, no registration required."
category: common
keywords:
- exoscale dbaas manager
- cloud database control
- dbaas command line
- exoscale database service
- database instance management
- dbaas maintenance schedule
- exoscale cli dbaas
- exoscale database types
- dbaas connection uri
- exoscale dbaas cli
features:
- List available database service types
- Show available plans for a service type
- Create new Exoscale DBaaS instances
- Display connection URIs for database services
- Update maintenance schedules for DBaaS instances
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# exo dbaas

> Manage Exoscale DBaaS.
> More information: <https://community.exoscale.com/product/dbaas/>.

- List available Database Service types:

`exo dbaas type list`

- List available plans for a Database Service type:

`exo dbaas type show {{database_service_type}} --plans`

- Create a new Database Service (an IP filter must be specified in order to access the service):

`exo dbaas create {{database_service_type}} {{database_service_type_plan}} {{database_service_name}} --{{database_service_type}}-ip-filter {{1.2.3.4/32}}`

- Show the connection URI for a Database Service:

`exo dbaas show {{database_service_name}} --uri`

- Set a specified maintenance time and day of the week for a Database Service:

`exo dbaas update {{database_service_name}} --maintenance-dow {{day_of_the_week}} --maintenance-time {{HH:MM:SS}}`

- Get help for a specific Database Service type:

`exo dbaas {{subcommand}} --help-{{database_service_type}}`
