---
title: "JFrog Control - Manage Artifactory & Xray with JF | Online Free DevTools by Hexmos"
name: jf
path: /freedevtools/tldr/common/jf
canonical: "https://hexmos.com/freedevtools/tldr/common/jf/"
description: "Control JFrog products instantly with JFrog CLI. Manage Artifactory, Xray, and Pipelines using command-line interface. Free online tool, no registration required."
category: common
keywords:
- jfrog cli management
- artifactory command line
- xray configuration
- pipelines automation
- distribution deployment
- mission control interactions
- artifact repository search
- configuration management jfrog
- devops workflow automation
- jfrog package management
features:
- Configure JFrog products via the command line
- Manage Artifactory configurations
- Search for artifacts in repositories
- Automate CI/CD pipelines with JFrog CLI
- Interact with multiple JFrog platforms
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jf

> Interact with JFrog products like Artifactory, Xray, Distribution, Pipelines and Mission Control.
> More information: <https://jfrog.com/help/r/jfrog-cli/usage>.

- Add a new configuration:

`jf config add`

- Show the current configuration:

`jf config show`

- Search for artifacts within the given repository and directory:

`jf rt search --recursive {{repostiory_name}}/{{path}}/`
