---
title: "Cloud Foundry Control - Manage Cloud Apps | Online Free DevTools by Hexmos"
name: cf
path: /freedevtools/tldr/common/cf
canonical: "https://hexmos.com/freedevtools/tldr/common/cf/"
description: "Control your Cloud Foundry applications with CF. Deploy, manage services, and monitor logs instantly. Free online tool, no registration required."
category: common
keywords:
- cloud foundry control
- cf command line
- cloud application management
- cf cli commands
- cloud foundry deployment
- cf service management
- cloud foundry logs
- cf app push
- cf marketplace
- cloud foundry ssh
features:
- Deploy applications to Cloud Foundry
- Manage services within a Cloud Foundry organization
- Bind services to applications
- Execute tasks within a deployed application
- Access application logs for monitoring and debugging
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cf

> Manage apps and services on Cloud Foundry.
> More information: <https://docs.cloudfoundry.org>.

- Log in to the Cloud Foundry API:

`cf login -a {{api_url}}`

- Push an app using the default settings:

`cf push {{app_name}}`

- View the services available from your organization:

`cf marketplace`

- Create a service instance:

`cf create-service {{service}} {{plan}} {{service_name}}`

- Connect an application to a service:

`cf bind-service {{app_name}} {{service_name}}`

- Run a script whose code is included in the app, but runs independently:

`cf run-task {{app_name}} "{{script_command}}" --name {{task_name}}`

- Start an interactive SSH session with a VM hosting an app:

`cf ssh {{app_name}}`

- View a dump of recent app logs:

`cf logs {{app_name}} --recent`
