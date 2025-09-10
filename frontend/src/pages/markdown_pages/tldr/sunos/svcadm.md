---
title: svcadm
name: svcadm
path: /freedevtools/tldr/sunos/svcadm
canonical: "https://hexmos.com/freedevtools/tldr/sunos/svcadm/"
description: Manipulate service instances in SunOS.
category: sunos
keywords:
- service management in sunos
- enable disable services
- restart running services
- refresh service configuration
- clear service maintenance state
- sunos service administration
- control system services
- manage service dependencies
- administer system daemons
- service instance control
features:
- enable service instances
- disable service instances
- restart service instances
- refresh service configurations
- clear service maintenance flags
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
