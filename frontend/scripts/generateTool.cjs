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

  // Update sitemap.xml
  updateSitemap(toolKey, toolName);
  console.log(`✅ Updated sitemap.xml`);

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
import { Button } from "../../components/ui/button";

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
    toast.info("Processing your input...");
    try {
      // TODO: Implement your tool logic here
      setOutput("Processed result will appear here...");
      toast.success("Processing completed!");
    } catch (err) {
      setError("An error occurred while processing");
      setOutput("");
      toast.error("Processing failed");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
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
                <Button
                  onClick={handleProcess}
                  className="flex-1"
                  disabled={!input.trim()}
                >
                  Process
                </Button>
                <Button
                  onClick={handleClear}
                  variant="outline"
                >
                  Clear
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Output
                  </label>
                  {output && (
                    <CopyButton
                      text={output}
                      className="ml-3"
                      title="Copy to clipboard"
                    />
                  )}
                </div>
                <textarea
                  value={output}
                  readOnly
                  placeholder="Result will appear here..."
                  className="w-full h-32 p-3 border border-slate-300 rounded-lg resize-none bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                  {error}
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
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

function updateSitemap(toolKey, toolName) {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

  const newToolUrl = `https://hexmos.com/freedevtools/t/${toolKey}/`;
  const newToolEntry = `  <url>
    <loc>${newToolUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

  const insertPosition = sitemapContent.lastIndexOf('</urlset>');
  if (insertPosition !== -1) {
    const updatedContent =
      sitemapContent.slice(0, insertPosition) +
      newToolEntry +
      '\n' +
      sitemapContent.slice(insertPosition);
    fs.writeFileSync(sitemapPath, updatedContent);
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
