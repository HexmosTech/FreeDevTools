---
title: "Steganography Tool - Embed & Extract Data with steghide | Online Free DevTools by Hexmos"
name: steghide
path: "/freedevtools/tldr/linux/steghide/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/steghide/"
description: "Embed and extract data with steghide, a powerful steganography tool for various file formats.  Manage hidden files securely within images and audio. Free online tool, no registration required."
category: linux
keywords:
  - data embedding steghide
  - data extraction steghide
  - image steganography steghide
  - audio steganography steghide
  - steghide encryption
  - steghide decryption
  - jpeg steganography steghide
  - wav steganography steghide
  - bmp steganography steghide
  - png steganography steghide
features:
  - Embed data into JPEG, BMP, WAV, and AU files.
  - Extract data from JPEG, BMP, WAV, and AU files.
  - Encrypt data before embedding using various algorithms.
  - Utilize different encryption modes for enhanced security.
  - Display information about embedded files and file formats.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# steghide

> Steganography tool for JPEG, BMP, WAV and AU file formats.
> More information: <https://manned.org/steghide>.

- Embed data in a PNG, prompting for a passphrase:

`steghide embed {{[-cf|--coverfile]}} {{path/to/image.png}} {{[-ef|--embedfile]}} {{path/to/data.txt}}`

- Extract data from a WAV audio file:

`steghide extract {{[-sf|--stegofile]}} {{path/to/sound.wav}}`

- Display file information, trying to detect an embedded file:

`steghide info {{path/to/file.jpg}}`

- Embed data in a JPEG image, using maximum compression:

`steghide embed {{[-cf|--coverfile]}} {{path/to/image.jpg}} {{[-ef|--embedfile]}} {{path/to/data.txt}} {{[-z|--compress]}} {{9}}`

- Get the list of supported encryption algorithms and modes:

`steghide encinfo`

- Embed encrypted data in a JPEG image, e.g. with Blowfish in CBC mode:

`steghide embed {{[-cf|--coverfile]}} {{path/to/image.jpg}} {{[-ef|--embedfile]}} {{path/to/data.txt}} {{[-e|--encryption]}} {{blowfish|...}} {{cbc|...}}`
