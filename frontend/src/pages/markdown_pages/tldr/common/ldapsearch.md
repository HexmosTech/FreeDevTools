---
title: "LDAP Search - Query Directories | Online Free DevTools by Hexmos"
name: ldapsearch
path: /freedevtools/tldr/common/ldapsearch
canonical: "https://hexmos.com/freedevtools/tldr/common/ldapsearch/"
description: "Query LDAP directories effectively with LDAP Search. Retrieve user data and manage directory services through command-line tools. Free online tool, no registration required."
category: common
keywords:
- LDAP directory search
- query LDAP server
- LDAP command line tool
- Active Directory query
- LDAP filter syntax
- LDAP attribute retrieval
- LDAP group membership
- LDAP object search
- LDAP user lookup
- LDAP data extraction
features:
- Query LDAP directories with specified filters.
- Retrieve specific attributes from LDAP entries.
- Search for users and groups based on membership.
- Limit search results based on size and time.
- Perform complex boolean logic filtering.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ldapsearch

> Query an LDAP directory.
> More information: <https://docs.ldap.com/ldap-sdk/docs/tool-usages/ldapsearch.html>.

- Query an LDAP server for all items that are a member of the given group and return the object's displayName value:

`ldapsearch {{[-D|--bindDN]}} '{{admin_DN}}' {{[-w|--bindPassword]}} '{{password}}' {{[-h|--hostname]}} {{ldap_host}} {{[-b|--baseDN]}} {{base_ou}} '{{memberOf=group1}}' displayName`

- Query an LDAP server with a no-newline password file for all items that are a member of the given group and return the object's displayName value:

`ldapsearch {{[-D|--bindDN]}} '{{admin_DN}}' {{[-u|--keyStorePasswordFile]}} '{{password_file}}' {{[-h|--hostname]}} {{ldap_host}} {{[-b|--baseDN]}} {{base_ou}} '{{memberOf=group1}}' displayName`

- Return 5 items that match the given filter:

`ldapsearch {{[-D|--bindDN]}} '{{admin_DN}}' {{[-w|--bindPassword]}} '{{password}}' {{[-h|--hostname]}} {{ldap_host}} {{[-b|--baseDN]}} {{base_ou}} '{{memberOf=group1}}' {{[-z|--sizeLimit]}} 5 displayName`

- Wait up to 7 seconds for a response:

`ldapsearch {{[-D|--bindDN]}} '{{admin_DN}}' {{[-w|--bindPassword]}} '{{password}}' {{[-h|--hostname]}} {{ldap_host}} {{[-b|--baseDN]}} {{base_ou}} '{{memberOf=group1}}' {{[-l|--timeLimitSeconds]}} 7 displayName`

- Invert the filter:

`ldapsearch {{[-D|--bindDN]}} '{{admin_DN}}' {{[-w|--bindPassword]}} '{{password}}' {{[-h|--hostname]}} {{ldap_host}} {{[-b|--baseDN]}} {{base_ou}} '(!(memberOf={{group1}}))' displayName`

- Return all items that are part of multiple groups, returning the display name for each item:

`ldapsearch {{[-D|--bindDN]}} '{{admin_DN}}' {{[-w|--bindPassword]}} '{{password}}' {{[-h|--hostname]}} {{ldap_host}} '(&({{memberOf=group1}})({{memberOf=group2}})({{memberOf=group3}}))' "displayName"`

- Return all items that are members of at least 1 of the specified groups:

`ldapsearch {{[-D|--bindDN]}} '{{admin_DN}}' {{[-w|--bindPassword]}} '{{password}}' {{[-h|--hostname]}} {{ldap_host}} '(|({{memberOf=group1}})({{memberOf=group1}})({{memberOf=group3}}))' displayName`

- Combine multiple boolean logic filters:

`ldapsearch {{[-D|--bindDN]}} '{{admin_DN}}' {{[-w|--bindPassword]}} '{{password}}' {{[-h|--hostname]}} {{ldap_host}} '(&({{memberOf=group1}})({{memberOf=group2}})(!({{memberOf=group3}})))' displayName`
