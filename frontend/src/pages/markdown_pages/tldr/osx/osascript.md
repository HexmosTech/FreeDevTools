---
title: "Execute AppleScript - Automate macOS Tasks | Online Free DevTools by Hexmos"
name: osascript
path: /freedevtools/tldr/osx/osascript
canonical: "https://hexmos.com/freedevtools/tldr/osx/osascript/"
description: "Execute AppleScript commands with osascript. Automate macOS tasks, interact with applications, and streamline workflows effortlessly. Free online tool, no registration required."
category: osx
keywords:
- applescript executor
- macos automation script
- javascript for automation
- osascript command line
- applescript terminal
- execute applescript mac
- run javascript osx
- osascript application control
- apple event scripting
- macos script execution
features:
- Execute AppleScript commands from the command line
- Run JavaScript for Automation (JXA) scripts
- Execute compiled AppleScript files (.scpt)
- Get application bundle identifiers
- Automate macOS tasks and application interactions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# osascript

> Run AppleScript or JavaScript for Automation (JXA).
> More information: <https://keith.github.io/xcode-man-pages/osascript.1.html>.

- Run an AppleScript command:

`osascript -e '{{say "Hello world"}}'`

- Run multiple AppleScript commands:

`osascript -e '{{say "Hello"}}' -e '{{say "world"}}'`

- Run a compiled (`*.scpt`), bundled (`*.scptd`), or plaintext (`*.applescript`) AppleScript file:

`osascript {{path/to/apple.scpt}}`

- Get the bundle identifier of an application (useful for `open -b`):

`osascript -e 'id of app "{{Application}}"'`

- Run a JavaScript command:

`osascript -l JavaScript -e "{{console.log('Hello world');}}"`

- Run a JavaScript file:

`osascript -l JavaScript {{path/to/script.js}}`
