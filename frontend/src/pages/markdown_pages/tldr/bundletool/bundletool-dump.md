---
title: "Bundletool Dump - Inspect Android App Bundles | Free DevTools"
name: bundletool-dump
path: /freedevtools/tldr/bundletool/bundletool-dump
canonical: "https://hexmos.com/freedevtools/tldr/bundletool/bundletool-dump/"
description: "Inspect Android app bundles with Bundletool Dump. Analyze manifests, resources, and configurations within .aab files. Free online tool, no registration required."
category: common
keywords:
- android app bundle analyzer
- aab manifest viewer
- bundletool resource inspector
- android bundle configuration dump
- aab file inspector
- android apk metadata
- app bundle analysis
- android developer tools
- bundletool dump command
- aab configuration viewer
features:
- Display AndroidManifest.xml content from .aab files
- Extract specific values from the manifest using XPath queries
- Display resources within an application bundle
- Inspect resource configurations for different devices
- Dump the contents of the bundle configuration file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bundletool dump

> Manipulate Android Application Bundles.
> More information: <https://developer.android.com/tools/bundletool>.

- Display the `AndroidManifest.xml` of the base module:

`bundletool dump manifest --bundle {{path/to/bundle.aab}}`

- Display a specific value from the `AndroidManifest.xml` using XPath:

`bundletool dump manifest --bundle {{path/to/bundle.aab}} --xpath {{/manifest/@android:versionCode}}`

- Display the `AndroidManifest.xml` of a specific module:

`bundletool dump manifest --bundle {{path/to/bundle.aab}} --module {{name}}`

- Display all the resources in the application bundle:

`bundletool dump resources --bundle {{path/to/bundle.aab}}`

- Display the configuration for a specific resource:

`bundletool dump resources --bundle {{path/to/bundle.aab}} --resource {{type/name}}`

- Display the configuration and values for a specific resource using the ID:

`bundletool dump resources --bundle {{path/to/bundle.aab}} --resource {{0x7f0e013a}} --values`

- Display the contents of the bundle configuration file:

`bundletool dump config --bundle {{path/to/bundle.aab}}`
