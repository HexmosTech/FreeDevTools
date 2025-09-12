---
title: "Exiqgrep - Filter Exim Queue Output | Free DevTools"
name: exiqgrep
path: /freedevtools/tldr/unknown/exiqgrep
canonical: "https://hexmos.com/freedevtools/tldr/unknown/exiqgrep/"
description: "Filter Exim queue output easily with Exiqgrep. Quickly find emails and messages by sender or recipient. Free online tool, no registration required."
category: unknown
keywords:
- exim queue filter
- exim message search
- exim queue grep
- exim email filter
- exim message identifier
- exim bounce message
- exim email address search
- linux exim
- unix exim
- exim queue management
features:
- Match sender addresses case-insensitively
- Display message IDs exclusively
- Match recipient addresses
- Remove messages matching a specific sender
- Identify bounced messages in the queue
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# exiqgrep

> Perl script offering possibilities to `grep` in the Exim queue output.
> More information: <https://www.exim.org/exim-html-current/doc/html/spec_html/ch-exim_utilities.html>.

- Match the sender address using a case-insensitive search:

`exiqgrep -f '<{{email@example.com}}>'`

- Match the sender address and display message IDs only:

`exiqgrep -i -f '<{{email@example.com}}>'`

- Match the [r]ecipient address:

`exiqgrep -r '{{email@example.com}}'`

- Remove all messages matching the sender address from the queue:

`exiqgrep -i -f '<{{email@example.com}}>' | xargs exim -Mrm`

- Test for bounced messages:

`exiqgrep -f '^<>$'`

- Display the [c]ount of bounced messages:

`exiqgrep -c -f '^<>$'`
