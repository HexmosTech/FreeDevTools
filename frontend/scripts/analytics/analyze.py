#!/usr/bin/env python3
"""
PageSpeed Analytics Script for FreeDevTools
Uses Google PageSpeed Insights API v5 to analyze website performance
"""

import json
import os
import sys
from datetime import datetime
from pprint import pprint
from typing import Any, Dict, Optional

import requests
from google.auth.transport.requests import Request
from google.oauth2 import service_account


class PageSpeedAnalyzer:
    def __init__(self, service_account_path: str):
        """Initialize the PageSpeed analyzer with service account credentials."""
        self.service_account_path = service_account_path
        self.credentials = None
        self.access_token = None
        self.base_url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"

    def authenticate(self) -> bool:
        """Authenticate using service account credentials."""
        try:
            # Load service account credentials
            self.credentials = service_account.Credentials.from_service_account_file(
                self.service_account_path,
                scopes=["https://www.googleapis.com/auth/pagespeedonline"],
            )

            # Get access token
            self.credentials.refresh(Request())
            self.access_token = self.credentials.token

            if not self.access_token:
                print("❌ No access token received")
                return False

            print("✅ Authentication successful")
            return True

        except Exception as e:
            print(f"❌ Authentication failed: {e}")
            return False

    def run_pagespeed_analysis(
        self, url: str, strategy: str = "mobile"
    ) -> Optional[Dict[str, Any]]:
        """
        Run PageSpeed analysis on the specified URL.

        Args:
            url: The URL to analyze
            strategy: Analysis strategy ('mobile' or 'desktop')

        Returns:
            Dictionary containing PageSpeed analysis results
        """
        # Use the same API key that works in pageSpeed.cjs
        api_key = "AIzaSyAwMpJoEVUp9aMb-MZkwnTyPEd8jyzvvg4"

        params = {"url": url, "strategy": strategy, "key": api_key}

        try:
            print(f"🔍 Analyzing {url} ({strategy})...")
            response = requests.get(self.base_url, params=params)
            response.raise_for_status()

            data = response.json()

            print(f"\n📊 RAW PAGESPEED API RESPONSE:")
            print("=" * 80)
            pprint(data, width=120, depth=3)
            print("=" * 80)

            # Save to JSON file
            self.save_to_json(data, url, strategy)

            return data

        except requests.exceptions.RequestException as e:
            print(f"❌ API request failed: {e}")
            return None
        except Exception as e:
            print(f"❌ Analysis failed: {e}")
            return None

    def save_to_json(self, data: Dict[str, Any], url: str, strategy: str) -> None:
        """Save the PageSpeed response to a JSON file."""
        try:
            # Create output directory inside public/analytics/output (relative to project root)
            root_dir = os.path.dirname(
                os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            )
            output_dir = os.path.join(root_dir, "public", "analytics", "output")
            os.makedirs(output_dir, exist_ok=True)

            # Convert URL to filename format
            # Remove protocol and domain, replace / with _
            url_parts = url.replace("https://", "").replace("http://", "")
            url_parts = url_parts.split("/", 1)[1] if "/" in url_parts else url_parts
            filename = url_parts.replace("/", "_").replace("?", "_").replace("&", "_")

            # Remove trailing underscore if present
            filename = filename.rstrip("_")

            # Add strategy and timestamp
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"{filename}_{strategy}_{timestamp}.json"

            filepath = os.path.join(output_dir, filename)

            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)

            print(f"💾 Response saved to: {filepath}")

        except Exception as e:
            print(f"❌ Failed to save JSON file: {e}")


def main():
    """Main function to run PageSpeed analysis."""
    # List of URLs to analyze
    urls = [
        "https://hexmos.com/freedevtools/",
        "https://hexmos.com/freedevtools/c/",
        "https://hexmos.com/freedevtools/c/backend/",
        "https://hexmos.com/freedevtools/c/backend/adonis/",
        "https://hexmos.com/freedevtools/t/",
        "https://hexmos.com/freedevtools/t/svg-viewer/",
        "https://hexmos.com/freedevtools/tldr/",
        "https://hexmos.com/freedevtools/tldr/adb/",
        "https://hexmos.com/freedevtools/tldr/adb/adb-connect/",
        "https://hexmos.com/freedevtools/emojis/",
        "https://hexmos.com/freedevtools/emojis/activities/",
        "https://hexmos.com/freedevtools/emojis/american-football/",
        "https://hexmos.com/freedevtools/svg_icons/",
        "https://hexmos.com/freedevtools/svg_icons/abacus/",
        "https://hexmos.com/freedevtools/svg_icons/abacus/regular-earth-africa/",
        "https://hexmos.com/freedevtools/mcp/1/",
        "https://hexmos.com/freedevtools/mcp/apis-and-http-requests/1/",
        "https://hexmos.com/freedevtools/mcp/apis-and-http-requests/0xKoda--eth-mcp/",
    ]

    # Initialize analyzer (without service account for now)
    analyzer = PageSpeedAnalyzer("")

    # Run analysis for mobile strategy
    strategy = "mobile"

    print(f"🚀 Starting PageSpeed analysis for {len(urls)} URLs")
    print(f"📱 Strategy: {strategy.upper()}")
    print("=" * 80)

    for i, url in enumerate(urls, 1):
        print(f"\n[{i}/{len(urls)}] Analyzing: {url}")
        print("-" * 60)

        result = analyzer.run_pagespeed_analysis(url, strategy)

        if not result:
            print(f"❌ Failed to analyze: {url}")

        # Add a small delay between requests to be respectful to the API
        if i < len(urls):
            print("⏳ Waiting 2 seconds before next request...")
            import time

            time.sleep(2)

    print(f"\n✅ Completed analysis of {len(urls)} URLs")


if __name__ == "__main__":
    main()
