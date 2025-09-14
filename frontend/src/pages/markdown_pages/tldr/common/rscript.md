---
title: "Execute R Scripts - Run R Code | Free DevTools"
name: rscript
path: /freedevtools/tldr/common/rscript
canonical: "https://hexmos.com/freedevtools/tldr/common/rscript/"
description: "Execute R scripts with Rscript, the command-line interface for the R programming language. Process data analysis tasks efficiently. Free online tool, no registration required."
category: common
keywords:
- R script execution
- R code runner
- command-line R interpreter
- R batch processing
- R data analysis script
- Rscript vanilla mode
- R expression execution
- linux R script
- macos R script
- rscript version control
features:
- Run R scripts from the command line
- Execute R code in vanilla mode
- Evaluate R expressions directly
- Display the installed R version
- Automate data processing tasks using R scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Rscript

> Run a script with the R programming language.
> More information: <https://manned.org/Rscript>.

- Run a script:

`Rscript {{path/to/file.R}}`

- Run a script in vanilla mode (i.e. a blank session that doesn't save the workspace at the end):

`Rscript --vanilla {{path/to/file.R}}`

- Execute one or more R expressions:

`Rscript -e {{expression1}} -e {{expression2}}`

- Display R version:

`Rscript --version`
