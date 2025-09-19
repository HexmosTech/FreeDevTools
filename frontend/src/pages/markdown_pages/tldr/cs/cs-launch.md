---
title: "Launch Application - Run Apps Directly with cs-launch | Online Free DevTools by Hexmos"
name: cs-launch
path: /freedevtools/tldr/cs/cs-launch
canonical: "https://hexmos.com/freedevtools/tldr/cs/cs-launch/"
description: "Launch application easily with cs-launch, running apps directly from Maven dependencies. Streamline development workflow. Free online tool, no registration required."
category: common
keywords:
- coursier launch application
- launch java application
- maven dependency launch
- cs launch command
- application launcher cli
- java application runner
- coursier cli tool
- application deployment tool
- command-line application launcher
- java dependency manager
features:
- Launch applications directly from Maven dependencies
- Specify application version for launching
- Define main class for application launch
- Customize Java options and JVM memory settings
- Execute applications with command-line arguments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cs launch

> Launch an application from the name directly from Maven dependencies without the need of installing it.
> More information: <https://get-coursier.io/docs/cli-launch>.

- Launch a specific application with arguments:

`cs launch {{application_name}} -- {{argument1 argument2 ...}}`

- Launch a specific application version with arguments:

`cs launch {{application_name}}:{{application_version}} -- {{argument1 argument2 ...}}`

- Launch a specific version of an application specifying which is the main file:

`cs launch {{group_id}}:{{artifact_id}}:{{artifact_version}} --main-class {{path/to/main_class_file}}`

- Launch an application with specific Java options and JVM memory ones:

`cs launch --java-opt {{-Doption_name1:option_value1 -Doption_name2:option_value2 ...}} --java-opt {{-Xjvm_option1 -Xjvm_option2 ...}} {{application_name}}`
