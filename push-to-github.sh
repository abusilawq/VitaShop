#!/usr/bin/env bash
# ==========================================================
# VitaShop - Push to GitHub helper script
# ==========================================================
# Usage: bash push-to-github.sh
# Requires: git installed + a GitHub Personal Access Token (PAT)
# Create PAT here: https://github.com/settings/tokens
# Permissions needed: repo (full control)
# ==========================================================

set -e

REPO_URL="https://github.com/abusilawq/VitaShop.git"

echo "🌿 VitaShop — GitHub Push Helper"
echo "================================"
echo ""

# Init if not already a git repo
if [ ! -d ".git" ]; then
  echo "→ Initializing git repository..."
  git init -q
  git branch -M main
fi

# Set author info if missing
if [ -z "$(git config user.email)" ]; then
  read -p "Your name (e.g. Abu Silawq): " GIT_NAME
  read -p "Your email (GitHub email): " GIT_EMAIL
  git config user.name "$GIT_NAME"
  git config user.email "$GIT_EMAIL"
fi

# Add remote if not set
if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "$REPO_URL"
else
  git remote set-url origin "$REPO_URL"
fi

# Stage everything
echo "→ Staging all files..."
git add .

# Commit if there are changes
if ! git diff --cached --quiet; then
  echo "→ Creating commit..."
  git commit -q -m "Deploy: complete VitaShop e-commerce site"
fi

# Push
echo "→ Pushing to GitHub..."
echo ""
echo "When prompted:"
echo "  Username: your GitHub username (e.g. abusilawq)"
echo "  Password: your Personal Access Token (NOT your GitHub password)"
echo ""

git push -u origin main --force

echo ""
echo "✅ Done! Your site is on GitHub."
echo ""
echo "Next: Enable GitHub Pages"
echo "  1. Visit: https://github.com/abusilawq/VitaShop/settings/pages"
echo "  2. Source: 'Deploy from a branch'"
echo "  3. Branch: main, folder: / (root)"
echo "  4. Save"
echo ""
echo "Your site will be live at:"
echo "  https://abusilawq.github.io/VitaShop/"
