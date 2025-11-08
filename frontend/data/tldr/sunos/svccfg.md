---
title: "Service Config - Control SMF Configuration | Online Free DevTools by Hexmos"
name: svccfg
path: "/freedevtools/tldr/sunos/svccfg/"
canonical: "https://hexmos.com/freedevtools/tldr/sunos/svccfg/"
description: "Control SMF configuration with svccfg. Import, export and modify service manifests on SunOS. Free online tool, no registration required."
category: sunos
keywords:
  - smf configuration management
  - sunos service manifest
  - svccfg service control
  - service configuration validation
  - smf file management
  - sunos system services
  - service manifest import
  - service manifest export
  - sunos configuration update
  - service configuration modification
features:
  - validate SMF manifest files
  - export service configurations to XML
  - import service configurations from XML
  - modify service definitions
  - manage SunOS system services
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
