---
title: "Generate Satis Repository - Static Composer Output | Online Free DevTools by Hexmos"
name: satis
path: /freedevtools/tldr/common/satis
canonical: "https://hexmos.com/freedevtools/tldr/common/satis/"
description: "Generate static Composer repositories with Satis. Build optimized package distributions, manage dependencies, and streamline deployments. Free online tool, no registration required."
category: common
keywords:
- composer repository
- satis repository
- static composer
- php package manager
- package distribution
- satis configuration
- composer dependencies
- package archive
- satis build
- composer mirror
features:
- Initialize a new Satis configuration file.
- Add VCS repositories to a Satis configuration.
- Build static Composer repositories from a configuration.
- Update specific repositories during the build process.
- Remove unnecessary archive files after building.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# satis

> The utility for the Satis static Composer repository.
> More information: <https://github.com/composer/satis>.

- Initialize a Satis configuration:

`satis init {{satis.json}}`

- Add a VCS repository to the Satis configuration:

`satis add {{repository_url}}`

- Build the static output from the configuration:

`satis build {{satis.json}} {{path/to/output_directory}}`

- Build the static output by updating only the specified repository:

`satis build --repository-url {{repository_url}} {{satis.json}} {{path/to/output_directory}}`

- Remove useless archive files:

`satis purge {{satis.json}} {{path/to/output_directory}}`
