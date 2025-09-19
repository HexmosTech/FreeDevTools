---
title: "Manage MIME Types - Control File Associations with xdg-mime | Online Free DevTools by Hexmos"
name: xdg-mime
path: /freedevtools/tldr/linux/xdg-mime
canonical: "https://hexmos.com/freedevtools/tldr/linux/xdg-mime/"
description: "Manage and query MIME types with xdg-mime.  Control file associations and default applications for various file types easily. Free online tool, no registration required."
category: linux
keywords:
  - MIME type management
  - xdg-mime command
  - file association control
  - linux file type
  - default application setting
  - query filetype command
  - set default application
  - linux command line
  - desktop file management
  - xdg-utils
features:
  - Query the MIME type of any file.
  - Determine the default application for a specific MIME type.
  - Set the default application for a specific MIME type.
  - Set default applications for multiple MIME types simultaneously.
  - Manage file associations according to the XDG standard.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xdg-mime

> Query and manage MIME types according to the XDG standard.
> More information: <https://portland.freedesktop.org/doc/xdg-mime.html>.

- Display the MIME type of a file:

`xdg-mime query filetype {{path/to/file}}`

- Display the default application for opening PNGs:

`xdg-mime query default {{image/png}}`

- Display the default application for opening a specific file:

`xdg-mime query default $(xdg-mime query filetype {{path/to/file}})`

- Set imv as the default application for opening PNG and JPEG images:

`xdg-mime default {{imv.desktop}} {{image/png}} {{image/jpeg}}`
