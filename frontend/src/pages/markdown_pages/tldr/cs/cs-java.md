---
title: "Control Java JVM - Install and Run JVMs | Free DevTools"
name: cs-java
path: /freedevtools/tldr/cs/cs-java
canonical: "https://hexmos.com/freedevtools/tldr/cs/cs-java/"
description: "Control Java JVMs with cs-java. Install, manage, and run specific JVM versions with custom properties. Free online tool, no registration required."
category: common
keywords:
- Java JVM manager
- JVM installation tool
- JVM version control
- Coursier Java runtime
- Cross-platform Java
- JVM environment setup
- Java command-line tool
- Java version switcher
- JVM property configuration
- Java development environment
features:
- Install and manage multiple JVM versions.
- Run specific Java versions with custom properties.
- List available and installed JVMs.
- Set a default JVM for the shell instance or system.
- Revert default JVM settings.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cs java

> The `java` and `java-home` commands fetch and install JVMs. The `java` command runs them too.
> More information: <https://get-coursier.io/docs/cli-java>.

- Display Java version by using coursier:

`cs java -version`

- Call a specific Java version with custom properties using coursier:

`cs java --jvm {{jvm_name}}:{{jvm_version}} -Xmx32m -X{{another_jvm_opt}} -jar {{path/to/jar_name.jar}}`

- List all the available JVM in the coursier default index:

`cs java --available`

- List all the installed JVM in the system with his own location:

`cs java --installed`

- Set a specific JVM as one-off default for the shell instance:

`cs java --jvm {{jvm_name}}:{{jvm_version}} --env`

- Revert the changes for the default JVM settings:

`eval "$(cs java --disable)"`

- Set a specific JVM as default for the whole system:

`cs java --jvm {{jvm_name}}:{{jvm_version}} --setup`
