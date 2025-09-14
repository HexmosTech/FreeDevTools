---
title: "IFS Control - Manage Shell Delimiters | Free DevTools"
name: ifs
path: /freedevtools/tldr/common/ifs
canonical: "https://hexmos.com/freedevtools/tldr/common/ifs/"
description: "Control shell delimiters with IFS (Internal Field Separator). Customize word splitting in shell scripts for precise data manipulation. Free online tool, no registration required."
category: common
keywords:
- shell delimiter control
- IFS variable management
- word splitting configuration
- bash IFS modification
- unix shell scripting
- linux IFS settings
- macos IFS control
- environment variable editing
- command-line delimiter tool
- IFS default reset
features:
- View the current IFS value
- Change the IFS value
- Reset IFS to default settings
- Modify IFS in a subshell
- Customize word splitting behavior
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# IFS

> IFS (Internal Field Separator) is a special environment variable that defines the delimiter used for word splitting in Unix shells.
> The default value of IFS is a space, tab, and newline. The three characters serve as delimiters.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#Word-Splitting>.

- View the current IFS value:

`echo "$IFS"`

- Change the IFS value:

`IFS="{{:}}"`

- Reset IFS to default:

`IFS=$' \t\n'`

- Temporarily change the IFS value in a subshell:

`(IFS="{{:}}"; echo "{{one:two:three}}")`
