---
title: "chpasswd - Change Passwords Securely | Free DevTools"
name: chpasswd
path: /freedevtools/tldr/linux/chpasswd
canonical: "https://hexmos.com/freedevtools/tldr/linux/chpasswd/"
description: "Change multiple user passwords securely with chpasswd.  Manage user credentials efficiently via command line. Free online tool, no registration required."
category: linux
keywords:
  - chpasswd command
  - linux password management
  - unix password change
  - batch password update
  - command-line password tool
  - secure password modification
  - encrypted password change
  - multiple user password update
  - chpasswd stdin input
  - system password control
features:
  - Change passwords for multiple users simultaneously using stdin.
  - Update passwords with various encryption methods (NONE, DES, MD5, SHA256, SHA512).
  - Provide password in plain text or encrypted format.
  - Securely manage user credentials via the command line.
  - Supports individual and batch password updates.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chpasswd

> Change the passwords for multiple users by using `stdin`.
> More information: <https://manned.org/chpasswd.8>.

- Change the password for a specific user:

`printf "{{username}}:{{new_password}}" | sudo chpasswd`

- Change the passwords for multiple users (The input text must not contain any spaces.):

`printf "{{username_1}}:{{new_password_1}}\n{{username_2}}:{{new_password_2}}" | sudo chpasswd`

- Change the password for a specific user, and specify it in encrypted form:

`printf "{{username}}:{{new_encrypted_password}}" | sudo chpasswd --encrypted`

- Change the password for a specific user, and use a specific encryption for the stored password:

`printf "{{username}}:{{new_password}}" | sudo chpasswd --crypt-method {{NONE|DES|MD5|SHA256|SHA512}}`
