---
title: "Apache2ctl - Control Web Server with Commands | Online Free DevTools by Hexmos"
name: apache2ctl
path: "/freedevtools/tldr/linux/apache2ctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/apache2ctl/"
description: "Control Apache web servers using apache2ctl commands. Start, stop, restart, and test your Apache configuration. Free online tool, no registration required."
category: linux
keywords:
  - apache2ctl commands
  - apache2ctl start
  - apache2ctl stop
  - apache2ctl restart
  - apache2ctl test
  - apache2ctl configuration
  - apache2ctl modules
  - linux web server
  - debian apache
  - web server administration
features:
  - Start and stop the Apache web server daemon.
  - Restart the Apache web server for configuration changes.
  - Test the syntax of the Apache configuration file.
  - List all loaded Apache modules.
  - Manage the Apache web server using command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apache2ctl

> Administrate the Apache HTTP web server.
> This command comes with Debian based OSes, for RHEL based ones see `httpd`.
> More information: <https://manned.org/apache2ctl.8>.

- Start the Apache daemon. Throw a message if it is already running:

`sudo apache2ctl start`

- Stop the Apache daemon:

`sudo apache2ctl stop`

- Restart the Apache daemon:

`sudo apache2ctl restart`

- Test syntax of the configuration file:

`sudo apache2ctl -t`

- List loaded modules:

`sudo apache2ctl -M`
