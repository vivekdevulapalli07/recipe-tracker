# Recipe Tracker

A simple web application to store recipes and generate shopping lists. The app works well on both desktop and mobile devices.

## Features

- View and search recipes
- Add new recipes (better on desktop)
- Check off ingredients when shopping (mobile-friendly)
- Responsive design for both desktop and mobile use

## How to Deploy

1. **Create a GitHub repository**
   - Sign in to your GitHub account or create one if you don't have it
   - Click the "+" button in the top right and select "New repository"
   - Name your repository (e.g., "recipe-tracker")
   - Make it public
   - Click "Create repository"

2. **Upload the files**
   - Upload all the files in this folder to your repository
   - You can drag and drop the files or use Git commands if you're familiar with them

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Under "Source", select the branch you want to deploy (usually "main")
   - Click "Save"

4. **Access your website**
   - After a few minutes, your site will be available at `https://[your-username].github.io/[repository-name]/`
   - For example: `https://johndoe.github.io/recipe-tracker/`

## How to Use

### Adding Recipes (Desktop)
1. Click the "Add New Recipe" button
2. Fill in the recipe name
3. Enter ingredients (one per line, with quantities)
4. Enter instructions (one step per line)
5. Click "Save Recipe"

### Shopping (Mobile)
1. Open the website on your mobile device
2. Find your recipe using the search bar
3. Click on the recipe to view details
4. Check off ingredients as you shop
5. Checked items will remain checked for your next shopping trip

## Technical Details

This application uses:
- HTML5, CSS3, and vanilla JavaScript
- LocalStorage to save recipes and shopping list status
- Responsive design for both desktop and mobile use
- No server-side code, making it perfect for GitHub Pages hosting

## Customization

Feel free to modify the CSS in `styles.css` to customize the appearance to your liking.