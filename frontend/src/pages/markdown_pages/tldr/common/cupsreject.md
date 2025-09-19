---
title: "Cups Reject - Control Printer Jobs | Online Free DevTools by Hexmos"
name: cupsreject
path: /freedevtools/tldr/common/cupsreject
canonical: "https://hexmos.com/freedevtools/tldr/common/cupsreject/"
description: "Control printer jobs with Cups Reject. Manage printer queues, reject print requests, and specify rejection reasons. Free online tool, no registration required."
category: common
keywords:
- cups printer reject
- printer job control
- cups queue management
- linux printer command
- macos printer command
- reject print requests
- cups administration
- printer error handling
- command line printing
- reject printer destination
features:
- Reject print jobs sent to specified printers or classes
- Specify a custom reason for job rejection
- Control print job rejection on a remote CUPS server
- Manage printer queues from the command line
- Disable printing to selected destinations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cupsreject

> Reject jobs sent to printers.
> Note: Destination is referred as a printer or a class of printers.
> See also: `cupsaccept`, `cupsenable`, `cupsdisable`, `lpstat`.
> More information: <https://www.cups.org/doc/man-cupsaccept.html>.

- Reject print jobs to the specified destinations:

`cupsreject {{destination1 destination2 ...}}`

- Specify a different server:

`cupsreject -h {{server}} {{destination1 destination2 ...}}`

- Specify a reason string ("Reason Unknown" by default):

`cupsreject -r {{reason}} {{destination1 destination2 ...}}`
