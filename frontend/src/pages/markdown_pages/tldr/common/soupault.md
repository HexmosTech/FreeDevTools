---
title: "Generate Static Websites - soupault | Online Free DevTools by Hexmos"
name: soupault
path: /freedevtools/tldr/common/soupault
canonical: "https://hexmos.com/freedevtools/tldr/common/soupault/"
description: "Generate static websites quickly with soupault. Use HTML element tree rewriting for flexible website creation and metadata extraction. Free online tool, no registration required."
category: common
keywords:
- static website generator
- HTML post-processor
- metadata extractor
- HTML element rewriting
- website builder
- soupault configuration
- TOML configuration
- static site generator
- command-line website
- website development
features:
- Generate static websites from HTML files
- Rewrite HTML element trees for customization
- Extract metadata from HTML content
- Initialize website projects with minimal configuration
- Build websites with custom configurations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# soupault

> A static website generator based on HTML element tree rewriting.
> It can also be used as an HTML post-processor or metadata extractor.
> More information: <https://soupault.app>.

- Initialize a minimal website project in the current working directory:

`soupault --init`

- Build a website:

`soupault`

- Override default configuration file and directory locations:

`soupault --config {{config_path}} --site-dir {{input_dir}} --build-dir {{output_dir}}`

- Extract metadata into a JSON file without generating pages:

`soupault --index-only --dump-index-json {{path/to/file.json}}`

- Show the effective configuration (values from `soupault.toml` plus defaults):

`soupault --show-effective-config`
