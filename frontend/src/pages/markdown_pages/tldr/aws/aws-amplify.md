---
title: "AWS Amplify - Manage Web and Mobile Apps | Online Free DevTools by Hexmos"
name: aws-amplify
path: /freedevtools/tldr/aws/aws-amplify
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-amplify/"
description: "Manage web and mobile apps effortlessly with AWS Amplify. Deploy secure and scalable applications using command line. Free online tool, no registration required."
category: common
keywords:
- AWS Amplify manager
- Web app deployment
- Mobile app deployment
- Amplify backend management
- AWS Amplify command line
- Cloud application manager
- Amplify environment control
- Amplify app configuration
- AWS cloud deployment
- Serverless application manager
features:
- Create new Amplify applications via command line
- Delete existing Amplify applications easily
- Manage and list all AWS Amplify backend environments
- Update application configurations and settings swiftly
- Retrieve detailed information about Amplify apps
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws amplify

> Development platform for building secure, scalable mobile and web applications.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/amplify/index.html>.

- Create a new Amplify app:

`aws amplify create-app --name {{app_name}} --description {{description}} --repository {{repo_url}} --platform {{platform}} --environment-variables {{env_vars}} --tags {{tags}}`

- Delete an existing Amplify app:

`aws amplify delete-app --app-id {{app_id}}`

- Get details of a specific Amplify app:

`aws amplify get-app --app-id {{app_id}}`

- List all Amplify apps:

`aws amplify list-apps`

- Update settings of an Amplify app:

`aws amplify update-app --app-id {{app_id}} --name {{new_name}} --description {{new_description}} --repository {{new_repo_url}} --environment-variables {{new_env_vars}} --tags {{new_tags}}`

- Add a new backend environment to an Amplify app:

`aws amplify create-backend-environment --app-id {{app_id}} --environment-name {{env_name}} --deployment-artifacts {{artifacts}}`

- Remove a backend environment from an Amplify app:

`aws amplify delete-backend-environment --app-id {{app_id}} --environment-name {{env_name}}`

- List all backend environments in an Amplify app:

`aws amplify list-backend-environments --app-id {{app_id}}`
