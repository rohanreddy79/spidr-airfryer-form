# GitHub Pages Deployment Guide

This guide will walk you through deploying the Spidr Air Fryer Interest Form to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm/pnpm installed

## Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `spidr-airfryer-form`
5. Make sure it's **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2. Update Configuration

Before deploying, you need to update the configuration with your GitHub username:

1. Open `package.json` in your code editor
2. Find the `homepage` field (line 6)
3. Replace `yourusername` with your actual GitHub username:
   ```json
   "homepage": "https://yourusername.github.io/spidr-airfryer-form"
   ```

### 3. Initialize Git and Connect to GitHub

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Spidr Air Fryer Interest Form"

# Rename branch to main
git branch -M main

# Connect to your GitHub repository (replace yourusername)
git remote add origin https://github.com/yourusername/spidr-airfryer-form.git

# Push to GitHub
git push -u origin main
```

### 4. Install Dependencies and Deploy

```bash
# Install dependencies
npm install

# Deploy to GitHub Pages
npm run deploy
```

The `npm run deploy` command will:
- Build the production version of your app
- Create a `gh-pages` branch
- Push the built files to that branch

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "gh-pages"
6. Leave folder as "/ (root)"
7. Click "Save"

### 6. Access Your Live Site

- Your site will be available at: `https://yourusername.github.io/spidr-airfryer-form`
- It may take 5-10 minutes for the site to become available
- GitHub will show a green checkmark when deployment is complete

## Making Updates

To update your deployed site:

1. Make changes to your code
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   ```
3. Deploy the updates:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Common Issues

**Site shows 404 error:**
- Check that GitHub Pages is enabled in repository settings
- Verify the `homepage` URL in package.json matches your repository
- Wait a few more minutes for deployment to complete

**Blank page or assets not loading:**
- Verify the `base` path in `vite.config.js` matches your repository name
- Check browser console for error messages

**Deploy command fails:**
- Make sure you've committed all changes to git first
- Check that you have write permissions to the repository

### Verification Steps

1. **Check GitHub Pages Status:**
   - Go to repository Settings > Pages
   - Look for green checkmark and "Your site is live at..." message

2. **Test the Form:**
   - Fill out all fields
   - Click submit
   - Open browser developer tools (F12)
   - Check Console tab for form data output

3. **Test Responsive Design:**
   - Resize browser window
   - Test on mobile device
   - Verify form remains usable at all screen sizes

## Alternative Deployment Options

If GitHub Pages doesn't work for you, the built files in the `dist` folder can be deployed to:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **Any web hosting service**: Upload `dist` folder contents

## Repository Structure for GitHub

Your final repository should contain:

```
spidr-airfryer-form/
├── .gitignore
├── README.md
├── DEPLOYMENT_GUIDE.md
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── components/
└── public/
```

## Support

If you encounter issues:
1. Check the GitHub Pages documentation
2. Verify all configuration files match the examples
3. Ensure your repository is public
4. Try deploying again after a few minutes

The form should be fully functional once deployed, matching the Spidr Design aesthetic with all required fields and functionality.

