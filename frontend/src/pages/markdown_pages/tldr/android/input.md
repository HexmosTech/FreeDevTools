---
title: "Android Input - Control Device via ADB | Free DevTools"
name: input
path: /freedevtools/tldr/android/input
canonical: "https://hexmos.com/freedevtools/tldr/unknown/input/"
description: "Control Android device input seamlessly with ADB Input command. Simulate taps, swipes, and send key events using adb shell. Free online tool, no registration required."
category: android
keywords:
- android input control
- adb shell input
- android device automation
- simulating user actions on android
- android tap gesture
- android swipe gesture
- send key events android
- android remote control via adb
- automating android testing
- adb input keyevent command
features:
- send key events to android devices via adb
- simulate single and multi-finger taps on android
- simulate swipe gestures with customizable duration
- inject text input into android devices
- automate long press actions on android
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# input

> Send event codes or touchscreen gestures to an Android device.
> This command can only be used through `adb shell`.
> More information: <https://developer.android.com/reference/android/view/KeyEvent.html#constants_1>.

- Send an event code for a single character to an Android device:

`input keyevent {{event_code}}`

- Send a text to an Android device (`%s` represents spaces):

`input text "{{text}}"`

- Send a single tap to an Android device:

`input tap {{x_position}} {{y_position}}`

- Send a swipe gesture to an Android device:

`input swipe {{x_start}} {{y_start}} {{x_end}} {{y_end}} {{duration_in_ms}}`

- Send a long press to an Android device using a swipe gesture:

`input swipe {{x_position}} {{y_position}} {{x_position}} {{y_position}} {{duration_in_ms}}`
