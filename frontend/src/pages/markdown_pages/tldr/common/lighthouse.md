---
title: "Lighthouse - Generate Website Performance Reports | Free DevTools"
name: lighthouse
path: /freedevtools/tldr/common/lighthouse
canonical: "https://hexmos.com/freedevtools/tldr/common/lighthouse/"
description: "Generate website performance reports with Lighthouse. Analyze performance metrics and gain insights on developer best practices with this free online tool, no registration required."
category: common
keywords:
- website performance analysis
- web page audit
- accessibility testing
- SEO analysis
- PWA audit tool
- lighthouse report generator
- chrome devtools
- web development best practices
- performance metrics tool
- javascript audit
features:
- Generate detailed website performance reports in HTML or JSON format
- Analyze web accessibility and identify areas for improvement
- Audit SEO best practices for improved search engine rankings
- Evaluate Progressive Web App (PWA) compliance
- Customize report generation with specific categories and configurations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lighthouse

> Analyzes web applications and web pages, collecting modern performance metrics and insights on developer best practices.
> More information: <https://github.com/GoogleChrome/lighthouse>.

- Generate an HTML report for a specific website and save it to a file in the current directory:

`lighthouse {{https://example.com}}`

- Generate a JSON report and print it:

`lighthouse --output {{json}} {{https://example.com}}`

- Generate a JSON report and save it to a specific file:

`lighthouse --output {{json}} --output-path {{path/to/file.json}} {{https://example.com}}`

- Generate a report using the browser in headless mode without logging to `stdout`:

`lighthouse --quiet --chrome-flags="{{--headless}}" {{https://example.com}}`

- Generate a report, using the HTTP header key/value pairs in the specified JSON file for all requests:

`lighthouse --extra-headers={{path/to/file.json}} {{https://example.com}}`

- Generate a report for specific categories only:

`lighthouse --only-categories={{performance,accessibility,best-practices,seo,pwa}} {{https://example.com}}`

- Generate a report with device emulation and all throttling disabled:

`lighthouse --screenEmulation.disabled --throttling-method={{provided}} --no-emulatedUserAgent {{https://example.com}}`

- Display help:

`lighthouse --help`
