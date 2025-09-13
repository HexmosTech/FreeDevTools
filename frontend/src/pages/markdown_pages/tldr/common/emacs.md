---
title: "Emacs Editor - Control Text Editing | Free DevTools"
name: emacs
path: /freedevtools/tldr/common/emacs
canonical: "https://hexmos.com/freedevtools/tldr/common/emacs/"
description: "Control text editing with Emacs Editor, the extensible text editor. Edit files, run scripts, and manage Emacs server instances quickly. Free online tool, no registration required."
category: common
keywords:
- emacs editor
- gnu emacs
- text editor linux
- extensible text editor
- emacs lisp
- emacs command line
- emacs server
- console text editor
- text editor macos
- text editor windows
features:
- Open and edit files directly from the command line
- Execute Emacs Lisp scripts for automated tasks
- Start and manage Emacs server instances in the background
- Open files at specific line numbers for focused editing
- Run Emacs in console mode without a graphical interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# emacs

> The extensible, customizable, self-documenting, real-time display editor.
> See also: `emacsclient`.
> More information: <https://www.gnu.org/software/emacs>.

- Start Emacs and open a file:

`emacs {{path/to/file}}`

- Open a file at a specified line number:

`emacs +{{line_number}} {{path/to/file}}`

- Run an Emacs Lisp file as a script:

`emacs --script {{path/to/file.el}}`

- Start Emacs in console mode (without an X window):

`emacs {{[-nw|--no-window-system]}}`

- Start an Emacs server in the background (accessible via `emacsclient`):

`emacs --daemon`

- Stop a running Emacs server and all its instances, asking for confirmation on unsaved files:

`emacsclient --eval '(save-buffers-kill-emacs)'`

- Save a file in Emacs:

`<Ctrl x><Ctrl s>`

- Quit Emacs:

`<Ctrl x><Ctrl c>`
