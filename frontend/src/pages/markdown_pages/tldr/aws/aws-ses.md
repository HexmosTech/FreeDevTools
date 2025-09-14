---
title: "AWS SES - Control Cloud Emails | Free DevTools"
name: aws-ses
path: /freedevtools/tldr/aws/aws-ses
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-ses/"
description: "Control cloud emails easily with AWS SES CLI. Manage email sending, receiving, and configurations through the command line interface. Free online tool, no registration required."
category: common
keywords:
- AWS SES CLI
- AWS Simple Email Service command line
- SES email management
- Cloud email control
- AWS SES automation
- SES receipt rule configuration
- SES email sending tool
- AWS SES Linux
- AWS SES macOS
- SES email automation tool
features:
- Create and manage SES receipt rule sets
- Send emails directly from the command line
- Describe and list existing SES configurations
- Delete SES receipt rules and rule sets
- Display help for specific SES subcommands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws ses

> CLI for AWS Simple Email Service.
> High-scale inbound and outbound cloud email service.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ses/index.html>.

- Create a new receipt rule set:

`aws ses create-receipt-rule-set --rule-set-name {{rule_set_name}} --generate-cli-skeleton`

- Describe the active receipt rule set:

`aws ses describe-active-receipt-rule-set --generate-cli-skeletion`

- Describe a specific receipt rule:

`aws ses describe-receipt-rule --rule-set-name {{rule_set_name}} --rule-name {{rule_name}} --generate-cli-skeleton`

- List all receipt rule sets:

`aws ses list-receipt-rule-sets --starting-token {{token_string}} --max-items {{integer}} --generate-cli-skeleton`

- Delete a specific receipt rule set (the currently active rule set cannot be deleted):

`aws ses delete-receipt-rule-set --rule-set-name {{rule_set_name}} --generate-cli-skeleton`

- Delete a specific receipt rule:

`aws ses delete-receipt-rule --rule-set-name {{rule_set_name}} --rule-name {{rule_name}} --generate-cli-skeleton`

- Send an email:

`aws ses send-email --from {{from_address}} --destination "ToAddresses={{addresses}}" --message "Subject={Data={{subject_text}},Charset=utf8},Body={Text={Data={{body_text}},Charset=utf8},Html={Data={{message_body_containing_html}},Charset=utf8}}"`

- Display help for a specific SES subcommand:

`aws ses {{subcommand}} help`
