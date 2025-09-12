---
title: "Launchctl - Control Launch Daemons & Agents | Free DevTools"
name: launchctl
path: /freedevtools/tldr/osx/launchctl
canonical: "https://hexmos.com/freedevtools/tldr/osx/launchctl/"
description: "Control launch daemons and agents with Launchctl. Manage system-wide services and per-user programs on macOS using command line. Free online tool, no registration required."
category: osx
keywords:
- launchd manager
- osx launchctl
- macos launchctl commands
- launch daemon control
- launch agent control
- plist loader macos
- system service manager
- launchctl load
- launchctl unload
- launchctl start stop
features:
- Load and activate launch agents and daemons from plist files
- Unload currently loaded agents for modification or updates
- Manually start or stop agents/daemons based on their label
- List all loaded agents and daemons with their PID and exit code
- Manage system-wide and user-specific background processes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# launchctl

> Control Apple's `launchd` manager for launch daemons (system-wide services) and launch agents (per-user programs).
> `launchd` loads XML-based `*.plist` files placed in the appropriate locations, and runs the corresponding commands according to their defined schedule.
> More information: <https://keith.github.io/xcode-man-pages/launchctl.1.html>.

- Activate a user-specific agent to be loaded into `launchd` whenever the user logs in:

`launchctl load ~/Library/LaunchAgents/{{my_script}}.plist`

- Activate an agent which requires root privileges to run and/or should be loaded whenever any user logs in (note the absence of `~` in the path):

`sudo launchctl load /Library/LaunchAgents/{{root_script}}.plist`

- Activate a system-wide daemon to be loaded whenever the system boots up (even if no user logs in):

`sudo launchctl load /Library/LaunchDaemons/{{system_daemon}}.plist`

- Show all loaded agents/daemons, with the PID if the process they specify is currently running, and the exit code returned the last time they ran:

`launchctl list`

- Unload a currently loaded agent, e.g. to make changes (Note: The plist file is automatically loaded into `launchd` after a reboot and/or logging in):

`launchctl unload ~/Library/LaunchAgents/{{my_script}}.plist`

- Manually run a known (loaded) agent/daemon, even if it is not the right time (Note: This command uses the agent's label, rather than the filename):

`launchctl start {{script_file}}`

- Manually kill the process associated with a known agent/daemon, if it is running:

`launchctl stop {{script_file}}`
