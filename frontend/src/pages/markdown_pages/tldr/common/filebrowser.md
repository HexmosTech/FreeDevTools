---
title: "Manage Files - Browse Directories with Filebrowser | Online Free DevTools by Hexmos"
name: filebrowser
path: /freedevtools/tldr/common/filebrowser
canonical: "https://hexmos.com/freedevtools/tldr/common/filebrowser/"
description: "Manage files with Filebrowser, a simple HTTP web server. Browse directories, upload and download files easily. Free online tool, no registration required."
category: common
keywords:
- file manager
- web file browser
- http file server
- directory browser
- file upload
- file download
- file directory management
- command line file browser
- simple file server
- web directory browser
features:
- Serve files and directories over HTTP
- Browse and manage files through a web interface
- Configure server address and port
- Set up user accounts with custom usernames and passwords
- Disable thumbnails and command runner for enhanced security
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# filebrowser

> Simple HTTP web server to manage files and directories.
> More information: <https://filebrowser.org>.

- Start a new server instance serving the current directory:

`filebrowser`

- Start a new server instance serving a specific root directory:

`filebrowser {{[-r|--root]}} {{path/to/directory}}`

- Start an instance with different host address (defaults to `127.0.0.1`) and port (defaults to `8080`):

`filebrowser {{[-a|--address]}} {{host}} {{[-p|--port]}} {{port}} {{[-r|--root]}} {{path/to/directory}}`

- Start an instance with a specified configuration file, storing the application database in a specific location (defaults to `filebrowser.db` on the current directory):

`filebrowser {{[-c|--config]}} {{path/to/file}} {{[-d|--database]}} {{path/to/database.db}} {{[-r|--root]}} {{path/to/directory}}`

- Set up a different default first-time account username and password (both default to `admin`) when setting up a new instance:

`filebrowser --username {{username}} --password {{password}} {{[-r|--root]}} {{path/to/directory}}`

- Set up the maximum amount of image processors used when generating thumbnails (defaults to `4`):

`filebrowser --img-processors {{4}} {{[-r|--root]}} {{path/to/directory}}`

- Disable image thumbnails as well as the Command Runner feature, limiting access for hosted script files from being executed inside the app:

`filebrowser --disable-exec --disable-thumbnails {{[-r|--root]}} {{path/to/directory}}`

- Disable resizing of image previews as well as detecting file types by reading their headers:

`filebrowser --disable-preview-resize --disable-type-detection-by-header {{[-r|--root]}} {{path/to/directory}}`
