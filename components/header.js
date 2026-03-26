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
      <div class="hidden lg:flex items-center gap-6">
        <a href="tel:+919876543210" class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          +91 98765 43210
        </a>
        <a class="px-6 py-3 bg-gray-900 text-white text-sm font-medium tracking-wide rounded-lg hover:bg-sky-600 transition-colors" href="/contact/">Get Quote</a>
      </div>
      <button class="lg:hidden p-2" id="mobile-menu-btn">
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
`;

function injectHeader() {
  const headerContainer = document.getElementById('global-header');
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
    headerContainer.className = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 shadow-sm";
    
    // Set Active Link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (currentPath === href || (href !== '/' && currentPath.startsWith(href))) {
        link.classList.remove('text-gray-600');
        link.classList.add('text-sky-600');
      }
    });

    // Re-initialize Dropdown Logic (if script.js is loaded later or already)
    initDropdown();
  }
}

function initDropdown() {
  const servicesBtn = document.getElementById("services-btn");
  const servicesWrapper = document.getElementById("services-dropdown-wrapper");

  if (servicesBtn && servicesWrapper) {
    servicesBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      servicesWrapper.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      if (!servicesWrapper.contains(event.target)) {
        servicesWrapper.classList.remove("active");
      }
    });
  }
}

// Ensure injection happens on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectHeader);
} else {
  injectHeader();
}
