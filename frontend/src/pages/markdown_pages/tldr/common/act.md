---
title: "Act - Execute GitHub Actions Locally | Online Free DevTools by Hexmos"
name: act
path: /freedevtools/tldr/common/act
canonical: "https://hexmos.com/freedevtools/tldr/common/act/"
description: "Execute GitHub Actions locally with Act. Test your workflows and event triggers before committing to GitHub. Free online tool, no registration required."
category: common
keywords:
- github actions local execution
- docker workflow testing
- act command line tool
- github actions runner local
- ci/cd local testing
- workflow validation offline
- github actions debug local
- github actions local development
- yaml workflow parser
- local github actions emulator
features:
- Execute GitHub Actions locally using Docker
- List available jobs in a workflow
- Run specific events and jobs
- Perform dry runs to validate workflows
- Display verbose logs for debugging
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# act

> Execute GitHub Actions locally using Docker.
> More information: <https://manned.org/act>.

- List the available jobs:

`act {{[-l|--list]}}`

- Run the default event:

`act`

- Run a specific event:

`act {{event_type}}`

- Run a specific job:

`act {{[-j|--job]}} {{job_id}}`

- Do [n]ot actually run the actions (i.e. a dry run):

`act {{[-n|--dryrun]}}`

- Show verbose logs:

`act {{[-v|--verbose]}}`

- Run a specific workflow with the push event:

`act push {{[-W|--workflows]}} {{path/to/workflow}}`
