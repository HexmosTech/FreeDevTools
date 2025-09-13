---
title: "GitHub API - Execute Authenticated API Requests | Free DevTools"
name: gh-api
path: /freedevtools/tldr/gh/gh-api
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-api/"
description: "Execute GitHub API requests seamlessly with gh-api. Authenticate requests, retrieve data, and manage your GitHub resources efficiently. Free online tool, no registration required."
category: common
keywords:
- github api request
- authenticated api call
- github cli api
- github rest api
- api data retrieval
- github resource management
- gh api command
- graphql api query
- github enterprise server api
- github api json
features:
- Execute authenticated HTTP requests to the GitHub API.
- Retrieve and display API responses in JSON format.
- Send custom requests using various HTTP methods (POST, GET, etc.).
- Include HTTP response headers in the output for detailed information.
- Send API requests to a specific GitHub Enterprise Server instance.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh api

> Make authenticated HTTP requests to the GitHub API and print the response.
> More information: <https://cli.github.com/manual/gh_api>.

- Display the releases for the current repository in JSON format:

`gh api repos/:owner/:repo/releases`

- Create a reaction for a specific issue:

`gh api {{[-H|--header]}} {{Accept:application/vnd.github.squirrel-girl-preview+json}} {{[-f|--raw-field]}} '{{content=+1}}' {{repos/:owner/:repo/issues/123/reactions}}`

- Display the result of a GraphQL query in JSON format:

`gh api graphql {{[-f|--field]}} {{name=':repo'}} {{[-f|--raw-field]}} '{{query}}'`

- Send a request using a custom HTTP method:

`gh api {{[-X|--method]}} {{POST}} {{endpoint}}`

- Include the HTTP response headers in the output:

`gh api {{[-i|--include]}} {{endpoint}}`

- Do not print the response body:

`gh api --silent {{endpoint}}`

- Send a request to a specific GitHub Enterprise Server:

`gh api --hostname {{github.example.com}} {{endpoint}}`

- Display the subcommand help:

`gh api --help`
