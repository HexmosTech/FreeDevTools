import React, { useState, useEffect, useCallback, useMemo } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import HashGeneratorSkeleton from "./_HashGeneratorSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ToolVideo from "@/components/tool/ToolVideo";
import AdBanner from "../../../components/banner/AdBanner";

// Hash generation utilities using Web Crypto API
type Algorithm =
  | "sha256"
  | "sha512"
  | "md5"
  | "pbkdf2"
  | "hmac-sha256"
  | "hmac-sha512";
type Encoding = "hex" | "base64";

const generateHash = async (
  algorithm: Algorithm,
  text: string,
  encoding: Encoding = "hex",
  options?: {
    salt?: string;
    iterations?: number;
    keyLength?: number;
    secretKey?: string;
  }
): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  let hash: ArrayBuffer;

  try {
    switch (algorithm) {
      case "sha256":
        hash = await crypto.subtle.digest("SHA-256", data);
        break;
      case "sha512":
        hash = await crypto.subtle.digest("SHA-512", data);
        break;
      case "md5":
        // MD5 using a simple implementation since Web Crypto doesn't support it
        throw new Error(
          "MD5 is deprecated due to security vulnerabilities. Please use SHA-256 or SHA-512."
        );
      case "pbkdf2":
        if (!options?.salt || !options?.iterations || !options?.keyLength) {
          throw new Error("PBKDF2 requires salt, iterations, and key length.");
        }
        const saltBuffer = encoder.encode(options.salt);
        const keyMaterial = await crypto.subtle.importKey(
          "raw",
          data,
          { name: "PBKDF2" },
          false,
          ["deriveBits"]
        );
        hash = await crypto.subtle.deriveBits(
          {
            name: "PBKDF2",
            salt: saltBuffer,
            iterations: options.iterations,
            hash: "SHA-512",
          },
          keyMaterial,
          options.keyLength * 8
        );
        break;
      case "hmac-sha256":
      case "hmac-sha512":
        if (!options?.secretKey) {
          throw new Error("HMAC requires a secret key.");
        }
        const secretKeyBuffer = encoder.encode(options.secretKey);
        const hashAlg = algorithm === "hmac-sha256" ? "SHA-256" : "SHA-512";
        const key = await crypto.subtle.importKey(
          "raw",
          secretKeyBuffer,
          { name: "HMAC", hash: hashAlg },
          false,
          ["sign"]
        );
        hash = await crypto.subtle.sign("HMAC", key, data);
        break;
      default:
        throw new Error(`Unsupported algorithm: ${algorithm}`);
    }

    // Convert to desired encoding
    const bytes = new Uint8Array(hash);
    if (encoding === "hex") {
      return Array.from(bytes, (byte) =>
        byte.toString(16).padStart(2, "0")
      ).join("");
    } else if (encoding === "base64") {
      return btoa(String.fromCharCode(...bytes));
    }

    return "";
  } catch (error) {
    throw new Error(
      `Hash generation failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};

const HashGenerator: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [algorithm, setAlgorithm] = useState<Algorithm>("sha256");
  const [encoding, setEncoding] = useState<Encoding>("hex");
  const [salt, setSalt] = useState("");
  const [iterations, setIterations] = useState(10000);
  const [keyLength, setKeyLength] = useState(32);
  const [secretKey, setSecretKey] = useState("");

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = useCallback(
    async (value: string) => {
      setInput(value);
      setError("");

      if (!value.trim()) {
        setOutput("");
        return;
      }

      try {
        let options: any = {};

        if (algorithm === "pbkdf2") {
          const generatedSalt =
            salt ||
            crypto
              .getRandomValues(new Uint8Array(16))
              .reduce(
                (str, byte) => str + byte.toString(16).padStart(2, "0"),
                ""
              );
          options = { salt: generatedSalt, iterations, keyLength };
        } else if (algorithm.startsWith("hmac")) {
          const generatedKey =
            secretKey ||
            crypto
              .getRandomValues(new Uint8Array(32))
              .reduce(
                (str, byte) => str + byte.toString(16).padStart(2, "0"),
                ""
              );
          options = { secretKey: generatedKey };
        }

        const hashOutput = await generateHash(
          algorithm,
          value,
          encoding,
          options
        );
        setOutput(hashOutput);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to generate hash";
        setError(errorMessage);
        setOutput("");
      }
    },
    [algorithm, encoding, salt, iterations, keyLength, secretKey]
  );

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleGenerate = () => {
    handleInputChange(input);
  };

  const sampleText = "Hello World! This is a sample text for hash generation.";

  return (
    <ToolContainer>
            <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="Hash Generator"
        description="Generate secure hashes instantly with our free online hash generator. Create SHA-256, SHA-512, MD5, PBKDF2, and HMAC hashes with customizable options for security and development needs."
      />

      {!loaded ? (
        <HashGeneratorSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader></CardHeader>
              <CardContent className="space-y-6">
                {/* Input and Configuration */}
                <div className="space-y-4">
                  <div>
                    <Textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Enter text to generate hash..."
                      className="min-h-[120px] font-mono text-sm"
                    />
                  </div>

                  {/* Algorithm and Encoding Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Hash Algorithm
                      </Label>
                      <Select
                        value={algorithm}
                        onValueChange={(value: Algorithm) =>
                          setAlgorithm(value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select algorithm" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sha256">SHA-256</SelectItem>
                          <SelectItem value="sha512">SHA-512</SelectItem>
                          <SelectItem value="md5">
                            MD5 (Not Recommended)
                          </SelectItem>
                          <SelectItem value="pbkdf2">
                            PBKDF2 (SHA-512)
                          </SelectItem>
                          <SelectItem value="hmac-sha256">
                            HMAC-SHA-256
                          </SelectItem>
                          <SelectItem value="hmac-sha512">
                            HMAC-SHA-512
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Output Encoding
                      </Label>
                      <Select
                        value={encoding}
                        onValueChange={(value: Encoding) => setEncoding(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select encoding" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hex">Hexadecimal</SelectItem>
                          <SelectItem value="base64">Base64</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* PBKDF2 Options */}
                  {algorithm === "pbkdf2" && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-3">
                        PBKDF2 Configuration
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-blue-800 dark:text-blue-200">
                            Salt (optional)
                          </Label>
                          <Input
                            type="text"
                            value={salt}
                            onChange={(e) => setSalt(e.target.value)}
                            placeholder="Random salt if empty"
                            className="text-sm"
                          />
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-blue-800 dark:text-blue-200">
                            Iterations
                          </Label>
                          <Input
                            type="number"
                            value={iterations}
                            onChange={(e) =>
                              setIterations(Number(e.target.value))
                            }
                            min="1000"
                            max="50000"
                            className="text-sm"
                          />
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-blue-800 dark:text-blue-200">
                            Key Length (bytes)
                          </Label>
                          <Input
                            type="number"
                            value={keyLength}
                            onChange={(e) =>
                              setKeyLength(Number(e.target.value))
                            }
                            min="16"
                            max="128"
                            className="text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* HMAC Options */}
                  {(algorithm === "hmac-sha256" ||
                    algorithm === "hmac-sha512") && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-medium text-green-900 dark:text-green-100 mb-3">
                        HMAC Configuration
                      </h4>
                      <div>
                        <Label className="text-sm font-medium text-green-800 dark:text-green-200">
                          Secret Key (optional)
                        </Label>
                        <Input
                          type="text"
                          value={secretKey}
                          onChange={(e) => setSecretKey(e.target.value)}
                          placeholder="Random key if empty"
                          className="text-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button onClick={handleClear} variant="outline">
                      Clear
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleInputChange(sampleText)}
                        variant="secondary"
                      >
                        Load Sample
                      </Button>
                      <Button onClick={handleGenerate} disabled={!input.trim()}>
                        Generate Hash
                      </Button>
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                      <p className="text-destructive text-sm">{error}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Hash Output */}
            {output && (
              <Card className="tool-card-bg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Generated Hash</CardTitle>
                    <CopyButton text={output} />
                  </div>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={output}
                    readOnly
                    className="min-h-[50px] font-mono text-sm bg-muted/50"
                  />
                  <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                    <strong>Algorithm:</strong> {algorithm.toUpperCase()} |{" "}
                    <strong>Encoding:</strong> {encoding.toUpperCase()} |{" "}
                    <strong>Length:</strong> {output.length} characters
                  </div>
                </CardContent>
              </Card>
            )}
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>
                  Understanding Cryptographic Hash Functions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Cryptographic hash functions are fundamental building blocks
                    of modern cybersecurity and data integrity systems. These
                    mathematical algorithms transform input data of any size
                    into fixed-length output strings, creating unique digital
                    fingerprints that are essential for password security, data
                    verification, and blockchain technology.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Hash Function Properties
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Deterministic:</strong> Same input always
                            produces same output
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Fixed Output:</strong> Always produces same
                            length hash regardless of input size
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>One-way Function:</strong> Computationally
                            infeasible to reverse
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Collision Resistant:</strong> Hard to find
                            two inputs with same hash
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Common Applications
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Password storage and authentication</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Data integrity verification</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Digital signatures and certificates</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Blockchain and cryptocurrency</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>File checksums and version control</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // Example: SHA-256 hash comparison
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="text-slate-800 dark:text-slate-200">
                        <span className="text-blue-600 dark:text-blue-400">
                          Input:
                        </span>{" "}
                        "Hello World"
                      </div>
                      <div className="text-slate-800 dark:text-slate-200">
                        <span className="text-green-600 dark:text-green-400">
                          SHA-256:
                        </span>{" "}
                        a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
                      </div>
                      <div className="text-slate-800 dark:text-slate-200">
                        <span className="text-purple-600 dark:text-purple-400">
                          SHA-512:
                        </span>{" "}
                        2c74fd17edafd80e8447b0d46741ee243b7eb74dd2149a0ab1b9246fb30382f2...
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Hash Algorithm Comparison and Security Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* SHA Algorithms */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            🔒
                          </span>
                        </span>
                        SHA Family (Recommended)
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>SHA-256:</strong> 256-bit hash, widely
                            adopted, excellent security for most applications
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>SHA-512:</strong> 512-bit hash, higher
                            security level, better for high-value data
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Performance:</strong> SHA-256 faster on
                            32-bit systems, SHA-512 faster on 64-bit
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use Cases:</strong> SSL/TLS certificates,
                            Bitcoin, general data integrity
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Advanced Algorithms */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            ⚡
                          </span>
                        </span>
                        Advanced Functions
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>PBKDF2:</strong> Password-based key
                            derivation with configurable iterations and salt
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>HMAC:</strong> Hash-based message
                            authentication with secret key
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Salt Protection:</strong> Prevents rainbow
                            table attacks on password hashes
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Key Stretching:</strong> Computationally
                            expensive to slow down brute force
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Security Warnings */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-red-600 dark:text-red-400">
                            ⚠️
                          </span>
                        </span>
                        Security Considerations
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>MD5 Deprecated:</strong> Vulnerable to
                            collision attacks, avoid for security applications
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>SHA-1 Retired:</strong> Collision
                            vulnerabilities discovered, replaced by SHA-256
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Password Storage:</strong> Always use
                            PBKDF2, Argon2, or bcrypt with salt
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Timing Attacks:</strong> Use constant-time
                            comparison for hash verification
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Best Practices */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            ✅
                          </span>
                        </span>
                        Implementation Best Practices
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use Standard Libraries:</strong> Never
                            implement hash algorithms from scratch
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Proper Salt Generation:</strong> Use
                            cryptographically secure random number generators
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Iteration Counts:</strong> Use minimum
                            10,000 iterations for PBKDF2, adjust for performance
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Regular Updates:</strong> Stay informed
                            about cryptographic vulnerabilities and updates
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>🔐 Security Tip:</strong> For password storage,
                      always use specialized password hashing functions like
                      PBKDF2, Argon2, or bcrypt instead of simple hash
                      functions. These algorithms include built-in salt
                      generation and configurable work factors to resist brute
                      force attacks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: Hashing Algorithms and Security - Computerphile"
              description="This video provides a deep dive into hashing algorithms, explaining what a hash is and its role in data security."
              videoUrl="https://www.youtube.com/embed/b4b8ktEV4Bg"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default HashGenerator;
