---
title: "DNF Install - Install Packages on Linux | Free DevTools"
name: dnf-install
path: /freedevtools/tldr/linux/dnf-install
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnf-install/"
description: "Install packages with DNF Install on Linux distributions. Quickly manage RPM packages, resolve dependencies, and keep your system updated. Free online tool, no registration required."
category: linux
keywords:
- RPM Package Installer
- Linux Package Management
- DNF Package Manager
- Fedora Package Install
- Red Hat Package Management
- CentOS Package Installer
- DNF Command Line
- RPM Dependency Resolver
- Linux Software Install
- Enterprise Linux Packages
features:
- Install packages by name from repositories
- Install RPM packages from local files
- Install packages directly from URLs
- Add EPEL (Extra Packages for Enterprise Linux) repositories
- Add Remi's RPM repository for updated software
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dnf install

> Install packages on Red Hat-based distributions.
> More information: <https://dnf.readthedocs.io/en/latest/command_ref.html#install-examples>.

- Install packages by name:

`sudo dnf {{[in|install]}} {{package1 package2 ...}}`

- Install a package from a local file:

`sudo dnf {{[in|install]}} {{path/to/file}}`

- Install a package from the internet:

`sudo dnf {{[in|install]}} {{https://example.com/package.rpm}}`

- Add the Extra Packages for Enterprise Linux (EPEL) repositories:

`sudo dnf {{[in|install]}} https://dl.fedoraproject.org/pub/epel/epel-release-latest-{{10}}.noarch.rpm`

- Add Remi's RPM repository:

`sudo dnf {{[in|install]}} https://rpms.remirepo.net/enterprise/remi-release-{{8}}.rpm`
