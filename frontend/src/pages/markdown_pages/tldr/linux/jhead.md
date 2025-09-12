---
title: "Jhead - Control Image EXIF Data | Free DevTools"
name: jhead
path: /freedevtools/tldr/unknown/jhead
canonical: "https://hexmos.com/freedevtools/tldr/unknown/jhead/"
description: "Control image EXIF data with Jhead. Modify timestamps, rotate images losslessly, and remove EXIF data. Free online tool, no registration required."
category: unknown
keywords:
- image EXIF data control
- JPEG metadata editor
- EXIF timestamp modifier
- lossless JPEG rotation
- image EXIF remover
- command-line image tool
- EXIF date manipulation
- image metadata management
- batch image processing
- JPEG EXIF utility
features:
- Display all EXIF data for an image.
- Set the file's date and time from EXIF data.
- Rename JPEG files based on EXIF creation date.
- Rotate JPEG images losslessly based on EXIF orientation.
- Remove all EXIF data from an image.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jhead

> Image timestamp and EXIF data manipulation.
> More information: <https://www.sentex.net/~mwandel/jhead/usage.html>.

- Show all EXIF data:

`jhead {{path/to/image.jpg}}`

- Set the file's date and time to the EXIF create date (file creation date will be changed):

`jhead -ft {{path/to/image.jpg}}`

- Set the EXIF time to the file's date and time (EXIF data will be changed):

`jhead -dsft {{path/to/image.jpg}}`

- Rename all JPEG files based on the EXIF create date to `YYYY_MM_DD-HH_MM_SS.jpg`:

`jhead -n%Y_%m_%d-%H_%M_%S *.jpg`

- Rotate losslessly all JPEG images by 90, 180 or 270 based on the EXIF orientation tag:

`jhead -autorot *.jpg`

- Update all EXIF timestamps (Format: +- hour:minute:seconds) (example: forgot to change the camera's time zone - removing 1 hour from timestamps):

`jhead -ta-1:00:00 *.jpg`

- Remove all EXIF data (including thumbnails):

`jhead -purejpg {{path/to/image.jpg}}`
