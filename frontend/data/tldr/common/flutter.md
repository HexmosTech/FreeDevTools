---
title: "Flutter Commands - Create Cross-Platform Apps | Online Free DevTools by Hexmos"
name: flutter
path: "/freedevtools/tldr/common/flutter/"
canonical: "https://hexmos.com/freedevtools/tldr/common/flutter/"
description: "Create cross-platform mobile apps with Flutter commands. Initialize projects, run tests, and build release APKs easily. Free online tool, no registration required."
category: common
keywords:
- Flutter cross-platform development
- Flutter app development
- Flutter command-line interface
- Flutter SDK commands
- Flutter project creation
- Flutter build APK
- Flutter testing framework
- Flutter doctor command
- Flutter channel management
- Flutter clean project
features:
- Initialize new Flutter projects
- Check Flutter installation status with doctor
- Manage Flutter channels (stable, beta, dev, master)
- Build release APKs for Android
- Clean Flutter project directory
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# flutter

> Google's free, open source, and cross-platform mobile app SDK.
> Some subcommands such as `pub` have their own usage documentation.
> More information: <https://github.com/flutter/flutter/wiki/The-flutter-tool>.

- Initialize a new Flutter project in a directory of the same name:

`flutter create {{project_name}}`

- Check if all external tools are correctly installed:

`flutter doctor`

- List or change Flutter channel:

`flutter channel {{stable|beta|dev|master}}`

- Run Flutter on all started emulators and connected devices:

`flutter run -d all`

- Run tests in a terminal from the root of the project:

`flutter test {{test/example_test.dart}}`

- Build a release APK targeting most modern smartphones:

`flutter build apk --target-platform {{android-arm}},{{android-arm64}}`

- Delete the `build` and `.dart_tool` directories:

`flutter clean`

- Display help about a specific command:

`flutter help {{command}}`
