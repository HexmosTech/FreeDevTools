import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Helper to render a dynamically imported component
const roots = new WeakMap<HTMLElement, any>();

const renderDynamic = (e: HTMLElement, importFn: () => Promise<any>, props = {}) => {
    let root = roots.get(e);
    if (!root) {
        root = createRoot(e);
        roots.set(e, root);
    }

    const Component = React.lazy(importFn);
    root.render(
        React.createElement(
            Suspense,
            { fallback: React.createElement('div', { className: 'p-4 text-center' }, '') },
            React.createElement(Component, props)
        )
    );
};

// Map of tool keys to their dynamic import functions
const toolLoaders: Record<string, (e: HTMLElement) => void> = {
    "password-generator": (e) => renderDynamic(e, () => import('./components/tools/password-generator/PasswordGenerator')),
    "anthropic-token-counter": (e) => renderDynamic(e, () => import('./components/tools/anthropic-token-counter/AnthropicTokenCounter')),
    "character-count": (e) => renderDynamic(e, () => import('./components/tools/character-count/CharacterCount')),
    "chmod-calculator": (e) => renderDynamic(e, () => import('./components/tools/chmod-calculator/ChmodCalculator')),
    "cron-tester": (e) => renderDynamic(e, () => import('./components/tools/cron-tester/CronTester')),
    "css-inliner-for-email": (e) => renderDynamic(e, () => import('./components/tools/css-inliner-for-email/CssInlinerForEmail')),
    "css-units-converter": (e) => renderDynamic(e, () => import('./components/tools/css-units-converter/CssUnitsConverter')),
    "csv-to-json": (e) => renderDynamic(e, () => import('./components/tools/csv-to-json/CsvToJson')),
    "curl-to-js-fetch": (e) => renderDynamic(e, () => import('./components/tools/curl-to-js-fetch/CurlToJsFetch')),
    "date-time-converter": (e) => renderDynamic(e, () => import('./components/tools/date-time-converter/DateTimeConverter')),
    "deepseek-token-counter": (e) => renderDynamic(e, () => import('./components/tools/deepseek-token-counter/DeepseekTokenCounter')),
    "diff-checker": (e) => renderDynamic(e, () => import('./components/tools/diff-checker/DiffChecker')),
    "dockerfile-linter": (e) => renderDynamic(e, () => import('./components/tools/dockerfile-linter/DockerfileLinter')),
    "env-to-netlify-toml": (e) => renderDynamic(e, () => import('./components/tools/env-to-netlify-toml/EnvToNetlifyToml')),
    "faker": (e) => renderDynamic(e, () => import('./components/tools/faker/Faker')),
    "har-file-viewer": (e) => renderDynamic(e, () => import('./components/tools/har-file-viewer/HarFileViewer')),
    "hash-generator": (e) => renderDynamic(e, () => import('./components/tools/hash-generator/HashGenerator')),
    "html-to-markdown": (e) => renderDynamic(e, () => import('./components/tools/html-to-markdown/HtmlToMarkdown')),
    "image-to-base64": (e) => renderDynamic(e, () => import('./components/tools/image-to-base64/ImageToBase64')),
    "json-to-csv-converter": (e) => renderDynamic(e, () => import('./components/tools/json-to-csv-converter/JsonToCsvConverter')),
    "json-to-xml": (e) => renderDynamic(e, () => import('./components/tools/json-to-xml/JsonToXml')),
    "json-to-yaml": (e) => renderDynamic(e, () => import('./components/tools/json-to-yaml/JsonToYaml')),
    "jwt-parser": (e) => renderDynamic(e, () => import('./components/tools/jwt-parser/JwtParser')),
    "llama-token-counter": (e) => renderDynamic(e, () => import('./components/tools/llama-token-counter/LlamaTokenCounter')),
    "lorem-ipsum-generator": (e) => renderDynamic(e, () => import('./components/tools/lorem-ipsum-generator/LoremIpsumGenerator')),
    "mac-address-generator": (e) => renderDynamic(e, () => import('./components/tools/mac-address-generator/MacAddressGenerator')),
    "mac-address-lookup": (e) => renderDynamic(e, () => import('./components/tools/mac-address-lookup/MacAddressLookup')),
    "markdown-to-html-converter": (e) => renderDynamic(e, () => import('./components/tools/markdown-to-html-converter/MarkdownToHtmlConverter')),
    "og-meta-generator": (e) => renderDynamic(e, () => import('./components/tools/og-meta-generator/OgMetaGenerator')),
    "openai-cost-calculator": (e) => renderDynamic(e, () => import('./components/tools/openai-cost-calculator/OpenaiCostCalculator')),
    "openai-token-counter": (e) => renderDynamic(e, () => import('./components/tools/openai-token-counter/OpenAiTokenCounter')),
    "qrcode-generator": (e) => renderDynamic(e, () => import('./components/tools/qrcode-generator/QrcodeGenerator')),
    "query-params-to-json": (e) => renderDynamic(e, () => import('./components/tools/query-params-to-json/QueryParamsToJson')),
    "regex-tester": (e) => renderDynamic(e, () => import('./components/tools/regex-tester/RegexTester')),
    "rgb-to-hex": (e) => renderDynamic(e, () => import('./components/tools/rgb-to-hex/RgbToHex')),
    "rsa-key-pair-generator": (e) => renderDynamic(e, () => import('./components/tools/rsa-key-pair-generator/RsaKeyPairGenerator')),
    "slugify-string": (e) => renderDynamic(e, () => import('./components/tools/slugify-string/SlugifyString')),
    "sql-minifier": (e) => renderDynamic(e, () => import('./components/tools/sql-minifier/SqlMinifier')),
    "svg-placeholder-generator": (e) => renderDynamic(e, () => import('./components/tools/svg-placeholder-generator/SvgPlaceholderGenerator')),
    "svg-viewer": (e) => renderDynamic(e, () => import('./components/tools/svg-viewer/SvgViewer')),
    "user-agent-parser": (e) => renderDynamic(e, () => import('./components/tools/user-agent-parser/UserAgentParser')),
    "uuid-generator": (e) => renderDynamic(e, () => import('./components/tools/uuid-generator/UuidGenerator')),
    "webp-converter": (e) => renderDynamic(e, () => import('./components/tools/webp-converter/WebpConverter')),
    "xml-formatter": (e) => renderDynamic(e, () => import('./components/tools/xml-formatter/XmlFormatter')),
    "xml-to-json": (e) => renderDynamic(e, () => import('./components/tools/xml-to-json/XmlToJson')),
    "yaml-to-json": (e) => renderDynamic(e, () => import('./components/tools/yaml-to-json/YamlToJson')),
    "yaml-to-toml": (e) => renderDynamic(e, () => import('./components/tools/yaml-to-toml/YamlToToml')),

    // Components
    "download-png-button": (e) => {
        const name = e.getAttribute('data-name') || '';
        const base64 = e.getAttribute('data-base64') || '';
        const category = e.getAttribute('data-category') || '';
        // Extract iconName by removing .svg/.png extensions
        const iconName = name.replace(/\.(svg|png)$/i, '');
        const props = { iconData: { name, originalSvgContent: '', svgContent: '', category, iconName } };
        renderDynamic(e, () => import('./components/buttons/DownloadPngButton'), props);
    },
    "copy-png-button": (e) => {
        const name = e.getAttribute('data-name') || '';
        const base64 = e.getAttribute('data-base64') || '';
        const category = e.getAttribute('data-category') || '';
        // Extract iconName by removing .svg/.png extensions
        const iconName = name.replace(/\.(svg|png)$/i, '');
        const props = { iconData: { name, originalSvgContent: '', svgContent: '', category, iconName } };
        renderDynamic(e, () => import('./components/buttons/CopyPngButton'), props);
    },
    "copy-svg-button": (e) => {
        const name = e.getAttribute('data-name') || '';
        const category = e.getAttribute('data-category') || '';
        // Extract iconName by removing .svg/.png extensions
        const iconName = name.replace(/\.(svg|png)$/i, '');
        const props = { iconData: { name, originalSvgContent: '', svgContent: '', category, iconName } };
        renderDynamic(e, () => import('./components/buttons/CopySvgButton'), props);
    },
    "download-svg-button": (e) => {
        const name = e.getAttribute('data-name') || '';
        const category = e.getAttribute('data-category') || '';
        // Extract iconName by removing .svg/.png extensions
        const iconName = name.replace(/\.(svg|png)$/i, '');
        const props = { iconData: { name, originalSvgContent: '', svgContent: '', category, iconName } };
        renderDynamic(e, () => import('./components/buttons/DownloadSvgButton'), props);
    },

    // Tools with props
    "json-prettifier": (e) => {
        const tool = e.getAttribute('data-tool') || 'json-prettifier';
        renderDynamic(e, () => import('./components/tools/json-[tool]/JsonPrettifier'), { tool });
    },
    "base64-encoder": (e) => {
        const tool = e.getAttribute('data-tool') || 'base64-encoder';
        renderDynamic(e, () => import('./components/tools/base64-[tool]/Base64Encoder'), { tool });
    },
    "zstd-compress": (e) => renderDynamic(e, () => import('./components/tools/zstd-[action]/ZstdCompress')),
    "search-page": (e) => renderDynamic(e, () => import('./components/search/SearchPage')),
    "pro": (e) => renderDynamic(e, () => import('./components/pages/pro/Pro')),
    "bookmarks": (e) => renderDynamic(e, () => import('./components/pages/pro/Bookmarks')),
    "pro-search": (e) => renderDynamic(e, () => import('./components/search/ProSearchPage')),
    "profile": (e) => {
        const isProAttr = e.getAttribute('data-is-pro');
        const isPro = isProAttr === 'true';
        renderDynamic(e, () => import('./components/common/Profile'), { isPro });
    },
    "bookmarkIcon": (e) => {
        renderDynamic(e, () => import('./components/common/BookmarkIcon'));
    },
    "sidebarProfile": (e) => {
        renderDynamic(e, () => import('./components/common/SidebarProfile'));
    },
    "pro-banner": (e) => renderDynamic(e, () => import('./components/common/ProBanner')),
};

// Preload SearchPage chunk in background (call after window load + requestIdleCallback)
(window as any).preloadSearchPage = () => import('./components/search/SearchPage');

// Expose render functions globally
(window as any).renderTool = (toolKey: string, elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id ${elementId} not found`);
        return;
    }

    const loader = toolLoaders[toolKey];
    if (loader) {
        loader(element);
    } else {
        // Fallback for aliases if needed, or handle error
        // Check for aliases like json-utilities -> json-prettifier
        if (toolKey.startsWith('json-')) {
            toolLoaders['json-prettifier'](element);
        } else if (toolKey.startsWith('base64-')) {
            toolLoaders['base64-encoder'](element);
        } else if (toolKey.startsWith('zstd-')) {
            toolLoaders['zstd-compress'](element);
        } else {
            console.error(`No loader found for tool: ${toolKey}`);
        }
    }
};