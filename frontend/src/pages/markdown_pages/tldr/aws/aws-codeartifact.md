---
title: "CodeArtifact - Manage AWS Artifact Repositories | Online Free DevTools by Hexmos"
name: aws-codeartifact
path: /freedevtools/tldr/aws/aws-codeartifact
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-codeartifact/"
description: "Manage AWS artifacts with CodeArtifact. Generate credentials and repository endpoints. Securely store and share software packages. Free online tool, no registration required."
category: common
keywords:
- CodeArtifact repository management
- AWS artifact storage
- Package manager credential generation
- Repository endpoint retrieval
- Maven artifact management
- npm package management
- pypi package management
- AWS command-line tools
- Software artifact version control
- Domain listing
features:
- List available CodeArtifact domains
- Generate credentials for various package managers
- Retrieve repository endpoint URLs for different formats
- Display help information for CodeArtifact commands
- Manage CodeArtifact packages and package versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws codeartifact

> Manage CodeArtifact repositories, domains, packages, package versions and assets.
> CodeArtifact is an artifact repository compatible with popular package managers and build tools like Maven, Gradle, npm, Yarn, Twine, pip, NuGet, and SwiftPM.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/codeartifact/index.html>.

- List available domains for your AWS account:

`aws codeartifact list-domains`

- Generate credentials for a specific package manager:

`aws codeartifact login --tool {{npm|pip|twine}} --domain {{your_domain}} --repository {{repository_name}}`

- Get the endpoint URL of a CodeArtifact repository:

`aws codeartifact get-repository-endpoint --domain {{your_domain}} --repository {{repository_name}} --format {{npm|pypi|maven|nuget|generic}}`

- Display help:

`aws codeartifact help`

- Display help for a specific subcommand:

`aws codeartifact {{subcommand}} help`
