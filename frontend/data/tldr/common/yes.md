---
title: "Output Yes - Automate Prompts with Linux 'yes' Command | Online Free DevTools by Hexmos"
name: yes
path: "/freedevtools/tldr/common/yes/"
canonical: "https://hexmos.com/freedevtools/tldr/common/yes/"
description: "Automate prompts with the 'yes' command in Linux. Repeatedly output strings, bypass install prompts, and streamline command-line interactions. Free online tool, no registration required."
category: common
keywords:
- Linux yes command
- Automate command line prompts
- Bash scripting yes
- Repeated output command
- Command line automation linux
- apt-get auto yes
- Shell script automation
- Linux prompt bypass
- macOS yes command
- Command line interface automation
features:
- Repeatedly output a specified string
- Automate responses to command-line prompts
- Bypass interactive prompts in scripts
- Accept default options automatically
- Streamline package installations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yes

> Output something repeatedly.
> This command is commonly used to answer yes to every prompt by install commands (such as `apt-get`).
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/yes-invocation.html>.

- Repeatedly output "message":

`yes {{message}}`

- Repeatedly output "y":

`yes`

- Accept everything prompted by the `apt-get` command:

`yes | sudo apt-get install {{program}}`

- Repeatedly output a newline to always accept the default option of a prompt:

`yes ''`
