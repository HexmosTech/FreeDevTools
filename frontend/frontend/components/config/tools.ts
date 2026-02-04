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
  'json-utilities': {
    title:
      'JSON Formatter, Validator and Linter | Online Free DevTools by Hexmos',
    name: 'JSON Utilities',
    path: '/freedevtools/t/json-utilities/',
    description:
      'Format, validate, and lint JSON online for free with Hexmos Free DevTools. Enjoy multiple indentation options and real-time validation in an ad-free environment.',
    category: 'Developer Tools',
    icon: '🧰',
    themeColor: '#14b8a6',
    canonical: 'https://hexmos.com/freedevtools/t/json-utilities/',
    keywords: [
      'json utilities',
      'json tools',
      'json formatter',
      'json prettifier',
      'json beautifier',
      'json minifier',
      'json validator',
      'json fixer',
      'json corrector',
      'developer tools',
      'api tools',
      'online json editor',
    ],
    features: [
      'Format and beautify JSON',
      'Validate JSON structure',
      'Auto-correct invalid JSON',
      'Multiple indentation options',
      'Real-time validation and feedback',
      'Instant error detection',
      'Copy to clipboard',
    ],
    ogImage:
      'https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png',
    twitterImage:
      'https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png',
  },
  'json-prettifier': {
    title:
      'JSON Formatter, Validator and Linter | Online Free DevTools by Hexmos',
    name: 'JSON Prettifier',
    path: '/freedevtools/t/json-prettifier/',
    description:
      'Format, validate, and lint JSON online for free with Hexmos Free DevTools. Enjoy multiple indentation options and real-time validation in an ad-free environment.',
    category: 'Developer Tools',
    icon: '📄',
    themeColor: '#10b981',
    canonical: 'https://hexmos.com/freedevtools/t/json-prettifier/',
    keywords: [
      'JSON online formatter',
      'JSON online validator',
      'JSON online linter',
      'JSON online',
      'Best JSON formatter',
    ],
    features: [
      'JSON formatting',
      'JSON minification',
      'JSON validation',
      'Multiple indentation options',
      'Real-time validation',
      'Copy to clipboard',
    ],
    ogImage:
      'https://hexmos.com/freedevtools/tool-banners/json-prettifier-banner.png',
    twitterImage:
      'https://hexmos.com/freedevtools/tool-banners/json-prettifier-banner.png',
    variationOf: 'json-utilities',
  },

  'json-validator': {
    title: 'JSON Validator - Check & Validate Your JSON Online',
    name: 'JSON Validator',
    path: '/freedevtools/t/json-validator/',
    description:
      'Validate your JSON instantly. Detect errors, check formatting, and ensure your JSON is well-formed.',
    category: 'Developer Tools',
    icon: '✅',
    themeColor: '#f59e0b',
    canonical: 'https://hexmos.com/freedevtools/t/json-validator/',
    keywords: [
      'json validator',
      'json check',
      'validate json',
      'developer tools',
    ],
    features: [
      'Validate JSON structure',
      'Detect formatting errors',
      'Real-time error messages',
      'Copy to clipboard',
    ],
    ogImage:
      'https://hexmos.com/freedevtools/tool-banners/json-validator-banner.png',
    twitterImage:
      'https://hexmos.com/freedevtools/tool-banners/json-validator-banner.png',
    variationOf: 'json-utilities',
  },

  'json-fixer': {
    title: 'JSON Fixer - Automatically Correct JSON Errors',
    name: 'JSON Fixer',
    path: '/freedevtools/t/json-fixer/',
    description:
      'Automatically fix invalid JSON data. Correct errors, format it properly, and get clean JSON instantly.',
    category: 'Developer Tools',
    icon: '🛠️',
    themeColor: '#3b82f6',
    canonical: 'https://hexmos.com/freedevtools/t/json-fixer/',
    keywords: ['json fixer', 'fix json', 'correct json', 'developer tools'],
    features: [
      'Auto-correct invalid JSON',
      'Format JSON properly',
      'Real-time feedback',
      'Copy fixed JSON',
    ],
    ogImage:
      'https://hexmos.com/freedevtools/tool-banners/json-fixer-banner.png',
    twitterImage:
      'https://hexmos.com/freedevtools/tool-banners/json-fixer-banner.png',
    variationOf: 'json-utilities',
  },
  'base64-utilities': {
    title:
      'Base64 Encoder/Decoder - Encode & Decode Text Online | Online Free DevTools by Hexmos',
    name: 'Base64 Utilities',
    path: '/freedevtools/t/base64-utilities/',
    description:
      'Encode and decode text to/from Base64 format instantly with our free online Base64 encoder/decoder. Perfect for data transmission, storage, and web development with real-time conversion.',
    category: 'Developer Tools',
    icon: '🔒',
    themeColor: '#3b82f6',
    canonical: 'https://hexmos.com/freedevtools/t/base64-utilities/',
    keywords: [
      'base64 utilities',
      'base64 tools',
      'base64 encoder',
      'base64 decoder',
      'base64 converter',
      'encode text to base64',
      'decode base64 to text',
      'base64 online tool',
      'data encoding tool',
      'text encoder decoder',
      'base64 conversion',
      'safe data transmission',
    ],
    features: [
      'Real-time Base64 encoding and decoding',
      'Bidirectional conversion (encode/decode)',
      'Support for text and binary data encoding',
      'Instant error detection for invalid Base64',
      'Copy to clipboard functionality',
      'Mobile responsive interface',
      'Browser-based processing - data stays private',
    ],
    ogImage:
      'https://hexmos.com/freedevtools/tool-banners/base64-encoder-banner.png',
    twitterImage:
      'https://hexmos.com/freedevtools/tool-banners/base64-encoder-banner.png',
    datePublished: '2025-01-16',
    softwareVersion: '1.0.0',
  },

  'base64-encoder': {
    title:
      'Base64 Encoder - Encode Text to Base64 Online | Online Free DevTools by Hexmos',
    name: 'Base64 Encoder',
    path: '/freedevtools/t/base64-encoder/',
    description:
      'Encode text to Base64 format instantly with our free online Base64 encoder. Perfect for data transmission, storage, and web development with real-time encoding.',
    category: 'Developer Tools',
    icon: '📤',
    themeColor: '#10b981',
    canonical: 'https://hexmos.com/freedevtools/t/base64-encoder/',
    keywords: [
      'base64 encoder',
      'encode to base64',
      'text to base64',
      'base64 encoding online',
      'data encoder',
      'text encoder',
      'base64 converter',
    ],
    features: [
      'Real-time Base64 encoding',
      'Support for text and binary data',
      'Instant encoding results',
      'Copy to clipboard functionality',
      'Mobile responsive interface',
      'Browser-based processing - data stays private',
    ],
    ogImage:
      'https://hexmos.com/freedevtools/tool-banners/base64-encode-banner.png',
    twitterImage:
      'https://hexmos.com/freedevtools/tool-banners/base64-encode-banner.png',
    variationOf: 'base64-utilities',
  },

  'base64-decoder': {
    title:
      'Base64 Decoder - Decode Base64 to Text Online | Online Free DevTools by Hexmos',
    name: 'Base64 Decoder',
    path: '/freedevtools/t/base64-decoder/',
    description:
      'Decode Base64 to text format instantly with our free online Base64 decoder. Perfect for data retrieval and web development with real-time decoding and error detection.',
    category: 'Developer Tools',
    icon: '📥',
    themeColor: '#f59e0b',
    canonical: 'https://hexmos.com/freedevtools/t/base64-decoder/',
    keywords: [
      'base64 decoder',
      'decode base64',
      'base64 to text',
      'base64 decoding online',
      'data decoder',
      'text decoder',
      'base64 converter',
    ],
    features: [
      'Real-time Base64 decoding',
      'Instant error detection for invalid Base64',
      'Support for various Base64 formats',
      'Copy to clipboard functionality',
      'Mobile responsive interface',
      'Browser-based processing - data stays private',
    ],
    ogImage:
      'https://hexmos.com/freedevtools/tool-banners/base64-decoder-banner.png',
    twitterImage:
      'https://hexmos.com/freedevtools/tool-banners/base64-decoder-banner.png',
    variationOf: 'base64-utilities',
  }
};

export function getToolByKey(key: string): Tool | undefined {
  return TOOLS_CONFIG[key];
}