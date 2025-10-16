---
title: "Pulumi Import - Import Resources | Online Free DevTools by Hexmos"
name: pulumi-import
path: "/freedevtools/tldr/pulumi/pulumi-import/"
canonical: "https://hexmos.com/freedevtools/tldr/pulumi/pulumi-import/"
description: "Import resources with Pulumi Import. Manage cloud infrastructure by importing existing resources into your Pulumi stack with ease. Free online tool, no registration required."
category: common
keywords:
- Pulumi import resource
- Infrastructure as Code import
- Cloud resource import
- Pulumi stack management
- AWS resource import
- Azure resource import
- GCP resource import
- Kubernetes resource import
- IaC resource management
- Terraform import Pulumi
features:
- Import existing cloud resources into Pulumi stacks
- Generate resource definitions from existing infrastructure
- Supports importing from various cloud providers (AWS, Azure, GCP)
- Bulk import resources from JSON file
- Output import configuration to a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pulumi import

> Import resources into an existing stack.
> Read syntax for your cloud provider: <https://www.pulumi.com/registry/>.
> More information: <https://www.pulumi.com/docs/iac/cli/commands/pulumi_import/>.

- Generate the resource definition with a given name for an existing provider resource:

`pulumi import {{type_token}} {{name}} {{id}}`

- Import an existing AWS user as a `pulumi` resource:

`pulumi import aws:iam/user:User {{my_user_resource}} {{id}}`

- Import an existing Cloudflare worker:

`pulumi import cloudflare:index/workersScript:WorkersScript {{my_worker_script}} {{account_id/script_name}}`

- Import from a JSON file for bulk import operations and output to a file instead of `stdout`:

`pulumi import --file {{path/to/file.json}} --out {{path/to/file}}`
