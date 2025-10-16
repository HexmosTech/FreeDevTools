---
title: "JHipster Generator - Create Web Apps | Online Free DevTools by Hexmos"
name: jhipster
path: "/freedevtools/tldr/common/jhipster/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jhipster/"
description: "Generate web applications with JHipster. Quickly create full-stack applications and microservices architectures. Free online tool, no registration required."
category: common
keywords:
- jhipster generator
- web application generator
- full-stack generator
- microservices generator
- java application generator
- spring boot generator
- yeoman generator
- jdl studio
- kubernetes configuration
- ci/cd pipeline generator
features:
- Generate full-stack web applications.
- Create microservices architectures.
- Upgrade existing JHipster projects.
- Import JDL files for application configuration.
- Generate Kubernetes configurations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jhipster

> Web application generator using either monolithic or microservices architecture.
> More information: <https://www.jhipster.tech/creating-an-app/#command-line-options>.

- Generate a simple full-stack project (monolithic or microservices):

`jhipster`

- Generate a simple frontend project:

`jhipster --skip-server`

- Generate a simple backend project:

`jhipster --skip-client`

- Apply latest JHipster updates to the project:

`jhipster upgrade`

- Add a new entity to a generated project:

`jhipster entity {{entity_name}}`

- Import a JDL file to configure your application (see: <https://start.jhipster.tech/jdl-studio/>):

`jhipster import-jdl {{file1.jh file2.jh ...}}`

- Generate a CI/CD pipeline for your application:

`jhipster ci-cd`

- Generate a Kubernetes configuration for your application:

`jhipster kubernetes`
