---
title: "Link Checker - Validate Website Links | Online Free DevTools by Hexmos"
name: linkchecker
path: /freedevtools/tldr/common/linkchecker
canonical: "https://hexmos.com/freedevtools/tldr/common/linkchecker/"
description: "Validate website links effortlessly with Link Checker. Identify broken links, external links, and improve website SEO with this free online tool, no registration required."
category: common
keywords:
- website link checker
- broken link finder
- html link validator
- website seo checker
- link checker command line
- url validation tool
- external link checker
- common linkchecker
- link crawler tool
- dead link checker
features:
- Checks for broken links on websites.
- Validates external links for correctness.
- Ignores specific URLs based on regular expressions.
- Outputs results to a CSV file for analysis.
- Recursively traverses websites to find all links.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# linkchecker

> Client to check HTML documents and websites for broken links.
> More information: <https://linkchecker.github.io/linkchecker/man/linkchecker.html>.

- Find broken links on <https://example.com/>:

`linkchecker {{https://example.com/}}`

- Also check URLs that point to external domains:

`linkchecker --check-extern {{https://example.com/}}`

- Ignore URLs that match a specific `regex`:

`linkchecker --ignore-url {{regex}} {{https://example.com/}}`

- Output results to a CSV file:

`linkchecker --file-output {{csv}}/{{path/to/file}} {{https://example.com/}}`
