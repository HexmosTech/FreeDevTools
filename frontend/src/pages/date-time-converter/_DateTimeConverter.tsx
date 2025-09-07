import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";
import CopyButton from "../../components/ui/copy-button";
import DateTimeConverterSkeleton from "./_DateTimeConverterSkeleton";
import { toast } from "../../components/ToastProvider";
import { Label } from "@/components/ui/label";
import ToolGridContainer from "@/components/tool/ToolGridContainer";
import ToolBody from "@/components/tool/ToolBody";
import _DateTimeConverterWiki from "./_DateTimeConverterWiki";

const DateTimeConverter = () => {
  const [input, setInput] = useState("");
  const [inputFormat, setInputFormat] = useState("utc");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Parse the input date based on selected format
  const parseInputDate = () => {
    if (!input.trim()) return currentDate;

    try {
      let parsedDate;
      switch (inputFormat) {
        case "utc":
          parsedDate = new Date(input);
          break;
        case "iso":
          parsedDate = new Date(input);
          break;
        case "timestamp":
          // Handle both seconds and milliseconds timestamps
          const timestamp = parseInt(input);
          parsedDate = new Date(
            timestamp < 10000000000 ? timestamp * 1000 : timestamp
          );
          break;
        case "unix":
          parsedDate = new Date(parseInt(input) * 1000);
          break;
        default:
          parsedDate = new Date(input);
      }

      return isNaN(parsedDate.getTime()) ? currentDate : parsedDate;
    } catch {
      return currentDate;
    }
  };

  const targetDate = parseInputDate();

  // Format functions
  const formatters = {
    jsLocale: () => {
      return targetDate.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "long",
      });
    },
    iso8601: () => targetDate.toISOString(),
    iso9075: () => targetDate.toISOString().replace("T", " ").slice(0, 19),
    rfc3339: () => targetDate.toISOString(),
    rfc7231: () => targetDate.toUTCString(),
    unixTimestamp: () => Math.floor(targetDate.getTime() / 1000).toString(),
    timestamp: () => targetDate.getTime().toString(),
    utcFormat: () => targetDate.toUTCString(),
    mongoObjectId: () => {
      const timestamp = Math.floor(targetDate.getTime() / 1000).toString(16);
      return timestamp.padStart(8, "0") + "0000000000000000";
    },
    excelDateTime: () => {
      const epoch = new Date("1899-12-30").getTime();
      const days = (targetDate.getTime() - epoch) / (24 * 60 * 60 * 1000);
      return days.toFixed(11);
    },
  };

  const formatOptions = [
    { value: "utc", label: "UTC format" },
    { value: "iso", label: "ISO format" },
    { value: "timestamp", label: "Timestamp (ms)" },
    { value: "unix", label: "Unix timestamp" },
    { value: "custom", label: "Custom format" },
  ];

  const handleDatePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const datetime = e.target.value;
    setInput(datetime);
    setInputFormat("iso");
  };

  const getPlaceholder = () => {
    switch (inputFormat) {
      case "utc":
        return "e.g. 2025-08-24T14:30:00Z";
      case "iso":
        return "e.g. 2025-08-24T14:30:00.000Z";
      case "timestamp":
        return "e.g. 1692887400000 (milliseconds)";
      case "unix":
        return "e.g. 1692887400 (seconds)";
      case "custom":
        return "Enter your custom date format";
      default:
        return "Put your date string here...";
    }
  };

  return (
    <ToolContainer>
      <ToolHead
        name="Date Time Converter"
        description="Instantly convert any date or time between UTC, ISO, Unix, and other popular formats. Enter a date, pick from the calendar, or paste a timestamp to see all formats at once."
      />

      {!loaded ? (
        <DateTimeConverterSkeleton />
      ) : (
        <ToolBody>
          <ToolGridContainer>
            {/* Input Section - Priority #1 */}
            <div className="w-full max-w-4xl mx-auto px-6 py-12">
              <div className="space-y-6">
                {/* Main Input Box - Priority */}
                <div className="relative">
                  <Input
                    id="date-input"
                    type="text"
                    placeholder={getPlaceholder()}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full h-16 text-lg px-6    focus:ring-4 focus:ring-primary/10   backdrop-blur-sm transition-all duration-200 shadow-lg hover:shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-blue-500/5 pointer-events-none" />
                </div>

                {/* Controls Row */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex gap-3">
                    <Select value={inputFormat} onValueChange={setInputFormat}>
                      <SelectTrigger className="min-w-[160px] h-12">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        {formatOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={() => setShowDatePicker(!showDatePicker)}
                      variant="outline"
                      size="lg"
                      title="Pick date and time"
                      className="h-12 px-6 "
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Calendar
                    </Button>
                  </div>
                </div>

                {/* Date Picker */}
                {showDatePicker && (
                  <div className="max-w-md mx-auto p-6 bg-muted/50 rounded-xl border-2 border-primary/20 backdrop-blur-sm">
                    <div className="mb-4">
                      <Label htmlFor="datetime" className="text-sm font-medium">
                        Pick date and time:
                      </Label>
                    </div>
                    <Input
                      id="datetime"
                      type="datetime-local"
                      onChange={handleDatePickerChange}
                      className="w-full h-12 text-center border-2 border-primary/20 focus:border-primary"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Conversion Results */}
            {input.trim() && (
              <Card className="tool-card-bg-grid">
                <CardHeader>
                  <CardDescription>
                    All formats are calculated in real-time based on your input
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full p-6 px-0">
                    <div className="date-container flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 w-full">
                      {/* Left Column */}
                      <div className="flex flex-col gap-4 flex-1">
                        {[
                          {
                            label: "JS locale date string",
                            value: formatters.jsLocale(),
                          },
                          { label: "ISO 8601", value: formatters.iso8601() },
                          { label: "ISO 9075", value: formatters.iso9075() },
                          { label: "RFC 3339", value: formatters.rfc3339() },
                          { label: "RFC 7231", value: formatters.rfc7231() },
                        ].map((format, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-3 min-h-[80px]"
                          >
                            <p className="text-muted-foreground font-medium">
                              {format.label}
                            </p>
                            <div className="bg-muted rounded-lg p-4 flex items-center gap-3 border border-border hover:bg-muted/80 transition-colors flex-1">
                              <div className="flex-1 min-w-0">
                                <div className="font-mono break-all text-left text-sm leading-relaxed">
                                  {format.value}
                                </div>
                              </div>
                              <CopyButton
                                text={format.value}
                                size="icon"
                                title="Copy to clipboard"
                                className="flex-shrink-0"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Column */}
                      <div className="flex flex-col gap-4 flex-1">
                        {[
                          {
                            label: "Unix timestamp",
                            value: formatters.unixTimestamp(),
                          },
                          { label: "Timestamp", value: formatters.timestamp() },
                          {
                            label: "UTC format",
                            value: formatters.utcFormat(),
                          },
                          {
                            label: "Mongo ObjectID",
                            value: formatters.mongoObjectId(),
                          },
                          {
                            label: "Excel date/time",
                            value: formatters.excelDateTime(),
                          },
                        ].map((format, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-3 min-h-[80px]"
                          >
                            <div className="text-muted-foreground text-sm font-medium">
                              {format.label}
                            </div>
                            <div className="bg-muted rounded-lg p-4 flex items-center gap-3 border border-border hover:bg-muted/80 transition-colors flex-1">
                              <div className="flex-1 min-w-0">
                                <div className="font-mono break-all text-left text-sm leading-relaxed">
                                  {format.value}
                                </div>
                              </div>
                              <CopyButton
                                text={format.value}
                                size="icon"
                                title="Copy to clipboard"
                                className="flex-shrink-0"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </ToolGridContainer>
          <_DateTimeConverterWiki />

          {/* Footer */}
          <div className="text-center text-muted-foreground mt-6">
            Current time updates automatically • All conversions are live
          </div>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default DateTimeConverter;
