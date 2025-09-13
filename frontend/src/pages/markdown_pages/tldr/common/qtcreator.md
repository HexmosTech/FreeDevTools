---
title: "Qt Creator - Develop Qt Applications | Free DevTools"
name: qtcreator
path: /freedevtools/tldr/common/qtcreator
canonical: "https://hexmos.com/freedevtools/tldr/common/qtcreator/"
description: "Develop cross-platform applications with Qt Creator, the powerful Qt IDE. Debug code, design UIs, and manage projects efficiently. Free online tool, no registration required."
category: common
keywords:
- Qt Creator development
- Qt application IDE
- Cross-platform Qt development
- Qt GUI builder
- Qt code debugging
- Qt project management
- C++ Qt development
- QML development
- Qt Linux development
- Qt Windows development
features:
- Launch the Qt Creator IDE
- Restore previous Qt Creator sessions
- Disable specific Qt Creator plugins
- Execute Qt Creator in presentation mode
- Display Git commit differences in Qt Creator
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qtcreator

> Cross-platform IDE for Qt applications.
> More information: <https://doc.qt.io/qtcreator/creator-cli.html>.

- Start Qt Creator:

`qtcreator`

- Start Qt Creator and restore the last session:

`qtcreator -lastsession`

- Start Qt Creator but don't load the specified plugin:

`qtcreator -noload {{plugin}}`

- Start Qt Creator but don't load any plugins:

`qtcreator -noload {{all}}`

- Start Qt Creator in presentation mode with pop-ups for keyboard shortcuts:

`qtcreator -presentationMode`

- Start Qt Creator and show the diff from a specific commit:

`qtcreator -git-show {{commit}}`
