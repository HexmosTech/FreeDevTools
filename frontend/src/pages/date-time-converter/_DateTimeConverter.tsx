import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import ToolContainer from "../../components/tool/ToolContainer";
import ToolHead from "../../components/tool/ToolHead";
import CopyButton from "../../components/ui/copy-button";

const DateTimeConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputFormat, setInputFormat] = useState("utc");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Parse the input date based on selected format
  const parseInputDate = () => {
    if (!inputValue.trim()) return currentDate;

    try {
      let parsedDate;
      switch (inputFormat) {
        case "utc":
          parsedDate = new Date(inputValue);
          break;
        case "iso":
          parsedDate = new Date(inputValue);
          break;
        case "timestamp":
          // Handle both seconds and milliseconds timestamps
          const timestamp = parseInt(inputValue);
          parsedDate = new Date(
            timestamp < 10000000000 ? timestamp * 1000 : timestamp
          );
          break;
        case "unix":
          parsedDate = new Date(parseInt(inputValue) * 1000);
          break;
        default:
          parsedDate = new Date(inputValue);
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
    setInputValue(datetime);
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
      <div className="max-w-6xl">
        {/* Input Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder={getPlaceholder()}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <div
                  className="relative"
                  onFocus={() => setDropdownOpen(true)}
                  onBlur={() => setDropdownOpen(false)}
                  tabIndex={-1}
                >
                  <select
                    value={inputFormat}
                    onChange={(e) => setInputFormat(e.target.value)}
                    onClick={() => setDropdownOpen((open) => !open)}
                    className="appearance-none bg-white cursor-pointer dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 pr-10 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-w-[140px]"
                  >
                    {formatOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400">
                    {dropdownOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </div>
              </div>
              <Button
                onClick={() => setShowDatePicker(!showDatePicker)}
                variant="outline"
                size="default"
                title="Pick date and time"
              >
                <Calendar className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Date Picker */}
          {showDatePicker && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700">
              <label className="block text-sm  mb-2">Pick date and time:</label>
              <input
                type="datetime-local"
                onChange={handleDatePickerChange}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
        </div>

        {/* Conversion Results */}
        <div className="space-y-3">
          {[
            { label: "JS locale date string", value: formatters.jsLocale() },
            { label: "ISO 8601", value: formatters.iso8601() },
            { label: "ISO 9075", value: formatters.iso9075() },
            { label: "RFC 3339", value: formatters.rfc3339() },
            { label: "RFC 7231", value: formatters.rfc7231() },
            { label: "Unix timestamp", value: formatters.unixTimestamp() },
            { label: "Timestamp", value: formatters.timestamp() },
            { label: "UTC format", value: formatters.utcFormat() },
            { label: "Mongo ObjectID", value: formatters.mongoObjectId() },
            { label: "Excel date/time", value: formatters.excelDateTime() },
          ].map((format, index) => (
            <div key={index} className="flex flex-row items-center gap-3">
              <div className="text-sm text-gray-800 dark:text-gray-400 min-w-[160px] text-right">
                {format.label}
              </div>
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-row items-center gap-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="text-gray-900 dark:text-white font-mono text-sm break-all text-left">
                      {format.value}
                    </div>
                  </div>
                  <CopyButton
                    text={format.value}
                    size="icon"
                    title="Copy to clipboard"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Current time updates automatically • All conversions are live
        </div>
      </div>

      {/* Best Practices for Time Zones */}
      <div className="space-y-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Using UTC or a Consistent Time Zone Matters
          </h3>
          <div className="text-slate-800 dark:text-slate-400 space-y-3">
            <p>
              Whenever possible, use{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.timeanddate.com/worldclock/timezone/utc"
              >
                UTC
              </a>{" "}
              or choose a consistent time zone when creating time-based content
              or data values. This makes it much easier to compare, debug, and
              work with dates from different sources—no more mental math or
              timezone confusion!
            </p>
            <p>
              <strong>Example:</strong> It's much easier to spot differences and
              similarities when all your timestamps are in the same time zone.
              When values use different{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://en.wikipedia.org/wiki/UTC_offset"
              >
                offsets
              </a>{" "}
              or time zones, you have to mentally translate each one, which can
              lead to mistakes.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-[340px] text-xs border border-slate-200 dark:border-slate-700 rounded">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-700">
                    <th className="px-2 py-1 text-left font-semibold">
                      Mixed Offsets
                    </th>
                    <th className="px-2 py-1 text-left font-semibold">
                      Same value converted to{" "}
                      <a
                        className="text-blue-500 hover:underline"
                        href="https://www.timeanddate.com/worldclock/timezone/utc"
                      >
                        UTC
                      </a>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-1">2007-01-01T01:00:00.000-01:00</td>
                    <td className="px-2 py-1">2007-01-01T02:00:00.000Z</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">2007-01-01T01:00:00.000Z</td>
                    <td className="px-2 py-1">2007-01-01T01:00:00.000Z</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">2007-01-01T01:00:00.000+01:00</td>
                    <td className="px-2 py-1">2007-01-01T00:00:00.000Z</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">2006-12-31T23:00:00.000-01:00</td>
                    <td className="px-2 py-1">2007-01-01T00:00:00.000Z</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">2007-01-01T01:00:00.000Z</td>
                    <td className="px-2 py-1">2007-01-01T01:00:00.000Z</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">2007-01-01T00:00:00.000Z</td>
                    <td className="px-2 py-1">2007-01-01T00:00:00.000Z</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">2007-01-01T00:00:00.000Z</td>
                    <td className="px-2 py-1">2007-01-01T00:00:00.000Z</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              As you can see, when timestamps use different offsets, it's hard
              to visually compare them. Converting everything to{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.timeanddate.com/worldclock/timezone/utc"
              >
                UTC
              </a>{" "}
              (or a single time zone) makes it much easier to spot duplicates or
              differences at a glance.
            </p>
            <p>
              <strong>Tip:</strong> Help your users by remembering their
              preferred time zone and making it easy to select or change it.
              Consistency saves time and reduces errors!
            </p>
          </div>
        </div>
      </div>

      {/* Timestamps Section */}
      <div className="space-y-8 mt-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            When a Simple Timestamp is Enough
          </h3>
          <div className="text-slate-800 dark:text-slate-400 space-y-3">
            <p>
              For most use cases, you can use an incremental time value like{" "}
              <span className="font-mono">Instant</span> or{" "}
              <span className="font-mono">Date</span> for your timestamp values.
              If your app only cares about the order of events (not the local
              wall time), a timestamp is all you need.
            </p>
            <p>
              <strong>Example:</strong> If you're merging log files from many
              machines or recording events in a log, just store the timestamp.
              You don't need to recover the original wall time—just the sequence
              of events.
            </p>
            <p>
              It's best to normalize all timestamps to{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.timeanddate.com/worldclock/timezone/utc"
              >
                UTC
              </a>{" "}
              (or, less commonly, a specific UTC offset) so you can easily
              compare and merge data from different sources. Storing the local
              offset is only useful if you ever need to recover the original
              wall time, but for most logs and event streams, that's not
              necessary.
            </p>
            <p>
              <strong>Tip:</strong> When in doubt, use{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.timeanddate.com/worldclock/timezone/utc"
              >
                UTC
              </a>{" "}
              for serializing, storing, and exchanging date and time values.
              Serializing timestamps with an offset can make things more
              complicated, especially if your system uses multiple offsets.
            </p>
            <div className="bg-gray-100 dark:bg-slate-700 rounded p-4 text-sm">
              <strong>Note:</strong> For timestamp values, you never need to
              store the time zone. The only thing it might provide is the
              originating wall time, which is rarely needed for logs or event
              ordering.
            </div>
          </div>
        </div>
      </div>

      {/* Past and Future Events Section */}
      <div className="space-y-8 mt-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Handling Past and Future Events: Why Time Zones Matter
          </h3>
          <div className="text-slate-800 dark:text-slate-400 space-y-3">
            <p>
              If your app schedules or displays events in the future (like
              meetings, reminders, or calendar entries), you should use a
              date-time type that includes the time zone—such as{" "}
              <a
                className="font-mono text-blue-500 hover:underline"
                href="https://javadoc.io/static/org.json4s/json4s-ext_3/4.1.0-M1/org/json4s/ext/DateParser$$ZonedInstant.html"
              >
                ZonedInstant
              </a>
              —not just a local time or offset. This ensures your app always
              shows the correct wall time, even if time zone rules (like
              daylight saving) change.
            </p>
            <p>
              For example, a meeting set for "2025-10-28 10:00 AM Europe/Berlin"
              will always be at 10:00 AM in Berlin, even if daylight saving
              rules change between now and then. If you only store the offset or
              a timestamp, you might show the wrong local time after a rule
              change.
            </p>
            <p>
              <strong>Why does this matter?</strong> Time zone rules can change!
              Governments sometimes update daylight saving or standard time
              rules. If your app pre-computes or stores incremental time values
              (like timestamps) for future events, you may need to refresh those
              values after your system's time zone database updates, so users
              see the correct local time.
            </p>
            <div className="bg-gray-100 dark:bg-slate-700 rounded p-4 text-sm">
              <strong>Note:</strong> If your application deals with both past
              and future events, always store the time zone along with the event
              time. This helps you handle changes in time zone rules and keeps
              your users' schedules accurate.
            </div>
          </div>
        </div>
      </div>
    </ToolContainer>
  );
};

export default DateTimeConverter;
