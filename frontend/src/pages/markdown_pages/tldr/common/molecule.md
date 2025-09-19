---
title: "Molecule - Test Ansible Roles | Online Free DevTools by Hexmos"
name: molecule
path: /freedevtools/tldr/common/molecule
canonical: "https://hexmos.com/freedevtools/tldr/common/molecule/"
description: "Test Ansible roles efficiently with Molecule. Ensure your Ansible infrastructure code is robust and reliable using automated testing. Free online tool, no registration required."
category: common
keywords:
- ansible role testing
- molecule ansible
- ansible automation testing
- infrastructure as code testing
- molecule create
- molecule converge
- molecule test
- linux ansible testing
- molecule login
- ansible role validation
features:
- Initialize new Ansible roles with `molecule init`
- Execute comprehensive tests on Ansible roles using `molecule test`
- Provision instances for testing Ansible roles with `molecule create`
- Configure and apply Ansible roles to instances using `molecule converge`
- Access and interact with instances for debugging via `molecule login`
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# molecule

> Molecule helps testing Ansible roles.
> More information: <https://molecule.readthedocs.io>.

- Create a new Ansible role:

`molecule init role --role-name {{role_name}}`

- Run tests:

`molecule test`

- Start the instance:

`molecule create`

- Configure the instance:

`molecule converge`

- List scenarios of the instance:

`molecule matrix converge`

- Log in into the instance:

`molecule login`
