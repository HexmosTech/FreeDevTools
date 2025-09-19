---
title: "AWS EKS - Manage Kubernetes Clusters | Online Free DevTools by Hexmos"
name: aws-eks
path: /freedevtools/tldr/aws/aws-eks
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-eks/"
description: "Manage Kubernetes clusters with AWS EKS. Deploy, update, and delete EKS clusters easily through the command line interface. Free online tool, no registration required."
category: common
keywords:
- EKS cluster management
- AWS Kubernetes service
- EKS command line
- Kubernetes cluster creation
- EKS node group management
- AWS EKS CLI
- Kubernetes cluster deployment
- EKS cluster deletion
- Cloud Kubernetes management
- AWS cloud EKS
features:
- Create and manage EKS clusters
- Update kubeconfig for EKS cluster access
- List and describe EKS clusters
- Delete EKS clusters
- Manage node groups within EKS clusters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws eks

> Manage Amazon Elastic Kubernetes Service (EKS) addons, clusters, and node groups.
> Amazon EKS is a service for easily running Kubernetes on AWS.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/eks/index.html>.

- Create an EKS Cluster:

`aws eks create-cluster --name {{cluster_name}} --role-arn {{eks_service_role_arn}} --resources-vpc-config subnetIds={{subnet_ids}},securityGroupIds={{security_group_ids}}`

- Update kubeconfig to connect to the EKS Cluster:

`aws eks update-kubeconfig --name {{cluster_name}}`

- List available EKS clusters:

`aws eks list-clusters`

- Describe EKS cluster details:

`aws eks describe-cluster --name {{cluster_name}}`

- Delete an EKS Cluster:

`aws eks delete-cluster --name {{cluster_name}}`

- List nodegroups in an EKS cluster:

`aws eks list-nodegroups --cluster-name {{cluster_name}}`

- Describe nodegroup details:

`aws eks describe-nodegroup --cluster-name {{cluster_name}} --nodegroup-name {{nodegroup_name}}`
