---
title: "GitHub Run - View Workflow Runs | Free DevTools"
name: gh-run
path: /freedevtools/tldr/common/gh-run
canonical: "https://hexmos.com/freedevtools/tldr/common/gh-run/"
description: "View GitHub Actions workflow runs with gh run. Inspect job logs, check run statuses, and re-run workflows effortlessly. Free online tool, no registration required."
category: common
keywords:
- github actions workflow run
- github run command
- gh run view
- gh run watch
- gh run rerun
- ci cd pipeline
- github actions logs
- workflow automation
- github cli tools
- github actions debugger
features:
- View detailed information about workflow runs
- Watch active runs until completion
- Re-run specific GitHub Actions workflows
- Display job logs for debugging purposes
- Check workflow status and exit on failure
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh run

> View, run and watch recent GitHub Actions workflow runs.
> More information: <https://cli.github.com/manual/gh_run>.

- Interactively select a run to see information about the jobs:

`gh run view`

- Display information about a specific run:

`gh run view {{workflow_run_number}}`

- Display information about the steps of a job:

`gh run view {{[-j|--job]}} {{job_number}}`

- Display the log of a job:

`gh run view {{[-j|--job]}} {{job_number}} --log`

- Check a specific workflow and exit with a non-zero status if the run failed:

`gh run view {{workflow_run_number}} --exit-status && {{echo "run pending or passed"}}`

- Interactively select an active run and wait until it's done:

`gh run watch`

- Display the jobs for a run and wait until it's done:

`gh run watch {{workflow_run_number}}`

- Re-run a specific workflow:

`gh run rerun {{workflow_run_number}}`
