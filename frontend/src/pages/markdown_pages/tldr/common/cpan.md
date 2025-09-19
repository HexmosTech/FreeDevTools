---
title: "CPAN - Manage Perl Modules | Online Free DevTools by Hexmos"
name: cpan
path: /freedevtools/tldr/common/cpan
canonical: "https://hexmos.com/freedevtools/tldr/common/cpan/"
description: "Manage Perl modules with CPAN. Install, upgrade, recompile, and force install Perl modules effortlessly. Free online tool, no registration required."
category: common
keywords:
- perl module manager
- cpan module installation
- perl package management
- cpan upgrade modules
- perl module recompile
- cpan force install
- perl dependency management
- cpan command line tool
- cpan module repository
- perl module installer
features:
- Install Perl modules from CPAN
- Upgrade all installed Perl modules
- Force install a Perl module
- Recompile installed Perl modules
- Manage Perl module dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cpan

> Query, download and build perl modules from CPAN sites.
> More information: <https://manned.org/cpan>.

- Install a module (`-i` is optional):

`cpan {{-i}} {{module_name}}`

- Force install a module (`-i` is not optional):

`cpan -fi {{module_name}}`

- Upgrade all installed modules:

`cpan -u`

- Recompile modules:

`cpan -r`
