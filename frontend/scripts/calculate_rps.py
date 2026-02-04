import re
from datetime import datetime
from collections import defaultdict

def calculate_rps(log_file):
    # Dictionary to store request counts per second
    requests_per_second = defaultdict(int)
    
    # Regex to extract timestamp from log line
    # Format: 2025/12/13 19:40:00
    timestamp_pattern = re.compile(r'^(\d{4}/\d{2}/\d{2} \d{2}:\d{2}:\d{2})')
    
    try:
        with open(log_file, 'r') as f:
            for line in f:
                match = timestamp_pattern.match(line)
                if match:
                    timestamp_str = match.group(1)
                    requests_per_second[timestamp_str] += 1
                    
        if not requests_per_second:
            print("No valid log entries found.")
            return

        # Calculate statistics
        total_requests = sum(requests_per_second.values())
        total_seconds = len(requests_per_second)
        
        if total_seconds == 0:
            print("No time duration found.")
            return

        avg_rps = total_requests / total_seconds
        max_rps = max(requests_per_second.values())
        min_rps = min(requests_per_second.values())
        
        # Sort timestamps to find start and end time
        sorted_timestamps = sorted(requests_per_second.keys())
        start_time = sorted_timestamps[0]
        end_time = sorted_timestamps[-1]

        print(f"Analysis of {log_file}")
        print("-" * 30)
        print(f"Start Time: {start_time}")
        print(f"End Time:   {end_time}")
        print(f"Duration:   {total_seconds} seconds")
        print(f"Total Requests: {total_requests}")
        print("-" * 30)
        print(f"Average RPS: {avg_rps:.2f}")
        print(f"Max RPS:     {max_rps}")
        print(f"Min RPS:     {min_rps}")
        
        # Optional: Print detailed second-by-second breakdown
        # print("\nDetailed Breakdown:")
        # for timestamp in sorted_timestamps:
        #     print(f"{timestamp}: {requests_per_second[timestamp]} requests")

    except FileNotFoundError:
        print(f"Error: File '{log_file}' not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

import sys

if __name__ == "__main__":
    import os
    log_file = os.path.expanduser("~/.pmdaemon/logs/fdt-4321-error.log")
    if len(sys.argv) > 1:
        log_file = sys.argv[1]
    calculate_rps(log_file)
