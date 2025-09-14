---
title: "Publish Python Packages - Upload with Twine | Free DevTools"
name: twine
path: /freedevtools/tldr/common/twine
canonical: "https://hexmos.com/freedevtools/tldr/common/twine/"
description: "Upload Python packages with Twine. Distribute your Python code easily using the command line. Free online tool, no registration required."
category: common
keywords:
- python package upload
- pypi upload twine
- python distribution
- twine package manager
- command line upload python
- python package publishing
- twine pypi
- wheel upload twine
- source distribution upload
- python package deployment
features:
- Upload packages to PyPI
- Verify package rendering on PyPI
- Upload using custom configuration files
- Skip existing files during upload
- Upload with verbose output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# twine

> Utility for publishing Python packages on PyPI.
> More information: <https://twine.readthedocs.io/en/stable/#commands>.

- Upload to PyPI:

`twine upload dist/*`

- Upload to the Test PyPI repository to verify things look right:

`twine upload {{[-r|--repository]}} testpypi dist/*`

- Upload to PyPI with a specified username and password:

`twine upload {{[-u|--username]}} {{username}} {{[-p|--password]}} {{password}} dist/*`

- Upload to an alternative repository URL:

`twine upload --repository-url {{repository_url}} dist/*`

- Check that your distribution's long description should render correctly on PyPI:

`twine check dist/*`

- Upload using a specific pypirc configuration file:

`twine upload --config-file {{configuration_file}} dist/*`

- Continue uploading files if one already exists (only valid when uploading to PyPI):

`twine upload --skip-existing dist/*`

- Upload to PyPI showing detailed information:

`twine upload --verbose dist/*`
