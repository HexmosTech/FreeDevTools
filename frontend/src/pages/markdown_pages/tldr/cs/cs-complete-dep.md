---
title: "Complete Dependency - Search Maven Artifacts | Free DevTools"
name: cs-complete-dep
path: /freedevtools/tldr/common/cs-complete-dep
canonical: "https://hexmos.com/freedevtools/tldr/common/cs-complete-dep/"
description: "Search Maven artifacts with Complete Dependency tool. Quickly find library versions and group identifiers without web browsing. Free online tool, no registration required."
category: common
keywords:
- maven artifact search
- dependency completion
- coursier complete-dep
- library version finder
- ivy2local repository
- maven group identifier
- artifact identifier
- dependency resolver
- cli dependency search
- command line dependency
features:
- Search for artifacts under a Maven group identifier.
- List published library versions under a specific Maven group and artifact.
- Search for artifacts in ivy2local repository.
- Authenticate against repositories with username and password.
- Retrieve dependencies from specified repository URL.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cs complete-dep

> Search for libraries without doing it directly on the web.
> More information: <https://get-coursier.io/docs/cli-complete>.

- Print which artifacts are published under a specific Maven group identifier:

`cs complete-dep {{group_id}}`

- List published library versions under a specific Maven group identifier and an artifact one:

`cs complete-dep {{group_id}}:{{artifact_id}}`

- Print which artifacts are pubblished under a given Maven groupId searching in the ivy2local:

`cs complete-dep {{group_id}} --repository ivy2local`

- List published artifacts under a Maven group identifier searching in a specific repository and credentials:

`cs complete-dep {{group_id}}:{{artifact_id}} --repository {{repository_url}} --credentials {{user}}:{{password}}`
