import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create .github/workflows directory if it doesn't exist
const workflowsDir = path.join(__dirname, '../.github/workflows');
if (!fs.existsSync(path.join(__dirname, '../.github'))) {
  fs.mkdirSync(path.join(__dirname, '../.github'));
}
if (!fs.existsSync(workflowsDir)) {
  fs.mkdirSync(workflowsDir);
}

// Create deploy.yml file
const deployYmlContent = `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Setup Node.js ⚙️
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies 📦
        run: npm ci

      - name: Build website 🔧
        run: npm run build

      - name: Copy CNAME file 📋
        run: |
          if [ -f "public/CNAME" ]; then
            cp public/CNAME dist/
          else
            echo "www.premium-chauffeur.com" > dist/CNAME
          fi

      - name: Copy server config files 🔧
        run: |
          if [ -f "public/.htaccess" ]; then
            cp public/.htaccess dist/
          fi
          if [ -f "public/web.config" ]; then
            cp public/web.config dist/
          fi

      - name: Fix paths in index.html 🔧
        run: |
          sed -i 's|src="/assets/|src="./assets/|g' dist/index.html
          sed -i 's|href="/assets/|href="./assets/|g' dist/index.html

      - name: Deploy to GitHub Pages 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
`;

fs.writeFileSync(path.join(workflowsDir, 'deploy.yml'), deployYmlContent);
console.log('✅ Created GitHub Actions workflow file: .github/workflows/deploy.yml');

// Update package.json to add a script to run this setup
try {
  const packageJsonPath = path.join(__dirname, '../package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Add the setup-github-actions script if it doesn't exist
  if (!packageJson.scripts['setup-github-actions']) {
    packageJson.scripts['setup-github-actions'] = 'node scripts/setup-github-actions.js';
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Added setup-github-actions script to package.json');
  }
} catch (error) {
  console.error('❌ Error updating package.json:', error);
}

console.log('✅ GitHub Actions setup complete!');
console.log('');
console.log('To use GitHub Actions for deployment:');
console.log('1. Commit these changes to your repository');
console.log('2. Push to GitHub');
console.log('3. GitHub Actions will automatically deploy your website when you push to main or master branch');
console.log('');
console.log('You can also manually trigger a deployment from the Actions tab in your GitHub repository');
