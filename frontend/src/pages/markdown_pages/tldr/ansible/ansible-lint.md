---
title: "Ansible Lint - Validate Playbooks | Free DevTools"
name: ansible-lint
path: /freedevtools/tldr/ansible/ansible-lint
canonical: "https://hexmos.com/freedevtools/tldr/ansible/ansible-lint/"
description: "Validate Ansible playbooks with Ansible Lint. Find errors, enforce best practices, and improve automation workflows. Free online tool, no registration required."
category: common
keywords:
- ansible playbook linter
- yaml linter
- ansible code analysis
- playbook syntax checker
- ansible best practices
- lint ansible automation
- ansible linting rules
- validate ansible code
- ansible quality control
- ansible code style
features:
- Lint Ansible playbooks for syntax errors
- Enforce Ansible best practices
- Exclude specific linting rules
- Customize rules directory
- Analyze entire Ansible project directories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ansible-lint

> Apply rules and follow best practices with your automation content.
> More information: <https://ansible.readthedocs.io/projects/lint/>.

- Lint a specific playbook and a role directory:

`ansible-lint {{path/to/playbook_file}} {{path/to/role_directory}}`

- Lint a playbook while excluding specific rules:

`ansible-lint {{[-x|--exclude-rules]}} {{rule1,rule2,...}} {{path/to/playbook_file}}`

- Lint a playbook in offline mode and format output as PEP8:

`ansible-lint {{[-o|--offline]}} {{[-p|--parseable]}} {{path/to/playbook_file}}`

- Lint a playbook using a custom rules directory:

`ansible-lint {{[-r|--rules]}} {{path/to/custom_rules_directory}} {{path/to/playbook_file}}`

- Lint all Ansible content recursively in a given directory:

`ansible-lint {{path/to/project_directory}}`
