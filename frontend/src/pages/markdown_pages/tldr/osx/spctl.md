---
title: "SPCtl - Control Security Policy | Free DevTools"
name: spctl
path: /freedevtools/tldr/osx/spctl
canonical: "https://hexmos.com/freedevtools/tldr/osx/spctl/"
description: "Control macOS security policy with SPCtl. Manage Gatekeeper settings, add rules for application execution and enhance system security. Free online tool, no registration required."
category: osx
keywords:
- macOS security policy control
- SPCtl Gatekeeper management
- Application security assessment macOS
- macOS security rule configuration
- Gatekeeper disable macOS
- Security policy list macOS
- Application execution authorization macOS
- macOS code signing management
- Command line security tool macOS
- SPCtl security bypass macOS
features:
- Disable or enable Gatekeeper security checks
- Add rules to allow specific applications to run
- List all security rules currently active
- Manage security assessment policies in macOS
- Configure application security settings via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# spctl

> Manage the security assessment policy subsystem.
> Utility for managing Gatekeeper in macOS.
> More information: <https://keith.github.io/xcode-man-pages/spctl.8.html>.

- Turn off Gatekeeper:

`spctl --master-disable`

- Add a rule to allow an application to run (labeling of rule is optional):

`spctl --add --label {{rule_name}} {{path/to/file}}`

- Turn on Gatekeeper:

`spctl --master-enable`

- List all rules on the system:

`spctl --list`
