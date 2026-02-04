#!/usr/bin/env python3
"""
Log Analysis Script for Man Pages Database Queries
Analyzes query performance from server logs and generates statistics.
"""

import re
import sys
from collections import defaultdict
from pathlib import Path


def parse_timing(line):
    """Extract timing value from a log line."""
    match = re.search(r'(\d+\.\d+)(ms|s)', line)
    if match:
        val, unit = float(match.group(1)), match.group(2)
        return val * 1000 if unit == 's' else val
    return None


def analyze_log_file(log_file_path):
    """Analyze log file and extract query performance metrics."""
    query_times = defaultdict(list)
    
    if not Path(log_file_path).exists():
        print(f"Error: Log file not found: {log_file_path}")
        return None
    
    with open(log_file_path, 'r') as f:
        for line in f:
            # Parse format: [MAN_PAGES_DB] ManPages <queryname> <time>
            # Format: [MAN_PAGES_DB] ManPages getManPageCategories 123.456ms
            match = re.search(r'\[MAN_PAGES_DB\]\s+ManPages\s+(\w+)\s+([\d.]+(?:ms|s))', line)
            if match:
                query_name, time_str = match.groups()
                timing = parse_timing(time_str)
                if timing:
                    # Create unique key: ManPages_queryname
                    key = f"ManPages_{query_name}"
                    query_times[key].append(timing)
                continue
    
    return query_times


def calculate_stats(times):
    """Calculate statistics for a list of timings."""
    if not times:
        return None
    
    times_sorted = sorted(times)
    count = len(times)
    total = sum(times)
    avg = total / count
    min_time = times_sorted[0]
    max_time = times_sorted[-1]
    median = times_sorted[count // 2] if count > 0 else 0
    
    # Calculate percentiles
    p50 = times_sorted[int(count * 0.50)] if count > 0 else 0
    p75 = times_sorted[int(count * 0.75)] if count > 0 else 0
    p90 = times_sorted[int(count * 0.90)] if count > 0 else 0
    p95 = times_sorted[int(count * 0.95)] if count > 0 else 0
    p99 = times_sorted[int(count * 0.99)] if count > 0 else 0
    
    # Count slow queries (>100ms)
    slow_count = sum(1 for t in times if t > 100)
    slow_percent = (slow_count / count * 100) if count > 0 else 0
    
    return {
        'count': count,
        'avg': avg,
        'min': min_time,
        'max': max_time,
        'median': median,
        'p50': p50,
        'p75': p75,
        'p90': p90,
        'p95': p95,
        'p99': p99,
        'slow_count': slow_count,
        'slow_percent': slow_percent,
    }


def parse_query_key(query_key):
    """Parse query key into category and query name."""
    # Split on first underscore: "ManPages_getManPageBySlug" -> ("ManPages", "getManPageBySlug")
    if '_' in query_key:
        parts = query_key.split('_', 1)
        return (parts[0], parts[1])
    
    # Fallback: no category
    return ("", query_key)


def print_report(query_times):
    """Print formatted performance report."""
    if not query_times:
        print("No query data found in log file.")
        return
    
    # Calculate stats for each query type
    stats_by_type = {}
    for query_type, times in query_times.items():
        stats = calculate_stats(times)
        if stats:
            stats_by_type[query_type] = stats
    
    if not stats_by_type:
        print("No valid query timings found.")
        return
    
    # Sort by average time (descending)
    sorted_types = sorted(
        stats_by_type.items(),
        key=lambda x: x[1]['avg'],
        reverse=True
    )
    
    print("=" * 130)
    print("MAN PAGES DATABASE QUERY PERFORMANCE ANALYSIS")
    print("=" * 130)
    print()
    
    # Main statistics table
    print(f"{'Category':<12} {'Query Type':<50} {'Count':<8} {'Avg (ms)':<12} {'Min (ms)':<12} {'Max (ms)':<12} {'Slow (>100ms)':<15}")
    print("-" * 130)
    
    for query_type, stats in sorted_types:
        category, query_name = parse_query_key(query_type)
        slow_info = f"{stats['slow_count']}/{stats['count']} ({stats['slow_percent']:.1f}%)"
        print(
            f"{category:<12} "
            f"{query_name:<50} "
            f"{stats['count']:<8} "
            f"{stats['avg']:<12.1f} "
            f"{stats['min']:<12.1f} "
            f"{stats['max']:<12.1f} "
            f"{slow_info:<15}"
        )
    
    print()
    print("=" * 130)
    print("PERCENTILE ANALYSIS")
    print("=" * 130)
    print(f"{'Category':<12} {'Query Type':<50} {'P50':<12} {'P75':<12} {'P90':<12} {'P95':<12} {'P99':<12}")
    print("-" * 130)
    
    for query_type, stats in sorted_types:
        category, query_name = parse_query_key(query_type)
        print(
            f"{category:<12} "
            f"{query_name:<50} "
            f"{stats['p50']:<12.1f} "
            f"{stats['p75']:<12.1f} "
            f"{stats['p90']:<12.1f} "
            f"{stats['p95']:<12.1f} "
            f"{stats['p99']:<12.1f}"
        )
    
    print()
    print("=" * 130)
    print("TOP 20 SLOWEST INDIVIDUAL QUERIES (>100ms)")
    print("=" * 130)
    
    # Collect all slow queries
    all_slow = []
    for query_type, times in query_times.items():
        for t in times:
            if t > 100:
                all_slow.append((query_type, t))
    
    all_slow.sort(key=lambda x: x[1], reverse=True)
    
    print(f"{'Rank':<6} {'Category':<12} {'Query Type':<50} {'Time (ms)':<15}")
    print("-" * 130)
    for i, (qtype, time) in enumerate(all_slow[:20], 1):
        category, query_name = parse_query_key(qtype)
        print(f"{i:<6} {category:<12} {query_name:<50} {time:<15.1f}")
    
    if len(all_slow) > 20:
        print(f"\n... and {len(all_slow) - 20} more slow queries")
    
    print()
    print("=" * 130)
    print("SUMMARY")
    print("=" * 130)
    
    total_queries = sum(stats['count'] for stats in stats_by_type.values())
    total_slow = sum(stats['slow_count'] for stats in stats_by_type.values())
    
    print(f"Total queries analyzed: {total_queries}")
    if total_queries > 0:
        print(f"Total slow queries (>100ms): {total_slow} ({total_slow/total_queries*100:.1f}%)")
    print(f"Query types: {len(stats_by_type)}")
    
    if stats_by_type:
        # Identify worst performers
        worst_avg = max(stats_by_type.items(), key=lambda x: x[1]['avg'])
        worst_max = max(stats_by_type.items(), key=lambda x: x[1]['max'])
        worst_slow_pct = max(stats_by_type.items(), key=lambda x: x[1]['slow_percent'])
        
        print()
        print("Worst Performers:")
        print(f"  Highest average time: {worst_avg[0]} ({worst_avg[1]['avg']:.1f}ms)")
        print(f"  Highest max time: {worst_max[0]} ({worst_max[1]['max']:.1f}ms)")
        print(f"  Highest slow query %: {worst_slow_pct[0]} ({worst_slow_pct[1]['slow_percent']:.1f}%)")


def main():
    """Main entry point."""
    # Default log file path
    default_log = "cmd/server/n2_log.txt"
    
    # Allow command line argument for log file
    log_file = sys.argv[1] if len(sys.argv) > 1 else default_log
    
    print(f"Analyzing log file: {log_file}")
    print()
    
    query_times = analyze_log_file(log_file)
    if query_times:
        print_report(query_times)
    else:
        print("Failed to analyze log file.")


if __name__ == "__main__":
    main()

