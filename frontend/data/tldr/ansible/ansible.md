---
title: "Ansible - Manage Remote Hosts | Online Free DevTools by Hexmos"
name: ansible
path: "/freedevtools/tldr/ansible/ansible/"
canonical: "https://hexmos.com/freedevtools/tldr/ansible/ansible/"
description: "Manage remote hosts easily with Ansible. Automate tasks and configurations across multiple machines via SSH. Free online tool, no registration required."
category: common
keywords:
- remote host management
- SSH automation
- configuration management
- ansible playbook
- infrastructure as code
- ansible inventory
- remote server configuration
- ansible module
- ansible command
- linux automation
features:
- Execute commands on groups of remote hosts
- Manage host configurations via inventory files
- Automate tasks with administrative privileges
- Ping hosts to verify connectivity
- Display facts about remote hosts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ansible

> Manage groups of computers remotely over SSH. (use the `/etc/ansible/hosts` file to add new groups/hosts).
> Some subcommands such as `galaxy` have their own usage documentation.
> More information: <https://docs.ansible.com/ansible/latest/cli/ansible.html>.

- List hosts belonging to a group:

`ansible {{group}} --list-hosts`

- Ping a group of hosts by invoking the ping module:

`ansible {{group}} {{[-m|--module-name]}} ping`

- Display facts about a group of hosts by invoking the setup module:

`ansible {{group}} {{[-m|--module-name]}} setup`

- Execute a command on a group of hosts by invoking command module with arguments:

`ansible {{group}} {{[-m|--module-name]}} command {{[-a|--args]}} '{{my_command}}'`

- Execute a command with administrative privileges:

`ansible {{group}} {{[-b|--become]}} --ask-become-pass {{[-m|--module-name]}} command {{[-a|--args]}} '{{my_command}}'`

- Execute a command using a custom inventory file:

`ansible {{group}} {{[-i|--inventory]}} {{inventory_file}} {{[-m|--module-name]}} command {{[-a|--args]}} '{{my_command}}'`

- List the groups in an inventory:

`ansible localhost {{[-m|--module-name]}} debug {{[-a|--args]}} '{{var=groups.keys()}}'`
