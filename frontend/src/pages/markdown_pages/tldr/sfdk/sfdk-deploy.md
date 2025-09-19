---
title: "SFDK Deploy - Deploy Sailfish OS Builds | Online Free DevTools by Hexmos"
name: sfdk-deploy
path: /freedevtools/tldr/sfdk/sfdk-deploy
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-deploy/"
description: "Deploy Sailfish OS builds effortlessly with SFDK Deploy. Package and transfer files to your device or emulator using various methods. Free online tool, no registration required."
category: common
keywords:
- Sailfish OS deploy
- SFDK deploy
- Sailfish OS package deployment
- RPM deployment Sailfish OS
- Sailfish OS SDK deployment
- Sailfish OS file transfer
- Linux deploy tool
- Sailfish OS application install
- Sailfish OS app deploy
- Sailfish OS developer tool
features:
- Deploy Sailfish OS application packages
- Transfer files to Sailfish OS device
- Utilize PKCON for package deployment
- Support RSYNC for file synchronization
- Undeploy packages from Sailfish OS device
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk deploy

> Deploys build results to a device.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/50-testing-mb2/doc/command.deploy.adoc>.

- Deploy using a specified method (`pkcon`, `rsync`, `sdk`, `zypper`, `zypper-dup` or `manual`):

`sfdk deploy --{{method}}`

- Preview deploy without applying the changes:

`sfdk deploy --{{method}} {{[-n|--dry-run]}}`

- Deploy files in glob pattern `package*`:

`sfdk deploy --{{method}} "+package*"`

- Deploy all files excluding `ignore*`:

`sfdk deploy --{{method}} "-ignore*"`

- Undeploy using a specified method (`pkcon`, `rpm`, `rsync`, `sdk` or `zypper`):

`sfdk undeploy --{{method}}`
