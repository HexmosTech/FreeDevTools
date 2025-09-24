---
title: "Check PHP Compatibility - Roave BC Verification | Online Free DevTools by Hexmos"
name: roave-backward-compatibility-check
path: /freedevtools/tldr/common/roave-backward-compatibility-check
canonical: "https://hexmos.com/freedevtools/tldr/common/roave-backward-compatibility-check/"
description: "Verify PHP backward compatibility with Roave BackwardCompatibilityCheck. Detect breaking changes between versions of your PHP library. Free online tool, no registration required."
category: common
keywords:
- PHP backward compatibility check
- PHP breaking change detection
- Roave BC verification
- PHP library compatibility
- PHP version comparison
- Git reference compatibility check
- PHP code analysis
- Composer package compatibility
- PHP update testing
- Common platform PHP tool
features:
- Detect breaking changes since the last git tag
- Compare compatibility between specific git references
- Generate Markdown reports of compatibility issues
- Verify backward compatibility of PHP libraries
- Identify breaking changes across different PHP versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# roave-backward-compatibility-check

> Verify backward compatibility breaks between two versions of a PHP library.
> More information: <https://github.com/Roave/BackwardCompatibilityCheck>.

- Check for breaking changes since the last tag:

`roave-backward-compatibility-check`

- Check for breaking changes since a specific tag:

`roave-backward-compatibility-check --from={{git_reference}}`

- Check for breaking changes between the last tag and a specific reference:

`roave-backward-compatibility-check --to={{git_reference}}`

- Check for breaking changes and output to Markdown:

`roave-backward-compatibility-check --format=markdown > {{results.md}}`
