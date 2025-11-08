---
title: "RPM Package Manager - Manage Packages with rpm | Online Free DevTools by Hexmos"
name: rpm
path: "/freedevtools/tldr/linux/rpm/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpm/"
description: "Manage Linux packages efficiently with the rpm Package Manager.  Install, upgrade, query, and verify packages with ease. Free online tool, no registration required."
category: linux
keywords:
  - rpm package manager
  - linux rpm commands
  - rpm package installation
  - rpm package query
  - rpm package upgrade
  - rpm package verification
  - linux package management
  - rpm command line
  - rpm package list
  - rpm file query
features:
  - Install and upgrade RPM packages.
  - Query package information (version, files, etc.).
  - Verify package integrity.
  - List files owned by a package.
  - Manage package scripts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rpm

> RPM Package Manager.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://rpm-software-management.github.io/rpm/man/rpm.8>.

- Show version of httpd package:

`rpm {{[-q|--query]}} httpd`

- List versions of all matching packages:

`rpm {{[-qa|--query --all]}} '{{mariadb*}}'`

- Forcibly install a package regardless of currently installed versions:

`rpm {{[-U|--upgrade]}} {{path/to/package.rpm}} --force`

- Identify owner of a file and show version of the package:

`rpm {{[-qf|--query --file]}} {{/etc/postfix/main.cf}}`

- List package-owned files:

`rpm {{[-ql|--query --list]}} {{kernel}}`

- Show scriptlets from an RPM file:

`rpm {{[-qp|--query --package]}} --scripts {{package.rpm}}`

- Show changed, missing and/or incorrectly installed files of matching packages:

`rpm {{[-Va|--verify --all]}} '{{php-*}}'`

- Display the changelog of a specific package:

`rpm {{[-q|--query]}} --changelog {{package}}`
