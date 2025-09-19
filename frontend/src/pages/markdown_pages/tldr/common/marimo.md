---
title: "Create marimo Notebooks - Reactive Python IDE | Online Free DevTools by Hexmos"
name: marimo
path: /freedevtools/tldr/common/marimo
canonical: "https://hexmos.com/freedevtools/tldr/common/marimo/"
description: "Create reactive Python notebooks with marimo, a cutting-edge IDE for interactive data science. Develop and share dynamic apps effortlessly. Free online tool, no registration required."
category: common
keywords:
- reactive python notebook
- marimo ide
- interactive data science
- python notebook environment
- data visualization tools
- streamlit alternative
- jupyter alternative
- reactive programming python
- data app development
- marimo tutorial
features:
- Create and edit interactive Python notebooks.
- Run notebooks as read-only web applications.
- Start an interactive tutorial to learn marimo.
- Configure marimo server settings.
- View command-specific help documentation.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# marimo

> A reactive Python notebook environment.
> Combines features of Jupyter, Streamlit, and other notebook tools with reactive execution.
> More information: <https://docs.marimo.io/cli>.

- Create or edit notebooks by starting a marimo server:

`marimo edit`

- Start a marimo server on a specific port without launching a browser:

`marimo edit {{[-p|--port]}} {{port_number}} --headless`

- Edit a specific notebook:

`marimo edit {{path/to/notebook.py}}`

- Run a marimo notebook as an app in read-only mode:

`marimo run {{path/to/notebook.py}}`

- Start an interactive tutorial to learn marimo:

`marimo tutorial {{intro|components|dataflow|io}}`

- View command-specific help:

`marimo {{edit|run|tutorial|config|new|...}} --help`
