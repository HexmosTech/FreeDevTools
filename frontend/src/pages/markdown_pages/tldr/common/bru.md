---
title: "Bruno CLI - Run API Requests | Free DevTools"
name: bru
path: /freedevtools/tldr/common/bru
canonical: "https://hexmos.com/freedevtools/tldr/common/bru/"
description: "Run API requests efficiently with Bruno CLI. Execute API tests, manage environments, and generate output reports. Free online tool, no registration required."
category: common
keywords:
- API request runner
- Bruno CLI runner
- API testing command line
- Bruno API client
- API request execution
- Bruno request automation
- API environment management
- Bru CLI tool
- API test automation
- Bru request runner
features:
- Execute API requests from the command line
- Run requests using specific environments
- Generate output reports for test results
- Manage API test automation
- Pass environment variables to API requests
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bru

> CLI for Bruno, an Opensource IDE for exploring and testing APIs.
> More information: <https://docs.usebruno.com/bru-cli/overview>.

- Run all request files from the current directory:

`bru run`

- Run a single request from the current directory by specifying its filename:

`bru run {{file.bru}}`

- Run requests using an environment:

`bru run --env {{environment_name}}`

- Run requests using an environment with a variable:

`bru run --env {{environment_name}} --env-var {{variable_name}}={{variable_value}}`

- Run request and collect the results in an output file:

`bru run --output {{path/to/output.json}}`

- Display help:

`bru run --help`
