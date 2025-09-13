---
title: "HTTP Server Upload - Create a Simple File Upload Server | Free DevTools"
name: http-server-upload
path: /freedevtools/tldr/common/http-server-upload
canonical: "https://hexmos.com/freedevtools/tldr/common/http-server-upload/"
description: "Create a simple file upload server with HTTP Server Upload. Quickly share files through a lightweight interface. Free online tool, no registration required."
category: common
keywords:
- HTTP Server upload
- file upload server
- simple HTTP server
- command line file server
- local file sharing
- zero configuration server
- HTTP file upload
- lightweight file server
- web server upload
- command line uploader
features:
- Start a server for uploading files via HTTP.
- Configure the maximum file size allowed for uploads.
- Specify the port on which the HTTP server will listen.
- Define a directory to store uploaded files.
- Use a temporary directory for upload processing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# http-server-upload

> Zero-configuration HTTP server which provides a lightweight interface to upload files.
> More information: <https://github.com/crycode-de/http-server-upload>.

- Start an HTTP server on the default port to upload files to the current directory:

`http-server-upload`

- Start an HTTP server with the specified maximum allowed file size for uploads in MiB (defaults to 200 MiB):

`MAX_FILE_SIZE={{size_in_megabytes}} http-server-upload`

- Start an HTTP server on a specific port to upload files to the current directory:

`PORT={{port}} http-server-upload`

- Start an HTTP server, storing the uploaded files in a specific directory:

`UPLOAD_DIR={{path/to/directory}} http-server-upload`

- Start an HTTP server using a specific directory to temporarily store files during the upload process:

`UPLOAD_TMP_DIR={{path/to/directory}} http-server-upload`

- Start an HTTP server accepting uploads with a specific token field in the HTTP post:

`TOKEN={{secret}} http-server-upload`
