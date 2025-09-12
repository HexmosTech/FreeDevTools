---
title: "RPMBuild - Create RPM Packages | Free DevTools"
name: rpmbuild
path: /freedevtools/tldr/unknown/rpmbuild
canonical: "https://hexmos.com/freedevtools/tldr/unknown/rpmbuild/"
description: "Create RPM packages effortlessly with RPMBuild. Build binary and source packages for Linux distributions. Free online tool, no registration required."
category: unknown
keywords:
- RPM package builder
- Linux package management
- RPM specification file
- Binary package creation
- Source package creation
- RPM build process
- RPM package distribution
- Linux software packaging
- Package definition files
- rpmbuild command line
features:
- Build binary packages from SPEC files
- Build source packages from SPEC files
- Define variables during package build
- Create RPM packages for distribution
- Automate the RPM package creation process
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rpmbuild

> RPM Package Build tool.
> More information: <https://manned.org/rpmbuild>.

- Build binary and source packages:

`rpmbuild -ba {{path/to/spec_file}}`

- Build a binary package without source package:

`rpmbuild -bb {{path/to/spec_file}}`

- Specify additional variables when building a package:

`rpmbuild -bb {{path/to/spec_file}} --define "{{variable1}} {{value1}}" --define "{{variable2}} {{value2}}"`
