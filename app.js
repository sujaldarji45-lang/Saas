// =========================================================================
// 1. ADMIN CONFIGURATION (APNA AUTHORIZED GMAIL ID YAHAN SET KAREIN)
// =========================================================================
// =========================================================================
// ADMIN CREDENTIALS (APNA EMAIL ID AUR PASSWORD YAHAN SET KAREIN)
// =========================================================================
const ADMIN_CREDENTIALS = {
  email: "admin@techhub.com",
  password: "Admin@123"
};

const CATEGORY_META = {
  "AI Tools": {
    bg: "linear-gradient(135deg, #EEF2FF, #E0E7FF)",
    color: "#4F46E5",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  "Productivity": {
    bg: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
    color: "#059669",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
  },
  "Design": {
    bg: "linear-gradient(135deg, #FFF1F2, #FFE4E6)",
    color: "#E11D48",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`
  },
  "Developer Tools": {
    bg: "linear-gradient(135deg, #F0F9FF, #E0F2FE)",
    color: "#0284C7",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
  },
  "SaaS": {
    bg: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
    color: "#7C3AED",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
  },
  "Marketing": {
    bg: "linear-gradient(135deg, #FFF7ED, #FFEDD5)",
    color: "#EA580C",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>`
  },
  "Mobile Apps": {
    bg: "linear-gradient(135deg, #ECFEFF, #CFFAFE)",
    color: "#0891B2",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`
  }
};

function getCatMeta(name) {
  return CATEGORY_META[name] || {
    bg: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
    color: "#2563EB",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`
  };
}

const DEFAULT_PRODUCTS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    developer: "OpenAI",
    letter: "G",
    logoUrl: "",
    color: "#10A37F",
    category: "AI Tools",
    pricing: "Free & Premium",
    priceLabel: "Free / $20 mo",
    rating: 4.8,
    isUserSubmitted: false,
    addedAt: "2026-11-01 10:00 AM",
    tagline: "Get answers, generate ideas, and automate workflows with conversational AI.",
    description: "ChatGPT is OpenAI's conversational AI assistant capable of drafting content, debugging code, analyzing files, and brainstorming complex workflows.",
    features: ["Multimodal text, image & file analysis", "Custom GPTs & API access", "Code interpreter & data analysis", "Team & Enterprise workspaces"],
    bestFor: "Creators, developers, researchers & teams",
    website: "https://chat.openai.com",
    reviews: [
      { user: "Aarav Patel", rating: 5, comment: "Essential daily tool for coding, documentation, and quick research." }
    ]
  },
  {
    id: "notion",
    name: "Notion",
    developer: "Notion Labs",
    letter: "N",
    logoUrl: "",
    color: "#111827",
    category: "Productivity",
    pricing: "Free & Premium",
    priceLabel: "Free / $10 mo",
    rating: 4.7,
    isUserSubmitted: false,
    addedAt: "2026-11-02 11:30 AM",
    tagline: "All-in-one workspace for your notes, docs, wikis, and project management.",
    description: "Notion blends everyday work apps into one connected workspace where teams write, plan, collaborate, and organize knowledge bases.",
    features: ["Connected docs, wikis & databases", "Kanban, timeline & calendar views", "Integrated Notion AI writing assistant", "Community project templates"],
    bestFor: "Startups, product teams & students",
    website: "https://notion.so",
    reviews: []
  },
  {
    id: "figma",
    name: "Figma",
    developer: "Figma Inc.",
    letter: "F",
    logoUrl: "",
    color: "#F24E1E",
    category: "Design",
    pricing: "Free & Premium",
    priceLabel: "Free / $15 mo",
    rating: 4.8,
    isUserSubmitted: false,
    addedAt: "2026-11-03 09:15 AM",
    tagline: "Collaborative interface design and interactive prototyping made simple.",
    description: "Figma is a browser-based UI/UX design platform enabling real-time multiplayer wireframing, design systems, and developer handoff.",
    features: ["Real-time multiplayer canvas", "Auto-layout & reusable components", "Dev Mode for CSS/code inspection", "FigJam online whiteboarding"],
    bestFor: "UI/UX designers & frontend teams",
    website: "https://figma.com",
    reviews: []
  },
  {
    id: "canva",
    name: "Canva",
    developer: "Canva Pty Ltd",
    letter: "C",
    logoUrl: "",
    color: "#7C3AED",
    category: "Design",
    pricing: "Free & Premium",
    priceLabel: "Free / $12.99 mo",
    rating: 4.6,
    isUserSubmitted: false,
    addedAt: "2026-11-04 02:00 PM",
    tagline: "Create stunning social graphics, presentations, and videos with ease.",
    description: "Canva empowers creators and marketing teams to produce brand-consistent visuals using drag-and-drop templates and Magic Studio AI tools.",
    features: ["Ready-to-use social & deck templates", "Magic Resize & Background Remover", "Brand Kit fonts & color palettes", "Social media content planner"],
    bestFor: "Marketers, educators & small businesses",
    website: "https://canva.com",
    reviews: []
  },
  {
    id: "grammarly",
    name: "Grammarly",
    developer: "Grammarly Inc.",
    letter: "G",
    logoUrl: "",
    color: "#059669",
    category: "Productivity",
    pricing: "Free & Premium",
    priceLabel: "Free / $12 mo",
    rating: 4.7,
    isUserSubmitted: false,
    addedAt: "2026-11-05 04:20 PM",
    tagline: "AI writing partner for clear, mistake-free communication everywhere.",
    description: "Grammarly provides real-time grammar, tone, clarity, and generative writing assistance across browsers, emails, and desktop apps.",
    features: ["Real-time grammar & tone detection", "Full-sentence clarity rewrites", "Plagiarism & citation checker", "Works across Gmail, Docs & Slack"],
    bestFor: "Writers, professionals & students",
    website: "https://grammarly.com",
    reviews: []
  },
  {
    id: "claude",
    name: "Claude",
    developer: "Anthropic",
    letter: "C",
    logoUrl: "",
    color: "#D97706",
    category: "AI Tools",
    pricing: "Free & Premium",
    priceLabel: "Free / $20 mo",
    rating: 4.9,
    isUserSubmitted: false,
    addedAt: "2026-11-06 01:10 PM",
    tagline: "Next-generation AI assistant built for deep reasoning, coding, and long docs.",
    description: "Claude excels at nuanced writing, large context window document analysis, and clean full-stack code generation with Artifacts.",
    features: ["200K+ token context window", "Interactive Artifacts live preview", "Coding & refactoring workflows", "Enterprise-grade data privacy"],
    bestFor: "Software engineers, analysts & writers",
    website: "https://claude.ai",
    reviews: []
  },
  {
    id: "gemini",
    name: "Gemini",
    developer: "Google",
    letter: "✦",
    logoUrl: "",
    color: "#2563EB",
    category: "AI Tools",
    pricing: "Free & Premium",
    priceLabel: "Free / $19.99 mo",
    rating: 4.8,
    isUserSubmitted: false,
    addedAt: "2026-11-07 03:45 PM",
    tagline: "Multimodal AI deeply integrated with Google Workspace and real-time search.",
    description: "Gemini combines reasoning across text, code, audio, and video with seamless integration into Gmail, Docs, Drive, and Android.",
    features: ["Native Google Workspace integration", "1M+ token context window", "Real-time Google Search grounding", "Multimodal audio, video & code reasoning"],
    bestFor: "Google Workspace users & researchers",
    website: "https://gemini.google.com",
    reviews: []
  },
  {
    id: "cursor",
    name: "Cursor",
    developer: "Anysphere",
    letter: "⌘",
    logoUrl: "",
    color: "#0F172A",
    category: "Developer Tools",
    pricing: "Free & Premium",
    priceLabel: "Free / $20 mo",
    rating: 4.9,
    isUserSubmitted: false,
    addedAt: "2026-11-08 05:10 PM",
    tagline: "The AI-first code editor built to make developers extraordinarily productive.",
    description: "Cursor is a VS Code fork with native codebase indexing, multi-file AI edits, and predictive tab autocomplete.",
    features: ["Full repository semantic indexing", "Multi-file Composer agent", "Smart Tab autocomplete", "Supports VS Code extensions"],
    bestFor: "Full-stack & SaaS developers",
    website: "https://cursor.com",
    reviews: []
  },
  {
    id: "perplexity",
    name: "Perplexity",
    developer: "Perplexity AI",
    letter: "P",
    logoUrl: "",
    color: "#0284C7",
    category: "AI Tools",
    pricing: "Free & Premium",
    priceLabel: "Free / $20 mo",
    rating: 4.8,
    isUserSubmitted: false,
    addedAt: "2026-11-09 06:00 PM",
    tagline: "AI-powered answer engine with real-time web citations and deep research.",
    description: "Perplexity replaces traditional link-heavy search with direct, cited answers sourced live from academic papers, news, and the web.",
    features: ["Real-time cited web answers", "Pro Deep Research mode", "File & PDF upload analysis", "Switchable AI models"],
    bestFor: "Researchers, founders & students",
    website: "https://perplexity.ai",
    reviews: []
  },
  {
    id: "midjourney",
    name: "Midjourney",
    developer: "Midjourney Inc.",
    letter: "M",
    logoUrl: "",
    color: "#4F46E5",
    category: "Design",
    pricing: "Paid",
    priceLabel: "$10 / mo",
    rating: 4.8,
    isUserSubmitted: false,
    addedAt: "2026-11-10 07:30 PM",
    tagline: "Create photorealistic artwork, brand concepts, and stunning visuals via AI.",
    description: "Midjourney generates high-detail imagery with strong artistic lighting, texture fidelity, and stylistic control.",
    features: ["High-resolution image rendering", "Style & character consistency", "Web editor with inpainting", "Commercial usage rights"],
    bestFor: "Creative directors & digital artists",
    website: "https://midjourney.com",
    reviews: []
  }
];

const STORAGE_KEY_PRODUCTS = "techhub_real_products_v3";
const STORAGE_KEY_FAVS = "techhub_real_favs_v3";
const STORAGE_KEY_ADMIN_SESSION = "techhub_admin_session_v3";

let PRODUCTS = loadProducts();
let favoriteIds = loadFavorites();
let compareIds = PRODUCTS.slice(0, 3).map(p => p.id);
let selectedDetailId = PRODUCTS[0]?.id || "chatgpt";
let selectedDetailTab = "overview";
let uploadedLogoDataUrl = "";



function loadProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PRODUCTS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(item => {
          let pr = item.pricing;
          if ((pr === "Premium" || pr === "Freemium") && String(item.priceLabel || "").toLowerCase().includes("free")) {
            pr = "Free & Premium";
          }
          return { ...item, pricing: pr };
        });
      }
    }
  } catch (e) {}
  return [...DEFAULT_PRODUCTS];
}

function saveProducts() {
  try {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(PRODUCTS));
  } catch (e) {
    showToast("Browser storage full — active in current session.");
  }
}

function loadFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_FAVS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
}

function saveFavorites() {
  localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(favoriteIds));
}

function getAdminSession() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY_ADMIN_SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setAdminSession(email) {
  sessionStorage.setItem(STORAGE_KEY_ADMIN_SESSION, JSON.stringify({ email, verifiedAt: Date.now() }));
  updateAdminHeaderUI();
}

function clearAdminSession() {
  sessionStorage.removeItem(STORAGE_KEY_ADMIN_SESSION);
  updateAdminHeaderUI();
}

function getRealCategoryCounts() {
  const counts = {};
  PRODUCTS.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return Object.entries(counts).map(([name, count]) => ({
    name,
    count,
    meta: getCatMeta(name)
  }));
}

function renderLogoHTML(p, sizePx = 44, fontSize = "1.15rem") {
  if (p.logoUrl) {
    return `<div class="app-icon" style="width:${sizePx}px; height:${sizePx}px; background:#F8FAFC; border:1px solid #E2E8F0;">
      <img src="${escapeHTML(p.logoUrl)}" alt="${escapeHTML(p.name)}" onerror="this.parentElement.innerHTML='${escapeHTML(p.letter)}'; this.parentElement.style.background='${p.color}';" />
    </div>`;
  }
  return `<div class="app-icon" style="background:${p.color}; width:${sizePx}px; height:${sizePx}px; font-size:${fontSize};">${escapeHTML(p.letter)}</div>`;
}

function escapeHTML(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// INITIALIZE APP
document.addEventListener("DOMContentLoaded", () => {
  updateAdminHeaderUI();
  refreshAllViews();
  setupNavigation();
  setupSearchAndEvents();
  setupSubmissionModal();
  setupAdminAuthModal();
});

function refreshAllViews() {
  updateGlobalCounters();
  renderHomeSections();
  renderDirectoryFilters();
  renderDirectory();
  renderCompareMatrix();
  renderSavedToolsView();
  if (getAdminSession()) renderAdminPanel();
}

function updateGlobalCounters() {
  const realCats = getRealCategoryCounts();
  const visitorCount = PRODUCTS.filter(p => p.isUserSubmitted).length;

  document.getElementById("navTotalCount").textContent = PRODUCTS.length;
  document.getElementById("navFavCount").textContent = favoriteIds.length;
  document.getElementById("compareCountBadge").textContent = compareIds.length;
  document.getElementById("homeAllCount").textContent = PRODUCTS.length;

  const ovTools = document.getElementById("overviewTotalTools");
  const ovCats = document.getElementById("overviewTotalCats");
  const ovVis = document.getElementById("overviewVisitorCount");
  const ovGrid = document.getElementById("overviewCategoryBreakdownGrid");

  if (ovTools) ovTools.textContent = PRODUCTS.length;
  if (ovCats) ovCats.textContent = realCats.length;
  if (ovVis) ovVis.textContent = visitorCount;
  if (ovGrid) {
    ovGrid.innerHTML = realCats.map(cat => `
      <div class="pop-cat-card" onclick="filterDirectoryByCategory('${escapeHTML(cat.name)}')">
        <div class="cat-svg-box" style="background:${cat.meta.bg}; color:${cat.meta.color};">${cat.meta.svg}</div>
        <div>
          <strong>${escapeHTML(cat.name)}</strong>
          <small>${cat.count} listed ${cat.count === 1 ? "product" : "products"}</small>
        </div>
      </div>
    `).join("");
  }
}

function updateAdminHeaderUI() {
  const session = getAdminSession();
  const footerLink = document.getElementById("footerAdminLink");
  if (footerLink) {
    footerLink.textContent = session ? "Admin Panel (Active)" : "Admin Portal";
  }
}

// NAVIGATION ROUTER
function switchView(routeName) {
  // Guard Admin View
  if (routeName === "admin" && !getAdminSession()) {
    openAdminAuthModal();
    return;
  }

  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById(`view-${routeName}`);
  if (target) target.classList.add("active");

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.route === routeName);
  });

  document.getElementById("navLinks").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupNavigation() {
  document.querySelectorAll("[data-route]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const route = el.dataset.route;
      if (route === "detail") renderProductDetail(selectedDetailId);
      if (route === "compare") renderCompareMatrix();
      if (route === "dashboard") renderSavedToolsView();
      if (route === "admin") renderAdminPanel();
      switchView(route);
    });
  });

  document.getElementById("mobileMenuBtn").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });
}

// =========================================================================
// 2. ADMIN LOGIN WITH AUTHORIZED GMAIL + OTP VERIFICATION
// =========================================================================
function setupAdminAuthModal() {
  const openBtns = ["adminHeaderBtn", "footerAdminLink"];
  openBtns.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        if (getAdminSession()) {
          renderAdminPanel();
          switchView("admin");
        } else {
          openAdminAuthModal();
        }
      });
    }
  });

  document.getElementById("closeAdminModalBtn").addEventListener("click", closeAdminAuthModal);

  // Admin Email ID + Password Login
  document.getElementById("adminLoginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("adminEmailInput");
    const passInput = document.getElementById("adminPasswordInput");
    const errEmail = document.getElementById("err-admin-email");
    const errPass = document.getElementById("err-admin-password");

    errEmail.textContent = "";
    errPass.textContent = "";
    emailInput.classList.remove("invalid");
    passInput.classList.remove("invalid");

    const enteredEmail = emailInput.value.trim().toLowerCase();
    const enteredPass = passInput.value;

    const validEmail = ADMIN_CREDENTIALS.email.trim().toLowerCase();
    const validPass = ADMIN_CREDENTIALS.password;

    if (!enteredEmail || enteredEmail !== validEmail) {
      emailInput.classList.add("invalid");
      errEmail.textContent = "Invalid Admin Email ID.";
      return;
    }

    if (!enteredPass || enteredPass !== validPass) {
      passInput.classList.add("invalid");
      errPass.textContent = "Incorrect Admin Password.";
      return;
    }

    setAdminSession(validEmail);
    closeAdminAuthModal();
    renderAdminPanel();
    switchView("admin");
    showToast("✅ Admin Login Successful!");
  });

  // Admin Logout & Direct Add
  document.getElementById("adminLogoutBtn").addEventListener("click", () => {
    clearAdminSession();
    switchView("home");
    showToast("Logged out from Admin Panel.");
  });

  document.getElementById("adminAddToolBtn").addEventListener("click", openSubmitModal);

  const liveSearch = document.getElementById("adminLiveSearchInput");
  const liveCat = document.getElementById("adminLiveCategoryFilter");
  if (liveSearch) liveSearch.addEventListener("input", renderAdminLiveToolsTable);
  if (liveCat) liveCat.addEventListener("change", renderAdminLiveToolsTable);
}

function renderAdminLiveToolsTable() {
  const allWrap = document.getElementById("adminAllToolsTableWrap");
  const searchEl = document.getElementById("adminLiveSearchInput");
  const catEl = document.getElementById("adminLiveCategoryFilter");
  const countBadge = document.getElementById("adminLiveFilteredCount");

  const q = searchEl ? searchEl.value.trim().toLowerCase() : "";
  const selectedCat = catEl ? catEl.value : "ALL";

  const filteredLive = PRODUCTS.filter(p => {
    const matchCat = selectedCat === "ALL" || p.category === selectedCat;
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (countBadge) countBadge.textContent = filteredLive.length;

  if (!filteredLive.length) {
    allWrap.innerHTML = `<p class="muted" style="padding:14px 0;">Is category ya search filter mein koi live tool nahi mila.</p>`;
    return;
  }

  allWrap.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Tool / Product</th>
          <th>Category</th>
          <th>Listing Type</th>
          <th>Pricing</th>
          <th>Live Website</th>
          <th>Admin Control</th>
        </tr>
      </thead>
      <tbody>
        ${filteredLive.map(p => `
          <tr>
            <td>
              <div style="display:flex; align-items:center; gap:10px;">
                ${renderLogoHTML(p, 36, "0.95rem")}
                <div>
                  <strong>${escapeHTML(p.name)}</strong>
                  <div class="muted" style="font-size:0.75rem; max-width:240px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHTML(p.tagline)}</div>
                </div>
              </div>
            </td>
            <td><span class="tag-pill">${escapeHTML(p.category)}</span></td>
            <td>${p.isUserSubmitted ? `<span class="new-pill">Visitor Published</span>` : `<span class="badge-pill">Core Catalog</span>`}</td>
            <td><span class="price-badge">${escapeHTML(p.pricing)}</span><br><small class="muted">${escapeHTML(p.priceLabel)}</small></td>
            <td><a href="${escapeHTML(p.website)}" target="_blank" rel="noopener" class="text-btn">Visit ↗</a></td>
            <td>
              <div style="display:flex; gap:6px;">
                <button class="btn btn-outline btn-sm" onclick="openProductDetail('${p.id}')">Inspect</button>
                <button class="btn btn-danger btn-sm" onclick="confirmAdminDelete('${p.id}')">🗑️ Remove Tool</button>
              </div>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function confirmAdminDelete(productId) {
  const target = PRODUCTS.find(p => p.id === productId);
  if (!target) return;
  if (confirm(`Kya aap sach mein "${target.name}" (${target.category}) ko live website se remove karna chahte hain?`)) {
    adminDeleteProduct(productId);
  }
}


function openAdminAuthModal() {
  document.getElementById("adminLoginForm").reset();
  document.getElementById("err-admin-email").textContent = "";
  document.getElementById("err-admin-password").textContent = "";
  document.getElementById("adminEmailInput").classList.remove("invalid");
  document.getElementById("adminPasswordInput").classList.remove("invalid");
  document.getElementById("adminAuthModal").classList.remove("hidden");
}

function closeAdminAuthModal() {
  document.getElementById("adminAuthModal").classList.add("hidden");
}

// =========================================================================
// 3. RENDER ADMIN PANEL (VISITOR SUBMISSIONS ANALYTICS & FULL DETAILS)
// =========================================================================
function renderAdminPanel() {
  const session = getAdminSession();
  if (!session) return;

  document.getElementById("loggedInAdminEmail").textContent = session.email;

  const visitorTools = PRODUCTS.filter(p => p.isUserSubmitted);
  const realCats = getRealCategoryCounts();

  document.getElementById("adminTotalVisitorsCount").textContent = visitorTools.length;
  document.getElementById("adminTotalCatalogCount").textContent = PRODUCTS.length;
  document.getElementById("adminCategoryCount").textContent = realCats.length;

  // Visitor Published Tools Table
  const visitorWrap = document.getElementById("adminVisitorTableWrap");
  if (!visitorTools.length) {
    visitorWrap.innerHTML = `<p class="muted" style="padding:12px 0;">Abhi tak kisi visitor ne koi naya tool publish nahi kiya hai. Jab koi visitor "+ Submit Your Tool" se publish karega, uski poori details yahan dikhengi.</p>`;
  } else {
    visitorWrap.innerHTML = `
      <table class="admin-table">
        <thead>
          <tr>
            <th>Logo & Name</th>
            <th>Category</th>
            <th>Pricing</th>
            <th>Website URL</th>
            <th>Work Description & Features</th>
            <th>Published Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${visitorTools.map(p => `
            <tr>
              <td>
                <div style="display:flex; align-items:center; gap:10px;">
                  ${renderLogoHTML(p, 38, "1rem")}
                  <div>
                    <strong>${escapeHTML(p.name)}</strong>
                    <div class="muted" style="font-size:0.75rem;">Best for: ${escapeHTML(p.bestFor)}</div>
                  </div>
                </div>
              </td>
              <td><span class="tag-pill">${escapeHTML(p.category)}</span></td>
              <td><span class="price-badge">${escapeHTML(p.pricing)}</span><br><small class="muted">${escapeHTML(p.priceLabel)}</small></td>
              <td><a href="${escapeHTML(p.website)}" target="_blank" rel="noopener" class="text-btn">${escapeHTML(p.website)} ↗</a></td>
              <td style="max-width:300px;">
                <div style="font-weight:600; font-size:0.82rem;">${escapeHTML(p.tagline)}</div>
                <div class="muted" style="font-size:0.78rem; margin-top:3px;">${escapeHTML(p.description)}</div>
              </td>
              <td><small class="muted">${escapeHTML(p.addedAt)}</small></td>
              <td>
                <div style="display:flex; gap:6px;">
                  <button class="btn btn-outline btn-sm" onclick="openProductDetail('${p.id}')">View</button>
                  <button class="btn btn-danger btn-sm" onclick="adminDeleteProduct('${p.id}')">Delete</button>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  // Populate Category Filter Dropdown in All Live Tools Manager
  const catSelect = document.getElementById("adminLiveCategoryFilter");
  const currentCatVal = catSelect.value || "ALL";
  catSelect.innerHTML = `<option value="ALL">All Categories (${PRODUCTS.length})</option>` +
    realCats.map(c => `<option value="${escapeHTML(c.name)}" ${currentCatVal === c.name ? "selected" : ""}>${escapeHTML(c.name)} (${c.count})</option>`).join("");

  renderAdminLiveToolsTable();
}

function adminDeleteProduct(productId) {
  const target = PRODUCTS.find(p => p.id === productId);
  if (!target) return;
  PRODUCTS = PRODUCTS.filter(p => p.id !== productId);
  favoriteIds = favoriteIds.filter(id => id !== productId);
  compareIds = compareIds.filter(id => id !== productId);
  saveProducts();
  saveFavorites();
  refreshAllViews();
  showToast(`Removed "${target.name}" from directory.`);
}

// =========================================================================
// 4. HOME, DIRECTORY, DETAIL, COMPARE, AI FINDER & SAVED TOOLS
// =========================================================================
function renderHomeSections() {
  const realCats = getRealCategoryCounts();

  const strip = document.getElementById("quickCategoryStrip");
  strip.innerHTML = realCats.map(cat => `
    <button type="button" class="cat-dock-card" onclick="filterDirectoryByCategory('${escapeHTML(cat.name)}')">
      <span class="cat-dock-icon" style="background:${cat.meta.bg}; color:${cat.meta.color};">${cat.meta.svg}</span>
      <span class="cat-dock-info">
        <strong class="cat-dock-title">${escapeHTML(cat.name)}</strong>
        <span class="cat-dock-sub">${cat.count} ${cat.count === 1 ? "Tool" : "Tools"}</span>
      </span>
      <span class="cat-dock-arrow">›</span>
    </button>
  `).join("");

  const trendingGrid = document.getElementById("trendingProductsGrid");
  const featuredList = PRODUCTS.slice(0, 5);
  trendingGrid.innerHTML = featuredList.map(p => createProductCardHTML(p)).join("") + `
    <div class="community-card">
      <div class="community-icon">🚀</div>
      <h3>Add Your Website or Tool</h3>
      <p>Have a SaaS, AI app, or web tool? Upload your logo, add description & category, and list it live.</p>
      <button class="btn btn-primary" onclick="openSubmitModal()">+ Submit Your Product</button>
    </div>
  `;

  const popCatGrid = document.getElementById("popularCategoriesGrid");
  popCatGrid.innerHTML = realCats.map(cat => `
    <div class="pop-cat-card" onclick="filterDirectoryByCategory('${escapeHTML(cat.name)}')">
      <div class="cat-svg-box" style="background:${cat.meta.bg}; color:${cat.meta.color};">${cat.meta.svg}</div>
      <div>
        <strong>${escapeHTML(cat.name)}</strong>
        <small>${cat.count} listed ${cat.count === 1 ? "product" : "products"}</small>
      </div>
    </div>
  `).join("");

  const launchesList = document.getElementById("latestLaunchesList");
  const latestItems = PRODUCTS.slice(0, 4);
  launchesList.innerHTML = latestItems.map(p => `
    <div class="launch-item" onclick="openProductDetail('${p.id}')">
      <div class="launch-left">
        ${renderLogoHTML(p, 40, "1rem")}
        <div>
          <strong>${escapeHTML(p.name)}</strong>
          <p class="muted" style="font-size:0.8rem;">${escapeHTML(p.tagline)}</p>
        </div>
      </div>
      <div style="text-align:right; flex-shrink:0;">
        <span class="new-pill">Live</span>
        <div class="muted" style="font-size:0.74rem; margin-top:4px;">${escapeHTML(p.category)}</div>
      </div>
    </div>
  `).join("");
}

function createProductCardHTML(p) {
  const isFav = favoriteIds.includes(p.id);
  const reviewCount = p.reviews ? p.reviews.length : 0;
  return `
    <article class="product-card">
      <div>
        <div class="pc-top">
          ${renderLogoHTML(p, 44, "1.15rem")}
          <button class="icon-btn" style="width:30px;height:30px;" title="Save Tool" onclick="toggleFavorite('${p.id}')">
            ${isFav ? "❤️" : "🤍"}
          </button>
        </div>
        <h3 onclick="openProductDetail('${p.id}')">${escapeHTML(p.name)}</h3>
        <p class="pc-tagline">${escapeHTML(p.tagline)}</p>
        <div class="pc-meta">
          <span>★ ${p.rating} ${reviewCount > 0 ? `(${reviewCount} ${reviewCount === 1 ? "review" : "reviews"})` : ""}</span>
          <a href="${escapeHTML(p.website)}" target="_blank" rel="noopener" class="text-btn">Visit ↗</a>
        </div>
      </div>
      <div class="pc-footer">
        <span class="tag-pill">${escapeHTML(p.category)}</span>
        <span class="price-badge">${escapeHTML(p.pricing)}</span>
      </div>
    </article>
  `;
}

// CLEAN SAVED TOOLS VIEW (ONLY USER'S SAVED FAVORITES — NO VISITOR SUBMISSIONS SHOWN HERE)
function renderSavedToolsView() {
  const favProducts = PRODUCTS.filter(p => favoriteIds.includes(p.id));
  document.getElementById("kpiFavorites").textContent = favProducts.length;

  const grid = document.getElementById("dashboardFavoritesGrid");
  grid.innerHTML = favProducts.length
    ? favProducts.map(p => createProductCardHTML(p)).join("")
    : `<div class="card-box" style="grid-column:1/-1; text-align:center; padding:36px;">
        <h3>No Saved Tools Yet</h3>
        <p class="muted" style="margin:6px 0 14px;">Click the heart icon (🤍) on any product card to save tools here for quick access.</p>
        <button class="btn btn-primary" onclick="switchView('directory')">Browse All Products</button>
      </div>`;
}

function renderDirectoryFilters() {
  const realCats = getRealCategoryCounts();
  const catList = document.getElementById("categoryFilterList");
  const previouslyChecked = Array.from(document.querySelectorAll(".cat-filter:checked")).map(cb => cb.value);

  catList.innerHTML = realCats.map(c => `
    <label>
      <input type="checkbox" class="cat-filter" value="${escapeHTML(c.name)}" ${previouslyChecked.includes(c.name) ? "checked" : ""} />
      ${escapeHTML(c.name)} (${c.count})
    </label>
  `).join("");

  document.querySelectorAll(".cat-filter").forEach(cb => {
    cb.addEventListener("change", renderDirectory);
  });
}

function filterDirectoryByCategory(categoryName) {
  document.querySelectorAll(".cat-filter").forEach(cb => {
    cb.checked = (cb.value === categoryName);
  });
  renderDirectory();
  switchView("directory");
}

function renderDirectory() {
  const query = document.getElementById("dirSearchInput").value.trim().toLowerCase();
  const sortBy = document.getElementById("sortSelect").value;
  const selectedCats = Array.from(document.querySelectorAll(".cat-filter:checked")).map(cb => cb.value);
  const selectedPricing = Array.from(document.querySelectorAll(".pricing-filter:checked")).map(cb => cb.value);

  let filtered = PRODUCTS.filter(p => {
    const matchesQuery = !query ||
      p.name.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.website.toLowerCase().includes(query);
    const matchesCat = selectedCats.length === 0 || selectedCats.includes(p.category);
    const matchesPricing = selectedPricing.length === 0 || selectedPricing.some(sel => {
      if (sel === "Free") return p.pricing === "Free" || p.pricing === "Free & Premium";
      if (sel === "Premium") return p.pricing === "Premium" || p.pricing === "Free & Premium";
      return p.pricing === sel;
    });
    return matchesQuery && matchesCat && matchesPricing;
  });

  if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

  document.getElementById("directoryCountText").textContent = `Showing ${filtered.length} of ${PRODUCTS.length} listed products`;
  const grid = document.getElementById("directoryProductsGrid");
  grid.innerHTML = filtered.length
    ? filtered.map(p => createProductCardHTML(p)).join("")
    : `<div class="card-box" style="grid-column:1/-1;text-align:center;">No products match your filter criteria.</div>`;
}

function openProductDetail(productId) {
  selectedDetailId = productId;
  selectedDetailTab = "overview";
  renderProductDetail(productId);
  switchView("detail");
}

let activeReviewSlideIdx = 0;

function getComputedRatingInfo(p) {
  const reviews = p.reviews || [];
  if (reviews.length > 0) {
    const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0);
    const avg = (sum / reviews.length).toFixed(1);
    return {
      scoreText: `${avg}/5`,
      numericScore: avg,
      countLabel: `Based on ${reviews.length} user ${reviews.length === 1 ? "review" : "reviews"}`,
      hasUserReviews: true
    };
  }
  return {
    scoreText: `${p.rating}/5`,
    numericScore: p.rating,
    countLabel: "No user reviews yet — be the first!",
    hasUserReviews: false
  };
}

function renderProductDetail(productId) {
  const p = PRODUCTS.find(item => item.id === productId) || PRODUCTS[0];
  const container = document.getElementById("productDetailContainer");
  const isFav = favoriteIds.includes(p.id);
  const inCompare = compareIds.includes(p.id);
  const reviews = p.reviews || [];
  const ratingInfo = getComputedRatingInfo(p);
  const alts = PRODUCTS.filter(item => item.category === p.category && item.id !== p.id);
  const devName = p.developer || (p.isUserSubmitted ? "Community Publisher" : "Verified Vendor");
  const listedDate = p.addedAt || "Listed in Catalog";

  if (activeReviewSlideIdx >= reviews.length) activeReviewSlideIdx = 0;

  let tabContent = "";
  if (selectedDetailTab === "overview") {
    const currentReview = reviews[activeReviewSlideIdx];

    const userSayHTML = reviews.length > 0
      ? `
        <div class="usersay-body">
          <div class="usersay-score-col">
            <div class="usersay-big-num">${ratingInfo.numericScore}</div>
            <div class="usersay-stars">${"★".repeat(Math.round(Number(ratingInfo.numericScore)))}${"☆".repeat(5 - Math.round(Number(ratingInfo.numericScore)))}</div>
            <div class="muted" style="font-size:0.78rem; margin-top:4px;">${reviews.length} user ${reviews.length === 1 ? "review" : "reviews"}</div>
          </div>
          <div class="usersay-quote-card">
            <p class="usersay-quote-text">“${escapeHTML(currentReview.comment)}”</p>
            <div class="usersay-author-row">
              <div class="usersay-avatar">${escapeHTML(currentReview.user[0].toUpperCase())}</div>
              <div>
                <strong style="font-size:0.86rem; display:block;">${escapeHTML(currentReview.user)}</strong>
                <span style="font-size:0.74rem; color:#F59E0B; font-weight:700;">${"★".repeat(currentReview.rating)} Verified Review</span>
              </div>
              ${reviews.length > 1 ? `
                <div style="margin-left:auto; display:flex; gap:6px;">
                  <button type="button" class="icon-btn" style="width:28px;height:28px;" onclick="cycleReviewSlide(-1)" title="Previous Review">‹</button>
                  <button type="button" class="icon-btn" style="width:28px;height:28px;" onclick="cycleReviewSlide(1)" title="Next Review">›</button>
                </div>
              ` : ""}
            </div>
          </div>
        </div>
      `
      : `
        <div class="usersay-empty">
          <p class="muted" style="font-size:0.88rem;">Abhi tak <strong>${escapeHTML(p.name)}</strong> par kisi user ne review nahi diya hai.</p>
          <button type="button" class="btn btn-outline btn-sm mt-12" onclick="setDetailTab('reviews')">✍️ Write First Review</button>
        </div>
      `;

    const similarCardsHTML = alts.length > 0
      ? `
        <div class="similar-row-strip">
          ${alts.slice(0, 4).map(a => `
            <div class="similar-row-item" onclick="openProductDetail('${a.id}')" title="${escapeHTML(a.name)}">
              ${renderLogoHTML(a, 34, "0.92rem")}
              <div class="similar-row-text">
                <strong>${escapeHTML(a.name)}</strong>
                <small>${escapeHTML(a.pricing)}</small>
              </div>
              <span class="similar-row-go">›</span>
            </div>
          `).join("")}
        </div>
      `
      : `<p class="muted" style="font-size:0.84rem; padding:8px 0;">Is category mein abhi aur koi alternative tool list nahi hai.</p>`;

    tabContent = `
      <div class="showcase-main-grid">
        <!-- LEFT MAIN COLUMN -->
        <div class="showcase-left-col">
          <!-- ABOUT CARD -->
          <div class="showcase-panel">
            <div class="showcase-panel-head">
              <h3>✨ About ${escapeHTML(p.name)}</h3>
              <span class="tag-pill">${escapeHTML(p.bestFor)}</span>
            </div>
            <p class="showcase-desc">${escapeHTML(p.description)}</p>
            <div class="about-checklist">
              ${p.features.slice(0, 3).map(f => `
                <div class="about-check-row">
                  <span class="feature-check-badge">✓</span>
                  <span>${escapeHTML(f)}</span>
                </div>
              `).join("")}
            </div>
            <div style="margin-top:16px;">
              <a href="${escapeHTML(p.website)}" target="_blank" rel="noopener" class="btn btn-primary">Start Using ${escapeHTML(p.name)} →</a>
            </div>
          </div>

          <!-- KEY FEATURES CARD -->
          <div class="showcase-panel">
            <div class="showcase-panel-head">
              <h3>⚡ Key Features</h3>
              <span class="muted" style="font-size:0.8rem;">${p.features.length} Core Capabilities</span>
            </div>
            <div class="features-modern-grid">
              ${p.features.map(f => `
                <div class="feature-chip-card">
                  <span class="feature-check-badge">✓</span>
                  <span>${escapeHTML(f)}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- BOTTOM 2-COLUMN: WHAT USERS SAY + SIMILAR TOOLS / ALTERNATIVES -->
          <div class="showcase-bottom-split">
            <div class="showcase-panel">
              <div class="showcase-panel-head">
                <h3>⭐ What Users Say</h3>
                <button type="button" class="text-btn" onclick="setDetailTab('reviews')">View All (${reviews.length}) →</button>
              </div>
              ${userSayHTML}
            </div>

            <div class="showcase-panel">
              <div class="showcase-panel-head">
                <h3>🔄 Similar Tools / Alternatives</h3>
                <button type="button" class="text-btn" onclick="setDetailTab('alternatives')">View All (${alts.length}) →</button>
              </div>
              ${similarCardsHTML}
            </div>
          </div>
        </div>

        <!-- RIGHT SIDEBAR COLUMN -->
        <aside class="showcase-right-col">
          <!-- PRICING & PLAN -->
          <div class="showcase-panel side-pricing-card">
            <div class="showcase-panel-head">
              <h4>💎 Pricing & Plan</h4>
              <span class="price-badge">${escapeHTML(p.pricing)}</span>
            </div>
            <div class="side-price-big">${escapeHTML(p.priceLabel)}</div>
            <p class="muted" style="font-size:0.82rem; margin-top:4px;">Best suited for ${escapeHTML(p.bestFor)}.</p>
          </div>

          <!-- QUICK INFO -->
          <div class="showcase-panel side-quickinfo-card">
            <div class="showcase-panel-head">
              <h4>📌 Quick Info</h4>
            </div>
            <div class="quick-info-list">
              <div class="qi-row">
                <span class="qi-label">👤 Developer</span>
                <strong class="qi-val">${escapeHTML(devName)}</strong>
              </div>
              <div class="qi-row">
                <span class="qi-label">📂 Category</span>
                <strong class="qi-val">${escapeHTML(p.category)}</strong>
              </div>
              <div class="qi-row">
                <span class="qi-label">🔗 Website</span>
                <a href="${escapeHTML(p.website)}" target="_blank" rel="noopener" class="text-btn qi-val" style="text-align:right; word-break:break-all;">${escapeHTML(p.website.replace(/^https?:\/\//, ""))}</a>
              </div>
              <div class="qi-row">
                <span class="qi-label">📅 Listed</span>
                <strong class="qi-val">${escapeHTML(listedDate)}</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>
    `;
  } else if (selectedDetailTab === "reviews") {
    tabContent = `
      <div class="detail-overview-grid">
        <div>
          <h3>⭐ Real User Reviews (${reviews.length})</h3>
          <p class="muted" style="font-size:0.84rem;">Rating dynamically updates from actual user submissions.</p>
          <div style="display:flex; flex-direction:column; gap:12px; margin-top:14px;">
            ${reviews.length ? reviews.map(r => `
              <div class="review-card-accent">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong>${escapeHTML(r.user)}</strong>
                  <span style="color:#F59E0B; font-weight:700;">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>
                </div>
                <p class="muted" style="margin-top:6px;">${escapeHTML(r.comment)}</p>
              </div>
            `).join("") : `<div class="card-box"><p class="muted">No reviews written yet for ${escapeHTML(p.name)}. Add the first genuine review using the form!</p></div>`}
          </div>
        </div>

        <div class="card-box" style="background:#F8FAFC;">
          <h4>✍️ Write a Review</h4>
          <p class="muted" style="font-size:0.8rem; margin-bottom:10px;">Your rating and feedback will immediately update ${escapeHTML(p.name)}'s live score.</p>
          <form onsubmit="submitReview(event, '${p.id}')" class="vendor-form">
            <input type="text" id="revUser" class="input" placeholder="Your Name *" required />
            <select id="revRating" class="input">
              <option value="5">★★★★★ (5/5 — Excellent)</option>
              <option value="4">★★★★☆ (4/5 — Very Good)</option>
              <option value="3">★★★☆☆ (3/5 — Average)</option>
              <option value="2">★★☆☆☆ (2/5 — Fair)</option>
              <option value="1">★☆☆☆☆ (1/5 — Poor)</option>
            </select>
            <textarea id="revComment" class="input" rows="3" placeholder="Share your real experience with ${escapeHTML(p.name)}... *" required></textarea>
            <button type="submit" class="btn btn-primary" style="width:100%;">Post Review</button>
          </form>
        </div>
      </div>
    `;
  } else {
    tabContent = `
      <div>
        <h3>🔄 Similar Tools & Alternatives in ${escapeHTML(p.category)} (${alts.length})</h3>
        <div class="products-grid mt-12">
          ${alts.length ? alts.map(a => createProductCardHTML(a)).join("") : `<p class="muted">No other tools listed in this category yet.</p>`}
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <button class="btn btn-outline btn-sm" style="margin-bottom:16px;" onclick="switchView('directory')">← Back to Directory</button>
    <div class="detail-hero-shell">
      <div class="detail-gradient-banner">
        <div class="detail-banner-top">
          <div class="detail-title-group">
            <div class="detail-logo-ring">
              ${renderLogoHTML(p, 68, "1.7rem")}
            </div>
            <div class="detail-banner-title">
              <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                <h1>${escapeHTML(p.name)}</h1>
                <span class="badge-glass-cyan">${escapeHTML(p.category)}</span>
              </div>
              <p class="detail-banner-tagline">${escapeHTML(p.tagline)}</p>
              <div class="detail-badges-row">
                <span class="badge-glass-amber">★ ${ratingInfo.scoreText} (${reviews.length} ${reviews.length === 1 ? "Review" : "Reviews"})</span>
                <span class="badge-glass-emerald">${escapeHTML(p.priceLabel)}</span>
              </div>
            </div>
          </div>

          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn btn-banner-ghost" onclick="toggleFavorite('${p.id}')">${isFav ? "❤️ Saved" : "🤍 Save"}</button>
            <button class="btn btn-banner-ghost" onclick="toggleCompare('${p.id}')">${inCompare ? "✓ In Compare" : "+ Compare"}</button>
            <a href="${escapeHTML(p.website)}" target="_blank" rel="noopener" class="btn btn-cta-cyan">Visit Website ↗</a>
          </div>
        </div>
      </div>

      <div class="detail-body-pad">
        <div class="detail-tabs-modern">
          <button class="detail-tab-pill ${selectedDetailTab === 'overview' ? 'active' : ''}" onclick="setDetailTab('overview')">🏠 Overview</button>
          <button class="detail-tab-pill ${selectedDetailTab === 'reviews' ? 'active' : ''}" onclick="setDetailTab('reviews')">⭐ Reviews (${reviews.length})</button>
          <button class="detail-tab-pill ${selectedDetailTab === 'alternatives' ? 'active' : ''}" onclick="setDetailTab('alternatives')">🔄 Alternatives (${alts.length})</button>
        </div>

        ${tabContent}
      </div>
    </div>
  `;
}

function cycleReviewSlide(dir) {
  const p = PRODUCTS.find(item => item.id === selectedDetailId) || PRODUCTS[0];
  const len = (p.reviews || []).length;
  if (len <= 1) return;
  activeReviewSlideIdx = (activeReviewSlideIdx + dir + len) % len;
  renderProductDetail(selectedDetailId);
}

function setDetailTab(tab) {
  selectedDetailTab = tab;
  renderProductDetail(selectedDetailId);
}

function submitReview(e, productId) {
  e.preventDefault();
  const user = document.getElementById("revUser").value.trim();
  const ratingVal = parseInt(document.getElementById("revRating")?.value || "5", 10);
  const comment = document.getElementById("revComment").value.trim();
  const p = PRODUCTS.find(item => item.id === productId);
  if (p && user.length >= 2 && comment.length >= 5) {
    if (!p.reviews) p.reviews = [];
    p.reviews.unshift({ user, rating: Math.min(5, Math.max(1, ratingVal)), comment });
    const avg = (p.reviews.reduce((s, r) => s + r.rating, 0) / p.reviews.length).toFixed(1);
    p.rating = parseFloat(avg);
    activeReviewSlideIdx = 0;
    saveProducts();
    refreshAllViews();
    showToast("Review published!");
    renderProductDetail(productId);
  } else {
    showToast("Please enter your name and a valid comment.");
  }
}

function renderCompareMatrix() {
  const container = document.getElementById("compareMatrixContainer");
  const cols = [0, 1, 2].map(idx => PRODUCTS.find(p => p.id === compareIds[idx]) || PRODUCTS[idx]);

  const optionsHTML = (selectedId) => PRODUCTS.map(p =>
    `<option value="${p.id}" ${p.id === selectedId ? "selected" : ""}>${escapeHTML(p.name)}</option>`
  ).join("");

  container.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Compare Criteria</th>
          ${cols.map((p, idx) => `
            <th>
              <select class="input" onchange="changeCompareSlot(${idx}, this.value)" style="margin-bottom:12px;">
                ${optionsHTML(p.id)}
              </select>
              <div style="display:flex; align-items:center; gap:10px;">
                ${renderLogoHTML(p, 38, "1rem")}
                <div>
                  <div>${escapeHTML(p.name)}</div>
                  <small class="muted">${escapeHTML(p.category)}</small>
                </div>
              </div>
            </th>
          `).join("")}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rating</td>
          ${cols.map(p => `<td><strong style="color:#D97706;">★ ${p.rating}</strong></td>`).join("")}
        </tr>
        <tr>
          <td>Pricing</td>
          ${cols.map(p => `<td><span class="price-badge">${escapeHTML(p.pricing)}</span> &nbsp;${escapeHTML(p.priceLabel)}</td>`).join("")}
        </tr>
        <tr>
          <td>Best For</td>
          ${cols.map(p => `<td>${escapeHTML(p.bestFor)}</td>`).join("")}
        </tr>
        <tr>
          <td>Key Features</td>
          ${cols.map(p => `
            <td>
              <ul style="padding-left:16px; font-size:0.85rem;">
                ${p.features.map(f => `<li style="margin-bottom:4px;">${escapeHTML(f)}</li>`).join("")}
              </ul>
            </td>
          `).join("")}
        </tr>
        <tr>
          <td>Official Link</td>
          ${cols.map(p => `<td><a href="${escapeHTML(p.website)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Open Site ↗</a></td>`).join("")}
        </tr>
      </tbody>
    </table>
  `;
}

function changeCompareSlot(slotIndex, newProductId) {
  compareIds[slotIndex] = newProductId;
  renderCompareMatrix();
}

function setupSearchAndEvents() {
  const heroInput = document.getElementById("heroSearchInput");
  const dropdown = document.getElementById("heroSearchDropdown");

  heroInput.addEventListener("input", () => {
    const q = heroInput.value.trim().toLowerCase();
    if (!q) {
      dropdown.classList.add("hidden");
      return;
    }
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q)
    ).slice(0, 6);

    dropdown.innerHTML = matches.length
      ? matches.map(m => `
          <div class="search-dd-item" onclick="openProductDetail('${m.id}')">
            <div><strong>${escapeHTML(m.name)}</strong> <small class="muted">• ${escapeHTML(m.category)}</small></div>
            <span class="price-badge">${escapeHTML(m.pricing)}</span>
          </div>
        `).join("")
      : `<div class="search-dd-item"><span class="muted">No matching listed tool found.</span></div>`;
    dropdown.classList.remove("hidden");
  });

  document.getElementById("heroSearchBtn").addEventListener("click", () => {
    document.getElementById("dirSearchInput").value = heroInput.value;
    renderDirectory();
    switchView("directory");
  });

  document.querySelectorAll(".search-tag").forEach(btn => {
    btn.addEventListener("click", () => filterDirectoryByCategory(btn.dataset.search));
  });

  document.getElementById("quickSearchBtn").addEventListener("click", () => {
    switchView("directory");
    document.getElementById("dirSearchInput").focus();
  });

  document.getElementById("dirSearchInput").addEventListener("input", renderDirectory);
  document.getElementById("sortSelect").addEventListener("change", renderDirectory);
  document.querySelectorAll(".pricing-filter").forEach(cb => cb.addEventListener("change", renderDirectory));

  document.getElementById("resetFiltersBtn").addEventListener("click", () => {
    document.getElementById("dirSearchInput").value = "";
    document.querySelectorAll(".cat-filter, .pricing-filter").forEach(cb => cb.checked = false);
    renderDirectory();
  });

  document.querySelectorAll(".preset-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.getElementById("adviserPromptInput").value = chip.dataset.prompt;
    });
  });

  document.getElementById("adviserForm").addEventListener("submit", (e) => {
    e.preventDefault();
    runAiAdviser(document.getElementById("adviserPromptInput").value);
  });
}

function runAiAdviser(promptText) {
  const words = promptText.toLowerCase().split(/\W+/).filter(w => w.length > 2);
  const scored = PRODUCTS.map(p => {
    const hay = `${p.name} ${p.category} ${p.tagline} ${p.description} ${p.bestFor}`.toLowerCase();
    let matches = 0;
    words.forEach(w => { if (hay.includes(w)) matches++; });
    return { product: p, matches };
  })
  .filter(item => item.matches > 0)
  .sort((a, b) => b.matches - a.matches)
  .slice(0, 3);

  const resultsEl = document.getElementById("adviserResultsContainer");
  if (!scored.length) {
    resultsEl.innerHTML = `<div class="card-box" style="text-align:center;">No exact match found in the current ${PRODUCTS.length} listed tools.</div>`;
    return;
  }

  resultsEl.innerHTML = `
    <div class="section-header">
      <h2>🎯 Matching Tools Found (${scored.length})</h2>
    </div>
    <div class="products-grid">
      ${scored.map(({ product: p }) => createProductCardHTML(p)).join("")}
    </div>
  `;
}

// =========================================================================
// 5. VISITOR PRODUCT SUBMISSION MODAL & VALIDATION
// =========================================================================
function openSubmitModal() {
  clearFormErrors();
  document.getElementById("submitModal").classList.remove("hidden");
}

function closeSubmitModal() {
  document.getElementById("submitModal").classList.add("hidden");
}

function setupSubmissionModal() {
  ["openSubmitModalBtn", "heroSubmitCtaBtn", "inlineSubmitTrigger", "dirSubmitBtn", "footerSubmitLink"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("click", (e) => {
      e.preventDefault();
      openSubmitModal();
    });
  });

  document.getElementById("closeSubmitModalBtn").addEventListener("click", closeSubmitModal);
  document.getElementById("cancelSubmitModalBtn").addEventListener("click", closeSubmitModal);

  const nameInput = document.getElementById("pName");
  const logoPreviewBox = document.getElementById("logoPreviewBox");
  const logoPreviewImg = document.getElementById("logoPreviewImg");
  const logoFileInput = document.getElementById("pLogoFile");
  const logoUrlInput = document.getElementById("pLogoUrl");

  nameInput.addEventListener("input", () => {
    const val = nameInput.value.trim();
    logoPreviewBox.textContent = val ? val[0].toUpperCase() : "W";
  });

  logoFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    document.getElementById("err-logo").textContent = "";
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      document.getElementById("err-logo").textContent = "Only valid image files (PNG, JPG, WebP, SVG) are allowed.";
      logoFileInput.value = "";
      return;
    }
    if (file.size > 1024 * 1024) {
      document.getElementById("err-logo").textContent = "Logo image must be under 1MB.";
      logoFileInput.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      uploadedLogoDataUrl = reader.result;
      logoUrlInput.value = "";
      logoPreviewImg.src = uploadedLogoDataUrl;
      logoPreviewImg.classList.remove("hidden");
      logoPreviewBox.classList.add("hidden");
    };
    reader.readAsDataURL(file);
  });

  logoUrlInput.addEventListener("input", () => {
    const url = logoUrlInput.value.trim();
    document.getElementById("err-logo").textContent = "";
    if (url) {
      uploadedLogoDataUrl = "";
      logoFileInput.value = "";
      logoPreviewImg.src = url;
      logoPreviewImg.classList.remove("hidden");
      logoPreviewBox.classList.add("hidden");
    } else {
      logoPreviewImg.classList.add("hidden");
      logoPreviewBox.classList.remove("hidden");
    }
  });

  document.getElementById("visitorProductForm").addEventListener("submit", handleVisitorProductSubmit);
}

function clearFormErrors() {
  document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
  document.querySelectorAll("#visitorProductForm .input").forEach(el => el.classList.remove("invalid"));
}

function setFieldError(inputId, errorId, message) {
  const inputEl = document.getElementById(inputId);
  const errEl = document.getElementById(errorId);
  if (inputEl) inputEl.classList.add("invalid");
  if (errEl) errEl.textContent = message;
}

function isValidHttpUrl(str) {
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_) {
    return false;
  }
}

function handleVisitorProductSubmit(e) {
  e.preventDefault();
  clearFormErrors();

  const name = document.getElementById("pName").value.trim();
  const website = document.getElementById("pWebsite").value.trim();
  const category = document.getElementById("pCategory").value.trim();
  const pricing = document.getElementById("pPricing").value.trim();
  const priceLabel = document.getElementById("pPriceLabel").value.trim();
  const developer = (document.getElementById("pDeveloper")?.value || "").trim() || "Community Creator";
  const bestFor = document.getElementById("pBestFor").value.trim();
  const tagline = document.getElementById("pTagline").value.trim();
  const description = document.getElementById("pDescription").value.trim();
  const featuresRaw = document.getElementById("pFeatures").value.trim();
  const logoUrlInput = document.getElementById("pLogoUrl").value.trim();

  let isValid = true;

  if (name.length < 2) {
    setFieldError("pName", "err-name", "Product name must be at least 2 characters.");
    isValid = false;
  } else if (PRODUCTS.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    setFieldError("pName", "err-name", "A product with this name is already listed.");
    isValid = false;
  }

  if (!website || !isValidHttpUrl(website)) {
    setFieldError("pWebsite", "err-website", "Enter a valid URL starting with https:// or http://");
    isValid = false;
  }

  if (logoUrlInput && !isValidHttpUrl(logoUrlInput)) {
    setFieldError("pLogoUrl", "err-logo", "Logo URL must be a valid https:// image link.");
    isValid = false;
  }

  if (!category) {
    setFieldError("pCategory", "err-category", "Please select a work category.");
    isValid = false;
  }

  if (priceLabel.length < 2) {
    setFieldError("pPriceLabel", "err-priceLabel", "Please specify price info (e.g., Free or $10/mo).");
    isValid = false;
  }
  if (bestFor.length < 3) {
    setFieldError("pBestFor", "err-bestFor", "Specify who this tool is best for.");
    isValid = false;
  }

  if (tagline.length < 15) {
    setFieldError("pTagline", "err-tagline", "Tagline must be at least 15 characters long.");
    isValid = false;
  }

  if (description.length < 30) {
    setFieldError("pDescription", "err-description", "Please write at least 30 characters describing how it works.");
    isValid = false;
  }

  const featuresList = featuresRaw.split(",").map(f => f.trim()).filter(Boolean);
  if (featuresList.length < 2) {
    setFieldError("pFeatures", "err-features", "Enter at least 2 features separated by commas.");
    isValid = false;
  }

  if (!isValid) {
    showToast("Please fix the highlighted fields before publishing.");
    return;
  }

  const finalLogo = uploadedLogoDataUrl || logoUrlInput || "";
  const colors = ["#2563EB", "#0284C7", "#059669", "#7C3AED", "#D97706", "#0F172A"];
  const pickedColor = colors[PRODUCTS.length % colors.length];
  const nowStr = new Date().toLocaleString([], { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });

  const newProduct = {
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + "-" + Date.now(),
    name,
    developer,
    letter: name[0].toUpperCase(),
    logoUrl: finalLogo,
    color: pickedColor,
    category,
    pricing,
    priceLabel,
    rating: 5.0,
    isUserSubmitted: true,
    addedAt: nowStr,
    tagline,
    description,
    features: featuresList,
    bestFor,
    website,
    reviews: []
  };

  PRODUCTS.unshift(newProduct);
  saveProducts();

  e.target.reset();
  uploadedLogoDataUrl = "";
  document.getElementById("logoPreviewImg").classList.add("hidden");
  document.getElementById("logoPreviewBox").classList.remove("hidden");
  document.getElementById("logoPreviewBox").textContent = "W";

  closeSubmitModal();
  refreshAllViews();
  showToast(`🎉 "${name}" is now live in the directory!`);
  openProductDetail(newProduct.id);
}

function toggleFavorite(id) {
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter(item => item !== id);
    showToast("Removed from saved tools");
  } else {
    favoriteIds.push(id);
    showToast("Saved to favorites ❤️");
  }
  saveFavorites();
  refreshAllViews();
}

function toggleCompare(id) {
  if (compareIds.includes(id)) {
    showToast("Already selected in Compare");
  } else {
    compareIds = [id, ...compareIds.slice(0, 2)];
    showToast("Added to Compare table");
  }
  updateGlobalCounters();
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}
