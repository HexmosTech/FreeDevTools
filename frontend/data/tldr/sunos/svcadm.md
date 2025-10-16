---
title: "Control SunOS Services - svcadm | Online Free DevTools by Hexmos"
name: svcadm
path: "/freedevtools/tldr/sunos/svcadm/"
canonical: "https://hexmos.com/freedevtools/tldr/sunos/svcadm/"
description: "Control service instances in SunOS with svcadm. Manage service dependencies, enable or disable, and refresh configurations via command line. Free online tool, no registration required."
category: sunos
keywords:
  - sunos service management
  - svcadm command sunos
  - enable disable sunos services
  - restart sunos services
  - refresh sunos service configuration
  - clear sunos service maintenance
  - sunos system administration
  - manage sunos service dependencies
  - sunos daemon control
  - sunos service instance control
features:
  - enable sunos service instances
  - disable sunos service instances
  - restart sunos service instances
  - refresh sunos service configurations
  - clear sunos service maintenance flags
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# svcadm

> Manipulate service instances.
> More information: <https://www.unix.com/man-page/linux/1m/svcadm>.

- Enable a service in the service database:

`svcadm enable {{service_name}}`

- Disable service:

`svcadm disable {{service_name}}`

- Restart a running service:

`svcadm restart {{service_name}}`

- Command service to re-read configuration files:

`svcadm refresh {{service_name}}`

- Clear a service from maintenance state and command it to start:

`svcadm clear {{service_name}}`
