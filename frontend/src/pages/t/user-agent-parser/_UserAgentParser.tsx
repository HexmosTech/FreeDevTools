import React, { useState, useEffect, useMemo } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import UserAgentParserSkeleton from "./_UserAgentParserSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Smartphone,
  Cpu,
  Globe,
  XIcon,
  RefreshCw,
  Info,
  Tablet,
  Server,
} from "lucide-react";
import ToolVideo from "@/components/tool/ToolVideo";
import AdBanner from "../../../components/banner/AdBanner";

// User Agent parsing logic based on reference implementation
interface UAParserResult {
  ua: string;
  browser: {
    name?: string;
    version?: string;
    major?: string;
  };
  engine: {
    name?: string;
    version?: string;
  };
  os: {
    name?: string;
    version?: string;
  };
  device: {
    model?: string;
    type?: string;
    vendor?: string;
  };
  cpu: {
    architecture?: string;
  };
}

// Simple user agent parser without external dependencies
const parseUserAgent = (userAgent: string): UAParserResult => {
  if (!userAgent.trim()) {
    return {
      ua: "",
      browser: {},
      engine: {},
      os: {},
      device: {},
      cpu: {},
    };
  }

  const ua = userAgent.trim();
  const result: UAParserResult = {
    ua,
    browser: {},
    engine: {},
    os: {},
    device: {},
    cpu: {},
  };

  // Browser detection
  if (ua.includes("Firefox")) {
    result.browser.name = "Firefox";
    const match = ua.match(/Firefox\/([0-9.]+)/);
    if (match) result.browser.version = match[1];
  } else if (ua.includes("Chrome")) {
    result.browser.name = "Chrome";
    const match = ua.match(/Chrome\/([0-9.]+)/);
    if (match) result.browser.version = match[1];
  } else if (ua.includes("Safari") && !ua.includes("Chrome")) {
    result.browser.name = "Safari";
    const match = ua.match(/Version\/([0-9.]+)/);
    if (match) result.browser.version = match[1];
  } else if (ua.includes("Edge")) {
    result.browser.name = "Edge";
    const match = ua.match(/Edg\/([0-9.]+)/);
    if (match) result.browser.version = match[1];
  } else if (ua.includes("Opera") || ua.includes("OPR")) {
    result.browser.name = "Opera";
    const match = ua.match(/(?:Opera|OPR)\/([0-9.]+)/);
    if (match) result.browser.version = match[1];
  }

  // Engine detection
  if (ua.includes("Gecko")) {
    result.engine.name = "Gecko";
    const match = ua.match(/Gecko\/([0-9.]+)/);
    if (match) result.engine.version = match[1];
  } else if (ua.includes("WebKit")) {
    result.engine.name = "WebKit";
    const match = ua.match(/WebKit\/([0-9.]+)/);
    if (match) result.engine.version = match[1];
  } else if (ua.includes("Blink")) {
    result.engine.name = "Blink";
  }

  // OS detection
  if (ua.includes("Windows NT")) {
    result.os.name = "Windows";
    const match = ua.match(/Windows NT ([0-9.]+)/);
    if (match) {
      const version = match[1];
      if (version === "10.0") result.os.version = "10";
      else if (version === "6.3") result.os.version = "8.1";
      else if (version === "6.2") result.os.version = "8";
      else if (version === "6.1") result.os.version = "7";
      else result.os.version = version;
    }
  } else if (ua.includes("Mac OS X")) {
    result.os.name = "macOS";
    const match = ua.match(/Mac OS X ([0-9_]+)/);
    if (match) result.os.version = match[1].replace(/_/g, ".");
  } else if (ua.includes("Linux")) {
    result.os.name = "Linux";
  } else if (ua.includes("Android")) {
    result.os.name = "Android";
    const match = ua.match(/Android ([0-9.]+)/);
    if (match) result.os.version = match[1];
  } else if (ua.includes("iOS") || ua.includes("iPhone OS")) {
    result.os.name = "iOS";
    const match = ua.match(/OS ([0-9_]+)/);
    if (match) result.os.version = match[1].replace(/_/g, ".");
  }

  // Device detection
  if (ua.includes("iPhone")) {
    result.device.type = "mobile";
    result.device.vendor = "Apple";
    result.device.model = "iPhone";
  } else if (ua.includes("iPad")) {
    result.device.type = "tablet";
    result.device.vendor = "Apple";
    result.device.model = "iPad";
  } else if (ua.includes("Android")) {
    if (ua.includes("Mobile")) {
      result.device.type = "mobile";
    } else {
      result.device.type = "tablet";
    }
  } else if (ua.includes("Mobile")) {
    result.device.type = "mobile";
  }

  // CPU architecture detection
  if (ua.includes("x86_64") || ua.includes("Win64") || ua.includes("WOW64")) {
    result.cpu.architecture = "amd64";
  } else if (ua.includes("arm64") || ua.includes("aarch64")) {
    result.cpu.architecture = "arm64";
  } else if (ua.includes("arm")) {
    result.cpu.architecture = "arm";
  } else if (ua.includes("x86") || ua.includes("i386")) {
    result.cpu.architecture = "ia32";
  }

  return result;
};

interface UserAgentSection {
  heading: string;
  icon: React.ReactNode;
  content: {
    label: string;
    getValue: (result: UAParserResult) => string | undefined;
    undefinedFallback: string;
  }[];
}

const UserAgentParser: React.FC = () => {
  const [userAgent, setUserAgent] = useState(() => {
    // Check if we're in browser environment
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      return navigator.userAgent;
    }
    return "";
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Memoized parsing result
  const userAgentInfo = useMemo(() => {
    try {
      return parseUserAgent(userAgent);
    } catch (error) {
      return {
        ua: "",
        browser: {},
        engine: {},
        os: {},
        device: {},
        cpu: {},
      };
    }
  }, [userAgent]);

  const handleClear = () => {
    setUserAgent("");
  };

  const handleLoadCurrent = () => {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      setUserAgent(navigator.userAgent);
      toast.success("Current browser user agent loaded!");
    } else {
      toast.error("Navigator not available in this environment");
    }
  };

  const handleLoadSample = () => {
    const samples = [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
      "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
      "Mozilla/5.0 (Linux; Android 13; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
    ];
    const randomSample = samples[Math.floor(Math.random() * samples.length)];
    setUserAgent(randomSample);
    toast.success("Sample user agent loaded!");
  };

  const getDeviceIcon = (deviceType?: string) => {
    switch (deviceType) {
      case "mobile":
        return <Smartphone className="h-4 w-4" />;
      case "tablet":
        return <Tablet className="h-4 w-4" />;
      case "desktop":
        return <Monitor className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const sections: UserAgentSection[] = [
    {
      heading: "Browser",
      icon: <Globe className="h-4 w-4" />,
      content: [
        {
          label: "Name",
          getValue: (result) => result?.browser.name,
          undefinedFallback: "Unknown browser",
        },
        {
          label: "Version",
          getValue: (result) => result?.browser.version,
          undefinedFallback: "Unknown version",
        },
      ],
    },
    {
      heading: "Engine",
      icon: <Server className="h-4 w-4" />,
      content: [
        {
          label: "Name",
          getValue: (result) => result?.engine.name,
          undefinedFallback: "Unknown engine",
        },
        {
          label: "Version",
          getValue: (result) => result?.engine.version,
          undefinedFallback: "Unknown version",
        },
      ],
    },
    {
      heading: "Operating System",
      icon: <Monitor className="h-4 w-4" />,
      content: [
        {
          label: "Name",
          getValue: (result) => result?.os.name,
          undefinedFallback: "Unknown OS",
        },
        {
          label: "Version",
          getValue: (result) => result?.os.version,
          undefinedFallback: "Unknown version",
        },
      ],
    },
    {
      heading: "Device",
      icon: getDeviceIcon(userAgentInfo.device.type),
      content: [
        {
          label: "Type",
          getValue: (result) => result?.device.type,
          undefinedFallback: "Unknown device type",
        },
        {
          label: "Vendor",
          getValue: (result) => result?.device.vendor,
          undefinedFallback: "Unknown vendor",
        },
        {
          label: "Model",
          getValue: (result) => result?.device.model,
          undefinedFallback: "Unknown model",
        },
      ],
    },
    {
      heading: "CPU",
      icon: <Cpu className="h-4 w-4" />,
      content: [
        {
          label: "Architecture",
          getValue: (result) => result?.cpu.architecture,
          undefinedFallback: "Unknown architecture",
        },
      ],
    },
  ];

  return (
    <ToolContainer>
            <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="User Agent Parser"
        description="Parse and analyze user agent strings instantly with our free online user agent parser. Extract browser, operating system, device, engine, and CPU architecture information with detailed breakdown and real-time analysis."
      />

      {!loaded ? (
        <UserAgentParserSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Input Section */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>User Agent String</Label>
                    <Textarea
                      value={userAgent}
                      onChange={(e) => setUserAgent(e.target.value)}
                      placeholder="Enter a user agent string to analyze..."
                      className="font-mono min-h-[100px] resize-y"
                      rows={3}
                    />
                    <div className="text-xs text-muted-foreground">
                      Enter any user agent string to extract browser, OS,
                      device, and engine information
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      onClick={handleLoadCurrent}
                      variant="outline"
                      size="sm"
                    >
                      <RefreshCw className="h-4 w-4 mr-1" />
                      Use Current Browser
                    </Button>
                    <Button
                      onClick={handleLoadSample}
                      variant="outline"
                      size="sm"
                    >
                      <Info className="h-4 w-4 mr-1" />
                      Load Sample
                    </Button>
                    <Button onClick={handleClear} variant="outline" size="sm">
                      <XIcon className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                    {userAgent && <CopyButton text={userAgent} />}
                  </div>
                </div>

                {/* Results Section */}
                {userAgent && (
                  <div className="space-y-4 pt-4 border-t">
                    <Label className="font-medium">Analysis Results</Label>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sections.map((section) => (
                        <Card key={section.heading}>
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base">
                              {section.icon}
                              {section.heading}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0 space-y-3">
                            {section.content.map((item) => {
                              const value =
                                item.getValue(userAgentInfo) ||
                                item.undefinedFallback;
                              const isUnknown =
                                value === item.undefinedFallback;

                              return (
                                <div key={item.label} className="space-y-1">
                                  <div className="text-sm font-medium text-muted-foreground">
                                    {item.label}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge
                                      variant={
                                        isUnknown ? "secondary" : "default"
                                      }
                                      className="font-mono text-xs"
                                    >
                                      {value}
                                    </Badge>
                                    {!isUnknown && (
                                      <CopyButton text={value} size="sm" />
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Info Banner */}
                <div className="p-3 bg-purple-50 text-center dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    💡 All parsing happens locally in your browser. User agent
                    strings never leave your device.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>About User Agent Strings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    User agent strings are text strings sent by web browsers and
                    other applications to identify themselves to web servers.
                    They contain information about the browser, operating
                    system, device capabilities, and rendering engine being
                    used.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        What Can Be Detected
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Browser:</strong> Name and version (Chrome,
                            Firefox, Safari, Edge)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Operating System:</strong> Platform and
                            version (Windows, macOS, Linux, iOS, Android)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Device Type:</strong> Mobile, tablet,
                            desktop, or other device categories
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Rendering Engine:</strong> WebKit, Gecko,
                            Blink, or Trident
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>CPU Architecture:</strong> x86, x64, ARM, or
                            other processor types
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Common Use Cases
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Web Analytics:</strong> Track visitor
                            browser and device statistics
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Feature Detection:</strong> Serve
                            appropriate content based on capabilities
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Responsive Design:</strong> Optimize layouts
                            for different devices
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Security:</strong> Detect potentially
                            malicious or automated traffic
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Debugging:</strong> Identify
                            browser-specific issues
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Example User Agent Breakdown
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="font-mono text-xs bg-slate-200 dark:bg-slate-800 p-2 rounded">
                        Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                        AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0
                        Safari/537.36
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                        <div>
                          <strong>Browser:</strong> Chrome 120.0.0.0
                        </div>
                        <div>
                          <strong>OS:</strong> Windows 10
                        </div>
                        <div>
                          <strong>Engine:</strong> WebKit (Blink)
                        </div>
                        <div>
                          <strong>Architecture:</strong> 64-bit
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Understanding User Agent Components</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    User agent strings follow specific patterns and contain
                    multiple components. Understanding these components helps in
                    parsing and utilizing the information effectively.
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Browser Identification
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        Chrome/120.0.0.0 Safari/537.36
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Most browsers include their name and version, often with
                        compatibility strings
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Operating System Info
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        (Windows NT 10.0; Win64; x64)
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Platform details including OS name, version, and
                        architecture
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Rendering Engine
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        AppleWebKit/537.36 (KHTML, like Gecko)
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Information about the rendering engine and its
                        capabilities
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Mobile Device Detection
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        (iPhone; CPU iPhone OS 17_0 like Mac OS X)
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Mobile user agents include device model and mobile OS
                        information
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      <strong>💡 Pro Tip:</strong> User agent strings can be
                      spoofed or modified, so they shouldn't be relied upon for
                      security purposes. Use feature detection rather than user
                      agent sniffing when possible. This tool is perfect for
                      analytics, debugging, and understanding your website
                      traffic.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: What Is User-Agent Parsing?"
              description="This video explains what a User-Agent string is, how it's parsed, and why it's a critical component for websites to identify browsers and devices."
              videoUrl="https://www.youtube.com/embed/tZ4ssSZCOio"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default UserAgentParser;
