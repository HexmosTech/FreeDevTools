---
title: "Delete Package - Remove Packages on OpenBSD | Free DevTools"
name: pkg_delete
path: /freedevtools/tldr/openbsd/pkg_delete
canonical: "https://hexmos.com/freedevtools/tldr/openbsd/pkg_delete/"
description: "Remove packages quickly with pkg_delete for OpenBSD. Manage software installations and clean up unused dependencies efficiently. Free online tool, no registration required."
category: openbsd
keywords:
- OpenBSD package removal
- OpenBSD pkg_delete command
- BSD package manager
- Software uninstallation OpenBSD
- OpenBSD dependency removal
- Package cleanup OpenBSD
- Command-line package management
- Uninstall software OpenBSD
- pkg_delete examples
- OpenBSD utilities
features:
- Remove specified packages
- Delete unused dependencies automatically
- Perform dry-run package deletion
- Manage OpenBSD software installations
- Clean up disk space by removing packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pkg_delete

> Remove packages in OpenBSD.
> See also: `pkg_add`, `pkg_info`.
> More information: <https://man.openbsd.org/pkg_delete>.

- Delete a package:

`pkg_delete {{package}}`

- Delete a package, including its unused dependencies:

`pkg_delete -a {{package}}`

- Dry-run deletion of a package:

`pkg_delete -n {{package}}`
