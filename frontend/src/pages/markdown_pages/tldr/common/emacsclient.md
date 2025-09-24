---
title: "Emacsclient - Open Files in Emacs | Online Free DevTools by Hexmos"
name: emacsclient
path: /freedevtools/tldr/common/emacsclient
canonical: "https://hexmos.com/freedevtools/tldr/common/emacsclient/"
description: "Open files with Emacsclient, the command-line interface to Emacs. Quickly edit files and evaluate commands. Free online tool, no registration required."
category: common
keywords:
- Emacsclient file opener
- Emacs command line client
- Open files in Emacs server
- Emacs GUI interface
- Terminal Emacs editing
- Emacs evaluate command
- Alternate Emacs editor
- Emacs server control
- Emacs Lisp execution
- Emacs server shutdown
features:
- Open files in an existing Emacs server.
- Open files in console mode without GUI.
- Open files in a new Emacs window.
- Evaluate Emacs Lisp commands.
- Specify an alternative editor to open files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# emacsclient

> Open files in an existing Emacs server.
> See also: `emacs`.
> More information: <https://www.gnu.org/software/emacs/manual/html_node/emacs/emacsclient-Options.html>.

- Open a file in an existing Emacs server (using GUI if available):

`emacsclient {{path/to/file}}`

- Open a file in console mode (without an X window):

`emacsclient {{[-nw|--no-window-system]}} {{path/to/file}}`

- Open a file in a new Emacs window:

`emacsclient {{[-c|--create-frame]}} {{path/to/file}}`

- Evaluate a command, printing the output to `stdout`, and then quit:

`emacsclient {{[-e|--eval]}} '({{command}})'`

- Specify an alternative editor in case no Emacs server is running:

`emacsclient {{[-a|--alternate-editor]}} {{editor}} {{path/to/file}}`

- Stop a running Emacs server and all its instances, asking for confirmation on unsaved files:

`emacsclient {{[-e|--eval]}} '(save-buffers-kill-emacs)'`
