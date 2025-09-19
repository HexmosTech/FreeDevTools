---
title: "OpenStack Image - Manage Cloud Images | Online Free DevTools by Hexmos"
name: openstack-image
path: /freedevtools/tldr/openstack/openstack-image
canonical: "https://hexmos.com/freedevtools/tldr/openstack/openstack-image/"
description: "Manage cloud images efficiently with OpenStack Image command. Upload, delete, list, and download images for your OpenStack cloud infrastructure. Free online tool, no registration required."
category: common
keywords:
- OpenStack image management
- Cloud image upload
- OpenStack Glance CLI
- OpenStack image download
- Virtual machine images
- OpenStack image list
- OpenStack command line
- Image repository management
- OpenStack cloud tools
- CLI image tool
features:
- List available OpenStack images with filtering options
- Display detailed information about a specific image
- Create and upload new images to the OpenStack cloud
- Delete unwanted images from the OpenStack environment
- Save OpenStack images locally to a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openstack image

> OpenStack Image service, aka OpenStack Glance, allows users to upload and discover data assets meant to be used with other services.
> More information: <https://docs.openstack.org/python-openstackclient/latest/cli/command-objects/image-v2.html>.

- List available images:

`openstack image list {{--private|--shared|--all}}`

- Display image details:

`openstack image show --human-readable {{image_id}}`

- Create/upload an image:

`openstack image create --file {{path/to/file}} {{--private|--shared|--all}} {{image_name}}`

- Delete image(s):

`openstack image delete {{image_id1 image_id2 ...}}`

- Save an image locally:

`openstack image save --file {{filename}} {{image_id}}`
