---
title: "Stow Symlink Manager - Manage Dotfiles | Online Free DevTools by Hexmos"
name: stow
path: /freedevtools/tldr/st/stow
canonical: "https://hexmos.com/freedevtools/tldr/st/stow/"
description: "Manage dotfiles easily with Stow Symlink Manager. Organize configurations and maintain consistency across systems using symlinks. Free online tool, no registration required."
category: common
keywords:
- dotfile manager
- symlink manager
- stow dotfiles
- configuration manager
- linux symlink
- macos symlink
- stow symlink
- dotfile management
- symbolic link
- dotfile organization
features:
- Recursively symlink files to a target directory
- Delete symlinks from a specified directory
- Simulate stow operations before execution
- Delete and recreate symlinks with restow
- Exclude files from stow operations using regular expressions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# stow

> Symlink manager.
> Often used to manage dotfiles.
> See also: `chezmoi`, `tuckr`, `vcsh`, `homeshick`.
> More information: <https://www.gnu.org/software/stow/manual/stow.html#Invoking-Stow>.

- Symlink all files recursively to a given directory:

`stow {{[-t|--target]}} {{path/to/target_directory}} {{file1 directory1 file2 directory2}}`

- Delete symlinks recursively from a given directory:

`stow {{[-D|--delete]}} {{[-t|--target]}} {{path/to/target_directory}} {{file1 directory1 file2 directory2}}`

- Simulate to see what the result would be like:

`stow {{[-n|--simulate]}} {{[-t|--target]}} {{path/to/target_directory}} {{file1 directory1 file2 directory2}}`

- Delete and resymlink:

`stow {{[-R|--restow]}} {{[-t|--target]}} {{path/to/target_directory}} {{file1 directory1 file2 directory2}}`

- Exclude files matching a `regex`:

`stow --ignore={{regex}} {{[-t|--target]}} {{path/to/target_directory}} {{file1 directory1 file2 directory2}}`
