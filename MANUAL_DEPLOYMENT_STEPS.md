# Manual Deployment Steps for GitHub Pages with Custom Domain

Follow these steps to manually deploy your Premium Chauffeur website to GitHub Pages with your custom domain (www.premium-chauffeur.com).

## Step 1: Build the Website

1. Open a terminal or command prompt
2. Navigate to your project directory
3. Run the build command:

```bash
npm run build
```

This will create a `dist` folder with your built website.

## Step 2: Create a CNAME File

1. Create a file named `CNAME` (no file extension) in the `dist` folder
2. Add your domain name to the file:

```
www.premium-chauffeur.com
```

## Step 3: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository "affirmation" (or any other name you prefer)
4. Make sure the repository is public
5. Click "Create repository"

## Step 4: Initialize and Push Your Code

1. Open a terminal or command prompt
2. Navigate to your project directory
3. Run the following commands:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Lonesometrip/affirmation.git
git push -u origin main
```

## Step 5: Create a gh-pages Branch

1. Create a new branch for GitHub Pages:

```bash
git checkout -b gh-pages
```

2. Remove everything except the `dist` folder:

```bash
git rm -rf --cached .
git add dist
```

3. Commit the changes:

```bash
git commit -m "Deploy to GitHub Pages"
```

4. Push the branch to GitHub:

```bash
git push -u origin gh-pages
```

## Step 6: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Make sure the source is set to the "gh-pages" branch
5. In the "Custom domain" field, enter `www.premium-chauffeur.com`
6. Check the "Enforce HTTPS" option if available
7. Click "Save"

## Step 7: Configure DNS Settings

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
   - Value: lonesometrip.github.io
   
   (Replace lonesometrip with your GitHub username)

4. Save the changes

## Step 8: Wait for DNS Propagation

It might take up to 24 hours for DNS changes to propagate completely. After that, your website should be accessible at:

```
https://www.premium-chauffeur.com
```

## Updating Your Website

To update your website in the future:

1. Make your changes to the code
2. Run `npm run build` to build the website
3. Copy the contents of the `dist` folder to the `gh-pages` branch
4. Push the changes to GitHub

```bash
git checkout gh-pages
# Copy the contents of the dist folder to the root directory
git add .
git commit -m "Update website"
git push origin gh-pages
```
