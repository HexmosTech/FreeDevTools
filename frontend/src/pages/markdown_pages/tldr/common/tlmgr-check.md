---
title: "Check TeX Live - Verify Installation Consistency | Free DevTools"
name: tlmgr-check
path: /freedevtools/tldr/common/tlmgr-check
canonical: "https://hexmos.com/freedevtools/tldr/common/tlmgr-check/"
description: "Check TeX Live installations for inconsistencies with Tlmgr Check. Ensure package integrity and dependency resolution. Free online tool, no registration required."
category: common
keywords:
- tex live check
- texlive integrity check
- tlmgr package check
- tex live dependency check
- tex live installation verify
- tex live file consistency
- tlmgr runfiles check
- tex live execute check
- latex check
- tlmgr check all
features:
- Verify the complete TeX Live installation for errors.
- Identify and report missing dependencies within TeX Live.
- Ensure all TeX Live executables are present and functional.
- Check the integrity of files listed in the local TLPDB database.
- Detect duplicate filenames in the TeX Live runfiles sections.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tlmgr check

> Check the consistency of a TeX Live installation.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#check-option...-depends-executes-files-runfiles-texmfdbs-all>.

- Check the consistency of the whole TeX Live installation:

`tlmgr check all`

- Check the consistency of the whole TeX Live information in verbose mode:

`tlmgr check all -v`

- Check for missing dependencies:

`tlmgr check depends`

- Check if all TeX Live executables are present:

`tlmgr check executes`

- Check if all files listed in the local TLPDB are present:

`tlmgr check files`

- Check for duplicate filenames in the runfiles sections:

`tlmgr check runfiles`
