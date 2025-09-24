---
title: "Sonar Scanner - Analyze Code | Online Free DevTools by Hexmos"
name: sonar-scanner
path: /freedevtools/tldr/common/sonar-scanner
canonical: "https://hexmos.com/freedevtools/tldr/common/sonar-scanner/"
description: "Analyze code with Sonar Scanner. Scan projects for bugs, vulnerabilities, and code smells using a generic scanner. Free online tool, no registration required."
category: common
keywords:
- sonar scanner analysis
- code analysis tool
- static code analysis
- SonarQube scanner
- project quality analysis
- vulnerability scanner
- bug detection software
- code smell detection
- java code analysis
- sonar project scanner
features:
- Scan projects without build tools
- Analyze code quality and security
- Customize analysis with properties files
- Display debugging information during scan
- Configure project settings via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sonar-scanner

> A generic scanner for SonarQube projects that do not use build tools such as Maven, Gradle, or Ant.
> More information: <https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/>.

- Scan a project with configuration file in your project's root directory named `sonar-project.properties`:

`sonar-scanner`

- Scan a project using configuration file other than `sonar-project.properties`:

`sonar-scanner {{[-D|--define]}} {{project.settings=myproject.properties}}`

- Print debugging information:

`sonar-scanner {{[-X|--debug]}}`

- Display help:

`sonar-scanner {{[-h|--help]}}`
