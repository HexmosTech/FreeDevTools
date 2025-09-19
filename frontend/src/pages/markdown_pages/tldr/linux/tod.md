---
title: "Tod - Create Todoist Tasks | Online Free DevTools by Hexmos"
name: tod
path: /freedevtools/tldr/linux/tod
canonical: "https://hexmos.com/freedevtools/tldr/linux/tod/"
description: "Create Todoist tasks quickly with Tod, a tiny Rust client. Manage projects, add due dates, and utilize natural language processing for efficient task management. Free online tool, no registration required."
category: linux
keywords:
  - todoist task creator
  - rust todoist client
  - command line todoist
  - todoist task manager
  - natural language todoist
  - quick add todoist
  - todoist project management
  - schedule todoist tasks
  - cli todoist app
  - tod command line tool
features:
  - Import and manage Todoist projects.
  - Create tasks with due dates using natural language processing.
  - Add tasks to specific projects.
  - Retrieve next tasks from a project.
  - View scheduled tasks for a given project.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tod

> A tiny Todoist client in Rust.
> It takes simple input and dumps it in your inbox or another project. Taking advantage of natural language processing to assign due dates, tags, etc.
> More information: <https://github.com/alanvardy/tod>.

- Import your projects (this is necessary to enable project prompts):

`tod project import`

- Quickly create a task with due date:

`tod --quickadd {{Buy more milk today}}`

- Create a new task (you will be prompted for content and project):

`tod task create`

- Create a task in a project:

`tod task create --content "{{Write more rust}}" --project {{code}}`

- Get the next task for a project:

`tod task next`

- Get your work schedule:

`tod task list --scheduled --project {{work}}`

- Get all tasks for work:

`tod task list --project {{work}}`
