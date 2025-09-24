---
title: "UV - Add Package Dependencies | Online Free DevTools by Hexmos"
name: uv-add
path: /freedevtools/tldr/uv/uv-add
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-add/"
description: "Add Python package dependencies with UV. Manage project dependencies efficiently using the command line. Free online tool, no registration required."
category: common
keywords:
- Python package adder
- UV dependency manager
- pyproject.toml editor
- Python dependency resolver
- PEP 508 dependency management
- Python optional dependencies
- Python development dependencies
- Python editable installs
- Python package extra features
- UV package version control
features:
- Add latest version of a package
- Add multiple packages simultaneously
- Add packages with version requirements
- Add packages to optional dependency groups
- Add packages as editable installs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uv add

> Add package dependencies to the `pyproject.toml` file.
> Packages are specified according to <https://peps.python.org/pep-0508/>.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-add>.

- Add the latest version of a package:

`uv add {{package}}`

- Add multiple packages:

`uv add {{package1 package2 ...}}`

- Add a package with a version requirement:

`uv add {{package>=1.2.3}}`

- Add packages to an optional dependency group, which will be included when published:

`uv add --optional {{optional}} {{package1 package2 ...}}`

- Add packages to a local group, which will not be included when published:

`uv add --group {{group}} {{package1 package2 ...}}`

- Add packages to the dev group, shorthand for `--group dev`:

`uv add --dev {{package1 package2 ...}}`

- Add package as editable:

`uv add --editable {{path/to/package}}/`

- Enable an extra when installing package, may be provided multiple times:

`uv add {{package}} --extra {{extra_feature}}`
