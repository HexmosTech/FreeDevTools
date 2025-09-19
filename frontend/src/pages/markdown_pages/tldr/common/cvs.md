---
title: "Control CVS Versions - Manage Code Revisions | Online Free DevTools by Hexmos"
name: cvs
path: /freedevtools/tldr/common/cvs
canonical: "https://hexmos.com/freedevtools/tldr/common/cvs/"
description: "Control code revisions with CVS (Concurrent Versions System). Manage versions, track changes, and collaborate on projects efficiently. Free online tool, no registration required."
category: common
keywords:
- CVS version control
- Concurrent Versions System
- Code revision management
- Repository management
- Version tracking system
- CVS commit changes
- CVS update repository
- CVS checkout project
- Linux CVS commands
- macOS CVS commands
features:
- Manage concurrent access to files
- Track changes to source code
- Maintain a history of revisions
- Facilitate collaboration on projects
- Branch and merge code versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cvs

> Concurrent Versions System, a revision control system.
> More information: <https://manned.org/cvs>.

- Create a new repository (requires the `CVSROOT` environment variable to be set externally):

`cvs -d {{path/to/repository}} init`

- Add a project to the repository:

`cvs import -m "{{message}}" {{project_name}} {{version}} {{vendor}}`

- Checkout a project:

`cvs checkout {{project_name}}`

- Show changes made to files:

`cvs diff {{path/to/file}}`

- Add a file:

`cvs add {{path/to/file}}`

- Commit a file:

`cvs commit -m "{{message}}" {{path/to/file}}`

- Update the working directory from the remote repository:

`cvs update`
