---
title: "Cancel Print Jobs - Control Print Queue | Online Free DevTools by Hexmos"
name: cancel
path: /freedevtools/tldr/common/cancel
canonical: "https://hexmos.com/freedevtools/tldr/common/cancel/"
description: "Control print jobs with Cancel. Manage your print queue, cancel specific print jobs or all jobs. Free online tool, no registration required."
category: common
keywords:
- print job cancel
- cancel print command
- cups cancel jobs
- lp cancel printer
- linux cancel print
- macos cancel print
- cancel print queue
- cancel print server
- command line print cancel
- print management tools
features:
- Cancel the current job on the default printer
- Cancel all jobs owned by a specific user
- Cancel a specific job from a specific printer
- Cancel all jobs of all printers
- Cancel jobs from a specific server and delete job data
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cancel

> Cancel print jobs.
> See also: `lp`, `lpmove`, `lpstat`.
> More information: <https://openprinting.github.io/cups/doc/man-cancel.html>.

- Cancel the current job of the default printer (set with `lpoptions -d {{printer}}`):

`cancel`

- Cancel the jobs of the default printer owned by a specific [u]ser:

`cancel -u {{username}}`

- Cancel the current job of a specific printer:

`cancel {{printer}}`

- Cancel a specific job from a specific printer:

`cancel {{printer}}-{{job_id}}`

- Cancel [a]ll jobs of all printers:

`cancel -a`

- Cancel [a]ll jobs of a specific printer:

`cancel -a {{printer}}`

- Cancel the current job of a specific server and then delete ([x]) job data files:

`cancel -h {{server}} -x`
