---
title: "Index Filter - Modify Container Index with Crane | Online Free DevTools by Hexmos"
name: crane-index-filter
path: /freedevtools/tldr/crane/crane-index-filter
canonical: "https://hexmos.com/freedevtools/tldr/crane/crane-index-filter/"
description: "Modify container index effortlessly with Crane Index Filter. Filter by platform, tag images, and streamline your container registry. Free online tool, no registration required."
category: common
keywords:
- container index filter
- crane index tool
- container image filter
- platform specific index
- docker index manipulation
- oci index filtering
- remote index modification
- multi-platform image management
- container registry tool
- crane command line tool
features:
- Filter container index by platform
- Tag resulting image after filtering
- Modify remote container registries
- Support multiple platforms
- Display command line help
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# crane index filter

> Modifies a remote index by filtering based on platform.
> More information: <https://github.com/google/go-containerregistry/blob/main/cmd/crane/doc/crane_index_filter.md>.

- Modify remote index:

`crane index filter`

- Specify the platform(s) to keep from base in the form `os/arch/variant:osversion,platform`:

`crane index filter --platform {{platform1 platform2 ...}}`

- Tag to apply to resulting image:

`crane index filter {{[-t|--tags]}} {{tag_name}}`

- Display help:

`crane index filter {{[-h|--help]}}`
