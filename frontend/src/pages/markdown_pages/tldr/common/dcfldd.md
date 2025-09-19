---
title: "Copy Disk Image - Forensics with dcfldd | Online Free DevTools by Hexmos"
name: dcfldd
path: /freedevtools/tldr/common/dcfldd
canonical: "https://hexmos.com/freedevtools/tldr/common/dcfldd/"
description: "Copy disk image with dcfldd, an enhanced dd command for forensics. Securely acquire data and generate cryptographic hashes for integrity verification. Free online tool, no registration required."
category: common
keywords:
- disk image copy
- forensic data acquisition
- command line imaging
- raw image creation
- data hashing tool
- secure data copying
- disk cloning linux
- dcfldd forensics
- drive imaging tool
- disk sector copy
features:
- Copy entire disks to raw image files
- Generate SHA256 cryptographic hashes of copied images
- Hash data in chunks for progress tracking and verification
- Log cryptographic hashes for audit trails
- Acquire forensic images via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dcfldd

> Enhanced version of dd for forensics and security.
> More information: <https://manned.org/dcfldd>.

- Copy a disk to a raw image file and hash the image using SHA256:

`dcfldd if={{/dev/disk_device}} of={{file.img}} hash=sha256 hashlog={{file.hash}}`

- Copy a disk to a raw image file, hashing each 1 GB chunk:

`dcfldd if={{/dev/disk_device}} of={{file.img}} hash={{sha512|sha384|sha256|sha1|md5}} hashlog={{file.hash}} hashwindow={{1G}}`
