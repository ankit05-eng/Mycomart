// ============================================================
//  MYCOMART — JavaScript Core
//  Brand name chosen: MycōMart (from 10 ideas below)
// ============================================================
//
//  Brand Name Ideas (10):
//  1. MycōMart      — Myco (fungus) + Mart (market). Short, modern, memorable ✅ CHOSEN
//  2. Shroomly      — Friendly, youthful, mushroom-inspired
//  3. FungiFarm     — Direct, clear, farmstead feel
//  4. EarthCap      — Cap (mushroom cap) + Earth = organic nature
//  5. SporeBox      — Subscription box feel, modern
//  6. MossGrove     — Evokes nature, forest, tranquility
//  7. HarvestHub    — Harvest + marketplace hub
//  8. CanopyCo      — Forest canopy, premium co-brand
//  9. NaturCap      — Natural + Mushroom cap, clean
//  10. MyceliaFresh — Mycelium + Fresh = scientific + organic
//
// ============================================================

'use strict';

// ─── GLOBAL STATE ──────────────────────────────────────────
const state = {
  cart: JSON.parse(localStorage.getItem('mycomart_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('mycomart_wishlist') || '[]'),
  theme: localStorage.getItem('mycomart_theme') || 'light',
  currentPage: 'home'
};

// ─── PRODUCT DATA ──────────────────────────────────────────
const products = [
  {
    id: 1,
    name: 'Creamy White Button Mushroom',
    category: 'button',
    categoryLabel: 'Button Mushroom',
    emoji: '🍄',
    prices: { '250g': 65, '500g': 120, '1kg': 225 },
    originalPrices: { '250g': 85, '500g': 155, '1kg': 295 },
    rating: 4.8,
    reviews: 247,
    description: 'Freshly harvested from our Angul farm. Plump, firm, and loaded with umami richness — perfect for daily cooking.',
    longDesc: 'Our Button Mushrooms are grown in carefully controlled environments at our Pokatunga, Bantala farm. Harvested at peak freshness and delivered within 24 hours. Rich in B vitamins, selenium, and antioxidants.',
    nutrition: { calories: '22 kcal / 100g', protein: '3.1g', fiber: '1g', vitamin_d: '7% DV' },
    benefits: ['Boosts immunity', 'Rich in antioxidants', 'Low calorie', 'High protein'],
    tags: ['fresh', 'bestseller', 'daily'],
    badge: 'Best Seller',
    badgeColor: 'badge-gold',
    inStock: true,
    stockQty: 120
  },
  {
    id: 2,
    name: 'Blue Oyster Mushroom',
    category: 'oyster',
    categoryLabel: 'Oyster Mushroom',
    emoji: '🫐',
    prices: { '250g': 85, '500g': 160, '1kg': 299 },
    originalPrices: { '250g': 110, '500g': 205, '1kg': 385 },
    rating: 4.9,
    reviews: 182,
    description: 'Delicate, fan-shaped blue oyster mushrooms with a velvety texture and mild, nutty flavour.',
    longDesc: 'Blue Oyster mushrooms are prized for their striking appearance and incredible nutritional profile. Grown on natural substrate at our Bantala farm, these mushrooms contain powerful anti-inflammatory compounds.',
    nutrition: { calories: '33 kcal / 100g', protein: '3.3g', fiber: '2.3g', vitamin_b: '28% DV' },
    benefits: ['Anti-inflammatory', 'Heart health', 'Brain booster', 'Immune support'],
    tags: ['fresh', 'premium', 'organic'],
    badge: 'Organic',
    badgeColor: 'badge-green',
    inStock: true,
    stockQty: 75
  },
  {
    id: 3,
    name: 'Golden Oyster Mushroom',
    category: 'oyster',
    categoryLabel: 'Oyster Mushroom',
    emoji: '🌟',
    prices: { '250g': 95, '500g': 178, '1kg': 335 },
    originalPrices: { '250g': 125, '500g': 230, '1kg': 430 },
    rating: 4.7,
    reviews: 134,
    description: 'Vibrant golden clusters with a fruity, mild aroma. Rare and exotic variety from our farm.',
    longDesc: 'Golden Oyster mushrooms are one of the most visually stunning varieties we grow. Their golden colour and delicate texture make them a favourite among chefs and health enthusiasts alike.',
    nutrition: { calories: '35 kcal / 100g', protein: '3.5g', fiber: '2.0g', vitamin_c: '12% DV' },
    benefits: ['Cholesterol reducer', 'Energy booster', 'Antioxidant rich', 'Digestive health'],
    tags: ['premium', 'rare', 'chef-favorite'],
    badge: 'Rare',
    badgeColor: 'badge-blue',
    inStock: true,
    stockQty: 40
  },
  {
    id: 4,
    name: 'Wild Shiitake Mushroom',
    category: 'shiitake',
    categoryLabel: 'Shiitake Mushroom',
    emoji: '🌰',
    prices: { '250g': 110, '500g': 210, '1kg': 399 },
    originalPrices: { '250g': 145, '500g': 270, '1kg': 510 },
    rating: 4.9,
    reviews: 319,
    description: 'Classic Shiitake with deep, smoky umami. Medicinal powerhouse from our log-grown cultivation.',
    longDesc: 'Our Shiitake mushrooms are log-grown using traditional Japanese methods adapted to Odisha\'s climate. Each mushroom is packed with lentinan, a powerful beta-glucan known for immune support.',
    nutrition: { calories: '34 kcal / 100g', protein: '2.2g', fiber: '2.5g', copper: '65% DV' },
    benefits: ['Immune booster', 'Lowers cholesterol', 'Anti-cancer', 'Liver protection'],
    tags: ['premium', 'medicinal', 'bestseller'],
    badge: 'Premium',
    badgeColor: 'badge-gold',
    inStock: true,
    stockQty: 85
  },
  {
    id: 5,
    name: 'Pink Oyster Mushroom',
    category: 'oyster',
    categoryLabel: 'Oyster Mushroom',
    emoji: '🌸',
    prices: { '250g': 90, '500g': 170, '1kg': 320 },
    originalPrices: { '250g': 115, '500g': 215, '1kg': 405 },
    rating: 4.6,
    reviews: 98,
    description: 'Striking hot-pink clusters with a succulent, meaty texture. Turns light pink when cooked.',
    longDesc: 'Pink Oyster mushrooms are a tropical variety perfectly suited to Odisha\'s warm climate. They have a distinctive seafood-like flavour when cooked and are a great meat substitute.',
    nutrition: { calories: '38 kcal / 100g', protein: '3.7g', fiber: '2.1g', iron: '8% DV' },
    benefits: ['Protein-rich', 'Meat substitute', 'Antifungal properties', 'Gut health'],
    tags: ['fresh', 'exotic', 'vegan'],
    badge: 'New',
    badgeColor: 'badge-green',
    inStock: true,
    stockQty: 55
  },
  {
    id: 6,
    name: 'Dried Shiitake Pack',
    category: 'shiitake',
    categoryLabel: 'Shiitake Mushroom',
    emoji: '🍂',
    prices: { '100g': 150, '250g': 345, '500g': 659 },
    originalPrices: { '100g': 190, '250g': 440, '500g': 840 },
    rating: 4.8,
    reviews: 205,
    description: 'Sun-dried Shiitake with 10x concentrated nutrients. Perfect for soups, broths, and long shelf life.',
    longDesc: 'Our dried Shiitake are naturally sun-dried at our Angul farm, locking in all the goodness. One 100g pack is equivalent to 1kg of fresh mushrooms in flavour and nutrition.',
    nutrition: { calories: '296 kcal / 100g', protein: '9.6g', fiber: '11.5g', vitamin_d: '45% DV' },
    benefits: ['Long shelf life', 'Concentrated nutrition', 'Intense umami', 'Travel friendly'],
    tags: ['dried', 'shelf-stable', 'value'],
    badge: '15% OFF',
    badgeColor: 'badge-red',
    inStock: true,
    stockQty: 200
  },
  {
    id: 7,
    name: 'Button Mushroom (Organic Certified)',
    category: 'button',
    categoryLabel: 'Button Mushroom',
    emoji: '✅',
    prices: { '250g': 80, '500g': 148, '1kg': 275 },
    originalPrices: { '250g': 100, '500g': 185, '1kg': 345 },
    rating: 4.7,
    reviews: 167,
    description: 'NPOP Organic certified Button Mushrooms. Grown without chemicals, verified pure from Pokatunga farm.',
    longDesc: 'These are our flagship certified organic button mushrooms, verified by NPOP (National Programme for Organic Production). Grown using only natural compost and tested free of pesticide residues.',
    nutrition: { calories: '22 kcal / 100g', protein: '3.1g', fiber: '1g', potassium: '9% DV' },
    benefits: ['Pesticide-free', 'NPOP certified', 'Naturally grown', 'Farm fresh'],
    tags: ['organic', 'certified', 'premium'],
    badge: 'Certified Organic',
    badgeColor: 'badge-green',
    inStock: true,
    stockQty: 95
  },
  {
    id: 8,
    name: 'Mixed Mushroom Combo Box',
    category: 'button',
    categoryLabel: 'Combo Pack',
    emoji: '📦',
    prices: { '500g': 199, '1kg': 375 },
    originalPrices: { '500g': 260, '1kg': 490 },
    rating: 4.9,
    reviews: 421,
    description: 'Best value combo! Button + Oyster + Shiitake. Try all three premium varieties in one box.',
    longDesc: 'Our most popular product — the MycōMart Mixed Box brings together all three of our specialty mushroom varieties. Handpicked on the same day and packed in eco-friendly packaging.',
    nutrition: { calories: '28 kcal / 100g avg', protein: '3.0g avg', fiber: '1.8g', vitamin_b12: '15% DV' },
    benefits: ['Variety pack', 'Best value', 'Farm fresh', 'Gift ready'],
    tags: ['combo', 'bestseller', 'gift'],
    badge: '🔥 Hot Deal',
    badgeColor: 'badge-red',
    inStock: true,
    stockQty: 60
  }
];

const blogPosts = [
  { id: 1, title: 'How We Built Our Mushroom Farm from Scratch in Rural Odisha', emoji: '🌱', date: 'March 5, 2025', category: 'Farm Story', excerpt: 'The journey of three brothers from Angul district who turned a small shed into a thriving mushroom enterprise...', readTime: '6 min read' },
  { id: 2, title: '5 Reasons Why Shiitake Mushrooms Are Nature\'s Best Medicine', emoji: '🍄', date: 'Feb 20, 2025', category: 'Health', excerpt: 'Modern science is catching up to what Japanese healers knew for centuries — Shiitake is a medicinal powerhouse...', readTime: '4 min read' },
  { id: 3, title: 'Mushroom Cultivation Guide for Beginners in India', emoji: '📚', date: 'Feb 10, 2025', category: 'Farming Guide', excerpt: 'Want to start growing mushrooms at home or commercially? Here is the complete step-by-step guide from our experts...', readTime: '8 min read' },
  { id: 4, title: 'Delicious Oyster Mushroom Recipes for Indian Kitchens', emoji: '🍳', date: 'Jan 25, 2025', category: 'Recipes', excerpt: 'From Oyster Mushroom curry to stir-fry and soup — 10 easy recipes that will transform your cooking...', readTime: '5 min read' },
  { id: 5, title: 'The Climate Advantage: Why Odisha is Perfect for Mushroom Farming', emoji: '🌦️', date: 'Jan 12, 2025', category: 'Science', excerpt: 'Angul district\'s unique microclimate offers ideal humidity and temperature conditions for premium mushroom growth...', readTime: '5 min read' },
  { id: 6, title: 'Organic Certification Journey: What It Took to Get NPOP Certified', emoji: '📜', date: 'Dec 28, 2024', category: 'Behind the Scenes', excerpt: 'The rigorous 18-month process we undertook to achieve organic certification for our Bantala farm...', readTime: '7 min read' }
];

const faqs = [
  { q: 'Where are your mushrooms grown?', a: 'All our mushrooms are grown at our family farm in Pokatunga, Bantala, Angul, Odisha. We maintain full farm-to-table transparency with no outsourcing.' },
  { q: 'How fresh are the mushrooms at delivery?', a: 'We harvest mushrooms the same day your order is placed (for orders before 10 AM). Same-day delivery in Angul district, and 24-48 hour delivery for other cities via our cold-chain logistics.' },
  { q: 'Are your mushrooms certified organic?', a: 'Yes! Our Button Mushroom range is NPOP (National Programme for Organic Production) certified. All our products are grown without synthetic chemicals. Certification available on request.' },
  { q: 'Do you offer bulk or wholesale pricing?', a: 'Yes, we offer special pricing for restaurants, hotels, and resellers. Contact us at wholesale@mycomart.in or call +91 94370 XXXXX for bulk orders above 10kg.' },
  { q: 'What is your return policy?', a: 'We have a 100% freshness guarantee. If you receive mushrooms that are not fresh, we will replace them the same day or issue a full refund. No questions asked.' },
  { q: 'How should I store my mushrooms?', a: 'Fresh mushrooms should be kept in the refrigerator in a paper bag (not plastic). They stay fresh for 5-7 days. For longer storage, dried mushrooms last up to 12 months in a cool, dry place.' },
  { q: 'Do you ship pan-India?', a: 'We currently deliver fresh mushrooms within Odisha. For dried and packaged varieties, we ship pan-India via courier. Check the delivery estimator on the product page.' },
  { q: 'How are the mushrooms packaged?', a: 'We use eco-friendly, biodegradable packaging. Fresh mushrooms come in breathable paper bags. Dried products are vacuum-sealed to lock in freshness.' }
];

const reviews = [
  { name: 'Priya Pattnaik', location: 'Bhubaneswar', rating: 5, text: 'Absolutely the freshest mushrooms I have ever bought online! The Shiitake arrived in perfect condition and the taste is incredible. Will not buy anywhere else now.', date: '2 weeks ago' },
  { name: 'Rajan Sharma', location: 'Cuttack', rating: 5, text: 'Ordered the Mixed Combo Box as a gift for my wife who loves cooking. She was absolutely thrilled! The packaging is beautiful and the quality is restaurant-grade.', date: '1 month ago' },
  { name: 'Deepa Mohanty', location: 'Sambalpur', rating: 5, text: 'As a chef, I have very high standards for ingredients. MycōMart\'s Oyster mushrooms are consistently excellent. I order every week for my restaurant.', date: '3 weeks ago' },
  { name: 'Suresh Kumar', location: 'Angul', rating: 5, text: 'Supporting local business and getting the best quality — this is the dream. Ankit and his brothers have done an outstanding job. Very proud of this from Angul!', date: '1 week ago' },
  { name: 'Meena Biswal', location: 'Rourkela', rating: 4, text: 'Great products and very responsive customer service. Delivery was prompt. I did have one small issue with an order but they resolved it immediately with a replacement.', date: '5 days ago' },
  { name: 'Ashok Nanda', location: 'Berhampur', rating: 5, text: 'The dried Shiitake pack is absolutely amazing. I use it to make the most flavourful broth. 100g lasts a whole month. Excellent value for money!', date: '2 months ago' }
];

// ─── DOM UTILITIES ──────────────────────────────────────────
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

function createElement(tag, classes = '', html = '') {
  const el = document.createElement(tag);
  if (classes) el.className = classes;
  if (html) el.innerHTML = html;
  return el;
}

// ─── THEME ──────────────────────────────────────────────────
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  $$('.dark-toggle').forEach(btn => {
    btn.setAttribute('title', state.theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('mycomart_theme', state.theme);
  initTheme();
}

// ─── CART ───────────────────────────────────────────────────
function saveCart() {
  localStorage.setItem('mycomart_cart', JSON.stringify(state.cart));
  updateCartUI();
}

function addToCart(productId, weight, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const key = `${productId}_${weight}`;
  const existing = state.cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      key,
      productId,
      weight,
      qty,
      name: product.name,
      emoji: product.emoji,
      price: product.prices[weight] || Object.values(product.prices)[0]
    });
  }
  saveCart();
  showToast(`🛒 Added ${product.name} (${weight}) to cart!`, 'success');
  renderCartItems();
}

function removeFromCart(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  saveCart();
  renderCartItems();
}

function updateCartQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCartItems();
}

function getCartTotal() {
  return state.cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function getCartCount() {
  return state.cart.reduce((s, i) => s + i.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  $$('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderCartItems() {
  const container = $('#cart-items-list');
  if (!container) return;
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem;">
        <div style="font-size:4rem; margin-bottom:1rem;">🛒</div>
        <div style="font-family:'Playfair Display',serif; font-size:1.25rem; font-weight:700; margin-bottom:0.5rem;">Your cart is empty</div>
        <div style="color:var(--text-muted); font-size:0.9rem;">Browse our fresh mushrooms and add them here.</div>
      </div>`;
    const totalEl = $('#cart-total-val');
    if (totalEl) totalEl.textContent = '₹0';
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-key="${item.key}">
      <div class="cart-item-img">${item.emoji}</div>
      <div style="flex:1;">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.weight}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="updateCartQty('${item.key}', -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.key}', 1)">+</button>
          <button style="margin-left:auto;color:var(--text-muted);font-size:1rem;padding:4px;" onclick="removeFromCart('${item.key}')">🗑</button>
        </div>
      </div>
      <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
    </div>`).join('');

  const totalEl = $('#cart-total-val');
  if (totalEl) totalEl.textContent = `₹${getCartTotal().toLocaleString('en-IN')}`;
}

function openCart() {
  renderCartItems();
  const overlay = $('#cart-overlay');
  const sidebar = $('#cart-sidebar');
  if (overlay) overlay.classList.add('active');
  if (sidebar) sidebar.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const overlay = $('#cart-overlay');
  const sidebar = $('#cart-sidebar');
  if (overlay) overlay.classList.remove('active');
  if (sidebar) sidebar.classList.remove('active');
  document.body.style.overflow = '';
}

// ─── WISHLIST ───────────────────────────────────────────────
function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('💔 Removed from wishlist', 'info');
  } else {
    state.wishlist.push(productId);
    showToast('❤️ Added to wishlist!', 'success');
  }
  localStorage.setItem('mycomart_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
}

function updateWishlistUI() {
  $$('[data-wishlist]').forEach(btn => {
    const id = parseInt(btn.dataset.wishlist);
    btn.style.color = state.wishlist.includes(id) ? '#e53e3e' : '';
  });
  const countEl = $('.wishlist-count');
  if (countEl) {
    countEl.textContent = state.wishlist.length;
    countEl.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
  }
}

// ─── PRODUCT CARD RENDERER ──────────────────────────────────
function renderProductCard(product, selectedWeight = null) {
  const weights = Object.keys(product.prices);
  const activeWeight = selectedWeight || weights[0];
  const price = product.prices[activeWeight];
  const original = product.originalPrices[activeWeight];
  const discount = Math.round((1 - price / original) * 100);
  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '⭐' : '');

  return `
    <div class="product-card" onclick="navigateTo('product', ${product.id})">
      <div class="product-card-image">
        <div class="product-emoji">${product.emoji}</div>
        <div class="product-badge-wrap">
          <span class="badge ${product.badgeColor}">${product.badge}</span>
        </div>
        <div class="product-actions-overlay">
          <button class="product-action-icon" title="Add to Wishlist" onclick="event.stopProp