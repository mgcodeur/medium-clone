#!/bin/bash
echo "Starting deployment..."

echo "Fetching latest changes from origin..."
git fetch origin

echo "Resetting to origin/main..."
git reset --hard origin/main

echo "Pulling from origin/main..."
git pull origin main

echo "Installing npm dependencies..."
npm install

echo "Building the application..."
nohup npm run build:css > /dev/null 2>&1 &
nohup npm run build:js > /dev/null 2>&1 &

echo "Remove server cache..."

echo "Deployment completed successfully."
