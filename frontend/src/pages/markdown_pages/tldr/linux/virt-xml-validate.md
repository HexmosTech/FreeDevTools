---
title: "Validate Libvirt XML - Schema Validation Tool | Free DevTools"
name: virt-xml-validate
path: /freedevtools/tldr/linux/virt-xml-validate
canonical: "https://hexmos.com/freedevtools/tldr/linux/virt-xml-validate/"
description: "Validate Libvirt XML files against schemas with virt-xml-validate.  This command-line tool ensures schema compliance for your XML configurations. Free online tool, no registration required."
category: linux
keywords:
  - libvirt xml validation
  - xml schema validation libvirt
  - validate libvirt xml files
  - libvirt xml validator
  - linux xml validation
  - command line xml validation
  - schema validation tool
  - virt-xml-validate command
  - libvirt configuration validation
  - xml file validation linux
features:
  - Validates Libvirt XML files against specified or inferred schemas.
  - Uses schema inference from the XML root element if no schema is provided.
  - Provides detailed error reporting for schema violations.
  - Supports various Libvirt XML configurations (domains, networks, etc.).
  - Integrates seamlessly with the Libvirt command-line tools.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virt-xml-validate

> Validate `libvirt` XML files against a schema.
> If a schema is not specified, the schema is determined by the root element in the XML file.
> More information: <https://libvirt.org/manpages/virt-xml-validate.html>.

- Validate an XML file against a specific schema:

`virt-xml-validate {{path/to/file.xml}} {{schema}}`

- Validate the domain XML against the domain schema:

`virt-xml-validate {{path/to/domain.xml}} domain`
