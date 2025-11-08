---
title: "Detect Secrets with Gitleaks - Find Leaks | Online Free DevTools by Hexmos"
name: gitleaks
path: "/freedevtools/tldr/git/gitleaks/"
canonical: "https://hexmos.com/freedevtools/tldr/git/gitleaks/"
description: "Detect secrets with Gitleaks. Find API keys and credentials leaked in Git repositories. Free online tool, no registration required."
category: common
keywords:
- Git secrets detection
- API key scanner
- Credential leak finder
- Gitleaks repository scan
- Secrets scanning tool
- Git security audit
- Configuration file analysis
- Commit history analysis
- Staged changes protection
- Local repository security
features:
- Scan remote Git repositories for secrets
- Scan local directories for leaked credentials
- Output scan results to a JSON report file
- Use custom rules to define secrets
- Scan staged changes for secrets before committing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gitleaks

> Detect secrets and API keys leaked in Git repositories.
> More information: <https://github.com/gitleaks/gitleaks>.

- Scan a remote repository:

`gitleaks detect --repo-url {{https://github.com/username/repository.git}}`

- Scan a local directory:

`gitleaks detect --source {{path/to/repository}}`

- Output scan results to a JSON file:

`gitleaks detect --source {{path/to/repository}} --report {{path/to/report.json}}`

- Use a custom rules file:

`gitleaks detect --source {{path/to/repository}} --config-path {{path/to/config.toml}}`

- Start scanning from a specific commit:

`gitleaks detect --source {{path/to/repository}} --log-opts {{--since=commit_id}}`

- Scan uncommitted changes before a commit:

`gitleaks protect --staged`

- Display verbose output indicating which parts were identified as leaks during the scan:

`gitleaks protect --staged --verbose`
