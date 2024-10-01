#!/bin/bash

set -euo pipefail

echo "Starting deployment..."

echo "Navigating to ~/domains/write.kintana-technology.com/public_html/..."
cd ~/domains/write.kintana-technology.com/public_html/

# Ensure you are on the correct branch
echo "Fetching latest changes from origin..."
git fetch origin

echo "Resetting to origin/main..."
git reset --hard origin/main

echo "Pulling from origin/main..."
git pull origin main

echo "Installing npm dependencies..."
npm install

echo "Building the application..."
npm run build

echo "Deployment completed successfully."
