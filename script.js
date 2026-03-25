const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target || 0);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 48));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target.toString();
          clearInterval(interval);
        } else {
          el.textContent = current.toString();
        }
      }, 22);
      observer.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".counter").forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Services Dropdown Click Logic
const servicesBtn = document.getElementById("services-btn");
const servicesWrapper = document.getElementById("services-dropdown-wrapper");

if (servicesBtn && servicesWrapper) {
  servicesBtn.addEventListener("click", (event) => {
    servicesWrapper.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (!servicesWrapper.contains(event.target)) {
      servicesWrapper.classList.remove("active");
    }
  });
}
