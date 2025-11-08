---
title: "Flock - Manage File Locks from Shell | Online Free DevTools by Hexmos"
name: flock
path: "/freedevtools/tldr/linux/flock/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/flock/"
description: "Manage file locks easily with Flock. Ensure exclusive command execution and prevent conflicts in shell scripts. Free online tool, no registration required."
category: linux
keywords:
  - file lock manager
  - shell script locking
  - command execution control
  - flock command-line
  - process synchronization linux
  - mutual exclusion shell
  - file locking utility
  - resource locking tool
  - atomic file operations
  - shell script concurrency
features:
  - Prevents concurrent execution of commands
  - Ensures exclusive access to resources using file locks
  - Supports non-blocking lock acquisition with conflict handling
  - Sets a timeout for waiting for a lock to become available
  - Provides a simple way to serialize access to shared resources
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# flock

> Manage file locks from shell scripts.
> It can be used to ensure that only one instance of a command is running.
> More information: <https://manned.org/flock>.

- Run a command with a file lock as soon as the lock is available:

`flock {{path/to/lock.lock}} {{command}}`

- Run a command with a file lock, or exit if the lock is currently being held (with exit code 1):

`flock {{path/to/lock.lock}} {{[-n|--nonblock]}} {{command}}`

- Run a command with a file lock, or exit with a specific error code if the lock is currently being held:

`flock {{path/to/lock.lock}} {{[-n|--nonblock]}} {{[-E|--conflict-exit-code]}} {{123}} {{command}}`

- Run a command with a file lock, waiting up to 10 seconds for the lock to be available before giving up:

`flock {{path/to/lock.lock}} {{[-w|--timeout]}} 10 {{command}}`

- Backup a bunch of files, waiting for the previous `tar` command to finish if it's still running elsewhere and holding the same lock file (can be used in a `cron` job that runs often):

`flock {{path/to/backup.lock}} {{tar -cvf path/to/backup.tar path/to/data/}}`
