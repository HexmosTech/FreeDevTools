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
    title:
      "JSON Formatter, Validator and Linter | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png",
  },
  "json-prettifier": {
    title:
      "JSON Formatter, Validator and Linter | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/json-prettifier-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/json-prettifier-banner.png",
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
      "https://hexmos.com/freedevtools/tool-banners/json-validator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/json-validator-banner.png",
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
      "https://hexmos.com/freedevtools/tool-banners/json-fixer-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/json-fixer-banner.png",
    variationOf: "json-utilities",
  },
  "password-generator": {
    title:
      "Secure, Strong & Random Password Generator | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/password-generator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/password-generator-banner.png",
  },

  "dockerfile-linter": {
    title: "Dockerfile Linter and Validator | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/dockerfile-linter-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/dockerfile-linter-banner.png",
  },
  "date-time-converter": {
    title: "Date Time Converter | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/date-time-converter-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/date-time-converter-banner.png",
  },

  "openai-token-counter": {
    title:
      "OpenAI Token Counter - Count GPT Tokens | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/openai-token-counter.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/openai-token-counter.png",
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
      "https://hexmos.com/freedevtools/tool-banners/anthropic-token-counter.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/anthropic-token-counter.png",
    title:
      "Anthropic Token Counter - Count Claude Tokens | Online Free DevTools by Hexmos",
  },

  "json-to-csv-converter": {
    title:
      "JSON to CSV Converter - Transform JSON Data | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png",
  },

  "image-to-base64": {
    title:
      "Image to Base64 Converter - Encode Images Instantly | Online Free DevTools by Hexmos",
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
    title:
      "JWT Parser - Decode JSON Web Tokens Online | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/jwt-parser-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/jwt-parser-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "yaml-to-json": {
    title:
      "YAML to JSON Converter - Transform YAML Online | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/yaml-to-json-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/yaml-to-json-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "uuid-generator": {
    title:
      "UUID Generator - Generate Secure UUIDs Online | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/uuid-generator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/uuid-generator-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "svg-viewer": {
    title:
      "SVG Viewer - View & Analyze SVG Files Online | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/svg-viewer-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/svg-viewer-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "sql-minifier": {
    title:
      "SQL Minifier - Optimize SQL Queries Online | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/sql-minifier-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/sql-minifier-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "rgb-to-hex": {
    title:
      "RGB to HEX Converter - Convert RGB Colors Online | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/rgb-to-hex-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/rgb-to-hex-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "diff-checker": {
    title:
      "Diff Checker - Compare Text & Code Online | Online Free DevTools by Hexmos",
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
      "https://hexmos.com/freedevtools/tool-banners/diff-checker-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/diff-checker-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "regex-tester": {
    title:
      "Regex Tester - Test Regular Expressions Online | Online Free DevTools by Hexmos",
    name: "Regex Tester",
    path: "/freedevtools/t/regex-tester/",
    description:
      "Test regular expressions instantly with our free online regex tester. Validate patterns, find matches, and debug regex with real-time highlighting and detailed match information. Secure browser-based processing.",
    category: "Developer Tools",
    icon: "🔍",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/regex-tester/",
    keywords: [
      "regex tester",
      "regular expression tester",
      "regex validator",
      "pattern matcher",
      "regex debugger",
      "online regex tool",
      "regex pattern tester",
      "javascript regex tester",
    ],
    features: [
      "Test regex patterns instantly with real-time validation",
      "Visual match highlighting in test strings",
      "Support for all JavaScript regex flags (g, i, m, s, u, y)",
      "Detailed match information and capture groups",
      "Error detection and validation feedback",
      "Sample regex patterns for learning",
      "Browser-based processing - patterns never leave your device",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/regex-tester-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/regex-tester-banner.png",
    datePublished: "2025-09-11",
    softwareVersion: "1.0.0",
  },

  "query-params-to-json": {
    title:
      "Query Params to JSON Converter - Parse URL Parameters | Online Free DevTools by Hexmos",
    name: "Query Params To JSON",
    path: "/freedevtools/t/query-params-to-json/",
    description:
      "Convert URL query parameters to JSON format instantly with our free online converter. Parse query strings from URLs, form data, and API endpoints into structured JSON objects with real-time validation.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/query-params-to-json/",
    keywords: [
      "query params to json converter",
      "url parameters to json",
      "query string parser",
      "url query converter",
      "parse query parameters",
      "query string to json online",
      "url parameter parser",
      "query params decoder",
    ],
    features: [
      "Convert URL query parameters to JSON format",
      "Parse complex nested query structures",
      "Handle arrays and special characters in URLs",
      "Real-time conversion with validation",
      "Support for encoded and decoded URLs",
      "Copy JSON output to clipboard",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/query-params-to-json-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/query-params-to-json-banner.png",
    datePublished: "2025-09-13",
    softwareVersion: "1.0.0",
  },

  "lorem-ipsum-generator": {
    title: "Lorem Ipsum Generator - Create Placeholder Text | Free Online Tool",
    name: "Lorem Ipsum Generator",
    path: "/freedevtools/t/lorem-ipsum-generator/",
    description:
      "Generate random Lorem Ipsum placeholder text instantly with our free online generator. Create words, sentences, or paragraphs for design mockups, layouts, and content testing. Fast, customizable, and ad-free.",
    category: "Developer Tools",
    icon: "📝",
    themeColor: "#8b5cf6",
    canonical: "https://hexmos.com/freedevtools/t/lorem-ipsum-generator/",
    keywords: [
      "lorem ipsum generator",
      "placeholder text generator",
      "dummy text generator",
      "fake text generator",
      "lorem ipsum online",
    ],
    features: [
      "Generate words, sentences, or paragraphs",
      "HTML format output option",
      "Start with classic Lorem Ipsum text",
      "Customizable amount (1-99 units)",
      "Instant copy to clipboard",
      "Mobile responsive interface",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/lorem-ipsum-generator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/lorem-ipsum-generator-banner.png",
    datePublished: "2025-09-13",
    softwareVersion: "1.0.0",
  },

  "json-to-yaml": {
    title:
      "JSON to YAML Converter - Transform JSON Online | Online Free DevTools by Hexmos",
    name: "JSON to YAML Converter",
    path: "/freedevtools/t/json-to-yaml/",
    description:
      "Convert JSON to YAML format instantly with our free online converter. Transform JSON configuration files to YAML with real-time validation and formatting. Secure browser-based processing.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/json-to-yaml/",
    keywords: [
      "json to yaml converter",
      "convert json to yaml online",
      "json yaml converter free",
      "json to yaml online tool",
      "transform json data yaml",
      "json configuration converter",
      "online json parser",
    ],
    features: [
      "Real-time JSON to YAML conversion",
      "Support for nested JSON objects and arrays",
      "Comprehensive error handling and validation",
      "Sample JSON data for testing",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
      "Support for all JSON syntax features",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/json-to-yaml-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/json-to-yaml-banner.png",
    datePublished: "2025-09-13",
    softwareVersion: "1.0.0",
  },

  "hash-generator": {
    title:
      "Hash Generator - Generate Secure Hashes Online | Online Free DevTools by Hexmos",
    name: "Hash Generator",
    path: "/freedevtools/t/hash-generator/",
    description:
      "Generate secure hashes instantly with our free online hash generator. Create SHA-256, SHA-512, MD5, PBKDF2, and HMAC hashes with customizable options for security and development needs.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/hash-generator/",
    keywords: [
      "hash generator",
      "sha256 generator",
      "sha512 generator",
      "md5 generator",
      "pbkdf2 generator",
      "hmac generator",
      "cryptographic hash",
      "secure hash online",
      "password hash generator",
      "data integrity hash",
    ],
    features: [
      "Multiple hash algorithms (SHA-256, SHA-512, MD5, PBKDF2, HMAC)",
      "Customizable encoding options (Hex, Base64, Latin1)",
      "PBKDF2 with configurable iterations and salt",
      "HMAC with custom secret keys",
      "Real-time hash generation",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/hash-generator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/hash-generator-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "har-file-viewer": {
    title:
      "HAR File Viewer - Analyze HTTP Archive Files Online | Online Free DevTools by Hexmos",
    name: "HAR File Viewer",
    path: "/freedevtools/t/har-file-viewer/",
    description:
      "Analyze HTTP Archive (HAR) files instantly with our free online HAR viewer. Debug network traffic, analyze web performance, and examine HTTP requests with detailed waterfall charts and table views.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/har-file-viewer/",
    keywords: [
      "har file viewer",
      "http archive viewer",
      "har analyzer",
      "network traffic analyzer",
      "web performance analyzer",
      "har file parser",
      "http request analyzer",
      "waterfall chart viewer",
      "network debugging tool",
      "web developer tools",
    ],
    features: [
      "Upload and analyze HAR files instantly",
      "Interactive waterfall charts for performance analysis",
      "Detailed table view with sorting and filtering",
      "Filter by content type (XHR, JS, CSS, Images, etc.)",
      "Status code filtering and error highlighting",
      "Request/response headers inspection",
      "Browser-based processing - files never leave your device",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/har-file-viewer-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/har-file-viewer-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "env-to-netlify-toml": {
    title:
      "Env to Netlify TOML Converter - Transform Environment Variables | Online Free DevTools by Hexmos",
    name: "Env to Netlify TOML Converter",
    path: "/freedevtools/t/env-to-netlify-toml/",
    description:
      "Convert .env files to Netlify TOML format instantly with our free online converter. Transform environment variables for Netlify deployment configuration with proper TOML syntax and validation.",
    category: "Developer Tools",
    icon: "⚙️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/env-to-netlify-toml/",
    keywords: [
      "env to netlify toml converter",
      "environment variables converter",
      "netlify toml generator",
      "env file converter",
      "netlify deployment config",
      "toml converter online",
      "netlify environment variables",
      "env to toml converter",
      "netlify config generator",
      "deployment environment setup",
    ],
    features: [
      "Real-time .env to netlify.toml conversion",
      "Support for environment-specific variables",
      "Proper TOML syntax formatting",
      "Handle quoted and unquoted values",
      "Context-specific variable organization",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/env-to-netlify-toml-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/env-to-netlify-toml-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "csv-to-json": {
    title:
      "CSV to JSON Converter - Transform CSV Data Online | Online Free DevTools by Hexmos",
    name: "CSV to JSON Converter",
    path: "/freedevtools/t/csv-to-json/",
    description:
      "Convert CSV files to JSON format instantly with our free online converter. Upload CSV files or paste CSV data to transform into structured JSON objects with customizable formatting options.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/csv-to-json/",
    keywords: [
      "csv to json converter",
      "convert csv to json online",
      "csv json converter free",
      "csv to json online tool",
      "transform csv data json",
      "csv file converter",
      "online csv parser",
      "csv json transformation",
      "data conversion tool",
      "spreadsheet to json",
    ],
    features: [
      "Real-time CSV to JSON conversion",
      "Upload CSV files or paste CSV data",
      "Customizable key formatting (lowercase option)",
      "Drag and drop file upload support",
      "Handle different CSV delimiters and formats",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/csv-to-json-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/csv-to-json-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "css-units-converter": {
    title:
      "CSS Units Converter - Convert px, rem, vw, vh Online | Online Free DevTools by Hexmos",
    name: "CSS Units Converter",
    path: "/freedevtools/t/css-units-converter/",
    description:
      "Convert CSS units instantly with our free online converter. Transform pixels to rem, viewport units (vw, vh, vmin, vmax), and more with real-time conversion and responsive design calculations.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/css-units-converter/",
    keywords: [
      "css units converter",
      "px to rem converter",
      "viewport units converter",
      "css unit calculator",
      "responsive design converter",
      "px to vw converter",
      "rem to px converter",
      "css measurement converter",
      "web design units",
      "css length units",
    ],
    features: [
      "Convert between px, rem, vw, vh, vmin, vmax units",
      "Real-time conversion with instant results",
      "Responsive design calculations",
      "Container dimension inputs for viewport units",
      "Bidirectional unit conversion",
      "Copy results to clipboard",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/css-units-converter-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/css-units-converter-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "base64-utilities": {
    title:
      "Base64 Encoder/Decoder - Encode & Decode Text Online | Online Free DevTools by Hexmos",
    name: "Base64 Utilities",
    path: "/freedevtools/t/base64-utilities/",
    description:
      "Encode and decode text to/from Base64 format instantly with our free online Base64 encoder/decoder. Perfect for data transmission, storage, and web development with real-time conversion.",
    category: "Developer Tools",
    icon: "🔒",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/base64-encoder/",
    keywords: [
      "base64 utilities",
      "base64 tools",
      "base64 encoder",
      "base64 decoder",
      "base64 converter",
      "encode text to base64",
      "decode base64 to text",
      "base64 online tool",
      "data encoding tool",
      "text encoder decoder",
      "base64 conversion",
      "safe data transmission",
    ],
    features: [
      "Real-time Base64 encoding and decoding",
      "Bidirectional conversion (encode/decode)",
      "Support for text and binary data encoding",
      "Instant error detection for invalid Base64",
      "Copy to clipboard functionality",
      "Mobile responsive interface",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/base64-encoder-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/base64-encoder-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "base64-encoder": {
    title:
      "Base64 Encoder - Encode Text to Base64 Online | Online Free DevTools by Hexmos",
    name: "Base64 Encoder",
    path: "/freedevtools/t/base64-encode/",
    description:
      "Encode text to Base64 format instantly with our free online Base64 encoder. Perfect for data transmission, storage, and web development with real-time encoding.",
    category: "Developer Tools",
    icon: "📤",
    themeColor: "#10b981",
    canonical: "https://hexmos.com/freedevtools/t/base64-encode/",
    keywords: [
      "base64 encoder",
      "encode to base64",
      "text to base64",
      "base64 encoding online",
      "data encoder",
      "text encoder",
      "base64 converter",
    ],
    features: [
      "Real-time Base64 encoding",
      "Support for text and binary data",
      "Instant encoding results",
      "Copy to clipboard functionality",
      "Mobile responsive interface",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/base64-encode-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/base64-encode-banner.png",
    variationOf: "base64-utilities",
  },

  "base64-decoder": {
    title:
      "Base64 Decoder - Decode Base64 to Text Online | Online Free DevTools by Hexmos",
    name: "Base64 Decoder",
    path: "/freedevtools/t/base64-decode/",
    description:
      "Decode Base64 to text format instantly with our free online Base64 decoder. Perfect for data retrieval and web development with real-time decoding and error detection.",
    category: "Developer Tools",
    icon: "📥",
    themeColor: "#f59e0b",
    canonical: "https://hexmos.com/freedevtools/t/base64-decode/",
    keywords: [
      "base64 decoder",
      "decode base64",
      "base64 to text",
      "base64 decoding online",
      "data decoder",
      "text decoder",
      "base64 converter",
    ],
    features: [
      "Real-time Base64 decoding",
      "Instant error detection for invalid Base64",
      "Support for various Base64 formats",
      "Copy to clipboard functionality",
      "Mobile responsive interface",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/base64-decode-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/base64-decode-banner.png",
    variationOf: "base64-utilities",
  },

  "css-inliner-for-email": {
    title:
      "CSS Inliner for Email - Convert CSS to Inline Styles | Online Free DevTools by Hexmos",
    name: "CSS Inliner for Email",
    path: "/freedevtools/t/css-inliner-for-email/",
    description:
      "Convert CSS styles to inline styles for email HTML instantly with our free CSS inliner. Perfect for email templates, newsletters, and ensuring cross-client compatibility with real-time conversion.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/css-inliner-for-email/",
    keywords: [
      "css inliner",
      "email css inliner",
      "css to inline styles",
      "email template tool",
      "inline css converter",
      "email html optimizer",
      "css email tool",
      "newsletter css inliner",
      "html email converter",
      "email css generator",
    ],
    features: [
      "Convert CSS styles to inline HTML attributes",
      "Real-time CSS to inline conversion",
      "Email client compatibility optimization",
      "Support for complex CSS selectors",
      "HTML and CSS validation",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/css-inliner-for-email-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/css-inliner-for-email-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "curl-to-js-fetch": {
    title:
      "cURL to JavaScript Fetch Converter - Convert cURL Commands | Online Free DevTools by Hexmos",
    name: "cURL to JavaScript Fetch",
    path: "/freedevtools/t/curl-to-js-fetch/",
    description:
      "Convert cURL commands to JavaScript fetch API code instantly with our free online converter. Transform command-line HTTP requests into modern JavaScript fetch calls with real-time conversion.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/curl-to-js-fetch/",
    keywords: [
      "curl to javascript",
      "curl to fetch converter",
      "curl converter",
      "javascript fetch generator",
      "http request converter",
      "api request converter",
      "curl command converter",
      "fetch api generator",
      "javascript http client",
      "curl to js fetch",
    ],
    features: [
      "Convert cURL commands to JavaScript fetch API",
      "Real-time conversion with instant results",
      "Support for all HTTP methods (GET, POST, PUT, DELETE)",
      "Handle headers, authentication, and request bodies",
      "Parse complex cURL command structures",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/curl-to-js-fetch-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/curl-to-js-fetch-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "webp-converter": {
    title:
      "WebP Converter - Convert Images to WebP Format | Online Free DevTools by Hexmos",
    name: "WebP Converter",
    path: "/freedevtools/t/webp-converter/",
    description:
      "Convert images to WebP format instantly with our free online converter. Upload JPG, PNG, GIF images and convert to WebP with adjustable quality settings. Batch processing and download support included.",
    category: "Developer Tools",
    icon: "�️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/webp-converter/",
    keywords: [
      "webp converter",
      "image to webp",
      "convert to webp",
      "webp image converter",
      "jpg to webp",
      "png to webp",
      "gif to webp",
      "webp format converter",
      "image compression webp",
      "batch webp converter",
    ],
    features: [
      "Convert images to WebP format instantly",
      "Support for JPG, PNG, GIF, and other image formats",
      "Adjustable quality settings for optimal compression",
      "Batch processing for multiple images",
      "Real-time file size comparison",
      "Download converted images individually or as ZIP",
      "Browser-based processing - images never leave your device",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/webp-converter-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/webp-converter-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "qrcode-generator": {
    title:
      "QR Code Generator - Create QR Codes Online | Online Free DevTools by Hexmos",
    name: "QR Code Generator",
    path: "/freedevtools/t/qrcode-generator/",
    description:
      "Generate QR codes instantly with our free online QR code generator. Create customizable QR codes for URLs, text, contact info, and more with adjustable error correction and scale settings.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/qrcode-generator/",
    keywords: [
      "qr code generator",
      "qr code maker",
      "qr code creator",
      "generate qr code",
      "free qr code generator",
      "online qr code",
      "qr code tool",
      "qr scanner code",
      "custom qr code",
      "qr code download",
    ],
    features: [
      "Generate QR codes for text, URLs, and contact information",
      "Adjustable error correction levels (Low, Medium, Quartile, High)",
      "Customizable scale and size options",
      "Download QR codes as PNG images",
      "Real-time QR code preview",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/qrcode-generator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/qrcode-generator-banner.png",
    datePublished: "2025-01-17",
    softwareVersion: "1.0.0",
  },

  faker: {
    title:
      "Fake Data Generator - Generate Mock Data Online | Online Free DevTools by Hexmos",
    name: "Fake Data Generator",
    path: "/freedevtools/t/faker/",
    description:
      "Generate realistic fake data instantly with our free online fake data generator. Create mock JSON, CSV, SQL data with customizable fields for testing, development, and prototyping.",
    category: "Developer Tools",
    icon: "🎲",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/faker/",
    keywords: [
      "fake data generator",
      "mock data generator",
      "test data generator",
      "fake json generator",
      "mock csv data",
      "fake sql data",
      "dummy data generator",
      "test data creation",
      "mock api data",
      "faker js online",
    ],
    features: [
      "Generate realistic fake data with Faker.js",
      "Support for JSON, CSV, SQL, and YAML formats",
      "Customizable field types and categories",
      "Bulk data generation with adjustable row counts",
      "Real-time data preview and generation",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
    ],
    ogImage: "https://hexmos.com/freedevtools/tool-banners/faker-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/faker-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },

  "cron-tester": {
    title:
      "Cron Expression Tester - Test & Validate Cron Jobs Online | Online Free DevTools by Hexmos",
    name: "Cron Expression Tester",
    path: "/freedevtools/t/cron-tester/",
    description:
      "Test and validate cron expressions instantly with our free online cron tester. Parse cron jobs, validate syntax, see next execution times, and understand cron patterns with real-time feedback.",
    category: "Developer Tools",
    icon: "⏰",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/cron-tester/",
    keywords: [
      "cron tester",
      "cron expression validator",
      "cron job tester",
      "cron parser online",
      "validate cron expression",
      "cron schedule tester",
      "cron syntax checker",
      "cron calculator",
      "test cron job",
      "cron expression generator",
    ],
    features: [
      "Test and validate cron expressions in real-time",
      "Parse cron syntax with detailed explanations",
      "Show next execution times with countdown",
      "Generate random cron expressions for testing",
      "Human-readable cron descriptions",
      "Support for standard 5-field cron format",
      "Browser-based processing - expressions never leave your device",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/cron-tester-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/cron-tester-banner.png",
    datePublished: "2025-01-16",
    softwareVersion: "1.0.0",
  },
  "xml-formatter": {
    title:
      "XML Formatter - Format & Beautify XML Online | Online Free DevTools by Hexmos",
    name: "XML Formatter",
    path: "/freedevtools/t/xml-formatter/",
    description:
      "Format and beautify XML documents instantly with our free online XML formatter. Validate XML syntax, customize indentation, and fix malformed XML with real-time formatting and error detection.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#f97316",
    canonical: "https://hexmos.com/freedevtools/t/xml-formatter/",
    keywords: [
      "xml formatter",
      "xml beautifier",
      "xml prettifier",
      "format xml online",
      "xml validator",
      "xml syntax checker",
      "xml minifier",
      "xml parser",
      "beautify xml",
      "xml code formatter",
      "xml pretty print",
      "fix xml format",
      "xml indentation tool",
      "online xml editor",
      "xml structure formatter",
    ],
    features: [
      "Format and beautify XML documents instantly",
      "Real-time XML validation and syntax checking",
      "Customizable indentation options (spaces or tabs)",
      "XML minification for optimized file sizes",
      "Error detection with detailed error messages",
      "Copy formatted XML to clipboard",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/xml-formatter-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/xml-formatter-banner.png",
    datePublished: "2025-01-17",
    softwareVersion: "1.0.0",
  },

  "chmod-calculator": {
    title:
      "Chmod Calculator - Unix File Permissions Calculator | Online Free DevTools by Hexmos",
    name: "Chmod Calculator",
    path: "/freedevtools/t/chmod-calculator/",
    description:
      "Calculate Unix file permissions instantly with our free online chmod calculator. Convert between octal, symbolic, and human-readable formats with real-time permission preview and command generation.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#059669",
    canonical: "https://hexmos.com/freedevtools/t/chmod-calculator/",
    keywords: [
      "chmod calculator",
      "unix permissions calculator",
      "file permissions calculator",
      "chmod octal calculator",
      "chmod symbolic calculator",
      "linux permissions",
      "unix file permissions",
      "chmod command generator",
      "file permission converter",
      "octal to symbolic permissions",
      "chmod 755 calculator",
      "unix security calculator",
      "file mode calculator",
      "linux chmod tool",
      "permission bits calculator",
    ],
    features: [
      "Interactive permission matrix with checkboxes",
      "Real-time octal and symbolic notation conversion",
      "Generate ready-to-use chmod commands",
      "Visual permission representation for owner, group, and public",
      "Copy chmod commands to clipboard",
      "Mobile-responsive permission interface",
      "Browser-based calculation - no server required",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/chmod-calculator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/chmod-calculator-banner.png",
    datePublished: "2025-01-17",
    softwareVersion: "1.0.0",
  },

  "user-agent-parser": {
    title:
      "User Agent Parser - Analyze Browser & Device Info | Online Free DevTools by Hexmos",
    name: "User Agent Parser",
    path: "/freedevtools/t/user-agent-parser/",
    description:
      "Parse and analyze user agent strings instantly with our free online user agent parser. Extract browser, operating system, device, engine, and CPU architecture information with detailed breakdown and real-time analysis.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#8b5cf6",
    canonical: "https://hexmos.com/freedevtools/t/user-agent-parser/",
    keywords: [
      "user agent parser",
      "user agent analyzer",
      "browser detection",
      "device detection",
      "operating system detection",
      "user agent string parser",
      "browser identification",
      "mobile device detection",
      "user agent decoder",
      "browser fingerprinting",
      "web analytics tool",
      "http user agent",
      "ua parser online",
      "browser version detector",
      "device type analyzer",
    ],
    features: [
      "Parse user agent strings with detailed breakdown",
      "Extract browser name, version, and engine information",
      "Detect operating system and version details",
      "Identify device type, model, and vendor",
      "Analyze CPU architecture information",
      "Auto-populate with current browser user agent",
      "Browser-based parsing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/user-agent-parser-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/user-agent-parser-banner.png",
    datePublished: "2025-01-17",
    softwareVersion: "1.0.0",
  },

  "mac-address-generator": {
    title:
      "MAC Address Generator - Generate Random MAC Addresses | Online Free DevTools by Hexmos",
    name: "MAC Address Generator",
    path: "/freedevtools/t/mac-address-generator/",
    description:
      "Generate random MAC addresses instantly with our free online MAC address generator. Create custom MAC addresses with prefix, separator, and case options for testing and development.",
    category: "Developer Tools",
    icon: "🌐",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/mac-address-generator/",
    keywords: [
      "mac address generator",
      "random mac address",
      "generate mac address",
      "mac address creator",
      "fake mac address",
      "mac address maker",
      "network mac generator",
      "ethernet address generator",
      "mac address tool",
      "bulk mac generator",
    ],
    features: [
      "Generate random MAC addresses with custom prefix",
      "Bulk generation up to 100 MAC addresses",
      "Multiple separator options (colon, dash, dot, none)",
      "Uppercase and lowercase output formats",
      "Real-time MAC address generation",
      "Copy to clipboard functionality",
      "Browser-based processing - data stays private",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/mac-address-generator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/mac-address-generator-banner.png",
    datePublished: "2025-01-17",
    softwareVersion: "1.0.0",
  },

  "mac-address-lookup": {
    title:
      "MAC Address Lookup - Find Vendor & Device Info | Online Free DevTools by Hexmos",
    name: "MAC Address Lookup",
    path: "/freedevtools/t/mac-address-lookup/",
    description:
      "Lookup MAC address vendor information instantly with our free online MAC address lookup tool. Identify device manufacturer, organization, and network details from MAC addresses.",
    category: "Developer Tools",
    icon: "�",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/mac-address-lookup/",
    keywords: [
      "mac address lookup",
      "mac address vendor lookup",
      "mac address checker",
      "device manufacturer lookup",
      "oui lookup",
      "ethernet address lookup",
      "network device identifier",
      "mac vendor database",
      "device identification tool",
      "hardware vendor lookup",
    ],
    features: [
      "Lookup MAC address vendor information instantly",
      "Identify device manufacturer and organization",
      "Support for all MAC address formats (colon, dash, dot)",
      "Real-time vendor database lookup",
      "Copy vendor information to clipboard",
      "Browser-based processing - data stays private",
      "Support for partial MAC address lookup",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/mac-address-lookup-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/mac-address-lookup-banner.png",
    datePublished: "2025-01-17",
    softwareVersion: "1.0.0",
  },

  "deepseek-token-counter": {
    title:
      "Deepseek Token Counter - Count Tokens for Deepseek Models | Online Free DevTools by Hexmos",
    name: "Deepseek Token Counter",
    path: "/freedevtools/t/deepseek-token-counter/",
    description:
      "Count tokens instantly for Deepseek models with Deepseek Token Counter by Hexmos. Get accurate token counts for Deepseek V2, Coder, and LLM models.",
    category: "Developer Tools",
    icon: "🛠️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/deepseek-token-counter/",
    keywords: [
      "deepseek token counter",
      "deepseek model token calculator",
      "deepseek v2 token counter",
      "deepseek coder token counter",
      "deepseek llm token counter",
      "token count deepseek",
      "ai token counter",
      "context limit deepseek",
      "prompt token calculator",
      "developer tools",
      "api token counter",
      "online token counter",
    ],
    features: [
      "Count tokens for Deepseek V2, Coder, and LLM models",
      "Real-time token calculation using official Deepseek tokenizers",
      "Context limit tracking and usage percentage calculation",
      "Browser-based processing - your data stays private",
      "Educational content and optimization tips for Deepseek usage",
      "Copy token count and details to clipboard",
      "Video guide on Deepseek tokenization",
      "Links to official Deepseek resources and documentation",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/deepseek-token-counter-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/deepseek-token-counter-banner.png",
    datePublished: "2025-09-20",
    softwareVersion: "1.0.0",
  },
  "llama-token-counter": {
    title:
      "Llama Token Counter - Count Tokens for Meta Llama Models | Online Free DevTools by Hexmos",
    name: "Llama Token Counter",
    path: "/freedevtools/t/llama-token-counter/",
    description:
      "Count tokens instantly for Meta Llama models with Llama Token Counter by Hexmos. Get accurate token counts for Llama 3 and Llama 2 models.",
    category: "Developer Tools",
    icon: "🛠️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/llama-token-counter/",
    keywords: [
      "llama token counter",
      "meta llama token calculator",
      "llama 3 token counter",
      "llama 2 token counter",
      "token count llama",
      "ai token counter",
      "context limit llama",
      "prompt token calculator",
      "developer tools",
      "api token counter",
      "online token counter",
    ],
    features: [
      "Count tokens for Llama 3 and Llama 2 models",
      "Real-time token calculation using official Llama tokenizers",
      "Context limit tracking and usage percentage calculation",
      "Browser-based processing - your data stays private",
      "Educational content and optimization tips for Llama usage",
      "Copy token count and details to clipboard",
      "Video guide on Llama tokenization",
      "Links to official Meta Llama resources and documentation",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/llama-token-counter-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/llama-token-counter-banner.png",
    datePublished: "2025-09-20",
    softwareVersion: "1.0.0",
  },
  "openai-cost-calculator": {
    title:
      "OpenAI Cost Calculator - Estimate API Pricing for GPT Models | Online Free DevTools by Hexmos",
    name: "OpenAI Cost Calculator",
    path: "/freedevtools/t/openai-cost-calculator/",
    description:
      "Estimate API costs for all OpenAI models with OpenAI Cost Calculator by Hexmos. Enter input tokens, output tokens, and API calls to see dynamic pricing for GPT-4, GPT-4o, GPT-5, o1, o3, and more.",
    category: "Developer Tools",
    icon: "🛠️",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/openai-cost-calculator/",
    keywords: [
      "openai cost calculator",
      "gpt pricing calculator",
      "openai api cost estimator",
      "gpt-4 cost calculator",
      "gpt-5 cost calculator",
      "openai token pricing",
      "api token cost",
      "developer tools",
      "online cost calculator",
      "openai pricing tool",
    ],
    features: [
      "Estimate costs for all OpenAI models (GPT-4, GPT-4o, GPT-5, o1, o3)",
      "Dynamic pricing table based on user input",
      "Real-time cost calculation for input/output tokens and API calls",
      "Browser-based processing - your data stays private",
      "Educational content and optimization tips for OpenAI usage",
      "Copy cost details to clipboard",
      "Video guide on OpenAI pricing",
      "Links to official OpenAI resources and documentation",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/openai-cost-calculator-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/openai-cost-calculator-banner.png",
    datePublished: "2025-09-20",
    softwareVersion: "1.0.0",
  },
  "character-count": {
    title:
      "Character Count Tool - Count Characters, Words, Lines & Bytes | Online Free DevTools by Hexmos",
    name: "Character Count",
    path: "/freedevtools/t/character-count/",
    description:
      "Count characters, words, lines, and byte size instantly with Character Count Tool by Hexmos. Enter your text and get real-time statistics for code, documents, and more. Estimate API costs for all models based on your input.",
    category: "Developer Tools",
    icon: "🔢",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/character-count/",
    keywords: [
      "character count",
      "word count",
      "line count",
      "byte size calculator",
      "text statistics",
      "developer tools",
      "api cost calculator",
      "online character counter",
      "free character count tool",
    ],
    features: [
      "Count characters, words, lines, and bytes in real-time",
      "Estimate API costs for all models based on input",
      "Mobile responsive interface",
      "Copy statistics to clipboard",
      "Browser-based processing - your data stays private",
      "Video guide on character counting",
      "Links to official documentation and resources",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/character-count-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/character-count-banner.png",
    datePublished: "2025-09-21",
    softwareVersion: "1.0.0",
  },
  "slugify-string": {
    title:
      "Slugify String Tool - Convert Text to URL Slug | Online Free DevTools by Hexmos",
    name: "Slugify String",
    path: "/freedevtools/t/slugify-string/",
    description:
      "Convert any string to a clean, URL-friendly slug instantly with Slugify String Tool by Hexmos. Enter your text and get a slugified output for SEO, file names, and web development.",
    category: "Developer Tools",
    icon: "🔤",
    themeColor: "#3b82f6",
    canonical: "https://hexmos.com/freedevtools/t/slugify-string/",
    keywords: [
      "slugify string",
      "url slug generator",
      "slug converter",
      "seo slug tool",
      "text to slug",
      "developer tools",
      "online slugify",
      "free slugify tool",
      "slugify utility",
    ],
    features: [
      "Convert any string to a URL-friendly slug",
      "Real-time slug generation",
      "Copy slug to clipboard",
      "Mobile responsive interface",
      "Browser-based processing - your data stays private",
      "Video guide on slugification",
      "Links to official documentation and resources",
    ],
    ogImage:
      "https://hexmos.com/freedevtools/tool-banners/slugify-string-banner.png",
    twitterImage:
      "https://hexmos.com/freedevtools/tool-banners/slugify-string-banner.png",
    datePublished: "2025-09-21",
    softwareVersion: "1.0.0",
  },

  'og-meta-generator': {
    title: 'Open Graph Meta Tag Generator - Create OG & Twitter Meta Tags | Online Free DevTools by Hexmos',
    name: 'Og Meta Generator',
    path: '/freedevtools/t/og-meta-generator/',
    description: 'Generate Open Graph and Twitter meta tags instantly with Og Meta Generator by Hexmos. Customize page type, title, description, image, and more for perfect social sharing and SEO.',
    category: 'Developer Tools',
    icon: '🔖',
    themeColor: '#3b82f6',
    canonical: 'https://hexmos.com/freedevtools/t/og-meta-generator/',
    keywords: [
      'open graph meta generator',
      'og meta tag generator',
      'twitter meta tag generator',
      'meta tag generator',
      'seo meta tags',
      'social media meta tags',
      'developer tools',
      'online meta tag generator',
      'free og meta tool'
    ],
    features: [
      'Generate Open Graph and Twitter meta tags',
      'Customize page type, title, description, image, and more',
      'Copy meta tags to clipboard',
      'Mobile responsive interface',
      'Browser-based processing - your data stays private',
      'Video guide on meta tag generation',
      'Links to official documentation and resources'
    ],
    ogImage:
      'https://hexmos.com/freedevtools/t/tool-banners/og-meta-generator-banner.png',
    twitterImage:
      'https://hexmos.com/freedevtools/t/tool-banners/og-meta-generator-banner.png',
    datePublished: '2025-09-21',
    softwareVersion: '1.0.0',
  }
};

// tldr: {
//   title: "TLDR - Command Documentation | Online Free DevTools by Hexmos",
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
//   ogImage: "https://hexmos.com/freedevtools/tool-banners/tldr-banner.png",
//   twitterImage:
//     "https://hexmos.com/freedevtools/tool-banners/tldr-banner.png",
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
