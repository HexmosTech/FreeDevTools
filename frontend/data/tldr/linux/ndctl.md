---
title: "NDCTL Control - Manage NVDIMMs | Online Free DevTools by Hexmos"
name: ndctl
path: "/freedevtools/tldr/linux/ndctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ndctl/"
description: "Control NVDIMMs with NDCTL. Manage namespaces, regions, and buses for non-volatile memory on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- nvdimm management
- ndctl command line
- linux memory management
- namespace creation
- region control
- bus enumeration
- persistent memory
- fsdax configuration
- raw mode change
- nvdimm health monitoring
features:
- Create and manage NVDIMM namespaces
- Reconfigure namespace modes (e.g., raw, fsdax)
- Check and repair sector mode namespaces
- List NVDIMM resources (namespaces, regions, buses)
- Monitor NVDIMM SMART health events
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ndctl

> Utility for managing Non-Volatile DIMMs.
> More information: <https://manned.org/ndctl>.

- Create an 'fsdax' mode namespace:

`ndctl create-namespace --mode={{fsdax}}`

- Change the mode of a namespace to 'raw':

`ndctl create-namespace --reconfigure={{namespaceX.Y}} --mode={{raw}}`

- Check a sector mode namespace for consistency, and repair if needed:

`ndctl check-namespace --repair {{namespaceX.Y}}`

- List all namespaces, regions, and buses (including disabled ones):

`ndctl list --namespaces --regions --buses --idle`

- List a specific namespace and include lots of additional information:

`ndctl list -vvv --namespace={{namespaceX.Y}}`

- Run a monitor to watch for SMART health events for NVDIMMs on the 'ACPI.NFIT' bus:

`ndctl monitor --bus={{ACPI.NFIT}}`

- Remove a namespace (when applicable) or reset it to an initial state:

`ndctl destroy-namespace --force {{namespaceX.Y}}`
