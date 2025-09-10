---
title: am
name: am
path: /freedevtools/tldr/android/am
canonical: "https://hexmos.com/freedevtools/tldr/android/am/"
description: Android activity manager for controlling application activities.
category: android
keywords:
- android activity management
- starting android activities
- managing android intents
- debugging android applications
- invoking android services
- android development tool
- command line activity control
- starting activities with components
- handling intent actions and data
- converting intents to URIs
features:
- start activities by component name
- start activities with intent actions
- pass data to activities using intents
- start activities with specific categories
- convert intents to URI representations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
