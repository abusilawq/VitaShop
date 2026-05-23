/* ============================================
   VitaShop Admin - Shared Logic
   ============================================ */

// Guard - require admin login
function requireAdmin() {
  if (!Auth.isLoggedIn() || !Auth.isAdmin()) {
    window.location.href = 'index.html';
    return false;
  }
  return true;
}

// Build admin sidebar
function buildAdminSidebar(active = '') {
  return `
    <aside class="admin-sidebar">
      <a href="dashboard.html" class="admin-logo">
        <span class="logo-mark">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1 4-4 6-8 6 0 6 4 12 8 14 4-2 8-8 8-14-4 0-7-2-8-6z"/></svg>
        </span>
        <span class="logo-text">
          VitaShop
          <small>Admin Portal</small>
        </span>
      </a>

      <nav class="admin-nav">
        <span class="nav-section">Main</span>
        <a href="dashboard.html" class="${active === 'dashboard' ? 'active' : ''}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
          Dashboard
        </a>
        <a href="orders.html" class="${active === 'orders' ? 'active' : ''}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
          Orders
          <span class="nav-badge" id="newOrderBadge"></span>
        </a>
        <a href="products.html" class="${active === 'products' ? 'active' : ''}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7l-8-4-8 4 8 4 8-4z"/><path d="M4 7v10l8 4 8-4V7"/><path d="M12 11v10"/></svg>
          Products
        </a>
        <a href="customers.html" class="${active === 'customers' ? 'active' : ''}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Customers
        </a>
        <a href="analytics.html" class="${active === 'analytics' ? 'active' : ''}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          Analytics
        </a>

        <span class="nav-section">Settings</span>
        <a href="#" onclick="alert('Coming soon');return false">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          Settings
        </a>
        <a href="../index.html">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12 12 3l9 9"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/></svg>
          View Site
        </a>
        <a href="#" onclick="Auth.logout();return false;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Sign Out
        </a>
      </nav>

      <div class="admin-user-card">
        <div class="admin-avatar">A</div>
        <div>
          <strong>${Auth.current()?.name || 'Admin'}</strong>
          <span>${Auth.current()?.email || ''}</span>
        </div>
      </div>
    </aside>
  `;
}

function buildAdminHeader(title) {
  return `
    <header class="admin-header">
      <button class="admin-menu-toggle" onclick="document.querySelector('.admin-sidebar').classList.toggle('open')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
      </button>
      <div class="admin-header-title">
        <h1>${title}</h1>
        <span>${new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
      </div>
      <div class="admin-header-actions">
        <button class="admin-icon-btn" title="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span class="notif-dot"></span>
        </button>
        <button class="admin-icon-btn" title="Help">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </button>
      </div>
    </header>
  `;
}

function initAdmin(active = '', title = '') {
  if (!requireAdmin()) return false;
  const sidebar = document.getElementById('admin-sidebar');
  const header = document.getElementById('admin-header');
  if (sidebar) sidebar.innerHTML = buildAdminSidebar(active);
  if (header) header.innerHTML = buildAdminHeader(title);
  return true;
}

// Product CRUD
const ProductAdmin = {
  add(product) {
    const products = getProducts();
    const newProduct = {
      id: 'p' + String(Date.now()).slice(-4),
      ...product,
      images: [product.image || 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop'],
      benefits: product.benefits || [],
      sizes: product.sizes || ['Standard'],
      servingSize: product.servingSize || '1 daily',
      ingredients: product.ingredients || 'See product label'
    };
    products.push(newProduct);
    Store.set('vs_products', products);
    return newProduct;
  },

  update(id, updates) {
    const products = getProducts();
    const idx = products.findIndex(p => p.id === id);
    if (idx < 0) return null;
    products[idx] = { ...products[idx], ...updates };
    Store.set('vs_products', products);
    return products[idx];
  },

  delete(id) {
    const products = getProducts().filter(p => p.id !== id);
    Store.set('vs_products', products);
  }
};

// Order admin
const OrderAdmin = {
  updateStatus(orderId, status) {
    const orders = Store.get('vs_orders', []);
    const o = orders.find(x => x.id === orderId);
    if (o) {
      o.status = status;
      Store.set('vs_orders', orders);
    }
    return o;
  },
  delete(orderId) {
    const orders = Store.get('vs_orders', []).filter(o => o.id !== orderId);
    Store.set('vs_orders', orders);
  }
};
