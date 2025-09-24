---
title: "Trace Route Difference - Display Changed Paths | Online Free DevTools by Hexmos"
name: sc_tracediff
path: /freedevtools/tldr/common/sc_tracediff
canonical: "https://hexmos.com/freedevtools/tldr/common/sc_tracediff/"
description: "Display trace route differences with sc_tracediff. Analyze network paths, identify routing changes, and troubleshoot network issues. Free online tool, no registration required."
category: common
keywords:
- trace route difference
- network path analysis
- routing change detection
- warts file analysis
- scamper trace route
- command line traceroute
- network troubleshooting linux
- linux trace route
- macos trace route
- network diagnosis tools
features:
- Compare traceroute paths between two warts files.
- Identify traceroute paths that have changed over time.
- Display all traceroutes, including those with no changes.
- Show DNS names instead of IP addresses for readability.
- Analyze network path changes using scamper's sc_tracediff.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sc_tracediff

> Display traceroute paths where the path has changed.
> More information: <https://www.caida.org/catalog/software/scamper/>.

- Show the difference between traceroutes in two `warts` files:

`sc_tracediff {{path/to/file1.warts}} {{path/to/file2.warts}}`

- Show the difference between the traceroutes in two `warts` files, including those that have not changed:

`sc_tracediff -a {{path/to/file1.warts}} {{path/to/file2.warts}}`

- Show the difference between the traceroutes in two `warts` files and try to show DNS names and not IP addresses if possible:

`sc_tracediff -n {{path/to/file1.warts}} {{path/to/file2.warts}}`
