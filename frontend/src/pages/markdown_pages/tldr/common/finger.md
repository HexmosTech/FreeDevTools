---
title: "Finger Lookup - Find User Information | Free DevTools"
name: finger
path: /freedevtools/tldr/common/finger
canonical: "https://hexmos.com/freedevtools/tldr/common/finger/"
description: "Lookup user information with Finger. Quickly retrieve details about users on a system including login name, real name, and more. Free online tool, no registration required."
category: common
keywords:
- user information lookup
- finger command
- linux finger
- macos finger
- username lookup
- system user details
- command line user info
- user account information
- finger tool
- display user details
features:
- Display information about logged-in users
- Lookup information for a specific user
- Show login name, terminal, and real name
- Display extended user information including home directory and mail status
- Prevent matching against user's names
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# finger

> User information lookup program.
> More information: <https://manned.org/finger>.

- Display information about currently logged in users:

`finger`

- Display information about a specific user:

`finger {{username}}`

- Display the user's login name, real name, terminal name, and other information:

`finger -s`

- Produce multiline output format displaying same information as `-s` as well as user's home directory, home phone number, login shell, mail status, etc.:

`finger -l`

- Prevent matching against user's names and only use login names:

`finger -m`
