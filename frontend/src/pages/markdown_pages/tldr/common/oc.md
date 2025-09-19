---
title: "OpenShift CLI - Manage Containers | Online Free DevTools by Hexmos"
name: oc
path: /freedevtools/tldr/common/oc
canonical: "https://hexmos.com/freedevtools/tldr/common/oc/"
description: "Manage containers with OpenShift CLI. Deploy applications, control pods, and manage projects from the command line. Free online tool, no registration required."
category: common
keywords:
- openshift cli
- container management
- openshift commands
- kubernetes cli
- pod management
- project management
- container deployment
- openshift application
- openshift project
- openshift pod
features:
- Manage OpenShift Container Platform projects
- Deploy applications to OpenShift Container Platform
- Control container pods within OpenShift
- Execute commands within container environments
- Manage user sessions with the OpenShift CLI
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# oc

> The OpenShift Container Platform CLI.
> Allows for application and container management.
> More information: <https://docs.openshift.com/container-platform/latest/cli_reference/get_started_cli.html>.

- Log in to the OpenShift Container Platform server:

`oc login`

- Create a new project:

`oc new-project {{project_name}}`

- Switch to an existing project:

`oc project {{project_name}}`

- Add a new application to a project:

`oc new-app {{repo_url}} --name {{application}}`

- Open a remote shell session to a container:

`oc rsh {{pod_name}}`

- List pods in a project:

`oc get pods`

- Log out from the current session:

`oc logout`
