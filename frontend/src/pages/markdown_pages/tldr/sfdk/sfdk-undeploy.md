---
title: "SFDK Undeploy - Remove Packages from SailfishOS | Free DevTools"
name: sfdk-undeploy
path: /freedevtools/tldr/sfdk/sfdk-undeploy
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-undeploy/"
description: "Undeploy SailfishOS packages effortlessly with SFDK Undeploy. Remove application files, test builds, and manage deployment using command-line options. Free online tool, no registration required."
category: common
keywords:
- SailfishOS package removal
- SFDK application undeployment
- RPM package manager
- Zypper package removal
- SailfishOS SDK command
- SailfishOS development tool
- MB2 testing command
- PKcon package manager
- Rsync file removal
- SailfishOS build removal
features:
- Undeploy packages using PKcon, RPM, Rsync, SDK or Zypper.
- Preview undeployment without applying changes.
- Remove files based on glob patterns.
- Exclude specific files during undeployment.
- Manage deployment configurations with command-line options.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk undeploy

> Undeploys build results from a device.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/50-testing-mb2/doc/command.undeploy.adoc>.

- Undeploy using a specified method (`pkcon`, `rpm`, `rsync`, `sdk` or `zypper`):

`sfdk undeploy --{{method}}`

- Preview undeploy without applying the changes:

`sfdk undeploy --{{method}} {{[-n|--dry-run]}}`

- Undeploy files in glob pattern `package*`:

`sfdk undeploy --{{method}} "+package*"`

- Undeploy all files excluding `ignore*`:

`sfdk undeploy --{{method}} "-ignore*"`
