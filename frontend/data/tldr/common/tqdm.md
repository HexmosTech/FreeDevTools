---
title: "Create Progress Bars - Tqdm Command | Online Free DevTools by Hexmos"
name: tqdm
path: "/freedevtools/tldr/common/tqdm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tqdm/"
description: "Create progress bars with Tqdm for command-line tools. Monitor execution time and track completion easily. Free online tool, no registration required."
category: common
keywords:
- command line progress bar
- console progress indicator
- terminal progress monitoring
- tqdm progress bar linux
- python tqdm command
- archive progress tracking
- file transfer progress bar
- loop progress visualization
- bash progress indicator
- stream processing progress
features:
- Display progress in terminal output
- Estimate remaining time for commands
- Monitor file transfer progress
- Track iterations in loops
- Integrate with shell scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tqdm

> Show progress over time of a command.
> More information: <https://tqdm.github.io/docs/cli/>.

- Show iterations per second and use `stdout` afterwards:

`{{seq 10000000}} | tqdm | {{command}}`

- Create a progress bar:

`{{seq 10000000}} | tqdm --total {{10000000}} | {{command}}`

- Create an archive out of a directory and use the file count of that directory to create a progress bar:

`zip {{[-r|--recurse-paths]}} {{path/to/archive.zip}} {{path/to/directory}} | tqdm --total $(find {{path/to/directory}} | wc {{[-l|--lines]}}) --unit files --null`

- Create an archive with tar and create a progress bar (system agnostic, GNU tar uses `stdout` while BSD tar uses `stderr`):

`tar vzcf {{path/to/archive.tar.gz}} {{path/to/directory}} 2>&1 | tqdm --total $(find {{path/to/directory}} | wc {{[-l|--lines]}}) --unit files --null`
