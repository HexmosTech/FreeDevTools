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

  "json-to-csv-converter": {
    title: "JSON to CSV Converter - Transform JSON Data | Online Free DevTools",
    name: "Json To Csv Converter",
    path: "/freedevtools/t/json-to-csv-converter/",
    description:
      "Convert JSON data to CSV format instantly. Transform arrays of objects to spreadsheet-ready CSV files with real-time preview and advanced formatting options.",
    category: "Developer Tools",
    icon: "🛠️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/json-to-csv-converter/",
    keywords: [
      "json-to-csv-converter",
      "developer tools",
      "csv converter",
      "json converter",
      "data transformation",
      "json to spreadsheet",
    ],
    features: [
      "Real-time JSON to CSV conversion",
      "Flatten nested JSON objects",
      "Download CSV files instantly",
      "Handle arrays and single objects",
      "Empty field customization",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png",
  },

  "image-to-base64": {
    title:
      "Image to Base64 Converter - Encode Images Instantly | Free DevTools",
    name: "Image To Base64",
    path: "/freedevtools/t/image-to-base64/",
    description:
      "Convert images to Base64 format instantly with our free online converter. Upload PNG, JPG, GIF, WebP images and get Base64 string, HTML img tag, CSS background code. Secure browser-based processing.",
    category: "Developer Tools",
    icon: "🖼️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/image-to-base64/",
    keywords: [
      "image to base64 converter",
      "base64 image encoder",
      "convert image to base64",
      "base64 image generator",
      "online image encoder",
      "image data uri converter",
      "png to base64",
      "jpg to base64",
    ],
    features: [
      "Convert images to Base64 format instantly",
      "Support for PNG, JPG, GIF, WebP, SVG formats",
      "Generate HTML img tags and CSS background code",
      "Drag-and-drop file upload interface",
      "Browser-based processing - no server uploads",
      "Real-time conversion with copy functionality",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/image-to-base64-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/image-to-base64-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "jwt-parser": {
    title: "JWT Parser - Decode JSON Web Tokens Online | Free DevTools",
    name: "JWT Parser",
    path: "/freedevtools/t/jwt-parser/",
    description:
      "Parse and decode JWT tokens instantly with our free online JWT parser. Decode header, payload, and signature from JSON Web Tokens with real-time validation. Secure browser-based processing.",
    category: "Developer Tools",
    icon: "🔐",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/jwt-parser/",
    keywords: [
      "jwt parser",
      "jwt decoder",
      "json web token parser",
      "decode jwt online",
      "jwt token decoder",
      "free jwt parser",
      "online jwt decoder",
      "jwt validation tool",
    ],
    features: [
      "Parse JWT tokens instantly with real-time decoding",
      "Decode header, payload, and signature sections separately",
      "Real-time JWT validation and error detection",
      "Sample JWT tokens for testing and learning",
      "Copy decoded sections to clipboard individually",
      "Browser-based processing - tokens never leave your device",
      "Support for all JWT algorithms and formats",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/jwt-parser-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/jwt-parser-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "yaml-to-json": {
    title: "YAML to JSON Converter - Transform YAML Online | Free DevTools",
    name: "YAML to JSON Converter",
    path: "/freedevtools/t/yaml-to-json/",
    description:
      "Convert YAML to JSON format instantly with our free online converter. Transform YAML configuration files to JSON with real-time validation and formatting. Secure browser-based processing.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/yaml-to-json/",
    keywords: [
      "yaml to json converter",
      "convert yaml to json online",
      "yaml json converter free",
      "yaml to json online tool",
      "transform yaml data json",
      "yaml configuration converter",
      "online yaml parser",
    ],
    features: [
      "Real-time YAML to JSON conversion",
      "Support for multi-document YAML files",
      "Comprehensive error handling and validation",
      "Sample YAML data for testing",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
      "Support for all YAML syntax features",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/yaml-to-json-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/yaml-to-json-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "uuid-generator": {
    title: "UUID Generator - Generate Secure UUIDs Online | Free DevTools",
    name: "UUID Generator",
    path: "/freedevtools/t/uuid-generator/",
    description:
      "Generate secure UUIDs instantly with our free online UUID generator. Create random v4 UUIDs, timestamp-based v1 UUIDs, or special nil/max UUIDs. Bulk generation and analysis tools included.",
    category: "Developer Tools",
    icon: "🆔",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/uuid-generator/",
    keywords: [
      "uuid generator",
      "guid generator",
      "unique identifier generator",
      "random uuid generator",
      "uuid v4 generator",
      "bulk uuid generator",
      "online uuid generator",
      "free uuid generator",
    ],
    features: [
      "Generate UUID v1, v4, nil, and max versions",
      "Bulk UUID generation (up to 1000 at once)",
      "UUID format customization (uppercase, no dashes)",
      "Real-time UUID analysis and validation",
      "Copy individual or bulk UUIDs to clipboard",
      "Browser-based processing - no server uploads",
      "Support for all standard UUID formats and variants",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/uuid-generator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/uuid-generator-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "svg-viewer": {
    title: "SVG Viewer - View & Analyze SVG Files Online | Free DevTools",
    name: "SVG Viewer",
    path: "/freedevtools/t/svg-viewer/",
    description:
      "View and analyze SVG files instantly with our free online SVG viewer. Upload SVG files or paste SVG code to visualize, edit, and download. Real-time preview with dimension analysis.",
    category: "Developer Tools",
    icon: "�️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/svg-viewer/",
    keywords: [
      "svg viewer",
      "svg file viewer",
      "view svg online",
      "svg preview tool",
      "svg analyzer",
      "svg code viewer",
      "online svg editor",
      "svg dimension checker",
    ],
    features: [
      "Upload SVG files or paste SVG code directly",
      "Real-time SVG preview and rendering",
      "SVG dimension and file size analysis",
      "Download processed SVG files",
      "Fullscreen preview mode",
      "Browser-based processing - data stays private",
      "Support for all SVG elements and attributes",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/svg-viewer-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/svg-viewer-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "sql-minifier": {
    title: "SQL Minifier - Optimize SQL Queries Online | Free DevTools",
    name: "SQL Minifier",
    path: "/freedevtools/t/sql-minifier/",
    description:
      "Minify SQL queries instantly with our free online SQL minifier. Remove comments, extra spaces, and optimize SQL formatting for better performance and smaller file sizes. Secure browser-based processing.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/sql-minifier/",
    keywords: [
      "sql minifier",
      "sql optimizer",
      "minify sql online",
      "sql code minifier",
      "compress sql queries",
      "sql formatter",
      "optimize sql code",
      "remove sql comments",
    ],
    features: [
      "Minify SQL queries instantly with real-time processing",
      "Remove comments and extra whitespace from SQL code",
      "Preserve or strip SQL comments based on preferences",
      "Calculate compression ratio and size savings",
      "Support for all SQL dialects and database systems",
      "Browser-based processing - queries never leave your device",
      "Copy minified SQL to clipboard with one click",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/sql-minifier-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/sql-minifier-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "rgb-to-hex": {
    title: "RGB to HEX Converter - Convert RGB Colors Online | Free DevTools",
    name: "RGB to HEX Converter",
    path: "/freedevtools/t/rgb-to-hex/",
    description:
      "Convert RGB color values to HEX format instantly with our free online RGB to HEX converter. Transform red, green, blue values to hexadecimal color codes with real-time preview and multiple format outputs.",
    category: "Developer Tools",
    icon: "🎨",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/rgb-to-hex/",
    keywords: [
      "rgb to hex converter",
      "rgb hex converter",
      "convert rgb to hex",
      "color converter online",
      "rgb to hexadecimal",
      "css color converter",
      "rgb hex color tool",
      "hex color generator",
    ],
    features: [
      "Real-time RGB to HEX conversion",
      "Interactive color preview",
      "Multiple format outputs (CSS, HSL, Swift, Android)",
      "Bidirectional conversion (RGB ↔ HEX)",
      "Copy to clipboard functionality",
      "Mobile development color codes",
      "Browser-based processing - no server uploads",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/rgb-to-hex-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/rgb-to-hex-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "diff-checker": {
    title: "Diff Checker - Compare Text & Code Online | Free DevTools",
    name: "Diff Checker",
    path: "/freedevtools/t/diff-checker/",
    description:
      "Compare text and code differences instantly with our free online diff checker. Visualize changes character by character, word by word, or line by line with advanced comparison options and unified diff export.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/diff-checker/",
    keywords: [
      "diff checker",
      "text comparison tool",
      "code diff online",
      "compare text files",
      "difference checker",
      "file comparison tool",
      "online diff tool",
      "text diff viewer",
    ],
    features: [
      "Real-time text and code comparison",
      "Multiple comparison modes (character, word, line, sentence)",
      "Ignore case and whitespace options",
      "Visual diff highlighting with color coding",
      "Unified diff export for version control",
      "Statistical analysis of changes",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/t/tool-banners/diff-checker-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/t/tool-banners/diff-checker-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
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
