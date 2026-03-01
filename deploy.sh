#!/bin/bash
set -e

echo "→ Pulling latest changes..."
git pull

echo "→ Building..."
npm run build

echo "→ Restarting service..."
sudo systemctl restart belg-website

echo "✓ Deployed."
