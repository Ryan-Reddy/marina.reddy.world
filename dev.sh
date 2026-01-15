#!/bin/bash

# Marina Reddy World - Development Server
# This script starts the Vite development server

echo "🚀 Starting Marina Reddy World development server..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start the development server
echo "🌐 Starting Vite dev server at http://localhost:6969"
echo "💫 Server accessible on local network - check terminal output for network URL"
echo "✨ Press Ctrl+C to stop the server"
echo ""

npm run dev
