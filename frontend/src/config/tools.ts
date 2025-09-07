export interface Tool {
  title: string;
  name: string;
  path: string;
  description: string;
  category: string;
  icon: string;
  themeColor: string;
  canonical: string;
  keywords: string[];
  features: string[];
  ogImage: string;
  twitterImage: string;
  variationOf?: string,
  datePublished?: string;
  softwareVersion?: string;
}

export const TOOLS_CONFIG: Record<string, Tool> = {
  "json-utilities": {
    "title": "JSON Utilities - Format, Validate & Fix JSON Online",
    "name": "JSON Utilities",
    "path": "/freedevtools/t/json-utilities/",
    "description":
      "All-in-one JSON toolkit. Format, validate, and auto-fix JSON instantly with real-time error detection and correction. No registration required.",
    "category": "Developer Tools",
    "icon": "🧰",
    "themeColor": "#14b8a6",
    "canonical": "https://hexmos.com/freedevtools/t/json-utilities/",
    "keywords": [
      "json utilities",
      "json tools",
      "json formatter",
      "json prettifier",
      "json beautifier",
      "json minifier",
      "json validator",
      "json fixer",
      "json corrector",
      "developer tools",
      "api tools",
      "online json editor"
    ],
    "features": [
      "Format and beautify JSON",
      "Validate JSON structure",
      "Auto-correct invalid JSON",
      "Multiple indentation options",
      "Real-time validation and feedback",
      "Instant error detection",
      "Copy to clipboard"
    ],
    "ogImage": "https://hexmos.com/freedevtools/t/tool-banners/json-utilities.png",
    "twitterImage": "https://hexmos.com/freedevtools/t/tool-banners/json-utilities.png",
  },
  "json-prettifier": {
    title: "JSON Prettifier - Format & Validate JSON Online",
    name: "JSON Prettifier",
    path: "/freedevtools/t/json-prettifier/",
    description:
      "Format and validate JSON data instantly. Multiple indentation options, real-time validation, and no registration required.",
    category: "Developer Tools",
    icon: "📄",
    themeColor: "#10b981",
    canonical: "https://hexmos.com/freedevtools/t/json-prettifier/",
    keywords: [
      "json prettifier",
      "json formatter",
      "json minifier",
      "json validator",
      "json beautifier",
      "json online",
      "developer tools",
      "api tools",
    ],
    features: [
      "JSON formatting",
      "JSON minification",
      "JSON validation",
      "Multiple indentation options",
      "Real-time validation",
      "Copy to clipboard",
    ],
    ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-prettifier-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-prettifier-banner.png",
    "variationOf": "json-utilities"
  },

  "json-validator": {
    title: "JSON Validator - Check & Validate Your JSON Online",
    name: "JSON Validator",
    path: "/freedevtools/t/json-validator/",
    description:
      "Validate your JSON instantly. Detect errors, check formatting, and ensure your JSON is well-formed.",
    category: "Developer Tools",
    icon: "✅",
    themeColor: "#f59e0b",
    canonical: "https://hexmos.com/freedevtools/t/json-validator/",
    keywords: ["json validator", "json check", "validate json", "developer tools"],
    features: [
      "Validate JSON structure",
      "Detect formatting errors",
      "Real-time error messages",
      "Copy to clipboard",
    ],
    ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-validator.png",
    twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-validator.png",
    "variationOf": "json-utilities"
  },

  "json-fixer": {
    title: "JSON Fixer - Automatically Correct JSON Errors",
    name: "JSON Fixer",
    path: "/freedevtools/t/json-fixer/",
    description:
      "Automatically fix invalid JSON data. Correct errors, format it properly, and get clean JSON instantly.",
    category: "Developer Tools",
    icon: "🛠️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/json-fixer/",
    keywords: ["json fixer", "fix json", "correct json", "developer tools"],
    features: [
      "Auto-correct invalid JSON",
      "Format JSON properly",
      "Real-time feedback",
      "Copy fixed JSON",
    ],
    ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-fixer.png",
    twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-fixer.png",
    "variationOf": "json-utilities"
  },
  "password-generator": {
    title: "Password Generator - Create Secure & Random Passwords",
    name: "Password Generator",
    path: "/freedevtools/t/password-generator/",
    description:
      "Generate secure, customizable passwords instantly. Create strong passwords with custom length, character types, and readability options for maximum security.",
    category: "Security Tools",
    icon: "�",
    themeColor: "#6366f1",
    canonical: "https://hexmos.com/freedevtools/t/password-generator/",
    keywords: [
      "password generator",
      "secure password",
      "random password",
      "strong password",
      "password creator",
      "cybersecurity",
      "security tools",
      "password maker",
      "custom password",
      "safe password",
    ],
    features: [
      "Customizable password length",
      "Multiple character set options",
      "Word-based memorable passwords",
      "Readable password generation",
      "Instant password creation",
      "Copy to clipboard",
      "Real-time password strength indicator",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/password-generator.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/password-generator.png",
  },

  "dockerfile-linter": {
    title: "Dockerfile Linter – Analyze, Validate and Lint Tool",
    name: "Dockerfile Linter",
    path: "/freedevtools/t/dockerfile-linter/",
    description:
      "Comprehensive Dockerfile linter. Analyze, validate, and optimize Dockerfiles for syntax errors, security risks, performance issues, and best practices.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#2496ed",
    canonical: "https://hexmos.com/freedevtools/t/dockerfile-linter/",
    keywords: [
      "dockerfile linter",
      "docker linter",
      "dockerfile validator",
      "docker security",
      "dockerfile analyzer",
      "container security",
      "docker best practices",
      "dockerfile syntax",
      "dockerfile checker",
      "developer tools",
    ],
    features: [
      "Syntax validation and error detection",
      "Security vulnerability analysis",
      "Performance optimization suggestions",
      "Docker best practices enforcement",
      "Real-time feedback with explanations",
      "Copy results to clipboard",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/dockerfile-linter.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/dockerfile-linter.png",
  },
  "date-time-converter": {
    title: "Date Time Converter - Convert UTC, ISO, Unix Timestamps",
    name: "Date Time Converter",
    path: "/freedevtools/t/date-time-converter/",
    description:
      "Free online Date Time Converter by Hexmos. Instantly transform UTC, ISO, Unix timestamps, and more formats with no registration required. Paste or pick a date to see all formats at once.",
    category: "Developer Tools",
    icon: "🛠️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/date-time-converter/",
    keywords: [
      "datetime converter",
      "date converter",
      "time converter",
      "timestamp converter",
      "unix timestamp",
      "iso date",
      "utc",
      "online date converter",
      "free date converter",
      "timestamp converter online",
    ],
    features: [
      "Convert between UTC, ISO, Unix, and other date/time formats",
      "Date and time picker integration",
      "Handles timestamps, ISO strings, and custom formats",
      "Shows all common formats at a glance",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/date-time-converter.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/date-time-converter.png",
  },
};

export function getToolByKey(key: string): Tool | undefined {
  return TOOLS_CONFIG[key];
}

export function getAllTools(): Tool[] {
  const keys = Object.keys(TOOLS_CONFIG);
  return Object.values(TOOLS_CONFIG);
}

export function getAllUniqueTools(): Tool[] {
  return getAllTools().filter((tool) => !tool.variationOf);
}

export function getToolsByCategory(category: string): Tool[] {
  return getAllTools().filter((tool) => tool.category === category);
}
