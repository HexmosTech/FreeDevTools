# Dockerfile Linter

A comprehensive Dockerfile analysis tool based on industry-standard rules from the dockerfilelint project and Docker security best practices. This tool provides real-time analysis of Dockerfiles for syntax errors, security vulnerabilities, performance issues, and adherence to Docker best practices.

## Features

### Core Analysis Capabilities

- **Syntax Validation**: Validates Dockerfile instruction syntax and parameter formats using regex patterns
- **Security Analysis**: Detects risky configurations, privilege escalation, and security vulnerabilities
- **Performance Optimization**: Identifies layer bloat, caching issues, and inefficient practices
- **Best Practices Enforcement**: Enforces Docker community standards and recommendations
- **Label Validation**: Ensures proper metadata formatting and required labels
- **Required Instructions**: Validates essential Dockerfile components

### YAML-Based Rule System

The linter implements a comprehensive rule system based on YAML rule definitions that include:

#### Line Rules
- **FROM**: Base image validation (latest tag warnings, missing tags, registry specifications)
- **RUN**: Package manager best practices, security checks, command chaining validation
- **MAINTAINER**: Deprecation warnings
- **LABEL**: Format validation and required label checking
- **USER**: Root user warnings and format validation
- **EXPOSE**: Port validation
- **ENV**, **ADD**, **COPY**, **ENTRYPOINT**, **VOLUME**, **WORKDIR**, **ONBUILD**: Syntax validation

#### Rule Structure
Each rule includes:
- **Regex Pattern**: For matching problematic patterns
- **Level**: `error`, `warn`, or `info`
- **Message**: Brief description of the issue
- **Description**: Detailed explanation
- **Reference URLs**: Links to documentation

#### Named Value Rules (LABEL/ENV)
- **Value Regex**: Pattern validation for specific labels/environment variables
- **Required**: Whether the label/env var is mandatory
- **Custom Messages**: Specific error messages for each validation

#### Required Instructions
- Validates presence of essential instructions like USER, EXPOSE, CMD, ENTRYPOINT
- Configurable requirement levels and custom messages

## Rule Categories

### Error Level
- **Critical Issues**: Syntax errors, invalid parameters, security vulnerabilities
- **Build Failures**: Issues that may prevent successful Docker builds
- **Security Risks**: Root user usage, sudo/su commands

### Warning Level
- **Performance Issues**: Missing cache cleanup, unnecessary package updates
- **Bad Practices**: Semicolon usage instead of &&, missing package manager flags
- **Missing Components**: No USER instruction, package cleanup not performed

### Info Level
- **Deprecation Notices**: MAINTAINER instruction deprecation
- **Optimization Suggestions**: Image size optimization opportunities
- **Missing Features**: Optional but recommended instructions

## Implementation Details

### Browser Compatibility
- Pure JavaScript implementation with no Node.js dependencies
- ES6 modules and modern browser APIs
- Real-time analysis without server-side processing
- Clipboard API integration for result copying

### Rule Sources
The linter is based on rules from:
- [dockerfilelint](https://github.com/replicatedhq/dockerfilelint) - Industry-standard Dockerfile linting
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/) - Official Docker recommendations
- [Container Best Practices](http://docs.projectatomic.io/container-best-practices/) - Community guidelines

### Security Rules
Special focus on security-related issues:
- Root user detection and warnings
- sudo/su command usage detection
- Privileged container warnings
- SSH installation warnings
- Registry specification warnings

### Performance Rules
Optimization-focused rules include:
- Package manager cache cleanup validation
- Layer optimization suggestions
- Base image tag best practices
- Command chaining recommendations

## Usage

1. **Input**: Paste or type your Dockerfile content into the text area
2. **Analysis**: Click "Analyze Dockerfile" to run the linter
3. **Results**: View categorized issues with line numbers, descriptions, and reference links
4. **Copy**: Use the copy button to export results to clipboard

## Example Dockerfile Issues

### High Priority (Errors)
```dockerfile
FROM node:latest  # Error: Using 'latest' tag
USER root         # Error: Running as root user
```

### Medium Priority (Warnings)
```dockerfile
RUN apt-get install curl  # Warning: Missing apt-get clean
RUN command1 ; command2   # Warning: Use && instead of ;
```

### Low Priority (Info)
```dockerfile
MAINTAINER John Doe  # Info: MAINTAINER is deprecated
# Missing USER instruction  # Info: Consider adding USER
```

## Technical Architecture

### Rule Processing Pipeline
1. **Parsing**: Split Dockerfile into lines and extract instructions
2. **Validation**: Apply parameter syntax validation using regex
3. **Rule Matching**: Test each instruction against applicable rules
4. **Label Processing**: Special handling for LABEL instruction namevals
5. **Global Checks**: Validate required instructions and missing components
6. **Result Aggregation**: Categorize and summarize all findings

### Error Handling
- Graceful degradation for malformed Dockerfiles
- Comprehensive syntax error reporting
- Non-blocking analysis for partial content

### Performance Optimization
- Efficient regex matching
- Minimal DOM manipulation
- Lazy evaluation of rules
- Optimized result rendering

This implementation provides a robust, browser-compatible Dockerfile linting solution that maintains the comprehensive rule coverage of dockerfilelint while adding security-focused enhancements and modern web application features.