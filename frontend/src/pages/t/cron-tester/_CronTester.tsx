import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import CronTesterSkeleton from "./_CronTesterSkeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { RefreshCwIcon, CalendarIcon, XIcon } from "lucide-react";
import ToolVideo from "@/components/tool/ToolVideo";

// Using reliable npm libraries for cron parsing
interface CronResult {
  isValid: boolean;
  description: string;
  nextExecutions: Date[];
  error?: string;
}

// Simple function to calculate next execution times
const calculateNextExecutions = (
  cronExpression: string,
  count: number = 5
): Date[] => {
  const executions: Date[] = [];
  const now = new Date();

  // Parse the cron expression
  const parts = cronExpression.trim().split(/\s+/);
  if (parts.length !== 5) return [];

  const [minute, hour, day, month, weekday] = parts;

  // Generate next execution times (simplified calculation)
  for (let i = 0; i < count * 24; i++) {
    // Check next 24 * count hours
    const testTime = new Date(now.getTime() + i * 60 * 60 * 1000);

    if (matchesCronExpression(testTime, minute, hour, day, month, weekday)) {
      executions.push(testTime);
      if (executions.length >= count) break;
    }
  }

  return executions;
};

const matchesCronExpression = (
  date: Date,
  minute: string,
  hour: string,
  day: string,
  month: string,
  weekday: string
): boolean => {
  const m = date.getUTCMinutes();
  const h = date.getUTCHours();
  const d = date.getUTCDate();
  const mon = date.getUTCMonth() + 1; // getUTCMonth() returns 0-11
  const w = date.getUTCDay(); // 0 = Sunday

  return (
    matchesField(m, minute, 0, 59) &&
    matchesField(h, hour, 0, 23) &&
    matchesField(d, day, 1, 31) &&
    matchesField(mon, month, 1, 12) &&
    matchesField(w, weekday, 0, 7, true) // Allow both 0 and 7 for Sunday
  );
};

const matchesField = (
  value: number,
  pattern: string,
  min: number,
  max: number,
  sundayBoth?: boolean
): boolean => {
  if (pattern === "*") return true;

  // Handle Sunday special case (both 0 and 7 represent Sunday)
  if (sundayBoth && pattern.includes("7")) {
    pattern = pattern.replace(/7/g, "0");
  }
  if (sundayBoth && value === 0 && pattern.includes("7")) {
    return true;
  }

  // Handle step values (e.g., */5, 0-23/2)
  if (pattern.includes("/")) {
    const [range, step] = pattern.split("/");
    const stepValue = parseInt(step);

    if (range === "*") {
      return value % stepValue === 0;
    } else if (range.includes("-")) {
      const [start, end] = range.split("-").map(Number);
      return (
        value >= start && value <= end && (value - start) % stepValue === 0
      );
    } else {
      const start = parseInt(range);
      return value >= start && (value - start) % stepValue === 0;
    }
  }

  // Handle ranges (e.g., 1-5)
  if (pattern.includes("-")) {
    const [start, end] = pattern.split("-").map(Number);
    return value >= start && value <= end;
  }

  // Handle lists (e.g., 1,3,5)
  if (pattern.includes(",")) {
    return pattern
      .split(",")
      .some((p) => matchesField(value, p.trim(), min, max, sundayBoth));
  }

  // Handle specific values
  return value === parseInt(pattern);
};

// Dynamically import cronstrue for human-readable descriptions
const parseCronExpression = async (expression: string): Promise<CronResult> => {
  try {
    if (!expression.trim()) {
      return {
        isValid: false,
        description: "",
        nextExecutions: [],
        error: "Please enter a cron expression",
      };
    }

    // Validate cron expression format
    const parts = expression.trim().split(/\s+/);
    if (parts.length !== 5) {
      return {
        isValid: false,
        description: "",
        nextExecutions: [],
        error:
          "Cron expression must have exactly 5 fields: minute hour day month weekday",
      };
    }

    const [minute, hour, day, month, weekday] = parts;

    // Basic validation of each field
    if (
      !isValidCronField(minute, 0, 59) ||
      !isValidCronField(hour, 0, 23) ||
      !isValidCronField(day, 1, 31) ||
      !isValidCronField(month, 1, 12) ||
      !isValidCronField(weekday, 0, 7)
    ) {
      return {
        isValid: false,
        description: "",
        nextExecutions: [],
        error: "Invalid cron field values. Please check the ranges.",
      };
    }

    // Generate human-readable description using cronstrue
    let description = "";
    try {
      const cronstrue = await import("cronstrue");
      description = cronstrue.toString(expression, {
        throwExceptionOnParseError: false,
        verbose: true,
        use24HourTimeFormat: true,
      });
    } catch (cronstrueError) {
      // Fallback to basic description if cronstrue fails
      description = generateBasicDescription(minute, hour, day, month, weekday);
    }

    // Calculate next execution times
    const nextExecutions = calculateNextExecutions(expression, 5);

    return {
      isValid: true,
      description,
      nextExecutions,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Invalid cron expression format";

    return {
      isValid: false,
      description: "",
      nextExecutions: [],
      error: errorMessage,
    };
  }
};

const isValidCronField = (field: string, min: number, max: number): boolean => {
  if (field === "*") return true;

  // Handle step values
  if (field.includes("/")) {
    const [range, step] = field.split("/");
    const stepValue = parseInt(step);
    if (isNaN(stepValue) || stepValue <= 0) return false;
    return isValidCronField(range, min, max);
  }

  // Handle ranges
  if (field.includes("-")) {
    const [start, end] = field.split("-");
    const startNum = parseInt(start);
    const endNum = parseInt(end);
    return (
      !isNaN(startNum) &&
      !isNaN(endNum) &&
      startNum >= min &&
      endNum <= max &&
      startNum <= endNum
    );
  }

  // Handle lists
  if (field.includes(",")) {
    return field.split(",").every((f) => isValidCronField(f.trim(), min, max));
  }

  // Handle specific values
  const num = parseInt(field);
  return !isNaN(num) && num >= min && num <= max;
};

const generateBasicDescription = (
  minute: string,
  hour: string,
  day: string,
  month: string,
  weekday: string
): string => {
  let desc = "At ";

  // Time description
  if (minute === "*" && hour === "*") {
    desc += "every minute";
  } else if (minute === "0" && hour === "*") {
    desc += "every hour";
  } else if (hour === "*") {
    desc += `minute ${minute} of every hour`;
  } else if (minute === "0") {
    desc += `${formatHour(hour)}`;
  } else {
    desc += `${formatHour(hour)}:${minute.padStart(2, "0")}`;
  }

  // Frequency description
  if (day === "*" && month === "*" && weekday === "*") {
    desc += " every day";
  } else if (weekday !== "*" && day === "*") {
    desc += ` on ${formatWeekday(weekday)}`;
  } else if (day !== "*" && month === "*") {
    desc += ` on day ${day} of every month`;
  } else if (month !== "*") {
    desc += ` in ${formatMonth(month)}`;
  }

  return desc;
};

const formatHour = (hour: string): string => {
  if (hour === "*") return "every hour";
  const h = parseInt(hour);
  if (h === 0) return "12:00 AM";
  if (h < 12) return `${h}:00 AM`;
  if (h === 12) return "12:00 PM";
  return `${h - 12}:00 PM`;
};

const formatWeekday = (weekday: string): string => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (weekday === "*") return "every day";
  const day = parseInt(weekday);
  return days[day === 7 ? 0 : day] || weekday;
};

const formatMonth = (month: string): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (month === "*") return "every month";
  const m = parseInt(month);
  return months[m - 1] || month;
};

const generateRandomCron = (): string => {
  const rand = (max: number) => Math.floor(Math.random() * max);
  const patterns = [
    `${rand(60)} ${rand(24)} * * *`, // Every day at random time
    `0 ${rand(24)} * * ${rand(7)}`, // Weekly at random hour
    `${rand(60)} ${rand(24)} ${rand(28) + 1} * *`, // Monthly on random day
    `0 0 1 ${rand(12) + 1} *`, // Yearly on random month
    `*/15 * * * *`, // Every 15 minutes
    `0 */2 * * *`, // Every 2 hours
    `30 9 * * 1-5`, // Weekdays at 9:30 AM
    `0 6 * * 1`, // Every Monday at 6 AM
    `0 12 1 * *`, // First day of every month at noon
    `0 0 * * 0`, // Every Sunday at midnight
  ];

  return patterns[rand(patterns.length)];
};

const formatTimeDistance = (date: Date): string => {
  const now = new Date();
  const diff = date.getTime() - now.getTime();

  if (diff < 0) return "Past execution";

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `in ${days} day${days > 1 ? "s" : ""}`;
  if (hours > 0) return `in ${hours} hour${hours > 1 ? "s" : ""}`;
  if (minutes > 0) return `in ${minutes} minute${minutes > 1 ? "s" : ""}`;
  return `in ${seconds} second${seconds > 1 ? "s" : ""}`;
};

const formatDateTime = (date: Date): string => {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
};

const CronTester: React.FC = () => {
  const [cronExpression, setCronExpression] = useState("");
  const [cronResult, setCronResult] = useState<CronResult | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Parse cron expression whenever it changes
  useEffect(() => {
    if (cronExpression.trim() && loaded) {
      setIsLoading(true);
      parseCronExpression(cronExpression)
        .then((result) => {
          setCronResult(result);
        })
        .catch((error) => {
          setCronResult({
            isValid: false,
            description: "",
            nextExecutions: [],
            error: "Failed to parse cron expression",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setCronResult(null);
    }
  }, [cronExpression, loaded]);

  const handleExpressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCronExpression(e.target.value);
  };

  const generateRandom = useCallback(() => {
    const randomCron = generateRandomCron();
    setCronExpression(randomCron);
    toast.success("Generated random cron expression!");
  }, []);

  const clearExpression = () => {
    setCronExpression("");
    setCronResult(null);
  };

  return (
    <ToolContainer>
      <ToolHead
        name="Cron Expression Tester"
        description="Test and validate cron expressions instantly with our free online cron tester. Parse cron jobs, validate syntax, see next execution times, and understand cron patterns with real-time feedback."
      />

      {!loaded ? (
        <CronTesterSkeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Cron Expression Input - FIRST PRIORITY */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Cron Expression</Label>
                    <Input
                      value={cronExpression}
                      onChange={handleExpressionChange}
                      placeholder="* * * * * (minute hour day month weekday)"
                      className="font-mono text-center text-lg"
                      disabled={isLoading}
                    />
                    <div className="text-xs text-muted-foreground text-center">
                      Format: minute (0-59) hour (0-23) day (1-31) month (1-12)
                      weekday (0-7, 0=Sunday)
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-3">
                    <Button
                      onClick={generateRandom}
                      variant="outline"
                      size="sm"
                      disabled={isLoading}
                    >
                      <RefreshCwIcon className="h-4 w-4 mr-1" />
                      Random
                    </Button>
                    <Button
                      onClick={clearExpression}
                      variant="outline"
                      size="sm"
                      disabled={isLoading}
                    >
                      <XIcon className="h-4 w-4" />
                    </Button>
                    {cronResult?.isValid && (
                      <CopyButton text={cronExpression} />
                    )}
                  </div>
                </div>

                {/* Loading State */}
                {isLoading && (
                  <div className="text-center p-4">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Parsing cron expression...
                    </div>
                  </div>
                )}

                {/* Results Section - SECOND PRIORITY */}
                {cronResult && !isLoading && (
                  <div className="space-y-4 pt-4 border-t">
                    {cronResult.isValid ? (
                      <>
                        {/* Human Readable Description */}
                        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                          <div className="flex items-center justify-center mb-2">
                            <Badge variant="default" className="bg-green-600">
                              Valid Expression
                            </Badge>
                          </div>
                          <div className="text-lg font-medium text-green-800 dark:text-green-200">
                            {cronResult.description}
                          </div>
                        </div>

                        {/* Next Execution Times */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                            <Label className="font-medium">
                              Next Execution Times (UTC)
                            </Label>
                          </div>

                          <div className="grid gap-3">
                            {cronResult.nextExecutions
                              .slice(0, 5)
                              .map((date, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-3 border rounded-lg bg-muted/30"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-sm font-mono w-6 text-center">
                                      {index + 1}
                                    </span>
                                    <div>
                                      <div className="font-medium font-mono">
                                        {formatDateTime(date)}
                                      </div>
                                      <div className="text-sm text-muted-foreground">
                                        {formatTimeDistance(date)}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {index === 0 ? "Next" : `+${index}`}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>

                        {/* Expression Breakdown */}
                        <div className="space-y-3">
                          <Label className="font-medium">
                            Expression Breakdown
                          </Label>
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                            {[
                              {
                                label: "Minute",
                                value: cronExpression.split(" ")[0] || "*",
                                desc: "0-59",
                              },
                              {
                                label: "Hour",
                                value: cronExpression.split(" ")[1] || "*",
                                desc: "0-23",
                              },
                              {
                                label: "Day",
                                value: cronExpression.split(" ")[2] || "*",
                                desc: "1-31",
                              },
                              {
                                label: "Month",
                                value: cronExpression.split(" ")[3] || "*",
                                desc: "1-12",
                              },
                              {
                                label: "Weekday",
                                value: cronExpression.split(" ")[4] || "*",
                                desc: "0-7",
                              },
                            ].map((field, index) => (
                              <div
                                key={index}
                                className="text-center p-3 border rounded-lg bg-muted/30"
                              >
                                <div className="text-xs text-muted-foreground mb-1">
                                  {field.label}
                                </div>
                                <div className="font-mono font-bold text-lg">
                                  {field.value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {field.desc}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Error State */
                      <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="flex items-center justify-center mb-2">
                          <Badge variant="destructive">
                            Invalid Expression
                          </Badge>
                        </div>
                        <div className="text-red-800 dark:text-red-200">
                          {cronResult.error}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            <Card>
              <CardHeader>
                <CardTitle>Understanding Cron Expressions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Cron expressions are used to configure cron jobs in
                    Unix-like operating systems. They consist of five fields
                    that specify when a task should be executed, providing
                    precise scheduling capabilities for automated tasks.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Field Structure
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Minute (0-59):</strong> Specifies the minute
                            of the hour
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Hour (0-23):</strong> Specifies the hour of
                            the day (24-hour format)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Day (1-31):</strong> Specifies the day of
                            the month
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Month (1-12):</strong> Specifies the month
                            of the year
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>Weekday (0-7):</strong> Specifies the day of
                            the week (0 and 7 = Sunday)
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Special Characters
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>* (asterisk):</strong> Matches any value
                            (wildcard)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>, (comma):</strong> Separates multiple
                            values
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>- (hyphen):</strong> Defines a range of
                            values
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            <strong>/ (slash):</strong> Specifies step values
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-700 rounded p-4">
                    <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Example Breakdown
                    </h5>
                    <div className="bg-slate-800 dark:bg-slate-900 rounded p-3 font-mono text-sm overflow-x-auto">
                      <div className="text-slate-300">
                        {`0 9 * * 1-5
                        │ │ │ │ │
                        │ │ │ │ └── Day of week (1-5 = Monday to Friday)
                        │ │ │ └──── Month (any month)
                        │ │ └────── Day of month (any day)
                        │ └──────── Hour (9 AM)
                        └────────── Minute (0 = top of the hour)`}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      This expression runs at 9:00 AM every weekday (Monday
                      through Friday).
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Cron Patterns and Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Common Patterns */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            ⏰
                          </span>
                        </span>
                        Common Patterns
                      </h4>
                      <div className="space-y-3 ml-11">
                        <div className="p-3 border rounded-lg">
                          <div className="font-mono text-sm font-medium">
                            0 0 * * *
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Run daily at midnight
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="font-mono text-sm font-medium">
                            0 0 * * 0
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Run weekly on Sunday at midnight
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="font-mono text-sm font-medium">
                            0 0 1 * *
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Run monthly on the 1st at midnight
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="font-mono text-sm font-medium">
                            */5 * * * *
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Run every 5 minutes
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            🎯
                          </span>
                        </span>
                        Use Cases
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Database Backups:</strong> Schedule
                            automatic database backups
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Log Rotation:</strong> Clean up and archive
                            log files
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>System Monitoring:</strong> Run health
                            checks and monitoring scripts
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data Processing:</strong> Schedule ETL jobs
                            and data processing tasks
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Best Practices */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            ✨
                          </span>
                        </span>
                        Best Practices
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Test Thoroughly:</strong> Always test cron
                            expressions before deployment
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Use Logging:</strong> Add logging to track
                            job execution
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Avoid Overlaps:</strong> Ensure jobs don't
                            run longer than their intervals
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Consider Timezones:</strong> Be aware of
                            server timezone settings
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Advanced Features */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            🚀
                          </span>
                        </span>
                        Advanced Features
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Step Values:</strong> Use */n for intervals
                            (e.g., */15 for every 15 minutes)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Ranges:</strong> Use hyphens for ranges
                            (e.g., 1-5 for Monday to Friday)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Lists:</strong> Use commas for multiple
                            values (e.g., 1,3,5 for specific days)
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Combinations:</strong> Mix patterns for
                            complex schedules
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> When working with cron
                      expressions, always test them in a non-production
                      environment first. Use online cron testers to validate
                      your expressions and understand their execution schedule
                      before deploying to production systems. Consider using
                      monitoring and alerting for critical cron jobs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: Cron Expressions Explained"
              description="This video provides a deep dive into cron expressions, showing you how to write and understand the syntax for scheduling jobs."
              videoUrl="https://www.youtube.com/embed/MlNeVGC0GUs"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default CronTester;
