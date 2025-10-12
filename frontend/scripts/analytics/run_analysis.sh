#!/bin/bash

# PageSpeed Analytics Runner Script
# This script sets up the environment and runs the PageSpeed analysis

echo "🚀 Starting PageSpeed Analytics for FreeDevTools"
echo "================================================"

# Check if Python 3 is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    exit 1
fi

# Check if pip is available
if ! command -v pip3 &> /dev/null; then
    echo "❌ pip3 is required but not installed."
    exit 1
fi

# Install dependencies if requirements.txt exists
if [ -f "requirements.txt" ]; then
    echo "📦 Installing dependencies..."
    pip3 install -r requirements.txt
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed successfully"
fi

# Make the Python script executable
chmod +x analyze.py

# Run the analysis
echo "🔍 Running PageSpeed analysis..."
python3 analyze.py

echo "✅ Analysis complete!"
