---
title: "Generate Password - Encrypt Passwords with makepasswd | Online Free DevTools by Hexmos"
name: makepasswd
path: /freedevtools/tldr/common/makepasswd
canonical: "https://hexmos.com/freedevtools/tldr/common/makepasswd/"
description: "Generate passwords with makepasswd, ensuring strong encryption. Secure your accounts and data effectively with this command. Free online tool, no registration required."
category: common
keywords:
- password generator
- password encryption
- secure password generation
- linux password tool
- command line password
- password creation
- random password generator
- string based password
- makepasswd command
- password management
features:
- Generate random passwords of specified length
- Create passwords with custom character sets
- Encrypt generated passwords for added security
- Define minimum and maximum password length
- Generate passwords using command-line interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# makepasswd

> Generate and encrypt passwords.
> More information: <https://manpages.debian.org/latest/makepasswd/makepasswd.1.en.html>.

- Generate a random password (8 to 10 characters long, containing letters and numbers):

`makepasswd`

- Generate a 10 characters long password:

`makepasswd --chars {{10}}`

- Generate a 5 to 10 characters long password:

`makepasswd --minchars {{5}} --maxchars {{10}}`

- Generate a password containing only the characters "b", "a" or "r":

`makepasswd --string {{bar}}`
