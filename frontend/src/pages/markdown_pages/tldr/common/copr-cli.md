---
title: "Build RPMs - Manage COPR Projects with copr-cli | Online Free DevTools by Hexmos"
name: copr-cli
path: /freedevtools/tldr/common/copr-cli
canonical: "https://hexmos.com/freedevtools/tldr/common/copr-cli/"
description: "Build RPMs with copr-cli for Fedora projects. Manage COPR repositories and trigger builds from local spec files or Git repositories. Free online tool, no registration required."
category: common
keywords:
- rpm builder
- copr builder
- fedora rpm
- rpm build tool
- copr-cli rpm
- linux rpm builder
- copr project manager
- copr build trigger
- copr repository build
- fedora package build
features:
- Build RPM packages from local spec files on COPR.
- Manage and monitor the status of COPR builds.
- Trigger builds from public Git repositories.
- Authenticate and display the logged-in COPR user.
- List existing builds within a specified COPR repository.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# copr-cli

> Interface with Fedora-Projects copr instance for building RPMs and publishing them.
> More information: <https://manned.org/copr-cli>.

- Show user logged in to copr:

`copr-cli whoami`

- Build a local spec file on copr:

`copr-cli build {{repository}} {{path/to/spec_file}}`

- Check status of builds:

`copr-cli list-builds {{repository}}`

- Trigger a copr build of a spec-file from public (Git) repository:

`copr-cli buildscm {{repository}} --clone-url {{https://git.example.org/repo}} --spec {{spec_file_name}}`
