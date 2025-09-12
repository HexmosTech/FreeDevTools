---
title: "Kubeseal - Encrypt Kubernetes Secrets | Free DevTools"
name: kubeseal
path: /freedevtools/tldr/common/kubeseal
canonical: "https://hexmos.com/freedevtools/tldr/common/kubeseal/"
description: "Encrypt Kubernetes secrets with Kubeseal. Securely manage secrets in YAML files and SealedSecret resources. Free online tool, no registration required."
category: common
keywords:
- kubernetes secrets encryption
- sealed secrets kubernetes
- kubeseal command line
- kubernetes secret management
- yaml encryption tool
- json encryption tool
- kubernetes configuration security
- sealedsecret generator
- kubernetes secret sealing
- kubernetes secret controller
features:
- Encrypt Kubernetes secrets from YAML files to SealedSecret resources.
- Seal secrets using a specific controller namespace and name.
- Encrypt raw secret values from files with specified names and scopes.
- Fetch the controller's public certificate for offline sealing.
- Merge a secret into an existing SealedSecret file in-place.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kubeseal

> Client-side utility for encrypting Kubernetes secrets using the Bitnami Sealed Secrets controller.
> Creates SealedSecret resources that can be safely stored in version control.
> Requires a controller running in the cluster (e.g., installed via `kubectl apply -f controller.yaml`).
> More information: <https://github.com/bitnami-labs/sealed-secrets>.

- Encrypt a Kubernetes secret from a YAML file into a SealedSecret (default JSON output):

`kubeseal < {{secret.yaml}} > {{sealedsecret.json}}`

- Encrypt a secret, outputting it in YAML or JSON format, using a bearer token for API authentication:

`kubeseal {{[-o|--format]}} {{yaml|json}} --token {{my-bearer-token}} < {{secret.yaml}} > {{sealedsecret.yaml}}`

- Seal a secret using a specific controller namespace of sealed-secrets controller and name:

`kubeseal --controller-namespace {{controller-namespace}} --controller-name {{controller-name}} < {{secret.yaml}} > {{sealedsecret.yaml}}`

- Encrypt a raw secret value from a file with a specified name and scope:

`kubeseal --raw --from-file {{path/to/secret.txt}} --name {{my-secret}} --scope {{strict|namespace-wide|cluster-wide}} > {{sealedsecret.yaml}}`

- Fetch the controller's public certificate for offline sealing with basic auth:

`kubeseal --fetch-cert --username {{username}} --password {{password}} > {{cert.pem}}`

- Seal a secret offline using a fetched certificate:

`kubeseal --cert {{cert.pem}} < {{secret.yaml}} > {{sealedsecret.yaml}}`

- Merge a secret into an existing SealedSecret file in-place:

`kubeseal --merge-into {{sealedsecret.yaml}} < {{secret.yaml}}`

- Validate a SealedSecret without applying it:

`kubeseal --validate < {{sealedsecret.yaml}}`
