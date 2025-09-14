---
title: "Sync GitHub Labels - Control Repository Labels | Free DevTools"
name: github-label-sync
path: /freedevtools/tldr/git/github-label-sync
canonical: "https://hexmos.com/freedevtools/tldr/git/github-label-sync/"
description: "Control GitHub repository labels efficiently with GitHub Label Sync. Synchronize labels, manage inconsistencies, and ensure organization. Free online tool, no registration required."
category: common
keywords:
- github label synchronization
- repository label management
- github label sync
- github label updater
- label sync json
- github labels cli
- github label automation
- github repository configuration
- github label tool
- github label migration
features:
- Synchronize GitHub labels from a JSON file
- Perform dry runs to preview label changes
- Allow added labels that aren't in the JSON file
- Authenticate using an access token or environment variable
- Manage repository labels automatically
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# github-label-sync

> Synchronize GitHub labels.
> More information: <https://github.com/Financial-Times/github-label-sync>.

- Synchronize labels using a local `labels.json` file:

`github-label-sync --access-token {{token}} {{repository_name}}`

- Synchronize labels using a specific labels JSON file:

`github-label-sync --access-token {{token}} --labels {{url|path/to/json_file}} {{repository_name}}`

- Perform a dry run instead of actually synchronizing labels:

`github-label-sync --access-token {{token}} --dry-run {{repository_name}}`

- Keep labels that aren't in `labels.json`:

`github-label-sync --access-token {{token}} --allow-added-labels {{repository_name}}`

- Synchronize using the `GITHUB_ACCESS_TOKEN` environment variable:

`github-label-sync {{repository_name}}`
