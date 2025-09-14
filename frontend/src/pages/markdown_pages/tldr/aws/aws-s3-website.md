---
title: "S3 Website - Configure AWS S3 Websites | Free DevTools"
name: aws-s3-website
path: /freedevtools/tldr/aws/aws-s3-website
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-s3-website/"
description: "Configure AWS S3 websites with S3 Website. Set index and error documents for static hosting, ensuring correct website behavior. Free online tool, no registration required."
category: common
keywords:
- s3 website configuration
- aws s3 website
- s3 static website hosting
- aws s3 index document
- aws s3 error document
- command line s3 website
- s3 website deployment
- amazon s3 website setup
- s3 bucket website
- aws s3 website cli
features:
- Configure an S3 bucket as a static website.
- Specify an index document for the website.
- Define a custom error page for handling errors.
- Enable website hosting directly from the command line.
- Manage website configuration settings via AWS CLI.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws s3 website

> Set the website configuration for a bucket.
> See also: `aws s3`.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/s3/website.html>.

- Configure a bucket as a static website:

`aws s3 website {{s3://bucket-name}} --index-document {{index.html}}`

- Configure an error page for the website:

`aws s3 website {{s3://bucket-name}} --index-document {{index.html}} --error-document {{error.html}}`
