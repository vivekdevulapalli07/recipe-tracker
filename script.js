// Update script.js with these fixes:

// Global recipes variable with IDs
let recipes = [];

// Function to initialize recipes with IDs
function initializeRecipes() {
    console.log('Initializing recipes...');
    
    // Force reset localStorage to fix any potential issues
    localStorage.removeItem('recipes');
    localStorage.removeItem('recipeVersion');
    
    // Add a version number to track recipe updates
    const currentVersion = '1.3'; // Incremented to ensure fresh data
    
    // Initialize from recipeData with IDs
    if (typeof recipeData !== 'undefined' && Array.isArray(recipeData)) {
        console.log('Using recipeData to initialize recipes');
        recipes = recipeData.map(recipe => {
            return {
                id: generateId(),
                ...recipe
            };
        });
        
        // Store in localStorage for checkbox state persistence
        saveRecipes();
        localStorage.setItem('recipeVersion', currentVersion);
        console.log('Initialized recipes from data, version:', currentVersion);
    } else {
        console.error('recipeData is not defined or not an array!');
    }
}

// Utility functions
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
    console.log('Saved recipes to localStorage:', recipes.length);
}

// For recipe.html page
function loadRecipeDetails() {
    console.log('Loading recipe details...');
    const recipeContainer = document.getElementById('recipe-container');
    if (!recipeContainer) {
        console.log('Not on recipe page, recipeContainer not found');
        return; // Not on recipe page
    }
    
    // First make sure recipes are loaded
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    if (storedRecipes && storedRecipes.length > 0) {
        console.log('Using recipes from localStorage');
        recipes = storedRecipes;
    } else {
        console.log('No recipes in localStorage, initializing...');
        initializeRecipes();
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    
    console.log('Looking for recipe with ID:', recipeId);
    console.log('Number of recipes available:', recipes.length);
    
    if (!recipeId) {
        console.error('No recipe ID in URL, redirecting to index');
        window.location.href = 'index.html';
        return;
    }
    
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) {
        console.error('Recipe not found, redirecting to index');
        window.location.href = 'index.html';
        return;
    }
    
    console.log('Recipe found:', recipe.name);
    
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

// Initialize as soon as scripts are loaded, don't wait for DOMContentLoaded
if (typeof recipeData !== 'undefined') {
    console.log('recipeData is available, initializing immediately');
    initializeRecipes();
} else {
    console.error('recipeData is not available yet!');
}

// Additional initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    
    // Check if recipes need initialization
    if (recipes.length === 0) {
        console.log('Recipes not initialized yet, doing it now');
        initializeRecipes();
    }
    
    // Setup UI based on current page
    setupSearch();
    setupModal();
    
    // Display recipes (only on index page)
    if (document.getElementById('recipes-list')) {
        console.log('On index page, displaying recipes');
        displayRecipes();
    }
    
    // Load recipe details (only on recipe page)
    if (document.getElementById('recipe-container')) {
        console.log('On recipe page, loading details');
        loadRecipeDetails();
    }
});

// The rest of your script.js remains the same...
// Only include these DOM elements and function definitions here:

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
    if (!recipesList) {
        console.log('recipesList not found, not on index page');
        return;
    }
    
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
            console.log('Recipe card clicked, ID:', recipe.id);
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
    if (!addRecipeButton || !addRecipeModal) {
        console.log('Modal elements not found, not setting up modal');
        return;
    }
    
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

// Search functionality
function setupSearch() {
    if (!searchButton || !searchInput) {
        console.log('Search elements not found, not setting up search');
        return;
    