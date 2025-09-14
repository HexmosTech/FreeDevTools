---
title: "Ansible-Doc - Display Ansible Module Info | Free DevTools"
name: ansible-doc
path: /freedevtools/tldr/ansible/ansible-doc
canonical: "https://hexmos.com/freedevtools/tldr/ansible/ansible-doc/"
description: "Display Ansible module information with ansible-doc. Explore module details, examples, and playbook snippets. Free online tool, no registration required."
category: common
keywords:
- ansible module documentation
- ansible plugin listing
- ansible module information
- ansible playbook snippet
- ansible module details
- ansible plugin type
- ansible command line
- ansible modules linux
- ansible modules windows
- ansible module usage
features:
- Display module documentation
- List available Ansible plugins
- Show playbook snippets for modules
- Show module information as JSON
- Filter plugins by type
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ansible-doc

> Display information on modules installed in Ansible libraries.
> Display a terse listing of plugins and their short descriptions.
> More information: <https://docs.ansible.com/ansible/latest/cli/ansible-doc.html>.

- List available action plugins (modules):

`ansible-doc {{[-l|--list]}}`

- List available plugins of a specific type:

`ansible-doc {{[-t|--type]}} {{become|cache|callback|cliconf|connection|...}} {{[-l|--list]}}`

- Show information about a specific action plugin (module):

`ansible-doc {{plugin_name}}`

- Show information about a plugin with a specific type:

`ansible-doc {{[-t|--type]}} {{become|cache|callback|cliconf|connection|...}} {{plugin_name}}`

- Show the playbook snippet for action plugin (modules):

`ansible-doc {{[-s|--snippet]}} {{plugin_name}}`

- Show information about an action plugin (module) as JSON:

`ansible-doc {{[-j|--json]}} {{plugin_name}}`
