import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolHead from "@/components/tool/ToolHead";
import ToolVideo from "@/components/tool/ToolVideo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CopyButton from "@/components/ui/copy-button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useCallback, useEffect, useState } from "react";
import AdBanner from "../../../components/banner/AdBanner";
import EnvToNetlifyTomlSkeleton from "./_EnvToNetlifyTomlSkeleton";

// Environment context types for Netlify
type ContextType = "production" | "deploy-preview" | "branch-deploy" | "dev";

// Utility function to convert .env to netlify.toml format
const convertEnvToNetlifyToml = (
  envContent: string,
  context: ContextType = "production"
): string => {
  if (!envContent.trim()) return "";

  try {
    const lines = envContent.split("\n");
    const variables: Record<string, string> = {};

    for (const line of lines) {
      // Skip empty lines and comments
      if (!line.trim() || line.trim().startsWith("#")) continue;

      // Parse KEY=VALUE format
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        let value = match[2].trim();

        // Handle quoted values
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }

        variables[key] = value;
      }
    }

    if (Object.keys(variables).length === 0) {
      return "# No valid environment variables found";
    }

    // Generate netlify.toml content
    let tomlContent = `# Netlify deployment configuration\n`;
    tomlContent += `# Generated from .env file\n\n`;

    tomlContent += `[context.${context}]\n`;
    tomlContent += `[context.${context}.environment]\n`;

    for (const [key, value] of Object.entries(variables)) {
      // Escape quotes in values
      const escapedValue = value.replace(/"/g, '\\"');
      tomlContent += `${key} = "${escapedValue}"\n`;
    }

    return tomlContent;
  } catch (error) {
    throw new Error(
      "Failed to parse environment variables. Please check your .env format."
    );
  }
};

const EnvToNetlifyToml: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [context, setContext] = useState<ContextType>("production");

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = useCallback(
    (value: string) => {
      setInput(value);
      setError("");

      if (!value.trim()) {
        setOutput("");
        return;
      }

      try {
        const tomlOutput = convertEnvToNetlifyToml(value, context);
        setOutput(tomlOutput);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to convert environment variables";
        setError(errorMessage);
        setOutput("");
      }
    },
    [context]
  );

  const handleContextChange = useCallback(
    (newContext: ContextType) => {
      setContext(newContext);
      if (input.trim()) {
        handleInputChange(input);
      }
    },
    [input, handleInputChange]
  );

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const sampleEnv = `# Database configuration
DATABASE_URL=postgresql://user:password@localhost:5432/myapp
DATABASE_POOL_SIZE=20

# API Keys
STRIPE_PUBLIC_KEY=pk_test_example123
STRIPE_SECRET_KEY=sk_test_example456
SENDGRID_API_KEY=SG.example.api.key

# Application settings
NODE_ENV=production
PORT=3000
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGIN=https://yourdomain.com

# Feature flags
ENABLE_ANALYTICS=true
DEBUG_MODE=false`;

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="Env to Netlify TOML Converter"
        description="Convert .env files to Netlify TOML format instantly with our free online converter. Transform environment variables for Netlify deployment configuration with proper TOML syntax and validation."
      />

      {!loaded ? (
        <EnvToNetlifyTomlSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle>Environment Variables Converter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input and Output Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* .env Input - Left Side */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      .env File Content
                    </Label>
                    <Textarea
                      value={input}
                      onChange={(e) => handleInputChange(e.target.value)}
                      placeholder="Paste your .env file content here...&#10;&#10;DATABASE_URL=postgresql://localhost:5432/myapp&#10;API_KEY=your-api-key&#10;NODE_ENV=production"
                      className="min-h-[250px] font-mono text-sm"
                    />
                  </div>

                  {/* TOML Output - Right Side */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        netlify.toml Output
                      </Label>
                      <CopyButton text={output} disabled={!output} />
                    </div>
                    <Textarea
                      value={output}
                      readOnly
                      placeholder="Converted TOML configuration will appear here..."
                      className="min-h-[250px] font-mono text-sm bg-muted/50"
                    />
                  </div>
                </div>

                {/* Context Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Netlify Deployment Context
                  </Label>
                  <Select value={context} onValueChange={handleContextChange}>
                    <SelectTrigger className="w-full md:w-64">
                      <SelectValue placeholder="Select deployment context" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="deploy-preview">
                        Deploy Preview
                      </SelectItem>
                      <SelectItem value="branch-deploy">
                        Branch Deploy
                      </SelectItem>
                      <SelectItem value="dev">Development</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {context === "production" &&
                      "Variables for production deployments (main branch)"}
                    {context === "deploy-preview" &&
                      "Variables for deploy preview builds (pull requests)"}
                    {context === "branch-deploy" &&
                      "Variables for branch deployments"}
                    {context === "dev" &&
                      "Variables for local development environment"}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button onClick={handleClear} variant="outline">
                    Clear
                  </Button>
                  <Button
                    onClick={() => handleInputChange(sampleEnv)}
                    variant="secondary"
                  >
                    Load Sample
                  </Button>
                </div>

                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <p className="text-destructive text-sm">{error}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>
                  Understanding Netlify Environment Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Netlify uses the netlify.toml configuration file to define
                    deployment settings, build commands, and environment
                    variables for different deployment contexts. Converting your
                    .env files to Netlify TOML format ensures your application
                    has the proper environment variables configured for each
                    deployment stage.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        .env File Format
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Key-Value Pairs:</strong> Variables defined
                            as KEY=VALUE format
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Comments:</strong> Lines starting with # are
                            treated as comments
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Quoted Values:</strong> Supports both single
                            and double quotes
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>No Spaces:</strong> Variable names cannot
                            contain spaces
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Netlify TOML Benefits
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Context-specific environment variables</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Version-controlled deployment configuration
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Consistent deployment across environments</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Build settings and redirect rules</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Enhanced security with encrypted variables
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example conversion
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-blue-600 dark:text-blue-400 mb-1">
                          .env:
                        </div>
                        <div className="text-slate-800 dark:text-slate-200">
                          {`DATABASE_URL=postgres://localhost
API_KEY=secret123
NODE_ENV=production`}
                        </div>
                      </div>
                      <div>
                        <div className="text-green-600 dark:text-green-400 mb-1">
                          netlify.toml:
                        </div>
                        <div className="text-slate-800 dark:text-slate-200">
                          {`[context.production]
[context.production.environment]
DATABASE_URL = "postgres://localhost"
API_KEY = "secret123"
NODE_ENV = "production"`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Netlify Deployment Contexts and Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Deployment Contexts */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            🚀
                          </span>
                        </span>
                        Deployment Contexts
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Production:</strong> Main branch deployments
                            with production environment variables
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Deploy Preview:</strong> Pull request builds
                            with preview-specific settings
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Branch Deploy:</strong> Feature branch
                            deployments with branch-specific variables
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Development:</strong> Local development
                            environment configuration
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Security Best Practices */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            🔒
                          </span>
                        </span>
                        Security Best Practices
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Never Commit Secrets:</strong> Use Netlify
                            UI for sensitive environment variables
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Different Keys per Context:</strong> Use
                            separate API keys for production and testing
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Environment Validation:</strong> Validate
                            required variables in your application
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Minimal Permissions:</strong> Grant only
                            necessary access to third-party services
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Configuration Management */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            ⚙️
                          </span>
                        </span>
                        Configuration Management
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Version Control:</strong> Include
                            netlify.toml in your repository for consistency
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Documentation:</strong> Comment your
                            environment variables for team clarity
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Environment Parity:</strong> Keep
                            development and production environments similar
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Regular Audits:</strong> Review and update
                            environment variables periodically
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Deployment Workflow */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            🔄
                          </span>
                        </span>
                        Deployment Workflow
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Local Development:</strong> Use .env files
                            for local environment setup
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Build Configuration:</strong> Define build
                            commands and publish directories
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Testing Environments:</strong> Set up
                            staging environments with realistic data
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Production Deployment:</strong> Use
                            production-grade services and configurations
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> For sensitive variables like
                      API keys and passwords, use the Netlify dashboard's
                      environment variables section instead of including them in
                      your netlify.toml file. The TOML configuration is great
                      for non-sensitive settings like feature flags, URLs, and
                      build configurations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: What are Environment Variables, and how do I use them?"
              description="This video explains what environment variables are, how to set them, and their general use in application deployment and configuration."
              videoUrl="https://www.youtube.com/embed/ADh_OFBfdEE"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default EnvToNetlifyToml;
