---
title: "GBP - Build Debian Packages with Git | Online Free DevTools by Hexmos"
name: gbp
path: "/freedevtools/tldr/linux/gbp"
canonical: "https://hexmos.com/freedevtools/tldr/linux/gbp/"
description: "Build Debian packages efficiently with GBP, integrating Git workflow. Automate package building, manage versions, and streamline Debian development. Free online tool, no registration required."
category: linux
keywords:
- debian package build
- git buildpackage
- gbp build tool
- linux debian packaging
- debian version control
- package building automation
- debian git integration
- bullseye pbuilder
- debian source upload
- git import orig
features:
- Import Debian packages from DSC files
- Build packages using the default debuild builder
- Build packages in a pbuilder environment
- Specify source-only uploads for Debian packages
- Import new upstream releases using pristine-tar
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gbp

> A system to integrate the Debian package build system with Git.
> More information: <https://honk.sigxcpu.org/projects/git-buildpackage/manual-html/gbp.html>.

- Convert an existing Debian package to gbp:

`gbp import-dsc {{path/to/package.dsc}}`

- Build the package in the current directory using the default builder (`debuild`):

`gbp buildpackage -jauto -us -uc`

- Build a package in a `pbuilder` environment for Debian Bullseye:

`DIST={{bullseye}} ARCH={{amd64}} gbp buildpackage -jauto -us -uc --git-builder={{git-pbuilder}}`

- Specify a package to be a source-only upload in the `.changes` file (see <https://wiki.debian.org/SourceOnlyUpload>):

`gbp buildpackage -jauto -us -uc --changes-options={{-S}}`

- Import a new upstream release:

`gbp import-orig --pristine-tar {{path/to/package.tar.gz}}`
