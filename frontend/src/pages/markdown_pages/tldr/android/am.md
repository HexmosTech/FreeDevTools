---
title: "Activity Manager - Control Android Activities with ADB | Online Free DevTools by Hexmos"
name: am
path: /freedevtools/tldr/android/am
canonical: "https://hexmos.com/freedevtools/tldr/android/am/"
description: "Control Android activities instantly with ADB Activity Manager. Start components, manage intents and convert to URIs using command line. Free online tool, no registration required."
category: android
keywords:
  - android activity manager
  - adb activity control
  - android intent handling
  - adb command am
  - android activity debugging
  - android package management
  - adb intent URI conversion
  - android application control
  - adb activity launch
  - android debug bridge am
features:
  - Start activities by component name
  - Manage intents with actions and data
  - Start activities by matching action and category
  - Convert intents to URI format
  - Directly control Android application activities
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# am

> Android activity manager.
> More information: <https://developer.android.com/tools/adb#am>.

- Start the activity with a specific component and package [n]ame:

`am start -n {{com.android.settings/.Settings}}`

- Start an intent [a]ction and pass [d]ata to it:

`am start -a {{android.intent.action.VIEW}} -d {{tel:123}}`

- Start an activity matching a specific action and [c]ategory:

`am start -a {{android.intent.action.MAIN}} -c {{android.intent.category.HOME}}`

- Convert an intent to a URI:

`am to-uri -a {{android.intent.action.VIEW}} -d {{tel:123}}`
