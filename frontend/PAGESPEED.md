# PageSpeed Testing

This document explains the PageSpeed Insights testing functionality integrated into the FreeDevTools.
## Overview

The PageSpeed testing tools allow you to:

- Run performance tests against individual tools or the entire suite
- Generate detailed performance reports with scores and improvement suggestions
- Integrate performance checks into your deployment workflow
- Enforce minimum performance standards through configurable thresholds

## Configuration

### API Key Setup

Before using the PageSpeed testing tools, you need to get a Google PageSpeed Insights API key:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "PageSpeed Insights API" for your project
4. Create an API key in the "Credentials" section

or Ask around in the team.

Once you have your API key, add it to your environment:

```bash
# Create or edit your .env file in the frontend directory
echo "PAGESPEED_API_KEY=your-api-key-here" >> frontend/.env
```


## Available Commands

### NPM Commands

| Command | Description |
|---------|-------------|
| `npm run pagespeed <tool-path>` | Run PageSpeed test for a specific tool (e.g., `npm run pagespeed dockerfile-linter`) |
| `npm run pagespeed:all` | Run PageSpeed tests for all tools defined in `tools.ts` |
| `npm run pagespeed:minimal` | Run PageSpeed test for a specific tool without generating a detailed report |
| `npm run pagespeed:all:minimal` | Run PageSpeed tests for all tools without generating detailed reports |

Example usage:

```bash
# Test a specific tool
npm run pagespeed json-utilities

# Test all tools with minimal output
npm run pagespeed:all:minimal
```

### Make Commands

The following make commands are available in `Makefile` for PageSpeed testing:

| Command | Description |
|---------|-------------|
| `make check-pagespeed` | Run PageSpeed tests for all tools and verify they meet the minimum thresholds |
| `make deploy` | Full deployment with PageSpeed checks, banner generation, and build |
| `make deploy --skip-pagespeed` | Deploy without running PageSpeed checks (useful for quick deployments) |

Example usage:

```bash
# Run just the PageSpeed checks
make check-pagespeed

# Deploy with PageSpeed validation
make deploy

# Deploy without PageSpeed validation (skip performance checks)
make deploy --skip-pagespeed
```

## Understanding the Output

When running PageSpeed tests, you'll see output similar to:

```
Running PageSpeed Insights for: https://hexmos.com/freedevtools/t/json-utilities/

===== PERFORMANCE METRICS =====

Performance: 96.0%
Accessibility: 96.0%
Best Practices: 100.0%
SEO: 92.0%

Detailed report saved to: scripts/pageSpeedReport/json-utilities_2025-09-09.txt
```

The scores are color-coded:
- Green: Good score (≥90%)
- Yellow: Average score (≥70%)
- Red: Poor score (<70%)

## Detailed Reports

Detailed reports are saved to the `scripts/pageSpeedReport/` directory with filenames in the format `<tool-name>_<date>.txt`.

These reports include:
- Summary scores for all categories
- Core Web Vitals metrics
- Performance opportunities for improvement
- Diagnostics information
- Accessibility issues
- Best practices suggestions
- SEO recommendations