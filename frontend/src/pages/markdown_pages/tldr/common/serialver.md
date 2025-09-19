---
title: "Generate serialVersionUID - Inspect Java Classes | Online Free DevTools by Hexmos"
name: serialver
path: "/freedevtools/tldr/common/serialver"
canonical: "https://hexmos.com/freedevtools/tldr/common/serialver/"
description: "Generate serialVersionUID with serialver. Inspect Java classes to determine their serial version UID. Free online tool, no registration required."
category: common
keywords:
- Java serialVersionUID generator
- serialver Java class UID
- Java class version identifier
- serialVersionUID checker
- Java serialization tool
- Java class inspection
- Java class compatibility
- Java UID validation
- Java class analyzer
- serialver command line
features:
- Generate serialVersionUID for Java classes
- Inspect serial version UID of Java files
- Determine class compatibility for serialization
- Support colon-separated class lists
- Accept Java Virtual Machine options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# serialver

> Returns the serialVersionUID of classes.
> It does not set a security manager by default.
> More information: <https://docs.oracle.com/en/java/javase/20/docs/specs/man/serialver.html>.

- Display the serialVersionUID of a class:

`serialver {{classnames}}`

- Display the serialVersionUID for a colon-separated list of classes and resources:

`serialver -classpath {{path/to/directory}} {{classname1:classname2:...}}`

- Use a specific option from reference page of Java application launcher to the Java Virtual Machine:

`serialver -Joption {{classnames}}`
