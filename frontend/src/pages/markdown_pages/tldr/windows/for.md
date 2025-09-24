---
title: "For Command - Execute Commands Iteratively | Online Free DevTools by Hexmos"
name: for
path: /freedevtools/tldr/windows/for
canonical: "https://hexmos.com/freedevtools/tldr/windows/for/"
description: "Execute commands iteratively with the 'for' command in your terminal. Simplify repetitive tasks and automate workflows. Free online tool, no registration required."
category: windows
keywords:
  - Command iteration
  - Batch processing
  - Loop execution
  - Conditional command execution
  - File system iteration
  - Directory traversal
  - Command automation
  - Iterative scripting
  - Windows command line
  - Shell scripting
features:
  - Execute commands for a specified set of items.
  - Iterate over a numerical range with custom steps.
  - Process a list of files using a wildcard pattern.
  - Operate on a collection of directories.
  - Apply commands to every directory in the current path.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# for

> Conditionally execute a command several times.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/for>.

- Execute given commands for the specified set:

`for %{{variable}} in ({{item_a item_b item_c}}) do ({{echo Loop is executed}})`

- Iterate over a given range of numbers:

`for /l %{{variable}} in ({{from}}, {{step}}, {{to}}) do ({{echo Loop is executed}})`

- Iterate over a given list of files:

`for %{{variable}} in ({{path\to\file1.ext path\to\file2.ext ...}}) do ({{echo Loop is executed}})`

- Iterate over a given list of directories:

`for /d %{{variable}} in ({{path\to\directory1.ext path\to\directory2.ext ...}}) do ({{echo Loop is executed}})`

- Perform a given command in every directory:

`for /d %{{variable}} in (*) do (if exist %{{variable}} {{echo Loop is executed}})`
