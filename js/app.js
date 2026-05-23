/* ============================================
   VitaShop - Main Application Logic
   ============================================ */

// --- Currency formatter ---
const fmt = (n) => 'RM ' + Number(n).toFixed(2);

// --- Storage helpers ---
const Store = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  },
  remove(key) { localStorage.removeItem(key); }
};

// --- Initialise products (admin can edit) ---
function initProductsDB() {
  if (!Store.get('vs_products')) {
    Store.set('vs_products', SAMPLE_PRODUCTS);
  }
  if (!Store.get('vs_orders')) {
    Store.set('vs_orders', SAMPLE_ORDERS);
  }
  if (!Store.get('vs_customers')) {
    Store.set('vs_customers', SAMPLE_CUSTOMERS);
  }
}

function getProducts() {
  initProductsDB();
  return Store.get('vs_products', SAMPLE_PRODUCTS);
}

function getProduct(id) {
  return getProducts().find(p => p.id === id);
}

// --- Cart logic ---
const Cart = {
  get() { return Store.get('vs_cart', []); },

  count() {
    return this.get().reduce((s, item) => s + item.qty, 0);
  },

  subtotal() {
    return this.get().reduce((s, item) => {
      const p = getProduct(item.id);
      return p ? s + (p.price * item.qty) : s;
    }, 0);
  },

  add(productId, qty = 1, size = null) {
    const cart = this.get();
    const existing = cart.find(i => i.id === productId && i.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, qty, size });
    }
    Store.set('vs_cart', cart);
    this.updateUI();
    return cart;
  },

  remove(productId, size = null) {
    let cart = this.get();
    cart = cart.filter(i => !(i.id === productId && i.size === size));
    Store.set('vs_cart', cart);
    this.updateUI();
    return cart;
  },

  updateQty(productId, qty, size = null) {
    const cart = this.get();
    const item = cart.find(i => i.id === productId && i.size === size);
    if (item) {
      item.qty = Math.max(1, qty);
      Store.set('vs_cart', cart);
    }
    this.updateUI();
    return cart;
  },

  clear() {
    Store.set('vs_cart', []);
    this.updateUI();
  },

  updateUI() {
    const count = this.count();
    document.querySelectorAll('[data-cart-count]').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }
};

// --- Auth (demo, client-side only) ---
const Auth = {
  current() { return Store.get('vs_user', null); },

  isLoggedIn() { return this.current() !== null; },

  isAdmin() {
    const u = this.current();
    return u && u.role === 'admin';
  },

  register(name, email, password) {
    const users = Store.get('vs_users', []);
    if (users.find(u => u.email === email)) {
      return { ok: false, msg: 'An account with this email already exists.' };
    }
    const newUser = {
      id: 'u' + Date.now(),
      name, email, password,
      role: 'customer',
      joined: new Date().toISOString().split('T')[0],
      orders: 0,
      spent: 0
    };
    users.push(newUser);
    Store.set('vs_users', users);
    Store.set('vs_user', { id: newUser.id, name, email, role: 'customer' });
    return { ok: true };
  },

  login(email, password) {
    // Demo admin
    if (email === 'admin@vitashop.my' && password === 'admin123') {
      Store.set('vs_user', { id: 'admin', name: 'Admin', email, role: 'admin' });
      return { ok: true, admin: true };
    }
    // Demo customer
    if (email === 'demo@vitashop.my' && password === 'demo123') {
      Store.set('vs_user', { id: 'demo', name: 'Demo Customer', email, role: 'customer' });
      return { ok: true };
    }
    // Real users
    const users = Store.get('vs_users', []);
    const u = users.find(x => x.email === email && x.password === password);
    if (!u) return { ok: false, msg: 'Invalid email or password.' };
    Store.set('vs_user', { id: u.id, name: u.name, email: u.email, role: u.role || 'customer' });
    return { ok: true };
  },

  logout() {
    Store.remove('vs_user');
    window.location.href = 'index.html';
  }
};

// --- Toast notifications ---
function showToast(message, icon = '✓') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ${message}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// --- Stars render ---
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let s = '★'.repeat(full);
  if (half) s += '½';
  s += '☆'.repeat(5 - full - (half ? 1 : 0));
  return s.slice(0, 5).replace('½', '★');
}

// --- Mobile menu ---
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('.mobile-close');

  if (!toggle || !menu) return;

  const open = () => {
    menu.classList.add('open');
    if (overlay) overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    menu.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', open);
  if (close) close.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
}

// --- Header / Footer injection ---
function buildHeader(activePage = '') {
  const user = Auth.current();
  const userBtn = user
    ? `<a href="${user.role === 'admin' ? 'admin/dashboard.html' : 'account.html'}" class="icon-btn" title="${user.name}">
         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>
       </a>`
    : `<a href="login.html" class="icon-btn" title="Sign in">
         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>
       </a>`;

  return `
  <header class="header">
    <div class="top-banner">
      Free shipping on orders over <strong>RM150</strong> · Same-day dispatch from Klang Valley
    </div>
    <div class="container">
      <nav class="nav">
        <a href="index.html" class="logo">
          <span class="logo-mark">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1 4-4 6-8 6 0 6 4 12 8 14 4-2 8-8 8-14-4 0-7-2-8-6z"/></svg>
          </span>
          VitaShop
        </a>

        <ul class="nav-menu">
          <li><a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a></li>
          <li><a href="shop.html" ${activePage === 'shop' ? 'class="active"' : ''}>Shop</a></li>
          <li><a href="subscription.html" ${activePage === 'sub' ? 'class="active"' : ''}>Wellness Box</a></li>
          <li><a href="about.html" ${activePage === 'about' ? 'class="active"' : ''}>About</a></li>
          <li><a href="contact.html" ${activePage === 'contact' ? 'class="active"' : ''}>Contact</a></li>
        </ul>

        <div class="nav-actions">
          <a href="shop.html" class="icon-btn" title="Search" aria-label="Search">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>
          </a>
          ${userBtn}
          <a href="cart.html" class="icon-btn" title="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
            <span class="cart-count" data-cart-count style="display:none">0</span>
          </a>
          <button class="mobile-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      </nav>
    </div>
  </header>

  <div class="mobile-menu">
    <button class="mobile-close" aria-label="Close">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="subscription.html">Wellness Box</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
      ${user ? `<li><a href="${user.role === 'admin' ? 'admin/dashboard.html' : 'account.html'}">My Account</a></li>` : `<li><a href="login.html">Sign In</a></li>`}
    </ul>
  </div>
  <div class="overlay"></div>
  `;
}

function buildFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <a href="index.html" class="logo">
            <span class="logo-mark">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1 4-4 6-8 6 0 6 4 12 8 14 4-2 8-8 8-14-4 0-7-2-8-6z"/></svg>
            </span>
            VitaShop
          </a>
          <p>Malaysia's most trusted online wellness store — premium supplements, science-backed formulas, and same-day shipping across Klang Valley.</p>
          <div class="social-row">
            <a class="social-link" href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a class="social-link" href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.02H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33V22c4.78-.8 8.44-4.93 8.44-9.93z"/></svg></a>
            <a class="social-link" href="#" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V7.43a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.86z"/></svg></a>
            <a class="social-link" href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3 3 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8A3 3 0 0 0 2.62 19.93C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.57A3 3 0 0 0 23.5 17.8c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg></a>
          </div>
        </div>

        <div>
          <h5>Shop</h5>
          <ul>
            <li><a href="shop.html?cat=vitamins">Vitamins</a></li>
            <li><a href="shop.html?cat=fitness">Fitness</a></li>
            <li><a href="shop.html?cat=herbal">Herbal</a></li>
            <li><a href="shop.html?cat=immunity">Immunity</a></li>
            <li><a href="subscription.html">Wellness Box</a></li>
          </ul>
        </div>

        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="blog.html">Wellness Journal</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div>
          <h5>Support</h5>
          <ul>
            <li><a href="faq.html">Help Center / FAQ</a></li>
            <li><a href="faq.html#shipping">Shipping</a></li>
            <li><a href="faq.html#returns">Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 VitaShop Sdn. Bhd. (1234567-A) · All rights reserved.</span>
        <div class="payment-icons">
          <span class="pay-pill">FPX</span>
          <span class="pay-pill">VISA</span>
          <span class="pay-pill">MASTERCARD</span>
          <span class="pay-pill">GRABPAY</span>
          <span class="pay-pill">TNG</span>
          <span class="pay-pill">BOOST</span>
        </div>
      </div>
    </div>
  </footer>
  `;
}

function initLayout(activePage = '') {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = buildHeader(activePage);
  if (footer) footer.innerHTML = buildFooter();
  initMobileMenu();
  Cart.updateUI();
}

// --- Render product card ---
function productCardHTML(p) {
  const tagClass = p.tag === 'SALE' ? 'tag-sale' : (p.tag === 'NEW' ? 'tag-new' : '');
  return `
  <article class="product-card">
    <a href="product.html?id=${p.id}" class="product-img-wrap">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      ${p.tag ? `<span class="product-tag ${tagClass}">${p.tag}</span>` : ''}
      <button class="product-wishlist" aria-label="Add to wishlist" onclick="event.preventDefault(); event.stopPropagation(); this.classList.toggle('active'); showToast('Saved to wishlist');">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 14c1.5-1.5 3-3.4 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .9-4.5 2.5C10.5 3.9 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.1 1.5 4 3 5.5l7 7Z"/></svg>
      </button>
    </a>
    <div class="product-info">
      <span class="product-cat">${p.categoryLabel}</span>
      <a href="product.html?id=${p.id}"><h3 class="product-name">${p.name}</h3></a>
      <div class="product-rating">
        <span class="stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}</span>
        <span>${p.rating} (${p.reviews})</span>
      </div>
      <div class="product-bottom">
        <div class="product-price">
          ${p.oldPrice ? `<del>${fmt(p.oldPrice)}</del>` : ''}
          ${fmt(p.price)}
        </div>
        <button class="add-cart-btn" aria-label="Add to cart" onclick="Cart.add('${p.id}'); showToast('Added to cart');">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </div>
  </article>
  `;
}

// --- Init on every page ---
document.addEventListener('DOMContentLoaded', () => {
  initProductsDB();
});
