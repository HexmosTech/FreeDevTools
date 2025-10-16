---
title: "Create Mosquitto Passwords - Manage Users | Online Free DevTools by Hexmos"
name: mosquitto_passwd
path: "/freedevtools/tldr/common/mosquitto_passwd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mosquitto_passwd/"
description: "Create Mosquitto passwords securely with mosquitto_passwd. Manage MQTT user accounts, add, delete, and upgrade credentials. Free online tool, no registration required."
category: common
keywords:
- Mosquitto password management
- MQTT user creation
- Mosquitto authentication
- Password file generator
- Mosquitto password utility
- Linux password manager
- Command line password tool
- MQTT security
- Hash password file
- Manage MQTT credentials
features:
- Add new users to Mosquitto password files
- Create new password files for MQTT authentication
- Delete specified users from Mosquitto password files
- Upgrade plain-text password files to hashed format
- Manage user credentials for Mosquitto MQTT server
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mosquitto_passwd

> Manage password files for mosquitto.
> See also: `mosquitto`, the MQTT server that this manages.
> More information: <https://mosquitto.org/man/mosquitto_passwd-1.html>.

- Add a new user to a password file (will prompt to enter the password):

`mosquitto_passwd {{path/to/password_file}} {{username}}`

- Create the password file if it doesn't already exist:

`mosquitto_passwd -c {{path/to/password_file}} {{username}}`

- Delete the specified username instead:

`mosquitto_passwd -D {{path/to/password_file}} {{username}}`

- Upgrade an old plain-text password file to a hashed password file:

`mosquitto_passwd -U {{path/to/password_file}}`
