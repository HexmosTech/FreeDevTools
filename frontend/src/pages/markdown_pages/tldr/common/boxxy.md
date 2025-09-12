---
title: "Redirect Files with Boxxy - Manage XDG Paths | Free DevTools"
name: boxxy
path: /freedevtools/tldr/common/boxxy
canonical: "https://hexmos.com/freedevtools/tldr/common/boxxy/"
description: "Redirect file paths with Boxxy, managing XDG paths for non-compliant programs.  Control file access and customize program behavior. Free online tool, no registration required."
category: common
keywords:
- XDG path redirection
- File path manager
- Boxxy configuration
- Program file redirect
- Command-line redirect tool
- Linux file redirection
- macOS file redirection
- Environment Variable control
- Home directory configuration
- Application file mapping
features:
- Redirect program file locations
- Scan for redirection rule suggestions
- Trace program file access
- Apply redirection rules directly
- View and edit Boxxy configuration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# boxxy

> Redirect file locations for programs that don't respect the XDG standards.
> More information: <https://github.com/queer/boxxy>.

- Run a program with file redirections defined in `~/.config/boxxy/boxxy.yaml`:

`boxxy {{program}}`

- Scan your home directory for rule suggestions:

`boxxy scan`

- Trace what files a program touches and save a report in `boxxy-report.txt` in the current directory:

`boxxy {{[-t|--trace]}} {{program}}`

- Pass a redirection rule directly on the terminal:

`boxxy {{[-r|--rule]}} {{path/to/file_or_directory}}:{{path/to/redirection}}:{{file|directory}} {{program}}`

- View the config file:

`boxxy config`

- Display help:

`boxxy -h`
