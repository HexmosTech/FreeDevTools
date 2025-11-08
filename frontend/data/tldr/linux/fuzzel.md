---
title: "Fuzzel Launcher - Run Applications | Online Free DevTools by Hexmos"
name: fuzzel
path: "/freedevtools/tldr/linux/fuzzel/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/fuzzel/"
description: "Run applications instantly with Fuzzel Launcher, a Wayland-native application launcher.  Quickly find and execute programs with this fuzzy finder. Free online tool, no registration required."
category: linux
keywords:
- application launcher
- wayland launcher
- fuzzy finder
- linux application launcher
- linux fuzzy finder
- command line launcher
- dmenu alternative
- rofi alternative
- application search
- sway launcher
features:
- Launch applications from the command line
- Execute commands in dmenu mode
- Filter command output using fuzzy search
- Customize menu items with new line separators
- Launch applications on a specific monitor
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fuzzel

> A Wayland-native application launcher and fuzzy finder, inspired by `rofi` and `dmenu`.
> More information: <https://codeberg.org/dnkl/fuzzel>.

- Run applications:

`fuzzel`

- Run `fuzzel` in dmenu mode:

`fuzzel {{[-d|--dmenu]}}`

- Display a menu of the output of the `ls` command:

`{{ls}} | fuzzel {{[-d|--dmenu]}}`

- Display a menu with custom items separated by a new line (`\n`):

`echo -e "{{red}}\n{{green}}\n{{blue}}" | fuzzel {{[-d|--dmenu]}}`

- Let the user choose between multiple items and save the selected one to a file:

`echo -e "{{red}}\n{{green}}\n{{blue}}" | fuzzel {{[-d|--dmenu]}} > {{color.txt}}`

- Reset apps usage count (default cache directory: `$XDG_CACHE_HOME/fuzzel`):

`rm {{[-v|--verbose]}} $HOME/.cache/fuzzel`

- Launch `fuzzel` on a specific monitor, see `wlr-randr` or `swaymsg --type get_outputs`:

`fuzzel {{[-o|--output]}} "{{DP-1}}"`

- Use `fuzzel` to do an online search:

`fuzzel {{[-d|--dmenu]}} {{[-l|--lines]}} 0 --placeholder "{{Type your search}}" | sed 's/^/\"/g;s/$/\"/g' | xargs firefox --search`
