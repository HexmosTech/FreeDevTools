#!/usr/bin/env python3
"""
MCP Data Counts Updater

This script automatically updates pagination and filter counts across all MCP JSON files
when new servers, tools, or clients are added.

Usage:
    python update_counts.py

The script will:
1. Read all MCP JSON files
2. Count items and update pagination totals
3. Count filter categories and update filter counts
4. Update metadata with latest counts
5. Write updated files back to disk
"""

import json
import os
from collections import Counter
from datetime import datetime
from typing import Any, Dict, List

# File paths
DATA_DIR = os.path.dirname(os.path.abspath(__file__))
SERVERS_FILE = os.path.join(DATA_DIR, "servers.json")
TOOLS_FILE = os.path.join(DATA_DIR, "tools.json")
CLIENTS_FILE = os.path.join(DATA_DIR, "clients.json")
CATEGORIES_FILE = os.path.join(DATA_DIR, "categories.json")
METADATA_FILE = os.path.join(DATA_DIR, "metadata.json")


def load_json(file_path: str) -> Dict[str, Any]:
    """Load JSON data from file."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Warning: {file_path} not found")
        return {}
    except json.JSONDecodeError as e:
        print(f"Error parsing {file_path}: {e}")
        return {}


def save_json(file_path: str, data: Dict[str, Any]) -> None:
    """Save JSON data to file with proper formatting."""
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def update_servers_data(servers_data: Dict[str, Any]) -> Dict[str, Any]:
    """Update servers data with correct counts."""
    servers = servers_data.get("servers", [])
    total_servers = len(servers)

    # Update pagination
    if "pagination" not in servers_data:
        servers_data["pagination"] = {}

    servers_data["pagination"]["total"] = total_servers
    servers_data["pagination"]["totalPages"] = (
        total_servers + servers_data["pagination"].get("perPage", 100) - 1
    ) // servers_data["pagination"].get("perPage", 100)

    # Count categories
    category_counts = Counter()
    license_counts = Counter()
    security_scores = Counter()
    license_scores = Counter()
    quality_scores = Counter()

    for server in servers:
        # Count categories
        for category in server.get("categories", []):
            category_counts[category] += 1

        # Count licenses
        license = server.get("license", "Unknown")
        license_counts[license] += 1

        # Count scores
        scores = server.get("scores", {})
        security_scores[scores.get("security", "Unknown")] += 1
        license_scores[scores.get("license", "Unknown")] += 1
        quality_scores[scores.get("quality", "Unknown")] += 1

    # Update filters
    if "filters" not in servers_data:
        servers_data["filters"] = {}

    servers_data["filters"]["categories"] = dict(category_counts)
    servers_data["filters"]["licenses"] = dict(license_counts)
    servers_data["filters"]["scores"] = {
        "security": dict(security_scores),
        "license": dict(license_scores),
        "quality": dict(quality_scores),
    }

    return servers_data


def update_tools_data(tools_data: Dict[str, Any]) -> Dict[str, Any]:
    """Update tools data with correct counts."""
    tools = tools_data.get("tools", [])
    total_tools = len(tools)

    # Update pagination
    if "pagination" not in tools_data:
        tools_data["pagination"] = {}

    tools_data["pagination"]["total"] = total_tools
    tools_data["pagination"]["totalPages"] = (
        total_tools + tools_data["pagination"].get("perPage", 100) - 1
    ) // tools_data["pagination"].get("perPage", 100)

    # Count categories and servers
    category_counts = Counter()
    server_counts = Counter()

    for tool in tools:
        category = tool.get("category", "other")
        category_counts[category] += 1

        server_id = tool.get("serverId", "unknown")
        server_counts[server_id] += 1

    # Update filters
    if "filters" not in tools_data:
        tools_data["filters"] = {}

    tools_data["filters"]["categories"] = dict(category_counts)
    tools_data["filters"]["servers"] = dict(server_counts)

    return tools_data


def update_clients_data(clients_data: Dict[str, Any]) -> Dict[str, Any]:
    """Update clients data with correct counts."""
    clients = clients_data.get("clients", [])
    total_clients = len(clients)

    # Update pagination
    if "pagination" not in clients_data:
        clients_data["pagination"] = {}

    clients_data["pagination"]["total"] = total_clients
    clients_data["pagination"]["totalPages"] = (
        total_clients + clients_data["pagination"].get("perPage", 100) - 1
    ) // clients_data["pagination"].get("perPage", 100)

    # Count platforms, prices, and programming languages
    platform_counts = Counter()
    price_counts = Counter()
    language_counts = Counter()

    for client in clients:
        # Count platforms
        for platform in client.get("platforms", []):
            platform_counts[platform] += 1

        # Count prices and languages
        price = client.get("price", "Unknown")
        language = client.get("programmingLanguage", "Unknown")

        price_counts[price] += 1
        language_counts[language] += 1

    # Update filters
    if "filters" not in clients_data:
        clients_data["filters"] = {}

    clients_data["filters"]["platforms"] = dict(platform_counts)
    clients_data["filters"]["prices"] = dict(price_counts)
    clients_data["filters"]["programmingLanguages"] = dict(language_counts)

    return clients_data


def update_categories_data(
    categories_data: Dict[str, Any], servers_data: Dict[str, Any]
) -> Dict[str, Any]:
    """Update categories data with correct counts."""
    categories = categories_data.get("categories", [])

    # Count total servers from servers data
    total_servers = len(servers_data.get("servers", []))

    # Update total counts
    categories_data["totalCategories"] = len(categories)
    categories_data["totalServers"] = total_servers

    # Update server counts for each category based on actual servers
    category_server_counts = Counter()
    for server in servers_data.get("servers", []):
        for category in server.get("categories", []):
            category_server_counts[category] += 1

    # Update serverCount for each category
    for category in categories:
        category_id = category.get("id", "")
        category["serverCount"] = category_server_counts.get(category_id, 0)

    return categories_data


def update_metadata(
    metadata_data: Dict[str, Any],
    servers_data: Dict[str, Any],
    tools_data: Dict[str, Any],
    clients_data: Dict[str, Any],
    categories_data: Dict[str, Any],
) -> Dict[str, Any]:
    """Update metadata with latest counts."""
    metadata_data["totalServers"] = len(servers_data.get("servers", []))
    metadata_data["totalTools"] = len(tools_data.get("tools", []))
    metadata_data["totalClients"] = len(clients_data.get("clients", []))
    metadata_data["totalCategories"] = categories_data.get("totalCategories", 0)
    metadata_data["lastUpdated"] = datetime.now().isoformat() + "Z"

    return metadata_data


def main():
    """Main function to update all MCP data files."""
    print("🔄 Updating MCP data counts...")

    # Load all data files
    print("📖 Loading data files...")
    servers_data = load_json(SERVERS_FILE)
    tools_data = load_json(TOOLS_FILE)
    clients_data = load_json(CLIENTS_FILE)
    categories_data = load_json(CATEGORIES_FILE)
    metadata_data = load_json(METADATA_FILE)

    # Update each data file
    print("🔢 Updating servers data...")
    servers_data = update_servers_data(servers_data)

    print("🔧 Updating tools data...")
    tools_data = update_tools_data(tools_data)

    print("💻 Updating clients data...")
    clients_data = update_clients_data(clients_data)

    print("📂 Updating categories data...")
    categories_data = update_categories_data(categories_data, servers_data)

    print("📊 Updating metadata...")
    metadata_data = update_metadata(
        metadata_data, servers_data, tools_data, clients_data, categories_data
    )

    # Save all updated files
    print("💾 Saving updated files...")
    save_json(SERVERS_FILE, servers_data)
    save_json(TOOLS_FILE, tools_data)
    save_json(CLIENTS_FILE, clients_data)
    save_json(CATEGORIES_FILE, categories_data)
    save_json(METADATA_FILE, metadata_data)

    # Print summary
    print("\n✅ Update complete!")
    print(f"📊 Total Servers: {metadata_data['totalServers']:,}")
    print(f"🔧 Total Tools: {metadata_data['totalTools']:,}")
    print(f"💻 Total Clients: {metadata_data['totalClients']:,}")
    print(f"📂 Total Categories: {metadata_data['totalCategories']}")
    print(f"🕒 Last Updated: {metadata_data['lastUpdated']}")


if __name__ == "__main__":
    main()
