---
title: "Manage Username - Control User Accounts on Cisco IOS | Online Free DevTools by Hexmos"
name: username
path: /freedevtools/tldr/cisco-ios/username
canonical: "https://hexmos.com/freedevtools/tldr/cisco-ios/username/"
description: "Control user accounts on Cisco IOS with the Username command. Manage privilege levels and set secure passwords for network administrators. Free online tool, no registration required."
category: cisco-ios
keywords:
- cisco ios username command
- cisco ios user management
- cisco ios privilege level
- cisco ios password configuration
- cisco ios admin account
- cisco ios network security
- cisco ios user authentication
- cisco ios command line interface
- cisco ios configuration mode
- cisco ios user roles
features:
- Configure user accounts with specific privilege levels.
- Set strong, encrypted passwords for user authentication.
- Define admin accounts with maximum privileges.
- Manage user access to network resources.
- Securely authenticate users on Cisco IOS devices.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# username

> Manage users.
> Accessed in configuration mode.
> More information: <https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/security/s1/sec-s1-xe-3se-3850-cr-book/sec-s1-xe-3se-3850-cr-book_chapter_0110.html>.

- Set up an admin account:

`username {{admin}} privilege 15 secret {{password}}`
