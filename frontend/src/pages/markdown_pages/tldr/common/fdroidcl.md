---
title: "F-Droid Manager - Control Apps via ADB | Online Free DevTools by Hexmos"
name: fdroidcl
path: /freedevtools/tldr/common/fdroidcl
canonical: "https://hexmos.com/freedevtools/tldr/common/fdroidcl/"
description: "Control F-Droid apps via ADB with F-Droid Manager. Manage app installation, updates, and repositories on connected Android devices. Free online tool, no registration required."
category: common
keywords:
- f-droid manager
- android app manager
- adb app installer
- f-droid package manager
- android repository management
- command line app control
- fdroidcl command
- adb install apk
- android app update
- linux app management
features:
- Fetch the latest F-Droid repository index
- Install F-Droid applications directly via ADB
- Manage F-Droid repositories (add, remove, enable, disable)
- Search for applications within the F-Droid repository
- Download APK files directly from the F-Droid repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fdroidcl

> Manage F-Droid apps of devices connected via ADB.
> More information: <https://github.com/mvdan/fdroidcl>.

- Fetch the F-Droid index:

`fdroidcl update`

- Display information about an app:

`fdroidcl show {{app_id}}`

- Download the APK file of an app:

`fdroidcl download {{app_id}}`

- Search for an app in the index:

`fdroidcl search {{search_pattern}}`

- Install an app on a connected device:

`fdroidcl install {{app_id}}`

- Add a repository:

`fdroidcl repo add {{repo_name}} {{url}}`

- Remove, enable or disable a repository:

`fdroidcl repo {{remove|enable|disable}} {{repo_name}}`
