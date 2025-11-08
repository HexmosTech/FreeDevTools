---
title: "Pinky Command - Print User Info with Finger Protocol | Online Free DevTools by Hexmos"
name: pinky
path: "/freedevtools/tldr/common/pinky/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pinky/"
description: "Print user information easily with Pinky command. Retrieve user details and system information using the finger protocol on Linux and macOS. Free online tool, no registration required."
category: common
keywords:
- user information command
- finger protocol lookup
- linux user details
- macos user details
- command line user info
- pinky command example
- user account information
- system user details
- terminal user lookup
- command line finger utility
features:
- Display user login name
- Retrieve user full name
- Show user terminal line
- Indicate write access
- Customize output format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pinky

> Print user information using the `finger` protocol.
> More information: <https://manned.org/pinky>.

- Display details about the current user:

`pinky`

- Display details for a specific user:

`pinky {{user}}`

- Display details in the long format:

`pinky {{user}} -l`

- Omit the user's home directory and shell in long format:

`pinky {{user}} -lb`

- Omit the user's project file in long format:

`pinky {{user}} -lh`

- Omit the column headings in short format:

`pinky {{user}} -f`
