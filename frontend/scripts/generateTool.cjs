#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateTool(toolKey) {
  const toolName = toolKey
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const componentName = toolKey
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  console.log(`🚀 Generating tool: ${toolName} (${toolKey})`);

  // Create tool directory
  const toolDir = path.join(__dirname, '..', 'src/pages', toolKey);
  if (!fs.existsSync(toolDir)) {
    fs.mkdirSync(toolDir, { recursive: true });
    console.log(`✅ Created directory: ${toolDir}`);
  }

  // Generate React component
  const componentContent = generateReactComponent(componentName, toolName);
  const componentPath = path.join(toolDir, `_${componentName}.tsx`);
  fs.writeFileSync(componentPath, componentContent);
  console.log(`✅ Created React component: ${componentPath}`);

  // Generate Skeleton component
  const skeletonContent = generateSkeletonComponent(componentName, toolName);
  const skeletonPath = path.join(toolDir, `_${componentName}Skeleton.tsx`);
  fs.writeFileSync(skeletonPath, skeletonContent);
  console.log(`✅ Created Skeleton component: ${skeletonPath}`);

  // Generate Astro page
  const astroContent = generateAstroPage(toolKey, componentName);
  const astroPath = path.join(toolDir, 'index.astro');
  fs.writeFileSync(astroPath, astroContent);
  console.log(`✅ Created Astro page: ${astroPath}`);

  // Update tools configuration
  updateToolsConfig(toolKey, toolName);
  console.log(`✅ Updated tools configuration`);

  console.log(`\n🎉 Tool "${toolName}" generated successfully!`);
  console.log(`📁 Location: ${toolDir}`);
  console.log(`🔗 URL: /freedevtools/t/${toolKey}/`);
  console.log(`\nNext steps:`);
  console.log(`1. Customize the React component in _${componentName}.tsx`);
  console.log(`2. Adjust the skeleton component in _${componentName}Skeleton.tsx if needed`);
  console.log(`3. Update the tool configuration in src/config/tools.ts`);
  console.log(`4. Test with: make run`);
  console.log(`5. Deploy with: make deploy`);
}

function generateReactComponent(componentName, toolName) {
  return `import React, { useState, useEffect } from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";
import ${componentName}Skeleton from "./_${componentName}Skeleton";
import CopyButton from "../../components/ui/copy-button";
import { toast } from "../../components/ToastProvider";
import { Button } from "@/components/ui/button";

const ${componentName}: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleProcess = () => {
    setError("");
    try {
      // TODO: Implement your tool logic here
      setOutput("Processed result will appear here...");
    } catch (err) {
      setError("An error occurred while processing");
      setOutput("");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
    }
  };

  return (
    <ToolContainer>
      <ToolHead
        name="${toolName}"
        description="TODO: Add your tool description here. Make it compelling and SEO-friendly."
      />
      
      {!loaded ? (
        <${componentName}Skeleton />
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Input
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter your input here..."
                  className="w-full h-32 p-3 border border-slate-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleProcess}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                 Your Process
                </button>
                <button
                  onClick={handleClear}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Output
                </label>
                <div className="relative">
                  <textarea
                    value={output}
                    readOnly
                    placeholder="Result will appear here..."
                    className="w-full h-32 p-3 border border-slate-300 rounded-lg resize-none bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                  />
                  {output && (
                    <button
                      onClick={handleCopy}
                      className="absolute top-2 right-2 p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                      title="Copy to clipboard"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                  {error}
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-slate-900 dark:text-slate-100 mb-3">
              About ${toolName}
            </h3>
            <div className="text-slate-800 dark:text-slate-400 space-y-2">
              <p>
                TODO: Add information about what this tool does and how it works.
              </p>
              <p>
                <strong>Common uses:</strong> TODO: List common use cases for this tool.
              </p>
            </div>
          </div>
        </div>
      )}
    </ToolContainer>
  );
};

export default ${componentName};
`;
}

function generateSkeletonComponent(componentName, toolName) {
  return `import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";

const ${componentName}Skeleton: React.FC = () => {
  return (
    <ToolContainer>
      <ToolHead
        name="${toolName}"
        description="TODO: Add your tool description here. Make it compelling and SEO-friendly."
      />
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Skeleton className="h-5 w-16 mb-2" />
              <Skeleton className="w-full h-32 rounded-lg" />
            </div>

            <div className="flex space-x-3">
              <Skeleton className="flex-1 h-10 rounded-lg" />
              <Skeleton className="w-20 h-10 rounded-lg" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Skeleton className="h-5 w-20 mb-2" />
              <Skeleton className="w-full h-32 rounded-lg" />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <Skeleton className="h-6 w-32 mb-3" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>
    </ToolContainer>
  );
};

export default ${componentName}Skeleton;
`;
}

function generateAstroPage(toolKey, componentName) {
  return `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ${componentName} from './_${componentName}';
import { getToolByKey } from '../../config/tools';

const tool = getToolByKey('${toolKey}');
---

<BaseLayout 
  title={\`\${tool?.name} - TODO: Add subtitle | Free DevTools\`}
  description={tool?.description}
  canonical={tool?.canonical}
  themeColor={tool?.themeColor}
>
  <${componentName} client:load />
</BaseLayout>
`;
}

function updateToolsConfig(toolKey, toolName) {
  const configPath = path.join(__dirname, '..', 'src/config/tools.ts');
  const configContent = fs.readFileSync(configPath, 'utf-8');

  // Add new tool to TOOLS_CONFIG
  const newToolEntry = `  '${toolKey}': {
    name: '${toolName}',
    path: '/freedevtools/t/${toolKey}/',
    description: 'TODO: Add your tool description here. Make it compelling and SEO-friendly.',
    category: 'Developer Tools',
    icon: '🛠️',
    themeColor: '#3b82f6',
    canonical: 'https://hexmos.com/freedevtools/t/${toolKey}/',
    keywords: ['${toolKey}', 'developer tools', 'TODO: add more keywords'],
    features: ['TODO: Add feature 1', 'TODO: Add feature 2', 'TODO: Add feature 3']
  }`;

  // Find the position to insert the new tool (before the closing brace of TOOLS_CONFIG)
  const insertPosition = configContent.lastIndexOf('};');
  if (insertPosition !== -1) {
    // Check if we need to add a comma before the new entry
    const beforeInsert = configContent.slice(0, insertPosition);
    const needsComma = !beforeInsert.trim().endsWith(',');

    const updatedContent =
      beforeInsert +
      (needsComma ? ',\n' : '\n') +
      newToolEntry +
      '\n' +
      configContent.slice(insertPosition);

    fs.writeFileSync(configPath, updatedContent);
  }
}

// Main execution
const toolKey = process.argv[2];

if (!toolKey) {
  console.error('❌ Error: Tool key is required');
  console.log('Usage: node scripts/generateTool.cjs <tool-key>');
  console.log('Example: node scripts/generateTool.cjs password-generator');
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(toolKey)) {
  console.error(
    '❌ Error: Tool key must contain only lowercase letters, numbers, and hyphens'
  );
  console.log('Example: password-generator, json-formatter, base64-converter');
  process.exit(1);
}

generateTool(toolKey);
