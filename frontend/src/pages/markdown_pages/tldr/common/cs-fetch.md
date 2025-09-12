---
title: "Fetch JARs - Resolve Dependencies with cs-fetch | Free DevTools"
name: cs-fetch
path: /freedevtools/tldr/common/cs-fetch
canonical: "https://hexmos.com/freedevtools/tldr/common/cs-fetch/"
description: "Resolve dependencies with cs-fetch. Download JAR files, source code, and Javadoc effortlessly. Free online tool, no registration required."
category: common
keywords:
- Coursier dependency fetch
- JAR file downloader
- Coursier JAR resolver
- Scala dependency management
- Coursier classpath fetch
- Coursier source fetch
- Coursier javadoc fetch
- Coursier artifact retrieval
- Coursier dependency file
- Coursier library fetch
features:
- Fetches JARs for specific dependencies.
- Resolves classpath for selected packages.
- Downloads source code for dependencies.
- Retrieves Javadoc JARs for dependencies.
- Supports dependency files for batch fetching.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cs fetch

> Fetch fetches the JARs of dependencies.
> More information: <https://get-coursier.io/docs/cli-fetch>.

- Fetch a specific version of a jar:

`cs fetch {{group_id}}:{{artifact_id}}:{{artifact_version}}`

- Fetch a package and evaluate the classpath corresponding to the selected package in an env var:

`CP="$(cs fetch --classpath org.scalameta::scalafmt-cli:latest.release)"`

- Fetch a source of a specific jar:

`cs fetch --sources {{group_id}}:{{artifact_id}}:{{artifact_version}}`

- Fetch the javadoc jars:

`cs fetch --javadoc {{group_id}}:{{artifact_id}}:{{artifact_version}}`

- Fetch dependency with javadoc jars and source jars:

`cs fetch --default={{true}} --sources --javadoc {{group_id}}:{{artifact_id}}:{{artifact_version}}`

- Fetch jars coming from dependency files:

`cs fetch {{--dependency-file path/to/file1 --dependency-file path/to/file2 ...}}`
