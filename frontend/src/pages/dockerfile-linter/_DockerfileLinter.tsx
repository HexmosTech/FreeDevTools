import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";
import CopyButton from "../../components/ui/copy-button";
import DockerfileLinterSkeleton from "./_DockerfileLinterSkeleton";
import { toast } from "../../components/ToastProvider";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolBody from "@/components/tool/ToolBody";

// Docker parser functions adapted from dockerparser.js
const TOKEN_WHITESPACE = /[\t\v\f\r ]+/;
const TOKEN_LINE_CONTINUATION = /\\[ \t]*$/;
const TOKEN_COMMENT = /^\s*#.*$/;
const TOKEN_ESCAPE_DIRECTIVE = /^#[ \t]*escape[ \t]*=[ \t]*(.).*$/;

function isSpace(s: string): boolean {
  return /^\s$/.test(s);
}

function regexEscape(str: string): string {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}

function parseWords(rest: string): string[] {
  const S_inSpaces = 1;
  const S_inWord = 2;
  const S_inQuote = 3;

  const words: string[] = [];
  let phase = S_inSpaces;
  let word = "";
  let quote = "";
  let blankOK = false;
  let ch: string = "";
  let pos: number;

  for (pos = 0; pos <= rest.length; pos++) {
    if (pos != rest.length) {
      ch = rest[pos];
    }

    if (phase == S_inSpaces) {
      if (pos == rest.length) {
        break;
      }
      if (isSpace(ch)) {
        continue;
      }
      phase = S_inWord;
    }
    if ((phase == S_inWord || phase == S_inQuote) && pos == rest.length) {
      if (blankOK || word.length > 0) {
        words.push(word);
      }
      break;
    }
    if (phase == S_inWord) {
      if (isSpace(ch)) {
        phase = S_inSpaces;
        if (blankOK || word.length > 0) {
          words.push(word);
        }
        word = "";
        blankOK = false;
        continue;
      }
      if (ch == "'" || ch == '"') {
        quote = ch;
        blankOK = true;
        phase = S_inQuote;
      }
      if (ch == "\\") {
        if (pos + 1 == rest.length) {
          continue;
        }
        word += ch;
        pos++;
        ch = rest[pos];
      }
      word += ch;
      continue;
    }
    if (phase == S_inQuote) {
      if (ch == quote) {
        phase = S_inWord;
      }
      if (ch == "\\" && quote != "'") {
        if (pos + 1 == rest.length) {
          phase = S_inWord;
          continue;
        }
        word += ch;
        pos++;
        ch = rest[pos];
      }
      word += ch;
    }
  }

  return words;
}

interface DockerCommand {
  name: string;
  args: any;
  lineno: number;
  raw?: string;
  error?: string;
  rest?: string;
}

function isComment(line: string): boolean {
  return TOKEN_COMMENT.test(line);
}

function splitCommand(line: string): { name: string; rest: string } {
  const match = line.match(TOKEN_WHITESPACE);
  if (!match || match.index === undefined) {
    return { name: line.toUpperCase(), rest: "" };
  }
  const name = line.substr(0, match.index).toUpperCase();
  const rest = line.substr(match.index + match[0].length);
  return { name, rest };
}

function parseString(cmd: DockerCommand): boolean {
  cmd.args = cmd.rest;
  return true;
}

function parseJSON(cmd: DockerCommand): boolean {
  try {
    const json = JSON.parse(cmd.rest!);
    if (!Array.isArray(json)) {
      return false;
    }
    if (!json.every((entry) => typeof entry === "string")) {
      return false;
    }
    cmd.args = json;
    return true;
  } catch (e) {
    return false;
  }
}

function parseJsonOrString(cmd: DockerCommand): boolean {
  if (parseJSON(cmd)) {
    return true;
  }
  return parseString(cmd);
}

function parseStringsWhitespaceDelimited(cmd: DockerCommand): boolean {
  cmd.args = cmd.rest!.split(TOKEN_WHITESPACE);
  return true;
}

function parseJsonOrList(cmd: DockerCommand): boolean {
  if (parseJSON(cmd)) {
    return true;
  }
  return parseStringsWhitespaceDelimited(cmd);
}

function parseNameVal(cmd: DockerCommand): boolean {
  const words = parseWords(cmd.rest!);
  cmd.args = {};

  if (words.length === 0) {
    cmd.error = "No KEY name value, or KEY name=value arguments found";
    return false;
  }

  if (words[0].indexOf("=") == -1) {
    const strs = cmd.rest!.split(TOKEN_WHITESPACE);
    if (strs.length < 2) {
      cmd.error = cmd.name + " must have two arguments, got " + cmd.rest;
      return false;
    }
    cmd.args[strs[0]] = strs.slice(1).join(" ");
  } else {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.indexOf("=") == -1) {
        cmd.error =
          "Syntax error - can't find = in " +
          word +
          ". Must be of the form: name=value";
        return false;
      }
      const parts = word.split("=");
      cmd.args[parts[0]] = parts.slice(1).join("=");
    }
  }
  return true;
}

function parseNameOrNameVal(cmd: DockerCommand): boolean {
  cmd.args = parseWords(cmd.rest!);
  return true;
}

function parseSubCommand(cmd: DockerCommand): boolean {
  const parseDetails = parseLine(cmd.rest!, cmd.lineno);
  if (parseDetails.command) {
    cmd.args = parseDetails.command;
    return true;
  }
  cmd.error = "Unhandled onbuild command: " + cmd.rest;
  return false;
}

const commandParsers: Record<string, (cmd: DockerCommand) => boolean> = {
  ADD: parseJsonOrList,
  ARG: parseNameOrNameVal,
  CMD: parseJsonOrString,
  COPY: parseJsonOrList,
  ENTRYPOINT: parseJsonOrString,
  ENV: parseNameVal,
  EXPOSE: parseStringsWhitespaceDelimited,
  FROM: parseString,
  LABEL: parseNameVal,
  MAINTAINER: parseString,
  ONBUILD: parseSubCommand,
  RUN: parseJsonOrString,
  STOPSIGNAL: parseString,
  USER: parseString,
  VOLUME: parseJsonOrList,
  WORKDIR: parseString,
};

function parseLine(
  line: string,
  lineno: number,
  options?: { lineContinuationRegex?: RegExp }
): { command: DockerCommand | null; remainder: string } {
  const lineContinuationRegex =
    options?.lineContinuationRegex || TOKEN_LINE_CONTINUATION;

  line = line.trim();

  if (!line) {
    return { command: null, remainder: "" };
  }

  if (isComment(line)) {
    const command: DockerCommand = { name: "COMMENT", args: line, lineno };
    return { command, remainder: "" };
  }

  if (line.match(lineContinuationRegex)) {
    const remainder = line.replace(lineContinuationRegex, "");
    return { command: null, remainder };
  }

  const splitResult = splitCommand(line);
  const command: DockerCommand = {
    name: splitResult.name,
    rest: splitResult.rest,
    args: "",
    lineno,
  };

  const commandParserFn = commandParsers[command.name];
  if (!commandParserFn) {
    // Invalid Dockerfile instruction
    command.error = `Unknown instruction: ${command.name}`;
    command.args = command.rest;
  } else if (commandParserFn(command)) {
    command.raw = line;
    delete command.rest;
  }

  return { command, remainder: "" };
}

function parseDockerfile(contents: string): DockerCommand[] {
  const commands: DockerCommand[] = [];
  const lines = contents.split(/\r?\n/);
  let lookingForDirectives = true;
  const parseOptions: { lineContinuationRegex?: RegExp } = {};
  let remainder = "";

  for (let i = 0; i < lines.length; i++) {
    const lineno = i + 1;
    const nextLine = lines[i];
    let line: string;

    if (
      remainder &&
      remainder.match(TOKEN_LINE_CONTINUATION) &&
      isComment(nextLine)
    ) {
      line = remainder + "\\";
    } else if (remainder) {
      line = remainder + nextLine;
    } else {
      line = nextLine;
    }

    if (lookingForDirectives) {
      const regexMatch = line.match(TOKEN_ESCAPE_DIRECTIVE);
      if (regexMatch) {
        if (regexMatch[1] != "`" && regexMatch[1] != "\\") {
          commands.push({
            name: "INVALID_ESCAPE",
            args: "",
            lineno,
            error: `invalid ESCAPE "${regexMatch[1]}". Must be \` or \\`,
          });
          continue;
        }
        if (parseOptions.lineContinuationRegex) {
          commands.push({
            name: "DUPLICATE_ESCAPE",
            args: "",
            lineno,
            error: "only one escape parser directive can be used",
          });
          continue;
        }
        parseOptions.lineContinuationRegex = new RegExp(
          regexEscape(regexMatch[1]) + "[ \t]*$"
        );
        continue;
      }
    }

    lookingForDirectives = false;

    const parseResult = parseLine(line, lineno, parseOptions);
    if (parseResult.command) {
      commands.push(parseResult.command);
    }
    remainder = parseResult.remainder;
  }

  return commands;
}

interface LintResult {
  line: number;
  level: "error" | "warn" | "info";
  message: string;
  rule?: string;
  description?: string;
  reference_url?: string[];
}

interface DockerfileAnalysis {
  results: LintResult[];
  summary: {
    errors: number;
    warnings: number;
    info: number;
  };
}

interface Rule {
  label: string;
  regex: RegExp;
  level: "error" | "warn" | "info";
  message: string;
  description: string;
  reference_url?: string[];
}

interface NameValRule {
  valueRegex: RegExp;
  message: string;
  level: "error" | "warn" | "info";
  required: boolean | string;
  reference_url?: string[];
}

interface RequiredInstruction {
  instruction: string;
  count: number;
  level: "error" | "warn" | "info";
  message: string;
  description: string;
  reference_url?: string[];
}

const DockerfileLinter: React.FC = () => {
  const [dockerfileContent, setDockerfileContent] = useState("");
  const [analysis, setAnalysis] = useState<DockerfileAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  
  // YAML-based rule definitions (converted to JavaScript objects)
  const lineRules: Record<
    string,
    {
      paramSyntaxRegex: RegExp;
      rules: Rule[];
      defined_namevals?: Record<string, NameValRule>;
    }
  > = {
    FROM: {
      paramSyntaxRegex: /^[\w./\-:]+(:[\w.]+)?(-[\w]+)?$/,
      rules: [
        {
          label: "is_latest_tag",
          regex: /latest/,
          level: "error",
          message: "base image uses 'latest' tag",
          description:
            "using the 'latest' tag may cause unpredictable builds. It is recommended that a specific tag is used in the FROM line or *-released which is the latest supported release.",
          reference_url: [
            "https://docs.docker.com/engine/reference/builder/",
            "#from",
          ],
        },
        {
          label: "no_tag",
          regex: /^[^:@\s]+$/,
          level: "error",
          message: "No tag is used",
          description:
            "No tag is used. It is recommended that a specific tag is used in the FROM line or *-released which is the latest supported release.",
          reference_url: [
            "https://docs.docker.com/engine/reference/builder/",
            "#from",
          ],
        },
        {
          label: "specified_registry",
          regex: /[a-zA-Z0-9]+?\.[a-zA-Z0-9-]+(\:|\.)[a-zA-Z0-9.]+/,
          level: "warn",
          message: "using a specified registry in the FROM line",
          description:
            "using a specified registry may supply invalid or unexpected base images",
          reference_url: [
            "https://docs.docker.com/engine/reference/builder/",
            "#from",
          ],
        },
      ],
    },
    MAINTAINER: {
      paramSyntaxRegex: /.+/,
      rules: [
        {
          label: "maintainer_deprecated",
          regex: /.+/,
          level: "info",
          message: "the MAINTAINER command is deprecated",
          description:
            "MAINTAINER is deprecated in favor of using LABEL since Docker v1.13.0",
          reference_url: [
            "https://github.com/docker/cli/blob/master/docs/deprecated.md",
            "#maintainer-in-dockerfile",
          ],
        },
      ],
    },
    RUN: {
      paramSyntaxRegex: /.+/,
      rules: [
        {
          label: "no_yum_clean_all",
          regex: /yum(?!.+clean all|.+\.repo|-config|\.conf)/,
          level: "warn",
          message: "yum clean all is not used",
          description:
            "the yum cache will remain in this layer making the layer unnecessarily large",
          reference_url: [
            "https://github.com/projectatomic/container-best-practices",
            "_clear_packaging_caches_and_temporary_package_downloads",
          ],
        },
        {
          label: "no_apt-get_clean",
          regex: /apt-get install(?!.+clean)/,
          level: "warn",
          message: "apt-get clean is not used",
          description:
            "the apt-get cache will remain in this layer making the layer unnecessarily large",
          reference_url: [
            "https://github.com/projectatomic/container-best-practices",
            "_clear_packaging_caches_and_temporary_package_downloads",
          ],
        },
        {
          label: "no_ampersand_usage",
          regex: / ; /,
          level: "warn",
          message: "using ; instead of &&",
          description:
            "RUN do_1 && do_2: The ampersands change the resulting evaluation into do_1 and then do_2 only if do_1 was successful.",
          reference_url: [
            "https://github.com/projectatomic/container-best-practices",
            "#_using_semi_colons_vs_double_ampersands",
          ],
        },
        {
          label: "avoid_sudo",
          regex: /sudo/,
          level: "warn",
          message: "Avoid using 'sudo' in containers",
          description:
            "Using sudo in containers can be a security risk and is often unnecessary.",
          reference_url: [
            "https://docs.docker.com/develop/dev-best-practices/",
          ],
        },
      ],
    },
    LABEL: {
      paramSyntaxRegex: /.+/,
      rules: [],
      defined_namevals: {
        Name: {
          valueRegex: /([\w]+)./,
          message: "Label 'Name' is missing or has invalid format",
          level: "warn",
          required: true,
          reference_url: [
            "https://github.com/projectatomic/container-best-practices",
            "_recommended_labels_for_your_project",
          ],
        },
        Version: {
          valueRegex: /[\w.${}()"'\\\/~<>\-?\%:]+/,
          message: "Label 'Version' is missing or has invalid format",
          level: "warn",
          required: true,
          reference_url: [
            "https://github.com/projectatomic/container-best-practices",
            "_recommended_labels_for_your_project",
          ],
        },
      },
    },
    USER: {
      paramSyntaxRegex: /^[a-z0-9_][a-z0-9_]{0,40}$/,
      rules: [
        {
          label: "avoid_root_user",
          regex: /^(root|0)$/,
          level: "error",
          message: "Avoid running containers as root user",
          description:
            "Running containers as root poses security risks. Use a non-privileged user.",
          reference_url: [
            "https://docs.docker.com/develop/dev-best-practices/",
          ],
        },
      ],
    },
    EXPOSE: { paramSyntaxRegex: /^[\d-\s\w/\\]+$/, rules: [] },
    ENV: { paramSyntaxRegex: /^[\w-$/\\=\"[\]{}@:,'`\t. ]+$/, rules: [] },
    ADD: {
      paramSyntaxRegex: /^~?([\w-.~:/?#\[\]\\\/*@!$&'()*+,;=.{}"]+[\s]*)+$/,
      rules: [],
    },
    COPY: { paramSyntaxRegex: /.+/, rules: [] },
    ENTRYPOINT: { paramSyntaxRegex: /.+/, rules: [] },
    VOLUME: { paramSyntaxRegex: /.+/, rules: [] },
    WORKDIR: { paramSyntaxRegex: /^~?[\w-\/.{}$\/:]+[\s]*$/, rules: [] },
    ONBUILD: { paramSyntaxRegex: /.+/, rules: [] },
  };

  const requiredInstructions: RequiredInstruction[] = [
    {
      instruction: "EXPOSE",
      count: 1,
      level: "info",
      message: "There is no 'EXPOSE' instruction",
      description:
        "Without exposed ports how will the service of the container be accessed?",
      reference_url: [
        "https://docs.docker.com/engine/reference/builder/",
        "#expose",
      ],
    },
    {
      instruction: "USER",
      count: 1,
      level: "warn",
      message: "No 'USER' instruction",
      description:
        "The process(es) within the container may run as root and RUN instructions my be run as root",
      reference_url: [
        "https://docs.docker.com/engine/reference/builder/",
        "#user",
      ],
    },
  ];
  const lintDockerfile = (content: string): DockerfileAnalysis => {
    const results: LintResult[] = [];
    const instructionCounts: Record<string, number> = {};
    const labelValues: Record<string, string> = {};

    // First, parse the Dockerfile using the proper parser to catch syntax errors
    let parsedCommands: DockerCommand[] = [];
    try {
      parsedCommands = parseDockerfile(content);
    } catch (error) {
      results.push({
        line: 1,
        level: "error",
        message:
          "Failed to parse Dockerfile: " +
          (error instanceof Error ? error.message : "Unknown error"),
        rule: "parse_error",
      });
      return { results, summary: { errors: 1, warnings: 0, info: 0 } };
    }

    // Check for parsing errors in commands
    parsedCommands.forEach((command) => {
      if (command.error) {
        results.push({
          line: command.lineno,
          level: "error",
          message: command.error,
          rule: "syntax_error",
          description:
            "This line contains invalid Dockerfile syntax that could not be parsed.",
        });
        return;
      }

      // Skip comment lines for further analysis
      if (
        command.name === "COMMENT" ||
        command.name === "INVALID_ESCAPE" ||
        command.name === "DUPLICATE_ESCAPE"
      ) {
        return;
      }

      // Count instructions for required instruction checks
      instructionCounts[command.name] =
        (instructionCounts[command.name] || 0) + 1;

      // Check if instruction has rules defined
      const instructionRules = lineRules[command.name];
      if (!instructionRules) {
        // Unknown instruction (but parser would have caught this)
        return;
      }

      // Get the parameters as a string for regex matching
      let params = "";
      if (typeof command.args === "string") {
        params = command.args;
      } else if (Array.isArray(command.args)) {
        params = command.args.join(" ");
      } else if (typeof command.args === "object" && command.args !== null) {
        // For ENV/LABEL style commands
        params = Object.entries(command.args)
          .map(([k, v]) => `${k}=${v}`)
          .join(" ");
      }

      // Validate parameter syntax
      if (params && !instructionRules.paramSyntaxRegex.test(params)) {
        results.push({
          line: command.lineno,
          level: "error",
          message: `Invalid ${command.name} syntax`,
          rule: "param_syntax_error",
          description: `The parameters for ${command.name} instruction do not match the expected format.`,
        });
      }

      // Apply line rules
      instructionRules.rules.forEach((rule) => {
        if (rule.regex.test(params)) {
          results.push({
            line: command.lineno,
            level: rule.level,
            message: rule.message,
            rule: rule.label,
            description: rule.description,
            reference_url: rule.reference_url,
          });
        }
      });

      // Handle LABEL defined_namevals
      if (
        command.name === "LABEL" &&
        instructionRules.defined_namevals &&
        typeof command.args === "object"
      ) {
        Object.entries(command.args).forEach(([key, value]) => {
          labelValues[key] = value as string;

          const namevalRule = instructionRules.defined_namevals?.[key];
          if (namevalRule && !namevalRule.valueRegex.test(value as string)) {
            results.push({
              line: command.lineno,
              level: namevalRule.level,
              message: namevalRule.message,
              rule: `label_${key.toLowerCase()}_format`,
              description: `Label '${key}' value '${value}' does not match the expected format.`,
              reference_url: namevalRule.reference_url,
            });
          }
        });
      }
    });

    // Check for basic syntax errors by also doing a line-by-line check for completely invalid lines
    const lines = content.split("\n");
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      const trimmedLine = line.trim();

      if (!trimmedLine || trimmedLine.startsWith("#")) return;

      // Check for lines that don't start with a valid instruction but aren't empty/comments
      const instructionMatch = trimmedLine.match(/^([A-Za-z_][A-Za-z0-9_]*)/);
      if (instructionMatch) {
        const instruction = instructionMatch[1].toUpperCase();
        // Check if this is a known instruction
        const validInstructions = Object.keys(commandParsers);
        if (!validInstructions.includes(instruction)) {
          // Check if it looks like it might be a typo (e.g., "blahFROM")
          const possibleInstruction = validInstructions.find(
            (valid) =>
              instruction.includes(valid) || valid.includes(instruction)
          );

          let message = `Unknown instruction: ${instruction}`;
          let description = "This is not a valid Dockerfile instruction.";

          if (possibleInstruction) {
            message = `Unknown instruction: ${instruction}. Did you mean ${possibleInstruction}?`;
            description = `'${instruction}' is not a valid Dockerfile instruction. You might have meant '${possibleInstruction}'.`;
          }

          results.push({
            line: lineNumber,
            level: "error",
            message,
            rule: "invalid_instruction",
            description,
          });
        }
      } else {
        // Line doesn't start with what looks like an instruction
        results.push({
          line: lineNumber,
          level: "error",
          message: "Invalid Dockerfile syntax",
          rule: "syntax_error",
          description: "This line does not follow valid Dockerfile syntax.",
        });
      }
    });

    // Check required instructions
    requiredInstructions.forEach((reqInst) => {
      const count = instructionCounts[reqInst.instruction] || 0;
      if (count < reqInst.count) {
        results.push({
          line: 0,
          level: reqInst.level,
          message: reqInst.message,
          rule: `required_${reqInst.instruction.toLowerCase()}`,
          description: reqInst.description,
          reference_url: reqInst.reference_url,
        });
      }
    });

    // Check required labels
    if (lineRules.LABEL?.defined_namevals) {
      Object.entries(lineRules.LABEL.defined_namevals).forEach(
        ([labelName, rule]) => {
          if (rule.required === true && !labelValues[labelName]) {
            results.push({
              line: 0,
              level: rule.level,
              message: `Required label '${labelName}' is missing`,
              rule: `required_label_${labelName.toLowerCase()}`,
              description: `The '${labelName}' label is required but not found in the Dockerfile.`,
              reference_url: rule.reference_url,
            });
          }
        }
      );
    }

    // Calculate summary
    const summary = {
      errors: results.filter((r) => r.level === "error").length,
      warnings: results.filter((r) => r.level === "warn").length,
      info: results.filter((r) => r.level === "info").length,
    };

    return { results, summary };
  };

  const handleProcess = () => {
    setIsAnalyzing(true);
    try {
      if (!dockerfileContent.trim()) {
        setAnalysis({
          results: [],
          summary: { errors: 0, warnings: 0, info: 0 },
        });
        toast.info("No Dockerfile content to analyze");
        return;
      }

      toast.info("Analyzing Dockerfile...");
      const analysisResult = lintDockerfile(dockerfileContent);
      setAnalysis(analysisResult);
      
      if (analysisResult.results.length === 0) {
        toast.success("Analysis complete! No issues found.");
      } else {
        const { errors, warnings, info } = analysisResult.summary;
        toast.success(`Analysis complete! Found ${errors} errors, ${warnings} warnings, ${info} info items.`);
      }
    } catch (err) {
      console.error("Analysis error:", err);
      setAnalysis({
        results: [],
        summary: { errors: 0, warnings: 0, info: 0 },
      });
      toast.error("Analysis failed. Please check your Dockerfile content.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleClear = () => {
    setDockerfileContent("");
    setAnalysis(null);
    toast.info("Dockerfile content cleared");
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "error":
        return "❌";
      case "warn":
        return "⚠️";
      case "info":
        return "ℹ️";
      default:
        return "📝";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "error":
        return "text-red-600 dark:text-red-400";
      case "warn":
        return "text-yellow-600 dark:text-yellow-400";
      case "info":
        return "text-blue-600 dark:text-blue-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  const getLevelBadge = (level: string) => {
    const baseClasses = "px-2 py-1 font-medium rounded-full";
    switch (level) {
      case "error":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400`;
      case "warn":
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400`;
      case "info":
        return `${baseClasses} bg-slate-200 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400`;
      default:
        return `${baseClasses} bg-slate-200 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400`;
    }
  };

  return (
    <ToolContainer>
      <ToolHead
        name="Dockerfile Linter"
        description="Comprehensive Dockerfile analysis based on industry best practices and security guidelines"
      />
      {!loaded ? (
        <DockerfileLinterSkeleton />
      ) : (
        <ToolBody>  
          {/* Tool Cards Group */}
          <ToolCardWrapper className="space-y-0 !space-y-0 grid grid-cols-1 xl:grid-cols-2 gap-6 py-2 md:py-4 lg:py-6">
            {/* Input Section */}
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle>Dockerfile Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={dockerfileContent}
                  onChange={(e) => setDockerfileContent(e.target.value)}
                  placeholder='FROM node:18-alpine&#10;WORKDIR /app&#10;COPY package*.json ./&#10;RUN npm ci --only=production && npm cache clean --force&#10;COPY . .&#10;USER node&#10;EXPOSE 3000&#10;CMD ["npm", "start"]'
                  className="min-h-[320px] font-mono resize-none"
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleProcess} disabled={isAnalyzing} className="flex-1 sm:flex-none">
                    {isAnalyzing ? "Analyzing..." : "Analyze Dockerfile"}
                  </Button>
                  <Button onClick={handleClear} variant="outline" className="flex-1 sm:flex-none">
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="tool-card-bg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Analysis Results</CardTitle>
                {analysis && analysis.results.length > 0 && (
                  <CopyButton
                    text={analysis.results
                      .map(
                        (r) =>
                          `Line ${r.line}: [${r.level.toUpperCase()}] ${r.message}${r.description ? " - " + r.description : ""} (${r.rule || "unknown"})`
                      )
                      .join("\n")}
                    size="icon"
                    title="Copy results to clipboard"
                  />
                )}
              </CardHeader>
              <CardContent>
                {analysis ? (
                  <div className="space-y-4">
                    {/* Summary */}
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                        Summary
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-red-600">❌</span>
                          <span>{analysis.summary.errors} Errors</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-600">⚠️</span>
                          <span>{analysis.summary.warnings} Warnings</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-600">ℹ️</span>
                          <span>{analysis.summary.info} Info</span>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-slate-50 dark:bg-slate-800 max-h-80 overflow-y-auto border border-slate-300 dark:border-slate-600 rounded-lg">
                      {analysis.results.length === 0 ? (
                        <div className="p-4 text-center text-green-600 dark:text-green-400">
                          <span>✅</span>
                          <p className="mt-2">
                            Excellent! No issues found in your Dockerfile.
                          </p>
                        </div>
                      ) : (
                        <div className="divide-y divide-slate-200 dark:divide-slate-700">
                          {analysis.results.map((result, index) => (
                            <div
                              key={index}
                              className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                            >
                                                          <div className="flex items-start space-x-3">
                              <span>
                                {getLevelIcon(result.level)}
                              </span>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                                    {result.line > 0 && (
                                      <span className="font-medium text-slate-500 dark:text-slate-400">
                                        Line {result.line}
                                      </span>
                                    )}
                                    <span className={getLevelBadge(result.level)}>
                                      {result.level.toUpperCase()}
                                    </span>
                                    {result.rule && (
                                      <span className="text-slate-400 dark:text-slate-500 font-mono">
                                        {result.rule}
                                      </span>
                                    )}
                                  </div>
                                  <h4
                                    className={`font-medium ${getLevelColor(result.level)} mb-1`}
                                  >
                                    {result.message}
                                  </h4>
                                  {result.description && (
                                    <p className="text-slate-600 dark:text-slate-400 mb-2">
                                      {result.description}
                                    </p>
                                  )}
                                  {result.reference_url &&
                                    result.reference_url.length > 0 && (
                                      <div>
                                        <a
                                          href={result.reference_url[0]}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                        >
                                          📖 Learn more
                                        </a>
                                      </div>
                                    )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-5 h-80 border border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400">
                    Enter a Dockerfile above and click "Analyze" to see results
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* Content Cards Group */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>About This Dockerfile Linter</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-600 dark:text-slate-400 space-y-3">
                  <p>
                    This comprehensive Dockerfile linter is based on industry-standard
                    rules from the
                    <strong> dockerfilelint</strong> project and Docker security best
                    practices. It analyzes your Dockerfiles for syntax errors, security
                    vulnerabilities, performance issues, and adherence to Docker best
                    practices.
                  </p>

                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        • <strong>Syntax Validation:</strong> Checks parameter formats
                        and instruction syntax
                      </li>
                      <li>
                        • <strong>Security Analysis:</strong> Detects risky
                        configurations and privilege escalation
                      </li>
                      <li>
                        • <strong>Performance Optimization:</strong> Identifies layer
                        bloat and caching issues
                      </li>
                      <li>
                        • <strong>Best Practices:</strong> Enforces Docker community
                        standards
                      </li>
                      <li>
                        • <strong>Label Validation:</strong> Ensures proper metadata
                        formatting
                      </li>
                      <li>
                        • <strong>Required Instructions:</strong> Validates essential
                        Dockerfile components
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Issue Levels:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">❌</span>
                        <span>
                          <strong>Error:</strong> Critical issues that may cause build
                          failures
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-600">⚠️</span>
                        <span>
                          <strong>Warning:</strong> Potential problems or bad practices
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-600">ℹ️</span>
                        <span>
                          <strong>Info:</strong> Suggestions for improvement
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-600">
                    <p>
                      <strong>Rule Sources:</strong>
                      <a
                        href="https://github.com/replicatedhq/dockerfilelint"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-1"
                      >
                        dockerfilelint
                      </a>
                      ,
                      <a
                        href="https://docs.docker.com/develop/dev-best-practices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-1"
                      >
                        Docker best practices
                      </a>
                      , and
                      <a
                        href="https://github.com/projectatomic/container-best-practices"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ml-1"
                      >
                        Container best practices
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Container & Docker Standards & References */}
            <Card>
              <CardHeader>
                <CardTitle>Container & Docker Standards & References</CardTitle>
                <CardDescription>
                  Official documentation and security standards for containerization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid gap-3">
                  <a
                    href="https://docs.docker.com/engine/reference/builder/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Docker Official Documentation
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Complete Dockerfile reference and builder guide
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.cisecurity.org/benchmark/docker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        CIS Docker Benchmark
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Center for Internet Security container security standards
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://csrc.nist.gov/publications/detail/sp/800-190/final"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        NIST Container Security Guide
                      </div>
                      <div className="text-xs text-muted-foreground">
                        NIST SP 800-190 container security guidelines
                      </div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>  
      )}
    </ToolContainer>
  );
};

export default DockerfileLinter;
