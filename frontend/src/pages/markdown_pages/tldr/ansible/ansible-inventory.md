---
title: "Ansible Inventory - Display Ansible Inventory | Free DevTools"
name: ansible-inventory
path: /freedevtools/tldr/ansible/ansible-inventory
canonical: "https://hexmos.com/freedevtools/tldr/ansible/ansible-inventory/"
description: "Display Ansible inventories easily with Ansible Inventory. Inspect hosts, groups, and variables using the command line. Free online tool, no registration required."
category: common
keywords:
- ansible inventory
- ansible inventory list
- ansible host inventory
- ansible yaml inventory
- ansible inventory dump
- ansible dynamic inventory
- ansible inventory management
- ansible command line
- linux ansible
- macos ansible
features:
- Display the default Ansible inventory.
- List inventory in YAML format.
- Display a custom inventory file.
- Dump the inventory to a specified file.
- Inspect hosts and groups within an Ansible project.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ansible-inventory

> Display or dump an Ansible inventory.
> See also: `ansible`.
> More information: <https://docs.ansible.com/ansible/latest/cli/ansible-inventory.html>.

- Display the default inventory:

`ansible-inventory --list`

- Display a custom inventory:

`ansible-inventory --list {{[-i|--inventory-file]}} {{path/to/file_or_script_or_directory}}`

- Display the default inventory in YAML:

`ansible-inventory --list {{[-y|--yaml]}}`

- Dump the default inventory to a file:

`ansible-inventory --list --output {{path/to/file}}`
