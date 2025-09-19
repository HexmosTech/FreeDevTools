---
title: "Create Cognito User Pools - Control AWS Users | Online Free DevTools by Hexmos"
name: aws-cognito-idp
path: /freedevtools/tldr/aws/aws-cognito-idp
canonical: "https://hexmos.com/freedevtools/tldr/aws/aws-cognito-idp/"
description: "Create Cognito User Pools with aws-cognito-idp for secure user authentication. Manage user accounts, groups, and settings easily. Free online tool, no registration required."
category: common
keywords:
- AWS Cognito user pool
- Cognito user management
- AWS identity management
- CLI user authentication
- Cognito CLI commands
- AWS Cognito user groups
- AWS Cognito identity provider
- AWS Cognito authentication
- common aws-cognito-idp
- aws cognito-idp CLI
features:
- Create new Cognito user pools
- List existing user pools
- Delete specified user pools
- Add users to a specific pool
- Remove users from a specific pool
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aws cognito-idp

> Configure an Amazon Cognito user pool and its users and groups and authenticate them.
> More information: <https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cognito-idp/index.html>.

- Create a new Cognito user pool:

`aws cognito-idp create-user-pool --pool-name {{name}}`

- List all user pools:

`aws cognito-idp list-user-pools --max-results {{10}}`

- Delete a specific user pool:

`aws cognito-idp delete-user-pool --user-pool-id {{user_pool_id}}`

- Create a user in a specific pool:

`aws cognito-idp admin-create-user --username {{username}} --user-pool-id {{user_pool_id}}`

- List the users of a specific pool:

`aws cognito-idp list-users --user-pool-id {{user_pool_id}}`

- Delete a user from a specific pool:

`aws cognito-idp admin-delete-user --username {{username}} --user-pool-id {{user_pool_id}}`
