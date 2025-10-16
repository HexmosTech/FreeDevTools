---
title: "Display Users - Monitor Logged-in Users with w | Online Free DevTools by Hexmos"
name: w
path: "/freedevtools/tldr/common/w/"
canonical: "https://hexmos.com/freedevtools/tldr/common/w/"
description: "Monitor logged-in users efficiently with w command. Track user activity and identify idle sessions on Linux systems with ease. Free online tool, no registration required."
category: common
keywords:
- logged in users
- display users
- linux who is logged in
- monitor user activity
- user session information
- w command linux
- terminal user tracking
- system user info
- active user process
- logged in user details
features:
- Display all users currently logged in.
- Show detailed information about a specific user.
- Suppress the header from the output for cleaner results.
- Exclude login, JCPU, and PCPU columns for a concise view.
- Track user sessions and their associated processes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# w

> Display who is logged in and their processes.
> More information: <https://manned.org/w>.

- Display information about all users who are currently logged in:

`w`

- Display information about a specific user:

`w {{username}}`

- Display logged-in user information without a header:

`w {{[-h|--no-header]}}`

- Display information without including the login, JCPU and PCPU columns:

`w {{[-s|--short]}}`
