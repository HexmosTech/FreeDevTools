---
title: "GCloud Projects - Manage Cloud Resources | Online Free DevTools by Hexmos"
name: gcloud-projects
path: /freedevtools/tldr/gcloud/gcloud-projects
canonical: "https://hexmos.com/freedevtools/tldr/gcloud/gcloud-projects/"
description: "Manage Google Cloud projects easily with GCloud Projects. Control access policies, create, delete, and list projects. Free online tool, no registration required."
category: common
keywords:
- gcloud projects management
- google cloud project control
- gcloud create project
- gcloud delete project
- gcloud list projects
- gcloud iam policy binding
- gcloud project describe
- cloud resource management
- gcp project access
- google cloud cli tools
features:
- Create new Google Cloud projects
- List all active Google Cloud projects
- Display metadata for a specific project
- Delete existing Google Cloud projects
- Add IAM policy bindings to control access
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gcloud projects

> Manage project access policies in Google Cloud.
> See also: `gcloud`.
> More information: <https://cloud.google.com/sdk/gcloud/reference/projects>.

- Create a new project:

`gcloud projects create {{project_id|project_number}}`

- List all active projects:

`gcloud projects list`

- Display metadata for a project:

`gcloud projects describe {{project_id}}`

- Delete a project:

`gcloud projects delete {{project_id|project_number}}`

- Add an IAM policy binding to a specified project:

`gcloud projects add-iam-policy-binding {{project_id}} --member {{principal}} --role {{role}}`
