---
title: "Control Hugging Face Hub - Manage Models and Data | Online Free DevTools by Hexmos"
name: huggingface-cli
path: "/freedevtools/tldr/common/huggingface-cli/"
canonical: "https://hexmos.com/freedevtools/tldr/common/huggingface-cli/"
description: "Control Hugging Face Hub easily with huggingface-cli. Manage models, datasets, and login credentials effortlessly using command line. Free online tool, no registration required."
category: common
keywords:
- Hugging Face Hub control
- Hugging Face command line
- Hugging Face model manager
- Hugging Face dataset manager
- Hugging Face repository manager
- Hugging Face cache management
- Hugging Face CLI login
- Hugging Face CLI download
- Hugging Face CLI upload
- Hugging Face environment variables
features:
- Login and manage Hugging Face Hub accounts.
- Download models and datasets from repositories.
- Upload files and directories to Hugging Face Hub.
- Scan and delete the Hugging Face cache.
- Print environment information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# huggingface-cli

> Interact with Hugging Face Hub.
> Login, manage local cache, download or upload files.
> More information: <https://huggingface.co/docs/huggingface_hub/guides/cli>.

- Login to Hugging Face Hub:

`huggingface-cli login`

- Display the name of the logged in user:

`huggingface-cli whoami`

- Log out:

`huggingface-cli logout`

- Print information about the environment:

`huggingface-cli env`

- Download files from an repository and print out the path (omit filenames to download entire repository):

`huggingface-cli download --repo-type {{repo_type}} {{repo_id}} {{filename1 filename2 ...}}`

- Upload an entire folder or a file to Hugging Face:

`huggingface-cli upload --repo-type {{repo_type}} {{repo_id}} {{path/to/local_file_or_directory}} {{path/to/repo_file_or_directory}}`

- Scan cache to see downloaded repositories and their disk usage:

`huggingface-cli scan-cache`

- Delete the cache interactively:

`huggingface-cli delete-cache`
