const foodItems = [
    // --- VEG ITEMS ---
    { id: 1, name: "Paneer Butter Masala", restaurant: "Spice Symphony", price: 340, rating: 4.8, desc: "Rich & creamy tomato gravy.", image: "images/paneer butter masala.jpg", diet: "veg", tags: ["indian", "cozy", "indulgent", "punjabi"] },
    { id: 2, name: "Vegetable Biryani", restaurant: "Royal Handi", price: 280, rating: 4.6, desc: "Aromatic basmati rice.", image: "images/indian-2.png", diet: "veg", tags: ["indian", "spicy", "date"] },
    { id: 3, name: "Margherita Pizza", restaurant: "Napoli Oven", price: 450, rating: 4.9, desc: "Classic mozzarella cheese.", image: "images/pizza-1.png", diet: "veg", tags: ["italian", "hangover", "cozy"] },
    { id: 4, name: "Veg Hakka Noodles", restaurant: "Dragon Wok", price: 220, rating: 4.5, desc: "Wok tossed noodles.", image: "images/noodles-1.png", diet: "veg", tags: ["chinese", "spicy"] },
    { id: 5, name: "Mexican Bean Tacos", restaurant: "El Toro", price: 260, rating: 4.4, desc: "Crispy shells with beans.", image: "images/tacos.png", diet: "veg", tags: ["mexican", "light"] },
    { id: 6, name: "Amritsari Kulcha", restaurant: "Punjabi Dhaba", price: 180, rating: 4.7, desc: "Stuffed bread with chole.", image: "images/kulcha.png", diet: "veg", tags: ["punjabi", "hangover"] },
    { id: 7, name: "Garlic Parmesan Pasta", restaurant: "Napoli Oven", price: 320, rating: 4.7, desc: "Linguine tossed with herbs and parmesan.", image: "images/aglio e olio pasta.jpg", diet: "veg", tags: ["italian", "light", "date"] },
    { id: 8, name: "Crispy Cheese Croquettes", restaurant: "Birdie Bistro", price: 250, rating: 4.8, desc: "Golden fried cheese balls with dip.", image: "images/Cheese balls.jpg", diet: "veg", tags: ["snacks", "indulgent", "hangover"] },
    { id: 9, name: "Cheesy Garlic Bread", restaurant: "Napoli Oven", price: 190, rating: 4.6, desc: "Oven baked bread with melted cheese and herbs.", image: "images/cheesee garlic bread.jpg", diet: "veg", tags: ["italian", "snacks"] },
    { id: 10, name: "Alfredo White Pasta", restaurant: "Napoli Oven", price: 280, rating: 4.7, desc: "Creamy fettuccine alfredo with parmesan.", image: "images/White sauce pasta.jpg", diet: "veg", tags: ["italian", "cozy"] },
    { id: 11, name: "Grilled Club Sandwich", restaurant: "Birdie Bistro", price: 180, rating: 4.5, desc: "Triple layered veggie and cheese club sandwich.", image: "images/veg sanwhich.jpg", diet: "veg", tags: ["snacks", "light"] },
    { id: 12, name: "Street Style Chow Mein", restaurant: "Dragon Wok", price: 210, rating: 4.6, desc: "Wok tossed noodles with veggies.", image: "images/veg hakka noodles.jpg", diet: "veg", tags: ["chinese", "spicy"] },
    { id: 13, name: "Red Sauce Macaroni", restaurant: "Napoli Oven", price: 220, rating: 4.5, desc: "Macaroni in spicy tomato basil sauce.", image: "images/Veg Macaroni.jpg", diet: "veg", tags: ["italian", "spicy"] },
    { id: 14, name: "Veg Dry Manchurian", restaurant: "Dragon Wok", price: 190, rating: 4.8, desc: "Crispy veg balls in savory soy garlic sauce.", image: "images/veg manchurian.jpg", diet: "veg", tags: ["chinese", "snacks"] },
    { id: 15, name: "Loaded Jalapeno Nachos", restaurant: "El Toro", price: 240, rating: 4.6, desc: "Crispy tortilla chips loaded with cheese, salsa, and jalapenos.", image: "images/veg nachos.jpg", diet: "veg", tags: ["mexican", "snacks", "hangover"] },
    { id: 16, name: "Spicy Schezwan Noodles", restaurant: "Dragon Wok", price: 210, rating: 4.7, desc: "Fiery wok-tossed noodles with colorful veggies.", image: "images/veg peri peri maggi.jpg", diet: "veg", tags: ["chinese", "spicy"] },
    { id: 17, name: "Tomato Basil Spaghetti", restaurant: "Napoli Oven", price: 260, rating: 4.8, desc: "Classic spaghetti tossed in rich tomato and basil sauce.", image: "images/spaghettiveg.jpg", diet: "veg", tags: ["italian", "date"] },
    { id: 18, name: "Veg Hakka Ramen", restaurant: "Tokyo Bites", price: 190, rating: 4.9, desc: "Comforting bowl of ramen with fresh vegetables.", image: "images/veg maggi.jpg", diet: "veg", tags: ["chinese", "cozy"] },
    { id: 19, name: "Classic Dal Makhani", restaurant: "Punjabi Dhaba", price: 280, rating: 4.9, desc: "Creamy black lentils slow-cooked to perfection.", image: "images/veg dal makhani.jpg", diet: "veg", tags: ["punjabi", "cozy", "indian"] },
    { id: 20, name: "Dal Bati Churma", restaurant: "Royal Handi", price: 320, rating: 4.8, desc: "Traditional Rajasthani baked bati with lentils.", image: "images/veg dal-bati.jpg", diet: "veg", tags: ["indian", "cozy"] },
    { id: 21, name: "Crispy French Fries", restaurant: "Burger Boss", price: 150, rating: 4.6, desc: "Golden fries sprinkled with herbs and salt.", image: "images/French fries.jpg", diet: "veg", tags: ["snacks", "hangover"] },
    { id: 22, name: "Pink Sauce Penne Pasta", restaurant: "Napoli Oven", price: 270, rating: 4.7, desc: "Penne in creamy pink beetroot sauce and feta.", image: "images/Pink sauce pasta.jpg", diet: "veg", tags: ["italian", "light"] },
    { id: 23, name: "Spicy Penne Arrabbiata", restaurant: "Napoli Oven", price: 260, rating: 4.6, desc: "Penne pasta in fiery red tomato and garlic sauce.", image: "images/red Sauce pasta.jpg", diet: "veg", tags: ["italian", "spicy"] },
    { id: 24, name: "Twisted Tornado Potato", restaurant: "Birdie Bistro", price: 160, rating: 4.8, desc: "Crispy spiraled potato on a stick with creamy sauce.", image: "images/Salt and paper Potato Twister.jpg", diet: "veg", tags: ["snacks", "hangover"] },

    // --- NON-VEG ITEMS ---
    { id: 101, name: "Cheesy Chicken Lakes", restaurant: "Birdie Bistro", price: 390, rating: 4.9, desc: "Signature crispy chicken in cheesy sauce.", image: "images/cheesy_chicken.png", diet: "non-veg", tags: ["chicken", "indulgent", "hangover"] },
    { id: 102, name: "Spicy Chicken Burger", restaurant: "Burger Boss", price: 250, rating: 4.5, desc: "Juicy patty with fiery sauce.", image: "images/chicken_burger.png", diet: "non-veg", tags: ["chicken", "hangover", "spicy"] },
    { id: 103, name: "Chicken Teriyaki Sushi", restaurant: "Tokyo Bites", price: 480, rating: 4.8, desc: "Premium sushi rolls.", image: "images/chicken_sushi.png", diet: "non-veg", tags: ["chicken", "light", "date"] },
    { id: 104, name: "BBQ Chicken Pizza", restaurant: "Napoli Oven", price: 550, rating: 4.7, desc: "Smoky BBQ sauce and grilled chicken.", image: "images/bbq_pizza.png", diet: "non-veg", tags: ["italian", "hangover"] },
    { id: 105, name: "Chicken Tikka Masala", restaurant: "Punjabi Dhaba", price: 380, rating: 4.9, desc: "Classic non-veg punjabi dish.", image: "images/chicken_tikka.png", diet: "non-veg", tags: ["punjabi", "cozy", "spicy"] },
    { id: 106, name: "Chicken Fajitas", restaurant: "El Toro", price: 320, rating: 4.6, desc: "Sizzling Mexican chicken.", image: "images/fajitas.png", diet: "non-veg", tags: ["mexican", "spicy"] },
    { id: 107, name: "Spicy Fried Chicken Burger", restaurant: "Burger Boss", price: 290, rating: 4.8, desc: "Crispy chicken patty with fiery hot sauce.", image: "images/veg peri peri burger.jpg", diet: "non-veg", tags: ["chicken", "spicy", "hangover"] },
    { id: 108, name: "Loaded Cheesy Chicken", restaurant: "Birdie Bistro", price: 340, rating: 4.7, desc: "Fried chicken chunks smothered in melted cheese.", image: "images/nonveg mutton Biryani.jpg", diet: "non-veg", tags: ["chicken", "indulgent", "hangover"] },
    { id: 109, name: "Glazed Chicken Sushi", restaurant: "Tokyo Bites", price: 420, rating: 4.9, desc: "Sushi rolls topped with sweet glaze and sesame.", image: "images/chicken_sushi.png", diet: "non-veg", tags: ["chicken", "light", "date"] },

    // --- DESSERTS & DRINKS (All Veg) ---
    { id: 201, name: "Chocolate Lava Cake", restaurant: "Sweet Treats", price: 180, rating: 4.9, desc: "Gooey chocolate center.", image: "images/dessert-1.png", diet: "veg", tags: ["dessert", "date", "indulgent", "cake"] },
    { id: 202, name: "Strawberry Cheesecake", restaurant: "The Bakery", price: 250, rating: 4.7, desc: "New York style cheesecake.", image: "images/dessert-2.png", diet: "veg", tags: ["dessert", "light", "cake"] },
    { id: 203, name: "Mint Mojito", restaurant: "Chill Bar", price: 150, rating: 4.4, desc: "Refreshing blend of mint & lime.", image: "images/drink-1.png", diet: "veg", tags: ["drinks", "light", "mocktail"] },
    { id: 204, name: "Cocktail Dreams", restaurant: "Chill Bar", price: 200, rating: 4.6, desc: "Signature mocktail mix.", image: "images/cocktail.jpg", diet: "veg", tags: ["drinks", "date", "mocktail"] },
    { id: 205, name: "Oreo Thick Shake", restaurant: "Sweet Treats", price: 190, rating: 4.8, desc: "Creamy vanilla and crushed oreos.", image: "images/oreo_shake.jpg", diet: "veg", tags: ["drinks", "indulgent", "shakes"] },
    { id: 206, name: "Blue Lagoon Mocktail", restaurant: "Chill Bar", price: 180, rating: 4.5, desc: "Refreshing citrus and mint blue drink.", image: "images/blue ocean moctail.jpg", diet: "veg", tags: ["drinks", "light", "mocktail"] },
    { id: 207, name: "Raspberry Caramel Cake", restaurant: "Sweet Treats", price: 350, rating: 4.9, desc: "Decadent chocolate cake with caramel and berries.", image: "images/Red velvet cupcake dessert.jpg", diet: "veg", tags: ["dessert", "date", "indulgent", "cake"] },
    { id: 208, name: "Wild Blueberry Cheesecake", restaurant: "The Bakery", price: 380, rating: 4.8, desc: "Classic cheesecake topped with wild blueberries.", image: "images/blueberry dessert.jpg", diet: "veg", tags: ["dessert", "indulgent", "cake"] },
    { id: 209, name: "Watermelon Mojito", restaurant: "Chill Bar", price: 170, rating: 4.7, desc: "Refreshing mocktail with fresh watermelon.", image: "images/stobery Mohito.jpg", diet: "veg", tags: ["drinks", "light", "mocktail"] },
    { id: 210, name: "Cranberry Cooler", restaurant: "Sunset Cafe", price: 190, rating: 4.8, desc: "Chilled mocktail with cranberry and lime.", image: "images/cranberry mojito.jpg", diet: "veg", tags: ["drinks", "light", "mocktail"] },
    { id: 211, name: "Blue Curacao Lemonade", restaurant: "Chill Bar", price: 180, rating: 4.6, desc: "Zesty blue curacao mixed with fresh lemonade.", image: "images/blue ocean moctail.jpg", diet: "veg", tags: ["drinks", "light", "mocktail"] },
    { id: 212, name: "Jamun Bliss Mocktail", restaurant: "Sweet Treats", price: 210, rating: 4.9, desc: "Purple jamun berry smoothie with a hint of mint.", image: "images/jamun mojito.jpg", diet: "veg", tags: ["drinks", "light", "shakes"] },
    { id: 213, name: "Basil Lime Refresher", restaurant: "The Bakery", price: 160, rating: 4.7, desc: "Tangy lime water with fresh basil leaves.", image: "images/vintage classic mojito.jpg", diet: "veg", tags: ["drinks", "light", "mocktail"] },
    { id: 214, name: "Kiwi Mint Mocktail", restaurant: "Chill Bar", price: 190, rating: 4.8, desc: "Tropical kiwi drink garnished with mint.", image: "images/kiwi heart mocktail.jpg", diet: "veg", tags: ["drinks", "light", "mocktail"] },
    { id: 215, name: "Assorted Donuts", restaurant: "The Bakery", price: 240, rating: 4.7, desc: "Box of assorted glazed and frosted donuts.", image: "images/doughnut desserts.jpg", diet: "veg", tags: ["dessert", "indulgent", "cake"] },
    { id: 216, name: "French Macarons", restaurant: "Sweet Treats", price: 320, rating: 4.8, desc: "Colorful and delicate almond macarons.", image: "images/macarons desserts.jpg", diet: "veg", tags: ["dessert", "light", "date"] },
    { id: 217, name: "Oreo Dessert Cup", restaurant: "Sweet Treats", price: 210, rating: 4.9, desc: "Layered cream and crushed Oreo cups.", image: "images/oreo dirt desserts.jpg", diet: "veg", tags: ["dessert", "indulgent"] },
    { id: 218, name: "Classic Tiramisu", restaurant: "Napoli Oven", price: 380, rating: 4.9, desc: "Traditional Italian coffee-flavored dessert.", image: "images/Tiramisu desserts.jpg", diet: "veg", tags: ["dessert", "date", "indulgent"] },
    { id: 219, name: "Fresh Orange Splash", restaurant: "Chill Bar", price: 160, rating: 4.6, desc: "Zesty orange mocktail with fresh citrus.", image: "images/orange blossom mocktail.jpg", diet: "veg", tags: ["drinks", "light", "mocktail"] },
    { id: 220, name: "Caramel Custard Flan", restaurant: "Sweet Treats", price: 290, rating: 4.9, desc: "Silky smooth custard with a rich caramel finish.", image: "images/Caramel chocolate   desserts.jpg", diet: "veg", tags: ["dessert", "indulgent", "cake"] },
    { id: 221, name: "Cherry Citrus Splash", restaurant: "Chill Bar", price: 180, rating: 4.6, desc: "Fizzy lime and cherry mocktail.", image: "images/red butterfly mocktail.jpg", diet: "veg", tags: ["drinks", "mocktail", "light"] },
    { id: 222, name: "Monster Energy", restaurant: "Chill Bar", price: 110, rating: 4.7, desc: "High-energy drink to fuel your day.", image: "images/monster Drink.jpg", diet: "veg", tags: ["drinks", "hangover"] },
    { id: 223, name: "Diet Coke", restaurant: "Sunset Cafe", price: 60, rating: 4.5, desc: "Crisp and refreshing calorie-free cola.", image: "images/Diet Coke Drink.jpg", diet: "veg", tags: ["drinks", "light"] },
    { id: 224, name: "Pepsi", restaurant: "Chill Bar", price: 60, rating: 4.6, desc: "Classic refreshing cola.", image: "images/Pepsi Drink.jpg", diet: "veg", tags: ["drinks"] },
    { id: 225, name: "Red Bull", restaurant: "Chill Bar", price: 120, rating: 4.8, desc: "Vitalizes body and mind.", image: "images/Red bull Drink.jpg", diet: "veg", tags: ["drinks", "hangover"] },
    { id: 226, name: "Sprite", restaurant: "Sunset Cafe", price: 60, rating: 4.5, desc: "Clear, crisp, lemon-lime soda.", image: "images/sprite Drink.jpg", diet: "veg", tags: ["drinks", "light"] }
];

let cart = [];
let currentDiet = 'all'; // all, veg, non-veg
let currentCategory = 'trending'; // trending, all, italian, chinese, mexican, punjabi, indian, dessert, drinks
let currentMood = null;
let appliedDiscount = 0; // percentage
let appliedDiscountFlat = 0; // flat amount
let couponCodeStr = '';

let coins = parseInt(localStorage.getItem('coins') || '0');
let streak = parseInt(localStorage.getItem('streak') || '0');
let lastLoginDate = localStorage.getItem('lastLoginDate');
let coinsApplied = false;
let currentCoinsDiscount = 0;

// DOM Elements
const foodGrid = document.getElementById('food-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCountBadge = document.getElementById('cart-count');
const cartItemCount = document.getElementById('cart-item-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTaxes = document.getElementById('cart-taxes');
const cartTotal = document.getElementById('cart-total');
const openCheckoutBtn = document.getElementById('open-checkout');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutOverlay = document.getElementById('checkout-overlay');
const closeCheckoutBtn = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
const checkoutItems = document.getElementById('checkout-items');
const checkoutTotal = document.getElementById('checkout-total');
const checkoutDiscountRow = document.getElementById('checkout-discount-row');
const checkoutCouponCode = document.getElementById('checkout-coupon-code');
const checkoutDiscountAmount = document.getElementById('checkout-discount-amount');
const successModal = document.getElementById('success-modal');

// Auth & Feedback Elements
const authBtn = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const authOverlay = document.getElementById('auth-overlay');
const closeAuthBtn = document.getElementById('close-auth');
const authForm = document.getElementById('auth-form');
const feedbackForm = document.getElementById('feedback-form');

// Spin to Win Elements
const spinWheel = document.getElementById('spin-wheel');
const spinBtn = document.getElementById('spin-btn');
const resetSpinBtn = document.getElementById('reset-spin-btn');
const spinResult = document.getElementById('spin-result');
const spinPrizeText = document.getElementById('spin-prize-text');

let currentSpinRotation = 0;
let hasSpun = false;

// The prizes mapping exactly to CSS slices (1 to 8)
const prizes = [
    { type: 'percent', val: 10, text: '10% OFF' },      // 1
    { type: 'item', val: 'Free Dessert', text: 'Free Dessert' }, // 2
    { type: 'percent', val: 20, text: '20% OFF' },      // 3
    { type: 'flat', val: 100, text: '₹100 OFF' },       // 4
    { type: 'percent', val: 5, text: '5% OFF' },        // 5
    { type: 'delivery', val: 'Free Delivery', text: 'Free Delivery' }, // 6
    { type: 'percent', val: 30, text: '30% OFF' },      // 7
    { type: 'none', val: 0, text: 'Try Again' }         // 8
];

// Initialize
function init() {
    filterAndRenderFood();
    setupEventListeners();
    checkLastOrder();
    checkDailyReward();
    // Ensure cart sidebar is closed on page load
    closeCart();
}

// Diet Toggle
window.setDiet = function(dietType) {
    currentDiet = dietType;
    document.querySelectorAll('.toggle-option').forEach(el => el.classList.remove('active'));
    document.getElementById('filter-' + dietType.replace('-','')).classList.add('active');
    filterAndRenderFood();
}

// Mood Toggle
window.toggleMood = function(mood, element) {
    if (currentMood === mood) {
        currentMood = null;
        element.style.transform = 'scale(1)';
        element.style.boxShadow = '';
        element.style.border = '2px solid transparent';
    } else {
        document.querySelectorAll('.mood-tag').forEach(el => {
            el.style.transform = 'scale(1)';
            el.style.boxShadow = '';
            el.style.border = '2px solid transparent';
        });
        currentMood = mood;
        element.style.transform = 'scale(1.05)';
        element.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        element.style.border = '2px solid var(--primary)';
    }
    filterAndRenderFood();
}

// Category Toggle
window.setCategory = function(categoryType) {
    currentCategory = categoryType;
    document.querySelectorAll('.category-btn').forEach(el => {
        el.classList.remove('active');
        if(el.getAttribute('onclick') === `setCategory('${categoryType}')`) {
            el.classList.add('active');
        }
    });
    filterAndRenderFood();
}

function filterAndRenderFood() {
    let filtered = foodItems;

    // Filter by Diet
    if (currentDiet !== 'all') {
        filtered = filtered.filter(item => item.diet === currentDiet);
    }

    // Filter by Mood
    if (currentMood) {
        filtered = filtered.filter(item => item.tags.includes(currentMood));
    }

    // Filter by Category
    if (currentCategory === 'trending') {
        // Show only the top 8 items based on rating 
        filtered = filtered.filter(item => item.rating >= 4.8).slice(0, 8);
    } else if (currentCategory !== 'all') {
        filtered = filtered.filter(item => item.tags.includes(currentCategory));
    }

    renderFoodItems(filtered);
}

// Render Food Items
function renderFoodItems(items) {
    if (items.length === 0) {
        foodGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: #78716c;">No items found matching your current mood and diet selection.</div>';
        return;
    }

    foodGrid.innerHTML = items.map(item => `
        <div class="food-card glass">
            <div class="food-img-container">
                <img src="${item.image}" alt="${item.name}">
                <div class="food-rating">
                    <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    ${item.rating}
                </div>
                ${item.diet === 'veg' 
                    ? '<div style="position: absolute; top: 1rem; right: 1rem; background: white; padding: 4px; border-radius: 4px;"><div class="veg-dot"></div></div>'
                    : '<div style="position: absolute; top: 1rem; right: 1rem; background: white; padding: 4px; border-radius: 4px;"><div class="nonveg-dot"></div></div>'
                }
            </div>
            <div class="food-info">
                <div class="food-header">
                    <h3>${item.name}</h3>
                    <span class="food-price">₹${item.price}</span>
                </div>
                <p class="food-restaurant">${item.restaurant}</p>
                <p class="food-desc">${item.desc}</p>
                <button class="btn btn-primary add-to-cart" onclick="addToCart(${item.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Daily Rewards Functions
function checkDailyReward() {
    const today = new Date();
    const todayStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    
    let earnedCoinsToday = false;
    let gotFreeDessert = false;

    // Award coins only once per day
    if (lastLoginDate !== todayStr) {
        let isConsecutive = false;
        if (lastLoginDate) {
            const lastDate = new Date(lastLoginDate);
            const diffTime = Math.abs(today - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            if (diffDays === 1 || diffDays === 0) {
                isConsecutive = true;
            }
        }
        
        if (isConsecutive) {
            streak++;
        } else {
            streak = 1;
        }
        
        coins += 50;
        earnedCoinsToday = true;

        if (streak > 0 && streak % 7 === 0) {
            gotFreeDessert = true;
            const dessert = foodItems.find(i => i.id === 201); // Lava Cake
            if(dessert) {
                cart.push({ ...dessert, qty: 1, price: 0 });
                updateCartUI();
            }
        }
        
        lastLoginDate = todayStr;
        localStorage.setItem('coins', coins);
        localStorage.setItem('streak', streak);
        localStorage.setItem('lastLoginDate', lastLoginDate);
    }

    // Always show celebration toast on every page load
    setTimeout(() => {
        let msg;
        if (earnedCoinsToday && gotFreeDessert) {
            msg = `+50 Coins & 🎉 FREE Dessert for 7-day streak! 🪙 Balance: ${coins}`;
        } else if (earnedCoinsToday) {
            msg = `+50 Coins earned today! 🔥 Streak: ${streak} Days | 🪙 Balance: ${coins}`;
        } else {
            msg = `Welcome back! 🪙 ${coins} Coins | 🔥 ${streak} Day Streak`;
        }
        const toastMsg = document.getElementById('toast-msg');
        if (toastMsg) toastMsg.textContent = msg;
        const toast = document.getElementById('daily-toast');
        if (toast) {
            toast.style.transform = 'translateY(0)';
            triggerConfettiSmall();
            setTimeout(() => { toast.style.transform = 'translateY(150%)'; }, 5000);
        }
    }, 1500);

    updateRewardsUI();
}

function updateRewardsUI() {
    const coinEl = document.getElementById('coin-balance');
    const streakEl = document.getElementById('streak-count');
    if (coinEl) coinEl.textContent = `🪙 ${coins}`;
    if (streakEl) streakEl.textContent = `🔥 ${streak} Days`;
}

window.showRewardsInfo = function() {
    document.getElementById('modal-coin-balance').textContent = coins;
    document.getElementById('modal-streak-count').textContent = streak;
    document.getElementById('rewards-modal').classList.add('active');
    document.getElementById('rewards-overlay').classList.add('active');
}

window.closeRewards = function() {
    document.getElementById('rewards-modal').classList.remove('active');
    document.getElementById('rewards-overlay').classList.remove('active');
}

window.toggleCoins = function() {
    if (coinsApplied) {
        coinsApplied = false;
        document.getElementById('apply-coins-btn').textContent = 'Apply';
        document.getElementById('apply-coins-btn').classList.remove('btn-primary');
        document.getElementById('apply-coins-btn').classList.add('btn-outline');
    } else {
        coinsApplied = true;
        document.getElementById('apply-coins-btn').textContent = 'Remove';
        document.getElementById('apply-coins-btn').classList.remove('btn-outline');
        document.getElementById('apply-coins-btn').classList.add('btn-primary');
    }
    populateCheckoutSummary();
}

// Quick Reorder Functions
function checkLastOrder() {
    const lastOrderData = localStorage.getItem('lastOrder');
    const section = document.getElementById('quick-reorder-section');
    const descEl = document.getElementById('last-order-desc');
    const btnEl = document.getElementById('quick-reorder-btn');
    
    if (section && descEl && btnEl) {
        if (lastOrderData && lastOrderData !== '[]') {
            const lastOrder = JSON.parse(lastOrderData);
            const desc = lastOrder.map(item => `${item.qty}x ${item.name}`).join(', ');
            descEl.textContent = desc;
            
            // Show section and enable button
            section.style.display = 'block';
            btnEl.disabled = false;
            btnEl.classList.remove('btn-outline');
            btnEl.classList.add('btn-primary');
            btnEl.style.opacity = '1';
            btnEl.style.cursor = 'pointer';
        } else {
            // Hide section if no order exists
            section.style.display = 'none';
        }
    }
}

window.reorderLast = function() {
    const lastOrderData = localStorage.getItem('lastOrder');
    if (lastOrderData) {
        const lastOrder = JSON.parse(lastOrderData);
        lastOrder.forEach(item => {
            const existing = cart.find(c => c.id === item.id);
            if (existing) {
                existing.qty += item.qty;
            } else {
                cart.push({ ...item });
            }
        });
        updateCartUI();
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        triggerConfettiSmall();
    }
}

// Cart Functions
window.addToCart = function(id) {
    const item = foodItems.find(f => f.id === id);
    const existing = cart.find(c => c.id === id);
    
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    
    updateCartUI();
    
    // Animation
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
}

window.updateQty = function(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(c => c.id !== id);
        }
        updateCartUI();
    }
}

function calculateDiscount(subtotal) {
    let discount = 0;
    if (appliedDiscount > 0) {
        discount = Math.round(subtotal * (appliedDiscount / 100));
    } else if (appliedDiscountFlat > 0) {
        discount = appliedDiscountFlat;
        if (discount > subtotal) discount = subtotal; // Can't have negative subtotal
    }
    return discount;
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    let taxes = Math.round(subtotal * 0.05); // 5% tax
    let delivery = 40; // Flat delivery
    
    let discount = calculateDiscount(subtotal);
    
    if (couponCodeStr === 'FREEDELIVERY') {
        delivery = 0;
    }

    const total = subtotal - discount + taxes + delivery;

    // Update badges
    if (count > 0) {
        cartCountBadge.style.display = 'flex';
        cartCountBadge.textContent = count;
        cartItemCount.textContent = `${count} Items`;
    } else {
        cartCountBadge.style.display = 'none';
        cartItemCount.textContent = 'Empty';
    }

    // Render items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div style="text-align:center; padding: 2rem; color: #78716c;">Your cart is empty</div>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title flex justify-between">
                        ${item.name}
                        ${item.diet === 'veg' ? '<span class="veg-dot"></span>' : '<span class="nonveg-dot"></span>'}
                    </div>
                    <div class="cart-item-subtitle">${item.restaurant}</div>
                    <div class="cart-item-bottom">
                        <div class="cart-item-price">₹${item.price * item.qty}</div>
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    
    // Update totals UI
    cartSubtotal.textContent = `₹${subtotal}`;
    
    if (discount > 0 || couponCodeStr === 'FREEDELIVERY') {
        // Just show total in sidebar to keep it simple, full details in checkout
        cartTaxes.innerHTML = `Taxes: ₹${taxes} <br> Delivery: ₹${delivery} <br> <span style="color:#16a34a">Discount: -₹${discount}</span>`;
    } else {
        cartTaxes.innerHTML = `₹${taxes + delivery} (inc. delivery)`;
    }
    
    cartTotal.textContent = `₹${total > 0 ? total : 0}`;
    
    openCheckoutBtn.disabled = cart.length === 0;
    if(cart.length === 0) {
        openCheckoutBtn.style.opacity = '0.5';
        openCheckoutBtn.style.cursor = 'not-allowed';
    } else {
        openCheckoutBtn.style.opacity = '1';
        openCheckoutBtn.style.cursor = 'pointer';
    }
}

// Live Location Simulation
window.simulateLiveLocation = function() {
    const btn = document.querySelector('.btn-location');
    btn.innerHTML = '⏳ Locating...';
    btn.style.opacity = '0.7';
    
    setTimeout(() => {
        document.getElementById('co-address').value = "45, FoodieRush Towers, Nariman Point";
        document.getElementById('co-pincode').value = "400021";
        btn.innerHTML = '✅ Located';
        btn.style.background = '#f0fdf4';
        btn.style.opacity = '1';
    }, 1500);
}

// Event Listeners
function setupEventListeners() {
    // Audio context setup for spinning sound
    let spinAudioCtx = null;
    function playSpinSound() {
        try {
            if (!spinAudioCtx) {
                spinAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (spinAudioCtx.state === 'suspended') spinAudioCtx.resume();

            const duration = 4; // match 4s spin duration
            const ticks = 40;
            for (let i = 0; i < ticks; i++) {
                let t = i / (ticks - 1);
                let easeOut = 1 - Math.pow(1 - t, 3);
                let timeOffset = easeOut * duration;
                
                const osc = spinAudioCtx.createOscillator();
                const gain = spinAudioCtx.createGain();
                osc.connect(gain);
                gain.connect(spinAudioCtx.destination);
                
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(600 - (t * 200), spinAudioCtx.currentTime + timeOffset);
                
                gain.gain.setValueAtTime(0.2, spinAudioCtx.currentTime + timeOffset);
                gain.gain.exponentialRampToValueAtTime(0.01, spinAudioCtx.currentTime + timeOffset + 0.05);
                
                osc.start(spinAudioCtx.currentTime + timeOffset);
                osc.stop(spinAudioCtx.currentTime + timeOffset + 0.05);
            }
        } catch(e) {
            console.error("Audio Error:", e);
        }
    }

    // Spin Logic
    spinBtn.addEventListener('click', () => {
        if (hasSpun) return;
        hasSpun = true;
        spinResult.classList.add('hidden');
        
        playSpinSound(); // Play the sound pattern
        
        // Random spin between 5 and 10 full rotations + random angle
        const spins = 5 + Math.floor(Math.random() * 5);
        const randomDegree = Math.floor(Math.random() * 360);
        
        // The slice is based on the top position (pointer).
        // Slices are 45deg each. Slice 1 is at 0-45deg initially.
        // Because CSS rotation is clockwise, the pointer points to the angle that is rotated to the top.
        
        currentSpinRotation += (spins * 360) + randomDegree;
        spinWheel.style.transform = `rotate(${currentSpinRotation}deg)`;

        // Calculate winning slice.
        // At 0deg rotation, pointer points to middle of slice 1 (-22.5 to 22.5 actually based on our CSS offset).
        // Let's just calculate which slice ends up at the top pointer (0 degrees/360 degrees).
        const normalizedDegree = (360 - (currentSpinRotation % 360)) % 360;
        
        // Because slice 1 spans from 337.5 to 22.5 (center is 0)
        // Let's shift by 22.5 so slice 1 is 0-45.
        const shiftedDegree = (normalizedDegree + 22.5) % 360;
        const sliceIndex = Math.floor(shiftedDegree / 45); // 0 to 7
        
        const prize = prizes[sliceIndex];

        setTimeout(() => {
            handleSpinResult(prize);
        }, 4000); // Matches CSS transition duration
    });

    resetSpinBtn.addEventListener('click', () => {
        hasSpun = false;
        currentSpinRotation = 0;
        spinWheel.style.transition = 'none';
        spinWheel.style.transform = `rotate(0deg)`;
        spinResult.classList.add('hidden');
        spinBtn.style.display = 'block';
        resetSpinBtn.style.display = 'none';
        
        // Reset discounts
        appliedDiscount = 0;
        appliedDiscountFlat = 0;
        couponCodeStr = '';
        updateCartUI();
        
        setTimeout(() => { spinWheel.style.transition = 'transform 4s cubic-bezier(0.1, 0.8, 0.3, 1)'; }, 50);
    });

    // Cart / Checkout
    cartBtn.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });

    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    openCheckoutBtn.addEventListener('click', () => {
        closeCart();
        populateCheckoutSummary();
        checkoutModal.classList.add('active');
        checkoutOverlay.classList.add('active');
    });

    closeCheckoutBtn.addEventListener('click', closeCheckout);
    checkoutOverlay.addEventListener('click', closeCheckout);

    // Form Submit
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        closeCheckout();
        successModal.classList.add('active');
        cartOverlay.classList.add('active'); 
        
        triggerConfetti();
        
        if (cart.length > 0) {
            localStorage.setItem('lastOrder', JSON.stringify(cart));
            checkLastOrder();
        }
        
        if (currentCoinsDiscount > 0) {
            coins -= currentCoinsDiscount;
            localStorage.setItem('coins', coins);
            updateRewardsUI();
            currentCoinsDiscount = 0;
            coinsApplied = false;
        }
        
        cart = [];
        updateCartUI();
        
        setTimeout(() => {
            successModal.classList.remove('active');
            cartOverlay.classList.remove('active');
        }, 5000);
    });

    // Auth Logic
    authBtn.addEventListener('click', () => {
        authModal.classList.add('active');
        authOverlay.classList.add('active');
    });

    function closeAuth() {
        authModal.classList.remove('active');
        authOverlay.classList.remove('active');
    }

    closeAuthBtn.addEventListener('click', closeAuth);
    authOverlay.addEventListener('click', closeAuth);

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email').value;
        const name = email.split('@')[0];
        
        authBtn.innerHTML = `👋 Hi, ${name}`;
        authBtn.classList.remove('btn-primary');
        authBtn.classList.add('btn-outline');
        
        closeAuth();
        triggerConfettiSmall();
    });

    // Feedback Logic
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your valuable feedback! We appreciate it.');
            feedbackForm.reset();
        });
    }
}

window.switchAuthTab = function(tab) {
    const isLogin = tab === 'login';
    
    document.getElementById('tab-login').classList.toggle('active', isLogin);
    document.getElementById('tab-register').classList.toggle('active', !isLogin);
    
    document.getElementById('auth-title').textContent = isLogin ? 'Welcome Back' : 'Create Account';
    document.getElementById('auth-submit-btn').textContent = isLogin ? 'Login' : 'Sign Up';
    
    document.getElementById('group-name').style.display = isLogin ? 'none' : 'block';
    
    if (!isLogin) {
        document.getElementById('auth-name').setAttribute('required', 'true');
    } else {
        document.getElementById('auth-name').removeAttribute('required');
    }
}

function handleSpinResult(prize) {
    spinPrizeText.textContent = prize.text;
    
    if (prize.type !== 'none') {
        spinPrizeText.style.color = 'var(--primary)';
        triggerConfettiSmall();
        
        // Apply discount logic
        if (prize.type === 'percent') {
            appliedDiscount = prize.val;
            couponCodeStr = `SPIN${prize.val}`;
        } else if (prize.type === 'flat') {
            appliedDiscountFlat = prize.val;
            couponCodeStr = `SPINFLAT`;
        } else if (prize.type === 'delivery') {
            couponCodeStr = 'FREEDELIVERY';
        } else if (prize.type === 'item') {
            couponCodeStr = 'FREEDESSERT';
            // Actually add item to cart if not there
            const dessert = foodItems.find(i => i.id === 201); // Lava Cake
            if(dessert) {
                cart.push({ ...dessert, qty: 1, price: 0 }); // Free price
            }
        }
        
        spinResult.querySelector('p').textContent = `Coupon ${couponCodeStr} applied automatically at checkout!`;
        updateCartUI();
    } else {
        spinPrizeText.style.color = '#78716c';
        spinResult.querySelector('p').textContent = 'Better luck next time!';
    }
    
    spinResult.classList.remove('hidden');
    spinBtn.style.display = 'none';
    resetSpinBtn.style.display = 'block';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

function closeCheckout() {
    checkoutModal.classList.remove('active');
    checkoutOverlay.classList.remove('active');
}

function populateCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const taxes = Math.round(subtotal * 0.05);
    let delivery = 40;
    
    let discount = calculateDiscount(subtotal);
    if (couponCodeStr === 'FREEDELIVERY') delivery = 0;

    // Coins Logic
    const useCoinsSection = document.getElementById('use-coins-section');
    if (useCoinsSection) {
        if (coins > 0) {
            useCoinsSection.style.display = 'flex';
            document.getElementById('checkout-coin-balance').textContent = `Balance: ${coins}`;
        } else {
            useCoinsSection.style.display = 'none';
            coinsApplied = false;
            document.getElementById('apply-coins-btn').textContent = 'Apply';
            document.getElementById('apply-coins-btn').classList.remove('btn-primary');
            document.getElementById('apply-coins-btn').classList.add('btn-outline');
        }
    }
    
    currentCoinsDiscount = 0;
    if (coinsApplied) {
        const totalBeforeCoins = subtotal - discount + taxes + delivery;
        currentCoinsDiscount = Math.min(coins, totalBeforeCoins);
    }
    
    const total = subtotal - discount - currentCoinsDiscount + taxes + delivery;

    checkoutItems.innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem;">
            <span>${item.qty}x ${item.name}</span>
            <span style="font-weight: 600;">₹${item.price * item.qty}</span>
        </div>
    `).join('');
    
    checkoutItems.innerHTML += `
        <div style="display: flex; justify-content: space-between; margin-top: 1rem; font-size: 0.875rem; color: var(--muted-foreground);">
            <span>Taxes & Fees</span>
            <span>₹${taxes}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.875rem; color: var(--muted-foreground);">
            <span>Delivery</span>
            <span>${delivery === 0 ? 'FREE' : '₹'+delivery}</span>
        </div>
    `;

    if (discount > 0 || currentCoinsDiscount > 0) {
        checkoutDiscountRow.style.display = 'flex';
        let discountTexts = [];
        if (discount > 0) discountTexts.push(couponCodeStr || 'Discount');
        if (currentCoinsDiscount > 0) discountTexts.push(`${currentCoinsDiscount} Coins`);
        
        checkoutCouponCode.textContent = discountTexts.join(' + ');
        checkoutDiscountAmount.textContent = `-₹${discount + currentCoinsDiscount}`;
    } else {
        checkoutDiscountRow.style.display = 'none';
    }
    
    checkoutTotal.textContent = `₹${total > 0 ? total : 0}`;
}

function triggerConfetti() {
    if (window.confetti) {
        var duration = 3000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 104 };

        function randomInRange(min, max) { return Math.random() * (max - min) + min; }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);

            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
}

function triggerConfettiSmall() {
    if (window.confetti) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            zIndex: 104
        });
    }
}

// Start
init();

// Failsafe: ensure cart stays closed after any async init callbacks
setTimeout(closeCart, 100);
setTimeout(closeCart, 2000);

// Cursor Glow Tracker (Optimized Glassmorphism)
const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;
        cursorGlow.style.left = `${currentX}px`;
        cursorGlow.style.top = `${currentY}px`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}

// Special Offers Logic
window.openSpecialOffers = function() {
    const modal = document.getElementById('special-offers-modal');
    if (modal) {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

window.closeSpecialOffers = function() {
    const modal = document.getElementById('special-offers-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }
}

window.addComboToCart = function(type) {
    let comboItemIds = [];
    if (type === 'burger') {
        comboItemIds = [102, 224, 201]; // Spicy Chicken Burger, Pepsi, Lava Cake
    } else if (type === 'pizza') {
        comboItemIds = [3, 223, 202]; // Margherita Pizza, Diet Coke, Strawberry Cheesecake
    } else if (type === 'sushi') {
        comboItemIds = [103, 214, 218]; // Chicken Teriyaki Sushi, Kiwi Mint Mocktail, Classic Tiramisu
    } else if (type === 'desi') {
        comboItemIds = [105, 203, 220]; // Chicken Tikka Masala, Mint Mojito, Caramel Custard Flan
    }
    
    // Apply 20% discount coupon
    appliedDiscount = 20;
    couponCodeStr = `COMBO20`;
    
    comboItemIds.forEach(id => {
        const item = foodItems.find(f => f.id === id);
        if (item) {
            const existing = cart.find(c => c.id === id);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ ...item, qty: 1 });
            }
        }
    });
    
    updateCartUI();
    closeSpecialOffers();
    
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    
    triggerConfettiSmall();
    
    setTimeout(() => {
        const toastMsg = document.getElementById('toast-msg');
        if (toastMsg) {
            toastMsg.textContent = `🎉 ${type.charAt(0).toUpperCase() + type.slice(1)} Combo added! Special 20% discount applied!`;
            const toast = document.getElementById('daily-toast');
            if (toast) {
                toast.style.transform = 'translateY(0)';
                setTimeout(() => { toast.style.transform = 'translateY(150%)'; }, 5000);
            }
        }
    }, 500);
}

// Floating Food Bubble Hover Preview
(function() {
    const preview = document.getElementById('food-hover-preview');
    if (!preview) return;

    document.querySelectorAll('.floating-food-bubble').forEach(bubble => {
        const img = bubble.querySelector('img');
        if (!img) return;

        bubble.addEventListener('mouseenter', () => {
            preview.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            preview.classList.add('active');
        });

        bubble.addEventListener('mousemove', (e) => {
            // Position preview near cursor, offset so it doesn't overlap
            const x = e.clientX + 20;
            const y = e.clientY - 140;
            // Keep within viewport
            const maxX = window.innerWidth - 310;
            const maxY = window.innerHeight - 300;
            preview.style.left = Math.min(Math.max(10, x), maxX) + 'px';
            preview.style.top = Math.min(Math.max(10, y), maxY) + 'px';
        });

        bubble.addEventListener('mouseleave', () => {
            preview.classList.remove('active');
        });
    });
})();