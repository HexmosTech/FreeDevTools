---
title: "TMT Run - Execute Test Steps | Free DevTools"
name: tmt-run
path: /freedevtools/tldr/linux/tmt-run
canonical: "https://hexmos.com/freedevtools/tldr/linux/tmt-run/"
description: "Execute test steps with TMT Run.  Easily manage and run test plans, discover tests, and adjust provision options. Free online tool, no registration required."
category: linux
keywords:
  - tmt test execution
  - tmt test runner
  - tmt plan execution
  - tmt test automation
  - tmt command line
  - tmt test discovery
  - tmt provision options
  - tmt interactive testing
  - tmt dry run
  - tmt report generation
features:
  - Execute all or selected test steps within a plan.
  - Discover tests and preview execution without running them.
  - Customize provision step options for flexible test environments.
  - Run specific plans and tests using name filters for targeted execution.
  - Generate and open interactive reports to visualize test results.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tmt run

> Execute tmt test steps. By default, all steps are run.
> More information: <https://tmt.readthedocs.io/en/stable/overview.html#run>.

- Run all test steps for each plan:

`tmt run`

- Run only the discover step to show what tests would be run:

`tmt run discover -v`

- Run all steps and adjust the provision step options:

`tmt run --all provision --how {{container}} --image {{fedora:rawhide}}`

- Run only selected plans and tests:

`tmt run plan --name {{/plan/name}} test --name {{/test/name}}`

- Show results from the last run in a web browser:

`tmt run --last report --how {{html}} --open`

- Run tests with the provided context:

`tmt run --context {{key=value}} -c {{distro=fedora}}`

- Run tests interactively (debug test code in the middle of a test):

`tmt run --all execute --how {{tmt}} --interactive`

- Use dry mode to see what actions would happen and use the highest verbosity:

`tmt run --dry -vvv`
