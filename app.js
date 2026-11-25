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
const STORAGE_KEY_ACTIVE_ROUTE = "techhub_active_route_v1";
const STORAGE_KEY_ACTIVE_DETAIL = "techhub_active_detail_v1";

let PRODUCTS = loadProducts();
let favoriteIds = loadFavorites();
let compareIds = PRODUCTS.slice(0, 3).map(p => p.id);
let selectedDetailId = loadPersistedDetailId();
let selectedDetailTab = "overview";
let uploadedLogoDataUrl = "";
let uploadedGalleryImages = [];
let lightboxImagesList = [];
let lightboxCurrentIdx = 0;



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
  pushProductsToCloud();
}

// =========================================================================
// SHARED CLOUD CATALOG SYNC VIA FIREBASE REALTIME DATABASE (ALL VISITORS)
// =========================================================================
// Apna Firebase Realtime Database URL yahan daalein (trailing slash ke bina):
// Example: const FIREBASE_DB_URL = "https://techhub-12345-default-rtdb.firebaseio.com";
const FIREBASE_DB_URL = "https://online-tool-provide-default-rtdb.firebaseio.com";

function getFirebaseProductsEndpoint() {
  const base = (FIREBASE_DB_URL || "").trim().replace(/\/+$/, "");
  if (!base) return "";
  return `${base}/products.json`;
}

function getFirebasePayloadProducts() {
  return PRODUCTS.map(p => {
    const copy = { ...p };
    if (copy.logoUrl && copy.logoUrl.startsWith("data:") && copy.logoUrl.length > 80000) {
      copy.logoUrl = "";
    }
    if (Array.isArray(copy.images)) {
      copy.images = copy.images.filter(img => !img.startsWith("data:") || img.length <= 80000).slice(0, 2);
    }
    return copy;
  });
}

function getFirebaseSubmissionsEndpoint() {
  const base = (FIREBASE_DB_URL || "").trim().replace(/\/+$/, "");
  if (!base) return "";
  return `${base}/submissions.json`;
}

function sanitizeSingleProductForCloud(p) {
  const copy = { ...p };
  if (copy.logoUrl && copy.logoUrl.startsWith("data:") && copy.logoUrl.length > 80000) {
    copy.logoUrl = "";
  }
  if (Array.isArray(copy.images)) {
    copy.images = copy.images.filter(img => !img.startsWith("data:") || img.length <= 80000).slice(0, 2);
  }
  return copy;
}

const STORAGE_KEY_DELETED_IDS = "techhub_deleted_ids_v1";

function getDeletedProductIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DELETED_IDS);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch (e) {
    return new Set();
  }
}

function addDeletedProductId(productId) {
  if (!productId) return;
  const set = getDeletedProductIds();
  set.add(productId);
  try {
    localStorage.setItem(STORAGE_KEY_DELETED_IDS, JSON.stringify([...set]));
  } catch (e) {}
}

async function syncProductsFromCloud() {
  const subEndpoint = getFirebaseSubmissionsEndpoint();
  if (!subEndpoint) return;
  try {
    const res = await fetch(subEndpoint, { cache: "no-store" });
    if (!res.ok) return;
    const rawSubs = await res.json();
    if (!rawSubs || typeof rawSubs !== "object") return;

    const deletedSet = getDeletedProductIds();
    const cloudTools = Object.values(rawSubs).filter(
      item => item && typeof item === "object" && item.name && item.id && !deletedSet.has(item.id)
    );
    if (!cloudTools.length) return;

    const existingIds = new Set(PRODUCTS.map(p => p.id));
    const merged = [...PRODUCTS];
    cloudTools.forEach(tool => {
      if (!existingIds.has(tool.id)) {
        merged.unshift(tool);
        existingIds.add(tool.id);
      }
    });

    PRODUCTS = merged;
    try {
      localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(PRODUCTS));
    } catch (e) {}
    refreshAllViews();
    const r = getInitialRoute();
    if (r === "detail") renderProductDetail(selectedDetailId);
  } catch (err) {}
}

async function pushNewToolToCloud(newProduct) {
  const subEndpoint = getFirebaseSubmissionsEndpoint();
  if (!subEndpoint || !newProduct) return;
  try {
    await fetch(subEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sanitizeSingleProductForCloud(newProduct))
    });
  } catch (err) {}
}

async function deleteToolFromCloud(productId, productName = "") {
  const base = (FIREBASE_DB_URL || "").trim().replace(/\/+$/, "");
  if (!base || !productId) return false;
  try {
    const subEndpoint = `${base}/submissions.json`;
    const res = await fetch(subEndpoint, { cache: "no-store" });
    if (!res.ok) return false;
    const rawSubs = await res.json();
    if (!rawSubs || typeof rawSubs !== "object") return true;

    const matchingKeys = Object.entries(rawSubs)
      .filter(([, item]) => item && typeof item === "object" && (
        item.id === productId || (productName && item.name === productName)
      ))
      .map(([key]) => key);

    for (const key of matchingKeys) {
      await fetch(`${base}/submissions/${encodeURIComponent(key)}.json`, {
        method: "DELETE"
      });
    }
    return true;
  } catch (err) {
    return false;
  }
}

async function pushProductsToCloud() {
  // Keep catalog push safe/no-op for bulk overwrite; new tools use pushNewToolToCloud()
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

function loadPersistedDetailId() {
  try {
    const hash = window.location.hash || "";
    const m = hash.match(/^#tool\/(.+)$/);
    if (m && m[1]) {
      const found = PRODUCTS.find(p => p.id === decodeURIComponent(m[1]));
      if (found) return found.id;
    }
    const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_DETAIL);
    if (saved && PRODUCTS.some(p => p.id === saved)) return saved;
  } catch (e) {}
  return PRODUCTS[0]?.id || "chatgpt";
}

function getInitialRoute() {
  const validRoutes = ["home", "submit", "overview", "directory", "detail", "compare", "adviser", "dashboard", "blog", "admin"];
  try {
    const hash = (window.location.hash || "").replace(/^#/, "").trim();
    if (!hash) {
      return "home";
    }
    if (hash.startsWith("tool/")) {
      const toolId = decodeURIComponent(hash.slice(5));
      if (PRODUCTS.some(p => p.id === toolId)) {
        selectedDetailId = toolId;
        return "detail";
      }
    }
    if (validRoutes.includes(hash)) {
      if (hash === "admin" && !getAdminSession()) return "home";
      return hash;
    }
  } catch (e) {}
  return "home";
}

// INITIALIZE APP
document.addEventListener("DOMContentLoaded", () => {
  updateAdminHeaderUI();
  refreshAllViews();
  syncProductsFromCloud();
  setupNavigation();
  setupSearchAndEvents();
  setupSubmissionModal();
  setupAdminAuthModal();
  setupFourStepSubmitEvents();
  setupBlogEvents();
  renderBlogView();

  const initialRoute = getInitialRoute();
  if (initialRoute === "submit") {
    initFourStepSubmitView(false);
  } else if (initialRoute === "detail") {
    renderProductDetail(selectedDetailId);
  } else if (initialRoute === "compare") {
    renderCompareMatrix();
  } else if (initialRoute === "dashboard") {
    renderSavedToolsView();
  } else if (initialRoute === "blog") {
    renderBlogView();
  } else if (initialRoute === "admin" && getAdminSession()) {
    renderAdminPanel();
  }
  switchView(initialRoute, { scroll: false, syncHash: true });

  window.addEventListener("hashchange", () => {
    const r = getInitialRoute();
    if (r === "submit") initFourStepSubmitView(false);
    if (r === "detail") renderProductDetail(selectedDetailId);
    if (r === "compare") renderCompareMatrix();
    if (r === "dashboard") renderSavedToolsView();
    if (r === "blog") renderBlogView();
    if (r === "admin" && getAdminSession()) renderAdminPanel();
    switchView(r, { scroll: false, syncHash: false });
  });
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
function switchView(routeName, opts = {}) {
  const { scroll = true, syncHash = true } = opts;
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

  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE_ROUTE, routeName);
    if (syncHash) {
      const nextHash = routeName === "detail"
        ? `#tool/${encodeURIComponent(selectedDetailId)}`
        : `#${routeName}`;
      if (window.location.hash !== nextHash) {
        history.replaceState(null, "", nextHash);
      }
    }
  } catch (e) {}

  document.getElementById("navLinks").classList.remove("open");
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupNavigation() {
  document.querySelectorAll("[data-route]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const route = el.dataset.route;
      if (route === "detail") renderProductDetail(selectedDetailId);
      if (route === "compare") renderCompareMatrix();
      if (route === "dashboard") renderSavedToolsView();
      if (route === "blog") renderBlogView();
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

async function adminDeleteProduct(productId) {
  const target = PRODUCTS.find(p => p.id === productId);
  if (!target) return;
  addDeletedProductId(productId);
  PRODUCTS = PRODUCTS.filter(p => p.id !== productId);
  favoriteIds = favoriteIds.filter(id => id !== productId);
  compareIds = compareIds.filter(id => id !== productId);
  try {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(PRODUCTS));
  } catch (e) {}
  saveFavorites();
  refreshAllViews();

  const deletedCloud = await deleteToolFromCloud(productId, target.name);
  if (deletedCloud) {
    showToast(`🗑️ "${target.name}" removed from site & Firebase!`);
  } else {
    showToast(`Removed "${target.name}" locally (check Firebase Rules for delete).`);
  }
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
  try {
    localStorage.setItem(STORAGE_KEY_ACTIVE_DETAIL, productId);
  } catch (e) {}
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

          <!-- IMAGES ABOUT TOOL (UP TO 5 VISITOR IMAGES, CLICK TO VIEW FULL) -->
          <div class="showcase-panel" id="toolImagesAboutSection">
            <div class="showcase-panel-head">
              <h3>🖼️ Images About ${escapeHTML(p.name)}</h3>
              <span class="muted" style="font-size:0.8rem;">${(p.images && p.images.length) ? `${p.images.length} / 5 Images • Click to expand` : "0 / 5 Images"}</span>
            </div>
            ${(p.images && p.images.length) ? `
              <div class="tool-gallery-strip">
                ${p.images.slice(0, 5).map((imgSrc, idx) => `
                  <button type="button" class="tool-gallery-thumb-btn" onclick="openToolGalleryLightbox('${p.id}', ${idx})" title="Click to view full size">
                    <img src="${escapeHTML(imgSrc)}" alt="${escapeHTML(p.name)} preview ${idx + 1}" />
                    <span class="tool-gallery-zoom-tag">🔍 View</span>
                  </button>
                `).join("")}
              </div>
            ` : `
              <div class="tool-gallery-empty">
                <p class="muted" style="font-size:0.85rem;">Is tool ke liye abhi koi preview image add nahi hui hai. Creator profile banate waqt up to <strong>5 images</strong> add kar sakte hain.</p>
              </div>
            `}
          </div>
        </div>

        <!-- RIGHT SIDEBAR COLUMN -->
        <aside class="showcase-right-col">
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

          <!-- PRICING & PLAN -->
          <div class="showcase-panel side-pricing-card">
            <div class="showcase-panel-head">
              <h4>💎 Pricing & Plan</h4>
              <span class="price-badge">${escapeHTML(p.pricing)}</span>
            </div>
            <div class="side-price-big">${escapeHTML(p.priceLabel)}</div>
            ${(p.pricingPlans && p.pricingPlans.length) ? `
              <div class="detail-plans-list mt-12">
                ${p.pricingPlans.map(pl => `
                  <div class="detail-plan-item">
                    <div>
                      <strong>${escapeHTML(pl.planName)}</strong>
                      <small class="muted" style="display:block; font-size:0.72rem;">${escapeHTML(pl.cycle)}</small>
                    </div>
                    <span class="price-badge">${escapeHTML(pl.price)}</span>
                  </div>
                `).join("")}
              </div>
            ` : ""}
            <p class="muted" style="font-size:0.82rem; margin-top:8px;">Best suited for ${escapeHTML(p.bestFor)}.</p>
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
// 5. 4-STEP VISITOR TOOL SUBMISSION WORKFLOW
// =========================================================================
let currentSubmitStep = 1;
let submitSelectedType = "SaaS";
let submitFeaturesList = ["AI-Powered", "Easy to Use", "Fast Performance"];
let submitPricingPlans = [
  { planName: "Free Plan", currency: "$", price: "0", cycle: "Free" }
];

function openSubmitModal() {
  initFourStepSubmitView(true);
  switchView("submit");
}

function initFourStepSubmitView(resetStep = false) {
  if (resetStep) currentSubmitStep = 1;
  renderSubmitStepUI();
  renderSubmitFeaturesChips();
  renderSubmitPricingPlans();
  syncStep3And4Previews();
}

function sanitizeNumericPrice(raw) {
  const cleaned = String(raw || "").replace(/[^0-9.]/g, "");
  const parts = cleaned.split(".");
  if (parts.length <= 1) return cleaned;
  return parts[0] + "." + parts.slice(1).join("");
}

function formatPlanDisplayPrice(pl) {
  const numStr = sanitizeNumericPrice(pl.price);
  const cur = pl.currency || "$";
  if (!numStr || Number(numStr) === 0) return `Free (${cur}0)`;
  return `${cur}${numStr}`;
}

function renderSubmitPricingPlans() {
  const listEl = document.getElementById("s2PricingPlansList");
  const badgeEl = document.getElementById("s2PlansCountBadge");
  const addBtn = document.getElementById("s2AddPlanBtn");
  if (badgeEl) badgeEl.textContent = `${submitPricingPlans.length} / 6 Plans`;
  if (addBtn) {
    addBtn.disabled = submitPricingPlans.length >= 6;
    addBtn.textContent = submitPricingPlans.length >= 6 ? "Max 6 Plans Reached" : "+ Add Another Plan";
  }
  if (!listEl) return;

  listEl.innerHTML = submitPricingPlans.map((pl, idx) => `
    <div class="pricing-plan-row-card">
      <div class="plan-row-num">${idx + 1}</div>
      <input
        type="text"
        class="input"
        placeholder="Plan Name (e.g. Free Plan, Pro Monthly, Yearly)"
        value="${escapeHTML(pl.planName)}"
        oninput="updateSubmitPlanField(${idx}, 'planName', this.value)"
      />
      <div class="numeric-price-group">
        <select class="input currency-mini-select" onchange="updateSubmitPlanField(${idx}, 'currency', this.value)" title="Currency">
          <option value="$" ${(pl.currency || "$") === "$" ? "selected" : ""}>$</option>
          <option value="₹" ${pl.currency === "₹" ? "selected" : ""}>₹</option>
          <option value="€" ${pl.currency === "€" ? "selected" : ""}>€</option>
        </select>
        <input
          type="text"
          inputmode="decimal"
          class="input"
          placeholder="0"
          value="${escapeHTML(sanitizeNumericPrice(pl.price))}"
          oninput="handleNumericPlanPriceInput(${idx}, this)"
        />
      </div>
      <select class="input" onchange="updateSubmitPlanField(${idx}, 'cycle', this.value)">
        <option value="Free" ${pl.cycle === "Free" ? "selected" : ""}>Free</option>
        <option value="Monthly" ${pl.cycle === "Monthly" ? "selected" : ""}>Monthly</option>
        <option value="Yearly" ${pl.cycle === "Yearly" ? "selected" : ""}>Yearly</option>
        <option value="One-time" ${pl.cycle === "One-time" ? "selected" : ""}>One-time</option>
      </select>
      ${submitPricingPlans.length > 1
        ? `<button type="button" class="icon-btn" style="width:34px;height:34px;color:#EF4444;" onclick="removeSubmitPricingPlan(${idx})" title="Remove Plan">✕</button>`
        : `<span style="width:34px;"></span>`}
    </div>
  `).join("");
}

function handleNumericPlanPriceInput(idx, inputEl) {
  const raw = inputEl.value;
  const numericOnly = sanitizeNumericPrice(raw);
  const errEl = document.getElementById("err-s2-plans");
  if (raw !== numericOnly) {
    inputEl.value = numericOnly;
    if (errEl) errEl.textContent = "Price field mein sirf numbers (0-9) allowed hain.";
  } else if (errEl) {
    errEl.textContent = "";
  }
  updateSubmitPlanField(idx, "price", numericOnly);
}

function addSubmitPricingPlan() {
  const errEl = document.getElementById("err-s2-plans");
  if (errEl) errEl.textContent = "";
  if (submitPricingPlans.length >= 6) {
    if (errEl) errEl.textContent = "Maximum 6 pricing plans allowed.";
    showToast("Maximum 6 pricing plans add kar sakte hain.");
    return;
  }
  const presets = [
    { planName: "Free Plan", currency: "$", price: "0", cycle: "Free" },
    { planName: "Pro Monthly", currency: "$", price: "20", cycle: "Monthly" },
    { planName: "Pro Yearly", currency: "$", price: "199", cycle: "Yearly" },
    { planName: "Team Monthly", currency: "$", price: "30", cycle: "Monthly" },
    { planName: "Business Yearly", currency: "$", price: "290", cycle: "Yearly" },
    { planName: "Enterprise", currency: "$", price: "499", cycle: "Yearly" }
  ];
  const nextPreset = presets[submitPricingPlans.length] || { planName: "", currency: "$", price: "", cycle: "Monthly" };
  submitPricingPlans.push({ ...nextPreset });
  renderSubmitPricingPlans();
}

function updateSubmitPlanField(idx, field, val) {
  if (!submitPricingPlans[idx]) return;
  submitPricingPlans[idx][field] = val;
}

function removeSubmitPricingPlan(idx) {
  if (submitPricingPlans.length <= 1) return;
  submitPricingPlans.splice(idx, 1);
  renderSubmitPricingPlans();
}

function buildCombinedPriceLabel(plans, fallbackPricing, manualLabel) {
  if (manualLabel && manualLabel.trim()) return manualLabel.trim();
  const valid = (plans || []).filter(pl => (pl.planName || "").trim() && sanitizeNumericPrice(pl.price) !== "");
  if (!valid.length) return fallbackPricing === "Free" ? "Free" : "Free / Paid";
  return valid
    .slice(0, 3)
    .map(pl => {
      const disp = formatPlanDisplayPrice(pl);
      const cyc = pl.cycle && pl.cycle !== "Free" ? `/${pl.cycle === "Monthly" ? "mo" : pl.cycle === "Yearly" ? "yr" : pl.cycle}` : "";
      return `${disp}${cyc}`;
    })
    .join(" • ");
}

function jumpToSubmitStep(targetStep) {
  if (targetStep < currentSubmitStep) {
    currentSubmitStep = targetStep;
    renderSubmitStepUI();
    syncStep3And4Previews();
  } else {
    goSubmitStep(targetStep);
  }
}

function goSubmitStep(nextStep) {
  if (nextStep > currentSubmitStep) {
    if (currentSubmitStep === 1 && !validateSubmitStep1()) return;
    if (currentSubmitStep === 2 && !validateSubmitStep2()) return;
  }
  currentSubmitStep = nextStep;
  renderSubmitStepUI();
  syncStep3And4Previews();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSubmitStepUI() {
  const stepTitles = {
    1: { title: "Submit Your Tool", sub: "List your SaaS, AI tool, or digital product on TechHub and reach a global audience.", badge: "Step 1 of 4<br><small>Basic Information</small>" },
    2: { title: "Submit Your Tool", sub: "Share your amazing tool with our community and reach a global audience.", badge: "Step 2 of 4<br><small>Product Details</small>" },
    3: { title: "Submit Your Tool", sub: "Share your amazing tool with our community and reach a global audience.", badge: "Step 3 of 4<br><small>Media &amp; Links</small>" },
    4: { title: "Submit Your Tool", sub: "Share your amazing tool with our community and reach a global audience.", badge: "Step 4 of 4<br><small>Review &amp; Submit</small>" }
  };

  const info = stepTitles[currentSubmitStep] || stepTitles[1];
  const titleEl = document.getElementById("submitBannerTitle");
  const subEl = document.getElementById("submitBannerSub");
  const badgeEl = document.getElementById("submitStepBadgeText");
  const perksEl = document.getElementById("submitHeroPerks");

  if (titleEl) titleEl.textContent = info.title;
  if (subEl) subEl.textContent = info.sub;
  if (badgeEl) badgeEl.innerHTML = info.badge;
  if (perksEl) perksEl.classList.toggle("hidden", currentSubmitStep > 1);

  document.querySelectorAll("#submitStepperBar .stepper-item").forEach(item => {
    const stepNum = parseInt(item.dataset.stepNav, 10);
    item.classList.remove("active", "completed");
    if (stepNum < currentSubmitStep) {
      item.classList.add("completed");
    } else if (stepNum === currentSubmitStep) {
      item.classList.add("active");
    }
  });

  document.querySelectorAll("#fourStepSubmitForm .submit-step-pane").forEach(pane => {
    const pNum = parseInt(pane.dataset.stepPane, 10);
    pane.classList.toggle("active", pNum === currentSubmitStep);
  });
}

function validateSubmitStep1() {
  ["err-s1-name", "err-s1-website", "err-s1-tagline", "err-s1-category", "err-s1-subcategory", "err-s1-logo"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = "";
  });
  ["s1Name", "s1Website", "s1Tagline", "s1Category", "s1Subcategory", "s1LogoUrl"].forEach(id => {
    document.getElementById(id)?.classList.remove("invalid");
  });

  const name = (document.getElementById("s1Name")?.value || "").trim();
  const website = (document.getElementById("s1Website")?.value || "").trim();
  const tagline = (document.getElementById("s1Tagline")?.value || "").trim();
  const category = (document.getElementById("s1Category")?.value || "").trim();
  const subcategory = (document.getElementById("s1Subcategory")?.value || "").trim();
  const logoUrl = (document.getElementById("s1LogoUrl")?.value || "").trim();

  let ok = true;
  if (name.length < 2) {
    document.getElementById("s1Name")?.classList.add("invalid");
    document.getElementById("err-s1-name").textContent = "Product / Tool name must be at least 2 characters.";
    ok = false;
  } else if (PRODUCTS.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    document.getElementById("s1Name")?.classList.add("invalid");
    document.getElementById("err-s1-name").textContent = "A product with this name is already listed.";
    ok = false;
  }

  if (!website || !isValidHttpUrl(website)) {
    document.getElementById("s1Website")?.classList.add("invalid");
    document.getElementById("err-s1-website").textContent = "Enter a valid website URL (https://...).";
    ok = false;
  }

  if (tagline.length < 10) {
    document.getElementById("s1Tagline")?.classList.add("invalid");
    document.getElementById("err-s1-tagline").textContent = "Short description must be at least 10 characters.";
    ok = false;
  }

  if (!category) {
    document.getElementById("s1Category")?.classList.add("invalid");
    document.getElementById("err-s1-category").textContent = "Please select a main category.";
    ok = false;
  }

  if (!subcategory) {
    document.getElementById("s1Subcategory")?.classList.add("invalid");
    document.getElementById("err-s1-subcategory").textContent = "Please select a subcategory.";
    ok = false;
  }

  if (logoUrl && !isValidHttpUrl(logoUrl)) {
    document.getElementById("s1LogoUrl")?.classList.add("invalid");
    document.getElementById("err-s1-logo").textContent = "Logo URL must be a valid https:// link.";
    ok = false;
  }

  if (!ok) showToast("Please complete required fields in Step 1.");
  return ok;
}

function validateSubmitStep2() {
  ["err-s2-description", "err-s2-features", "err-s2-pricing"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = "";
  });
  ["s2Description", "s2Pricing"].forEach(id => document.getElementById(id)?.classList.remove("invalid"));

  const desc = (document.getElementById("s2Description")?.value || "").trim();
  const pricing = (document.getElementById("s2Pricing")?.value || "").trim();
  let ok = true;

  if (desc.length < 20) {
    document.getElementById("s2Description")?.classList.add("invalid");
    document.getElementById("err-s2-description").textContent = "Please write at least 20 characters in detailed description.";
    ok = false;
  }

  if (!submitFeaturesList.length) {
    document.getElementById("err-s2-features").textContent = "Add at least 1 key feature.";
    ok = false;
  }

  if (!pricing) {
    document.getElementById("s2Pricing")?.classList.add("invalid");
    document.getElementById("err-s2-pricing").textContent = "Please choose a pricing model.";
    ok = false;
  }

  const errPlans = document.getElementById("err-s2-plans");
  if (errPlans) errPlans.textContent = "";
  const hasInvalidPrice = submitPricingPlans.some(pl => {
    const pStr = sanitizeNumericPrice(pl.price);
    return (pl.planName || "").trim() && (pStr === "" || isNaN(Number(pStr)));
  });
  const cleanedPlans = submitPricingPlans.filter(pl => (pl.planName || "").trim() && sanitizeNumericPrice(pl.price) !== "" && !isNaN(Number(sanitizeNumericPrice(pl.price))));
  if (hasInvalidPrice || !cleanedPlans.length) {
    if (errPlans) errPlans.textContent = "Har plan mein Plan Name aur valid numeric Price (e.g. 0, 20, 199) dalein.";
    ok = false;
  }

  if (!ok) showToast("Please complete required fields in Step 2.");
  return ok;
}

function renderSubmitFeaturesChips() {
  const box = document.getElementById("s2FeatureChips");
  if (!box) return;
  box.innerHTML = submitFeaturesList.map((feat, idx) => `
    <span class="feat-chip-pill">
      ✓ ${escapeHTML(feat)}
      <button type="button" onclick="removeSubmitFeature(${idx})" title="Remove">✕</button>
    </span>
  `).join("");
}

function removeSubmitFeature(idx) {
  submitFeaturesList.splice(idx, 1);
  renderSubmitFeaturesChips();
}

function wrapRichText(textareaId, marker) {
  const el = document.getElementById(textareaId);
  if (!el) return;
  const start = el.selectionStart || 0;
  const end = el.selectionEnd || 0;
  const selected = el.value.slice(start, end) || "text";
  el.value = el.value.slice(0, start) + marker + selected + marker + el.value.slice(end);
  el.dispatchEvent(new Event("input"));
}

function appendBulletLine(textareaId) {
  const el = document.getElementById(textareaId);
  if (!el) return;
  const prefix = el.value && !el.value.endsWith("\n") ? "\n" : "";
  el.value = el.value + prefix + "• ";
  el.dispatchEvent(new Event("input"));
}

function syncStep3And4Previews() {
  const name = (document.getElementById("s1Name")?.value || "").trim() || "Your Tool";
  const website = (document.getElementById("s1Website")?.value || "").trim() || "https://yourtool.com";
  const tagline = (document.getElementById("s1Tagline")?.value || "").trim() || "";
  const category = (document.getElementById("s1Category")?.value || "").trim() || "AI Tools";
  const subcategory = (document.getElementById("s1Subcategory")?.value || "").trim();
  const launchDate = (document.getElementById("s1LaunchDate")?.value || "").trim() || "Today";
  const description = (document.getElementById("s2Description")?.value || "").trim() || "";
  const bestFor = (document.getElementById("s2BestFor")?.value || "").trim() || "Creators & teams";
  const pricing = (document.getElementById("s2Pricing")?.value || "").trim() || "Free & Premium";
  const manualPriceLabel = (document.getElementById("s2PriceLabel")?.value || "").trim();
  const validPlans = submitPricingPlans
    .filter(pl => (pl.planName || "").trim() && sanitizeNumericPrice(pl.price) !== "")
    .map(pl => ({ ...pl, formattedPrice: formatPlanDisplayPrice(pl) }));
  const priceLabel = buildCombinedPriceLabel(validPlans, pricing, manualPriceLabel);
  const developer = (document.getElementById("s3Developer")?.value || "").trim() || "Community Creator";
  const finalLogo = uploadedLogoDataUrl || (document.getElementById("s1LogoUrl")?.value || "").trim();

  // Step 3 preview sync
  const s3Thumb = document.getElementById("s3LogoThumbWrap");
  const s3Status = document.getElementById("s3LogoStatusText");
  if (s3Thumb) {
    s3Thumb.innerHTML = finalLogo
      ? `<img src="${escapeHTML(finalLogo)}" class="s1-logo-thumb" alt="Logo" />`
      : `<div class="app-icon" style="background:#2563EB; width:56px; height:56px; font-size:1.4rem;">${escapeHTML(name[0].toUpperCase())}</div>`;
  }
  if (s3Status) s3Status.textContent = finalLogo ? "Custom logo attached" : `Letter badge (${name[0].toUpperCase()})`;

  const s3Count = document.getElementById("s3GalleryCount");
  const s3Row = document.getElementById("s3GalleryPreviewRow");
  if (s3Count) s3Count.textContent = `${uploadedGalleryImages.length} / 5`;
  if (s3Row) {
    s3Row.innerHTML = uploadedGalleryImages.map((src, idx) => `
      <div class="gallery-upload-item">
        <img src="${escapeHTML(src)}" alt="Preview ${idx + 1}" />
        <button type="button" class="gallery-remove-btn" onclick="removeUploadedGalleryImage(${idx}); syncStep3And4Previews();">✕</button>
      </div>
    `).join("") || `<small class="muted">No extra images added yet (up to 5 allowed).</small>`;
  }

  // Step 4 review card sync
  const revBox = document.getElementById("submitReviewSummaryBox");
  if (revBox) {
    const logoHtml = finalLogo
      ? `<img src="${escapeHTML(finalLogo)}" class="s1-logo-thumb" alt="${escapeHTML(name)}" />`
      : `<div class="app-icon" style="background:#2563EB; width:56px; height:56px; font-size:1.4rem;">${escapeHTML(name[0].toUpperCase())}</div>`;

    revBox.innerHTML = `
      <div class="review-top-header">
        <div style="display:flex; align-items:center; gap:12px;">
          ${logoHtml}
          <div>
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              <h3>${escapeHTML(name)}</h3>
              <span class="tag-pill">${escapeHTML(submitSelectedType)}</span>
            </div>
            <div class="text-btn" style="font-size:0.82rem;">${escapeHTML(website)}</div>
            <p class="muted" style="font-size:0.84rem; margin-top:4px;">${escapeHTML(tagline)}</p>
          </div>
        </div>
        <div class="review-meta-grid">
          <div><small class="muted">Category</small><strong>${escapeHTML(category)}${subcategory ? ` • ${escapeHTML(subcategory)}` : ""}</strong></div>
          <div><small class="muted">Pricing</small><strong>${escapeHTML(priceLabel)}</strong></div>
          <div><small class="muted">Launch Date</small><strong>${escapeHTML(launchDate)}</strong></div>
        </div>
      </div>

      <p class="muted" style="font-size:0.86rem; margin-top:12px;">${escapeHTML(description)}</p>

      ${validPlans.length ? `
        <div class="mt-12" style="padding-top:10px; border-top:1px solid #E2E8F0;">
          <strong style="font-size:0.84rem;">Pricing Plans (${validPlans.length})</strong>
          <div class="review-plans-strip mt-12">
            ${validPlans.map(pl => `
              <div class="review-plan-chip">
                <strong>${escapeHTML(pl.planName)}</strong>
                <span>${escapeHTML(pl.formattedPrice || formatPlanDisplayPrice(pl))} <small class="muted">(${escapeHTML(pl.cycle)})</small></span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ""}

      <div class="review-bottom-cols mt-12">
        <div>
          <strong style="font-size:0.84rem;">Key Features</strong>
          <ul class="review-check-list mt-12">
            ${submitFeaturesList.map(f => `<li>✓ ${escapeHTML(f)}</li>`).join("")}
          </ul>
        </div>
        <div>
          <strong style="font-size:0.84rem;">Images (${uploadedGalleryImages.length} / 5)</strong>
          <div class="review-thumbs-row mt-12">
            ${uploadedGalleryImages.map(src => `<img src="${escapeHTML(src)}" alt="Screenshot" />`).join("") || `<span class="muted" style="font-size:0.8rem;">None</span>`}
          </div>
        </div>
        <div>
          <strong style="font-size:0.84rem;">Company &amp; Audience</strong>
          <div class="muted" style="font-size:0.82rem; margin-top:6px;">
            <div><strong>${escapeHTML(developer)}</strong></div>
            <div>Best for: ${escapeHTML(bestFor)}</div>
          </div>
        </div>
      </div>
    `;
  }
}

function selectSubmitProductType(btn) {
  if (!btn) return;
  submitSelectedType = btn.dataset.ptype || btn.textContent.trim() || "SaaS";
  document.querySelectorAll("#s1TypePills .type-pill").forEach(b => b.classList.toggle("active", b === btn));
}

function setupFourStepSubmitEvents() {
  const s1Tag = document.getElementById("s1Tagline");
  const s1Cnt = document.getElementById("s1DescCounter");
  if (s1Tag && s1Cnt) {
    s1Tag.addEventListener("input", () => {
      s1Cnt.textContent = `${s1Tag.value.length}/160`;
    });
  }

  const s2Desc = document.getElementById("s2Description");
  const s2Cnt = document.getElementById("s2DescCounter");
  if (s2Desc && s2Cnt) {
    s2Desc.addEventListener("input", () => {
      s2Cnt.textContent = `${s2Desc.value.length}/2000`;
    });
  }

  document.querySelectorAll("#s1TypePills .type-pill").forEach(btn => {
    btn.addEventListener("click", () => selectSubmitProductType(btn));
  });

  const s1LogoFile = document.getElementById("s1LogoFile");
  const s1LogoUrl = document.getElementById("s1LogoUrl");
  if (s1LogoFile) {
    s1LogoFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      const errEl = document.getElementById("err-s1-logo");
      if (errEl) errEl.textContent = "";
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        if (errEl) errEl.textContent = "Only image files (PNG, JPG, WebP, SVG) are allowed.";
        s1LogoFile.value = "";
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        if (errEl) errEl.textContent = "Logo image must be under 2MB.";
        s1LogoFile.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        uploadedLogoDataUrl = reader.result;
        if (s1LogoUrl) s1LogoUrl.value = "";
        const img = document.getElementById("s1LogoPreviewImg");
        const ph = document.getElementById("s1LogoPlaceholderIcon");
        const lbl = document.getElementById("s1LogoLabel");
        if (img) { img.src = uploadedLogoDataUrl; img.classList.remove("hidden"); }
        if (ph) ph.classList.add("hidden");
        if (lbl) lbl.textContent = file.name;
        syncStep3And4Previews();
      };
      reader.readAsDataURL(file);
    });
  }

  if (s1LogoUrl) {
    s1LogoUrl.addEventListener("input", () => {
      const url = s1LogoUrl.value.trim();
      const img = document.getElementById("s1LogoPreviewImg");
      const ph = document.getElementById("s1LogoPlaceholderIcon");
      if (url) {
        uploadedLogoDataUrl = "";
        if (s1LogoFile) s1LogoFile.value = "";
        if (img) { img.src = url; img.classList.remove("hidden"); }
        if (ph) ph.classList.add("hidden");
      } else {
        if (img) img.classList.add("hidden");
        if (ph) ph.classList.remove("hidden");
      }
    });
  }

  const addFeatBtn = document.getElementById("s2AddFeatureBtn");
  const newFeatInput = document.getElementById("s2NewFeatureInput");
  if (addFeatBtn && newFeatInput) {
    addFeatBtn.addEventListener("click", () => {
      const val = newFeatInput.value.trim();
      if (!val) return;
      submitFeaturesList.push(val);
      newFeatInput.value = "";
      renderSubmitFeaturesChips();
    });
  }

  const s3GalleryFiles = document.getElementById("s3GalleryFiles");
  if (s3GalleryFiles) {
    s3GalleryFiles.addEventListener("change", (e) => {
      handleGalleryFilesChange(e);
      syncStep3And4Previews();
    });
  }

  const fourStepForm = document.getElementById("fourStepSubmitForm");
  if (fourStepForm) {
    fourStepForm.addEventListener("submit", handleFourStepFinalSubmit);
  }
}

function handleFourStepFinalSubmit(e) {
  e.preventDefault();
  const errConfirm = document.getElementById("err-s4-confirm");
  const checked = document.getElementById("s4ConfirmCheck")?.checked;
  if (errConfirm) errConfirm.textContent = "";
  if (!checked) {
    if (errConfirm) errConfirm.textContent = "Please confirm that you own or have authorization to submit this tool.";
    showToast("Please confirm authorization checkbox.");
    return;
  }

  if (!validateSubmitStep1()) { jumpToSubmitStep(1); return; }
  if (!validateSubmitStep2()) { jumpToSubmitStep(2); return; }

  const name = document.getElementById("s1Name").value.trim();
  const website = document.getElementById("s1Website").value.trim();
  const tagline = document.getElementById("s1Tagline").value.trim();
  const category = document.getElementById("s1Category").value.trim();
  const launchDate = (document.getElementById("s1LaunchDate").value || "").trim();
  const description = document.getElementById("s2Description").value.trim();
  const bestFor = (document.getElementById("s2BestFor").value || "").trim() || `Creators & ${submitSelectedType} users`;
  const pricing = document.getElementById("s2Pricing").value.trim();
  const cleanedPlans = submitPricingPlans
    .filter(pl => (pl.planName || "").trim() && sanitizeNumericPrice(pl.price) !== "" && !isNaN(Number(sanitizeNumericPrice(pl.price))))
    .slice(0, 6)
    .map(pl => ({
      planName: pl.planName.trim(),
      price: formatPlanDisplayPrice(pl),
      rawAmount: Number(sanitizeNumericPrice(pl.price)),
      currency: pl.currency || "$",
      cycle: pl.cycle || "Monthly"
    }));
  const priceLabel = buildCombinedPriceLabel(cleanedPlans, pricing, document.getElementById("s2PriceLabel").value);
  const developer = (document.getElementById("s3Developer").value || "").trim() || "Community Creator";
  const finalLogo = uploadedLogoDataUrl || (document.getElementById("s1LogoUrl")?.value || "").trim() || "";
  const colors = ["#2563EB", "#0284C7", "#059669", "#7C3AED", "#D97706", "#0F172A"];
  const pickedColor = colors[PRODUCTS.length % colors.length];
  const nowStr = launchDate || new Date().toLocaleString([], { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });

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
    pricingPlans: cleanedPlans,
    rating: 5.0,
    isUserSubmitted: true,
    addedAt: nowStr,
    tagline,
    description,
    features: [...submitFeaturesList],
    bestFor,
    website,
    images: [...uploadedGalleryImages],
    reviews: []
  };

  PRODUCTS.unshift(newProduct);
  saveProducts();
  pushNewToolToCloud(newProduct);

  document.getElementById("fourStepSubmitForm").reset();
  if (document.getElementById("s4ConfirmCheck")) document.getElementById("s4ConfirmCheck").checked = false;
  uploadedLogoDataUrl = "";
  uploadedGalleryImages = [];
  submitFeaturesList = ["AI-Powered", "Easy to Use", "Fast Performance"];
  submitPricingPlans = [{ planName: "Free Plan", currency: "$", price: "0", cycle: "Free" }];
  submitSelectedType = "SaaS";
  document.querySelectorAll("#s1TypePills .type-pill").forEach((b, i) => b.classList.toggle("active", i === 0));
  document.getElementById("s1LogoPreviewImg")?.classList.add("hidden");
  document.getElementById("s1LogoPlaceholderIcon")?.classList.remove("hidden");
  if (document.getElementById("s1LogoLabel")) document.getElementById("s1LogoLabel").textContent = "Upload Logo";

  refreshAllViews();
  showToast(`🎉 "${name}" published live on TechHub!`);
  openProductDetail(newProduct.id);
}

function openSubmitModalLegacy() {
  clearFormErrors();
  document.getElementById("submitModal")?.classList.remove("hidden");
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

  const galleryInput = document.getElementById("pGalleryFiles");
  if (galleryInput) {
    galleryInput.addEventListener("change", handleGalleryFilesChange);
  }

  document.getElementById("visitorProductForm").addEventListener("submit", handleVisitorProductSubmit);
}

function handleGalleryFilesChange(e) {
  const files = Array.from(e.target.files || []);
  const errGallery = document.getElementById("err-gallery");
  if (errGallery) errGallery.textContent = "";
  if (!files.length) return;

  const remainingSlots = 5 - uploadedGalleryImages.length;
  if (remainingSlots <= 0) {
    if (errGallery) errGallery.textContent = "Maximum 5 images allowed per tool.";
    e.target.value = "";
    return;
  }

  const chosen = files.slice(0, remainingSlots);
  if (files.length > remainingSlots && errGallery) {
    errGallery.textContent = `Only ${remainingSlots} more image(s) added (max 5 images allowed).`;
  }

  chosen.forEach(file => {
    if (!file.type.startsWith("image/")) {
      if (errGallery) errGallery.textContent = "Only image files (PNG, JPG, WebP, GIF) are allowed.";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      if (errGallery) errGallery.textContent = "Each image must be under 2MB.";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (uploadedGalleryImages.length < 5) {
        uploadedGalleryImages.push(reader.result);
        renderGalleryUploadPreviews();
      }
    };
    reader.readAsDataURL(file);
  });

  e.target.value = "";
}

function renderGalleryUploadPreviews() {
  const grid = document.getElementById("galleryUploadPreviewGrid");
  const badge = document.getElementById("galleryCountBadge");
  if (badge) badge.textContent = `${uploadedGalleryImages.length} / 5`;
  if (!grid) return;

  grid.innerHTML = uploadedGalleryImages.map((src, idx) => `
    <div class="gallery-upload-item">
      <img src="${escapeHTML(src)}" alt="Upload ${idx + 1}" />
      <button type="button" class="gallery-remove-btn" onclick="removeUploadedGalleryImage(${idx})" title="Remove image">✕</button>
    </div>
  `).join("");
}

function removeUploadedGalleryImage(idx) {
  uploadedGalleryImages.splice(idx, 1);
  renderGalleryUploadPreviews();
}

function openToolGalleryLightbox(productId, idx) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p || !Array.isArray(p.images) || !p.images.length) return;
  lightboxImagesList = p.images.map((src, i) => ({
    src,
    title: `${p.name} — Image ${i + 1} of ${p.images.length}`
  }));
  lightboxCurrentIdx = Math.min(Math.max(0, idx), lightboxImagesList.length - 1);
  updateLightboxView();
  document.getElementById("imageLightboxModal")?.classList.remove("hidden");
}

function stepLightbox(dir) {
  if (!lightboxImagesList.length) return;
  lightboxCurrentIdx = (lightboxCurrentIdx + dir + lightboxImagesList.length) % lightboxImagesList.length;
  updateLightboxView();
}

function updateLightboxView() {
  const item = lightboxImagesList[lightboxCurrentIdx];
  if (!item) return;
  const imgEl = document.getElementById("lightboxFullImg");
  const capEl = document.getElementById("lightboxCaption");
  const prevBtn = document.getElementById("lightboxPrevBtn");
  const nextBtn = document.getElementById("lightboxNextBtn");
  if (imgEl) imgEl.src = item.src;
  if (capEl) capEl.textContent = item.title;
  const multi = lightboxImagesList.length > 1;
  if (prevBtn) prevBtn.classList.toggle("hidden", !multi);
  if (nextBtn) nextBtn.classList.toggle("hidden", !multi);
}

function closeImageLightbox() {
  document.getElementById("imageLightboxModal")?.classList.add("hidden");
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
    pricingPlans: cleanedPlans,
    rating: 5.0,
    isUserSubmitted: true,
    addedAt: nowStr,
    tagline,
    description,
    features: featuresList,
    bestFor,
    website,
    images: [...uploadedGalleryImages],
    reviews: []
  };

  PRODUCTS.unshift(newProduct);
  saveProducts();
  pushNewToolToCloud(newProduct);

  e.target.reset();
  uploadedLogoDataUrl = "";
  uploadedGalleryImages = [];
  renderGalleryUploadPreviews();
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


// =========================================================================
// 6. SAAS ADVISER BLOG SECTION
// =========================================================================
const BLOG_ARTICLES = [
  {
    id: "ai-assistant-stack-2026",
    category: "AI Workflows",
    badge: "Featured Adviser Guide",
    title: "How to Choose Between ChatGPT, Claude, Gemini & Perplexity in 2026",
    excerpt: "A practical breakdown of where each AI assistant shines—from multi-file coding and deep document reasoning to live cited web research and Google Workspace.",
    author: "TechHub Editorial",
    date: "Nov 18, 2026",
    readTime: "5 min read",
    accentBg: "linear-gradient(135deg, #EEF2FF, #E0E7FF)",
    accentColor: "#4F46E5",
    relatedToolIds: ["chatgpt", "claude", "gemini", "perplexity"],
    paragraphs: [
      "Picking a single AI tool rarely fits every task anymore. Most builders and teams get better results by pairing a primary reasoning model with a dedicated research or workspace assistant.",
      "Use Claude when working with large documents, long technical context windows, or clean code refactoring. Use Perplexity when you need up-to-date answers backed by transparent web citations.",
      "Use Gemini if your daily workflow lives inside Gmail, Docs, and Drive, and use ChatGPT for versatile multimodal drafting, custom GPTs, and rapid prototyping."
    ],
    takeaways: [
      "Start with free tiers first before committing to monthly Pro plans.",
      "Match the tool to your bottleneck: research, long context, or daily docs.",
      "Use the Compare tab on TechHub to stack pricing and features side-by-side."
    ]
  },
  {
    id: "free-tier-saas-playbook",
    category: "Pricing & Free Tiers",
    badge: "Cost Optimization",
    title: "Maximizing Free & Freemium SaaS Tiers Before Paying Monthly",
    excerpt: "How solo founders, students, and small teams can run real projects on Free & Premium tools without paying for overlapping subscriptions.",
    author: "TechHub Adviser Team",
    date: "Nov 14, 2026",
    readTime: "4 min read",
    accentBg: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
    accentColor: "#059669",
    relatedToolIds: ["notion", "figma", "canva", "grammarly"],
    paragraphs: [
      "Many top-rated platforms—including Notion, Figma, Canva, and Grammarly—offer generous free tiers that cover early-stage workflows completely.",
      "Before upgrading a plan, audit whether you actually hit usage limits or if a quick workflow tweak solves the problem at zero cost."
    ],
    takeaways: [
      "Filter by Free in All Products to spot tools with free access.",
      "Avoid paying for two overlapping writing or design tools at once.",
      "Upgrade only when team collaboration or export limits slow you down."
    ]
  },
  {
    id: "ai-code-editor-workflow",
    category: "Stack Guides",
    badge: "Developer Stack",
    title: "Building Faster With AI Code Editors & Semantic Codebase Context",
    excerpt: "What separates modern AI-assisted coding editors from basic autocomplete, and how to keep generated code clean and maintainable.",
    author: "Sujal • TechHub",
    date: "Nov 10, 2026",
    readTime: "6 min read",
    accentBg: "linear-gradient(135deg, #F0F9FF, #E0F2FE)",
    accentColor: "#0284C7",
    relatedToolIds: ["cursor", "claude", "chatgpt"],
    paragraphs: [
      "Modern AI code editors like Cursor index your repository structure so suggestions understand how files, components, and state connect across your project.",
      "Always review diffs step-by-step, verify edge cases, and keep prompts scoped to clear modular tasks so your codebase stays easy to debug."
    ],
    takeaways: [
      "Give clear file/component context rather than vague one-line prompts.",
      "Test changes in small increments after every multi-file edit.",
      "Keep a second AI assistant handy for architecture and edge-case checks."
    ]
  },
  {
    id: "ui-design-to-frontend-handoff",
    category: "Stack Guides",
    badge: "Design & UI",
    title: "Smooth Design-to-Code Handoff: Wireframing to Clean UI Components",
    excerpt: "Practical tips for turning Figma layouts and Canva brand assets into responsive web interfaces without design drift.",
    author: "TechHub Editorial",
    date: "Nov 06, 2026",
    readTime: "4 min read",
    accentBg: "linear-gradient(135deg, #FFF1F2, #FFE4E6)",
    accentColor: "#E11D48",
    relatedToolIds: ["figma", "canva", "midjourney"],
    paragraphs: [
      "Consistent spacing, clear color tokens, and reusable components save hours during frontend implementation.",
      "Pair structured UI wireframes in Figma with brand visuals and custom artwork so developers don't have to guess layout proportions."
    ],
    takeaways: [
      "Standardize primary, surface, and border tokens early.",
      "Keep responsive mobile and desktop views aligned from day one.",
      "Save your favorite design tools in Saved Tools for quick reference."
    ]
  },
  {
    id: "research-and-writing-clarity",
    category: "AI Workflows",
    badge: "Research & Writing",
    title: "Fact-Checking AI Drafts & Polishing Everyday Writing",
    excerpt: "Combine cited search engines with grammar and tone assistants so your docs, emails, and reports stay accurate and sharp.",
    author: "TechHub Adviser Team",
    date: "Nov 02, 2026",
    readTime: "4 min read",
    accentBg: "linear-gradient(135deg, #FFF7ED, #FFEDD5)",
    accentColor: "#EA580C",
    relatedToolIds: ["perplexity", "grammarly", "notion"],
    paragraphs: [
      "Fast drafting is only half the job—verifying sources and tightening tone is what makes writing trustworthy.",
      "Check source links on factual claims, organize notes in a structured workspace, and run a final clarity pass before publishing."
    ],
    takeaways: [
      "Verify numbers, dates, and links directly from cited sources.",
      "Keep rough notes separate from final published docs.",
      "Use AI Finder to discover tools tailored to your exact task."
    ]
  },
  {
    id: "evaluating-new-saas-tools",
    category: "Pricing & Free Tiers",
    badge: "Buyer Checklist",
    title: "A 5-Point Checklist Before Adding Any New SaaS Tool to Your Stack",
    excerpt: "Avoid tool bloat with a simple framework covering real use cases, pricing transparency, workflow fit, and alternatives.",
    author: "TechHub Editorial",
    date: "Oct 28, 2026",
    readTime: "5 min read",
    accentBg: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
    accentColor: "#7C3AED",
    relatedToolIds: ["notion", "cursor", "gemini"],
    paragraphs: [
      "Adding every shiny new app creates friction instead of speed. Every new tool should replace an older workaround or save measurable time each week.",
      "Check alternatives in the same category and test with a real project task before making it part of your permanent toolkit."
    ],
    takeaways: [
      "Define the exact problem the tool solves before signing up.",
      "Compare at least 2–3 alternatives in the same category.",
      "Retire tools that aren't used actively after a two-week trial."
    ]
  }
];

let activeBlogCategory = "ALL";

function setupBlogEvents() {
  document.querySelectorAll("#blogCategoryPills .blog-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      activeBlogCategory = btn.dataset.blogCat || "ALL";
      document.querySelectorAll("#blogCategoryPills .blog-pill").forEach(b => {
        b.classList.toggle("active", b === btn);
      });
      renderBlogView();
    });
  });

  const blogSearch = document.getElementById("blogSearchInput");
  if (blogSearch) {
    blogSearch.addEventListener("input", renderBlogView);
  }
}

function renderBlogView() {
  const featWrap = document.getElementById("blogFeaturedArticleWrap");
  const gridEl = document.getElementById("blogArticlesGrid");
  const countEl = document.getElementById("blogArticlesCountText");
  if (!gridEl) return;

  const q = (document.getElementById("blogSearchInput")?.value || "").trim().toLowerCase();

  const filtered = BLOG_ARTICLES.filter(art => {
    const matchCat = activeBlogCategory === "ALL" || art.category === activeBlogCategory;
    const matchQuery = !q ||
      art.title.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.category.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? "guide" : "guides"}`;
  }

  if (featWrap) {
    const featured = filtered[0] || BLOG_ARTICLES[0];
    featWrap.innerHTML = filtered.length ? `
      <div class="blog-featured-card">
        <div class="blog-featured-badge-row">
          <span class="badge-trending">${escapeHTML(featured.badge)}</span>
          <span class="tag-pill">${escapeHTML(featured.category)}</span>
          <span class="muted" style="font-size:0.78rem;">${escapeHTML(featured.date)} • ${escapeHTML(featured.readTime)}</span>
        </div>
        <h2>${escapeHTML(featured.title)}</h2>
        <p class="blog-featured-excerpt">${escapeHTML(featured.excerpt)}</p>
        <div class="blog-featured-footer">
          <span class="muted" style="font-size:0.82rem;">By <strong>${escapeHTML(featured.author)}</strong></span>
          <button type="button" class="btn btn-primary" onclick="openBlogArticle('${featured.id}')">Read Full Guide →</button>
        </div>
      </div>
    ` : "";
  }

  gridEl.innerHTML = filtered.length
    ? filtered.map(art => `
      <article class="blog-card" onclick="openBlogArticle('${art.id}')">
        <div>
          <div class="blog-card-top">
            <span class="tag-pill" style="background:${art.accentBg}; color:${art.accentColor};">${escapeHTML(art.category)}</span>
            <span class="muted" style="font-size:0.76rem;">${escapeHTML(art.readTime)}</span>
          </div>
          <h3>${escapeHTML(art.title)}</h3>
          <p class="blog-card-excerpt">${escapeHTML(art.excerpt)}</p>
        </div>
        <div class="blog-card-footer">
          <span class="muted" style="font-size:0.78rem;">${escapeHTML(art.date)} • ${escapeHTML(art.author)}</span>
          <span class="text-btn">Read →</span>
        </div>
      </article>
    `).join("")
    : `<div class="card-box" style="grid-column:1/-1; text-align:center;">No blog articles match your filter.</div>`;
}

function openBlogArticle(articleId) {
  const art = BLOG_ARTICLES.find(a => a.id === articleId);
  if (!art) return;

  document.getElementById("blogModalCat").textContent = art.category;
  document.getElementById("blogModalTitle").textContent = art.title;
  document.getElementById("blogModalMeta").textContent = `${art.author} • ${art.date} • ${art.readTime}`;

  const bodyEl = document.getElementById("blogModalBody");
  bodyEl.innerHTML = `
    ${art.paragraphs.map(para => `<p>${escapeHTML(para)}</p>`).join("")}
    <div class="blog-takeaways-box">
      <h4>Key Takeaways</h4>
      <ul>
        ${art.takeaways.map(t => `<li>${escapeHTML(t)}</li>`).join("")}
      </ul>
    </div>
  `;

  const relTools = (art.relatedToolIds || [])
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean);

  const relEl = document.getElementById("blogModalRelatedTools");
  relEl.innerHTML = relTools.length ? `
    <h4 style="margin-bottom:10px;">Related Tools in Directory</h4>
    <div class="similar-row-strip">
      ${relTools.map(p => `
        <div class="similar-row-item" onclick="closeBlogReader(); openProductDetail('${p.id}');">
          ${renderLogoHTML(p, 32, "0.88rem")}
          <div class="similar-row-text">
            <strong>${escapeHTML(p.name)}</strong>
            <small>${escapeHTML(p.pricing)}</small>
          </div>
          <span class="similar-row-go">›</span>
        </div>
      `).join("")}
    </div>
  ` : "";

  document.getElementById("blogReaderModal")?.classList.remove("hidden");
}

function closeBlogReader() {
  document.getElementById("blogReaderModal")?.classList.add("hidden");
}
