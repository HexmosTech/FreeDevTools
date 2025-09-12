---
title: "Print Runmailcap - Control File Printing | Free DevTools"
name: print.runmailcap
path: /freedevtools/tldr/linux/print.runmailcap
canonical: "https://hexmos.com/freedevtools/tldr/linux/print.runmailcap/"
description: "Control file printing with Print Runmailcap. Print files from the command line effortlessly using run-mailcap. Free online tool, no registration required."
category: linux
keywords:
- linux print command
- run-mailcap print action
- command line printing linux
- file printing linux
- mime type processing linux
- linux default printer
- run-mailcap configuration
- terminal printing tool
- shell script printing
- linux file association
features:
- Print files using default run-mailcap configuration
- Execute print action via command line
- Process mime-type files for printing
- Utilize run-mailcap tool to control printing
- Specify filename for printing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# print

> An alias to a `run-mailcap`'s action print.
> Originally `run-mailcap` is used to process mime-type/file.
> More information: <https://manned.org/print>.

- Print action can be used to print any file on default run-mailcap tool:

`print {{filename}}`

- With `run-mailcap`:

`run-mailcap --action=print {{filename}}`
