---
title: "Libvirt XML Validator - Validate XML Files | Online Free DevTools by Hexmos"
name: virt-xml-validate
path: /freedevtools/tldr/linux/virt-xml-validate
canonical: "https://hexmos.com/freedevtools/tldr/linux/virt-xml-validate/"
description: "Validate Libvirt XML files with virt-xml-validate.  This command-line tool ensures schema compliance for your Libvirt XML configurations, providing detailed error reports. Free online tool, no registration required."
category: linux
keywords:
  - libvirt xml validation
  - libvirt xml validator
  - xml schema validation libvirt
  - validate libvirt xml
  - linux libvirt xml validation
  - command line libvirt validator
  - libvirt xml schema checker
  - virt-xml-validate linux
  - libvirt configuration validation
  - xml file validation linux command
features:
  - Validates Libvirt XML against specified or inferred schemas.
  - Infers schemas from the XML root element if none is provided.
  - Reports detailed errors for schema violations with precise locations.
  - Supports various Libvirt XML configurations (domains, networks, storage).
  - Integrates with Libvirt command-line tools for efficient workflow.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virt-xml-validate

> Validate `libvirt` XML files against a schema.
> If a schema is not specified, the schema is determined by the root element in the XML file.
> More information: <https://libvirt.org/manpages/virt-xml-validate.html>.

- Validate an XML file against a specific schema:

`virt-xml-validate {{path/to/file.xml}} {{schema}}`

- Validate the domain XML against the domain schema:

`virt-xml-validate {{path/to/domain.xml}} domain`
