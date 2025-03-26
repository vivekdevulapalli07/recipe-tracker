// Import recipe data from recipes.js
// The recipeData constant should be defined in recipes.js

// Global recipes variable with IDs
let recipes = [];

// Function to initialize recipes with IDs
function initializeRecipes() {
    // Reset localStorage to ensure all recipes are loaded
    const forceReset = false; // Set to true when you add new recipes to clear localStorage
    
    if (forceReset) {
        localStorage.removeItem('recipes');
        localStorage.removeItem('recipeVersion');
    }
    
    // Add a version number to track recipe updates
    const currentVersion = '1.1'; // Increment this when you update recipes
    const storedVersion = localStorage.getItem('recipeVersion');
    
    // Check if we have recipes in localStorage and version matches
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    
    if (storedRecipes && storedRecipes.length > 0 && storedVersion === currentVersion) {
        // Use stored recipes if they exist and version matches
        recipes = storedRecipes;
        console.log('Loaded recipes from localStorage, version:', storedVersion);
    } else {
        // Otherwise initialize from recipeData with IDs
        recipes = recipeData.map(recipe => {
            return {
                id: generateId(),
                ...recipe
            };
        });
        
        // Store in localStorage for checkbox state persistence
        saveRecipes();
        localStorage.setItem('recipeVersion', currentVersion);
        console.log('Initialized recipes from data, new version:', currentVersion);
    }
}

// DOM elements
const recipesList = document.getElementById('recipes-list');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const addRecipeButton = document.getElementById('add-recipe-button');
const addRecipeModal = document.getElementById('add-recipe-modal');
const recipeForm = document.getElementById('recipe-form');
const closeModalButton = document.querySelector('.close');

// Display recipes
function displayRecipes(recipesToDisplay = recipes) {
    recipesList.innerHTML = '';
    
    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <h2>${recipe.name}</h2>
            <p>${recipe.ingredients.length} ingredients</p>
            <p>${recipe.instructions.length} steps</p>
        `;
        
        recipeCard.addEventListener('click', () => {
            window.location.href = `recipe.html?id=${recipe.id}`;
        });
        
        recipesList.appendChild(recipeCard);
    });
}

// Search recipes function
function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayRecipes();
        return;
    }
    
    const filteredRecipes = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
        );
    });
    
    displayRecipes(filteredRecipes);
}

// Modal functionality
function setupModal() {
    // Only setup if elements exist (index.html page)
    if (!addRecipeButton || !addRecipeModal) return;
    
    // Open modal
    addRecipeButton.addEventListener('click', () => {
        addRecipeModal.style.display = 'block';
    });
    
    // Close modal
    closeModalButton.addEventListener('click', () => {
        addRecipeModal.style.display = 'none';
    });
    
    // Click outside to close
    window.addEventListener('click', (event) => {
        if (event.target === addRecipeModal) {
            addRecipeModal.style.display = 'none';
        }
    });
    
    // Form submission
    recipeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('recipe-name').value.trim();
        const ingredientsText = document.getElementById('recipe-ingredients').value.trim();
        const instructionsText = document.getElementById('recipe-instructions').value.trim();
        
        // Parse ingredients and instructions
        const ingredients = ingredientsText.split('\n').filter(line => line.trim() !== '');
        const instructions = instructionsText.split('\n').filter(line => line.trim() !== '');
        
        // Create new recipe
        const newRecipe = {
            id: generateId(),
            name,
            ingredients,
            instructions
        };
        
        // Add to recipes array
        recipes.push(newRecipe);
        
        // Save to localStorage
        saveRecipes();
        
        // Refresh display
        displayRecipes();
        
        // Close modal and reset form
        addRecipeModal.style.display = 'none';
        recipeForm.reset();
    });
}

// Utility functions
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// For recipe.html page
function loadRecipeDetails() {
    const recipeContainer = document.getElementById('recipe-container');
    if (!recipeContainer) return; // Not on recipe page
    
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    
    if (!recipeId) {
        window.location.href = 'index.html';
        return;
    }
    
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) {
        window.location.href = 'index.html';
        return;
    }
    
    // Set page title
    document.title = recipe.name;
    
    // Create recipe HTML
    recipeContainer.innerHTML = `
        <h1>${recipe.name}</h1>
        
        <div class="ingredients-section">
            <h2>Ingredients</h2>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `
                    <li class="ingredient-item">
                        <input type="checkbox" class="ingredient-checkbox" id="ingredient-${recipe.ingredients.indexOf(ingredient)}">
                        <label for="ingredient-${recipe.ingredients.indexOf(ingredient)}">${ingredient}</label>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="instructions-section">
            <h2>Instructions</h2>
            <ol class="instructions-list">
                ${recipe.instructions.map(instruction => `
                    <li>${instruction}</li>
                `).join('')}
            </ol>
        </div>
        
        <a href="index.html" class="back-button">Back to Recipes</a>
    `;
    
    // Save checkbox states to localStorage
    const checkboxes = recipeContainer.querySelectorAll('.ingredient-checkbox');
    
    checkboxes.forEach((checkbox, index) => {
        const storageKey = `${recipeId}-ingredient-${index}`;
        
        // Load saved state
        checkbox.checked = localStorage.getItem(storageKey) === 'true';
        
        // Save state on change
        checkbox.addEventListener('change', () => {
            localStorage.setItem(storageKey, checkbox.checked);
        });
    });
}

// Search functionality
function setupSearch() {
    if (!searchButton || !searchInput) return;
    
    searchButton.addEventListener('click', searchRecipes);
    
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchRecipes();
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initialize recipes
    initializeRecipes();
    
    // Setup UI based on current page
    setupSearch();
    setupModal();
    
    // Display recipes (only on index page)
    if (document.getElementById('recipes-list')) {
        displayRecipes();
    }
    
    // Load recipe details (only on recipe page)
    if (document.getElementById('recipe-container')) {
        loadRecipeDetails();
    }
});
