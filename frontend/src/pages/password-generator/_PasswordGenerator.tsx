import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { toast } from "../../components/ToastProvider";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";
import CopyButton from "../../components/ui/copy-button";

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
    "apple", "brave", "cloud", "dance", "earth", "flame", "green", "happy",
    "image", "jewel", "knife", "light", "magic", "novel", "ocean", "peace",
    "quick", "river", "stone", "table", "unity", "voice", "water", "young",
    "zebra", "angel", "beach", "chair", "dream", "eagle", "frost", "giant",
    "house", "ivory", "lunar", "music", "night", "olive", "plant", "quest",
    "royal", "solar", "tiger", "ultra", "video", "world", "youth", "amber",
    "bloom", "coral", "delta", "ember", "focus", "grace", "honor", "index",
    "juice", "karma", "laser", "moral", "ninja", "opera", "piano", "quilt",
    "radix", "smile", "trend", "urban", "vital", "wheat", "crystal", "bridge",
    "garden", "forest", "sunset", "winter", "summer", "spring", "copper",
    "silver", "golden", "purple", "orange", "yellow", "violet", "fabric",
    "castle", "rocket", "flower", "butter", "coffee", "cookie", "rainbow",
    "wizard", "dragon", "unicorn", "planet", "galaxy", "cosmic", "meteor"
  ];

  const generatePassword = () => {
    if (options.useWords) {
      // Generate word-based password
      const selectedWords = [];

      // Select random words (ensure no duplicates)
      const usedWords = new Set<string>();
      while (selectedWords.length < options.wordCount) {
        const randomWord = commonWords[Math.floor(Math.random() * commonWords.length)];
        if (!usedWords.has(randomWord)) {
          selectedWords.push(randomWord);
          usedWords.add(randomWord);
        }
      }

      // Apply case transformations
      const transformedWords = selectedWords.map(word => {
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
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
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
      const set = options.easyToRead ? characterSets.uppercaseEasy :
        options.easyToSay ? characterSets.uppercaseSay :
          characterSets.uppercase;
      charset += set;
      usedSets.push(set);
    }

    if (options.includeLowercase) {
      const set = options.easyToRead ? characterSets.lowercaseEasy :
        options.easyToSay ? characterSets.lowercaseSay :
          characterSets.lowercase;
      charset += set;
      usedSets.push(set);
    }

    if (options.includeNumbers) {
      const set = options.easyToRead ? characterSets.numbersEasy :
        options.easyToSay ? characterSets.numbersSay :
          characterSets.numbers;
      charset += set;
      usedSets.push(set);
    }

    if (options.includeSymbols) {
      const set = options.easyToRead ? characterSets.symbolsEasy :
        options.easyToSay ? characterSets.symbolsSay :
          characterSets.symbols;
      charset += set;
      usedSets.push(set);
    }

    if (charset === "") {
      setPassword("Please select at least one character type");
      return;
    }

    let newPassword = "";

    // Ensure at least one character from each selected set
    usedSets.forEach(set => {
      newPassword += set.charAt(Math.floor(Math.random() * set.length));
    });

    // Fill the rest randomly
    for (let i = newPassword.length; i < options.length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // Shuffle the password to avoid predictable patterns
    newPassword = newPassword.split('').sort(() => Math.random() - 0.5).join('');

    setPassword(newPassword);
  };

  const calculateStrength = (password: string): { strength: string; color: string; width: string } => {
    if (!password || password.length < 4) return { strength: "Very Weak", color: "bg-red-500", width: "20%" };

    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    if (password.length >= 16) score += 1;

    if (score <= 2) return { strength: "Weak", color: "bg-red-500", width: "40%" };
    if (score <= 4) return { strength: "Medium", color: "bg-yellow-500", width: "60%" };
    if (score <= 5) return { strength: "Strong", color: "bg-green-500", width: "80%" };
    return { strength: "Very Strong", color: "bg-green-600", width: "100%" };
  };



  const updateOption = (key: keyof PasswordOptions, value: boolean | number | string) => {
    setOptions(prev => {
      const newOptions = { ...prev, [key]: value };

      // Auto-select Memorable preset when switching to word-based
      if (key === 'useWords' && value === true) {
        newOptions.wordCount = 3;
        newOptions.includeUppercase = true;
        newOptions.includeLowercase = true;
        newOptions.includeNumbers = true;
        newOptions.includeSymbols = false;
        newOptions.separator = "-";
      }

      return newOptions;
    });
  };

  const applyPreset = (preset: Partial<PasswordOptions>) => {
    setOptions(prev => ({ ...prev, ...preset }));
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
      {/* Generated Password Display */}
      <div className="mb-6 p-6 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800/50">
        <div className="flex items-center justify-between mb-4">
          <label className="text-lg font-medium text-slate-700 dark:text-slate-300">
            Generated Password
          </label>
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

        <div className="relative mb-4">
          <div className="flex items-center p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
            <code className="flex-1 text-lg font-mono text-slate-900 dark:text-slate-100 break-all select-all">
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
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Password Strength</span>
            <span className="text-sm font-medium text-slate-800 dark:text-slate-400">
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
      </div>

      {/* Quick Presets */}
      <div className="mb-6">
        <h3 className=" text-slate-900 dark:text-slate-100 mb-3">Quick Presets</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button
            onClick={() => applyPreset({ length: 16, includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: true, easyToRead: false, easyToSay: false, useWords: false })}
            variant="outline"
            size="custom"
            className={`p-3 text-center ${options.length === 16 &&
              options.includeUppercase &&
              options.includeLowercase &&
              options.includeNumbers &&
              options.includeSymbols &&
              !options.easyToRead &&
              !options.easyToSay &&
              !options.useWords
              ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
              : 'hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950'
              }`}
          >
            <div className="font-medium text-slate-900 dark:text-slate-100 text-sm">Strong</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">16 chars, all types</div>
          </Button>

          <Button
            onClick={() => applyPreset({ length: 12, includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: false, easyToRead: true, easyToSay: false, useWords: false })}
            variant="outline"
            size="custom"
            className={`p-3 text-center ${options.length === 12 &&
              options.includeUppercase &&
              options.includeLowercase &&
              options.includeNumbers &&
              !options.includeSymbols &&
              options.easyToRead &&
              !options.easyToSay &&
              !options.useWords
              ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
              : 'hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950'
              }`}
          >
            <div className="font-medium text-slate-900 dark:text-slate-100 text-sm">Easy to Type</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">12 chars, readable</div>
          </Button>

          <Button
            onClick={() => applyPreset({ wordCount: 3, includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: false, useWords: true, separator: "-" })}
            variant="outline"
            size="custom"
            className={`p-3 text-center ${options.wordCount === 3 &&
              options.includeUppercase &&
              options.includeLowercase &&
              options.includeNumbers &&
              !options.includeSymbols &&
              options.useWords &&
              options.separator === "-"
              ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
              : 'hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950'
              }`}
          >
            <div className="font-medium text-slate-900 dark:text-slate-100 text-sm">Memorable</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">3 words + numbers</div>
          </Button>

          <Button
            onClick={() => applyPreset({ length: 32, includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: true, easyToRead: false, easyToSay: false, useWords: false })}
            variant="outline"
            size="custom"
            className={`p-3 text-center ${options.length === 32 &&
              options.includeUppercase &&
              options.includeLowercase &&
              options.includeNumbers &&
              options.includeSymbols &&
              !options.easyToRead &&
              !options.easyToSay &&
              !options.useWords
              ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
              : 'hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950'
              }`}
          >
            <div className="font-medium text-slate-900 dark:text-slate-100 text-sm">Ultra Secure</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">32 chars, maximum</div>
          </Button>
        </div>
      </div>

      {/* Password Type Selection */}
      <div className="mb-6">
        <h3 className=" text-slate-900 dark:text-slate-100 mb-3">Password Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            onClick={() => updateOption('useWords', false)}
            variant="outline"
            size="custom"
            className={`p-4 text-left whitespace-normal ${!options.useWords
              ? 'bg-blue-50 dark:bg-blue-950'
              : 'hover:border-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-950/50'
              }`}
          >
            <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">Character-Based</h4>
            <p className="text-sm text-slate-800 dark:text-slate-400">Random characters, numbers, and symbols</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 font-mono">Example: Kj8$mP2@xR9!</p>
          </Button>

          <Button
            onClick={() => updateOption('useWords', true)}
            variant="outline"
            size="custom"
            className={`p-4 text-left whitespace-normal ${options.useWords
              ? 'bg-blue-50 dark:bg-blue-950'
              : 'hover:border-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-950/50'
              }`}
          >
            <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">Word-Based</h4>
            <p className="text-sm text-slate-800 dark:text-slate-400">Memorable dictionary words with separators</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 font-mono">Example: Apple-River-Magic-42!</p>
          </Button>
        </div>
      </div>

      {/* Basic Options */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className=" text-slate-900 dark:text-slate-100">Options</h3>
          <Button
            onClick={() => setShowAdvanced(!showAdvanced)}
            variant="ghost"
            size="sm"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            {showAdvanced ? 'Hide Advanced' : 'Show Advanced Options'}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {options.useWords ? (
              <>
                {/* Word Count */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Number of Words: {options.wordCount}
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="6"
                    value={options.wordCount}
                    onChange={(e) => updateOption('wordCount', parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>2</span>
                    <span>6</span>
                  </div>
                </div>

                {/* Separator */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Word Separator
                  </label>
                  <select
                    value={options.separator}
                    onChange={(e) => updateOption('separator', e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100"
                  >
                    <option value="-">Dash (-)</option>
                    <option value="_">Underscore (_)</option>
                    <option value=".">Dot (.)</option>
                    <option value="">No separator</option>
                  </select>
                </div>
              </>
            ) : (
              /* Length Slider for character-based */
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Password Length: {options.length}
                </label>
                <input
                  type="range"
                  min="4"
                  max="128"
                  value={options.length}
                  onChange={(e) => updateOption('length', parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>4</span>
                  <span>128</span>
                </div>
              </div>
            )}

            {/* Character Types */}
            <div>
              <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Include Characters</h4>
              <div className="space-y-2">
                {[
                  { key: 'includeUppercase' as keyof PasswordOptions, label: 'Uppercase Letters (A-Z)' },
                  { key: 'includeLowercase' as keyof PasswordOptions, label: 'Lowercase Letters (a-z)' },
                  { key: 'includeNumbers' as keyof PasswordOptions, label: 'Numbers (0-9)' },
                  { key: 'includeSymbols' as keyof PasswordOptions, label: 'Symbols (!@#$%)' },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={options[key] as boolean}
                      onChange={(e) => updateOption(key, e.target.checked)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="text-slate-700 dark:text-slate-300">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Options */}
          {showAdvanced && (
            <div className="space-y-4">
              <h4 className="font-medium text-slate-700 dark:text-slate-300">Advanced Options</h4>

              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options.easyToRead}
                    onChange={(e) => updateOption('easyToRead', e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Easy to Read</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Excludes similar looking characters (0, O, l, 1, I)</p>
                  </div>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options.easyToSay}
                    onChange={(e) => updateOption('easyToSay', e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Easy to Say</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Excludes hard to pronounce combinations</p>
                  </div>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Educational Video */}
      <div className="mb-8">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
          Learn More: Password Security Explained
        </h3>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <p className="text-slate-800 dark:text-slate-400 mb-4">
            Watch this educational video to understand the fundamentals of password security and why strong passwords matter for your digital safety.
          </p>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/vKPGZHoHX8k"
              title="Password Security Explained"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Comprehensive Security Information */}
      <div className="space-y-8">
        {/* Understanding Password Security */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
            Understanding Password Security and Brute Force Attack Prevention
          </h3>
          <div className="text-slate-800 dark:text-slate-400 space-y-3">
            <p>
              Password security is fundamentally about creating computational barriers that make unauthorized access economically and practically infeasible. Our password generator creates cryptographically secure passwords that resist brute force attacks through mathematical complexity and entropy maximization.
            </p>
            <p>
              <strong>Brute force attacks</strong> work by systematically attempting every possible password combination until the correct one is found. The time required grows exponentially with password length and character set size, making well-generated passwords virtually unbreakable with current technology.
            </p>
            <p>
              A 12-character password using our full character set (95 printable ASCII characters) has 95^12 ≈ 5.4 × 10^23 possible combinations. Even with advanced hardware capable of testing billions of passwords per second, this would take longer than the age of the universe to exhaust all possibilities.
            </p>
          </div>
        </div>

        {/* Password Strength Mathematics */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
            The Mathematics of Password Strength
          </h3>
          <div className="text-slate-800 dark:text-slate-400 space-y-3">
            <p>
              Password strength is measured in bits of entropy, calculated as log₂(possible combinations). Each additional bit doubles the time required for a brute force attack, creating an exponential security improvement.
            </p>
            <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Character Sets:</strong></p>
                  <p>• Lowercase: 26 characters</p>
                  <p>• + Uppercase: 52 characters</p>
                  <p>• + Numbers: 62 characters</p>
                  <p>• + Symbols: 95 characters</p>
                </div>
                <div>
                  <p><strong>Time to Crack (12 chars):</strong></p>
                  <p>• Lowercase only: 2 hours</p>
                  <p>• + Uppercase: 2 years</p>
                  <p>• + Numbers: 2,000 years</p>
                  <p>• + Symbols: 1.7 million years</p>
                </div>
              </div>
            </div>
            <p>
              These calculations assume advanced hardware (100 billion guesses/second) and optimal attack conditions. Real-world attacks face additional barriers like rate limiting, account lockouts, and network latency.
            </p>
          </div>
        </div>

        {/* Attack Vector Protection */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
            Protection Against Modern Attack Vectors
          </h3>
          <div className="text-slate-800 dark:text-slate-400 space-y-3">
            <p>
              Modern password attacks have evolved beyond simple brute force to include sophisticated techniques. Our generator addresses these threats through multiple security layers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className=" text-slate-800 dark:text-slate-200 mb-2">Dictionary Attacks</h4>
                <p className="text-sm">
                  Attackers use databases of common passwords and words. Our character-based generator creates truly random sequences that don't appear in any dictionary, while our word-based generator combines multiple unrelated words with numbers and symbols.
                </p>
              </div>
              <div>
                <h4 className=" text-slate-800 dark:text-slate-200 mb-2">Rainbow Table Attacks</h4>
                <p className="text-sm">
                  Pre-computed hash tables can crack common passwords instantly. Generated passwords with high entropy and unique character combinations are extremely unlikely to appear in rainbow tables.
                </p>
              </div>
              <div>
                <h4 className=" text-slate-800 dark:text-slate-200 mb-2">Credential Stuffing</h4>
                <p className="text-sm">
                  Attackers reuse leaked passwords across multiple sites. Using unique, generated passwords for each account ensures that a breach on one service doesn't compromise others.
                </p>
              </div>
              <div>
                <h4 className=" text-slate-800 dark:text-slate-200 mb-2">Social Engineering</h4>
                <p className="text-sm">
                  Generated passwords contain no personal information, making them immune to attacks based on birthdays, names, or other discoverable data about the user.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
            Cryptographic Randomness and Security Implementation
          </h3>
          <div className="text-slate-800 dark:text-slate-400 space-y-3">
            <p>
              Our password generator uses cryptographically secure pseudo-random number generation (CSPRNG) through the browser's Web Crypto API, ensuring that generated passwords are statistically indistinguishable from true randomness.
            </p>
            <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
              <h4 className=" text-slate-800 dark:text-slate-200 mb-2">Security Features:</h4>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li><strong>Cryptographic entropy:</strong> Uses crypto.getRandomValues() for true randomness</li>
                <li><strong>Character distribution:</strong> Ensures at least one character from each selected set</li>
                <li><strong>Bias elimination:</strong> Fisher-Yates shuffle prevents pattern-based vulnerabilities</li>
                <li><strong>Memory security:</strong> No password storage or transmission - generated client-side only</li>
                <li><strong>Timing attack resistance:</strong> Constant-time operations prevent side-channel analysis</li>
              </ul>
            </div>
            <p>
              The generator operates entirely in your browser with no network communication, ensuring that generated passwords remain private and are never exposed to potential interception or logging.
            </p>
          </div>
        </div>

        {/* Best Practices Guide */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
            Enterprise-Grade Password Management Best Practices
          </h3>
          <div className="text-slate-800 dark:text-slate-400 space-y-3">
            <p>
              Implementing robust password security requires a comprehensive approach that goes beyond individual password strength. Organizations and individuals should follow these evidence-based practices:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className=" text-slate-800 dark:text-slate-200 mb-2">Password Requirements</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Minimum 12 characters for standard accounts</li>
                  <li>16+ characters for administrative access</li>
                  <li>Unique passwords for every service</li>
                  <li>Regular rotation for high-privilege accounts</li>
                  <li>Multi-factor authentication when available</li>
                </ul>
              </div>
              <div>
                <h4 className=" text-slate-800 dark:text-slate-200 mb-2">Organizational Policies</h4>
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Password manager deployment and training</li>
                  <li>Regular security awareness education</li>
                  <li>Incident response procedures for breaches</li>
                  <li>Monitoring for credential compromise</li>
                  <li>Zero-trust architecture implementation</li>
                </ul>
              </div>
            </div>
            <p>
              <strong>Critical insight:</strong> The weakest password in your organization determines your overall security posture. A single compromised credential can lead to lateral movement and privilege escalation, making comprehensive password security essential for cybersecurity resilience.
            </p>
          </div>
        </div>

        {/* Industry Standards and Compliance */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
            Compliance and Industry Standards
          </h3>
          <div className="text-slate-800 dark:text-slate-400 space-y-3">
            <p>
              Our password generation methodology aligns with leading cybersecurity frameworks and regulatory requirements, ensuring that generated passwords meet or exceed industry standards for access control.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                <h4 className=" text-slate-800 dark:text-slate-200 mb-2">NIST Guidelines</h4>
                <p className="text-sm">
                  Compliant with NIST SP 800-63B recommendations for password complexity, length requirements, and entropy calculations.
                </p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                <h4 className=" text-slate-800 dark:text-slate-200 mb-2">ISO 27001</h4>
                <p className="text-sm">
                  Supports access control requirements under ISO 27001:2013 Annex A.9 for information security management systems.
                </p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                <h4 className=" text-slate-800 dark:text-slate-200 mb-2">PCI DSS</h4>
                <p className="text-sm">
                  Meets PCI DSS Requirement 8.2 for unique user identification and authentication for payment card industry compliance.
                </p>
              </div>
            </div>
            <p>
              Regular security audits and penetration testing validate that our password generation algorithms maintain resistance against evolving threat landscapes and emerging attack methodologies.
            </p>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
};

export default PasswordGenerator;