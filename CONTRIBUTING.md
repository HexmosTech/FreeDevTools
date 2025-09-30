# Contributing to FreeDevTools

Thanks for your interest in contributing! 🎉 This guide explains how you can help improve FreeDevTools.

## What You Can Contribute

We welcome contributions of all kinds:

- 🛠️ **New Tools** – Add developer utilities
- 🐛 **Bug Fixes** – Improve reliability
- ✨ **Enhancements** – Extend features
- 📚 **Documentation** – Add guides and examples
- 🎨 **UI/UX** – Improve interface and usability
- 🌐 **Translations** – Make tools accessible worldwide

## Development Setup (for building a new tool)

### 1. Fork and Clone

```bash
git clone https://github.com/YOUR_USERNAME/freedevtools.git
cd freedevtools
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/amazing-new-tool
```

### 3. Prerequisites

Check Node version:

```bash
lovestaco@i3nux-mint:~/hex/FreeDevTools/frontend$ node -v
v22.17.0
```

Install **make** if not already installed:

- Debian/Ubuntu: `sudo apt install make`
- Fedora: `sudo dnf install make`
- Arch: `sudo pacman -S make`
- Windows: `choco install make`

Open the **frontend** folder in your editor:
![image](https://hackmd.io/_uploads/H1UOIEF2lx.png)

Install dependencies:

```bash
npm i
```

### 4. Generate Pages for Your Tool

```bash
make gen tool=gemini-schema-validator
```

![image](https://hackmd.io/_uploads/BkVEO4F2lx.png)

### 5. Run the Project

```bash
make run
```

Open in browser:
👉 [http://localhost:4321/freedevtools](http://localhost:4321/freedevtools)

![image](https://hackmd.io/_uploads/S1kf04Khll.png)

### 6. Commit and Push

```bash
git add .
git commit -m "feat: add amazing new tool"
git push origin feature/amazing-new-tool
```

### 7. Open a Pull Request

Request a review. You can also ping us on Discord (invite below).

## Astro Project Structure

```
freedevtools/
├── frontend/                 # Astro frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Pages
│   │       ├── t/           # Tool directory
│   │           ├── gemini-schema-validator/
│   │               ├── index.astro
│   │               ├── _GeminiSchemaValidator.tsx
│   │               ├── _GeminiSchemaValidatorSkeleton.tsx
│   ├── config/              # Config files
│   ├── styles/              # CSS and styling
│   ├── public/              # Static assets
│   └── package.json         # Dependencies
├── backend/                 # Backend services (coming soon)
├── .github/                 # GitHub workflows
├── LICENSE                  # MIT License
└── README.md                # Documentation
```

## Code Style Guidelines

### TypeScript / React

- Use functional components + hooks
- Prefer TypeScript over JavaScript
- Use meaningful names
- Add JSDoc for complex functions

### CSS / Styling

- Use TailwindCSS
- Mobile-first design
- Consistent spacing & typography
- Semantic HTML

### AI Rules (Cursor, Copilot, etc.)

- AI can be used, but always take suggestions from Admins(discord link below), we prefer quality over quantitiy.
- Ensure generated code follows project conventions
- **Include `seo.md` in your workflow** to define and improve **titles, descriptions, and keywords** when starting to build a tool
- **Always include `design.md` in your workflow** for **consistent styling and shared UI/UX rules**

### Git Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new tool for data conversion
fix: resolve issue with base64 encoding
docs: update contributing guidelines
style: improve button hover states
refactor: simplify tool configuration
test: add unit tests for json prettifier
```

## Review Process

1. **Automated Checks** – CI/CD runs builds
2. **Code Review** – Maintainers review
3. **Feedback** – Make changes if requested
4. **Merge** – Approved PRs are merged

## Getting Help

- [GitHub Issues](https://github.com/HexmosTech/FreeDevTools/issues) – Bugs & requests
- [GitHub Discussions](https://github.com/HexmosTech/FreeDevTools/discussions) – Q&A, ideas
- [Pull Requests](https://github.com/HexmosTech/FreeDevTools/pulls) – Code contributions
- [Discord](https://discord.gg/pURjdmj5) – Chat and help

## Reporting Issues

Before creating an issue:

1. Search existing issues
2. Check docs for answers
3. Try to reproduce consistently
4. Provide details:
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details
   - Screenshots (if applicable)

## Recognition

We appreciate every contribution! 🙌

- Listed in **Contributors** on GitHub (please update README.md in the same PR)
- Special thanks in **docs** (please update README.md in the same PR)

## Thank You 💜

Your contributions make [FreeDevTools](https://hexmos.com/freedevtools/) better for everyone.
