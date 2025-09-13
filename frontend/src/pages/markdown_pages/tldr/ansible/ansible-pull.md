---
title: "Ansible Pull - Execute Playbooks Locally | Free DevTools"
name: ansible-pull
path: /freedevtools/tldr/ansible/ansible-pull
canonical: "https://hexmos.com/freedevtools/tldr/ansible/ansible-pull/"
description: "Execute Ansible playbooks locally with Ansible Pull. Automate configuration management and deployment tasks from a VCS repository. Free online tool, no registration required."
category: common
keywords:
- ansible playbook execution
- ansible local automation
- ansible configuration management
- ansible pull from git
- ansible declarative automation
- ansible playbook deployment
- linux ansible pull
- macos ansible pull
- ansible remote execution
- ansible pull best practices
features:
- Pull Ansible playbooks from a VCS repository
- Execute playbooks against the local host
- Specify a particular branch to pull from
- Define a specific playbook to execute
- Use a custom inventory file for host variables
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ansible-pull

> Pull ansible playbooks from a VCS repo and executes them for the local host.
> More information: <https://docs.ansible.com/ansible/latest/cli/ansible-pull.html>.

- Pull a playbook from a VCS and execute a default local.yml playbook:

`ansible-pull {{[-U|--url]}} {{repository_url}}`

- Pull a playbook from a VCS and execute a specific playbook:

`ansible-pull {{[-U|--url]}} {{repository_url}} {{playbook}}`

- Pull a playbook from a VCS at a specific branch and execute a specific playbook:

`ansible-pull {{[-U|--url]}} {{repository_url}} {{[-C|--checkout]}} {{branch}} {{playbook}}`

- Pull a playbook from a VCS, specify hosts file and execute a specific playbook:

`ansible-pull {{[-U|--url]}} {{repository_url}} {{[-i|--inventory-file]}} {{hosts_file}} {{playbook}}`
