---
title: "Gcloud Config Set - Control CLI Properties | Free DevTools"
name: gcloud-config-set
path: /freedevtools/tldr/gcloud/gcloud-config-set
canonical: "https://hexmos.com/freedevtools/tldr/gcloud/gcloud-config-set/"
description: "Control Google Cloud CLI properties with Gcloud Config Set. Manage projects, compute zones, and disable prompts for scripting. Free online tool, no registration required."
category: common
keywords:
- gcloud config set
- gcloud cli configuration
- gcloud properties management
- gcloud project configuration
- gcloud compute zone
- gcloud disable prompts
- gcloud configuration profiles
- gcloud config list
- gcloud config unset
- google cloud sdk
features:
- Set project property for Google Cloud CLI
- Configure compute zone for future operations
- Disable prompts for scripting automation
- List current configuration properties
- Unset previously defined CLI properties
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gcloud config set

> Set a property in the Google Cloud CLI configuration.
> Properties control various aspects of Google Cloud CLI behavior.
> More information: <https://cloud.google.com/sdk/gcloud/reference/config/set>.

- Set the project property in the core section:

`gcloud config set project {{project_id}}`

- Set the compute zone for future operations:

`gcloud config set compute/zone {{zone_name}}`

- Disable prompting to make gcloud suitable for scripting:

`gcloud config set disable_prompts true`

- View the list of properties currently in use:

`gcloud config list`

- Unset a previously set property:

`gcloud config unset {{property_name}}`

- Create a new configuration profile:

`gcloud config configurations create {{configuration_name}}`

- Switch between different configuration profiles:

`gcloud config configurations activate {{configuration_name}}`
