---
title: "Xonsh Shell - Execute Python Commands | Free DevTools"
name: xonsh
path: /freedevtools/tldr/common/xonsh
canonical: "https://hexmos.com/freedevtools/tldr/common/xonsh/"
description: "Execute Python commands with Xonsh shell. Automate tasks and combine shell commands with Python scripts in a cross-platform environment. Free online tool, no registration required."
category: common
keywords:
- xonsh shell commands
- python powered shell
- cross platform shell
- unix shell automation
- shell scripting with python
- xonsh environment variables
- interactive xonsh session
- execute shell script
- xonsh configuration files
- linux shell alternative
features:
- Start an interactive xonsh shell session.
- Execute a single command from the command line.
- Run xonsh scripts from a file.
- Define environment variables for the shell process.
- Load custom configuration files for shell settings.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xonsh

> Python-powered, cross-platform, Unix-gazing shell.
> Write and mix sh/Python code in Xonsh (pronounced conch).
> More information: <https://xon.sh/contents.html>.

- Start an interactive shell session:

`xonsh`

- Execute a single command and then exit:

`xonsh -c "{{command}}"`

- Run commands from a script file and then exit:

`xonsh {{path/to/script_file.xonsh}}`

- Define environment variables for the shell process:

`xonsh -D{{name1}}={{value1}} -D{{name2}}={{value2}}`

- Load the specified `.xonsh` or `.json` configuration files:

`xonsh --rc {{path/to/file1.xonsh}} {{path/to/file2.json}}`

- Skip loading the `.xonshrc` configuration file:

`xonsh --no-rc`
