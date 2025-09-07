import ToolGridContainer from "@/components/tool/ToolGridContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

function _DateTimeConverterWiki() {
  return (
    <div>
      <ToolGridContainer className="xl:grid-cols-2 mt-0">
        {/* Best Practices for Time Zones */}
        <Card className="tool-content-card-bg-grid">
          <CardHeader>
            <CardTitle>
              Why Using UTC or a Consistent Time Zone Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Whenever possible, use{" "}
              <a
                className="text-blue-600 hover:underline dark:text-blue-400"
                href="https://www.timeanddate.com/worldclock/timezone/utc"
                target="_blank"
                rel="noopener noreferrer"
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
                className="text-blue-600 hover:underline dark:text-blue-400"
                href="https://en.wikipedia.org/wiki/UTC_offset"
                target="_blank"
                rel="noopener noreferrer"
              >
                offsets
              </a>{" "}
              or time zones, you have to mentally translate each one, which can
              lead to mistakes.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-[300px] sm:min-w-[340px] border border-border rounded text-xs sm:text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="px-2 py-1 text-left font-semibold">
                      Mixed Offsets
                    </th>
                    <th className="px-2 py-1 text-left font-semibold">
                      Same value converted to UTC
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
                className="text-blue-600 hover:underline dark:text-blue-400"
                href="https://www.timeanddate.com/worldclock/timezone/utc"
                target="_blank"
                rel="noopener noreferrer"
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
          </CardContent>
        </Card>

        {/* Timestamps Section */}
        <Card className="tool-content-card-bg-grid">
          <CardHeader>
            <CardTitle>When a Simple Timestamp is Enough</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
                className="text-blue-600 hover:underline dark:text-blue-400"
                href="https://www.timeanddate.com/worldclock/timezone/utc"
                target="_blank"
                rel="noopener noreferrer"
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
                className="text-blue-600 hover:underline dark:text-blue-400"
                href="https://www.timeanddate.com/worldclock/timezone/utc"
                target="_blank"
                rel="noopener noreferrer"
              >
                UTC
              </a>{" "}
              for serializing, storing, and exchanging date and time values.
              Serializing timestamps with an offset can make things more
              complicated, especially if your system uses multiple offsets.
            </p>
            <div className="bg-muted rounded p-4">
              <strong>Note:</strong> For timestamp values, you never need to
              store the time zone. The only thing it might provide is the
              originating wall time, which is rarely needed for logs or event
              ordering.
            </div>
          </CardContent>
        </Card>

        {/* Past and Future Events Section */}
        <Card className="tool-content-card-bg-grid">
          <CardHeader>
            <CardTitle>
              Handling Past and Future Events: Why Time Zones Matter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              If your app schedules or displays events in the future (like
              meetings, reminders, or calendar entries), you should use a
              date-time type that includes the time zone—such as{" "}
              <a
                className="font-mono text-blue-600 hover:underline dark:text-blue-400"
                href="https://javadoc.io/static/org.json4s/json4s-ext_3/4.1.0-M1/org/json4s/ext/DateParser$$ZonedInstant.html"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="bg-muted rounded p-4">
              <strong>Note:</strong> If your application deals with both past
              and future events, always store the time zone along with the event
              time. This helps you handle changes in time zone rules and keeps
              your users' schedules accurate.
            </div>
          </CardContent>
        </Card>

        {/* Date/Time Standards Links */}
        <Card className="tool-content-card-bg-grid">
          <CardHeader>
            <CardTitle>Date & Time Standards & References</CardTitle>
            <CardDescription>
              Official documentation and standards for date/time formats
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3">
              <a
                href="https://www.iso.org/iso-8601-date-and-time-format.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
              >
                <div className="flex-1">
                  <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    ISO 8601 Standard
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Official date/time format standard
                  </div>
                </div>
              </a>

              <a
                href="https://tools.ietf.org/html/rfc3339"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
              >
                <div className="flex-1">
                  <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    RFC 3339
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Date and Time on the Internet
                  </div>
                </div>
              </a>

              <a
                href="https://www.iana.org/time-zones"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
              >
                <div className="flex-1">
                  <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    IANA Time Zone Database
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Official time zone data
                  </div>
                </div>
              </a>

              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
              >
                <div className="flex-1">
                  <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    MDN Date Documentation
                  </div>
                  <div className="text-xs text-muted-foreground">
                    JavaScript Date object reference
                  </div>
                </div>
              </a>

              <a
                href="https://en.wikipedia.org/wiki/Unix_time"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
              >
                <div className="flex-1">
                  <div className="font-medium text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Unix Timestamp Reference
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Wikipedia article on Unix time
                  </div>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </ToolGridContainer>
    </div>
  );
}

export default _DateTimeConverterWiki;
