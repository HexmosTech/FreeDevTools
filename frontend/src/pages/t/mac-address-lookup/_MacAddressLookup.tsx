import React, { useState, useEffect } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import MacAddressLookupSkeleton from "./_MacAddressLookupSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ToolVideo from "@/components/tool/ToolVideo";
import AdBanner from "../../../components/banner/AdBanner";

// Real-time MAC address vendor lookup using public APIs
interface LookupResult {
  isValid: boolean;
  vendor?: string;
  organization?: string;
  country?: string;
  oui?: string;
  error?: string;
  isLoading?: boolean;
}

// Fallback database for offline/demo purposes
const FALLBACK_DATABASE: Record<
  string,
  { vendor: string; organization: string; country?: string }
> = {
  "00:50:56": {
    vendor: "VMware, Inc.",
    organization: "VMware Virtual Platform",
    country: "US",
  },
  "08:00:27": {
    vendor: "PCS Systemtechnik GmbH",
    organization: "VirtualBox",
    country: "DE",
  },
  "52:54:00": {
    vendor: "Red Hat, Inc.",
    organization: "QEMU Virtual Machine",
    country: "US",
  },
  "00:0C:29": {
    vendor: "VMware, Inc.",
    organization: "VMware ESX Server",
    country: "US",
  },
  "00:1B:21": {
    vendor: "Intel Corporation",
    organization: "Intel Wireless",
    country: "US",
  },
  "3C:07:54": {
    vendor: "Liteon Technology Corporation",
    organization: "Liteon WiFi",
    country: "TW",
  },
  "B8:27:EB": {
    vendor: "Raspberry Pi Foundation",
    organization: "Raspberry Pi",
    country: "GB",
  },
  "DC:A6:32": {
    vendor: "Raspberry Pi Trading Ltd",
    organization: "Raspberry Pi 4",
    country: "GB",
  },
  "00:16:EA": {
    vendor: "Intel Corporation",
    organization: "Intel Ethernet",
    country: "US",
  },
  "00:90:7F": {
    vendor: "Logitech, Inc.",
    organization: "Logitech Mouse/Keyboard",
    country: "CH",
  },
  "AC:DE:48": {
    vendor: "Apple, Inc.",
    organization: "Apple iPhone/iPad",
    country: "US",
  },
  "F0:18:98": {
    vendor: "Apple, Inc.",
    organization: "Apple MacBook",
    country: "US",
  },
  "00:1A:92": {
    vendor: "ASUSTek Computer Inc.",
    organization: "ASUS Router",
    country: "TW",
  },
  "00:24:D7": {
    vendor: "Espressif Inc.",
    organization: "ESP32/ESP8266",
    country: "CN",
  },
};

function normalizeMacAddress(mac: string): string {
  // Remove all separators and convert to uppercase
  return mac.replace(/[^a-fA-F0-9]/g, "").toUpperCase();
}

function formatMacAddress(mac: string, separator: string = ":"): string {
  const normalized = normalizeMacAddress(mac);
  const chunks = [];
  for (let i = 0; i < normalized.length; i += 2) {
    chunks.push(normalized.slice(i, i + 2));
  }
  return chunks.join(separator);
}

function validateMacAddress(mac: string): boolean {
  const normalized = normalizeMacAddress(mac);
  return /^[A-F0-9]{6,12}$/.test(normalized);
}

async function lookupMacAddressOnline(mac: string): Promise<LookupResult> {
  const normalized = normalizeMacAddress(mac);

  if (normalized.length < 6) {
    return {
      isValid: false,
      error:
        "MAC address must be at least 6 characters (3 octets) for OUI lookup",
    };
  }

  if (!/^[A-F0-9]+$/.test(normalized)) {
    return {
      isValid: false,
      error: "Invalid MAC address format. Use hexadecimal characters only.",
    };
  }

  // Extract OUI (first 3 octets)
  const oui = `${normalized.slice(0, 2)}:${normalized.slice(2, 4)}:${normalized.slice(4, 6)}`;

  try {
    // Try MacVendors.com API first (free, no API key required)
    const response = await fetch(`https://api.macvendors.com/${oui}`, {
      method: "GET",
      headers: {
        Accept: "text/plain",
      },
    });

    if (response.ok) {
      const vendor = await response.text();
      return {
        isValid: true,
        vendor: vendor.trim(),
        organization: vendor.trim(),
        oui: oui,
      };
    } else if (response.status === 404) {
      // Vendor not found, try fallback database
      const fallbackInfo = FALLBACK_DATABASE[oui];
      if (fallbackInfo) {
        return {
          isValid: true,
          vendor: fallbackInfo.vendor,
          organization: fallbackInfo.organization,
          country: fallbackInfo.country,
          oui: oui,
        };
      }

      return {
        isValid: true,
        oui: oui,
        error:
          "Vendor not found in database. This might be a private or unregistered OUI.",
      };
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    // Fallback to local database if API fails
    console.warn("Online lookup failed, using fallback database:", error);

    const fallbackInfo = FALLBACK_DATABASE[oui];
    if (fallbackInfo) {
      return {
        isValid: true,
        vendor: fallbackInfo.vendor + " (offline)",
        organization: fallbackInfo.organization,
        country: fallbackInfo.country,
        oui: oui,
      };
    }

    return {
      isValid: true,
      oui: oui,
      error:
        "Unable to connect to vendor database. Please check your internet connection.",
    };
  }
}

const MacAddressLookup: React.FC = () => {
  const [macAddress, setMacAddress] = useState("");
  const [lookupResult, setLookupResult] = useState<LookupResult | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLookup = async () => {
    if (!macAddress.trim()) {
      toast.error("Please enter a MAC address");
      return;
    }

    setLookupResult({ isValid: true, isLoading: true });
    toast.info("Looking up vendor information...");

    try {
      const result = await lookupMacAddressOnline(macAddress.trim());
      setLookupResult(result);

      if (result.isValid && result.vendor) {
        toast.success("Vendor information found!");
      } else if (result.isValid && result.error) {
        toast.info("MAC address is valid but vendor not found");
      } else {
        toast.error(result.error || "Invalid MAC address");
      }
    } catch (err) {
      toast.error("An error occurred during lookup");
      setLookupResult({
        isValid: false,
        error: "Lookup failed",
      });
    }
  };

  const handleClear = () => {
    setMacAddress("");
    setLookupResult(null);
  };

  const handleExampleMac = async (mac: string) => {
    setMacAddress(mac);
    setLookupResult({ isValid: true, isLoading: true });

    try {
      const result = await lookupMacAddressOnline(mac);
      setLookupResult(result);
    } catch (err) {
      setLookupResult({
        isValid: false,
        error: "Lookup failed",
      });
    }
  };

  return (
    <ToolContainer>
            <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="MAC Address Lookup"
        description="Lookup MAC address vendor information instantly with our free online MAC address lookup tool. Identify device manufacturer, organization, and network details from MAC addresses."
      />

      {!loaded ? (
        <MacAddressLookupSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardHeader>
                <CardTitle>MAC Address Lookup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>MAC Address</Label>
                    <Input
                      value={macAddress}
                      onChange={(e) => setMacAddress(e.target.value)}
                      placeholder="e.g. 00:50:56:XX:XX:XX or 005056XXXXXX"
                      className="font-mono"
                    />
                    <div className="text-xs text-muted-foreground">
                      Supports formats: 00:50:56:XX:XX:XX, 00-50-56-XX-XX-XX,
                      0050.56XX.XXXX, 005056XXXXXX
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={handleLookup}
                      className="flex-1"
                      disabled={
                        !macAddress.trim() || (lookupResult?.isLoading ?? false)
                      }
                    >
                      {lookupResult?.isLoading
                        ? "Looking up..."
                        : "Lookup Vendor"}
                    </Button>
                    <Button onClick={handleClear} variant="outline">
                      Clear
                    </Button>
                  </div>
                </div>

                {/* Example MAC Addresses */}
                <div className="space-y-3">
                  <Label className="font-medium">Try Examples</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {Object.entries(FALLBACK_DATABASE)
                      .slice(0, 6)
                      .map(([oui, info]) => (
                        <button
                          key={oui}
                          onClick={() => handleExampleMac(oui + ":XX:XX:XX")}
                          className="text-left p-2 border rounded-lg hover:bg-muted/50 transition-colors text-sm"
                        >
                          <div className="font-mono text-xs text-muted-foreground">
                            {oui}:XX:XX:XX
                          </div>
                          <div className="font-medium">{info.vendor}</div>
                        </button>
                      ))}
                  </div>
                </div>

                {/* Results Section */}
                {lookupResult && (
                  <div className="space-y-4 pt-4 border-t">
                    {lookupResult.isLoading ? (
                      <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center justify-center mb-2">
                          <Badge variant="outline" className="border-blue-600">
                            Looking up...
                          </Badge>
                        </div>
                        <div className="text-blue-800 dark:text-blue-200">
                          Searching vendor database...
                        </div>
                      </div>
                    ) : lookupResult.isValid && lookupResult.vendor ? (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Badge variant="default" className="bg-green-600">
                            Vendor Found
                          </Badge>
                          <span className="font-mono text-sm text-muted-foreground">
                            OUI: {lookupResult.oui}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="p-3 border rounded-lg">
                              <div className="text-sm text-muted-foreground">
                                Vendor
                              </div>
                              <div className="font-medium">
                                {lookupResult.vendor}
                              </div>
                            </div>
                            <div className="p-3 border rounded-lg">
                              <div className="text-sm text-muted-foreground">
                                Organization
                              </div>
                              <div className="font-medium">
                                {lookupResult.organization}
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            {lookupResult.country && (
                              <div className="p-3 border rounded-lg">
                                <div className="text-sm text-muted-foreground">
                                  Country
                                </div>
                                <div className="font-medium">
                                  {lookupResult.country}
                                </div>
                              </div>
                            )}
                            <div className="p-3 border rounded-lg">
                              <div className="text-sm text-muted-foreground">
                                Formatted MAC
                              </div>
                              <div className="font-mono font-medium">
                                {formatMacAddress(macAddress)}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <CopyButton
                            text={`Vendor: ${lookupResult.vendor}\nOrganization: ${lookupResult.organization}\nOUI: ${lookupResult.oui}${lookupResult.country ? `\nCountry: ${lookupResult.country}` : ""}`}
                          />
                        </div>
                      </div>
                    ) : lookupResult.isValid && lookupResult.error ? (
                      <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-center justify-center mb-2">
                          <Badge
                            variant="outline"
                            className="border-yellow-600"
                          >
                            Valid MAC - Vendor Unknown
                          </Badge>
                        </div>
                        <div className="text-yellow-800 dark:text-yellow-200">
                          {lookupResult.error}
                        </div>
                        {lookupResult.oui && (
                          <div className="mt-2 text-sm text-muted-foreground">
                            OUI: {lookupResult.oui}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="flex items-center justify-center mb-2">
                          <Badge variant="destructive">
                            Invalid MAC Address
                          </Badge>
                        </div>
                        <div className="text-red-800 dark:text-red-200">
                          {lookupResult.error}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Understanding MAC Address Lookup</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    MAC address lookup allows you to identify the manufacturer
                    and organization behind a network device by analyzing its
                    Media Access Control (MAC) address. This tool uses the
                    Organizationally Unique Identifier (OUI) - the first three
                    octets of a MAC address - to determine the vendor
                    information.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        How It Works
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>OUI Extraction:</strong> The first 24 bits
                            (3 octets) identify the manufacturer
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Database Lookup:</strong> Cross-reference
                            with IEEE OUI registry
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Vendor Info:</strong> Returns manufacturer
                            name and organization details
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
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Network Troubleshooting:</strong> Identify
                            unknown devices on your network
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Security Analysis:</strong> Detect
                            unauthorized or suspicious devices
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Asset Management:</strong> Catalog network
                            equipment by manufacturer
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      MAC Address Structure
                    </h5>
                    <div className="bg-slate-800 dark:bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
                      <div className="text-slate-300">
                        {`00:50:56:XX:XX:XX
                        ┌──────┐ ┌──────┐
                        │ OUI  │ │ NIC  │
                        │(Org) │ │(Dev) │
                        └──────┘ └──────┘
                        24 bits  24 bits`}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      The first 24 bits (OUI) identify the organization, while
                      the last 24 bits are assigned by the manufacturer to
                      individual devices.
                    </div>
                  </div>

                  <ToolVideo
                    title="Learn More: MAC Address & Network Identification"
                    description="This video explains MAC addresses, how they work in networking, and how vendor lookup helps identify network devices."
                    videoUrl="https://www.youtube.com/embed/UrG7RTWIJak"
                  />
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default MacAddressLookup;
