---
title: "AWS Kafka - Manage MSK Clusters | Free DevTools"
name: aws-kafka
path: /freedevtools/tldr/common/aws-kafka
canonical: "https://hexmos.com/freedevtools/tldr/common/aws-kafka/"
description: "Manage Amazon MSK clusters with AWS Kafka CLI commands. Deploy, monitor, and configure Kafka resources efficiently. Free online tool, no registration required."
category: common
keywords:
- AWS Kafka cluster management
- MSK cluster configuration
- Kafka CLI commands
- Amazon MSK deployment
- AWS Kafka broker nodes
- Kafka cluster creation
- AWS Kafka monitoring
- Kafka version control
- AWS Kafka updates
- MSK cluster deletion
features:
- Create new Amazon MSK clusters
- Describe existing MSK clusters
- List available MSK clusters in a region
- Update the configuration of MSK clusters
- Delete existing MSK clusters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws kafka

> Manage an Amazon MSK (Managed Streaming for Apache Kafka) cluster.
> See also: `aws`.
> More information: <https://docs.aws.amazon.com/cli/latest/reference/kafka/index.html>.

- Create a new MSK cluster:

`aws kafka create-cluster --cluster-name {{cluster_name}} --broker-node-group-info instanceType={{instance_type}},clientSubnets={{subnet_id1 subnet_id2 ...}} --kafka-version {{version}} --number-of-broker-nodes {{number}}`

- Describe a MSK cluster:

`aws kafka describe-cluster --cluster-arn {{cluster_arn}}`

- List all MSK clusters in the current region:

`aws kafka list-clusters`

- Create a new MSK configuration:

`aws kafka create-configuration --name {{configuration_name}} --server-properties file://{{path/to/configuration_file.txt}}`

- Describe a MSK configuration:

`aws kafka describe-configuration --arn {{configuration_arn}}`

- List all MSK configurations in the current region:

`aws kafka list-configurations`

- Update the MSK cluster configuration:

`aws kafka update-cluster-configuration --cluster-arn {{cluster_arn}} --configuration-info arn={{configuration_arn}},revision={{configuration_revision}}`

- Delete the MSK cluster:

`aws kafka delete-cluster --cluster-arn {{cluster_arn}}`
