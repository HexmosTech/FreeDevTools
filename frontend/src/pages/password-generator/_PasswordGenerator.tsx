import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import React, { useEffect, useState } from "react";
import { toast } from "../../components/ToastProvider";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";
import CopyButton from "../../components/ui/copy-button";
import PasswordGeneratorSkeleton from "./_PasswordGeneratorSkeleton";
import { Label } from "@/components/ui/label";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ToolBody from "@/components/tool/ToolBody";

interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  easyToRead: boolean;
  easyToSay: boolean;
  useWords: boolean;
  wordCount: number;
  separator: string;
}

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    easyToRead: false,
    easyToSay: false,
    useWords: false,
    wordCount: 3,
    separator: "-",
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Character sets
  const characterSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    // Easy to read excludes similar looking characters
    uppercaseEasy: "ABCDEFGHJKLMNPQRSTUVWXYZ",
    lowercaseEasy: "abcdefghjkmnpqrstvwxyz",
    numbersEasy: "23456789",
    symbolsEasy: "!@#$%&*+-=?",
    // Easy to say excludes hard to pronounce combinations
    uppercaseSay: "BCDFGHJKLMNPQRSTVWXYZ",
    lowercaseSay: "bcdfghjklmnpqrstvwxyz",
    numbersSay: "23456789",
    symbolsSay: "!@#$&*+-=",
  };

  // Common words for memorable passwords
  const commonWords = [
    "apple",
    "brave",
    "cloud",
    "dance",
    "earth",
    "flame",
    "green",
    "happy",
    "image",
    "jewel",
    "knife",
    "light",
    "magic",
    "novel",
    "ocean",
    "peace",
    "quick",
    "river",
    "stone",
    "table",
    "unity",
    "voice",
    "water",
    "young",
    "zebra",
    "angel",
    "beach",
    "chair",
    "dream",
    "eagle",
    "frost",
    "giant",
    "house",
    "ivory",
    "lunar",
    "music",
    "night",
    "olive",
    "plant",
    "quest",
    "royal",
    "solar",
    "tiger",
    "ultra",
    "video",
    "world",
    "youth",
    "amber",
    "bloom",
    "coral",
    "delta",
    "ember",
    "focus",
    "grace",
    "honor",
    "index",
    "juice",
    "karma",
    "laser",
    "moral",
    "ninja",
    "opera",
    "piano",
    "quilt",
    "radix",
    "smile",
    "trend",
    "urban",
    "vital",
    "wheat",
    "crystal",
    "bridge",
    "garden",
    "forest",
    "sunset",
    "winter",
    "summer",
    "spring",
    "copper",
    "silver",
    "golden",
    "purple",
    "orange",
    "yellow",
    "violet",
    "fabric",
    "castle",
    "rocket",
    "flower",
    "butter",
    "coffee",
    "cookie",
    "rainbow",
    "wizard",
    "dragon",
    "unicorn",
    "planet",
    "galaxy",
    "cosmic",
    "meteor",
  ];

  const generatePassword = () => {
    if (options.useWords) {
      // Generate word-based password
      const selectedWords = [];

      // Select random words (ensure no duplicates)
      const usedWords = new Set<string>();
      while (selectedWords.length < options.wordCount) {
        const randomWord =
          commonWords[Math.floor(Math.random() * commonWords.length)];
        if (!usedWords.has(randomWord)) {
          selectedWords.push(randomWord);
          usedWords.add(randomWord);
        }
      }

      // Apply case transformations
      const transformedWords = selectedWords.map((word) => {
        if (options.includeUppercase && options.includeLowercase) {
          // Capitalize first letter
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else if (options.includeUppercase) {
          return word.toUpperCase();
        } else {
          return word;
        }
      });

      // Join words with separator
      let wordPassword = transformedWords.join(options.separator);

      // Add numbers if requested
      if (options.includeNumbers) {
        const numbers = Math.floor(Math.random() * 999) + 1;
        wordPassword += (options.separator || "") + numbers;
      }

      // Add symbols if requested
      if (options.includeSymbols) {
        const symbols = "!@#$%";
        const randomSymbol =
          symbols[Math.floor(Math.random() * symbols.length)];
        wordPassword += randomSymbol;
      }

      setPassword(wordPassword);
      return;
    }

    // Original character-based generation
    let charset = "";
    const usedSets = [];

    // Determine character set based on options
    if (options.includeUppercase) {
      const set = options.easyToRead
        ? characterSets.uppercaseEasy
        : options.easyToSay
          ? characterSets.uppercaseSay
          : characterSets.uppercase;
      charset += set;
      usedSets.push(set);
    }

    if (options.includeLowercase) {
      const set = options.easyToRead
        ? characterSets.lowercaseEasy
        : options.easyToSay
          ? characterSets.lowercaseSay
          : characterSets.lowercase;
      charset += set;
      usedSets.push(set);
    }

    if (options.includeNumbers) {
      const set = options.easyToRead
        ? characterSets.numbersEasy
        : options.easyToSay
          ? characterSets.numbersSay
          : characterSets.numbers;
      charset += set;
      usedSets.push(set);
    }

    if (options.includeSymbols) {
      const set = options.easyToRead
        ? characterSets.symbolsEasy
        : options.easyToSay
          ? characterSets.symbolsSay
          : characterSets.symbols;
      charset += set;
      usedSets.push(set);
    }

    if (charset === "") {
      setPassword("Please select at least one character type");
      toast.error("Please select at least one character type");
      return;
    }

    let newPassword = "";

    // Ensure at least one character from each selected set
    usedSets.forEach((set) => {
      newPassword += set.charAt(Math.floor(Math.random() * set.length));
    });

    // Fill the rest randomly
    for (let i = newPassword.length; i < options.length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // Shuffle the password to avoid predictable patterns
    newPassword = newPassword
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    setPassword(newPassword);
  };

  const calculateStrength = (
    password: string
  ): { strength: string; color: string; width: string } => {
    if (!password || password.length < 4)
      return { strength: "Very Weak", color: "bg-red-500", width: "20%" };

    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    if (password.length >= 16) score += 1;

    if (score <= 2)
      return { strength: "Weak", color: "bg-red-500", width: "40%" };
    if (score <= 4)
      return { strength: "Medium", color: "bg-yellow-500", width: "60%" };
    if (score <= 5)
      return { strength: "Strong", color: "bg-green-500", width: "80%" };
    return { strength: "Very Strong", color: "bg-green-600", width: "100%" };
  };

  const updateOption = (
    key: keyof PasswordOptions,
    value: boolean | number | string
  ) => {
    setOptions((prev) => {
      const newOptions = { ...prev, [key]: value };

      // Auto-select Memorable preset when switching to word-based
      if (key === "useWords" && value === true) {
        newOptions.wordCount = 3;
        newOptions.includeUppercase = true;
        newOptions.includeLowercase = true;
        newOptions.includeNumbers = true;
        newOptions.includeSymbols = false;
        newOptions.separator = "-";
        toast.info("Switched to word-based password generation");
      }

      return newOptions;
    });
  };

  const applyPreset = (preset: Partial<PasswordOptions>) => {
    setOptions((prev) => ({ ...prev, ...preset }));
    toast.success("Password preset applied successfully");
  };

  // Generate password on component mount and when options change
  useEffect(() => {
    generatePassword();
  }, [options]);

  const strengthInfo = calculateStrength(password);

  return (
    <ToolContainer>
      <ToolHead
        name="Password Generator"
        description="Generate secure, customizable passwords instantly. Create strong passwords with custom length, character types, and word-based memorable options."
      />
      {!loaded ? (
        <PasswordGeneratorSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            {/* Generated Password Display - Tool Card */}
            <Card className="tool-card-bg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-700 dark:text-slate-300">
                    Generated Password
                  </CardTitle>
                  <Button
                    onClick={() => {
                      generatePassword();
                      toast.info("New password generated!");
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Generate New
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4">
                  <div className="flex items-center p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <code className="flex-1 font-mono text-slate-900 dark:text-slate-100 break-all select-all">
                      {password || "Click generate to create a password"}
                    </code>
                    <CopyButton
                      text={password}
                      className="ml-3"
                      title="Copy to clipboard"
                    />
                  </div>
                </div>

                {/* Password Strength Indicator */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Password Strength
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-400">
                      {strengthInfo.strength}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${strengthInfo.color}`}
                      style={{ width: strengthInfo.width }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Presets - Tool Card */}
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle className=" text-slate-700 dark:text-slate-300">
                  Quick Presets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Button
                    onClick={() =>
                      applyPreset({
                        length: 16,
                        includeUppercase: true,
                        includeLowercase: true,
                        includeNumbers: true,
                        includeSymbols: true,
                        easyToRead: false,
                        easyToSay: false,
                        useWords: false,
                      })
                    }
                    variant="outline"
                    size="custom"
                    className={`p-3 text-center ${
                      options.length === 16 &&
                      options.includeUppercase &&
                      options.includeLowercase &&
                      options.includeNumbers &&
                      options.includeSymbols &&
                      !options.easyToRead &&
                      !options.easyToSay &&
                      !options.useWords
                        ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                        : "hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
                    }`}
                  >
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      Strong
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      16 chars, all types
                    </div>
                  </Button>

                  <Button
                    onClick={() =>
                      applyPreset({
                        length: 12,
                        includeUppercase: true,
                        includeLowercase: true,
                        includeNumbers: true,
                        includeSymbols: false,
                        easyToRead: true,
                        easyToSay: false,
                        useWords: false,
                      })
                    }
                    variant="outline"
                    size="custom"
                    className={`p-3 text-center ${
                      options.length === 12 &&
                      options.includeUppercase &&
                      options.includeLowercase &&
                      options.includeNumbers &&
                      !options.includeSymbols &&
                      options.easyToRead &&
                      !options.easyToSay &&
                      !options.useWords
                        ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                        : "hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
                    }`}
                  >
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      Easy to Type
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      12 chars, readable
                    </div>
                  </Button>

                  <Button
                    onClick={() =>
                      applyPreset({
                        wordCount: 3,
                        includeUppercase: true,
                        includeLowercase: true,
                        includeNumbers: true,
                        includeSymbols: false,
                        useWords: true,
                        separator: "-",
                      })
                    }
                    variant="outline"
                    size="custom"
                    className={`p-3 text-center ${
                      options.wordCount === 3 &&
                      options.includeUppercase &&
                      options.includeLowercase &&
                      options.includeNumbers &&
                      !options.includeSymbols &&
                      options.useWords &&
                      options.separator === "-"
                        ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                        : "hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
                    }`}
                  >
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      Memorable
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      3 words + numbers
                    </div>
                  </Button>

                  <Button
                    onClick={() =>
                      applyPreset({
                        length: 32,
                        includeUppercase: true,
                        includeLowercase: true,
                        includeNumbers: true,
                        includeSymbols: true,
                        easyToRead: false,
                        easyToSay: false,
                        useWords: false,
                      })
                    }
                    variant="outline"
                    size="custom"
                    className={`p-3 text-center ${
                      options.length === 32 &&
                      options.includeUppercase &&
                      options.includeLowercase &&
                      options.includeNumbers &&
                      options.includeSymbols &&
                      !options.easyToRead &&
                      !options.easyToSay &&
                      !options.useWords
                        ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                        : "hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950"
                    }`}
                  >
                    <div className="font-medium text-slate-900 dark:text-slate-100">
                      Ultra Secure
                    </div>
                    <div className="text-slate-500 dark:text-slate-400">
                      32 chars, maximum
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Password Type Selection - Tool Card */}
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Password Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    onClick={() => updateOption("useWords", false)}
                    variant="outline"
                    size="custom"
                    className={`p-4 text-left whitespace-normal ${
                      !options.useWords
                        ? "bg-blue-50 dark:bg-blue-950"
                        : "hover:border-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-950/50"
                    }`}
                  >
                    <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-1">
                      Character-Based
                    </h3>
                    <p className="text-slate-800 dark:text-slate-400">
                      Random characters, numbers, and symbols
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 mt-1 font-mono">
                      Example: Kj8$mP2@xR9!
                    </p>
                  </Button>

                  <Button
                    onClick={() => updateOption("useWords", true)}
                    variant="outline"
                    size="custom"
                    className={`p-4 text-left whitespace-normal ${
                      options.useWords
                        ? "bg-blue-50 dark:bg-blue-950"
                        : "hover:border-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-950/50"
                    }`}
                  >
                    <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-1">
                      Word-Based
                    </h3>
                    <p className="text-slate-800 dark:text-slate-400">
                      Memorable dictionary words with separators
                    </p>
                    <p className="text-slate-500 dark:text-slate-500 mt-1 font-mono">
                      Example: Apple-River-Magic-42!
                    </p>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Options Configuration - Tool Card */}
            <Card className="tool-card-bg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-700 dark:text-slate-300">
                    Configuration Options
                  </CardTitle>
                  <Button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {showAdvanced ? "Hide Advanced" : "Show Advanced Options"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {options.useWords ? (
                      <>
                        {/* Word Count */}
                        <div>
                          <Label htmlFor="word-count" className="mb-2">
                            Number of Words: {options.wordCount}
                          </Label>
                          <Slider
                            value={[options.wordCount]}
                            onValueChange={(value) => updateOption("wordCount", value[0])}
                            min={2}
                            max={6}
                            step={1}
                            className="w-full"
                          />
                          <div className="flex justify-between text-slate-500 mt-1">
                            <span>2</span>
                            <span>6</span>
                          </div>
                        </div>

                        {/* Separator */}
                        <div>
                          <Label htmlFor="word-separator" className="mb-2">
                            Word Separator
                          </Label>
                          <Select
                            value={options.separator === "" ? "none" : options.separator}
                            onValueChange={(value) => updateOption("separator", value === "none" ? "" : value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Choose separator" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="-">Dash (-)</SelectItem>
                              <SelectItem value="_">Underscore (_)</SelectItem>
                              <SelectItem value=".">Dot (.)</SelectItem>
                              <SelectItem value="none">No separator</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    ) : (
                      /* Length Slider for character-based */
                      <div>
                        <div className="mb-2">
                          <Label htmlFor="password-length">
                            Password Length: {options.length}
                          </Label>
                        </div>
                        <Slider
                          value={[options.length]}
                          onValueChange={(value) => updateOption("length", value[0])}
                          min={4}
                          max={128}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-slate-500 mt-1">
                          <span>4</span>
                          <span>128</span>
                        </div>
                      </div>
                    )}

                    {/* Character Types */}
                    <div>
                      <h3 className="font-medium text-slate-700 dark:text-slate-300 mb-3">
                        Include Characters
                      </h3>
                      <div className="space-y-2">
                        {[
                          {
                            key: "includeUppercase" as keyof PasswordOptions,
                            label: "Uppercase Letters (A-Z)",
                          },
                          {
                            key: "includeLowercase" as keyof PasswordOptions,
                            label: "Lowercase Letters (a-z)",
                          },
                          {
                            key: "includeNumbers" as keyof PasswordOptions,
                            label: "Numbers (0-9)",
                          },
                          {
                            key: "includeSymbols" as keyof PasswordOptions,
                            label: "Symbols (!@#$%)",
                          },
                        ].map(({ key, label }) => (
                          <div
                            key={key}
                            className="flex items-center space-x-3"
                          >
                            <Checkbox
                              checked={options[key] as boolean}
                              onCheckedChange={(checked) => updateOption(key, checked as boolean)}
                              id={key}
                            />

                            <Label
                              htmlFor={key}
                              className="cursor-pointer"
                            >
                              {label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Advanced Options */}
                  {showAdvanced && (
                    <div className="space-y-4">
                      <h3 className="font-medium text-slate-700 dark:text-slate-300">
                        Advanced Options
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={options.easyToRead}
                            onCheckedChange={(checked) => updateOption("easyToRead", checked as boolean)}
                            id="easyToRead"
                          />
                          <div>
                            <Label
                              htmlFor="easyToRead"
                              className="font-medium cursor-pointer"
                            >
                              Easy to Read
                            </Label>
                            <p className="text-slate-500 dark:text-slate-400">
                              Excludes similar looking characters (0, O, l, 1, I)
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={options.easyToSay}
                            onCheckedChange={(checked) => updateOption("easyToSay", checked as boolean)}
                            id="easyToSay"
                          />
                          <div>
                            <Label
                              htmlFor="easyToSay"
                              className="font-medium cursor-pointer"
                            >
                              Easy to Say
                            </Label>
                            <p className="text-slate-500 dark:text-slate-400">
                              Excludes hard to pronounce combinations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* Educational Video - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Learn More: Password Security Explained
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-800 dark:text-slate-400 mb-4">
                  Watch this educational video to understand the fundamentals of
                  password security and why strong passwords matter for your digital
                  safety.
                </p>
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/vKPGZHoHX8k"
                    title="Password Security Explained"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Understanding Password Security - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Understanding Password Security and Brute Force Attack Prevention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-3">
                  <p>
                    Password security is fundamentally about creating computational
                    barriers that make unauthorized access economically and
                    practically infeasible. Our password generator creates
                    cryptographically secure passwords that resist brute force attacks
                    through mathematical complexity and entropy maximization.
                  </p>
                  <p>
                    <strong>
                      <a
                        className="text-blue-600 hover:underline"
                        href="https://en.wikipedia.org/wiki/Brute-force_attack"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Brute force attacks
                      </a>
                    </strong>{" "}
                    work by systematically attempting every possible password
                    combination until the correct one is found. The time required
                    grows exponentially with password length and character set size,
                    making well-generated passwords virtually unbreakable with current
                    technology.
                  </p>
                  <p>
                    A 12-character password using our full character set (95 printable
                    ASCII characters) has 95^12 ≈ 5.4 × 10^23 possible combinations.
                    Even with advanced hardware capable of testing billions of
                    passwords per second, this would take longer than the age of the
                    universe to exhaust all possibilities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Password Strength Mathematics - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  The Mathematics of Password Strength
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-3">
                  <p>
                    Password strength is measured in bits of entropy, calculated as
                    log₂(possible combinations). Each additional bit doubles the time
                    required for a brute force attack, creating an exponential
                    security improvement.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p>
                          <strong>Character Sets:</strong>
                        </p>
                        <p>• Lowercase: 26 characters</p>
                        <p>• + Uppercase: 52 characters</p>
                        <p>• + Numbers: 62 characters</p>
                        <p>• + Symbols: 95 characters</p>
                      </div>
                      <div>
                        <p>
                          <strong>Time to Crack (12 chars):</strong>
                        </p>
                        <p>• Lowercase only: 2 hours</p>
                        <p>• + Uppercase: 2 years</p>
                        <p>• + Numbers: 2,000 years</p>
                        <p>• + Symbols: 1.7 million years</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    These calculations assume advanced hardware (100 billion
                    guesses/second) and optimal attack conditions. Real-world attacks
                    face additional barriers like rate limiting, account lockouts, and
                    network latency.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Attack Vector Protection - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Protection Against Modern Attack Vectors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-3">
                  <p>
                    Modern password attacks have evolved beyond simple brute force to
                    include sophisticated techniques. Our generator addresses these
                    threats through multiple security layers:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                        Dictionary Attacks
                      </h3>
                      <p>
                        Attackers use databases of common passwords and words. Our
                        character-based generator creates truly random sequences that
                        don't appear in any dictionary, while our word-based generator
                        combines multiple unrelated words with numbers and symbols.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                        Rainbow Table Attacks
                      </h3>
                      <p>
                        Pre-computed hash tables can crack common passwords instantly.
                        Generated passwords with high entropy and unique character
                        combinations are extremely unlikely to appear in rainbow
                        tables.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                        Credential Stuffing
                      </h3>
                      <p>
                        Attackers reuse leaked passwords across multiple sites. Using
                        unique, generated passwords for each account ensures that a
                        breach on one service doesn't compromise others.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                        Social Engineering
                      </h3>
                      <p>
                        Generated passwords contain no personal information, making
                        them immune to attacks based on birthdays, names, or other
                        discoverable data about the user.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Implementation - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Cryptographic Randomness and Security Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-3">
                  <p>
                    Our password generator uses cryptographically secure{" "}
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://en.wikipedia.org/wiki/Pseudorandom_number_generator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      pseudo-random number generation (CSPRNG)
                    </a>{" "}
                    through the browser's{" "}
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Web Crypto API
                    </a>
                    , ensuring that generated passwords are statistically
                    indistinguishable from true randomness.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                      Security Features:
                    </h3>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        <strong>Cryptographic entropy:</strong> Uses
                        crypto.getRandomValues() for true randomness
                      </li>
                      <li>
                        <strong>Character distribution:</strong> Ensures at least one
                        character from each selected set
                      </li>
                      <li>
                        <strong>Bias elimination:</strong> Fisher-Yates shuffle
                        prevents pattern-based vulnerabilities
                      </li>
                      <li>
                        <strong>Memory security:</strong> No password storage or
                        transmission - generated client-side only
                      </li>
                      <li>
                        <strong>Timing attack resistance:</strong> Constant-time
                        operations prevent side-channel analysis
                      </li>
                    </ul>
                  </div>
                  <p>
                    The generator operates entirely in your browser with no network
                    communication, ensuring that generated passwords remain private
                    and are never exposed to potential interception or logging.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Best Practices Guide - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Enterprise-Grade Password Management Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-3">
                  <p>
                    Implementing robust password security requires a comprehensive
                    approach that goes beyond individual password strength.
                    Organizations and individuals should follow these evidence-based
                    practices:
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                        Password Requirements
                      </h3>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Minimum 12 characters for standard accounts</li>
                        <li>16+ characters for administrative access</li>
                        <li>Unique passwords for every service</li>
                        <li>Regular rotation for high-privilege accounts</li>
                        <li>Multi-factor authentication when available</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                        Organizational Policies
                      </h3>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Password manager deployment and training</li>
                        <li>Regular security awareness education</li>
                        <li>Incident response procedures for breaches</li>
                        <li>Monitoring for credential compromise</li>
                        <li>Zero-trust architecture implementation</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    <strong>Critical insight:</strong> The weakest password in your
                    organization determines your overall security posture. A single
                    compromised credential can lead to lateral movement and privilege
                    escalation, making comprehensive password security essential for
                    cybersecurity resilience.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Industry Standards and Compliance - Content Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Compliance and Industry Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-3">
                  <p>
                    Our password generation methodology aligns with leading
                    cybersecurity frameworks and regulatory requirements, ensuring
                    that generated passwords meet or exceed industry standards for
                    access control.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                      <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                        NIST Guidelines
                      </h3>
                      <p>
                        Compliant with NIST SP 800-63B recommendations for password
                        complexity, length requirements, and entropy calculations.
                      </p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                      <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                        ISO 27001
                      </h3>
                      <p>
                        Supports access control requirements under ISO 27001:2013
                        Annex A.9 for information security management systems.
                      </p>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                      <h3 className="text-slate-800 dark:text-slate-200 mb-2">
                        PCI DSS
                      </h3>
                      <p>
                        Meets PCI DSS Requirement 8.2 for unique user identification
                        and authentication for payment card industry compliance.
                      </p>
                    </div>
                  </div>
                  <p>
                    Regular security audits and penetration testing validate that our
                    password generation algorithms maintain resistance against
                    evolving threat landscapes and emerging attack methodologies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Security Standards & References */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Security Standards & References
                </CardTitle>
                <CardDescription>
                  Official security guidelines and compliance standards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid gap-3">
                  <a
                    href="https://pages.nist.gov/800-63-3/sp800-63b.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        NIST SP 800-63B
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Password guidelines and authentication standards
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        OWASP Password Storage Cheat Sheet
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Secure password storage best practices
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.nist.gov/cyberframework"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        NIST Cybersecurity Framework
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Comprehensive cybersecurity risk management
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.iso.org/standard/54534.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        ISO/IEC 27001:2013
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Information security management systems
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

export default PasswordGenerator;
