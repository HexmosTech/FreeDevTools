---
title: "Create Sparse Images - virt-sparsify | Free DevTools"
name: virt-sparsify
path: /freedevtools/tldr/common/virt-sparsify
canonical: "https://hexmos.com/freedevtools/tldr/common/virt-sparsify/"
description: "Create sparse virtual machine images with virt-sparsify. Recover disk space and optimize image size. Free online tool, no registration required."
category: common
keywords:
- qcow2 image sparsify
- virtual machine image reduction
- disk space recovery
- qcow2 compression tool
- linux image optimization
- image thin provisioning
- virt-sparsify command line
- image size reduction
- kvm disk image
- virtual machine optimization
features:
- Compress virtual machine images
- Sparsify images in-place
- Reduce disk space usage of VM images
- Optimize images for cloud storage
- Support multiple image formats
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virt-sparsify

> Make virtual machine drive images thin-provisioned.
> Note: Use only for offline machines to avoid data corruption.
> More information: <https://manned.org/virt-sparsify>.

- Create a sparsified compressed image without snapshots from an unsparsified one:

`virt-sparsify --compress {{path/to/image.qcow2}} {{path/to/image_new.qcow2}}`

- Sparsify an image in-place:

`virt-sparsify --in-place {{path/to/image.img}}`
