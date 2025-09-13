---
title: "Control Qutebrowser - Keyboard-Driven Browser | Free DevTools"
name: qutebrowser
path: /freedevtools/tldr/common/qutebrowser
canonical: "https://hexmos.com/freedevtools/tldr/common/qutebrowser/"
description: "Control browsing sessions with Qutebrowser, a keyboard-driven browser based on PyQt5. Manage profiles and restore sessions easily. Free online tool, no registration required."
category: common
keywords:
- keyboard driven browser
- vim like browser
- pyqt5 browser
- qutebrowser configuration
- qutebrowser session management
- qutebrowser profile management
- qutebrowser command line
- qutebrowser temporary session
- qutebrowser restore session
- qutebrowser browser settings
features:
- Open browser with specified storage directory
- Launch temporary browser instances
- Restore named browsing sessions
- Open URLs using specified methods
- Log browser output as JSON
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# qutebrowser

> A keyboard-driven, vim-like browser based on PyQt5.
> More information: <https://qutebrowser.org/doc/qutebrowser.1.html>.

- Open qutebrowser with a specified storage directory:

`qutebrowser --basedir {{path/to/directory}}`

- Open a qutebrowser instance with temporary settings:

`qutebrowser --set {{content.geolocation}} {{true|false}}`

- Restore a named session of a qutebrowser instance:

`qutebrowser --restore {{session_name}}`

- Launch qutebrowser, opening all URLs using the specified method:

`qutebrowser --target {{auto|tab|tab-bg|tab-silent|tab-bg-silent|window|private-window}}`

- Open qutebrowser with a temporary base directory and print logs to `stdout` as JSON:

`qutebrowser --temp-basedir --json-logging`
