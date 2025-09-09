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
  variationOf?: string;
  datePublished?: string;
  softwareVersion?: string;
}

export const TOOLS_CONFIG: Record<string, Tool> = {
  "json-utilities": {
    title: "JSON Formatter, Validator and Linter | Online Free DevTools",
    name: "JSON Utilities",
    path: "/freedevtools/t/json-utilities/",
    description:
      "Format, validate, and lint JSON online for free with Hexmos Free DevTools. Enjoy multiple indentation options and real-time validation in an ad-free environment.",
    category: "Developer Tools",
    icon: "🧰",
    themeColor: "#14b8a6",
    canonical: "https://hexmos.com/freedevtools/t/json-utilities/",
    keywords: [
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
      "online json editor",
    ],
    features: [
      "Format and beautify JSON",
      "Validate JSON structure",
      "Auto-correct invalid JSON",
      "Multiple indentation options",
      "Real-time validation and feedback",
      "Instant error detection",
      "Copy to clipboard",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png",
  },
  "json-prettifier": {
    title: "JSON Formatter, Validator and Linter | Online Free DevTools",
    name: "JSON Prettifier",
    path: "/freedevtools/t/json-prettifier/",
    description:
      "Format, validate, and lint JSON online for free with Hexmos Free DevTools. Enjoy multiple indentation options and real-time validation in an ad-free environment.",
    category: "Developer Tools",
    icon: "📄",
    themeColor: "#10b981",
    canonical: "https://hexmos.com/freedevtools/t/json-prettifier/",
    keywords: [
      "JSON online formatter",
      "JSON online validator",
      "JSON online linter",
      "JSON online",
      "Best JSON formatter",
    ],
    features: [
      "JSON formatting",
      "JSON minification",
      "JSON validation",
      "Multiple indentation options",
      "Real-time validation",
      "Copy to clipboard",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-prettifier-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-prettifier-banner.png",
    variationOf: "json-utilities",
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
    keywords: [
      "json validator",
      "json check",
      "validate json",
      "developer tools",
    ],
    features: [
      "Validate JSON structure",
      "Detect formatting errors",
      "Real-time error messages",
      "Copy to clipboard",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-validator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-validator-banner.png",
    variationOf: "json-utilities",
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
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-fixer-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-fixer-banner.png",
    variationOf: "json-utilities",
  },
  "password-generator": {
    title: "Secure, Strong & Random Password Generator | Online Free Devtools",
    name: "Password Generator",
    path: "/freedevtools/t/password-generator/",
    description:
      "Generate secure passwords instantly with Hexmos Free DevTools. Choose quick presets, customize password type, length, and characters for strong, random passwords.",
    category: "Security Tools",
    icon: "�",
    themeColor: "#6366f1",
    canonical: "https://hexmos.com/freedevtools/t/password-generator/",
    keywords: [
      "password generator",
      "secure password generator",
      "random password generator",
      "strong password generator",
      "free password generator",
      "online password generator",
      "custom password generator",
      "password creator tool",
      "password maker online",
      "cybersecurity tools",
    ],
    features: [
      "Quick presets for easy selection",
      "Password types: word-based or character-based",
      "Customizable password length",
      "Multiple character set options",
      "Readable password generation",
      "Instant password creation",
      "Copy to clipboard",
      "Real-time password strength indicator",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/password-generator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/password-generator-banner.png",
  },

  "dockerfile-linter": {
    title: "Dockerfile Linter and Validator | Online Free DevTools",
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
    title: "Date Time Converter | Online Free DevTools",
    name: "Date Time Converter",
    path: "/freedevtools/t/date-time-converter/",
    description:
      "Free online Date Time Converter by Hexmos. Instantly convert UTC, ISO, Unix timestamps, and more. Paste or pick a date to see all formats at once, no signup needed.",
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
  tldr: {
    title: "TLDR - Command Documentation | Free DevTools",
    name: "TLDR",
    path: "/freedevtools/t/tldr/",
    description:
      "Comprehensive documentation for command-line tools across different platforms including Linux, macOS, Windows, Android, and more.",
    category: "Documentation",
    icon: "📚",
    themeColor: "#8b5cf6",
    canonical: "https://hexmos.com/freedevtools/t/tldr/",
    keywords: [
      "tldr",
      "command documentation",
      "cli commands",
      "terminal commands",
      "linux commands",
      "macos commands",
      "windows commands",
      "android commands",
      "command reference",
      "developer documentation",
    ],
    features: [
      "Platform-specific command documentation",
      "Searchable command database",
      "Syntax examples and usage",
      "Cross-platform command reference",
      "Mobile and desktop commands",
    ],
    ogImage: "https://hexmos.com/freedevtools/t/tool-banners/tldr-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/tldr-banner.png",
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
