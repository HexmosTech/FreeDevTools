---
title: "Convert Jupyter Notebooks - Jupytext | Online Free DevTools by Hexmos"
name: jupytext
path: "/freedevtools/tldr/common/jupytext/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jupytext/"
description: "Convert Jupyter notebooks to various formats with Jupytext. Sync notebooks, update cells, and preserve outputs. Free online tool, no registration required."
category: common
keywords:
- Jupyter Notebook converter
- ipynb to py converter
- py to notebook converter
- Markdown to notebook
- Notebook synchronization
- Jupyter Notebook text format
- Jupyter notebook export
- Python notebook conversion
- Jupyter notebook management
- Jupytext command line
features:
- Convert Jupyter notebooks to plain text formats
- Synchronize notebook representations
- Update input cells while preserving outputs
- Convert notebooks to Python scripts
- Execute Markdown notebooks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jupytext

> Convert Jupyter notebooks to plain text documents, and back again.
> More information: <https://jupytext.readthedocs.io>.

- Turn a notebook into a paired `.ipynb`/`.py` notebook:

`jupytext --set-formats ipynb,py {{notebook.ipynb}}`

- Convert a notebook to a `.py` file:

`jupytext --to py {{notebook.ipynb}}`

- Convert a `.py` file to a notebook with no outputs:

`jupytext --to notebook {{notebook.py}}`

- Convert a `.md` file to a notebook and run it:

`jupytext --to notebook --execute {{notebook.md}}`

- Update the input cells in a notebook and preserve outputs and metadata:

`jupytext --update --to notebook {{notebook.py}}`

- Update all paired representations of a notebook:

`jupytext --sync {{notebook.ipynb}}`
