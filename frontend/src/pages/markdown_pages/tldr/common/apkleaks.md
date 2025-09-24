---
title: "APK Leaks - Expose Secrets in APK Files | Online Free DevTools by Hexmos"
name: apkleaks
path: /freedevtools/tldr/common/apkleaks
canonical: "https://hexmos.com/freedevtools/tldr/common/apkleaks/"
description: "Expose secrets with APKLeaks, a powerful tool to uncover URIs, endpoints, and sensitive data within APK files. Free online tool, no registration required."
category: common
keywords:
- apk secrets scanner
- android vulnerability scanner
- apk endpoint extractor
- apk uri extractor
- apk file analyzer
- reverse engineering apk
- android security scan
- linux apk analysis
- jadx decompiler apk
- apk password finder
features:
- Scan APK files for sensitive data exposure
- Identify URIs and endpoints within APKs
- Extract secrets from decompiled APK code
- Integrate with jadx disassembler for in-depth analysis
- Save scan results to a specified output file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apkleaks

> Expose URIs, endpoints, and secrets from APK files.
> Note: APKLeaks utilizes the `jadx` disassembler to decompile APK files.
> More information: <https://github.com/dwisiswant0/apkleaks>.

- Scan an APK file for URIs, endpoints, and secrets:

`apkleaks {{[-f|--file]}} {{path/to/file.apk}}`

- Scan and save the output to a specific file:

`apkleaks {{[-f|--file]}} {{path/to/file.apk}} {{[-o|--output]}} {{path/to/output.txt}}`

- Pass `jadx` disassembler arguments:

`apkleaks {{[-f|--file]}} {{path/to/file.apk}} {{[-a|--args]}} "{{--threads-count 5 --deobf}}"`
