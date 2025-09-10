---
title: dalvikvm
name: dalvikvm
path: /freedevtools/tldr/android/dalvikvm
canonical: "https://hexmos.com/freedevtools/tldr/android/dalvikvm/"
description: Android Java virtual machine for executing Dalvik bytecode.
category: android
keywords:
- android runtime environment
- executing dalvik bytecode
- android java virtual machine
- running java applications on android
- dalvik executable format
- android application development
- debugging android applications
- managing android application processes
- optimizing android application performance
- classpath management in android
features:
- execute dalvik bytecode from jar files
- specify classpath for java execution
- run specific java classes
- provide core runtime environment for android applications
- load and execute java applications on android devices
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dalvikvm

> Android Java virtual machine.
> More information: <https://source.android.com/docs/core/runtime>.

- Start a specific Java program:

`dalvikvm -classpath {{path/to/file.jar}} {{classname}}`
