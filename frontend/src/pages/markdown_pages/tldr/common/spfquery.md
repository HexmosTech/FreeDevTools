---
title: "SPF Query - Validate Email Senders | Online Free DevTools by Hexmos"
name: spfquery
path: /freedevtools/tldr/common/spfquery
canonical: "https://hexmos.com/freedevtools/tldr/common/spfquery/"
description: "Validate email senders with SPF Query. Check IP addresses against SPF records for improved email security. Free online tool, no registration required."
category: common
keywords:
- spf record validation
- email sender validation
- spf authentication
- ip address spf check
- email security spf
- dns spf lookup
- common spf query
- linux spf query
- macos spf query
- command line spf
features:
- Check if an IP address is allowed to send email from a specified address.
- Validate Sender Policy Framework records.
- Troubleshoot email delivery issues.
- Verify SPF configurations.
- Enable debugging output for detailed analysis.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# spfquery

> Query Sender Policy Framework records to validate e-mail senders.
> More information: <https://manned.org/spfquery>.

- Check if an IP address is allowed to send an e-mail from the specified e-mail address:

`spfquery -ip {{8.8.8.8}} -sender {{sender@example.com}}`

- Turn on debugging output:

`spfquery -ip {{8.8.8.8}} -sender {{sender@example.com}} --debug`
