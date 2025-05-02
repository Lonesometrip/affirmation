# GitHub Pages Deployment Guide with Custom Domain

This guide will help you deploy your Premium Chauffeur website to GitHub Pages with the custom domain www.premium-chauffeur.com.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed
- Domain name (www.premium-chauffeur.com) with access to DNS settings

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository "affirmation" (or any other name you prefer)
4. Make sure the repository is public
5. Click "Create repository"

## Step 2: Configure Your Local Repository

1. Open a terminal or command prompt
2. Navigate to your project directory
3. Run the following commands, replacing `YOUR_USERNAME` with your GitHub username:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/affirmation.git
git push -u origin main
```

## Step 3: Configure the Base URL in vite.config.js

1. Open the `vite.config.js` file in your project
2. For a custom domain, set the `base` property to '/':

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for custom domains
  server: {
    port: 3000,
    open: true
  }
})
```

## Step 4: Update package.json

1. Open the `package.json` file in your project
2. Make sure it has the following properties and scripts:

```json
{
  "name": "driversline",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "homepage": "https://www.premium-chauffeur.com",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  // ...rest of your package.json
}
```

## Step 5: Create a CNAME file

1. Create a file named `CNAME` (no file extension) in the `public` directory
2. Add your domain name to the file:

```
www.premium-chauffeur.com
```

This file will be copied to the root of your built website and tell GitHub Pages to use your custom domain.

## Step 6: Build and Deploy

1. Install the gh-pages package if you haven't already:

```bash
npm install gh-pages --save-dev
```

2. Build and deploy your website:

```bash
npm run deploy
```

3. Wait for the deployment to complete. You should see a success message.

## Step 7: Configure GitHub Pages and Custom Domain

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Make sure the source is set to the "gh-pages" branch
5. In the "Custom domain" field, enter `www.premium-chauffeur.com`
6. Check the "Enforce HTTPS" option if available
7. Click "Save"

## Step 8: Configure DNS Settings

1. Log in to your domain registrar's website (where you purchased premium-chauffeur.com)
2. Go to the DNS settings for your domain
3. Add the following DNS records:

   - Type: A
   - Name: @
   - Value: 185.199.108.153
   - Value: 185.199.109.153
   - Value: 185.199.110.153
   - Value: 185.199.111.153

   (These are GitHub Pages' IP addresses)

   - Type: CNAME
   - Name: www
   - Value: YOUR_USERNAME.github.io

   (Replace YOUR_USERNAME with your GitHub username)

4. Save the changes

## Step 9: Access Your Website

Your website should now be available at:

```
https://www.premium-chauffeur.com
```

It might take up to 24 hours for DNS changes to propagate completely.

## Troubleshooting

If you encounter any issues:

1. Make sure your repository name is correct in all configurations
2. Check that you have the correct GitHub username
3. Ensure that the gh-pages branch was created successfully
4. Verify that GitHub Pages is enabled in your repository settings
5. Check your DNS settings with your domain registrar
6. Verify that the CNAME file exists in the root of your gh-pages branch
7. Wait at least 24 hours for DNS changes to fully propagate

### Common Issues with Custom Domains:

- **404 Error**: Make sure your CNAME file is correctly set up and your DNS settings are properly configured
- **HTTPS Not Working**: It can take up to 24 hours for GitHub to provision an SSL certificate for your custom domain
- **Domain Not Resolving**: Double-check your DNS settings and wait for propagation

## Updating Your Website

To update your website in the future:

1. Make your changes to the code
2. Run `npm run deploy` again
3. Wait for the changes to propagate

Note: Your custom domain settings will persist, so you don't need to reconfigure them after each deployment.
