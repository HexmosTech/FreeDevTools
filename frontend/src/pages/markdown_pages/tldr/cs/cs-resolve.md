---
title: "Resolve Dependencies - List Transitive Deps with Coursier | Online Free DevTools by Hexmos"
name: cs-resolve
path: /freedevtools/tldr/cs/cs-resolve
canonical: "https://hexmos.com/freedevtools/tldr/cs/cs-resolve/"
description: "Resolve dependencies effortlessly with Coursier. List transitive dependencies and pinpoint conflicts in your Java/Scala projects. Free online tool, no registration required."
category: common
keywords:
- coursier dependency resolution
- scala transitive dependencies
- java dependency tree
- coursier resolve conflicts
- dependency management coursier
- coursier graph dependencies
- coursier package resolution
- coursier maven dependencies
- coursier gradle dependencies
- coursier artifact resolution
features:
- List transitive dependencies of artifacts
- Generate dependency tree for specified artifact
- Display reverse dependency tree
- Identify libraries that depend on a specific library
- Detect and report dependency conflicts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cs resolve

> Resolve lists the transitive dependencies of other dependencies.
> More information: <https://get-coursier.io/docs/cli-resolve>.

- Resolve lists of transitive dependencies of two dependencies:

`cs resolve {{group_id1}}:{{artifact_id1}}:{{artifact_version1}} {{group_id2}}:{{artifact_id2}}:{{artifact_version2}}`

- Resolve lists of transitive dependencies of a package by the dependency tree:

`cs resolve --tree {{group_id}}:{{artifact_id}}:{{artifact_version}}`

- Resolve dependency tree in a reverse order (from a dependency to its dependencies):

`cs resolve --reverse-tree {{group_id}}:{{artifact_id}}:{{artifact_version}}`

- Print all the libraries that depends on a specific library:

`cs resolve {{group_id}}:{{artifact_id}}:{{artifact_version}} --what-depends-on {{searched_group_id}}:{{searched_artifact_id}}`

- Print all the libraries that depends on a specific library version:

`cs resolve {{group_id}}:{{artifact_id}}:{{artifact_version}} --what-depends-on {{searched_group_id}}:{{searched_artifact_id}}{{searched_artifact_version}}`

- Print eventual conflicts between a set of packages:

`cs resolve --conflicts {{group_id1:artifact_id1:artifact_version1 group_id2:artifact_id2:artifact_version2 ...}}`
