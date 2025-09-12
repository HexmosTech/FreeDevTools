---
title: "Validate JSON - Test JSON Syntax Online | Free DevTools"
name: test-json
path: /freedevtools/tldr/windows/test-json
canonical: "https://hexmos.com/freedevtools/tldr/windows/test-json/"
description: "Validate JSON syntax with Test-Json. Verify JSON format & schema for errors. Free online tool, no registration required."
category: windows
keywords:
- json validator
- json tester
- json syntax checker
- json schema validation
- powershell json
- windows json tools
- json command line
- test json string
- validate json stdin
- test json schema
features:
- Validate JSON syntax against standard format
- Test JSON validity from standard input
- Validate JSON against a specified schema file
- Detect JSON formatting errors instantly
- Test if a string is a valid JSON document
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Test-Json

> Test whether a string is a valid JSON document.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/test-json>.

- Test if a string from `stdin` is in JSON format:

`'{{string}}' | Test-Json`

- Test if a string JSON format:

`Test-Json -Json '{{json_to_test}}'`

- Test if a string from `stdin` matches a specific schema file:

`'{{string}}' | Test-Json -SchemaFile {{path\to\schema_file.json}}`
