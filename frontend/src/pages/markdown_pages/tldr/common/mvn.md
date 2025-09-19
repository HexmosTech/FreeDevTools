---
title: "Maven Build Tool - Manage Java Projects | Online Free DevTools by Hexmos"
name: mvn
path: /freedevtools/tldr/common/mvn
canonical: "https://hexmos.com/freedevtools/tldr/common/mvn/"
description: "Manage Java projects effectively with Maven Build Tool. Automate builds, manage dependencies, and streamline development workflows. Free online tool, no registration required."
category: common
keywords:
- java build automation
- maven project management
- dependency management maven
- maven command line
- java package manager
- maven build lifecycle
- maven repository
- maven clean install
- common command maven
- cross platform maven
features:
- Compile Java projects
- Package compiled code into distributable formats
- Install packages into a local Maven repository
- Clean build artifacts from the target directory
- Execute Java classes with a main method
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mvn

> Apache Maven: build and manage Java-based projects.
> More information: <https://manned.org/mvn>.

- Compile a project:

`mvn compile`

- Compile and package the compiled code in its distributable format, such as a `jar`:

`mvn package`

- Compile and package, skipping unit tests:

`mvn package {{[-D|--define]}} skipTests`

- Install the built package in local maven repository. (This will invoke the compile and package commands too):

`mvn install`

- Delete build artifacts from the target directory:

`mvn clean`

- Do a clean and then invoke the package phase:

`mvn clean package`

- Clean and then package the code with a given build profile:

`mvn clean {{[-P|--activate-profiles]}} {{profile}} package`

- Run a class with a main method:

`mvn exec:java {{[-D|--define]}} exec.mainClass="{{com.example.Main}}" {{[-D|--define]}} exec.args="{{argument1 argument2 ...}}"`
