---
title: "Tesseract OCR - Extract Text from Images | Online Free DevTools by Hexmos"
name: tesseract
path: /freedevtools/tldr/common/tesseract
canonical: "https://hexmos.com/freedevtools/tldr/common/tesseract/"
description: "Extract text from images with Tesseract OCR. Quickly convert image to text using command-line interface for various languages and formats. Free online tool, no registration required."
category: common
keywords:
- image to text converter
- tesseract OCR online
- command line OCR
- optical character recognition
- image text extraction
- tesseract language support
- image to text linux
- image to text macos
- tesseract page segmentation
- OCR command-line tool
features:
- Recognize text from images in multiple languages
- Convert images to text files via command line
- Specify page segmentation modes for improved accuracy
- List available languages for OCR processing
- Customize language settings for text recognition
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tesseract

> OCR (Optical Character Recognition) engine.
> More information: <https://github.com/tesseract-ocr/tesseract/blob/main/doc/tesseract.1.asc>.

- Recognize text in an image and save it to `output.txt` (the `.txt` extension is added automatically):

`tesseract {{image.png}} {{output}}`

- Specify a custom language (default is English) with an ISO 639-2 code (e.g. deu = Deutsch = German):

`tesseract -l deu {{image.png}} {{output}}`

- List the ISO 639-2 codes of available languages:

`tesseract --list-langs`

- Specify a custom page segmentation mode (default is 3):

`tesseract --psm {{0_to_10}} {{image.png}} {{output}}`

- List page segmentation modes and their descriptions:

`tesseract --help-psm`
