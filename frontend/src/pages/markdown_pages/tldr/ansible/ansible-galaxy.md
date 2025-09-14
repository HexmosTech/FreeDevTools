---
title: "Ansible Galaxy - Manage Roles & Collections | Free DevTools"
name: ansible-galaxy
path: /freedevtools/tldr/ansible/ansible-galaxy
canonical: "https://hexmos.com/freedevtools/tldr/ansible/ansible-galaxy/"
description: "Manage Ansible roles and collections easily with Ansible Galaxy. Install, remove, search, and initialize roles & collections with this command line tool. Free online tool, no registration required."
category: common
keywords:
- ansible galaxy role manager
- ansible collection management
- ansible role install command
- ansible collection install command
- ansible role search tool
- ansible galaxy command line
- ansible automation roles
- ansible galaxy collections
- yaml automation management
- ansible role creation
features:
- Install and remove Ansible roles
- Manage Ansible collections
- Search for Ansible roles using keywords
- Initialize new Ansible roles
- Display help information for roles and collections
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ansible-galaxy

> Perform various Ansible Role and Collection related operations.
> More information: <https://docs.ansible.com/ansible/latest/cli/ansible-galaxy.html>.

- List installed roles or collections:

`ansible-galaxy {{role|collection}} list`

- Search for a role with various levels of verbosely (`-v` should be specified at the end):

`ansible-galaxy role search {{keyword}} -v{{vvvvv}}`

- Install or remove role(s):

`ansible-galaxy role {{install|remove}} {{role_name1 role_name2 ...}}`

- Create a new role:

`ansible-galaxy role init {{role_name}}`

- Get information about a role:

`ansible-galaxy role info {{role_name}}`

- Install or remove collection(s):

`ansible-galaxy collection {{install|remove}} {{collection_name1 collection_name2 ...}}`

- Display help about roles or collections:

`ansible-galaxy {{role|collection}} {{[-h|--help]}}`
