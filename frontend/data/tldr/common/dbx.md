---
title: "DBX - Interact with Databricks | Online Free DevTools by Hexmos"
name: dbx
path: "/freedevtools/tldr/common/dbx/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dbx/"
description: "Interact with Databricks platform using DBX. Deploy workflows, sync files, and configure projects. Free online tool, no registration required."
category: common
keywords:
- databricks workflow deployment
- dbx project configuration
- dbfs file synchronization
- databricks command line interface
- dbx deploy workflow
- dbx sync dbfs
- dbx launch workflow
- databricks asset bundles
- dbx interactive tool
- dbx databricks commands
features:
- Deploy workflows to Databricks artifact storage
- Sync local files to DBFS and watch for changes
- Configure new DBX projects
- Launch deployed workflows
- Interact with the Databricks platform
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dbx

> Interact with the Databricks platform.
> Note: This tool has been retired and it is recommended to use Databricks Asset Bundles instead.
> More information: <https://dbx.readthedocs.io/en/latest/reference/cli/#dbx>.

- Create a new `dbx` project in the current working directory:

`dbx configure --profile {{DEFAULT}}`

- Sync local files from the specified path to DBFS and watch for changes:

`dbx sync dbfs --source {{path/to/directory}} --dest {{path/to/remote_directory}}`

- Deploy the specified workflow to artifact storage:

`dbx deploy {{workflow_name}}`

- Launch the specified workflow after deploying it:

`dbx launch {{workflow_name}}`
