---
title: "IDNits Validator - Check Internet-Drafts | Online Free DevTools by Hexmos"
name: idnits
path: /freedevtools/tldr/common/idnits
canonical: "https://hexmos.com/freedevtools/tldr/common/idnits/"
description: "Validate Internet-Drafts with IDNits Validator, ensuring compliance with IETF requirements. Check for submission errors and nits. Free online tool, no registration required."
category: common
keywords:
- internet draft validator
- idnits checker
- rfc compliance tool
- ietf draft validation
- submission nits checker
- internet draft validation
- draft formatting tool
- rfc validator
- ietf compliance
- idnits tool
features:
- Checks internet-drafts for submission nits
- Validates drafts against IETF requirements
- Counts nits in internet-drafts
- Provides verbose output with extra information
- Allows specifying the expected year in boilerplate
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# idnits

> Check internet-drafts for submission nits.
> Looks for violations of Section 2.1 and 2.2 of the requirements listed on <https://www.ietf.org/id-info/checklist>.
> More information: <https://github.com/ietf-tools/idnits>.

- Check a file for nits:

`idnits {{path/to/file.txt}}`

- Count nits without displaying them:

`idnits --nitcount {{path/to/file.txt}}`

- Show extra information about offending lines:

`idnits --verbose {{path/to/file.txt}}`

- Expect the specified year in the boilerplate instead of the current year:

`idnits --year {{2021}} {{path/to/file.txt}}`

- Assume the document is of the specified status:

`idnits --doctype {{standard|informational|experimental|bcp|ps|ds}} {{path/to/file.txt}}`
