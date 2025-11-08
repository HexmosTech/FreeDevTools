---
title: "PlatformIO Check - Validate Project Code | Online Free DevTools by Hexmos"
name: pio-check
path: "/freedevtools/tldr/pio/pio-check/"
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-check/"
description: "Validate PlatformIO project code with PlatformIO Check. Perform static analysis and identify potential defects in your code. Free online tool, no registration required."
category: common
keywords:
- PlatformIO static analysis
- PlatformIO code check
- Pio project validation
- PlatformIO linting
- Pio code quality
- Pio defect detection
- PlatformIO build analysis
- PlatformIO environment check
- Pio project directory check
- PlatformIO project analysis
features:
- Perform static analysis on PlatformIO projects
- Check for defects in PlatformIO project code
- Analyze code for specific environments
- Report defects based on severity levels
- Provide detailed information during environment processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pio check

> Perform a static analysis check on a PlatformIO project.
> More information: <https://docs.platformio.org/en/latest/core/userguide/cmd_check.html>.

- Perform a basic analysis check on the current project:

`pio check`

- Perform a basic analysis check on a specific project:

`pio check {{[-d|--project-dir]}} {{project_dir}}`

- Perform an analysis check for a specific environment:

`pio check {{[-e|--environment]}} {{environment}}`

- Perform an analysis check and only report a specified defect severity type:

`pio check --severity {{low|medium|high}}`

- Perform an analysis check and show detailed information when processing environments:

`pio check {{[-v|--verbose]}}`
