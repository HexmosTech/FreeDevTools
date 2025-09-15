import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import JwtParserSkeleton from "./_JwtParserSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ToolVideo from "@/components/tool/ToolVideo";

// JWT Parser Utility Functions
interface JWTDecoded {
  header: any;
  payload: any;
  signature: string;
}

const base64UrlDecode = (str: string): string => {
  // Replace URL-safe characters and add padding if needed
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");

  // Add padding if needed
  const padding = base64.length % 4;
  if (padding) {
    base64 += "=".repeat(4 - padding);
  }

  try {
    // Decode base64 and handle UTF-8
    const decoded = atob(base64);
    return decodeURIComponent(
      decoded
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  } catch (error) {
    throw new Error("Invalid base64 encoding");
  }
};

const decodeJWT = (token: string): JWTDecoded => {
  if (!token || typeof token !== "string") {
    throw new Error("Token must be a non-empty string");
  }

  const parts = token.split(".");

  if (parts.length !== 3) {
    throw new Error(
      "Invalid JWT format. Token must have 3 parts separated by dots"
    );
  }

  try {
    const [headerB64, payloadB64, signature] = parts;

    // Decode header
    const headerJson = base64UrlDecode(headerB64);
    const header = JSON.parse(headerJson);

    // Decode payload
    const payloadJson = base64UrlDecode(payloadB64);
    const payload = JSON.parse(payloadJson);

    return {
      header,
      payload,
      signature,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to decode JWT: ${error.message}`);
    }
    throw new Error("Failed to decode JWT: Unknown error");
  }
};

const JwtParser: React.FC = () => {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setInput(value);
      setError("");

      if (!value.trim()) {
        setHeader("");
        setPayload("");
        setSignature("");
        return;
      }

      try {
        const decoded = decodeJWT(value.trim());
        setHeader(JSON.stringify(decoded.header, null, 2));
        setPayload(JSON.stringify(decoded.payload, null, 2));
        setSignature(decoded.signature || "");
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Invalid JWT token";
        setError(errorMessage);
        setHeader("");
        setPayload("");
        setSignature("");
      }
    },
    []
  );

  const handleClear = () => {
    setInput("");
    setHeader("");
    setPayload("");
    setSignature("");
    setError("");
    toast.success("Cleared all fields");
  };

  const handleSampleJWT = () => {
    const sampleToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    setInput(sampleToken);
    handleInputChange({
      target: { value: sampleToken },
    } as React.ChangeEvent<HTMLTextAreaElement>);
  };

  return (
    <ToolContainer>
      <ToolHead
        name="JWT Parser"
        description="Parse and decode JWT tokens instantly. Decode header, payload, and signature from JSON Web Tokens with real-time validation. Free, secure, and browser-based processing."
      />

      {!loaded ? (
        <JwtParserSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* JWT Input */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      JWT Token
                    </Label>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleSampleJWT}
                    >
                      Load Sample JWT
                    </Button>
                  </div>
                  <Textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Paste your JWT token here...

Example format: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                    className="h-24 font-mono text-sm resize-none"
                  />
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {input.length} characters
                    </div>
                    <Button onClick={handleClear} variant="outline" size="sm">
                      Clear
                    </Button>
                  </div>
                </div>

                {/* Error Display */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                    <span className="font-medium">Error:</span> {error}
                  </div>
                )}

                {/* Decoded Sections */}
                {(header || payload || signature) && !error && (
                  <div className="space-y-6">
                    <div className="h-px bg-slate-200 dark:bg-slate-700"></div>

                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Decoded Header
                        </Label>
                        {header && <CopyButton text={header} size="sm" />}
                      </div>
                      <Textarea
                        value={header}
                        readOnly
                        placeholder="Header will appear here..."
                        className="h-32 font-mono text-sm bg-slate-50 dark:bg-slate-800 resize-none"
                      />
                    </div>

                    {/* Payload */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Decoded Payload
                        </Label>
                        {payload && <CopyButton text={payload} size="sm" />}
                      </div>
                      <Textarea
                        value={payload}
                        readOnly
                        placeholder="Payload will appear here..."
                        className="h-32 font-mono text-sm bg-slate-50 dark:bg-slate-800 resize-none"
                      />
                    </div>

                    {/* Signature */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Signature
                        </Label>
                        {signature && <CopyButton text={signature} size="sm" />}
                      </div>
                      <Textarea
                        value={signature}
                        readOnly
                        placeholder="Signature will appear here..."
                        className="h-16 font-mono text-sm bg-slate-50 dark:bg-slate-800 resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Info Banner */}
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    🔒 All parsing happens locally in your browser. Your JWT
                    tokens never leave your device.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* About JWT Tokens */}
            <Card>
              <CardHeader>
                <CardTitle>About JSON Web Tokens (JWT)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that
                    defines a compact and self-contained way for securely
                    transmitting information between parties as a JSON object.
                    This information can be verified and trusted because it is
                    digitally signed.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        JWT Structure
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Header:</strong> Contains metadata about the
                            token, including the signing algorithm
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Payload:</strong> Contains the claims -
                            statements about an entity and additional data
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Signature:</strong> Used to verify the token
                            hasn't been tampered with
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Compact and URL-safe format</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Self-contained with all necessary information
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Cryptographically secure when properly signed
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Cross-platform and language-agnostic</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-400 mb-2">
                      // JWT Format Example
                    </div>
                    <div className="text-slate-800 dark:text-slate-200">
                      <span className="text-red-600 dark:text-red-400">
                        header
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        .
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        payload
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">
                        .
                      </span>
                      <span className="text-blue-600 dark:text-blue-400">
                        signature
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* JWT Security Best Practices */}
            <Card>
              <CardHeader>
                <CardTitle>JWT Security Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    While JWTs provide a secure way to transmit information,
                    proper implementation is crucial for maintaining security.
                    Here are essential best practices for working with JWT
                    tokens:
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Token Management
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>
                            Use strong signing algorithms (RS256, ES256)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>
                            Set appropriate expiration times (short-lived
                            tokens)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Implement token refresh mechanisms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Store tokens securely (httpOnly cookies)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>Validate all claims on the server-side</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Security Considerations
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">⚠</span>
                          <span>
                            Never store passwords or sensitive data in payload
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">⚠</span>
                          <span>Always use HTTPS for token transmission</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">⚠</span>
                          <span>
                            Avoid storing tokens in localStorage (XSS risk)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">⚠</span>
                          <span>Implement proper token revocation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-500 mr-2">⚠</span>
                          <span>Regularly rotate signing keys</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Standard JWT Claims
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <ul className="space-y-1">
                          <li>
                            <code className="text-blue-600 dark:text-blue-400">
                              iss
                            </code>{" "}
                            - Issuer
                          </li>
                          <li>
                            <code className="text-blue-600 dark:text-blue-400">
                              sub
                            </code>{" "}
                            - Subject
                          </li>
                          <li>
                            <code className="text-blue-600 dark:text-blue-400">
                              aud
                            </code>{" "}
                            - Audience
                          </li>
                          <li>
                            <code className="text-blue-600 dark:text-blue-400">
                              exp
                            </code>{" "}
                            - Expiration Time
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-1">
                          <li>
                            <code className="text-blue-600 dark:text-blue-400">
                              nbf
                            </code>{" "}
                            - Not Before
                          </li>
                          <li>
                            <code className="text-blue-600 dark:text-blue-400">
                              iat
                            </code>{" "}
                            - Issued At
                          </li>
                          <li>
                            <code className="text-blue-600 dark:text-blue-400">
                              jti
                            </code>{" "}
                            - JWT ID
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: What is JWT? JSON Web Token Explained"
              description="This video gives a simple, clear explanation of what a JSON Web Token (JWT) is, how it works, and why it's used for authentication."
              videoUrl="https://www.youtube.com/embed/p_sDlCyzUFU"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default JwtParser;
