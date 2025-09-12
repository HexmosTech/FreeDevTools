---
title: "uv - Publish Python Packages | Free DevTools"
name: uv-publish
path: /freedevtools/tldr/common/uv-publish
canonical: "https://hexmos.com/freedevtools/tldr/common/uv-publish/"
description: "Publish Python packages easily with uv. Distribute your Python projects to PyPI or other package indexes. Free online tool, no registration required."
category: common
keywords:
- uv publish package
- Python package publisher
- PyPI uploader
- uv distribute package
- Python wheel publisher
- Python sdist publisher
- uv package index
- uv TestPyPI
- uv API token
- uv upload
features:
- Publish Python packages to PyPI
- Publish Python packages to custom index URLs
- Authenticate using username and password
- Authenticate using API tokens
- Publish specific distribution files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv publish

> Upload distributions to an index.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-publish>.

- Publish packages from `dist/` directory (default behavior):

`uv publish`

- Publish to a specific repository URL:

`uv publish --publish-url {{https://upload.pypi.org/legacy/}}`

- Publish using a specific username and password:

`uv publish {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}}`

- Publish using an API token:

`uv publish {{[-t|--token]}} {{your_api_token}}`

- Publish specific distribution files:

`uv publish {{path/to/dist/*.whl}} {{path/to/dist/*.tar.gz}}`

- Publish to TestPyPI for testing:

`uv publish --publish-url https://test.pypi.org/legacy/`
