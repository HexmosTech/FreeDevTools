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
  datePublished?: string;
  softwareVersion?: string;
}

export const TOOLS_CONFIG: Record<string, Tool> = {
  "json-prettifier": {
    title: "JSON Prettifier - Format, Minify & Validate JSON Online",
    name: "JSON Prettifier",
    path: "/freedevtools/t/json-prettifier/",
    description:
      "Format, minify, and validate JSON data instantly. Multiple indentation options, real-time validation, and no registration required.",
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
    ogImage: "",
    twitterImage: "",
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
    ogImage: "",
    twitterImage: "",
  },

  "dockerfile-linter": {
    title: "Dockerfile Linter - Analyze & Linting Tool",
    name: "Dockerfile Linter",
    path: "/freedevtools/t/dockerfile-linter/",
    description:
      "Comprehensive Dockerfile linter. Detects syntax errors, security risks, performance issues, and enforces Docker best practices.",
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
    ogImage: "",
    twitterImage: "",
  },
  "date-time-converter": {
    title: "Date Time Converter - Convert UTC, ISO, Unix Timestamps",
    name: "Date Time Converter",
    path: "/freedevtools/t/date-time-converter/",
    description:
      "Instantly convert dates and times with Date Time Converter. Transform UTC, ISO, Unix, and more formats. Paste or pick a date to see all formats at once.",
    category: "Developer Tools",
    icon: "🛠️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/date-time-converter/",
    keywords: [
      "date-time-converter",
      "datetime converter",
      "date converter",
      "time converter",
      "timestamp converter",
      "unix timestamp",
      "iso date",
      "utc",
      "online date converter",
    ],
    features: [
      "Convert between UTC, ISO, Unix, and other date/time formats",
      "Date and time picker integration",
      "Handles timestamps, ISO strings, and custom formats",
      "Shows all common formats at a glance",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/images/date-time-converter-og.png",
    twitterImage:
      "https://hexmos.com/freedevtools/images/date-time-converter-twitter.png",
  },
};

export function getToolByKey(key: string): Tool | undefined {
  return TOOLS_CONFIG[key];
}

export function getAllTools(): Tool[] {
  return Object.values(TOOLS_CONFIG);
}

export function getToolsByCategory(category: string): Tool[] {
  return getAllTools().filter((tool) => tool.category === category);
}
