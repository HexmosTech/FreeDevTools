---
title: "Control Cockpit - Secure Linux Sessions | Online Free DevTools by Hexmos"
name: cockpit-desktop
path: /freedevtools/tldr/linux/cockpit-desktop
canonical: "https://hexmos.com/freedevtools/tldr/linux/cockpit-desktop/"
description: "Control Cockpit sessions securely with Cockpit-desktop. Access Cockpit pages in an isolated environment for enhanced security. Free online tool, no registration required."
category: linux
keywords:
- cockpit session manager
- linux remote access
- secure cockpit access
- cockpit web interface
- remote server management linux
- cockpit-desktop linux command
- browser isolation linux
- linux session security
- remote server cockpit
- cockpit bridge manager
features:
- Launch Cockpit pages in an isolated network space.
- Start Cockpit-ws for secure web access.
- Execute cockpit-bridge in a user session.
- Securely access Cockpit pages through SSH.
- Open specific storage pages within Cockpit.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cockpit-desktop

> Securely access Cockpit pages in a running session.
> It starts `cockpit-ws` and a web browser in an isolated network space and a `cockpit-bridge` in a running user session.
> More information: <https://cockpit-project.org/guide/latest/cockpit-desktop.1.html>.

- Open a page:

`cockpit-desktop {{url}} {{SSH_host}}`

- Open storage page:

`cockpit-desktop {{/cockpit/@localhost/storage/index.html}}`
