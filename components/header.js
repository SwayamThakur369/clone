/**
 * Shared Header Component for Sparktech Processes LLP
 * Injected dynamically to ensure consistency across all pages.
 */

const headerHTML = `
  <div class="h-1 bg-gradient-to-r from-sky-500 to-lime-500"></div>
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <a class="flex items-center gap-3" href="/">
        <img alt="Sparktech Processes LLP" width="160" height="50" decoding="async" class="h-12 w-auto" src="/images/Sparktech logo.png" />
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-10">
        <a class="nav-link text-sm font-medium tracking-wide transition-colors text-gray-600 hover:text-gray-900" href="/">Home</a>
        <a class="nav-link text-sm font-medium tracking-wide transition-colors text-gray-600 hover:text-gray-900" href="/about/">About</a>
        <div class="relative nav-item-services" id="services-dropdown-wrapper">
          <button id="services-btn" class="text-sm font-medium tracking-wide transition-colors flex items-center gap-1 text-gray-600 hover:text-gray-900">
            Services
            <svg class="dropdown-icon w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="dropdown-menu absolute left-0 top-full pt-4 opacity-0 invisible transition-all duration-200">
            <div class="w-64 rounded-xl border border-gray-100 bg-white shadow-2xl py-2">
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/solvent-extraction/">Solvent Extraction</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/oil-refinery/">Oil Refinery</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/fractionation/">Fractionation</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/hydrogenation/">Hydrogenation</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/interesterification/">Interesterification</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/filtration/">Filtration</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/deodorization/">Deodorization</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/bakery-shortening/">Bakery Shortening &amp; Margarine</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/lecithin/">Lecithin Plant</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/bleaching/">Bleaching Plant</a>
              <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-600" href="/services/dewaxing/">De-Waxing / Winterization</a>
              <div class="my-2 border-t border-gray-100"></div>
              <a class="block px-4 py-2 text-sm font-medium text-sky-600 hover:bg-gray-50" href="/services/">View All Services</a>
            </div>
          </div>
        </div>
        <a class="nav-link text-sm font-medium tracking-wide transition-colors text-gray-600 hover:text-gray-900" href="/technologies/">Technologies</a>
        <a class="nav-link text-sm font-medium tracking-wide transition-colors text-gray-600 hover:text-gray-900" href="/gallery/">Gallery</a>
        <a class="nav-link text-sm font-medium tracking-wide transition-colors text-gray-600 hover:text-gray-900" href="/contact/">Contact</a>
      </nav>

      <!-- Desktop Contact & Quote -->
      <div class="hidden lg:flex items-center gap-6">
        <a href="tel:+919876543210" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          +91 98765 43210
        </a>
        <a class="px-6 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide rounded-lg hover:bg-sky-600 transition-colors" href="/contact/">Get Quote</a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="lg:hidden p-2 text-gray-600 hover:text-sky-600 transition-colors" id="mobile-menu-btn">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path id="menu-icon-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu Drawer -->
  <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)]">
    <div class="px-6 py-8 space-y-6">
      <nav class="flex flex-col gap-6">
        <a class="nav-link text-lg font-medium text-gray-600" href="/">Home</a>
        <a class="nav-link text-lg font-medium text-gray-600" href="/about/">About</a>
        <div class="space-y-4">
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">Services</p>
          <div class="grid grid-cols-1 gap-3 pl-2">
            <a class="text-gray-600 hover:text-sky-600 transition-colors" href="/services/solvent-extraction/">Solvent Extraction</a>
            <a class="text-gray-600 hover:text-sky-600 transition-colors" href="/services/oil-refinery/">Oil Refinery</a>
            <a class="text-gray-600 hover:text-sky-600 transition-colors" href="/services/">View All Services</a>
          </div>
        </div>
        <a class="nav-link text-lg font-medium text-gray-600" href="/technologies/">Technologies</a>
        <a class="nav-link text-lg font-medium text-gray-600" href="/gallery/">Gallery</a>
        <a class="nav-link text-lg font-medium text-gray-600" href="/contact/">Contact</a>
      </nav>
      <div class="pt-6 border-t border-gray-100 space-y-4">
        <a href="tel:+919876543210" class="flex items-center gap-3 text-gray-600">
          <svg class="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          <span class="font-medium">+91 98765 43210</span>
        </a>
        <a class="block w-full text-center py-4 bg-gray-900 text-white font-bold rounded-xl" href="/contact/">Get a Quote</a>
      </div>
    </div>
  </div>
`;

function injectHeader() {
  const headerContainer = document.getElementById('global-header');
  if (headerContainer) {
    // Inject essential styles for dropdown and mobile menu
    if (!document.getElementById('header-styles')) {
      const style = document.createElement('style');
      style.id = 'header-styles';
      style.textContent = `
        .nav-item-services.active .dropdown-menu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
          pointer-events: auto !important;
        }
        .nav-item-services.active .dropdown-icon {
          transform: rotate(180deg);
        }
        .dropdown-menu {
          transform: translateY(10px);
          pointer-events: none;
        }
        #mobile-menu:not(.hidden) {
          display: block !important;
        }
        .active-nav-link {
          color: #0284c7 !important; /* sky-600 */
        }
      `;
      document.head.appendChild(style);
    }

    headerContainer.innerHTML = headerHTML;
    headerContainer.className = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 shadow-sm";
    
    // Set Active Link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    const servicesBtn = document.getElementById('services-btn');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      // Precise path matching or starting with (excluding root)
      if (currentPath === href || (href !== '/' && (currentPath === href || currentPath.startsWith(href)))) {
        link.classList.remove('text-gray-600');
        link.classList.add('text-sky-600', 'active-nav-link');
      }
    });

    // Special case for Services button (since it's a button, not a .nav-link)
    if (servicesBtn && (currentPath.includes('/services/') || currentPath === '/services' || currentPath === '/services/')) {
      servicesBtn.classList.remove('text-gray-600');
      servicesBtn.classList.add('text-sky-600', 'active-nav-link');
    }

    initDropdown();
  }
}

function initDropdown() {
  const servicesBtn = document.getElementById("services-btn");
  const servicesWrapper = document.getElementById("services-dropdown-wrapper");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconPath = document.getElementById("menu-icon-path");

  // Services Dropdown (Desktop)
  if (servicesBtn && servicesWrapper) {
    servicesBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      servicesWrapper.classList.toggle("active");
    });
  }

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      mobileMenu.classList.toggle("hidden");
      
      // Toggle icon between Hamburger and X
      if (mobileMenu.classList.contains("hidden")) {
        menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
      } else {
        menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
      }
    });
  }

  // Global Close Listeners
  document.addEventListener("click", (event) => {
    // Close desktop dropdown
    if (servicesWrapper && !servicesWrapper.contains(event.target)) {
      servicesWrapper.classList.remove("active");
    }
    // Close mobile menu
    if (mobileMenu && !mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      mobileMenu.classList.add("hidden");
      if (menuIconPath) menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    }
  });

  // Close on ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (servicesWrapper) servicesWrapper.classList.remove("active");
      if (mobileMenu) {
        mobileMenu.classList.add("hidden");
        if (menuIconPath) menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
      }
    }
  });
}

// Ensure injection happens on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectHeader);
} else {
  injectHeader();
}
