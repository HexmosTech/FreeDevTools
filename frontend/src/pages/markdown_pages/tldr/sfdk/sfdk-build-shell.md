---
title: "SFDK Build-Shell - Execute Build Steps | Free DevTools"
name: sfdk-build-shell
path: /freedevtools/tldr/common/sfdk-build-shell
canonical: "https://hexmos.com/freedevtools/tldr/common/sfdk-build-shell/"
description: "Execute build steps with SFDK Build-Shell, enabling custom actions within the Sailfish OS build engine. Customize your build process effortlessly. Free online tool, no registration required."
category: common
keywords:
- sailfish os build
- sfdk build engine
- mb2 building
- qtc build tool
- build shell command
- sailfish sdk command
- linux build script
- cross-compilation shell
- interactive build shell
- build environment customization
features:
- Launch an interactive shell in the build engine
- Execute specific commands within the build shell
- Enter maintenance mode for environment inspection
- Customize build processes with custom steps
- Modify build environments directly
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk build-shell

> Executes custom steps in build engine.
> See also: `sfdk config` for configuring the build target and `sfdk build-init` for initializing build tree.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/20-building-mb2/doc/command.build-shell.adoc>.

- Launch interactive shell in the build engine:

`sfdk build-shell`

- Run a specified command in the build shell:

`sfdk build-shell {{command}}`

- Launch interactive shell in the build engine in maintenance mode, when inspecting or modifying the build environment:

`sfdk build-shell --maintain`
