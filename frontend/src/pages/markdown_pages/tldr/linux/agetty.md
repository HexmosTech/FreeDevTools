---
title: "Control agetty TTY - Open Ports and Prompt Login | Online Free DevTools by Hexmos"
name: agetty
path: /freedevtools/tldr/linux/agetty
canonical: "https://hexmos.com/freedevtools/tldr/linux/agetty/"
description: "Control TTY ports with agetty. Open ports, prompt logins, and execute commands via serial console.  Free online tool, no registration required for this TTY manager."
category: linux
keywords:
  - tty controller
  - serial console manager
  - linux getty alternative
  - login prompt command
  - agetty command parameters
  - terminal port control
  - serial port configuration
  - linux console management
  - utmp file modification
  - chroot directory setting
features:
  - Open a TTY port and prompt for login.
  - Set a timeout for the login process.
  - Override the TERM environment variable.
  - Skip the login and invoke another program.
  - Change the root directory for login.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# agetty

> Alternative `getty`: Open a `tty` port, prompt for a login name, and invoke the `/bin/login` command.
> It is normally invoked by `init`.
> Note: The baud rate is the speed of data transfer between a terminal and a device over a serial connection.
> More information: <https://manned.org/agetty>.

- Connect `stdin` to a port (relative to `/dev`) and optionally specify a baud rate (defaults to 9600):

`agetty {{tty}} {{115200}}`

- Assume `stdin` is already connected to a `tty` and set a timeout for the login:

`agetty {{[-t|--timeout]}} {{timeout_in_seconds}} -`

- Assume the `tty` is 8-bit, overriding the `TERM` environment variable set by `init`:

`agetty {{[-8|--8bits]}} - {{term_var}}`

- Skip the login (no login) and invoke, as root, another login program instead of `/bin/login`:

`agetty {{[-n|--skip-login]}} {{[-l|--login-program]}} {{login_program}} {{tty}}`

- Do not display the pre-login (issue) file (`/etc/issue` by default) before writing the login prompt:

`agetty {{[-i|--noissue]}} -`

- Change the root directory and write a specific fake host into the `utmp` file:

`agetty {{[-r|--chroot]}} /{{path/to/root_directory}} {{[-H|--host]}} {{fake_host}} -`
