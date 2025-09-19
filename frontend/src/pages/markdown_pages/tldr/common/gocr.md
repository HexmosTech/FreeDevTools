---
title: "Recognize Text - gocr OCR Tool | Online Free DevTools by Hexmos"
name: gocr
path: /freedevtools/tldr/common/gocr
canonical: "https://hexmos.com/freedevtools/tldr/common/gocr/"
description: "Recognize text with gocr, a powerful Optical Character Recognition tool. Convert images to text and extract data effortlessly. Free online tool, no registration required."
category: common
keywords:
- image to text
- OCR software
- Optical Character Recognition
- text extraction
- character recognition
- image recognition
- command line OCR
- Linux OCR
- gocr command
- text from image
features:
- Convert images to text
- Recognize characters from images
- Output text to file
- Extend character database
- Customize character recognition
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gocr

> Optical Character Recognition tool.
> Recognize characters using its engine, and prompt the user for unknown patterns to store them in a database.
> More information: <https://manned.org/gocr.1>.

- Recognize characters in the [i]nput image and [o]utput it in the given file. Put the database ([p]) in `path/to/db_directory` (verify that the folder exists or DB usage will silently be skipped). [m]ode 130 means create + use + extend database:

`gocr -m 130 -p {{path/to/db_directory}} -i {{path/to/input_image.png}} -o {{path/to/output_file.txt}}`

- Recognize characters and assume all [C]haracters are numbers:

`gocr -m 130 -p {{path/to/db_directory}} -i {{path/to/input_image.png}} -o {{path/to/output_file.txt}} -C "{{0..9}}"`

- Recognize characters with a cert[a]inty of 100% (characters have a higher chance to be treated as unknown):

`gocr -m 130 -p {{path/to/db_directory}} -i {{path/to/input_image.png}} -o {{path/to/output_file.txt}} -a 100`
