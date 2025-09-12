---
title: "Validate Conda Environment - Conda Doctor | Free DevTools"
name: conda-doctor
path: /freedevtools/tldr/common/conda-doctor
canonical: "https://hexmos.com/freedevtools/tldr/common/conda-doctor/"
description: "Validate Conda environments easily with Conda Doctor. Diagnose issues, check dependencies, and ensure environment health using command-line interface. Free online tool, no registration required."
category: common
keywords:
- conda environment validation
- conda environment health check
- conda environment diagnosis
- conda environment report
- conda package manager issues
- conda dependency checker
- conda environment doctor
- python environment validator
- cross-platform conda doctor
- conda troubleshooting tool
features:
- Diagnose Conda environment issues
- Check environment for broken dependencies
- Generate a comprehensive health report
- Verify Conda package integrity
- Identify potential problems in Conda environments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# conda doctor

> Display a health report for your environment.
> More information: <https://docs.conda.io/projects/conda/en/latest/commands/doctor.html>.

- View report for the currently active environment:

`conda doctor`

- Specify an environment by name:

`conda doctor {{[-n|--name]}} {{environment_name}}`

- Specify an environment by its path:

`conda doctor {{[-p|--prefix]}} {{path/to/environment}}`

- Enable verbose output (Note: the `-v` flag can be repeated to increase verbosity):

`conda doctor {{[-v|--verbose]}}`
