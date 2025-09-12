---
title: "uv run - Execute Python Scripts | Free DevTools"
name: uv-run
path: /freedevtools/tldr/common/uv-run
canonical: "https://hexmos.com/freedevtools/tldr/common/uv-run/"
description: "Execute Python scripts with uv run. Manage project dependencies, install packages on demand, and run in isolated environments. Free online tool, no registration required."
category: common
keywords:
- python script runner
- uv run python
- python dependency manager
- python module execution
- venv manager
- virtual environment runner
- uv package installer
- python project environment
- uv isolated execution
- uv no sync
features:
- Run Python scripts directly
- Execute Python modules with `-m` flag
- Install packages on demand for specific commands
- Run scripts with project requirements
- Execute in an isolated environment
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv run

> Run a command or script in the project environment.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-run>.

- Run a Python script:

`uv run {{path/to/script.py}}`

- Run a Python module:

`uv run {{[-m|--module]}} {{module_name}}`

- Run a command with additional packages installed temporarily:

`uv run {{[-w|--with]}} {{package}} {{command}}`

- Run a script with packages from a requirements file:

`uv run --with-requirements {{path/to/requirements.txt}} {{path/to/script.py}}`

- Run in an isolated environment (no project dependencies):

`uv run --isolated {{path/to/script.py}}`

- Run without syncing the environment first:

`uv run --no-sync {{command}}`
