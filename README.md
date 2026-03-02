[![FreeDevTools](https://hexmos.com/freedevtools/public/site-banner.png)](https://hexmos.com/freedevtools/)

![GitHub stars](https://img.shields.io/github/stars/HexmosTech/FreeDevTools?style=social)  
![GitHub forks](https://img.shields.io/github/forks/HexmosTech/FreeDevTools)  
[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/HexmosTech/FreeDevTools)](https://github.com/HexmosTech/FreeDevTools/commits/main)  
[![GitHub last commit](https://img.shields.io/github/last-commit/HexmosTech/FreeDevTools)](https://github.com/HexmosTech/FreeDevTools/commits/main)  
[![GitHub repo size](https://img.shields.io/github/repo-size/HexmosTech/FreeDevTools)](https://github.com/HexmosTech/FreeDevTools)  
[![Deployment](https://img.shields.io/badge/deployment-Live-green)](https://hexmos.com/freedevtools/)  
![GitHub issues](https://img.shields.io/github/issues/HexmosTech/FreeDevTools)
 


A curated collection of 1,25,000+ free resources, icons, cheat sheets, and TLDRs. No login, unlimited downloads.

---

## 📘 Table of Contents
- [Available Tools](#available-tools)
- [Quick Start](#quick-start)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Contributors](#contributors)

---
 
## Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/freedevtools.git
   cd freedevtools
   ```

2. **Install dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Run development server**

   ```bash
   make run
   ```

4. **Run production server**

   ```bash
   make start-prod
   ```
   To skip sitemap generation in the background when starting the production server, use:
   ```bash
   make start-prod SKIP_SITEMAP=1
   ```

---



## Installing InstallerPedia Manager (ipm)
InstallerPedia Manager (ipm) is a CLI tool that installs from repositories using reliable installation instructions.

It currently supports

`ipm install reponame` - Launches the installation process for installing from the repository.
 
`ipm show reponame` - Shows details about a repository and its installation.

`ipm search reponame` - Search for a specific repository.

You can install `ipm` via this command

```
curl -fsSL https://raw.githubusercontent.com/HexmosTech/freeDevTools/main/install_ipm.sh | bash
```

To get the latest updates, run `ipm update`.


#### Configuration (`ipm.toml`)

You can customize `ipm` behavior by creating a `.ipm.toml` file in your **home directory**:

* **Linux/macOS:** `~/.ipm.toml`
* **Windows:** `C:\Users\<User>\.ipm.toml`

#### Options

Currently, you can toggle whether `ipm` prompts you to report installation bugs to GitHub when you interrupt a process (Ctrl+C) or cancel an installation:

```toml
# Enable/Disable bug report prompts on exit (Default: true)
report-bugs = false

```



## Related Projects

[git-lrc](https://github.com/HexmosTech/git-lrc): a Git hook for Checking AI generated code.*
 

[![git-lrc](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vbgm2bg20v4egt4x3p6m.png)](https://hexmos.com/livereview/git-lrc/)

*AI agents write code fast. They also silently remove logic, change behavior, and introduce bugs -- without telling you. You often find out in production.
git-lrc fixes this. It hooks into git commit and reviews every diff before it lands. 60-second setup. Completely free.*

👉 Check out: [git-lrc](https://github.com/HexmosTech/git-lrc) 
Any feedback or contributors are welcome! It’s online, source-available, and ready for anyone to use. 
---

## Contributing

We welcome contributions! Here's how you can help:

[CONTRIBUTING.md](https://github.com/HexmosTech/FreeDevTools/blob/main/CONTRIBUTING.md)

---

**Made with ❤️ by the developer community**

---

## Contributors

1. [lovestaco](https://github.com/lovestaco)
2. [RijulTP](https://github.com/RijulTP)
3. [LinceMathew](https://github.com/LinceMathew)
4. [shrsv](https://github.com/shrsv)
5. [Amazing-Stardom](https://github.com/Amazing-Stardom)
6. [MuchiraIrungu](https://github.com/MuchiraIrungu)
7. [soham-founder](https://github.com/soham-founder)
8. [Janmesh23](https://github.com/Janmesh23)
9. [Jayant-Jeet](https://github.com/Jayant-Jeet)
