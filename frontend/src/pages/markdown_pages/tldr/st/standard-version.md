---
title: "Generate Changelog - standard-version for Automated Releases | Online Free DevTools by Hexmos"
name: standard-version
path: /freedevtools/tldr/st/standard-version
canonical: "https://hexmos.com/freedevtools/tldr/st/standard-version/"
description: "Automate changelog generation with standard-version, leveraging SemVer for automated releases. Enhance workflow with Conventional Commits. Free online tool, no registration required."
category: common
keywords:
- changelog generator
- automated release tool
- semantic versioning
- standard-version CLI
- conventional commits
- version bump automation
- release tagging
- changelog management
- git release automation
- semver automation
features:
- Automates version bumping based on commit messages.
- Generates changelogs following Conventional Commits.
- Creates git tags for releases.
- Supports pre-release versions like alpha and beta.
- Allows dry-run mode to preview changes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# standard-version

> Automate versioning and changelog generation, with SemVer and Conventional Commits.
> More information: <https://github.com/conventional-changelog/standard-version>.

- Update the changelog file and tag a release:

`standard-version`

- Tag a release without bumping the version:

`standard-version --first-release`

- Update the changelog and tag an alpha release:

`standard-version --prerelease alpha`

- Update the changelog and tag a specific release type:

`standard-version --release-as {{major|minor|patch}}`

- Tag a release, preventing hooks from being verified during the commit step:

`standard-version --no-verify`

- Tag a release committing all staged changes, not just files affected by `standard-version`:

`standard-version --commit-all`

- Update a specific changelog file and tag a release:

`standard-version --infile {{path/to/file.md}}`

- Display the release that would be performed without performing them:

`standard-version --dry-run`
