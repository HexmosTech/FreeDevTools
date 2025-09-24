---
title: "Generate QML Types - Create QML Definitions | Online Free DevTools by Hexmos"
name: sfdk-qmltypes
path: /freedevtools/tldr/sfdk/sfdk-qmltypes
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-qmltypes/"
description: "Generate QML types with sfdk-qmltypes, simplifying QML application development for Sailfish OS. Streamline your workflow. Free online tool, no registration required."
category: common
keywords:
- qml types generation
- sfdk qmltypes command
- sailfish os qml
- qml definition files
- qml module creation
- qml import paths
- sailfish sdk tools
- qml development workflow
- qml type provider
- qt meta object compiler
features:
- Generates qmltypes files for QML modules.
- Deploys generated qmltypes files to emulator.
- Prevents emulator restoration after qmltypes deployment.
- Forces emulator restoration even on failure.
- Preserves statements marked with `sdk-make-qmltypes:keep` during generation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sfdk qmltypes

> Generate qmltypes files.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/80-ide-qmltypes/doc/command.qmltypes.adoc>.

- Generate qmltypes files:

`sfdk qmltypes`

- Generate qmltypes files without deploying them (usually to emulator):

`sfdk qmltypes --no-deploy`

- Generate qmltypes files without restoring the emulator after deployment:

`sfdk qmltypes --no-restore-emulator`

- Generate qmltypes files and restore the emulator after deployment even on failure:

`sfdk qmltypes --restore-emulator`

- Generate qmltypes files without reverting changes which only include removal of statements with `sdk-make-qmltypes:keep` in comments:

`sfdk qmltypes --no-keep`
