---
title: "Exiftool - Edit Image Metadata | Online Free DevTools by Hexmos"
name: exiftool
path: "/freedevtools/tldr/common/exiftool/"
canonical: "https://hexmos.com/freedevtools/tldr/common/exiftool/"
description: "Edit image metadata with Exiftool. Remove, add, or modify EXIF data from various file types. Free online tool, no registration required."
category: common
keywords:
- exif metadata editor
- image metadata remover
- exiftool command line
- photo metadata modifier
- file metadata utility
- exif data cleaner
- exif gps data removal
- image date shifter
- exiftool rename images
- exiftool batch process
features:
- Read and write metadata for various file formats.
- Remove all EXIF metadata from files.
- Modify date and time stamps in image metadata.
- Rename files based on EXIF DateTimeOriginal data.
- Batch process multiple files or directories.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# exiftool

> Read and write meta information in files.
> More information: <https://exiftool.org>.

- Print the EXIF metadata for a given file:

`exiftool {{path/to/file}}`

- Remove all EXIF metadata from the given files:

`exiftool -All= {{path/to/file1 path/to/file2 ...}}`

- Remove GPS EXIF metadata from given image files:

`exiftool "-gps*=" {{path/to/image1 path/to/image2 ...}}`

- Remove all EXIF metadata from the given image files, then re-add metadata for color and orientation:

`exiftool -All= -tagsfromfile @ -colorspacetags -orientation {{path/to/image1 path/to/image2 ...}}`

- Move the date at which all photos in a directory were taken 1 hour forward:

`exiftool "-AllDates+=0:0:0 1:0:0" {{path/to/directory}}`

- Move the date at which all JPEG photos in the current directory were taken 1 day and 2 hours backward:

`exiftool "-AllDates-=0:0:1 2:0:0" {{[-ext|-extension]}} jpg`

- Only change the `DateTimeOriginal` field subtracting 1.5 hours, without keeping backups:

`exiftool -DateTimeOriginal-=1.5 -overwrite_original`

- Recursively rename all JPEG photos in a directory based on the `DateTimeOriginal` field:

`exiftool '-filename<DateTimeOriginal' {{[-d|-dateFormat]}} %Y-%m-%d_%H-%M-%S%%lc.%%e {{path/to/directory}} {{[-r|-recurse]}} {{[-ext|-extension]}} jpg`
