---
title: "Run Nextflow Pipelines - Execute Bioinformatics Workflows | Free DevTools"
name: nextflow
path: /freedevtools/tldr/common/nextflow
canonical: "https://hexmos.com/freedevtools/tldr/common/nextflow/"
description: "Execute computational pipelines with Nextflow. Run bioinformatics workflows, manage dependencies, and track results efficiently. Free online tool, no registration required."
category: common
keywords:
- nextflow pipeline
- bioinformatics workflow
- computational pipeline execution
- nextflow DSL2
- workflow management system
- data processing pipeline
- nextflow resume
- nextflow containerization
- nextflow command-line
- scientific workflow automation
features:
- Execute computational pipelines using a domain-specific language (DSL).
- Manage dependencies and track provenance for reproducible research.
- Resume interrupted pipelines and reuse cached results.
- Integrate with container technologies like Docker and Singularity.
- Automate scientific workflows for genomics, proteomics, and more.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nextflow

> Run computational pipelines. Mostly used for bioinformatics workflows.
> More information: <https://www.nextflow.io>.

- Run a pipeline, use cached results from previous runs:

`nextflow run {{main.nf}} -resume`

- Run a specific release of a remote workflow from GitHub:

`nextflow run {{user/repo}} -revision {{release_tag}}`

- Run with a given work directory for intermediate files, save execution report:

`nextflow run {{workflow}} -work-dir {{path/to/directory}} -with-report {{report.html}}`

- Show details of previous runs in current directory:

`nextflow log`

- Remove cache and intermediate files for a specific run:

`nextflow clean -force {{run_name}}`

- List all downloaded projects:

`nextflow list`

- Pull the latest version of a remote workflow from Bitbucket:

`nextflow pull {{user/repo}} -hub bitbucket`

- Update Nextflow:

`nextflow self-update`
