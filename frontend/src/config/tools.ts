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
    ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-prettier.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-prettier.png",
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
      "https://hexmos.com/freedevtools/t/tool-banners/password-generator.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/password-generator.png",
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
};

export function getToolByKey(key: string): Tool | undefined {
  return TOOLS_CONFIG[key];
}

export function getAllTools(): Tool[] {
  const keys = Object.keys(TOOLS_CONFIG);
  console.log("STATIC PATH KEYS:", keys);
  return Object.values(TOOLS_CONFIG);
}

export function getToolsByCategory(category: string): Tool[] {
  return getAllTools().filter((tool) => tool.category === category);
}
