---
title: "AWS Route53 - Control DNS Records | Online Free DevTools by Hexmos"
name: aws-route53
path: /freedevtools/tldr/aws/aws-route53
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-route53/"
description: "Control DNS records with AWS Route53. Manage hosted zones and update record sets using the command line. Free online tool, no registration required."
category: common
keywords:
- AWS Route53 DNS control
- Route53 hosted zone manager
- Route53 record set editor
- AWS Route53 command line tool
- DNS record management aws
- Route53 zone administration cli
- AWS cloud DNS editor
- AWS Route53 record updater
- AWS Route53 command linux
- AWS Route53 dns record manager
features:
- List all hosted zones for a Route53 account
- Show all records in a specified hosted zone
- Create a new public hosted zone with a request identifier
- Delete an existing hosted zone
- Test DNS resolving with Amazon servers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws route53

> CLI for AWS Route53 - Route 53 is a highly available and scalable Domain Name System (DNS) web service.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/route53/index.html>.

- List all hosted zones, private and public:

`aws route53 list-hosted-zones`

- Show all records in a zone:

`aws route53 list-resource-record-sets --hosted-zone-id {{zone_id}}`

- Create a new, public zone using a request identifier to retry the operation safely:

`aws route53 create-hosted-zone --name {{name}} --caller-reference {{request_identifier}}`

- Delete a zone (if the zone has non-defaults SOA and NS records the command will fail):

`aws route53 delete-hosted-zone --id {{zone_id}}`

- Test DNS resolving by Amazon servers of a given zone:

`aws route53 test-dns-answer --hosted-zone-id {{zone_id}} --record-name {{name}} --record-type {{type}}`
