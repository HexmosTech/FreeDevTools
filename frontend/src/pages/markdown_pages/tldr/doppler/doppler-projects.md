---
title: "Doppler Projects - Manage Secure Configuration | Free DevTools"
name: doppler-projects
path: /freedevtools/tldr/common/doppler-projects
canonical: "https://hexmos.com/freedevtools/tldr/common/doppler-projects/"
description: "Manage Doppler projects securely with Doppler Projects command. Create, update, and delete projects, ensuring secure configuration management. Free online tool, no registration required."
category: common
keywords:
- Doppler projects management
- Configuration management projects
- Secure project configuration
- Doppler CLI projects
- Projects create update delete
- Secrets management project
- Environment variables project
- Project access control
- DevOps configuration
- Infrastructure as code Doppler
features:
- List all Doppler projects.
- Retrieve information for a specific project.
- Create new Doppler projects easily.
- Update existing project names and descriptions.
- Delete Doppler projects when no longer needed.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doppler projects

> Manage Doppler Projects.
> More information: <https://docs.doppler.com/docs/cli>.

- Get all projects:

`doppler projects`

- Get info for a project:

`doppler projects get {{name|project_id}}`

- Create a project:

`doppler projects create {{name}}`

- Update a project's name and description:

`doppler projects update {{name|project_id}} --name "{{new_name}}" --description "{{new_description}}"`

- Delete a project:

`doppler projects delete {{name|project_id}}`
