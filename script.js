// Define all recipes in a central collection
const defaultRecipes = [
    {
        name: "Broccoli Almond Soup",
        ingredients: [
            "1 tsp olive oil",
            "1 tbsp butter",
            "2.5-3 Cup broccoli florets or 1 medium broccoli",
            "14-16 almonds",
            "1 onion, chopped",
            "4-5 cloves garlic",
            "1/3 cup coconut milk or normal milk (optional for extra thickness)",
            "2 cups water or vegetable stock (or more as per consistency)",
            "Salt and pepper to taste",
            "Oregano and chili flakes for seasoning"
        ],
        instructions: [
            "Soak the almonds overnight and remove skin or blanch 5 mins.",
            "Heat oil and butter, sauté garlic followed by onion.",
            "Keep 1/2 cup florets aside. Add broccoli and cook for 4-5 mins. Add almonds, salt, pepper, and water. Cover and cook for 12-15 mins till it's well cooked. Add some oregano and chili flakes.",
            "Let it all cool down, transfer to a jar and add coconut milk or normal milk which is optional and blend till smooth paste. Add more water if needed to adjust consistency.",
            "Sauté the remaining broccoli and add salt, pepper, chili flakes and oregano.",
            "While serving heat and garnish with chili oil, roasted almond flakes or seeds & broccoli florets."
        ]
    },
    {
        name: "Tomato Chutney",
        ingredients: [
            "4 large ripe tomatoes",
            "2 tbsp oil (preferably sesame or peanut)",
            "1 tsp mustard seeds",
            "1 tsp cumin seeds",
            "2-3 dried red chilies",
            "1/2 tsp asafoetida (hing)",
            "10-12 curry leaves",
            "1 inch ginger, chopped",
            "4-5 cloves garlic, minced",
            "1 onion, finely chopped",
            "1/2 tsp turmeric powder",
            "1 tsp red chili powder (adjust to taste)",
            "2 tbsp jaggery or brown sugar",
            "Salt to taste",
            "2 tbsp tamarind pulp or 1 tbsp lemon juice"
        ],
        instructions: [
            "Chop tomatoes into small pieces and keep aside.",
            "Heat oil in a pan over medium heat. Add mustard seeds and let them splutter.",
            "Add cumin seeds, dried red chilies, asafoetida and curry leaves. Sauté for 30 seconds until fragrant.",
            "Add chopped ginger, garlic and onion. Sauté until onions turn translucent.",
            "Add tomatoes, turmeric powder, red chili powder and salt. Mix well.",
            "Cover and cook for 10-12 minutes on medium-low heat until tomatoes are soft and mushy.",
            "Add jaggery or brown sugar and tamarind pulp (or lemon juice). Mix well and cook for another 5 minutes.",
            "Mash the mixture with a spoon for a smooth consistency or leave chunky if preferred.",
            "Cook until the chutney reaches a thick, jam-like consistency.",
            "Let it cool completely before storing in an airtight container in the refrigerator."
        ]
    },
    {
        name: "Kanda Poha",
        ingredients: [
            "2 cups flattened rice (poha), medium thickness",
            "1 large onion (kanda), finely chopped",
            "2 green chilies, finely chopped",
            "1 medium potato, diced small (optional)",
            "1 tsp mustard seeds",
            "1 tsp cumin seeds",
            "10-12 curry leaves",
            "1/4 cup peanuts",
            "1/2 tsp turmeric powder",
            "1 tbsp lemon juice",
            "2 tbsp oil",
            "Salt to taste",
            "2 tbsp fresh coriander leaves, chopped",
            "1 tbsp grated coconut for garnish (optional)"
        ],
        instructions: [
            "Rinse the poha in a colander under running water for a few seconds. Don't soak it.",
            "After rinsing, sprinkle a little water on the poha, add 1/2 tsp salt and 1/4 tsp turmeric. Mix gently and set aside for 5 minutes to soften.",
            "Heat oil in a pan. Add mustard seeds and let them splutter.",
            "Add cumin seeds, curry leaves, and peanuts. Sauté until peanuts turn light golden brown.",
            "If using potato, add it now and cook until almost tender (about 5-6 minutes).",
            "Add chopped onions and green chilies. Sauté until onions become translucent.",
            "Add remaining turmeric powder and mix well.",
            "Add the soaked poha and mix gently to combine with the other ingredients.",
            "Cover and cook on low heat for 2 minutes.",
            "Turn off the heat, add lemon juice and mix well.",
            "Garnish with fresh coriander leaves and grated coconut if using.",
            "Serve hot with a side of chutney if desired."
        ]
    },
    {
        name: "Vegan Chocolate Cake",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "1 cup granulated sugar",
            "1/4 cup cocoa powder",
            "1 tsp baking soda",
            "1/2 tsp salt",
            "1/3 cup vegetable oil",
            "1 tbsp white vinegar",
            "1 tsp vanilla extract",
            "1 cup cold water",
            "For the frosting (optional):",
            "2 cups powdered sugar",
            "1/4 cup cocoa powder",
            "1/4 cup vegan butter",
            "3-4 tbsp plant-based milk",
            "1/2 tsp vanilla extract"
        ],
        instructions: [
            "Preheat oven to 175°C (350°F). Lightly grease an 8-inch square or round cake pan.",
            "In a large bowl, mix together flour, sugar, cocoa powder, baking soda, and salt.",
            "Make three wells in the dry ingredients. Pour oil into first well, vinegar into second well, and vanilla into third well.",
            "Pour cold water over all ingredients and mix until smooth.",
            "Pour batter into the prepared cake pan.",
            "Bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.",
            "Allow cake to cool completely before frosting.",
            "For the frosting (if using): In a medium bowl, beat together powdered sugar, cocoa powder, vegan butter, plant-based milk, and vanilla extract until smooth and creamy.",
            "Once cake has cooled completely, spread frosting evenly over the top and sides of the cake.",
            "Slice and enjoy! Store leftovers in an airtight container at room temperature for up to 3 days."
        ]
    },
    // Add your new recipes here
    {
        name: "Pasta Arrabiata",
        ingredients: [
            "8 oz pasta (penne or spaghetti)",
            "2 tbsp olive oil",
            "4 cloves garlic, minced",
            "1/2 tsp red pepper flakes (adjust to taste)",
            "1 can (14 oz) crushed tomatoes",
            "1 tsp dried oregano",
            "1 tsp dried basil",
            "Salt and black pepper to taste",
            "Fresh basil leaves for garnish",
            "Grated Parmesan cheese (optional)"
        ],
        instructions: [
            "Cook pasta according to package directions until al dente. Drain and set aside.",
            "In a large pan, heat olive oil over medium heat.",
            "Add minced garlic and red pepper flakes, sauté for 1 minute until fragrant.",
            "Add crushed tomatoes, oregano, and dried basil. Stir well.",
            "Simmer sauce for 10-15 minutes until slightly thickened.",
            "Season with salt and black pepper to taste.",
            "Add cooked pasta to the sauce and toss to coat evenly.",
            "Serve hot, garnished with fresh basil leaves and grated Parmesan if desired."
        ]
    },
    {
        name: "Avocado Toast",
        ingredients: [
            "2 slices of whole grain bread",
            "1 ripe avocado",
            "1/2 lemon, juiced",
            "1/4 tsp red pepper flakes",
            "Salt and black pepper to taste",
            "Optional toppings: cherry tomatoes, microgreens, feta cheese, or a poached egg"
        ],
        instructions: [
            "Toast the bread slices until golden brown and crispy.",
            "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.",
            "Add lemon juice, salt, and pepper to the avocado and mash with a fork to desired consistency.",
            "Spread the mashed avocado evenly over the toast slices.",
            "Sprinkle with red pepper flakes.",
            "Add any optional toppings of your choice.",
            "Serve immediately for the best taste and texture."
        ]
    },
    {
        name: "Banana Oatmeal Smoothie",
        ingredients: [
            "1 ripe banana",
            "1/3 cup rolled oats",
            "1 cup milk (dairy or plant-based)",
            "1 tbsp honey or maple syrup",
            "1/2 tsp vanilla extract",
            "1/4 tsp ground cinnamon",
            "1 tbsp nut butter (optional)",
            "Ice cubes (optional)"
        ],
        instructions: [
            "Add all ingredients to a blender.",
            "Blend on high speed until smooth and creamy, about 1 minute.",
            "If the smoothie is too thick, add more milk; if too thin, add more oats or banana.",
            "Pour into a glass and enjoy immediately.",
            "For a colder smoothie, add a few ice cubes before blending."
        ]
    }
    // You can continue adding more recipes here
];

// Initialize recipes or synchronize with existing ones
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

// Function to compare and update recipes
function syncRecipes() {
    let recipeChanged = false;
    
    // Create a map of existing recipes by name for easy lookup
    const existingRecipesMap = {};
    recipes.forEach(recipe => {
        existingRecipesMap[recipe.name] = recipe;
    });
    
    // Add or update default recipes
    defaultRecipes.forEach(defaultRecipe => {
        // If recipe doesn't exist, add it
        if (!existingRecipesMap[defaultRecipe.name]) {
            const newRecipe = {
                id: generateId(),
                ...defaultRecipe
            };
            recipes.push(newRecipe);
            recipeChanged = true;
        }
    });
    
    // Save if changes were made
    if (recipeChanged) {
        saveRecipes();
    }
}

// DOM elements
const recipesList = document.getElementById('recipes-list');
const addRecipeButton = document.getElementById('add-recipe-button');
const addRecipeModal = document.getElementById('add-recipe-modal');
const closeModalButton = document.querySelector('.close');
const recipeForm = document.getElementById('recipe-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

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

// Event Listeners
if (addRecipeButton) {
    addRecipeButton.addEventListener('click', () => {
        addRecipeModal.style.display = 'block';
    });
}

if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
        addRecipeModal.style.display = 'none';
    });
}

// Click outside modal to close
window.addEventListener('click', (event) => {
    if (event.target === addRecipeModal) {
        addRecipeModal.style.display = 'none';
    }
});

// Search functionality
if (searchButton) {
    searchButton.addEventListener('click', searchRecipes);
}

if (searchInput) {
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchRecipes();
        }
    });
}

// Form submission
if (recipeForm) {
    recipeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('recipe-name').value;
        const ingredientsText = document.getElementById('recipe-ingredients').value;
        const instructionsText = document.getElementById('recipe-instructions').value;
        
        const ingredients = ingredientsText.split('\n').filter(i => i.trim() !== '');
        const instructions = instructionsText.split('\n').filter(i => i.trim() !== '');
        
        const newRecipe = {
            id: generateId(),
            name,
            ingredients,
            instructions
        };
        
        recipes.push(newRecipe);
        saveRecipes();
        
        // Reset form and close modal
        recipeForm.reset();
        addRecipeModal.style.display = 'none';
        
        // Refresh recipe list
        displayRecipes();
    });
}

// Utility functions
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Sync recipes with defaults first
    syncRecipes();
    
    // Then display
    displayRecipes();
});

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