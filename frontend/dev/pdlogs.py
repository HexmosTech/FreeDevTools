"""
Copy PMDaemon logs for astro processes and summarize key events.

Usage: python scripts/pdlogs.py <label>
       make pdlogs LABEL=<label>
"""

import argparse
import os
import re
import shutil
import subprocess
import tempfile
from datetime import datetime
from pathlib import Path
from typing import List, Optional, Tuple

try:
    from tabulate import tabulate
except ImportError:
    tabulate = None

try:
    from colorama import Fore, Style
    from colorama import init as colorama_init

    colorama_init()

    def colorize(text, color_code=Fore.CYAN):
        return f"{color_code}{text}{Style.RESET_ALL}"

except ImportError:
    Fore = Style = None

    def colorize(text, color_code=None):
        return text


def colorize_grid_table(table_text: str) -> str:
    if not Fore:
        return table_text

    border_color = Fore.LIGHTBLACK_EX
    text_color = Fore.BLUE
    number_color = Fore.GREEN
    colored_parts = []

    for ch in table_text:
        color = None
        if ch in "+-|=":
            color = border_color
        elif ch.isdigit():
            color = number_color
        elif ch.isalpha():
            color = text_color

        if color:
            colored_parts.append(f"{color}{ch}{Style.RESET_ALL}")
        else:
            colored_parts.append(ch)

    return "".join(colored_parts)

def render_table(rows, headers, color_code=None, tablefmt="plain"):
    if not rows:
        return ""
    if tabulate:
        table = tabulate(rows, headers=headers, tablefmt=tablefmt)
    else:
        header_line = "\t".join(headers)
        data_lines = ["\t".join(str(col) for col in row) for row in rows]
        table = "\n".join([header_line] + data_lines)
    return colorize(table, color_code)


def summarize_file(path):
    counts = {
        "total_lines": 0,
        "requests": 0,
        "errors": 0,
        "dispatches": 0,
        "worker_events": 0,
    }
    dispatch_pattern = r"\[(SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB)\]"
    request_pattern = r"\[(SVG_ICONS|PNG_ICONS|EMOJI)\] Request reached"
    worker_pattern = r"\[(SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB)\]\["
    timestamp_re = re.compile(r"\[([0-9T:\-\.]+Z)\]")
    durations = {}
    timestamps = []

    with open(path, encoding="utf-8", errors="ignore") as fh:
        for line in fh:
            counts["total_lines"] += 1
            stripped = line.strip()
            match = timestamp_re.search(stripped)
            if match:
                timestamps.append(match.group(1))
            if re.search(request_pattern, stripped):
                counts["requests"] += 1
            if "ERROR" in stripped or "Error" in stripped:
                counts["errors"] += 1
            if re.search(dispatch_pattern, stripped) and "Dispatching" in stripped:
                counts["dispatches"] += 1
                qname = stripped.split("Dispatching")[-1].strip()
                durations.setdefault(qname, []).append(0)
                counts["worker_events"] += 1
            if "completed in" in stripped:
                counts["worker_events"] += 1
                parts = stripped.split()
                if len(parts) >= 4:
                    qname = parts[-4]
                    ms = int(parts[-1].replace("ms", ""))
                    durations.setdefault(qname, []).append(ms)
    return counts, durations, timestamps


def strip_ansi(line: str) -> str:
    """Remove ANSI escape sequences from a line."""
    ansi_escape = re.compile(r'\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])')
    return ansi_escape.sub('', line)


def parse_request_reached(line: str) -> Optional[Tuple[datetime, str]]:
    """Extract timestamp and path from 'Request reached server' line."""
    # Strip ANSI codes first
    clean_line = strip_ansi(line)
    
    if 'Request reached server:' not in clean_line:
        return None
    
    timestamp_re = re.compile(r"\[([0-9T:\-\.]+Z)\]")
    match = timestamp_re.search(clean_line)
    if not match:
        return None
    
    try:
        timestamp = datetime.fromisoformat(match.group(1).replace('Z', '+00:00'))
    except ValueError:
        return None
    
    # Extract path
    path_match = re.search(r'Request reached server:\s*(.+)', clean_line)
    path = path_match.group(1).strip() if path_match else ''
    
    return (timestamp, path)


def parse_total_request_time(line: str) -> Optional[Tuple[str, int]]:
    """Extract path and milliseconds from 'Total request time' line."""
    # Strip ANSI codes first
    clean_line = strip_ansi(line)
    
    if 'Total request time for' not in clean_line:
        return None
    
    # Extract path and time
    match = re.search(r'Total request time for\s+(.+?):\s*(\d+)ms', clean_line)
    if match:
        path = match.group(1).strip()
        ms = int(match.group(2))
        return (path, ms)
    return None


def parse_handler_render_time(line: str) -> Optional[Tuple[str, int]]:
    """Extract path and milliseconds from 'Handler render time' line."""
    # Strip ANSI codes first
    clean_line = strip_ansi(line)
    
    if 'Handler render time for' not in clean_line:
        return None
    
    # Extract path and time
    match = re.search(r'Handler render time for\s+(.+?):\s*(\d+)ms', clean_line)
    if match:
        path = match.group(1).strip()
        ms = int(match.group(2))
        return (path, ms)
    return None


def analyze_request_times(log_files: List[Path]) -> None:
    """Analyze request times from log files."""
    request_times = []  # List of (path, start_time, total_time, handler_time)
    request_reached_times = []  # All "Request reached server" timestamps
    
    # Track pending items by path (FIFO queues)
    pending_requests = {}  # path -> list of start_timestamps
    pending_total_times = {}  # path -> list of (timestamp, total_ms)
    
    for log_path in log_files:
        with open(log_path, encoding="utf-8", errors="ignore") as fh:
            for line in fh:
                line = line.strip()
                
                # Track "Request reached server" lines
                req_reached = parse_request_reached(line)
                if req_reached:
                    timestamp, path = req_reached
                    request_reached_times.append((timestamp, path))
                    if path not in pending_requests:
                        pending_requests[path] = []
                    pending_requests[path].append(timestamp)
                
                # Track "Total request time" lines
                total_time = parse_total_request_time(line)
                if total_time:
                    path, ms = total_time
                    # Strip ANSI codes for timestamp extraction
                    clean_line = strip_ansi(line)
                    timestamp_re = re.compile(r"\[([0-9T:\-\.]+Z)\]")
                    match = timestamp_re.search(clean_line)
                    if match:
                        try:
                            timestamp = datetime.fromisoformat(match.group(1).replace('Z', '+00:00'))
                            
                            # Immediately try to match with a pending request for this path
                            start_time = None
                            if path in pending_requests and pending_requests[path]:
                                # Use the first pending request that's before or equal to total_timestamp
                                for i, req_timestamp in enumerate(pending_requests[path]):
                                    if req_timestamp <= timestamp:
                                        start_time = pending_requests[path].pop(i)
                                        break
                                # If no match found, use the first one anyway
                                if start_time is None and pending_requests[path]:
                                    start_time = pending_requests[path].pop(0)
                            
                            if start_time:
                                # Use handler_ms = 0 if not found (middleware doesn't log it separately)
                                request_times.append((path, start_time, ms, 0))
                        except ValueError:
                            pass
                
                # Track "Handler render time" lines (optional - for more detailed analysis)
                handler_time = parse_handler_render_time(line)
                if handler_time:
                    path, handler_ms = handler_time
                    # Strip ANSI codes for timestamp extraction
                    clean_line = strip_ansi(line)
                    timestamp_re = re.compile(r"\[([0-9T:\-\.]+Z)\]")
                    match = timestamp_re.search(clean_line)
                    if not match:
                        continue
                    
                    try:
                        timestamp = datetime.fromisoformat(match.group(1).replace('Z', '+00:00'))
                    except ValueError:
                        continue
                    
                    # Try to update existing request_times with handler time if we can match it
                    # Find the most recent request for this path that's close to this timestamp
                    try:
                        for i, (req_path, req_start, req_total, req_handler) in enumerate(request_times):
                            if req_path == path and req_handler == 0:
                                # If handler time is within 1 second of the request, update it
                                time_diff = abs((timestamp - req_start).total_seconds())
                                if time_diff < 1.0:
                                    request_times[i] = (req_path, req_start, req_total, handler_ms)
                                    break
                    except (ValueError, IndexError):
                        pass
    
    request_count = len(request_times)
    
    # Get first and last request timestamps
    if request_reached_times:
        first_request = min(request_reached_times, key=lambda x: x[0])
        last_request = max(request_reached_times, key=lambda x: x[0])
        start_time = first_request[0]
        end_time = last_request[0]
    elif request_times:
        # Use request_times if we don't have request_reached_times
        first_request = min(request_times, key=lambda x: x[1])  # x[1] is start_time
        last_request = max(request_times, key=lambda x: x[1])
        start_time = first_request[1]
        end_time = last_request[1]
    else:
        # No requests found at all
        return
    
    # Calculate time span in minutes
    time_span = (end_time - start_time).total_seconds() / 60.0
    
    # Output results
    print(colorize("\nRequest Time Analysis:", Fore.MAGENTA if Fore else None))
    print(f"First request: {start_time.isoformat()}")
    print(f"Last request:  {end_time.isoformat()}")
    print(f"Time span:     {time_span:.2f} minutes")
    print()
    print(f"Total requests analyzed: {request_count}")
    
    # Show breakdown by path if there are multiple paths
    path_stats = {}
    for path, start_ts, total_ms, handler_ms in request_times:
        if path not in path_stats:
            path_stats[path] = {'count': 0, 'total': 0}
        path_stats[path]['count'] += 1
        path_stats[path]['total'] += total_ms  # Use only total request time
    
    if len(path_stats) > 1:
        print()
        print("Breakdown by path:")
        for path in sorted(path_stats.keys()):
            stats = path_stats[path]
            print(f"  {path}: {stats['count']} requests, {stats['total']}ms total, {stats['total']/stats['count']:.2f}ms avg")


def get_pmdaemon_processes():
    """Get list of astro processes from pmdaemon."""
    try:
        result = subprocess.run(
            ['pmdaemon', 'list'],
            capture_output=True,
            text=True,
            timeout=5
        )
        if result.returncode != 0:
            return []
        
        # Parse the output to find astro processes
        processes = []
        for line in result.stdout.split('\n'):
            # Look for lines with astro process names
            if 'astro-' in line:
                # Extract process name (e.g., astro-4321, astro-4322)
                match = re.search(r'astro-(\d+)', line)
                if match:
                    process_name = f"astro-{match.group(1)}"
                    processes.append(process_name)
        
        return processes
    except (subprocess.TimeoutExpired, FileNotFoundError, subprocess.SubprocessError):
        return []


def capture_pmdaemon_logs(process_name: str, output_file: Path):
    """Capture logs from pmdaemon for a specific process."""
    try:
        # Use pmdaemon logs command to get logs
        # Note: pmdaemon logs might output to stdout, so we capture it
        result = subprocess.run(
            ['pmdaemon', 'logs', process_name],
            capture_output=True,
            text=True,
            timeout=10
        )
        
        if result.returncode == 0 or result.stdout:
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(result.stdout)
            if result.stderr:
                with open(output_file, 'a', encoding='utf-8') as f:
                    f.write(result.stderr)
            return True
        return False
    except (subprocess.TimeoutExpired, subprocess.SubprocessError) as e:
        print(f"Warning: Failed to capture logs for {process_name}: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Copy PMDaemon astro logs into logs/<label> and summarize them."
    )
    parser.add_argument("label", help="folder name under logs/")
    args = parser.parse_args()

    out_dir = Path("logs") / args.label
    out_dir.mkdir(parents=True, exist_ok=True)

    # Get list of astro processes from pmdaemon
    processes = get_pmdaemon_processes()
    
    if not processes:
        raise SystemExit("No astro processes found in pmdaemon. Run 'pmdaemon list' to check.")

    log_files = []
    
    # Capture logs for each process
    for process_name in processes:
        # Create log file name similar to PM2 format: astro-4321-out.log
        log_file = out_dir / f"{process_name}-out.log"
        
        if capture_pmdaemon_logs(process_name, log_file):
            log_files.append(log_file)
            print(f"Captured logs for {process_name} -> {log_file}")
        else:
            print(f"Warning: No logs captured for {process_name}")

    if not log_files:
        raise SystemExit("No astro logs captured from pmdaemon")

    aggregate = {
        "total_lines": 0,
        "requests": 0,
        "errors": 0,
        "dispatches": 0,
        "worker_events": 0,
    }
    duration_stats = {}
    all_timestamps = []
    process_summaries = {}
    per_proc_queries = {}

    for log_path in log_files:
        stats, durations, timestamps = summarize_file(log_path)
        print(f"Processed {log_path.name}")
        
        # Extract process name from filename (e.g., astro-4321-out.log -> astro-4321)
        proc_match = re.search(r"(astro-\d+)", log_path.name)
        proc_key = proc_match.group(1) if proc_match else log_path.stem
        process_summaries[proc_key] = stats
        for key in aggregate:
            aggregate[key] += stats[key]

        for qname, ms_list in durations.items():
            duration_stats.setdefault(qname, []).extend(ms_list)
            per_proc_queries.setdefault(proc_key, {}).setdefault(qname, 0)
            per_proc_queries[proc_key][qname] += len(ms_list)
        all_timestamps.extend(timestamps)

    if process_summaries:
        headers = ["Process", "Requests", "Dispatches", "Worker Logs", "Errors"]
        rows = []
        for proc, stats in sorted(process_summaries.items(), key=lambda x: x[0]):
            rows.append(
                [
                    proc,
                    stats["requests"],
                    stats["dispatches"],
                    stats["worker_events"],
                    stats["errors"],
                ]
            )
        print("\nRequest count table:")
        if tabulate:
            table = tabulate(rows, headers=headers, tablefmt="grid")
        else:
            header_line = " | ".join(f"{h:<14}" for h in headers)
            table_lines = [header_line, "-" * len(header_line)]
            for row in rows:
                table_lines.append(" | ".join(f"{str(col):<14}" for col in row))
            table = "\n".join(table_lines)
        print(colorize_grid_table(table))

    print("\nTotal aggregated:")
    print(f"  total lines: {aggregate['total_lines']}")
    print(f"  requests:    {aggregate['requests']}")
    print(f"  dispatches:  {aggregate['dispatches']}")
    print(f"  worker logs: {aggregate['worker_events']}")
    print(f"  errors:      {aggregate['errors']}")
    print("\nDispatches represent each time the worker pool received a query "
          "and handed it off to a worker thread (logged via "
          "[SVG_ICONS_DB|PNG_ICONS_DB|EMOJI_DB] Dispatching <queryName>).")

    if per_proc_queries:
        print(colorize("\nQuery Count Details process wise:", Fore.MAGENTA if Fore else None))
        query_names = sorted({q for stats in per_proc_queries.values() for q in stats})
        query_rows = []
        for proc, qdata in per_proc_queries.items():
            query_rows.append([proc] + [qdata.get(q, 0) for q in query_names])
        if tabulate:
            table = tabulate(query_rows, headers=["Process"] + query_names, tablefmt="grid")
        else:
            header = "Process".ljust(12) + " | " + " | ".join(f"{q:<20}" for q in query_names)
            lines = [header, "-" * len(header)]
            for row in query_rows:
                lines.append(" | ".join(f"{str(col):<20}" for col in row))
            table = "\n".join(lines)
        print(colorize_grid_table(table))

    if duration_stats:
        print(colorize("\nQuery Duration Details process wise:", Fore.MAGENTA if Fore else None))
        rows = []
        for qname, ms_list in duration_stats.items():
            filtered = [ms for ms in ms_list if ms > 0]
            if not filtered:
                continue
            avg = sum(filtered) / len(filtered)
            mx = max(filtered)
            total_ms = sum(filtered)
            sum_minutes = total_ms / 60000
            rows.append([qname, len(filtered), f"{avg:.1f}", mx, f"{sum_minutes:.2f}"])
        headers = ["Query", "Count", "Avg ms", "Max ms", "Sum min"]
        if tabulate:
            table = tabulate(rows, headers=headers, tablefmt="grid")
        else:
            header_line = " | ".join(f"{h:<12}" for h in headers)
            table_lines = [header_line, "-" * len(header_line)]
            for row in rows:
                table_lines.append(" | ".join(f"{str(col):<12}" for col in row))
            table = "\n".join(table_lines)
        print(colorize_grid_table(table))

    if all_timestamps:
        parsed = []
        for ts in all_timestamps:
            try:
                parsed.append(datetime.fromisoformat(ts.replace("Z", "+00:00")))
            except ValueError:
                continue
        if parsed:
            start = min(parsed)
            end = max(parsed)
            print(f"\nOverall window: {start.isoformat()} → {end.isoformat()}")
            print(f"Total coverage: {end - start}")
    
    # Analyze request times from log files
    analyze_request_times(log_files)


if __name__ == "__main__":
    main()

