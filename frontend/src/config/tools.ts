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
      "https://hexmos.com/freedevtools/t/tool-banners/dockerfile-linter-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/dockerfile-linter-banner.png",
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
      "https://hexmos.com/freedevtools/t/tool-banners/date-time-converter-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/date-time-converter-banner.png",
  },

  "openai-token-counter": {
    title: "OpenAI Token Counter - Count GPT Tokens | Online Free DevTools",
    name: "OpenAI Token Counter",
    path: "/freedevtools/t/openai-token-counter/",
    description:
      "Count OpenAI tokens instantly with our free online token counter. Calculate GPT-5, GPT-4, GPT-3.5, o1 tokens.",
    category: "Developer Tools",
    icon: "🛠️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/openai-token-counter/",
    keywords: [
      "openai token counter",
      "gpt token counter",
      "openai api token calculator",
      "gpt-4 token counter",
      "gpt-5 token counter",
      "tiktoken counter",
    ],
    features: [
      "Count tokens for all OpenAI models (GPT-4, GPT-3.5, o1, o3)",
      "Real-time token calculation using tiktoken",
      "Support for latest models including GPT-5 and embedding models",
      "Context limit tracking and usage percentage",
      "Browser-based processing - your data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/openai-token-counter.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/openai-token-counter.png",
  },

  "anthropic-token-counter": {
    name: "Anthropic Token Counter",
    path: "/freedevtools/t/anthropic-token-counter/",
    description:
      "Count Anthropic tokens instantly with our free online Claude token counter. Calculate Claude-3.5, Claude-3, Opus tokens.",
    category: "Developer Tools",
    icon: "🛠️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/anthropic-token-counter/",
    keywords: [
      "anthropic token counter",
      "claude token counter",
      "anthropic api token calculator",
      "claude-3 token counter",
      "claude-4 token counter",
      "claude token calculator",
    ],
    features: [
      "Count tokens for all Claude models (Opus, Sonnet, Haiku)",
      "Real-time token calculation using official Anthropic tokenizers",
      "Support for latest models including Claude-3.5 and Claude-4",
      "Context limit tracking and usage percentage calculation",
      "Browser-based processing - your data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/anthropic-token-counter.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/anthropic-token-counter.png",
    title:
      "Anthropic Token Counter - Count Claude Tokens | Online Free DevTools",
  },
};

// tldr: {
//   title: "TLDR - Command Documentation | Free DevTools",
//   name: "TLDR",
//   path: "/freedevtools/tldr/",
//   description:
//     "Comprehensive documentation for command-line tools across different platforms including Linux, macOS, Windows, Android, and more.",
//   category: "Documentation",
//   icon: "📚",
//   themeColor: "#8b5cf6",
//   canonical: "https://hexmos.com/freedevtools/tldr/",
//   keywords: [
//     "tldr",
//     "command documentation",
//     "cli commands",
//     "terminal commands",
//     "linux commands",
//     "macos commands",
//     "windows commands",
//     "android commands",
//     "command reference",
//     "developer documentation",
//   ],
//   features: [
//     "Platform-specific command documentation",
//     "Searchable command database",
//     "Syntax examples and usage",
//     "Cross-platform command reference",
//     "Mobile and desktop commands",
//   ],
//   ogImage: "https://hexmos.com/freedevtools/t/tool-banners/tldr-banner.png",
//   twitterImage:
//     "https://hexmos.com/freedevtools/t/tool-banners/tldr-banner.png",
// },

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
