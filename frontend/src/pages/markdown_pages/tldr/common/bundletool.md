---
title: "Bundletool - Generate Android APKs | Free DevTools"
name: bundletool
path: /freedevtools/tldr/common/bundletool
canonical: "https://hexmos.com/freedevtools/tldr/common/bundletool/"
description: "Generate Android APKs with Bundletool. Build application bundles, estimate download sizes, and validate bundles using command line. Free online tool, no registration required."
category: common
keywords:
- android apk generator
- application bundle builder
- aab to apk converter
- bundletool command line
- android app packaging
- apk download size estimator
- android bundle validation
- apk build automation
- android application development
- bundletool tutorial
features:
- Generate APKs from Android App Bundles (AAB)
- Estimate the download size of Android applications
- Validate Android App Bundles for errors
- Create a device specification JSON file
- Install APKs to an Android device or emulator
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bundletool

> Manipulate Android Application Bundles.
> Some subcommands such as `validate` have their own usage documentation.
> More information: <https://developer.android.com/tools/bundletool>.

- Display help for a subcommand:

`bundletool help {{subcommand}}`

- Generate APKs from an application bundle (prompts for keystore password):

`bundletool build-apks --bundle {{path/to/bundle.aab}} --ks {{path/to/key.keystore}} --ks-key-alias {{key_alias}} --output {{path/to/file.apks}}`

- Generate APKs from an application bundle giving the keystore password:

`bundletool build-apks --bundle {{path/to/bundle.aab}} --ks {{path/to/key.keystore}} --ks-key-alias {{key_alias}} --ks-pass {{pass:the_password}} --output {{path/to/file.apks}}`

- Generate APKs including only one single APK for universal usage:

`bundletool build-apks --bundle {{path/to/bundle.aab}} --mode {{universal}} --ks {{path/to/key.keystore}} --ks-key-alias {{key_alias}} --output {{path/to/file.apks}}`

- Install the right combination of APKs to an emulator or device:

`bundletool install-apks --apks {{path/to/file.apks}}`

- Estimate the download size of an application:

`bundletool get-size total --apks {{path/to/file.apks}}`

- Generate a device specification JSON file for an emulator or device:

`bundletool get-device-spec --output {{path/to/file.json}}`

- Verify a bundle and display detailed information about it:

`bundletool validate --bundle {{path/to/bundle.aab}}`
