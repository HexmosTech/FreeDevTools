---
title: "Debian Changelog - Maintain Package Changelog | Free DevTools"
name: debchange
path: /freedevtools/tldr/linux/debchange
canonical: "https://hexmos.com/freedevtools/tldr/linux/debchange/"
description: "Maintain Debian package changelogs with debchange. Update versions, add entries, and close bugs in your Debian source package. Free online tool, no registration required."
category: linux
keywords:
- debian changelog editor
- linux changelog manager
- deb package changelog update
- debian source package manager
- debchange command
- debian nmu update
- debian bug fix log
- debian package version control
- linux debchange command tool
- debian package changelog tool
features:
- Add new versions to Debian package changelogs.
- Append changelog entries for current versions.
- Close bugs in the changelog using bug IDs.
- Support non-maintainer uploads.
- Easily manage Debian package release notes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# debchange

> Maintain the debian/changelog file of a Debian source package.
> More information: <https://manned.org/debchange.1>.

- Add a new version for a non-maintainer upload to the changelog:

`debchange {{[-n|--nmu]}}`

- Add a changelog entry to the current version:

`debchange {{[-a|--append]}}`

- Add a changelog entry to close the bug with specified ID:

`debchange --closes {{bug_id}}`
