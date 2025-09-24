---
title: "Create Jupyter Notebooks - Analyze Data | Online Free DevTools by Hexmos"
name: jupyter
path: /freedevtools/tldr/common/jupyter
canonical: "https://hexmos.com/freedevtools/tldr/common/jupyter/"
description: "Create and share interactive data analysis notebooks with Jupyter. Analyze data, perform scientific computing and machine learning tasks. Free online tool, no registration required."
category: common
keywords:
- jupyter notebook editor
- ipynb notebook creator
- data analysis notebook
- scientific computing tool
- machine learning notebook
- jupyter notebook converter
- web-based coding environment
- python notebook editor
- data visualization tool
- interactive computing platform
features:
- Start a local Jupyter notebook server
- Export notebooks to various formats like HTML or PDF
- Manage Jupyter notebooks on a specific port
- List running Jupyter notebook servers
- Start JupyterLab in the current directory
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jupyter

> Web application to create and share documents that contain code, visualizations and notes.
> Primarily used for data analysis, scientific computing and machine learning.
> More information: <https://docs.jupyter.org/en/latest/>.

- Start a Jupyter notebook server in the current directory:

`jupyter notebook`

- Open a specific Jupyter notebook:

`jupyter notebook {{example.ipynb}}`

- Export a specific Jupyter notebook into another format:

`jupyter nbconvert --to {{html|markdown|pdf|script}} {{example.ipynb}}`

- Start a server on a specific port:

`jupyter notebook --port {{port}}`

- List currently running notebook servers:

`jupyter notebook list`

- Stop the currently running server:

`jupyter notebook stop`

- Start JupyterLab, if installed, in the current directory:

`jupyter lab`
