---
title: "Qmake Builder - Execute Qmake Builds | Free DevTools"
name: sfdk-qmake
path: /freedevtools/tldr/common/sfdk-qmake
canonical: "https://hexmos.com/freedevtools/tldr/common/sfdk-qmake/"
description: "Execute qmake builds quickly with sfdk-qmake. Streamline Sailfish OS development with shadow building and custom arguments. Free online tool, no registration required."
category: common
keywords:
- Sailfish OS qmake build
- qmake project build
- sfdk build tool
- shadow qmake build
- command line qmake
- cross platform qmake
- Sailfish SDK qmake
- Qt project builder
- application build process
- Sailfish application build
features:
- Execute qmake build process
- Perform shadow builds in projects
- Pass custom arguments to qmake
- Build Sailfish OS applications
- Utilize Sailfish SDK for building
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk qmake

> Executes qmake build step.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/20-building-mb2/doc/command.qmake.adoc>.

- Run qmake build:

`sfdk qmake`

- Run shadow qmake build in a specified project:

`sfdk qmake {{project}}`

- Run build with extra qmake arguments:

`sfdk qmake -- {{arguments}}`

- Run shadow qmake build with extra qmake arguments:

`sfdk qmake {{project}} {{arguments}}`
