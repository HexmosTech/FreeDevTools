---
title: "Control cert-manager - Manage Certificates | Online Free DevTools by Hexmos"
name: cmctl
path: "/freedevtools/tldr/common/cmctl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cmctl/"
description: "Control cert-manager resources with cmctl. Approve certificate requests, check certificate status, and issue new requests. Free online tool, no registration required."
category: common
keywords:
- cert-manager control
- certificate management
- kubernetes certificate
- cmctl command line
- cert signing status
- certificate request tool
- cluster resource management
- certificate approval tool
- k8s certificate manager
- cmctl certificate manager
features:
- Check cert-manager API readiness
- Display certificate status
- Create certificate requests from files
- Fetch signed certificates with timeout
- Manage cert-manager resources
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cmctl

> Manage cert-manager resources inside your cluster.
> Check cert signing status, approve/deny requests, and issue new certificate requests.
> More information: <https://cert-manager.io/docs/usage/cmctl/>.

- Check if the cert-manager API is ready:

`cmctl check api`

- Check the status of a certificate:

`cmctl status certificate {{cert_name}}`

- Create a new certificate request based on an existing certificate:

`cmctl create certificaterequest my-cr --from-certificate-file {{cert.yaml}}`

- Create a new certificate request, fetch the signed certificate, and set a maximum wait time:

`cmctl create certificaterequest my-cr --from-certificate-file {{cert.yaml}} --fetch-certificate --timeout {{20m}}`
