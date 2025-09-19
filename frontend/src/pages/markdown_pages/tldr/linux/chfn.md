---
title: "Update Finger Info - Control User Data with chfn | Online Free DevTools by Hexmos"
name: chfn
path: /freedevtools/tldr/linux/chfn
canonical: "https://hexmos.com/freedevtools/tldr/linux/chfn/"
description: "Control user finger information with chfn. Update name, office, and phone details easily. A free online tool for managing user data, no registration required."
category: linux
keywords:
  - finger information update
  - user data management
  - chfn command linux
  - linux user update
  - modify finger data
  - update user contact
  - command line user tools
  - user finger details
  - linux user management
  - system administration tools
features:
  - Update user full name in finger
  - Modify user office room number
  - Change user office phone number
  - Set user home phone number
  - Manage user information via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chfn

> Update `finger` info for a user.
> More information: <https://manned.org/chfn>.

- Update a user's "Name" field in the output of `finger`:

`chfn {{[-f|--full-name]}} {{new_display_name}} {{username}}`

- Update a user's "Office Room Number" field for the output of `finger`:

`chfn {{[-o|--office]}} {{new_office_room_number}} {{username}}`

- Update a user's "Office Phone Number" field for the output of `finger`:

`chfn {{[-p|--office-phone]}} {{new_office_telephone_number}} {{username}}`

- Update a user's "Home Phone Number" field for the output of `finger`:

`chfn {{[-h|--home-phone]}} {{new_home_telephone_number}} {{username}}`
