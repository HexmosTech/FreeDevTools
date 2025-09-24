---
title: "Initialize DVC - Manage Data Versions | Online Free DevTools by Hexmos"
name: dvc-init
path: /freedevtools/tldr/dvc/dvc-init
canonical: "https://hexmos.com/freedevtools/tldr/dvc/dvc-init/"
description: "Initialize data versioning with DVC. Track and manage datasets, experiments, and models. Free online tool, no registration required."
category: common
keywords:
- dvc init
- data version control
- machine learning data management
- data pipeline management
- data versioning tool
- dvc git integration
- dvc no scm
- dvc subdirectory
- experiment tracking
- model management
features:
- Initialize a new DVC repository.
- Initialize DVC without Git support.
- Initialize DVC in a subdirectory of a project.
- Enable data versioning for machine learning projects.
- Manage data dependencies and track changes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dvc init

> Initialize a new local DVC repository.
> More information: <https://dvc.org/doc/command-reference/init>.

- Initialize a new local repository:

`dvc init`

- Initialize DVC without Git:

`dvc init --no-scm`

- Initialize DVC in a subdirectory:

`cd {{path/to/subdir}} && dvc init --sudir`
