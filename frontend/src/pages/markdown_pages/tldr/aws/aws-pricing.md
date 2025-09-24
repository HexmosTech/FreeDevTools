---
title: "AWS Pricing - Query AWS Prices | Online Free DevTools by Hexmos"
name: aws-pricing
path: /freedevtools/tldr/aws/aws-pricing
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-pricing/"
description: "Query AWS prices with the AWS Pricing tool. Get service details, product information, and pricing data from Amazon Web Services. Free online tool, no registration required."
category: common
keywords:
- aws pricing data
- aws service pricing
- amazon web services pricing
- aws ec2 pricing
- aws cost explorer
- aws pricing api
- aws pricing cli
- aws pricing calculator
- cloud pricing analysis
- aws resource pricing
features:
- List service codes for specific AWS regions.
- Describe attributes for a specified service.
- Retrieve detailed pricing information for AWS services.
- List values for specific attributes.
- Filter pricing data based on instance type and location.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aws pricing

> Query services, products, and pricing information from Amazon Web Services.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/pricing/>.

- List service codes of a specific region:

`aws pricing describe-services --region {{us-east-1}}`

- List attributes for a given service code in a specific region:

`aws pricing describe-services --service-code {{AmazonEC2}} --region {{us-east-1}}`

- Print pricing information for a service code in a specific region:

`aws pricing get-products --service-code {{AmazonEC2}} --region {{us-east-1}}`

- List values for a specific attribute for a service code in a specific region:

`aws pricing get-attribute-values --service-code {{AmazonEC2}} --attribute-name {{instanceType}} --region {{us-east-1}}`

- Print pricing information for a service code using filters for instance type and location:

`aws pricing get-products --service-code {{AmazonEC2}} --filters "{{Type=TERM_MATCH,Field=instanceType,Value=m5.xlarge}}" "{{Type=TERM_MATCH,Field=location,Value=US East (N. Virginia)}}" --region {{us-east-1}}`
