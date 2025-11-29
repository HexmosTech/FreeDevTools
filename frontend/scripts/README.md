# MCP Build Scripts

This directory contains scripts to build only the MCP (Model Context Protocol) section of the FreeDevTools frontend, similar to the selective build system used in the GitHub Actions workflow.

## Problem

The full build process (`npm run build`) generates over 120,000 pages, which is time-consuming and resource-intensive when you only need to work on the MCP section.

## Solution

These scripts implement a selective build system that:

1. **Excludes unchanged sections** by temporarily renaming directories with an underscore prefix
2. **Builds only the MCP section** along with core components
3. **Restores the original structure** after the build completes
4. **Handles cleanup** even if the build is interrupted

## Available Scripts

```bash
npm run build:mcp
```

## How It Works

1. **Detection**: Identifies which sections need to be built (MCP only)
2. **Exclusion**: Temporarily renames all other page directories with `_` prefix
3. **Build**: Runs the standard Astro build process
4. **Restoration**: Moves excluded directories back to their original names

## Directory Structure During Build

```
src/pages/
├── mcp/                    # ✅ Included (target section)
├── _t/                     # ❌ Excluded (temporarily renamed)
├── _c/                     # ❌ Excluded (temporarily renamed)
├── _svg_icons/             # ❌ Excluded (temporarily renamed)
├── _png_icons/             # ❌ Excluded (temporarily renamed)
├── _emojis/                # ❌ Excluded (temporarily renamed)
├── _cars/                  # ❌ Excluded (temporarily renamed)
├── _markdown_pages/        # ❌ Excluded (temporarily renamed)
├── _html_pages/            # ❌ Excluded (temporarily renamed)
├── _tldr/                  # ❌ Excluded (temporarily renamed)
└── index.astro             # ✅ Included (core pages)
```

## Features

- **Memory Optimization**: Uses `--max-old-space-size=16384` for 16GB systems
- **Thread Pool**: Sets `UV_THREADPOOL_SIZE=64` (4x cores) for maximum I/O performance
- **Error Handling**: Gracefully handles build failures and restores structure
- **Signal Handling**: Responds to Ctrl+C and termination signals
- **Colored Output**: Clear visual feedback during the build process

## Safety

- **Automatic Cleanup**: Original structure is always restored, even on failure
- **Signal Handling**: Responds to interruption signals (SIGINT, SIGTERM)
- **Error Recovery**: Continues cleanup even if build fails
- **Non-destructive**: Only renames directories, doesn't delete anything

## Usage Examples

```bash
# Build only MCP section
npm run build:mcp

# Alternative shell script version
npm run build:mcp:sh

# Check build output
ls -la dist/

# Preview the built site
npm run preview
```

## Troubleshooting

### Build Fails

- Check that you're in the frontend directory
- Ensure all dependencies are installed
- Check available disk space and memory

### Structure Not Restored

- Manually rename directories back: `mv _directory_name directory_name`
- Check for permission issues
- Ensure no processes are using the directories

### Memory Issues

- The script uses 8GB memory limit by default
- Increase if needed by modifying `NODE_OPTIONS` in the scripts

## Comparison with GitHub Actions

This local build system mirrors the GitHub Actions workflow logic:

| Feature             | GitHub Actions           | Local Scripts    |
| ------------------- | ------------------------ | ---------------- |
| Change Detection    | Git diff                 | Manual selection |
| Directory Exclusion | Dynamic based on changes | Fixed (MCP only) |
| Memory Management   | 8GB limit                | 8GB limit        |
| Error Handling      | Step-level               | Process-level    |
| Cleanup             | Always runs              | Always runs      |

## Development Workflow

1. Make changes to MCP-related files
2. Run `npm run build:mcp` to build only MCP
3. Test the build output with `npm run preview`
4. Deploy or commit changes
5. For full site testing, run `npm run build` occasionally
