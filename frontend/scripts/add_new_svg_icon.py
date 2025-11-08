base_dir = "/home/lovestaco/hex/FreeDevTools/frontend"
svgs = [
    "./public/svg_icons/github/github-svgrepo-com.svg",
    "./public/svg_icons/github/npm-svgrepo-com.svg",
    "./public/svg_icons/automation/mcp-server-stroke-rounded.svg",
    "./public/svg_icons/github/star.svg",
]

png_cluster = "./data/cluster_png.json"
svg_cluster = "./data/cluster_svg.json"

API_KEY = ""
"""
svg_icons/github/github-svgrepo-com.svg
github - clusters
github-svgrepo-com - fileNames 
  
  

Example of the cluster_svg.json & cluster_png.json
{
  "clusters": {
    "eighteen": {
      "name": "eighteen",
      "source_folder": "eighteen",
      "path": "/freedevtools/unique/eighteen",
      "keywords": [
        "18",
        "free 18 icons",
        "free 18 svg",
        "unique",
        "exclusive",
        "18"
      ],
      "features": [
        "feature1",
        "feature2",
        "feature3"
      ],
      "title": "Free 18 icons | Online Free DevTools by Hexmos",
      "description": "count: 7, topic: 18, source: 18",
      "fileNames": [
        {
          "fileName": "_18_plus.svg",
          "description": "An SVG icon representing the '18 plus' rating or age restriction, commonly used to denote content suitable for adults.",
          "usecases": "This icon is ideal for marking age-restricted content on websites, apps, or digital platforms, ensuring users are aware of content suitability.",
          "synonyms": [
              "adult content icon",
              "age restriction symbol",
              "18+ logo"
          ],
          "tags": [
              "18 plus",
              "age restricted",
              "adult content",
              "symbol",
              "icon",
              "svg"
          ],
          "industry": "Relevant in media, entertainment, gaming, and any digital platform that hosts content with age restrictions.",
          "emotional_cues": "Conveys a sense of maturity, exclusivity, and adherence to guidelines, appealing to users seeking specific content or understanding platform rules.",
          "enhanced": true
     },
        {
          "fileName": "_1_tl.svg",
          "description": "An SVG icon representing the number '1' with a specific stylistic treatment, possibly indicating a primary or top-level item.",
          "usecases": "This icon can be used to highlight the first item in a list, a primary feature, or a top-ranking element in various user interfaces.",
          "synonyms": [
            "number one icon",
            "first place symbol",
            "primary indicator"
          ],
          "tags": [
            "number one",
            "first",
            "primary",
            "icon",
            "svg",
            "ranking"
          ],
          "industry": "Applicable in e-commerce, educational platforms, and any system where ranking or prioritization is visually communicated.",
          "emotional_cues": "Evokes a sense of leadership, importance, and achievement, suggesting the best or most significant option.",
          "enhanced": true
        }
      ]
    }
  }
}

curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'X-goog-api-key: ' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }'
"""

import json
import os
import re
from pathlib import Path

import requests


def generate_metadata_with_gemini(svg_path, cluster_name, format_type="svg"):
    """Generate metadata for SVG/PNG file using Gemini AI"""

    # Read SVG content
    with open(svg_path, "r", encoding="utf-8") as f:
        svg_content = f.read()

    # Extract filename
    filename = os.path.basename(svg_path)

    # Create format-specific prompt for Gemini
    if format_type == "svg":
        format_description = "vector-based SVG icon"
        format_benefits = "scalable, lightweight, and perfect for web applications"
        format_tags = ["svg", "vector", "scalable", "web"]
    else:  # png
        format_description = "raster-based PNG icon"
        format_benefits = "high-quality bitmap image with transparency support"
        format_tags = ["png", "bitmap", "raster", "transparent"]

    prompt = f"""
    Analyze this {format_description} and create metadata in JSON format. The icon is from the {cluster_name} category.
    
    Icon Content:
    {svg_content[:1000]}...
    
    Please create a JSON object with the following structure:
    {{
        "fileName": "{filename}",
        "description": "A detailed description of what this {format_description} represents, emphasizing its {format_benefits}",
        "usecases": "Specific use cases where this {format_description} would be appropriate",
        "synonyms": ["alternative names", "related terms"],
        "tags": ["relevant", "tags", "for", "search", "{format_tags[0]}", "{format_tags[1]}", "{format_tags[2]}", "{format_tags[3]}"],
        "industry": "Industries where this {format_description} is commonly used",
        "emotional_cues": "What emotions or feelings this {format_description} conveys",
        "enhanced": true
    }}
    
    Make the description professional and detailed. Focus on the {format_benefits} and practical applications for {format_type.upper()} format.
    """

    # Call Gemini API
    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
    headers = {"Content-Type": "application/json", "X-goog-api-key": API_KEY}

    data = {"contents": [{"parts": [{"text": prompt}]}]}

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()

        result = response.json()
        generated_text = result["candidates"][0]["content"]["parts"][0]["text"]

        # Extract JSON from the response
        json_match = re.search(r"\{.*\}", generated_text, re.DOTALL)
        if json_match:
            metadata = json.loads(json_match.group())
            return metadata
        else:
            # Fallback if JSON extraction fails
            return create_fallback_metadata(filename, cluster_name, format_type)

    except Exception as e:
        print(f"Error generating metadata for {filename}: {e}")
        return create_fallback_metadata(filename, cluster_name, format_type)


def create_fallback_metadata(filename, cluster_name, format_type="svg"):
    """Create fallback metadata if Gemini fails"""
    if format_type == "svg":
        format_desc = "vector-based SVG icon"
        format_tags = [cluster_name, "icon", "svg", "vector", "web", "ui"]
        format_benefits = "scalable and lightweight"
    else:  # png
        format_desc = "raster-based PNG icon"
        format_tags = [cluster_name, "icon", "png", "bitmap", "raster", "ui"]
        format_benefits = "high-quality with transparency support"

    return {
        "fileName": filename,
        "description": f"A {format_desc} from the {cluster_name} category, designed for modern web applications and user interfaces. This {format_benefits}.",
        "usecases": f"This {format_desc} can be used in {cluster_name}-related applications, websites, and digital interfaces.",
        "synonyms": [f"{cluster_name} icon", f"{format_type} icon", "web icon"],
        "tags": format_tags,
        "industry": f"Relevant in software development, web design, and {cluster_name} related industries.",
        "emotional_cues": "Conveys professionalism and modern design aesthetics.",
        "enhanced": True,
    }


def load_json_file(file_path):
    """Load JSON file"""
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json_file(file_path, data):
    """Save JSON file"""
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def update_cluster_files():
    """Update both cluster files with new SVG entries"""

    # Load existing cluster files
    svg_data = load_json_file(svg_cluster)
    png_data = load_json_file(png_cluster)

    # Process each SVG file
    for svg_path in svgs:
        full_path = os.path.join(base_dir, svg_path)

        if not os.path.exists(full_path):
            print(f"Warning: {full_path} does not exist, skipping...")
            continue

        # Determine cluster name from path
        if "github" in svg_path:
            cluster_name = "github"
        elif "automation" in svg_path:
            cluster_name = "automation"
        else:
            cluster_name = "github"  # default fallback

        print(f"Processing {svg_path} for cluster: {cluster_name}")

        # Generate separate metadata for SVG and PNG using Gemini AI
        svg_metadata = generate_metadata_with_gemini(full_path, cluster_name, "svg")
        png_metadata = generate_metadata_with_gemini(full_path, cluster_name, "png")

        # Create cluster if it doesn't exist
        if cluster_name not in svg_data["clusters"]:
            svg_data["clusters"][cluster_name] = {
                "name": cluster_name,
                "source_folder": cluster_name,
                "path": f"/freedevtools/unique/{cluster_name}",
                "keywords": [
                    cluster_name,
                    f"free {cluster_name} icons",
                    f"free {cluster_name} svg",
                    "unique",
                    "exclusive",
                    cluster_name,
                ],
                "features": ["feature1", "feature2", "feature3"],
                "title": f"Free {cluster_name} icons | Online Free DevTools by Hexmos",
                "description": f"count: 0, topic: {cluster_name}, source: {cluster_name}",
                "fileNames": [],
            }

        if cluster_name not in png_data["clusters"]:
            png_data["clusters"][cluster_name] = {
                "name": cluster_name,
                "source_folder": cluster_name,
                "path": f"/freedevtools/unique/{cluster_name}",
                "keywords": [
                    cluster_name,
                    f"free {cluster_name} icons",
                    f"free {cluster_name} png",
                    "unique",
                    "exclusive",
                    cluster_name,
                ],
                "features": ["feature1", "feature2", "feature3"],
                "title": f"Free {cluster_name} icons | Online Free DevTools by Hexmos",
                "description": f"count: 0, topic: {cluster_name}, source: {cluster_name}",
                "fileNames": [],
            }

        # Add to SVG cluster
        svg_data["clusters"][cluster_name]["fileNames"].append(svg_metadata)
        # Update count in description
        current_count = len(svg_data["clusters"][cluster_name]["fileNames"])
        svg_data["clusters"][cluster_name][
            "description"
        ] = f"count: {current_count}, topic: {cluster_name}, source: {cluster_name}"

        # Add to PNG cluster with PNG-specific metadata
        png_data["clusters"][cluster_name]["fileNames"].append(png_metadata)
        # Update count in description
        current_count = len(png_data["clusters"][cluster_name]["fileNames"])
        png_data["clusters"][cluster_name][
            "description"
        ] = f"count: {current_count}, topic: {cluster_name}, source: {cluster_name}"

    # Save updated files
    save_json_file(svg_cluster, svg_data)
    save_json_file(png_cluster, png_data)

    print("Successfully updated both cluster files!")


if __name__ == "__main__":
    update_cluster_files()
