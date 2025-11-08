---
title: "Gcloud Config - Manage Configurations | Online Free DevTools by Hexmos"
name: gcloud-config
path: "/freedevtools/tldr/gcloud/gcloud-config/"
canonical: "https://hexmos.com/freedevtools/tldr/gcloud/gcloud-config/"
description: "Manage Google Cloud SDK configurations with Gcloud Config. Quickly switch between environments and set properties with this free online tool, no registration required."
category: common
keywords:
- gcloud config manager
- gcloud configuration tool
- google cloud configuration
- gcloud sdk config
- gcloud config properties
- gcloud linux config
- gcloud windows config
- gcloud macos config
- gcloud environment config
- gcloud project configuration
features:
- Define gcloud properties for current configuration
- Fetch gcloud property values
- Display all properties for a configuration
- Create new gcloud configurations
- Activate existing gcloud configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gcloud config

> Manage different configurations of `gcloud`.
> See also: `gcloud`.
> More information: <https://cloud.google.com/sdk/gcloud/reference/config>.

- Define a property (like compute/zone) for the current configuration:

`gcloud config set {{property}} {{value}}`

- Fetch the value of a `gcloud` property:

`gcloud config get {{property}}`

- Display all the properties for the current configuration:

`gcloud config list`

- Create a new configuration with a given name:

`gcloud config configurations create {{configuration_name}}`

- Display a list of all available configurations:

`gcloud config configurations list`

- Switch to an existing configuration with a given name:

`gcloud config configurations activate {{configuration_name}}`
