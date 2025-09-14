---
title: "Control Bash Scripts - Manage Bash-it | Free DevTools"
name: bash-it
path: /freedevtools/tldr/common/bash-it
canonical: "https://hexmos.com/freedevtools/tldr/common/bash-it/"
description: "Control your Bash scripts with Bash-it. Update, reload, and restart your Bash environment with ease. Free online tool, no registration required."
category: common
keywords:
- bash script manager
- bash configuration tool
- bash environment update
- bash it reload profile
- bash command search
- linux bash alias
- macos bash completion
- bash it plugin manager
- shell script update tool
- bash it doctor check
features:
- Update Bash-it to the latest version
- Reload the Bash profile for immediate changes
- Restart the Bash shell with a single command
- Diagnose Bash configuration errors
- Search and manage Bash-it components
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bash-it

> A collection of community contributed Bash commands and scripts for Bash 3.2+.
> More information: <https://bash-it.readthedocs.io/en/latest/>.

- Update Bash-it to the latest stable/development version:

`bash-it update {{stable|dev}}`

- Reload Bash profile (set `BASH_IT_AUTOMATIC_RELOAD_AFTER_CONFIG_CHANGE` to non-empty value for an automatic reload):

`bash-it reload`

- Restart Bash:

`bash-it restart`

- Reload Bash profile with enabled error and warning logging:

`bash-it doctor`

- Reload Bash profile with enabled error/warning/entire logging:

`bash-it doctor {{errors|warnings|all}}`

- Search for Bash-it aliases/plugins/completions:

`bash-it search {{alias|plugin|completion}}`

- Search for Bash-it aliases/plugins/completions and enable/disable all found items:

`bash-it search --{{enable|disable}} {{alias|plugin|completion}}`
