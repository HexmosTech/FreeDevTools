---
title: "F-Droid Builder - Build Android Apps | Free DevTools"
name: fdroid
path: /freedevtools/tldr/common/fdroid
canonical: "https://hexmos.com/freedevtools/tldr/common/fdroid/"
description: "Build Android apps easily with F-Droid Builder. Create, publish, and install FOSS applications for the Android platform directly from the command line. Free online tool, no registration required."
category: common
keywords:
- android app builder
- fdroid build tool
- android foss app
- build android package
- android apk builder
- fdroid repository
- android package manager
- publish android app
- install android app
- fdroid metadata
features:
- Build F-Droid compatible Android apps
- Publish apps to a local repository
- Install apps on connected Android devices
- Lint F-Droid metadata for formatting errors
- Rewrite metadata for automatic formatting fixes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fdroid

> F-Droid build tool.
> F-Droid is an installable catalog of FOSS (Free and Open Source Software) applications for the Android platform.
> More information: <https://f-droid.org/en/docs/Building_Applications/>.

- Build a specific app:

`fdroid build {{app_id}}`

- Build a specific app in a build server VM:

`fdroid build {{app_id}} --server`

- Publish the app to the local repository:

`fdroid publish {{app_id}}`

- Install the app on every connected device:

`fdroid install {{app_id}}`

- Check if the metadata is formatted correctly:

`fdroid lint --format {{app_id}}`

- Fix the formatting automatically (if possible):

`fdroid rewritemeta {{app_id}}`
