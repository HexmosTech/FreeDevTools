---
title: "Validate SemVer - Parse Semantic Version Strings | Online Free DevTools by Hexmos"
name: semver
path: /freedevtools/tldr/common/semver
canonical: "https://hexmos.com/freedevtools/tldr/common/semver/"
description: "Validate semantic version strings with SemVer. Parse, coerce, and test version ranges for compatibility. Free online tool, no registration required."
category: common
keywords:
- semver validator
- semantic version parser
- version range tester
- semver coerce tool
- semver command line
- npm semver
- version string analysis
- semantic versioning check
- version compatibility test
- node semver
features:
- Validate semantic version string format
- Coerce version strings to semver format
- Test version string against specified ranges
- Support multiple ranges for compatibility checks
- Filter version strings based on range matches
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# semver

> Semantic version string parser.
> More information: <https://github.com/npm/node-semver>.

- Check if a version string respects the semantic versioning format (prints an empty string if it does not match):

`semver {{1.2}}`

- Convert a version string to the semantic versioning format:

`semver --coerce {{1.2}}`

- Test if `1.2.3` matches the `^1.0` range (prints an empty string if it does not match):

`semver {{1.2.3}} --range "{{^1.0}}"`

- Test with multiple ranges:

`semver {{1.2.3}} --range "{{>=1.0}}" "{{<2.0}}"`

- Test multiple version strings and return only the ones that match:

`semver {{1.2.3}} {{2.0.0}} --range "{{^1.0}}"`
