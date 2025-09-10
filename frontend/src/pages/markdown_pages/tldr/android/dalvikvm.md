---
title: "Dalvikvm - Execute Android Java Code | Free DevTools"
name: dalvikvm
path: /freedevtools/tldr/android/dalvikvm
canonical: "https://hexmos.com/freedevtools/tldr/android/dalvikvm/"
description: "Execute Android Java bytecode with dalvikvm. Easily run JAR files and manage classpaths for application development. Free online tool, no registration required."
category: android
keywords:
- android bytecode execution
- dalvik virtual machine
- android runtime environment
- dalvik executable runner
- java application on android
- android app development
- dalvik debugger
- android process management
- android performance optimization
- dalvik classpath manager
features:
- Execute Dalvik bytecode from JAR files
- Specify the classpath for Java execution
- Run a specific Java class within the VM
- Provide a core runtime environment for Android applications
- Load and execute Java applications on Android devices
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dalvikvm

> Android Java virtual machine.
> More information: <https://source.android.com/docs/core/runtime>.

- Start a specific Java program:

`dalvikvm -classpath {{path/to/file.jar}} {{classname}}`
