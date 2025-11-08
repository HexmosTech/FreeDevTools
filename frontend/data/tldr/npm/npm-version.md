---
title: "NPM Version - Bump Package Versions Easily | Online Free DevTools by Hexmos"
name: npm-version
path: "/freedevtools/tldr/npm/npm-version/"
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-version/"
description: "Bump node package versions easily with NPM Version. Manage your project versions, create tags, and customize commit messages. Free online tool, no registration required."
category: common
keywords:
- npm version control
- node package versioning
- javascript version bump
- npm version patch
- npm version minor
- npm version major
- npm versioning
- node version management
- command line version tool
- package version manager
features:
- Bump minor versions of node packages
- Set specific package versions
- Bump patch versions without git tags
- Customize commit messages for version bumps
- Check the current version of a node package
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npm version

> Bump a node package version.
> More information: <https://docs.npmjs.com/cli/npm-version>.

- Check current version:

`npm version`

- Bump the minor version:

`npm version minor`

- Set a specific version:

`npm version {{version}}`

- Bump the patch version without creating a Git tag:

`npm version patch --no-git-tag-version`

- Bump the major version with a custom commit message:

`npm version major {{[-m|--message]}} "{{Upgrade to %s for reasons}}"`
