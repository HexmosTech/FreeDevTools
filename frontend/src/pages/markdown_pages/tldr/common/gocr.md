---
title: "Recognize Text with gocr - OCR Command | Online Free DevTools by Hexmos"
name: gocr
path: /freedevtools/tldr/common/gocr
canonical: "https://hexmos.com/freedevtools/tldr/common/gocr/"
description: "Recognize text from images with the gocr OCR command-line tool. Convert images to text and extract data effortlessly with this powerful Optical Character Recognition solution. Free online tool, no registration required."
category: common
keywords:
  - image text recognition
  - OCR command line
  - gocr optical character recognition
  - text extraction from image
  - image to text converter
  - command line OCR tool
  - Linux OCR command
  - gocr image processing
  - character recognition software
  - text from image online
features:
  - Convert images into editable text
  - Extract text data from various image formats
  - Utilize a customizable character database
  - Output recognized text to a specified file
  - Enhance accuracy with adjustable certainty levels
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
