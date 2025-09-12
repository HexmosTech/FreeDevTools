---
title: "Create Resume - Generate JSON Resume Files | Free DevTools"
name: resume
path: /freedevtools/tldr/common/resume
canonical: "https://hexmos.com/freedevtools/tldr/common/resume/"
description: "Create JSON resume files instantly with Resume. Validate, export to HTML/PDF, and serve your resume online. Free online tool, no registration required."
category: common
keywords:
- JSON Resume generator
- Resume JSON creator
- Resume CLI tool
- Resume validator
- Resume HTML exporter
- Resume PDF exporter
- Resume server
- Resume template
- JSON Resume schema
- Resume command line
features:
- Generate a new resume.json file.
- Validate resume.json against schema tests.
- Export resume to HTML or PDF format.
- Serve a local resume.json file.
- Manage resume files via command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# resume

> Easily setup a new resume.
> More information: <https://github.com/jsonresume/resume-cli>.

- Create a new `resume.json` file in the current working directory:

`resume init`

- Validate a `resume.json` against schema tests to ensure it complies with the standard:

`resume validate`

- Export a resume locally in a stylized HTML or PDF format:

`resume export {{path/to/html_or_pdf}}`

- Start a web server that serves a local `resume.json`:

`resume serve`
