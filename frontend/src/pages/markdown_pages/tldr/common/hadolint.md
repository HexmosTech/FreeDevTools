---
title: "Validate Dockerfiles - Hadolint Linter | Online Free DevTools by Hexmos"
name: hadolint
path: /freedevtools/tldr/common/hadolint
canonical: "https://hexmos.com/freedevtools/tldr/common/hadolint/"
description: "Validate Dockerfiles with Hadolint, a Dockerfile linter. Detect errors and enforce best practices in your Docker configurations. Free online tool, no registration required."
category: common
keywords:
- dockerfile linting
- dockerfile validation
- dockerfile linter
- docker linting
- docker validation
- docker best practices
- container security
- dockerfile security
- hadolint cli
- dockerfile advisor
features:
- Lint Dockerfiles for errors and warnings
- Enforce best practices in Dockerfile configurations
- Output linting results in various formats (TTY, JSON, Checkstyle, CodeClimate, Codacy)
- Ignore specific linting rules
- Support trusted registries for secure Dockerfile analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hadolint

> Dockerfile linter.
> More information: <https://github.com/hadolint/hadolint>.

- Lint a Dockerfile:

`hadolint {{path/to/Dockerfile}}`

- Lint a Dockerfile, displaying the output in JSON format:

`hadolint --format {{json}} {{path/to/Dockerfile}}`

- Lint a Dockerfile, displaying the output in a specific format:

`hadolint --format {{tty|json|checkstyle|codeclimate|codacy}} {{path/to/Dockerfile}}`

- Lint a Dockerfile ignoring specific rules:

`hadolint --ignore {{DL3006}} --ignore {{DL3008}} {{path/to/Dockerfile}}`

- Lint multiple Dockerfiles using specific trusted registries:

`hadolint --trusted-registry {{docker.io}} --trusted-registry {{example.com}}:{{5000}} {{path/to/Dockerfile1 path/to/Dockerfile2 ...}}`
