---
title: "Fly - Control Concourse CI Pipelines | Online Free DevTools by Hexmos"
name: fly
path: "/freedevtools/tldr/common/fly/"
canonical: "https://hexmos.com/freedevtools/tldr/common/fly/"
description: "Control Concourse CI pipelines with Fly. Manage targets, update configurations, and destroy pipelines using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- concourse ci fly
- concourse ci command line
- ci pipeline management
- fly cli tool
- concourse target configuration
- concourse pipeline update
- concourse pipeline destroy
- concourse ci automation
- concourse workflow control
- concourse ci deployment
features:
- Authenticate and manage Concourse CI targets
- Update and configure Concourse CI pipelines
- Unpause and control pipeline execution
- Sync local fly version with target server
- Destroy and manage pipeline lifecycles
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fly

> Tool for concourse-ci.
> More information: <https://concourse-ci.org/fly.html>.

- Authenticate with and save concourse target:

`fly {{[-t|--target]}} {{target_name}} login {{[-n|--team-name]}} {{team_name}} {{[-c|--concourse-url]}} {{https://ci.example.com}}`

- List targets:

`fly targets`

- List pipelines:

`fly {{[-t|--target]}} {{target_name}} pipelines`

- Upload or update a pipeline:

`fly {{[-t|--target]}} {{target_name}} set-pipeline {{[-c|--config]}} {{pipeline.yml}} {{[-p|--pipeline]}} {{pipeline_name}}`

- Unpause pipeline:

`fly {{[-t|--target]}} {{target_name}} unpause-pipeline {{[-p|--pipeline]}} {{pipeline_name}}`

- Show pipeline configuration:

`fly {{[-t|--target]}} {{target_name}} get-pipeline {{[-p|--pipeline]}} {{pipeline_name}}`

- Update local copy of fly:

`fly {{[-t|--target]}} {{target_name}} sync`

- Destroy pipeline:

`fly {{[-t|--target]}} {{target_name}} destroy-pipeline {{[-p|--pipeline]}} {{pipeline_name}}`
