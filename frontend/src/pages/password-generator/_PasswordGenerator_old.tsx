import React, { useState, useEffect } from "react";

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
  const [options, setOptions] = useState<PasswordOptions>({
    length: 12,
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
  const [copySuccess, setCopySuccess] = useState(false);

  // Character sets
  const characterSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    // Easy to read excludes similar looking characters
    uppercaseEasy: "ABCDEFGHJKLMNPQRSTUVWXYZ",
    lowercaseEasy: "abcdefghjkmnpqrstuvwxyz",
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
    "house", "ivory", "jewel", "lunar", "music", "night", "olive", "plant",
    "quest", "royal", "solar", "tiger", "ultra", "video", "world", "youth",
    "amber", "bloom", "coral", "delta", "ember", "focus", "grace", "honor",
    "index", "juice", "karma", "laser", "moral", "ninja", "opera", "piano",
    "quilt", "radix", "smile", "trend", "urban", "vital", "wheat", "xerus"
  ];

  const generatePassword = () => {
    if (options.useWords) {
      // Generate word-based password
      let wordPassword = "";
      const selectedWords = [];
      
      // Select random words
      for (let i = 0; i < options.wordCount; i++) {
        const randomWord = commonWords[Math.floor(Math.random() * commonWords.length)];
        selectedWords.push(randomWord);
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
      wordPassword = transformedWords.join(options.separator);
      
      // Add numbers if requested
      if (options.includeNumbers) {
        const numbers = Math.floor(Math.random() * 999) + 1;
        wordPassword += options.separator + numbers;
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

  const handleCopy = async () => {
    if (password && password !== "Please select at least one character type") {
      try {
        await navigator.clipboard.writeText(password);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy password:', err);
      }
    }
  };

  const updateOption = (key: keyof PasswordOptions, value: boolean | number) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  };

  // Generate password on component mount and when options change
  useEffect(() => {
    generatePassword();
  }, [options]);

  const strengthInfo = calculateStrength(password);

  return (
    <div className="passwordgenerator-tool max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Password Generator
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Generate secure, customizable passwords instantly. Create strong passwords with custom length, character types, and readability options.
        </p>
      </div>

      {/* Generated Password Display */}
      <div className="mb-6 p-6 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-800/50">
        <div className="flex items-center justify-between mb-4">
          <label className="text-lg font-medium text-slate-700 dark:text-slate-300">
            Generated Password
          </label>
          <button
            onClick={generatePassword}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
          >
            🔄 Regenerate
          </button>
        </div>
        
        <div className="relative mb-4">
          <div className="flex items-center p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
            <code className="flex-1 text-lg font-mono text-slate-900 dark:text-slate-100 break-all">
              {password || "Click generate to create a password"}
            </code>
            <button
              onClick={handleCopy}
              className="ml-3 p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              title="Copy to clipboard"
            >
              {copySuccess ? (
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
          {copySuccess && (
            <div className="absolute top-full left-0 mt-2 px-3 py-1 bg-green-600 text-white text-sm rounded shadow-lg">
              Copied to clipboard!
            </div>
          )}
        </div>

        {/* Password Strength Indicator */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Password Strength</span>
            <span className={`text-sm font-medium ${strengthInfo.color.replace('bg-', 'text-')}`}>
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

      {/* Password Options */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Options</h3>
          
          {/* Length Slider */}
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

          {/* Character Types */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-700 dark:text-slate-300">Character Types</h4>
            
            {[
              { key: 'includeUppercase' as keyof PasswordOptions, label: 'Uppercase Letters (A-Z)', example: 'ABC' },
              { key: 'includeLowercase' as keyof PasswordOptions, label: 'Lowercase Letters (a-z)', example: 'abc' },
              { key: 'includeNumbers' as keyof PasswordOptions, label: 'Numbers (0-9)', example: '123' },
              { key: 'includeSymbols' as keyof PasswordOptions, label: 'Symbols (!@#$%)', example: '!@#' },
            ].map(({ key, label, example }) => (
              <label key={key} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options[key] as boolean}
                  onChange={(e) => updateOption(key, e.target.checked)}
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="text-slate-700 dark:text-slate-300">{label}</span>
                <code className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">
                  {example}
                </code>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Special Options</h3>
          
          {/* Special Options */}
          <div className="space-y-3">
            {[
              { 
                key: 'easyToRead' as keyof PasswordOptions, 
                label: 'Easy to Read', 
                description: 'Excludes similar looking characters (0, O, l, 1, I)' 
              },
              { 
                key: 'easyToSay' as keyof PasswordOptions, 
                label: 'Easy to Say', 
                description: 'Excludes hard to pronounce character combinations' 
              },
            ].map(({ key, label, description }) => (
              <div key={key} className="space-y-1">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options[key] as boolean}
                    onChange={(e) => updateOption(key, e.target.checked)}
                    className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{label}</span>
                </label>
                <p className="text-sm text-slate-500 dark:text-slate-400 ml-7">{description}</p>
              </div>
            ))}
          </div>

          {/* Quick Presets */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-700 dark:text-slate-300">Quick Presets</h4>
            <div className="space-y-2">
              {[
                { name: 'Strong & Secure', opts: { length: 16, includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: true, easyToRead: false, easyToSay: false } },
                { name: 'Easy to Type', opts: { length: 12, includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: false, easyToRead: true, easyToSay: false } },
                { name: 'Memorable', opts: { length: 10, includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: false, easyToRead: true, easyToSay: true } },
                { name: 'Ultra Secure', opts: { length: 32, includeUppercase: true, includeLowercase: true, includeNumbers: true, includeSymbols: true, easyToRead: false, easyToSay: false } },
              ].map(({ name, opts }) => (
                <button
                  key={name}
                  onClick={() => setOptions(opts)}
                  className="w-full text-left px-3 py-2 text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
          About Password Generator
        </h3>
        <div className="text-slate-600 dark:text-slate-400 space-y-2">
          <p>
            Create secure, customizable passwords with our advanced password generator. Choose from multiple character sets, adjust length, and optimize for readability or pronunciation.
          </p>
          <p>
            <strong>Security Tips:</strong> Use passwords with at least 12 characters, include multiple character types, avoid common words, and use a unique password for each account.
          </p>
          <p>
            <strong>Common uses:</strong> Account creation, password resets, securing applications, generating API keys, and improving overall cybersecurity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
