---
title: "Run Mailcap - Execute Mail Programs | Online Free DevTools by Hexmos"
name: run-mailcap
path: "/freedevtools/tldr/linux/run-mailcap/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/run-mailcap/"
description: "Execute mailcap programs with run-mailcap.  Control mail actions like view, edit, and compose using command-line arguments. Free online tool, no registration required."
category: linux
keywords:
  - mailcap program execution
  - command-line mailcap
  - mailcap viewer
  - mailcap editor
  - mailcap composer
  - run-mailcap command
  - mailcap actions
  - mime-type processing
  - email processing command
  - linux mailcap
features:
  - Execute view, edit, compose, and print actions on files.
  - Process files based on mime-type definitions in mailcap.
  - Debug mailcap program execution with verbose output.
  - Suppress pager output for cleaner console output.
  - Preview the command to be executed without running it.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# run-mailcap

> Run MailCap Programs.
> Run mailcap view, see, edit, compose, print - execute programs via entries in the mailcap file (or any of its aliases) will use the given action to process each mime-type/file.
> More information: <https://manned.org/run-mailcap>.

- Invoke individual actions/programs on run-mailcap:

`run-mailcap --action={{view|cat|compose|composetyped|edit|print}} {{path/to/file}}`

- Turn on extra information:

`run-mailcap --action={{action}} --debug {{path/to/file}}`

- Ignore any "copiousoutput" directive and forward output to `stdout`:

`run-mailcap --action={{action}} --nopager {{path/to/file}}`

- Display the found command without actually executing it:

`run-mailcap --action={{action}} --norun {{path/to/file}}`
