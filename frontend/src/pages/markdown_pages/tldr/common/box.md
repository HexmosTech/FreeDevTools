---
title: "Box Phar Manager - Create Phars | Online Free DevTools by Hexmos"
name: box
path: /freedevtools/tldr/common/box
canonical: "https://hexmos.com/freedevtools/tldr/common/box/"
description: "Create PHP Phar archives with Box Phar Manager. Build, compile, and validate Phars easily using the command line. Free online tool, no registration required."
category: common
keywords:
- php phar manager
- phar archive creation
- phar compiler
- box phar builder
- phar validator
- phar signature verification
- php application packaging
- command line phar tool
- phar archive tool
- php phar extension
features:
- Compile PHP applications into Phar archives
- Validate Phar configuration files
- Verify Phar archive signatures
- Display information about Phar archives
- Manage Phar archives via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# box

> A PHP application for building and managing Phars.
> More information: <https://github.com/box-project/box>.

- Compile a new Phar file:

`box compile`

- Compile a new Phar file using a specific configuration file:

`box compile {{[-c|--config]}} {{path/to/config}}`

- Display information about the PHAR PHP extension:

`box info`

- Display information about a specific Phar file:

`box info {{path/to/phar_file}}`

- Validate the first found configuration file in the working directory:

`box validate`

- Verify the signature of a specific Phar file:

`box verify {{path/to/phar_file}}`

- Display help:

`box help`
