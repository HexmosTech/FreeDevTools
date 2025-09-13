---
title: "SFDK Package - Create Sailfish OS Packages | Free DevTools"
name: sfdk-package
path: /freedevtools/tldr/common/sfdk-package
canonical: "https://hexmos.com/freedevtools/tldr/common/sfdk-package/"
description: "Create Sailfish OS application packages with SFDK Package. Streamline your Sailfish OS development process by building and signing packages easily. Free online tool, no registration required."
category: common
keywords:
- Sailfish OS package creator
- SFDK package builder
- RPM package creation
- Sailfish OS application packaging
- Linux package signing
- Command line packaging tool
- Sailfish OS development tool
- Harmattan package build
- Mer SDK package
- Qt application packaging
features:
- Creates Sailfish OS RPM packages from specified sources.
- Signs packages using specified keys for distribution.
- Skips the check section in the RPM SPEC file.
- Supports automated package building within SFDK.
- Simplifies the package creation process for Sailfish OS apps.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk package

> Executes package creation build step.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/20-building-mb2/doc/command.package.adoc>.

- Create a package:

`sfdk package`

- Create a package without executing the check section in RPM SPEC file:

`sfdk package --no-check`

- Create and sign a package:

`sfdk package --sign`
