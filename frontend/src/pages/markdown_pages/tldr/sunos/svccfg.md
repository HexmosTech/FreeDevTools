---
title: svccfg
name: svccfg
path: /freedevtools/tldr/sunos/svccfg
canonical: "https://hexmos.com/freedevtools/tldr/sunos/svccfg/"
description: Import, export, and modify service configurations on SunOS.
category: sunos
keywords:
- service management framework
- service configuration management
- sunos system administration
- managing system services
- service manifest validation
- exporting service definitions
- importing service configurations
- updating service configurations
- validating smf files
- sunos service control
features:
- validate service manifest files
- export service configurations
- import service configurations
- modify service definitions
- manage system services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# svccfg

> Import, export, and modify service configurations.
> More information: <https://www.unix.com/man-page/linux/1m/svccfg>.

- Validate configuration file:

`svccfg validate {{path/to/smf_file.xml}}`

- Export service configurations to file:

`svccfg export {{servicename}} > {{path/to/smf_file.xml}}`

- Import/update service configurations from file:

`svccfg import {{path/to/smf_file.xml}}`
