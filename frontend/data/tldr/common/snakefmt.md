---
title: "Snakefmt - Format Snakemake Files | Online Free DevTools by Hexmos"
name: snakefmt
path: "/freedevtools/tldr/common/snakefmt/"
canonical: "https://hexmos.com/freedevtools/tldr/common/snakefmt/"
description: "Format Snakemake files instantly with Snakefmt. Ensure consistent code style and improve readability for easier collaboration. Free online tool, no registration required."
category: common
keywords:
- Snakemake formatter
- Snakefile formatting
- Python workflow formatting
- Snakemake code style
- Workflow management system
- Snakefmt command line
- Snakemake linting
- Snakemake best practices
- Bioinformatics workflow tools
- Data science pipeline
features:
- Format a single Snakefile
- Format all Snakefiles in a directory recursively
- Use a specific configuration file for formatting
- Enforce maximum line length constraints
- Display changes without applying them (dry run)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# snakefmt

> Format Snakemake files.
> More information: <https://github.com/snakemake/snakefmt>.

- Format a specific Snakefile:

`snakefmt {{path/to/snakefile}}`

- Format all Snakefiles recursively in a specific directory:

`snakefmt {{path/to/directory}}`

- Format a file using a specific configuration file:

`snakefmt --config {{path/to/config.toml}} {{path/to/snakefile}}`

- Format a file using a specific maximum line length:

`snakefmt --line-length {{100}} {{path/to/snakefile}}`

- Display the changes that would be performed without performing them (dry-run):

`snakefmt --diff {{path/to/snakefile}}`
