---
title: "Defaults - Manage macOS User Configuration | Online Free DevTools by Hexmos"
name: defaults
path: "/freedevtools/tldr/osx/defaults/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/defaults/"
description: "Manage macOS user configuration with Defaults. Read, write, and delete application preferences via the command line. Free online tool, no registration required."
category: osx
keywords:
- macOS defaults management
- OSX preferences control
- application configuration macOS
- command line defaults tool
- plist editor macOS
- user settings editor OSX
- defaults write command
- defaults read command
- macOS system configuration
- application defaults finder
features:
- Read application preferences
- Write application defaults
- Delete application settings
- Search for default values
- Modify system configuration settings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# defaults

> Read and write macOS user configuration for applications.
> More information: <https://keith.github.io/xcode-man-pages/defaults.1.html>.

- Read system defaults for an application option:

`defaults read "{{application}}" "{{option}}"`

- Read default values for an application option:

`defaults read -app "{{application}}" "{{option}}"`

- Search for a keyword in domain names, keys, and values:

`defaults find "{{keyword}}"`

- Write the default value of an application option:

`defaults write "{{application}}" "{{option}}" {{-type}} {{value}}`

- Speed up Mission Control animations:

`defaults write com.apple.Dock expose-animation-duration -float 0.1`

- Delete all defaults of an application:

`defaults delete "{{application}}"`
