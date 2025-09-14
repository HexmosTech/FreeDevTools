---
title: "Kaggle CLI - Manage Datasets & Competitions | Free DevTools"
name: kaggle
path: /freedevtools/tldr/common/kaggle
canonical: "https://hexmos.com/freedevtools/tldr/common/kaggle/"
description: "Manage datasets and competitions with Kaggle CLI. Download data, submit predictions, and explore Kaggle's resources. Free online tool, no registration required."
category: common
keywords:
- Kaggle CLI
- Kaggle API
- Kaggle datasets
- Kaggle competitions
- Kaggle command line
- Python Kaggle
- Data science CLI
- Machine learning CLI
- Kaggle download
- Kaggle submit
features:
- View current Kaggle configuration values
- Download specific files from competitions
- Submit predictions to Kaggle competitions
- Explore Kaggle datasets via command line
- Manage Kaggle API keys
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kaggle

> Official CLI for Kaggle implemented in Python 3.
> More information: <https://github.com/Kaggle/kaggle-api>.

- View current configuration values:

`kaggle config view`

- Download a specific file from a competition dataset:

`kaggle competitions download {{competition}} {{[-f|--file]}} {{filename}}`
