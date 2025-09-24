---
title: "xmodmap - Control Keymaps & Pointer | Online Free DevTools by Hexmos"
name: xmodmap
path: /freedevtools/tldr/linux/xmodmap
canonical: "https://hexmos.com/freedevtools/tldr/linux/xmodmap/"
description: "Control keymaps and pointer settings with xmodmap.  Modify keyboard layouts and button mappings easily. Free online tool, no registration required."
category: linux
keywords:
  - xmodmap keybinding
  - xmodmap linux
  - xmodmap keyboard mapping
  - xmodmap pointer control
  - xmodmap key reassignment
  - xmodmap keycode
  - xmodmap configuration
  - xmodmap command
  - xmodmap tutorial
  - xmodmap customization
features:
  - Swap left and right mouse button clicks.
  - Reassign keyboard keys to different functions.
  - Disable specific keyboard keys.
  - Load keymap configurations from external files.
  - Modify pointer button mappings.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xmodmap

> Utility for modifying keymaps and pointer button mappings in X.
> More information: <https://manned.org/xmodmap>.

- Swap `<LeftClick>` and `<RightCLick>` on the pointer:

`xmodmap -e 'pointer = 3 2 1'`

- Reassign a key on the keyboard to another key:

`xmodmap -e 'keycode {{keycode}} = {{keyname}}'`

- Disable a key on the keyboard:

`xmodmap -e 'keycode {{keycode}} ='`

- Execute all xmodmap expressions in the specified file:

`xmodmap {{path/to/file}}`
