import React, { useState, useEffect, useMemo } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ChmodCalculatorSkeleton from "./_ChmodCalculatorSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Terminal, Shield, User, Users, Globe, RefreshCw } from "lucide-react";
import ToolVideo from "@/components/tool/ToolVideo";

// Types for chmod calculator
type Scope = "read" | "write" | "execute";
type Group = "owner" | "group" | "public";

interface GroupPermissions {
  read: boolean;
  write: boolean;
  execute: boolean;
}

interface Permissions {
  owner: GroupPermissions;
  group: GroupPermissions;
  public: GroupPermissions;
}

// Permission calculation functions
const computeChmodOctalRepresentation = (permissions: Permissions): string => {
  const permissionValue = { read: 4, write: 2, execute: 1 };

  const getGroupPermissionValue = (permission: GroupPermissions) =>
    Object.entries(permission).reduce(
      (acc, [key, isPermSet]) =>
        acc + (isPermSet ? permissionValue[key as Scope] : 0),
      0
    );

  return [
    getGroupPermissionValue(permissions.owner),
    getGroupPermissionValue(permissions.group),
    getGroupPermissionValue(permissions.public),
  ].join("");
};

const computeChmodSymbolicRepresentation = (
  permissions: Permissions
): string => {
  const permissionValue = { read: "r", write: "w", execute: "x" };

  const getGroupPermissionValue = (permission: GroupPermissions) =>
    Object.entries(permission).reduce(
      (acc, [key, isPermSet]) =>
        acc + (isPermSet ? permissionValue[key as Scope] : "-"),
      ""
    );

  return [
    getGroupPermissionValue(permissions.owner),
    getGroupPermissionValue(permissions.group),
    getGroupPermissionValue(permissions.public),
  ].join("");
};

// Parse octal input to permissions
const parseOctalToPermissions = (octal: string): Permissions | null => {
  if (!/^[0-7]{3}$/.test(octal)) return null;

  const digits = octal.split("").map(Number);
  const groups: Group[] = ["owner", "group", "public"];

  const permissions: Permissions = {
    owner: { read: false, write: false, execute: false },
    group: { read: false, write: false, execute: false },
    public: { read: false, write: false, execute: false },
  };

  digits.forEach((digit, index) => {
    const group = groups[index];
    permissions[group].read = (digit & 4) !== 0;
    permissions[group].write = (digit & 2) !== 0;
    permissions[group].execute = (digit & 1) !== 0;
  });

  return permissions;
};

const ChmodCalculator: React.FC = () => {
  const [permissions, setPermissions] = useState<Permissions>({
    owner: { read: true, write: true, execute: false },
    group: { read: true, write: false, execute: false },
    public: { read: true, write: false, execute: false },
  });

  const [octalInput, setOctalInput] = useState("644");
  const [filename, setFilename] = useState("file.txt");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Computed values
  const octal = useMemo(
    () => computeChmodOctalRepresentation(permissions),
    [permissions]
  );
  const symbolic = useMemo(
    () => computeChmodSymbolicRepresentation(permissions),
    [permissions]
  );
  const chmodCommand = useMemo(
    () => `chmod ${octal} ${filename}`,
    [octal, filename]
  );

  // Update permissions when checkbox changes
  const updatePermission = (group: Group, scope: Scope, checked: boolean) => {
    setPermissions((prev) => ({
      ...prev,
      [group]: {
        ...prev[group],
        [scope]: checked,
      },
    }));
  };

  // Handle octal input change
  const handleOctalInputChange = (value: string) => {
    setOctalInput(value);
    const parsedPermissions = parseOctalToPermissions(value);
    if (parsedPermissions) {
      setPermissions(parsedPermissions);
    }
  };

  // Sync octal input with calculated octal
  useEffect(() => {
    setOctalInput(octal);
  }, [octal]);

  const handleReset = () => {
    setPermissions({
      owner: { read: true, write: true, execute: false },
      group: { read: true, write: false, execute: false },
      public: { read: true, write: false, execute: false },
    });
    setFilename("file.txt");
    toast.success("Reset to default permissions!");
  };

  const handlePresetClick = (preset: Permissions, description: string) => {
    setPermissions(preset);
    toast.success(`Applied ${description} permissions!`);
  };

  // Common permission presets
  const presets = [
    {
      name: "644",
      description: "Read/Write for owner, Read for group and public",
      permissions: {
        owner: { read: true, write: true, execute: false },
        group: { read: true, write: false, execute: false },
        public: { read: true, write: false, execute: false },
      },
    },
    {
      name: "755",
      description: "Full for owner, Read/Execute for group and public",
      permissions: {
        owner: { read: true, write: true, execute: true },
        group: { read: true, write: false, execute: true },
        public: { read: true, write: false, execute: true },
      },
    },
    {
      name: "600",
      description: "Read/Write for owner only",
      permissions: {
        owner: { read: true, write: true, execute: false },
        group: { read: false, write: false, execute: false },
        public: { read: false, write: false, execute: false },
      },
    },
    {
      name: "700",
      description: "Full permissions for owner only",
      permissions: {
        owner: { read: true, write: true, execute: true },
        group: { read: false, write: false, execute: false },
        public: { read: false, write: false, execute: false },
      },
    },
  ];

  const scopes: { scope: Scope; title: string; description: string }[] = [
    { scope: "read", title: "Read (4)", description: "Can read file contents" },
    { scope: "write", title: "Write (2)", description: "Can modify file" },
    {
      scope: "execute",
      title: "Execute (1)",
      description: "Can run as program",
    },
  ];

  const groups: {
    group: Group;
    title: string;
    icon: React.ReactNode;
    description: string;
  }[] = [
    {
      group: "owner",
      title: "Owner (u)",
      icon: <User className="h-4 w-4" />,
      description: "File owner",
    },
    {
      group: "group",
      title: "Group (g)",
      icon: <Users className="h-4 w-4" />,
      description: "File group",
    },
    {
      group: "public",
      title: "Others (o)",
      icon: <Globe className="h-4 w-4" />,
      description: "Everyone else",
    },
  ];

  return (
    <ToolContainer>
      <ToolHead
        name="Chmod Calculator"
        description="Calculate Unix file permissions instantly with our free online chmod calculator. Convert between octal, symbolic, and human-readable formats with real-time permission preview and command generation."
      />

      {!loaded ? (
        <ChmodCalculatorSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Permission Matrix */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="font-medium">
                      File Permissions Matrix
                    </Label>
                    <Button onClick={handleReset} variant="outline" size="sm">
                      <RefreshCw className="h-4 w-4 mr-1" />
                      Reset
                    </Button>
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden md:block">
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-slate-100 dark:bg-slate-800">
                          <tr>
                            <th className="text-left p-3 font-medium">
                              Permission
                            </th>
                            {groups.map(({ group, title, icon }) => (
                              <th
                                key={group}
                                className="text-center p-3 font-medium"
                              >
                                <div className="flex items-center justify-center gap-2">
                                  {icon}
                                  {title}
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {scopes.map(({ scope, title, description }) => (
                            <tr key={scope} className="border-t">
                              <td className="p-3">
                                <div>
                                  <div className="font-medium">{title}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {description}
                                  </div>
                                </div>
                              </td>
                              {groups.map(({ group }) => (
                                <td key={group} className="text-center p-3">
                                  <Checkbox
                                    checked={permissions[group][scope]}
                                    onCheckedChange={(checked) =>
                                      updatePermission(
                                        group,
                                        scope,
                                        checked as boolean
                                      )
                                    }
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden space-y-4">
                    {groups.map(({ group, title, icon, description }) => (
                      <Card key={group}>
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center gap-2 text-base">
                            {icon}
                            {title}
                            <Badge variant="outline" className="text-xs">
                              {description}
                            </Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="grid grid-cols-3 gap-4">
                            {scopes.map(({ scope, title }) => (
                              <div key={scope} className="text-center">
                                <Checkbox
                                  checked={permissions[group][scope]}
                                  onCheckedChange={(checked) =>
                                    updatePermission(
                                      group,
                                      scope,
                                      checked as boolean
                                    )
                                  }
                                />
                                <div className="text-xs mt-1">{title}</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-4 pt-4 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Octal Representation */}
                    <div className="text-center">
                      <Label className="font-medium">Octal Notation</Label>
                      <div className="text-4xl font-mono text-green-600 dark:text-green-400 my-3">
                        {octal}
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm">
                          Enter Octal (e.g. 755)
                        </Label>
                        <Input
                          value={octalInput}
                          onChange={(e) =>
                            handleOctalInputChange(e.target.value)
                          }
                          placeholder="644"
                          className="text-center font-mono"
                          maxLength={3}
                        />
                      </div>
                    </div>

                    {/* Symbolic Representation */}
                    <div className="text-center">
                      <Label className="font-medium">Symbolic Notation</Label>
                      <div className="text-4xl font-mono text-blue-600 dark:text-blue-400 my-3">
                        {symbolic}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>Owner: {symbolic.slice(0, 3)}</div>
                        <div>Group: {symbolic.slice(3, 6)}</div>
                        <div>Others: {symbolic.slice(6, 9)}</div>
                      </div>
                    </div>
                  </div>

                  {/* Command Generation */}
                  <div className="space-y-2">
                    <Label>Chmod Command</Label>
                    <div className="flex gap-2">
                      <Input
                        value={filename}
                        onChange={(e) => setFilename(e.target.value)}
                        placeholder="filename"
                        className="flex-1"
                      />
                      <CopyButton text={chmodCommand} />
                    </div>
                    <Textarea
                      value={chmodCommand}
                      readOnly
                      className="font-mono bg-slate-100 dark:bg-slate-800"
                      rows={1}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>About Unix File Permissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Unix file permissions control who can read, write, and
                    execute files and directories. Understanding chmod is
                    essential for system administration, security, and proper
                    file management in Unix-like operating systems including
                    Linux and macOS.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Permission Types
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Read (r, 4):</strong> View file contents or
                            list directory contents
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Write (w, 2):</strong> Modify file contents
                            or add/remove files in directory
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Execute (x, 1):</strong> Run file as program
                            or access directory
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        User Groups
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Owner (u):</strong> The user who owns the
                            file
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Group (g):</strong> Users in the file's
                            group
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Others (o):</strong> All other users on the
                            system
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Permission Notation Examples
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
                        <div>
                          <strong>755:</strong> rwxr-xr-x
                          <br />
                          <span className="text-xs">
                            Full access for owner, read+execute for others
                          </span>
                        </div>
                        <div>
                          <strong>644:</strong> rw-r--r--
                          <br />
                          <span className="text-xs">
                            Read+write for owner, read-only for others
                          </span>
                        </div>
                        <div>
                          <strong>600:</strong> rw-------
                          <br />
                          <span className="text-xs">
                            Read+write for owner only
                          </span>
                        </div>
                        <div>
                          <strong>777:</strong> rwxrwxrwx
                          <br />
                          <span className="text-xs">
                            Full permissions for everyone (dangerous!)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Chmod Commands & Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Proper file permissions are crucial for system security.
                    Here are common chmod patterns and security best practices
                    to help you manage file permissions effectively.
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Web Files
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        <div>chmod 644 *.html *.css *.js</div>
                        <div>chmod 755 cgi-bin/</div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Standard permissions for web content files and
                        executable directories
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Scripts & Executables
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        <div>chmod 755 script.sh</div>
                        <div>chmod +x program</div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Make scripts and programs executable while maintaining
                        security
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Sensitive Files
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        <div>chmod 600 ~/.ssh/id_rsa</div>
                        <div>chmod 700 ~/.ssh/</div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Restrict access to private keys and sensitive
                        directories
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-slate-900 dark:text-slate-100">
                        Batch Operations
                      </h5>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded p-3 font-mono text-sm">
                        <div>find /path -type f -exec chmod 644 {} \;</div>
                        <div>find /path -type d -exec chmod 755 {} \;</div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Set permissions recursively for files and directories
                        separately
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>⚠️ Security Tip:</strong> Never use 777
                      permissions unless absolutely necessary. Start with
                      restrictive permissions (600/700) and add only what's
                      needed. Use
                      <code className="mx-1 px-1 py-0.5 bg-amber-100 dark:bg-amber-900 rounded">
                        ls -la
                      </code>
                      to check current permissions before making changes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: How to Calculate Magic numbers for chmod in Linux?"
              description="This video simplifies the process of calculating chmod permissions by explaining the 'magic numbers' and their use in Linux file management."
              videoUrl="https://www.youtube.com/embed/lynhdqu74y0"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default ChmodCalculator;
