---
title: "Manage Java Versions - jenv | Online Free DevTools by Hexmos"
name: jenv
path: /freedevtools/tldr/common/jenv
canonical: "https://hexmos.com/freedevtools/tldr/common/jenv/"
description: "Manage Java versions with jenv, a command-line tool to control the JAVA_HOME environment variable. Simplify Java development workflow. Free online tool, no registration required."
category: common
keywords:
- java version manager
- jenv java environment
- java sdk manager
- java home manager
- jdk version control
- jenv linux
- jenv macos
- command line java
- manage java versions
- set java version
features:
- Add specific Java versions to jenv
- Display currently used JDK version
- List all managed JDKs
- Set global Java Development Kit version
- Set JDK version for current shell session
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jenv

> Manage the "JAVA_HOME" environment variable.
> More information: <https://github.com/jenv/jenv/>.

- Add a Java version to jEnv:

`jenv add {{path/to/jdk_home}}`

- Display the current JDK version used:

`jenv version`

- Display all managed JDKs:

`jenv versions`

- Set the global JDK version:

`jenv global {{java_version}}`

- Set the JDK version for the current shell session:

`jenv shell {{java_version}}`

- Enable a jEnv plugin:

`jenv enable-plugin {{plugin_name}}`
