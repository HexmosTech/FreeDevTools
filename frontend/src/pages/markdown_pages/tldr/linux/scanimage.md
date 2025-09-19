---
title: "Scan Images - Digitize Photos with Scanimage | Online Free DevTools by Hexmos"
name: scanimage
path: /freedevtools/tldr/linux/scanimage
canonical: "https://hexmos.com/freedevtools/tldr/linux/scanimage/"
description: "Digitize images with Scanimage, a powerful command-line tool for Linux. Convert physical documents and photos into digital formats easily. Free online tool, no registration required."
category: linux
keywords:
- linux image scanning
- scanimage command line
- digital image creation
- image to digital conversion
- linux document digitization
- scanimage linux tool
- pnm image conversion
- tiff image scanning
- png image scanning
- linux image management
features:
- Scan images directly from the command line
- Convert scanned documents to various formats (PNM, TIFF, PNG, JPEG, PDF)
- List available scanners connected to the system
- Specify the scanning device to use
- Adjust resolution for scanned images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scanimage

> Scan images with the Scanner Access Now Easy API.
> More information: <http://sane-project.org/man/scanimage.1.html>.

- List available scanners to ensure the target device is connected and recognized:

`scanimage {{[-L|--list-devices]}}`

- Scan an image and save it to a file:

`scanimage --format {{pnm|tiff|png|jpeg|pdf|...}} > {{path/to/new_image}}`

- Specify the device to scan from:

`scanimage {{[-d|--device]}} {{device_name}} > {{path/to/new_image}}`

- Specify resolution for the scanned image (default resolution is 75dpi):

`scanimage --resolution {{300}} > {{path/to/new_image}}`
