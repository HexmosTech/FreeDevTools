---
title: "Find Secrets with TruffleHog - Scan Git Repos | Online Free DevTools by Hexmos"
name: trufflehog
path: /freedevtools/tldr/common/trufflehog
canonical: "https://hexmos.com/freedevtools/tldr/common/trufflehog/"
description: "Find secrets with TruffleHog, a powerful secret scanner for code repositories. Identify exposed credentials and sensitive data. Free online tool, no registration required."
category: common
keywords:
- Git secret scanner
- S3 credential scanner
- Docker image secret finder
- GitHub secret detection
- IAM role scanner
- File system secret search
- TruffleHog secret detector
- Repository security scanner
- Data leak prevention
- Compliance scanner
features:
- Scan Git repositories for verified secrets.
- Scan GitHub organizations for verified secrets.
- Scan S3 buckets using IAM roles.
- Scan Docker images for exposed credentials.
- Scan file systems for sensitive data.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# trufflehog

> Find and verify credentials in files, Git repositories, S3 buckets, and Docker images.
> More information: <https://github.com/trufflesecurity/trufflehog>.

- Scan a Git repository for verified secrets:

`trufflehog git {{https://github.com/trufflesecurity/test_keys}} --only-verified`

- Scan a GitHub organization for verified secrets:

`trufflehog github --org {{trufflesecurity}} --only-verified`

- Scan a GitHub repository for verified keys and get JSON output:

`trufflehog git {{https://github.com/trufflesecurity/test_keys}} --only-verified --json`

- Scan a GitHub repository along with its Issues and Pull Requests:

`trufflehog github --repo {{https://github.com/trufflesecurity/test_keys}} --issue-comments --pr-comments`

- Scan an S3 bucket for verified keys:

`trufflehog s3 --bucket {{bucket name}} --only-verified`

- Scan S3 buckets using IAM Roles:

`trufflehog s3 --role-arn {{iam-role-arn}}`

- Scan individual files or directories:

`trufflehog filesystem {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Scan a Docker image for verified secrets:

`trufflehog docker --image {{trufflesecurity/secrets}} --only-verified`
