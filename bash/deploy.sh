#!/bin/bash

set -euo pipefail

# Debug
echo "Go to write.kintana-technology.com..."

cd ~/domains/write.kintana-technology.com/public_html/

echo "Resetting to origin/main..."
git reset --hard origin/main

echo "Pulling from origin/main..."
git pull origin main

npm install

npm run build

echo "Deployment completed successfully."