---
title: "RBAC Lookup - Control Kubernetes Roles | Online Free DevTools by Hexmos"
name: rbac-lookup
path: "/freedevtools/tldr/common/rbac-lookup/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rbac-lookup/"
description: "Control Kubernetes roles with RBAC Lookup. Find roles and cluster roles attached to users or groups. Inspect access control easily. Free online tool, no registration required."
category: common
keywords:
- kubernetes rbac lookup
- kubernetes role bindings
- kubernetes authorization
- kubernetes access control
- rbac permissions
- kubernetes security
- rbac lookup command
- kubernetes iam roles
- rbac lookup gke
- kubernetes cluster roles
features:
- Find roles attached to users and service accounts.
- Display role bindings based on a search term.
- Show the source role binding for each permission.
- Filter results by subject kind (user, group, serviceaccount).
- View IAM roles associated with RBAC bindings in GKE.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rbac-lookup

> Find roles and cluster roles attached to any user, service account or group name in your Kubernetes cluster.
> More information: <https://github.com/reactiveops/rbac-lookup>.

- View all RBAC bindings:

`rbac-lookup`

- View RBAC bindings that match a given expression:

`rbac-lookup {{search_term}}`

- View all RBAC bindings along with the source role binding:

`rbac-lookup {{[-o|--output]}} wide`

- View all RBAC bindings filtered by subject:

`rbac-lookup {{[-k|--kind]}} {{user|group|serviceaccount}}`

- View all RBAC bindings along with IAM roles (if you are using GKE):

`rbac-lookup --gke`
