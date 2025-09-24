---
title: "Rspamc - Control Spam Filtering | Online Free DevTools by Hexmos"
name: rspamc
path: /freedevtools/tldr/linux/rspamc
canonical: "https://hexmos.com/freedevtools/tldr/linux/rspamc/"
description: "Control email spam filtering with Rspamc. Train the bayesian filter and generate spam reports using the command line. Free online tool, no registration required."
category: linux
keywords:
- rspamc spam filter
- rspamd client
- linux spam filtering
- bayesian spam filter training
- email spam reporting
- rspamc command line tool
- rspamd server statistics
- linux email security
- spam analysis tool
- email classification
features:
- Train the bayesian filter with spam examples.
- Train the bayesian filter with ham examples.
- Generate detailed spam analysis reports for emails.
- Display server statistics for rspamd.
- Classify emails as spam or ham.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rspamc

> Client for `rspamd` servers.
> More information: <https://manned.org/rspamc>.

- Train the bayesian filter to recognise an email as spam:

`rspamc learn_spam {{path/to/email_file}}`

- Train the bayesian filter to recognise an email as ham:

`rspamc learn_ham {{path/to/email_file}}`

- Generate a manual report on an email:

`rspamc symbols {{path/to/email_file}}`

- Show server statistics:

`rspamc stat`
