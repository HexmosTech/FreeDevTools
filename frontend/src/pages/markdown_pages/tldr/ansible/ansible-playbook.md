---
title: "Ansible Playbook - Execute Playbooks over SSH | Online Free DevTools by Hexmos"
name: ansible-playbook
path: /freedevtools/tldr/ansible/ansible-playbook
canonical: "https://hexmos.com/freedevtools/tldr/ansible/ansible-playbook/"
description: "Execute automation playbooks with Ansible Playbook. Orchestrate configurations, deployments, and tasks across remote systems. Free online tool, no registration required."
category: common
keywords:
- ansible playbook execution
- ansible automation tool
- ansible ssh automation
- ansible configuration management
- playbook deployment tool
- linux automation playbook
- ansible remote execution
- yaml playbook runner
- ansible inventory management
- ansible command line
features:
- Execute Ansible playbooks against remote hosts.
- Specify custom host inventories for playbook execution.
- Define extra variables via command-line or JSON files.
- Target specific tasks within a playbook using tags or starting points.
- Perform dry-run checks to preview changes before execution.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ansible-playbook

> Execute tasks defined in playbook on remote machines over SSH.
> More information: <https://docs.ansible.com/ansible/latest/cli/ansible-playbook.html>.

- Run tasks in playbook:

`ansible-playbook {{playbook}}`

- Run tasks in playbook with custom host inventory:

`ansible-playbook {{playbook}} {{[-i|--inventory]}} {{inventory_file}}`

- Run tasks in playbook with extra variables defined via the command-line:

`ansible-playbook {{playbook}} {{[-e|--extra-vars]}} "{{variable1}}={{value1}} {{variable2}}={{value2}}"`

- Run tasks in playbook with extra variables defined in a JSON file:

`ansible-playbook {{playbook}} {{[-e|--extra-vars]}} "@{{variables.json}}"`

- Run tasks in playbook for the given tags:

`ansible-playbook {{playbook}} {{[-t|--tags]}} {{tag1,tag2}}`

- Run tasks in a playbook starting at a specific task:

`ansible-playbook {{playbook}} --start-at {{task_name}}`

- Run tasks in a playbook without making any changes (dry-run):

`ansible-playbook {{playbook}} {{[-C|--check]}} {{[-D|--diff]}}`
